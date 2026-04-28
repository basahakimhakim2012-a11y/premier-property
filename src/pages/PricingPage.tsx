import { motion } from 'framer-motion';
import { Check, ShieldCheck, HelpCircle } from 'lucide-react';
import CTASection from '../components/CTASection';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Essential',
    tagline: 'Perfect for local landlords',
    price: '7%',
    leasingFee: '100% of first month',
    features: [
      'Professional Marketing',
      'Tenant Screening',
      'Rent Collection',
      'Owner Portal Access',
      'Financial Reporting',
      'Legal Compliance Updates'
    ],
    highlight: false
  },
  {
    name: 'Full-Service',
    tagline: 'Our most popular choice',
    price: '9%',
    leasingFee: '75% of first month',
    features: [
      'Everything in Essential',
      '24/7 Maintenance Coordination',
      'Bi-Annual documented inspections',
      'Eviction Protection Plan',
      'Lease Renewal Management',
      'Payment of Property Expenses'
    ],
    highlight: true
  },
  {
    name: 'Premium',
    tagline: 'Total portfolio automation',
    price: '11%',
    leasingFee: '50% of first month',
    features: [
      'Everything in Full-Service',
      'Interior Design Consultation',
      'Utility Management',
      'Zero Vacancy Guarantee*',
      'Quarterly Portfolio Analysis',
      'Dedicated Portfolio Manager'
    ],
    highlight: false
  }
];

export default function PricingPage() {
  return (
    <div className="pt-[100px] bg-brand-offwhite min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">Simple, Transparent, Performance-Based</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-light text-white mb-6">
            Transparent <span className="text-brand-gold italic">Pricing</span>
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            No setup fees. No hidden costs. We only earn a management fee when your property is occupied and generating income.
          </p>
          <div className="flex justify-center items-center gap-4 text-white/40 text-sm">
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-gold" /> No Setup Fees</span>
            <span className="hidden md:block">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-gold" /> Cancel Anytime</span>
            <span className="hidden md:block">|</span>
            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-brand-gold" /> $0 On-boarding</span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-brand-offwhite rounded-t-[50%] translate-y-12"></div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "relative rounded-[3rem] overflow-hidden p-10 flex flex-col transition-all duration-500",
                  plan.highlight 
                    ? "bg-brand-navy text-white shadow-2xl scale-105 border-4 border-brand-gold/50 z-20" 
                    : "bg-white text-brand-navy shadow-sm border border-slate-100 hover:shadow-xl z-10"
                )}
              >
                {plan.highlight && (
                  <div className="absolute top-0 right-0 p-8">
                    <span className="bg-brand-gold text-brand-navy text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">Most Popular</span>
                  </div>
                )}
                
                <h3 className="text-3xl font-display font-light mb-1">{plan.name}</h3>
                <p className={cn("text-sm mb-8", plan.highlight ? "text-white/50" : "text-slate-400")}>{plan.tagline}</p>
                
                <div className="mb-8">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-6xl font-bold text-brand-gold">{plan.price}</span>
                    <span className={cn("text-lg mb-1.5", plan.highlight ? "text-white/40" : "text-slate-400")}>of gross rent</span>
                  </div>
                  <p className={cn("text-sm italic font-medium", plan.highlight ? "text-white/80" : "text-slate-600")}>
                    Leasing fee: {plan.leasingFee}
                  </p>
                </div>

                <div className={cn("h-[1px] w-full mb-8", plan.highlight ? "bg-white/10" : "bg-slate-100")}></div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={cn("w-5 h-5 rounded-full flex items-center justify-center shrink-0", plan.highlight ? "bg-brand-gold/20 text-brand-gold" : "bg-slate-100 text-brand-navy")}>
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className={cn("text-sm leading-relaxed", plan.highlight ? "text-white/80" : "text-slate-600")}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/owners"
                  className={cn(
                    "w-full py-5 rounded-2xl font-bold text-center transition-all active:scale-95 shadow-xl",
                    plan.highlight 
                      ? "bg-brand-gold text-brand-navy hover:brightness-110" 
                      : "bg-brand-navy text-white hover:bg-brand-navy/90"
                  )}
                >
                  Start with {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-slate-400 text-sm">
            <p>*Management fee is only collected while the unit is occupied. Percentage is calculated on monthly gross revenue collected.</p>
          </div>
        </div>
      </section>

      {/* Comparisons / Guarantees */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Happiness Guarantee', desc: 'If you are not 100% satisfied with our service, cancel anytime with no penalty.' },
            { title: 'Leasing Guarantee', desc: 'If a tenant we place leaves within the first 6 months, we replace them for free.' },
            { title: 'Pet Damage Protection', desc: "We cover up to $2,000 in pet-related damage for pets we've approved in writing." },
            { title: 'Eviction Protection', desc: 'We handle the entire process and legal fees for non-payment evictions.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-offwhite p-10 rounded-[2.5rem] border border-slate-50">
              <ShieldCheck className="w-10 h-10 text-brand-gold mb-6" />
              <h4 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-light text-brand-navy mb-4">Pricing <span className="text-brand-gold italic">Questions</span></h2>
            <p className="text-slate-500">Everything you need to know about our fees and structure.</p>
          </div>
          
          <div className="space-y-6">
            {[
              { q: 'Are there any hidden setup or administrative fees?', a: 'No. We pride ourselves on total transparency. There are zero on-boarding fees, setup fees, or hidden marketing costs. We only get paid when we perform.' },
              { q: 'What happens during a vacancy?', a: "We do not charge management fees during a vacancy. Our interests are aligned: we want your property occupied just as much as you do." },
              { q: 'Do you charge for maintenance oversight?', a: "Unlike many other companies, we do not add a 'mark-up' on standard maintenance invoices. You pay exactly what the contractor quotes." },
              { q: 'Can I change plans later?', a: 'Of course. As your portfolio grows or your needs change, you can upgrade or downgrade your plan with 30 days notice.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 flex gap-6">
                <HelpCircle className="w-6 h-6 text-brand-gold shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-brand-navy mb-2">{faq.q}</h4>
                  <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Scale Your Portfolio?"
        subtitle="Talk to an expert about our customized management solutions for multi-unit owners."
      />
    </div>
  );
}
