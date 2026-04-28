import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  LayoutDashboard, CreditCard, HardHat, Sparkles,
  ArrowRight, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { cn } from '../lib/utils';

export default function TenantsPage() {
  return (
    <div className="pt-[100px] bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 blur-[120px] rounded-full translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-display font-light text-white mb-6 leading-tight">
              Rent with <span className="text-brand-gold italic">Confidence</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-xl">
              We provide professionally managed luxury rentals in [City]. Enjoy a seamless experience from application to move-out.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/rentals"
                className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:brightness-110 items-center flex gap-2 active:scale-95 transition-all"
              >
                Browse Rentals
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/tenant-portal"
                className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Tenant Portal
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: LayoutDashboard, title: 'Secure Portal', color: 'bg-blue-500/10 text-blue-500' },
              { icon: CreditCard, title: 'Auto-Pay Rent', color: 'bg-green-500/10 text-green-500' },
              { icon: HardHat, title: '24/7 Repairs', color: 'bg-orange-500/10 text-orange-500' },
              { icon: Sparkles, title: 'Vetted Homes', color: 'bg-purple-500/10 text-purple-500' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-xl flex flex-col items-center text-center group hover:bg-white/10 transition-all"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", item.color)}>
                  <item.icon className="w-8 h-8" />
                </div>
                <p className="text-white font-bold">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-navy mb-4">Our Simple <span className="text-brand-gold italic">Application</span> Process</h2>
          <p className="text-slate-500">Fast, digital, and transparent. We respond to most applications within 24-48 hours.</p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { step: '01', title: 'Find Your Home', desc: 'Browse our available listings and schedule an in-person or virtual tour.' },
            { step: '02', title: 'Apply Digitally', desc: 'Sube your application via our secure portal. We check credit, references, and income.' },
            { step: '03', title: 'Move In', desc: 'Sign your lease electronically and receive your keys. Welcome home!' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm relative group hover:shadow-xl transition-all">
              <span className="text-7xl font-display font-black text-brand-gold/10 absolute top-8 right-8 group-hover:scale-110 transition-transform">{item.step}</span>
              <h3 className="text-2xl font-bold text-brand-navy mb-4 relative z-10">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Living Experience */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-6xl font-display font-light text-brand-navy mb-8 leading-tight">
              A Better Way to <span className="text-brand-gold italic">Live</span>.
            </h2>
            <div className="space-y-6">
              {[
                { title: 'Everything in one place', desc: 'Your lease, rent payments, and maintenance requests are all accessible from our mobile-friendly portal.' },
                { title: 'Emergency coordination', desc: 'Leaky faucet at 2 AM? Our emergency maintenance team is standing by to assist you immediately.' },
                { title: 'Credit building', desc: "We report your on-time rent payments to major credit bureaus, helping you build your financial future." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 bg-brand-gold/10 rounded-full flex items-center justify-center shrink-0 text-brand-gold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-1">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
             <img 
              src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[3rem] shadow-2xl relative z-10"
              alt="Happy person in kitchen"
             />
             <div className="absolute bottom-10 -left-10 bg-brand-navy text-white p-10 rounded-[2rem] shadow-2xl z-20">
                <Star className="w-10 h-10 text-brand-gold mb-3 fill-current" />
                <p className="text-xl font-display italic text-white/90">"The easiest rental transition I've ever had."</p>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-[10px] font-bold">MK</div>
                   <p className="text-[10px] uppercase font-bold tracking-widest text-white/40">Maria K., Tenant</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Your Next Home Awaits"
        subtitle="Explore our vetted listings and find a place that matches your lifestyle."
        primaryCTA="Browse Available Units"
        primaryHref="/rentals"
      />
    </div>
  );
}
