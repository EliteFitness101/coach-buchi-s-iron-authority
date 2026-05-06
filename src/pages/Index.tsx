import { Link } from "react-router-dom";
import { ArrowRight, Dumbbell, Flame, Trophy, Zap, MapPin, Quote, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Counter from "@/components/Counter";
import Countdown from "@/components/Countdown";
import { products } from "@/data/products";
import hero from "@/assets/hero-athlete.jpg";
import coach from "@/assets/coach-buchi.jpg";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={hero} alt="Coach Buchi athlete training in luxury gym" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="container-x relative px-4 md:px-8 py-20 animate-fade-up">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary border border-gold px-3 py-1 mb-6">
            Iron Authority · Est. Lagos
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl">
            Forge the body of an <span className="text-gold-gradient">Iron Authority.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl">
            Nigeria's first luxury fitness ecosystem. Premium cast iron home gyms, elite coaching by Coach Buchi, AI-driven protocols and Naija meal plans — all in one disciplined platform.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold gold-glow">
              <Link to="/build-my-gym">Build My Gym <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold text-foreground hover:bg-primary hover:text-primary-foreground">
              <Link to="/membership">Join the Elite</Link>
            </Button>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {[
              ["12,400+", "Athletes Trained"],
              ["98%", "5-Star Reviews"],
              ["3 Cities", "Nationwide Delivery"],
            ].map(([n, l]) => (
              <div key={l}><div className="text-2xl font-display text-primary">{n}</div><div className="text-muted-foreground uppercase tracking-wider text-xs">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-gold bg-card/50 py-4 overflow-hidden">
        <div className="flex gap-12 animate-shimmer">
          <div className="container-x px-4 md:px-8 flex flex-wrap justify-around gap-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span>Free Lagos delivery over ₦200k</span>
            <span className="text-primary">· 5-year iron warranty ·</span>
            <span>Pay in 4 with installments</span>
            <span className="text-primary">· WhatsApp support ·</span>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <section className="section-pad container-x">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">The Hardware</p>
            <h2 className="font-display text-4xl md:text-5xl">Built once. Built forever.</h2>
          </div>
          <Button asChild variant="ghost" className="text-primary hidden md:inline-flex">
            <Link to="/shop">View all <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* COACH BUCHI */}
      <section className="section-pad bg-card/40 border-y border-gold">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img src={coach} alt="Coach Buchi" loading="lazy" width={1024} height={1024} className="rounded-sm gold-glow" />
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">Meet Coach Buchi</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">Discipline is the new luxury.</h2>
            <p className="text-foreground/80 mb-4">Nigeria's most-requested transformation coach. 12,000+ athletes coached. Featured in GQ Africa & BellaNaija.</p>
            <p className="text-muted-foreground mb-6">My promise: 90 days of structured discipline and you will not recognize the man — or woman — in the mirror. No shortcuts. No noise. Just iron, protocol, and proof.</p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[["12K+","Clients"],["98%","Retention"],["5★","Rated"]].map(([n,l]) => (
                <div key={l} className="border border-gold p-4 text-center"><div className="text-2xl font-display text-primary">{n}</div><div className="text-xs text-muted-foreground uppercase">{l}</div></div>
              ))}
            </div>
            <Button asChild className="bg-gradient-gold text-primary-foreground font-semibold">
              <Link to="/about">Read Coach's Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="section-pad container-x">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-3">One platform. <span className="text-gold-gradient">Every advantage.</span></h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">From iron to insight — the ResoFit ecosystem powers your transformation, your business, and your tribe.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Dumbbell, title: "Hardware Store", desc: "Cast iron dumbbells, barbells, benches & bundles. Built in Nigeria, shipped nationwide." },
            { icon: Flame, title: "Wellness SaaS", desc: "Personal workout protocols, Nigerian meal plans, AI recommendations and goal tracking." },
            { icon: Zap, title: "Nownowgym App", desc: "Tracker, video workouts, water log, loyalty rewards and instant QR purchases." },
            { icon: Trophy, title: "Affiliate Engine", desc: "Referral codes, leaderboards, gym partnerships and influencer payouts." },
            { icon: ShieldCheck, title: "Iron Authority Tier", desc: "Private coaching, founder access, exclusive drops and 1-on-1 protocols." },
            { icon: MapPin, title: "Multi-City Logistics", desc: "Lagos · Abuja · Port Harcourt warehouses with same-day dispatch options." },
          ].map(m => (
            <div key={m.title} className="glass p-7 rounded-sm hover:gold-glow transition-all">
              <m.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-xl mb-2">{m.title}</h3>
              <p className="text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-pad bg-card/40 border-y border-gold">
        <div className="container-x">
          <h2 className="font-display text-4xl md:text-5xl text-center mb-12">Transformations. <span className="text-gold-gradient">Receipts.</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tunde A.", city: "Lagos", quote: "Lost 18kg in 5 months. The iron set + Coach's protocol changed my life.", result: "-18kg" },
              { name: "Amara O.", city: "Abuja", quote: "From skinny to 68kg of lean muscle. Naija meal plan was the unlock.", result: "+12kg lean" },
              { name: "Chuka E.", city: "Port Harcourt", quote: "Built my home gym with the bundle. Haven't paid a gym subscription since.", result: "Home Gym Owner" },
            ].map(t => (
              <div key={t.name} className="glass p-7 rounded-sm">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground/90 mb-6">"{t.quote}"</p>
                <div className="flex items-center justify-between border-t border-gold pt-4">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.city}</div>
                  </div>
                  <div className="text-primary font-display text-lg">{t.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section-pad container-x text-center">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">By The Numbers</p>
        <h2 className="font-display text-4xl md:text-5xl mb-12">A movement, measured.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: 12400, l: "Athletes" },
            { n: 850, l: "Home Gyms Built", suffix: "+" },
            { n: 320, l: "Million Naira Moved", prefix: "₦", suffix: "M" },
            { n: 98, l: "Satisfaction", suffix: "%" },
          ].map((s, i) => (
            <div key={i}>
              <div className="font-display text-5xl text-gold-gradient font-bold">
                <Counter end={s.n} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER CTA */}
      <section className="section-pad container-x">
        <div className="glass rounded-sm p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-gold opacity-5" />
          <div className="relative">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">Founder's Drop · Limited</p>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Iron Authority Bundle — <span className="text-gold-gradient">Save ₦80k</span></h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Dumbbells + Bench + Barbell + 3 months Elite Coaching. Stock ends when the timer hits zero.</p>
            <div className="flex justify-center mb-6"><Countdown hours={23} /></div>
            <Button asChild size="lg" className="bg-gradient-gold text-primary-foreground font-semibold gold-glow">
              <Link to="/build-my-gym">Claim My Bundle <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
