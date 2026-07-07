import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";
import { ngn } from "@/data/products";

const tiers = [
  { name: "Starter", price: 9500, period: "/mo", desc: "Begin the discipline.",
    features: ["ChatB2K™ workout protocols","NaijaFit™ meal plan library","Progress tracking","Community access"] },
  { name: "Elite", price: 24500, period: "/mo", featured: true, desc: "The standard choice.",
    features: ["Everything in Starter","Personalized weekly plans","Video workouts (HD)","Priority WhatsApp support","Monthly check-in call"] },
  { name: "Iron Authority", price: 89000, period: "/mo", desc: "Inner circle.",
    features: ["Everything in Elite","1-on-1 with Coach Buchi","Custom hardware bundle","Founder drops & merch","Private events access"] },
];

export default function Membership() {
  return (
    <Layout>
      <section className="section-pad container-x">
        <div className="text-center mb-14">
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">Membership</p>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Choose your <span className="text-gold-gradient">altitude.</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Three tiers. One ecosystem. Cancel anytime — but you won't want to.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map(t => (
            <div key={t.name} className={`glass p-8 rounded-sm relative ${t.featured ? "gold-glow border-primary scale-105" : ""}`}>
              {t.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground text-xs px-4 py-1 font-bold uppercase">Most Popular</span>}
              {t.name === "Iron Authority" && <Crown className="w-6 h-6 text-primary mb-3" />}
              <h3 className="font-display text-3xl mb-2">{t.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{t.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-display text-primary">{ngn(t.price)}</span>
                <span className="text-muted-foreground">{t.period}</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {t.features.map(f => <li key={f} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{f}</li>)}
              </ul>
              <Button className={`w-full font-semibold ${t.featured ? "bg-gradient-gold text-primary-foreground" : "border-gold"}`} variant={t.featured ? "default" : "outline"}>
                Start {t.name}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
