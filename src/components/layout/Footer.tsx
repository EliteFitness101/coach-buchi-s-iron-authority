import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gold bg-card/40 mt-20">
      <div className="container-x px-4 md:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display text-xl mb-4">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="font-bold">RESO<span className="text-gold-gradient">FIT</span></span>
          </Link>
          <p className="text-sm text-muted-foreground">Iron Authority. Built in Nigeria. Engineered for the disciplined elite.</p>
          <div className="flex gap-3 mt-4 text-muted-foreground">
            <Instagram className="w-5 h-5 hover:text-primary cursor-pointer" />
            <Youtube className="w-5 h-5 hover:text-primary cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-primary cursor-pointer" />
          </div>
        </div>
        {[
          { title: "Shop", links: [["Dumbbells","/shop"],["Barbells","/shop"],["Benches","/shop"],["Bundles","/build-my-gym"]] },
          { title: "Wellness", links: [["Membership","/membership"],["Dashboard","/dashboard"],["Meal Plans","/membership"],["Workouts","/dashboard"]] },
          { title: "Company", links: [["About Coach Buchi","/about"],["Affiliate","/affiliate"],["Blog","/blog"],["FAQ","/faq"],["Contact","/contact"]] },
        ].map(s => (
          <div key={s.title}>
            <h4 className="font-display text-primary mb-4">{s.title}</h4>
            <ul className="space-y-2 text-sm">
              {s.links.map(([label, to]) => (
                <li key={label}><Link to={to} className="text-muted-foreground hover:text-primary">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gold/40 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ResoFit by Coach Buchi. Lagos · Abuja · Port Harcourt.
      </div>
    </footer>
  );
}
