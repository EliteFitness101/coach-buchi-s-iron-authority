import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Flame, Trophy, Droplet, Activity, Calendar, TrendingUp } from "lucide-react";
import Counter from "@/components/Counter";

export default function Dashboard() {
  return (
    <Layout>
      <section className="section-pad container-x">
        <div className="flex flex-wrap items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">Welcome back, Champion</p>
            <h1 className="font-display text-4xl md:text-5xl">Day 47 of <span className="text-gold-gradient">discipline.</span></h1>
          </div>
          <div className="flex gap-3">
            <div className="glass px-4 py-3 flex items-center gap-2">
              <Flame className="w-5 h-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground uppercase">Streak</div>
                <div className="font-display text-xl text-primary">12 days</div>
              </div>
            </div>
            <Button className="bg-gradient-gold text-primary-foreground font-semibold">Start Today's Workout</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { i: Activity, l: "Workouts", v: 47, suf: "" },
            { i: TrendingUp, l: "kg Lifted", v: 28400, suf: "kg" },
            { i: Droplet, l: "Water (today)", v: 1800, suf: "ml" },
            { i: Trophy, l: "Loyalty Points", v: 1240, suf: "" },
          ].map(s => (
            <div key={s.l} className="glass p-5 rounded-sm">
              <s.i className="w-5 h-5 text-primary mb-2" />
              <div className="font-display text-3xl text-primary"><Counter end={s.v} suffix={s.suf} /></div>
              <div className="text-xs uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Today's Plan */}
          <div className="lg:col-span-2 glass p-6 rounded-sm">
            <h2 className="font-display text-2xl mb-4">Today's Protocol — Push Day</h2>
            <div className="space-y-3">
              {[
                ["Bench Press","4 × 8","60kg"],
                ["Incline DB Press","4 × 10","22kg"],
                ["Overhead Press","3 × 10","40kg"],
                ["Tricep Dips","3 × 12","BW"],
                ["Lateral Raises","3 × 15","8kg"],
              ].map(([n,s,w], i) => (
                <div key={i} className="flex items-center justify-between border border-gold p-4 hover:bg-card transition-colors">
                  <div>
                    <div className="font-semibold">{n}</div>
                    <div className="text-xs text-muted-foreground">{s} · {w}</div>
                  </div>
                  <Button size="sm" variant="outline" className="border-gold">Log Set</Button>
                </div>
              ))}
            </div>
          </div>

          {/* Side panels */}
          <div className="space-y-6">
            <div className="glass p-6 rounded-sm">
              <Calendar className="w-5 h-5 text-primary mb-2" />
              <h3 className="font-display text-xl mb-3">Today's Meal Plan</h3>
              <ul className="text-sm space-y-2">
                <li className="flex justify-between"><span>Breakfast</span><span className="text-muted-foreground">Akamu + boiled eggs</span></li>
                <li className="flex justify-between"><span>Lunch</span><span className="text-muted-foreground">Jollof + grilled chicken</span></li>
                <li className="flex justify-between"><span>Dinner</span><span className="text-muted-foreground">Pepper soup + fish</span></li>
              </ul>
              <div className="mt-4 text-xs text-muted-foreground">Macros: 180P · 250C · 70F · 2,400 kcal</div>
            </div>
            <div className="glass p-6 rounded-sm bg-gradient-gold/5 border-primary">
              <h3 className="font-display text-xl mb-2">AI Recommendation</h3>
              <p className="text-sm text-muted-foreground mb-4">You crushed legs yesterday. Add 200ml water now and stretch hamstrings for 8 mins post-workout.</p>
              <Button size="sm" className="bg-gradient-gold text-primary-foreground">Apply</Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
