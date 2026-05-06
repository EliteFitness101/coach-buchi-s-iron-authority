import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { ngn } from "@/data/products";

const steps = [
  { q: "What's your goal?", opts: ["Build muscle","Lose fat","Strength & power","General wellness"] },
  { q: "Where will you train?", opts: ["Bedroom corner","Spare room","Garage","Outdoor / rooftop"] },
  { q: "Experience level?", opts: ["Beginner","Intermediate","Advanced","Iron Authority"] },
  { q: "Budget range?", opts: ["Under ₦200k","₦200k – ₦500k","₦500k – ₦1M","₦1M+"] },
];

const bundles = [
  { name: "Starter Forge", price: 185000, items: ["Resistance Kit","20kg Dumbbell pair","Mat"] },
  { name: "Authority Home Gym", price: 720000, items: ["30kg Hex Dumbbells","Adjustable Bench","Resistance Kit","3 months Elite Coaching"] },
  { name: "Iron Empire", price: 1450000, items: ["Full Dumbbell rack 15-50kg","Olympic Barbell + plates","Pro Bench","12 months Iron Authority membership"] },
];

export default function BuildMyGym() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= steps.length;

  const choose = (o: string) => {
    setAnswers([...answers, o]);
    setStep(step + 1);
  };

  return (
    <Layout>
      <section className="section-pad container-x max-w-4xl">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">AI Gym Builder</p>
        <h1 className="font-display text-4xl md:text-5xl mb-3">Build your <span className="text-gold-gradient">Iron Sanctuary.</span></h1>
        <p className="text-muted-foreground mb-10">Answer 4 questions. We'll architect a bundle engineered for your goals, space and budget.</p>

        {!done ? (
          <div className="glass p-8 md:p-12 rounded-sm">
            <div className="flex gap-2 mb-8">
              {steps.map((_, i) => (
                <div key={i} className={`h-1 flex-1 ${i <= step ? "bg-primary" : "bg-muted"}`} />
              ))}
            </div>
            <h2 className="font-display text-2xl md:text-3xl mb-6">{steps[step].q}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {steps[step].opts.map(o => (
                <button key={o} onClick={() => choose(o)}
                  className="glass p-5 text-left hover:border-primary hover:gold-glow transition-all rounded-sm">
                  {o} <ArrowRight className="inline ml-2 w-4 h-4 text-primary" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="glass p-6 mb-8 rounded-sm">
              <h3 className="font-display text-2xl mb-2 text-primary">Your Recommendations</h3>
              <p className="text-sm text-muted-foreground">Tailored for: {answers.join(" · ")}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {bundles.map((b, i) => (
                <div key={b.name} className={`glass p-7 rounded-sm ${i === 1 ? "gold-glow border-primary" : ""}`}>
                  {i === 1 && <span className="text-xs bg-primary text-primary-foreground px-2 py-1 font-bold uppercase mb-3 inline-block">Best Match</span>}
                  <h3 className="font-display text-2xl">{b.name}</h3>
                  <div className="text-3xl font-display text-primary my-4">{ngn(b.price)}</div>
                  <ul className="space-y-2 mb-6 text-sm">
                    {b.items.map(it => <li key={it} className="flex gap-2"><Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />{it}</li>)}
                  </ul>
                  <Button className="w-full bg-gradient-gold text-primary-foreground font-semibold">Build This Gym</Button>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="ghost" onClick={() => { setStep(0); setAnswers([]); }} className="text-primary">Restart Quiz</Button>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
}
