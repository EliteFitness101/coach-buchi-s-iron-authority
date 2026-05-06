import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { Product, ngn } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function ProductCard({ p }: { p: Product }) {
  const lowest = p.stockCity[0];
  return (
    <article className="group glass rounded-sm overflow-hidden hover:gold-glow transition-all duration-500">
      <Link to={`/product/${p.slug}`} className="block relative overflow-hidden aspect-square bg-secondary">
        <img
          src={p.image} alt={p.name} loading="lazy" width={1024} height={1024}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {p.oldPrice && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1">
            -{Math.round((1 - p.price / p.oldPrice) * 100)}%
          </span>
        )}
        <span className="absolute bottom-3 left-3 glass text-xs px-2 py-1 flex items-center gap-1 text-primary">
          <MapPin className="w-3 h-3" /> {lowest.left} left in {lowest.city}
        </span>
      </Link>
      <div className="p-5">
        <div className="flex items-center gap-1 text-primary text-xs mb-2">
          <Star className="w-3 h-3 fill-primary" /> {p.rating} <span className="text-muted-foreground">({p.reviews})</span>
        </div>
        <h3 className="font-display text-lg leading-tight mb-2">{p.name}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-primary font-bold text-lg">{ngn(p.price)}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">{ngn(p.oldPrice)}</span>}
        </div>
        <Button asChild className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90">
          <Link to={`/product/${p.slug}`}>View Product</Link>
        </Button>
      </div>
    </article>
  );
}
