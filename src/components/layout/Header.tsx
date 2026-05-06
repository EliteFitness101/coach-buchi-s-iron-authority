import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingBag, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/build-my-gym", label: "Build My Gym" },
  { to: "/membership", label: "Membership" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/affiliate", label: "Affiliate" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <header className="sticky top-0 z-50 glass border-b border-gold">
      <div className="container-x flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 font-display text-xl">
          <Dumbbell className="w-6 h-6 text-primary" />
          <span className="font-bold tracking-wider">RESO<span className="text-gold-gradient">FIT</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition-colors ${isActive ? "text-primary" : "text-foreground/70 hover:text-primary"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="icon" className="hover:text-primary">
            <Link to="/shop"><ShoppingBag className="w-5 h-5" /></Link>
          </Button>
          <Button asChild className="hidden md:inline-flex bg-gradient-gold text-primary-foreground hover:opacity-90 font-semibold">
            <Link to="/membership">Join Elite</Link>
          </Button>
          <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gold bg-background/95">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-wider py-2 ${isActive ? "text-primary" : "text-foreground/80"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
