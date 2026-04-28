import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, ShieldCheck, CheckCircle2, 
  Search, ArrowRight, Star, ChevronDown, Award, HardHat,
  TrendingUp, DollarSign, Key
} from 'lucide-react';
import StatCounter from '../components/StatCounter';
import ListingCard from '../components/ListingCard';
import LeadForm from '../components/LeadForm';
import CTASection from '../components/CTASection';
import { listings } from '../lib/listings';
import { faqs } from '../lib/faqs';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-brand-navy">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full rotate-45"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-white/5 blur-[100px] rounded-full"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 py-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <div className="flex text-brand-gold">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-white/80">5.0 Google Rating — 450+ Landlords Served</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-light text-white leading-[1.1] mb-8">
              Stress-Free <br />
              <span className="text-brand-gold italic">Management</span> in <br />
              [City].
            </h1>

            <p className="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
              We maximize your ROI while you reclaim your time. No long-term contracts. No hidden fees. Just expert local property management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/owners" 
                className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:brightness-110 active:scale-95 transition-all text-center"
              >
                Get My Free Rental Analysis
              </Link>
              <Link 
                to="/rentals" 
                className="bg-transparent border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all text-center"
              >
                Browse Available Rentals
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-12 gap-y-6 border-t border-white/10 pt-10">
              <StatCounter value={1200} suffix="+" label="Doors Managed" />
              <StatCounter value={98.4} suffix="%" label="Occupancy Rate" decimals={1} />
              <StatCounter value={14} suffix=" Days" label="Avg. Time to Lease" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-12 xl:col-span-5 relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury Property" 
                className="w-full h-[600px] object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-brand-gold mb-3">
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <p className="text-brand-navy font-display italic text-xl mb-4 leading-relaxed group">
                  "The best ROI we've ever seen on our rental portfolio. Professional, reliable, and thorough."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">JW</div>
                  <div>
                    <p className="text-sm font-bold text-brand-navy">James W.</p>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Property Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-brand-offwhite py-10 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2"><Award className="w-8 h-8"/> <span className="font-bold">NARPM Member</span></div>
            <div className="flex items-center gap-2 font-black text-xl italic uppercase tracking-tighter">BBB Accredited A+</div>
            <div className="flex items-center gap-2"><Building2 className="w-6 h-6"/> <span className="font-bold">Real Estate Board</span></div>
            <div className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight">FairHousing</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-light text-brand-navy mb-4">
            Stress-Free Property Management <span className="text-brand-gold italic">Simplified</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Three simple steps to maximizing your rental revenue without the headaches of DIY management.</p>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {[
            { step: '01', title: 'Free Rental Analysis', desc: 'We deep dive into local market data to set the perfect price for your property.', icon: Search },
            { step: '02', title: 'Seamless Onboarding', desc: 'From marketing to tenant placement, we handle 100% of the heavy lifting.', icon: Key },
            { step: '03', title: 'Collect Your Rent', desc: 'Direct deposits monthly with comprehensive reports in your owner portal.', icon: DollarSign },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="relative group text-center"
            >
              <div className="mb-8 relative inline-block">
                <div className="w-24 h-24 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center group-hover:bg-brand-navy group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="w-10 h-10 text-brand-gold" />
                </div>
                <span className="absolute -top-4 -right-4 text-4xl font-display font-black text-brand-gold opacity-30">{item.step}</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              {idx < 2 && (
                <div className="hidden lg:block absolute top-12 -right-12 w-24 border-t-2 border-dashed border-slate-100"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-light text-brand-navy mb-4">Complete <span className="text-brand-gold italic">Full-Service</span> Support</h2>
            <p className="text-slate-500">From leasing to legal, we cover every aspect of the tenant lifecycle.</p>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-gold font-bold group">
            See All Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Search, title: 'Tenant Screening', desc: 'Rigorous 10-point check including credit, criminal, and employment.' },
            { icon: DollarSign, title: 'Rent Collection', desc: 'Timely ACH collections with direct deposit to your account.' },
            { icon: HardHat, title: 'Maintenance', desc: '24/7 coordination with our network of vetted contractors.' },
            { icon: TrendingUp, title: 'Financial Reporting', desc: 'Clear, monthly statements and year-end tax documentation.' },
            { icon: ShieldCheck, title: 'Eviction Protection', desc: "Optional coverage for the costs associated with difficult legal removals."},
            { icon: Building2, title: 'Marketing & Leasing', desc: 'Professional photography and syndication to 40+ listing portals.' }
          ].map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 group"
            >
              <div className="bg-brand-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-navy transition-colors">
                <service.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-brand-navy rounded-[3rem] px-8 py-16 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-6">Why Owners Choose <span className="text-brand-gold italic">Premier</span></h2>
              <p className="text-white/60">Compare us against the alternatives.</p>
            </div>

            <div className="overflow-x-auto relative z-10">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-6 font-display text-white/40 font-light text-xl">Benefit</th>
                    <th className="py-6 font-display text-white font-bold text-xl px-10 bg-white/5 rounded-t-3xl">Premier Property</th>
                    <th className="py-6 font-display text-white/40 font-light text-xl px-10">DIY Management</th>
                    <th className="py-6 font-display text-white/40 font-light text-xl px-10">Typical Agency</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {[
                    ['Late-Night Calls', 'Managed by Us (24/7)', 'Your Cell Phone', 'Answering Machine'],
                    ['Tenant Selection', '10-Point Rigorous Prep', 'Instinct / Luck', 'Basic Credit Check'],
                    ['Lease Preparation', 'Drafted by Attorneys', 'Downloadable Forms', 'Generic Templates'],
                    ['Leasing Fee', 'Flat One-Month Rate', 'Free (Your Time)', '15-20% Of Annual'],
                    ['Eviction Guarantee', 'Included Protection', 'Total Legal Expense', 'Owner Responsibility'],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="py-6 font-bold text-white/90">{row[0]}</td>
                      <td className="py-6 px-10 bg-white/5 font-bold text-brand-gold flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        {row[1]}
                      </td>
                      <td className="py-6 px-10 text-white/40">{row[2]}</td>
                      <td className="py-6 px-10 text-white/40">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-center mt-12 bg-white/5 py-4 rounded-b-3xl mx-auto max-w-full">
              <p className="text-white/60 text-sm">Save an average of 40 hours per month with professional management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl mb-6 md:mb-0">
            <h2 className="text-4xl font-display font-light text-brand-navy mb-4">Featured <span className="text-brand-gold italic">Available</span> Rentals</h2>
            <p className="text-slate-500">Luxury living spaces professionally managed for the ultimate tenant experience.</p>
          </div>
          <Link to="/rentals" className="bg-brand-navy text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 group">
            Browse All Rentals <ArrowRight className="w-5 h-5 text-brand-gold group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.filter(l => l.featured).slice(0, 3).map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-light text-brand-navy mb-4">Common Questions from <span className="text-brand-gold italic">Owners</span></h2>
            <p className="text-slate-500 text-lg">Everything you need to know about our management process.</p>
          </div>

          <div className="space-y-4">
            {faqs.filter(f => f.category === 'owner').map((faq, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-3xl transition-all duration-300",
                  activeFaq === idx ? "border-brand-gold bg-slate-50 ring-1 ring-brand-gold/30" : "border-slate-200 bg-white"
                )}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={cn(
                    "text-xl font-bold tracking-tight transition-colors",
                    activeFaq === idx ? "text-brand-navy" : "text-slate-600 group-hover:text-brand-navy"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center transition-all",
                    activeFaq === idx ? "bg-brand-gold text-brand-navy rotate-180" : "text-slate-400"
                  )}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: activeFaq === idx ? 'auto' : 0, opacity: activeFaq === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 pt-0 text-slate-500 leading-relaxed text-lg border-t border-slate-100/50 mt-2">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden" id="analysis">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-8 leading-tight">
              Ready to <span className="text-brand-gold italic">Reclaim</span> Your Time?
            </h2>
            <ul className="space-y-6 mb-12">
              {[
                'Professional market data analysis',
                'No long-term management contracts',
                'Performance-based results only',
                'Cancel anytime with 30-days notice'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white/80">
                  <div className="w-6 h-6 bg-brand-gold/10 rounded-full flex items-center justify-center border border-brand-gold/30">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
              <div className="flex gap-4 items-center mb-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img 
                      key={i} 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      className="w-10 h-10 rounded-full border-2 border-brand-navy"
                      alt="Avatar"
                    />
                  ))}
                </div>
                <p className="text-white/60 text-xs">Joined by 15 new owners this month</p>
              </div>
              <p className="text-white font-display italic text-lg leading-relaxed">
                "Our vacancy rates dropped from 8% to under 1% in six months. Premier is unparalleled."
              </p>
            </div>
          </div>

          <LeadForm />
        </div>
      </section>

      <CTASection 
        title="Stop Straining Start Earning"
        subtitle="Join hundreds of successful owners who have automated their income with Premier."
      />
    </div>
  );
}
