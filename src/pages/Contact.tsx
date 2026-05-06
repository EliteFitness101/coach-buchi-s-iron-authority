import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  return (
    <Layout>
      <section className="section-pad container-x grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">Talk to Iron</p>
          <h1 className="font-display text-5xl mb-6">Let's build.</h1>
          <p className="text-muted-foreground mb-8">Whether you're equipping a home gym, a hotel, or your team — we respond within 2 hours.</p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary" /> +234 800 RESO FIT</div>
            <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary" /> hello@resofit.ng</div>
            <div className="flex items-center gap-3"><MessageCircle className="w-5 h-5 text-primary" /> WhatsApp Concierge: +234 901 234 5678</div>
            <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-primary" /> Lagos · Abuja · Port Harcourt</div>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); toast.success("Message sent. We'll respond within 2 hours."); }} className="glass p-8 rounded-sm space-y-4">
          <input required placeholder="Your name" className="w-full bg-input border border-gold p-3 rounded-sm" />
          <input required type="email" placeholder="Email" className="w-full bg-input border border-gold p-3 rounded-sm" />
          <input placeholder="Phone (WhatsApp)" className="w-full bg-input border border-gold p-3 rounded-sm" />
          <textarea required placeholder="How can we serve you?" rows={5} className="w-full bg-input border border-gold p-3 rounded-sm" />
          <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground font-semibold">Send Message</Button>
        </form>
      </section>
    </Layout>
  );
}
