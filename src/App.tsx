import { Link } from "react-router-dom";
import {
  ArrowRight,
  Dumbbell,
  Flame,
  Trophy,
  Zap,
  MapPin,
  Quote,
  ShieldCheck,
} from "lucide-react";

import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import Counter from "@/components/Counter";
import Countdown from "@/components/Countdown";
import { products } from "@/data/products";

import hero from "@/assets/hero-athlete.jpg";
import coach from "@/assets/coach-buchi.jpg";

import { trackEvent, getAttribution, initAttribution } from "@/lib/attribution";

// Ensure attribution is initialized (safe even if repeated)
initAttribution();

export default function Home() {
  const openAssessment = () => {
    const attribution = getAttribution();

    // 🔥 OS LEVEL TRACKING LAYER
    trackEvent("chatb2k_assessment_click", {
      source: "resofit_home",
      destination: "reso-fit.lovable.app",
      attribution,
    });

    // Meta Pixel (future-ready)
    (window as any).fbq?.("track", "Lead", {
      content_name: "ChatB2K Assessment",
    });

    // Google Analytics (GA4)
    (window as any).gtag?.("event", "chatb2k_click", {
      source: "resofit_home",
    });

    // Redirect to funnel
    window.open(
      "https://reso-fit.lovable.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={hero}
          alt="Coach Buchi athlete training in luxury gym"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />

        <div className="container-x relative px-4 md:px-8 py-20 animate-fade-up">
          <span className="inline-block text-xs uppercase tracking-[0.3em] text-primary border border-gold px-3 py-1 mb-6">
            Iron Authority · Est. Lagos
          </span>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-4xl">
            Forge the body of an{" "}
            <span className="text-gold-gradient">Iron Authority.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl">
            Nigeria's first luxury fitness ecosystem. Premium cast iron home gyms,
            elite coaching by Coach Buchi, AI-driven protocols and Naija meal plans.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              onClick={openAssessment}
              size="lg"
              className="bg-gradient-gold text-primary-foreground font-semibold gold-glow"
            >
              Begin ChatB2K™ Assessment
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link to="/membership">Join the Elite</Link>
            </Button>
          </div>

          {/* STATS */}
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {[
              ["12,400+", "Athletes Trained"],
              ["98%", "5-Star Reviews"],
              ["3 Cities", "Nationwide Delivery"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="text-2xl font-display text-primary">{n}</div>
                <div className="text-muted-foreground uppercase tracking-wider text-xs">
                  {l}
                </div>
              </div>
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
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">
              The Hardware
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              Built once. Built forever.
            </h2>
          </div>

          <Button asChild variant="ghost" className="text-primary hidden md:inline-flex">
            <Link to="/shop">
              View all <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      {/* COACH BUCHI */}
      <section className="section-pad bg-card/40 border-y border-gold">
        <div className="container-x grid md:grid-cols-2 gap-12 items-center">
          <img
            src={coach}
            alt="Coach Buchi"
            className="rounded-sm gold-glow"
          />

          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">
              Meet Coach Buchi
            </p>

            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Discipline is the new luxury.
            </h2>

            <p className="text-foreground/80 mb-4">
              Nigeria's most-requested transformation coach. 12,000+ athletes coached.
            </p>

            <p className="text-muted-foreground mb-6">
              90 days of structured discipline — no shortcuts, no noise.
            </p>

            <Button asChild className="bg-gradient-gold text-primary-foreground font-semibold">
              <Link to="/about">Read Coach's Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="section-pad container-x">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-3">
          One platform. <span className="text-gold-gradient">Every advantage.</span>
        </h2>
      </section>
    </Layout>
  );
}