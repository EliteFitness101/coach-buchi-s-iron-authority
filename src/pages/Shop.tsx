import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";

const cats = ["All", "Dumbbells", "Barbells", "Benches", "Resistance"];

export default function Shop() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? products : products.filter(p => p.category === cat);
  return (
    <Layout>
      <section className="section-pad container-x">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">The Shop</p>
        <h1 className="font-display text-5xl md:text-6xl mb-4">Iron, engineered.</h1>
        <p className="text-muted-foreground max-w-2xl mb-10">Premium cast iron, gold-bushed barbells, commercial-grade benches. Stocked across Lagos, Abuja and Port Harcourt.</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(c => (
            <Button key={c} variant={cat === c ? "default" : "outline"}
              onClick={() => setCat(c)}
              className={cat === c ? "bg-gradient-gold text-primary-foreground" : "border-gold text-foreground hover:text-primary"}>
              {c}
            </Button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </Layout>
  );
}
