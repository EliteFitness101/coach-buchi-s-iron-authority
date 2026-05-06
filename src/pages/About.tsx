import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import coach from "@/assets/coach-buchi.jpg";

export default function About() {
  return (
    <Layout>
      <section className="section-pad container-x grid md:grid-cols-2 gap-12 items-center">
        <img src={coach} alt="Coach Buchi" loading="lazy" width={1024} height={1024} className="rounded-sm gold-glow" />
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">The Founder</p>
          <h1 className="font-display text-5xl mb-6">Coach Buchi.</h1>
          <p className="text-foreground/80 mb-4">Former national-level athlete turned Nigeria's most-trusted transformation coach. Trained over 12,000 clients across Lagos, Abuja and Port Harcourt.</p>
          <p className="text-muted-foreground mb-4">"I built ResoFit because I was tired of seeing Nigerians pay foreign brands premium prices for inferior iron. We make better. We coach harder. We win bigger."</p>
          <p className="text-muted-foreground mb-8">— Buchi, Founder & Head Coach</p>
          <Button asChild className="bg-gradient-gold text-primary-foreground font-semibold"><Link to="/membership">Train with Buchi</Link></Button>
        </div>
      </section>

      <section className="section-pad bg-card/40 border-y border-gold">
        <div className="container-x">
          <h2 className="font-display text-4xl text-center mb-12">Our <span className="text-gold-gradient">code.</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Discipline","No shortcuts. No noise. Daily action over fleeting motivation."],
              ["Quality","Cast iron, not plastic. Real coaching, not gimmicks."],
              ["Naija First","Built here. For us. Priced for the Nigerian elite — not exported."],
            ].map(([t,d]) => (
              <div key={t} className="glass p-7"><h3 className="font-display text-2xl text-primary mb-2">{t}</h3><p className="text-muted-foreground">{d}</p></div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
