import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Copy, TrendingUp, Users, Award } from "lucide-react";
import Counter from "@/components/Counter";
import { ngn } from "@/data/products";
import { toast } from "sonner";

export default function Affiliate() {
  return (
    <Layout>
      <section className="section-pad container-x">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">Affiliate Portal</p>
        <h1 className="font-display text-5xl mb-4">Earn with the <span className="text-gold-gradient">Iron tribe.</span></h1>
        <p className="text-muted-foreground max-w-2xl mb-10">15% commission on every sale. Influencers, gym owners and elite athletes welcome.</p>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 glass p-6 rounded-sm">
            <div className="text-xs text-muted-foreground uppercase mb-2">Your referral code</div>
            <div className="flex items-center gap-3">
              <div className="font-mono text-3xl text-primary tracking-wider">BUCHI-IRON-247</div>
              <Button onClick={() => { navigator.clipboard.writeText("BUCHI-IRON-247"); toast.success("Code copied"); }}
                size="sm" variant="outline" className="border-gold"><Copy className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="glass p-6 rounded-sm">
            <Award className="w-5 h-5 text-primary mb-2" />
            <div className="text-xs uppercase text-muted-foreground">Tier</div>
            <div className="font-display text-2xl text-primary">Gold Partner</div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {[
            { i: TrendingUp, l: "Earnings", v: 482000, prefix: "₦" },
            { i: Users, l: "Referrals", v: 38 },
            { i: Award, l: "Conversions", v: 24 },
          ].map(s => (
            <div key={s.l} className="glass p-5">
              <s.i className="w-5 h-5 text-primary mb-2" />
              <div className="font-display text-3xl text-primary"><Counter end={s.v} prefix={s.prefix} /></div>
              <div className="text-xs uppercase text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <div className="glass p-6 rounded-sm">
          <h2 className="font-display text-2xl mb-4">Leaderboard — November</h2>
          <div className="space-y-2">
            {[
              ["1","@adesuwa.fit","Lagos",1240000],
              ["2","@gymowner_aba","Aba",890000],
              ["3","BUCHI-IRON-247 (You)","Lagos",482000],
              ["4","@fit_naija","Abuja",420000],
              ["5","@strong_ph","Port Harcourt",380000],
            ].map(([rank,name,city,amt]) => (
              <div key={rank} className={`flex items-center justify-between p-3 border border-border ${name.toString().includes("You") ? "border-primary bg-card" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-2xl text-primary w-8">{rank}</span>
                  <div>
                    <div className="font-semibold">{name}</div>
                    <div className="text-xs text-muted-foreground">{city}</div>
                  </div>
                </div>
                <div className="font-display text-primary">{ngn(amt as number)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
