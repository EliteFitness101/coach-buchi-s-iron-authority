import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Youtube, Twitter, Facebook, Linkedin, MessageCircle, Phone, Mail, Clock } from "lucide-react";
import { site, support, social } from "@/config/site";

type Col = { title: string; links: [string, string][] };

const columns: Col[] = [
  {
    title: "Shop",
    links: [
      ["Home Gym Packages", "/build-my-gym"],
      ["Dumbbells", "/shop"],
      ["Barbells", "/shop"],
      ["Weight Plates", "/shop"],
      ["Benches", "/shop"],
      ["Power Racks", "/shop"],
      ["Functional Trainers", "/shop"],
      ["Multi Gyms", "/shop"],
      ["Treadmills", "/shop"],
      ["Walking Pads", "/shop"],
      ["Spin Bikes", "/shop"],
      ["Accessories", "/shop"],
    ],
  },
  {
    title: "ChatB2K™",
    links: [
      ["Fitness Assessment", "/dashboard"],
      ["Workout Planner", "/dashboard"],
      ["Meal Planner", "/dashboard"],
      ["Habit Tracker", "/dashboard"],
      ["Progress Dashboard", "/dashboard"],
      ["B2K Elite", "/membership"],
      ["Affiliate Dashboard", "/affiliate"],
    ],
  },
  {
    title: "Business Solutions",
    links: [
      ["Commercial Gyms", "/contact"],
      ["Hotels", "/contact"],
      ["Schools", "/contact"],
      ["Universities", "/contact"],
      ["Corporate Wellness", "/contact"],
      ["Residential Estates", "/contact"],
      ["Government", "/contact"],
      ["Healthcare", "/contact"],
      ["Sports Academies", "/contact"],
    ],
  },
  {
    title: "Customer Care",
    links: [
      ["FAQ", "/faq"],
      ["Shipping", "/faq"],
      ["Warranty", "/faq"],
      ["Returns", "/faq"],
      ["Track Order", "/contact"],
      ["Contact Support", "/contact"],
      ["Privacy Policy", "/faq"],
      ["Terms & Conditions", "/faq"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Success Stories", "/blog"],
      ["Nutrition", "/blog"],
      ["Exercise Library", "/dashboard"],
      ["Affiliate Program", "/affiliate"],
      ["Careers", "/about"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold bg-card/40 mt-20">
      <div className="container-x px-4 md:px-8 py-16 grid gap-10 lg:grid-cols-12">
        {/* Brand + support */}
        <div className="lg:col-span-4 space-y-6">
          <Link to="/" className="flex items-center gap-2 font-display text-xl">
            <Dumbbell className="w-6 h-6 text-primary" />
            <span className="font-bold">RESO<span className="text-gold-gradient">FIT</span><sup className="text-[0.5em] text-primary">™</sup></span>
          </Link>
          <p className="text-sm text-muted-foreground">{site.tagline}</p>

          <div>
            <h4 className="font-display text-primary mb-3 text-sm uppercase tracking-wider">Customer Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href={support.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary"><MessageCircle className="w-4 h-4" /> WhatsApp Advisor</a></li>
              <li><a href={`mailto:${support.emails.sales}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /> Sales · {support.emails.sales}</a></li>
              <li><a href={`mailto:${support.emails.support}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /> Support · {support.emails.support}</a></li>
              <li><a href={`mailto:${support.emails.payments}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /> Payments · {support.emails.payments}</a></li>
              <li><a href={`mailto:${support.emails.corporate}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Mail className="w-4 h-4" /> Corporate Sales · {support.emails.corporate}</a></li>
              <li><a href={`tel:${support.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-primary"><Phone className="w-4 h-4" /> {support.phone}</a></li>
              <li className="flex items-center gap-2 text-muted-foreground"><Clock className="w-4 h-4" /> {support.hours}</li>
            </ul>
          </div>

          <div className="flex gap-3 text-muted-foreground">
            <a href={social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram className="w-5 h-5 hover:text-primary" /></a>
            <a href={social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook className="w-5 h-5 hover:text-primary" /></a>
            <a href={social.x} aria-label="X" target="_blank" rel="noreferrer"><Twitter className="w-5 h-5 hover:text-primary" /></a>
            <a href={social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube className="w-5 h-5 hover:text-primary" /></a>
            <a href={social.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5 hover:text-primary" /></a>
          </div>
        </div>

        {/* Link columns */}
        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {columns.map(col => (
            <div key={col.title}>
              <h4 className="font-display text-primary mb-4 text-sm uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2 text-sm">
                {col.links.map(([label, to]) => (
                  <li key={label}><Link to={to} className="text-muted-foreground hover:text-primary">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why choose */}
      <div className="border-t border-gold/40 bg-background/40">
        <div className="container-x px-4 md:px-8 py-8">
          <h4 className="font-display text-primary mb-4 text-sm uppercase tracking-wider text-center">Why Choose ResoFit™</h4>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground uppercase tracking-wider">
            {["Premium Equipment","Nationwide Delivery","Professional Installation","Warranty Support","Secure Payments","Dedicated Customer Care","Powered by ChatB2K™"].map(x => (
              <li key={x} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-primary" />{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/40 py-8 text-center text-xs text-muted-foreground space-y-2 px-4">
        <div>© 2026 ResoFit™.</div>
        <div className="max-w-3xl mx-auto">
          ResoFit™, ResoFlex™, ChatB2K™, NaijaFit™, B2K Elite™, and Iron Authority™ are trademarks of Resonance Fitness.
        </div>
        <div className="text-primary/80">Premium Equipment. Powered by ChatB2K™. Built for Nigeria.</div>
      </div>
    </footer>
  );
}
