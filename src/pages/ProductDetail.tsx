import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Star, Truck, ShieldCheck, CreditCard, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { products, ngn } from "@/data/products";
import { toast } from "sonner";

export default function ProductDetail() {
  const { slug } = useParams();
  const p = products.find(x => x.slug === slug);
  const [qty, setQty] = useState(1);
  if (!p) return <Layout><div className="section-pad container-x">Product not found. <Link to="/shop" className="text-primary">Back to shop</Link></div></Layout>;
  return (
    <Layout>
      <section className="section-pad container-x grid md:grid-cols-2 gap-10">
        <img src={p.image} alt={p.name} width={1024} height={1024} className="w-full rounded-sm border border-gold" />
        <div>
          <Link to="/shop" className="text-xs text-muted-foreground hover:text-primary uppercase tracking-wider">← Shop</Link>
          <h1 className="font-display text-4xl md:text-5xl mt-4 mb-3">{p.name}</h1>
          <div className="flex items-center gap-2 text-sm text-primary mb-4">
            <Star className="w-4 h-4 fill-primary" /> {p.rating} <span className="text-muted-foreground">({p.reviews} reviews)</span>
          </div>
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-4xl font-display text-primary">{ngn(p.price)}</span>
            {p.oldPrice && <span className="line-through text-muted-foreground">{ngn(p.oldPrice)}</span>}
          </div>
          <p className="text-foreground/80 mb-6">{p.description}</p>

          <div className="space-y-2 mb-6">
            {p.stockCity.map(s => (
              <div key={s.city} className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold">{s.left} left</span> in {s.city}
                <span className="ml-2 inline-block w-2 h-2 rounded-full bg-primary pulse-gold" />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex border border-gold">
              <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-primary">−</button>
              <span className="px-4 py-2 font-mono">{qty}</span>
              <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-primary">+</button>
            </div>
            <Button onClick={() => toast.success(`${p.name} added to cart`)} className="flex-1 bg-gradient-gold text-primary-foreground font-semibold gold-glow">
              Add to Cart — {ngn(p.price * qty)}
            </Button>
          </div>
          <Button variant="outline" className="w-full border-gold mb-8">Buy with Installments (4 payments)</Button>

          <div className="grid grid-cols-3 gap-3 text-xs">
            {[[Truck,"Free Lagos delivery"],[ShieldCheck,"5-yr warranty"],[CreditCard,"Pay in 4"]].map(([Icon,l],i) => (
              <div key={i} className="glass p-3 text-center">
                <Icon className="w-5 h-5 text-primary mx-auto mb-1" />
                <div className="text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-gold pt-6">
            <h3 className="font-display text-xl mb-4">Specifications</h3>
            <dl className="grid grid-cols-2 gap-3 text-sm">
              {p.specs.map(s => (
                <div key={s.label} className="flex justify-between border-b border-border py-2">
                  <dt className="text-muted-foreground">{s.label}</dt>
                  <dd>{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-pad container-x border-t border-gold">
        <h2 className="font-display text-3xl mb-6">Verified Transformations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Femi K.", quote: "Solid iron. Worth every naira.", stars: 5 },
            { name: "Bisi M.", quote: "Delivered in 2 days to Abuja. Premium feel.", stars: 5 },
            { name: "Kola P.", quote: "My garage gym is now serious.", stars: 5 },
          ].map(r => (
            <div key={r.name} className="glass p-5">
              <div className="flex gap-1 text-primary mb-2">{Array.from({length:r.stars}).map((_,i)=><Star key={i} className="w-4 h-4 fill-primary" />)}</div>
              <p className="text-sm mb-3">"{r.quote}"</p>
              <div className="flex items-center gap-2 text-xs"><Check className="w-3 h-3 text-primary" />Verified — {r.name}</div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
