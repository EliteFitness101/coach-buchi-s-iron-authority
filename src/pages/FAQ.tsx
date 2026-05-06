import Layout from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  ["Where do you ship?","Lagos, Abuja and Port Harcourt with same-day options. Other states ship via GIG within 3-5 business days."],
  ["Is the iron really cast in Nigeria?","Yes. Forged in our Lagos and Aba foundries. We do quality control on every plate."],
  ["What's the warranty?","5 years on all hardware. 30-day money-back if you're not feeling the discipline."],
  ["Can I pay in installments?","Yes — split into 4 payments through our financing partner. Available on orders above ₦150,000."],
  ["Does membership require buying hardware?","No. The wellness app works with bodyweight or your existing gear."],
  ["How fast do affiliate payouts process?","Weekly, every Friday, directly to your Nigerian bank account."],
];

export default function FAQ() {
  return (
    <Layout>
      <section className="section-pad container-x max-w-3xl">
        <p className="text-primary text-xs uppercase tracking-[0.3em] mb-3">FAQ</p>
        <h1 className="font-display text-5xl mb-10">Straight <span className="text-gold-gradient">answers.</span></h1>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map(([q,a],i) => (
            <AccordionItem key={i} value={`i${i}`} className="glass px-5 rounded-sm border-gold">
              <AccordionTrigger className="text-left font-display text-lg hover:text-primary">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </Layout>
  );
}
