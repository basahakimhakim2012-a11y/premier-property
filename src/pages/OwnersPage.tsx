import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Clock, CheckCircle2, Star, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadForm from '../components/LeadForm';
import StatCounter from '../components/StatCounter';

export default function OwnersPage() {
  return (
    <div className="pt-[100px] bg-white min-h-screen">
      {/* Hero / Landing Section */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-white/5 blur-[100px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10 text-white">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm shadow-xl">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Accepting 12 New Properties This Month</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-display font-light leading-tight mb-8">
              Management You <br />
              Can <span className="text-brand-gold italic">Trust</span>.
            </h1>
            
            <p className="text-white/60 text-xl leading-relaxed mb-12 max-w-2xl">
              We help [City] landlords maximize ROI, minimize stress, and automate their income. Professional management with no long-term contracts.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 border-y border-white/10 py-10">
              <StatCounter value={98.4} suffix="%" label="Occupancy Rate" decimals={1} />
              <StatCounter value={1200} suffix="+" label="Doors Managed" />
              <StatCounter value={14} suffix=" Days" label="Avg. Lease Time" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 text-white/40">
              <div className="flex items-center gap-3 shrink-0">
                <Award className="w-10 h-10 text-brand-gold opacity-50" />
                <div>
                  <p className="font-bold text-white uppercase text-[10px] tracking-widest">BBB Accredited</p>
                  <p className="text-xs">Grade A+ Partner</p>
                </div>
              </div>
              <div className="h-10 w-[1px] bg-white/10 hidden md:block"></div>
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-2 border-brand-navy" alt="Avatar" />
                ))}
                <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center text-brand-navy font-black text-xs border-2 border-brand-navy z-10">+450</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-12 xl:col-span-5" id="lead-form">
            <LeadForm className="shadow-[0_40px_100px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-light text-brand-navy mb-4">Investment <span className="text-brand-gold italic">Protection</span> Built-In</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">We treat your property like our own, with four comprehensive guarantees that shield you from risk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Eviction Protection', desc: 'We handle the legal process and all courtroom costs for any tenant we place.' },
              { icon: TrendingUp, title: 'Leasing Guarantee', desc: 'If a tenant leaves within the first 6 months, we find a replacement at no cost.' },
              { icon: Clock, title: 'Happiness Guarantee', desc: 'If you are not delighted with our management, cancel anytime with 30 days notice.' },
              { icon: CheckCircle2, title: 'Results Driven', desc: 'We only charge management fees while your property is producing income.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-50 text-center flex flex-col items-center"
              >
                <div className="bg-brand-navy w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                  <item.icon className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 relative">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
               <img 
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                alt="Beautiful Modern Home"
               />
               <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-2xl z-20 border border-slate-100 md:block hidden">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex text-brand-gold">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                  </div>
                  <p className="text-brand-navy font-bold italic mb-1 text-lg">"Best ROI in years."</p>
                  <p className="text-[10px] text-slate-400 uppercase font-black">Sarah T., Manhattan Owner</p>
               </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-light text-brand-navy mb-8 leading-tight">
                Our 3-Step <span className="text-brand-gold italic">Success</span> Blueprint
              </h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Data-Driven Analysis', desc: 'We provide a detailed rental report based on real-time market trends to ensure your property is priced to move fast while maximizing revenue.' },
                  { step: '02', title: 'Elite Tenant Placement', desc: 'Professional HDR photography, massive marketing syndication, and our proprietary 10-point screening process find "Type-A" tenants.' },
                  { step: '03', title: 'Automated Management', desc: 'Sit back and collect your income. We handle everything from rent collection to emergency maintenance and legal compliance.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-5xl font-display font-black text-brand-gold/20 shrink-0">{item.step}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-navy mb-2">{item.title}</h3>
                      <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 bg-brand-navy overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-light text-white mb-16">What Your Neighbors Are <span className="text-brand-gold italic">Saying</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Robert Lee', content: "Finally, a property manager that actually answers the phone. Their communication is levels above competition.", location: 'Brooklyn, NY' },
              { name: 'Diana Ross', content: "The tenant portal is incredible. I can see every receipt and statement live as it happens. Total transparency.", location: 'Manhattan, NY' },
              { name: 'Kevin Moore', content: "My vacancy rates dropped to almost zero since the switch. They really know how to market properties.", location: 'Queens, NY' }
            ].map((testi, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 text-left relative overflow-hidden group hover:bg-white/10 transition-all">
                <Star className="w-8 h-8 text-brand-gold/20 absolute top-8 right-8" />
                <p className="text-white/80 italic text-lg leading-relaxed mb-8">"{testi.content}"</p>
                <div>
                  <p className="font-bold text-white">{testi.name}</p>
                  <p className="text-[10px] uppercase font-black tracking-widest text-brand-gold">{testi.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-light text-brand-navy mb-8 leading-tight">
            Ready to Experience <span className="text-brand-gold italic">Better</span> Management?
          </h2>
          <p className="text-slate-500 text-xl mb-12">Join 450+ successful owners in [City]. Calculate your real ROI today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/owners" className="bg-brand-gold text-brand-navy px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:brightness-110 active:scale-95 transition-all">
               Get My Free Analysis
             </Link>
             <a href="tel:8005550123" className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3">
               <Phone className="w-6 h-6 text-brand-gold" />
               (800) 555-0123
             </a>
          </div>
        </div>
      </section>
    </div>
  );
}
