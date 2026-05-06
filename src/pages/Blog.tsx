import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";

const posts = [
  { slug: "naija-meal-plan-bulk", title: "The Naija Bulk Meal Plan: ₦25k/week, 3,000 kcal", date: "Nov 2, 2026", read: "6 min", tag: "Nutrition" },
  { slug: "home-gym-vs-gym-membership", title: "Home Gym vs Gym Membership in Lagos: 12-month math", date: "Oct 28, 2026", read: "8 min", tag: "Strategy" },
  { slug: "five-lifts-iron-authority", title: "The 5 Lifts of an Iron Authority", date: "Oct 19, 2026", read: "10 min", tag: "Training" },
  { slug: "transformation-tunde", title: "How Tunde lost 18kg in 5 months — full protocol", date: "Oct 6, 2026", read: "12 min", tag: "Transformation" },
];

export default function Blog() {
  return (
    <Layout>
      <section className="section-pad container-x">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">Journal</p>
        <h1 className="font-display text-5xl mb-10">The Iron <span className="text-gold-gradient">Files.</span></h1>
        <div className="grid md:grid-cols-2 gap-6">
          {posts.map(p => (
            <Link key={p.slug} to="#" className="glass p-7 rounded-sm hover:gold-glow transition-all">
              <span className="text-xs text-primary uppercase tracking-wider">{p.tag}</span>
              <h2 className="font-display text-2xl mt-2 mb-3">{p.title}</h2>
              <div className="text-xs text-muted-foreground">{p.date} · {p.read}</div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}
