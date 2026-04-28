import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, HardHat, TrendingUp, DollarSign,
  Briefcase, BarChart3, Scale, ClipboardCheck, ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import { cn } from '../lib/utils';
import { useState } from 'react';

const services = [
  {
    icon: Search,
    title: 'Tenant Screening',
    benefit: 'High-quality placement',
    shortDesc: 'We conduct a rigorous 10-point check including credit, criminal, income, and eviction history.',
    fullDesc: 'Choosing the right tenant is the most important part of property management. Our screening process is optimized to find stable, long-term tenants who treat your property like their own. We handle all background checks, employment verification, and previous landlord references to ensure you get the best possible residency.'
  },
  {
    icon: DollarSign,
    title: 'Rent Collection',
    benefit: 'Consistent cash flow',
    shortDesc: 'Automated ACH collections and direct deposit straight to your account.',
    fullDesc: 'No more chasing checks. Our secure online tenant portal facilitates easy, automatic payments. We enforce rent policies strictly and handle all communications regarding late payments, ensuring you receive your income on time, every month.'
  },
  {
    icon: HardHat,
    title: 'Maintenance',
    benefit: 'Protected asset value',
    shortDesc: '24/7 coordination with vetted, insured, and reliable contractors.',
    fullDesc: 'Maintenance can be the biggest headache for landlords. We provide a 24/7 emergency line for tenants and a streamlined process for routine repairs. By using our network of preferred vendors, we secure discounted rates and ensure quality workmanship—all without you lifting a finger.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Leasing',
    benefit: 'Minimum vacancy time',
    shortDesc: 'Professional photography and syndication to all major rental portals.',
    fullDesc: 'We make your property stand out. Our marketing package includes professional HDR photography, virtual tours (on request), and rapid syndication to over 40+ listing websites including Zillow, HotPads, and Apartments.com. We handle all showings, including weekends, to minimize downtime.'
  },
  {
    icon: BarChart3,
    title: 'Financial Reporting',
    benefit: 'Investment clarity',
    shortDesc: 'Monthly statements and year-end tax prep delivered to your inbox.',
    fullDesc: 'Stay informed with detailed financial reports. Our owner portal provides real-time access to income statements, expense reports, and maintenance receipts. At the end of the year, we provide a clean 1099 and a comprehensive annual summary to make tax time a breeze.'
  },
  {
    icon: Scale,
    title: 'Eviction Protection',
    benefit: 'Legal peace of mind',
    shortDesc: 'We handle the legal process and cover legal fees for covered evictions.',
    fullDesc: 'Legal disputes are stressful and expensive. If an eviction becomes necessary, our team handles the entire legal process from notice to lockout. We work with specialized attorneys to ensure compliance with all local and state laws, mitigating your risk and protecting your bottom line.'
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Inspections',
    benefit: 'Proactive stewardship',
    shortDesc: 'Comprehensive photo-documented inspections twice per year.',
    fullDesc: 'We don’t just wait for things to break. We conduct semi-annual inspections to ensure leases are being followed and to catch small maintenance issues before they become expensive repairs. Every inspection includes a detailed photo report for your records.'
  },
  {
    icon: Briefcase,
    title: 'Legal Compliance',
    benefit: 'Risk mitigation',
    shortDesc: 'Updates on local regulations, fair housing, and safety laws.',
    fullDesc: 'Laws are constantly changing. We stay up-to-date on all local, state, and federal regulations including Fair Housing, lead paint compliance, and safety requirements. We ensure your leases and management practices are fully compliant, shielding you from potential lawsuits.'
  }
];

export default function ServicesPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="pt-[100px] bg-white">
      {/* Hero */}
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-display font-light text-white mb-6">
              Full-Service <span className="text-brand-gold italic">Expertise</span>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              We provide comprehensive, end-to-end management so you can enjoy the benefits of property ownership without the daily operational burden.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/40 text-sm font-bold uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-white/40 text-sm font-bold uppercase tracking-widest ml-4">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                No Hidden Fees
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                layout
                className={cn(
                  "bg-white rounded-[2.5rem] p-10 border border-slate-100 transition-all duration-500 shadow-sm hover:shadow-xl",
                  expanded === idx ? "md:col-span-2 ring-2 ring-brand-gold/20" : ""
                )}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-20 h-20 bg-brand-navy rounded-3xl flex items-center justify-center shrink-0 shadow-lg">
                    <service.icon className="w-10 h-10 text-brand-gold" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-brand-navy">{service.title}</h3>
                      <span className="text-[10px] uppercase font-black tracking-widest text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">{service.benefit}</span>
                    </div>
                    <p className="text-lg text-slate-500 mb-6">{service.shortDesc}</p>
                    
                    <button 
                      onClick={() => setExpanded(expanded === idx ? null : idx)}
                      className="text-brand-navy font-bold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      {expanded === idx ? 'Show Less' : 'Learn More'}
                      <ArrowRight className={cn("w-4 h-4 text-brand-gold transition-all", expanded === idx ? "rotate-90" : "")} />
                    </button>

                    <AnimatePresence>
                      {expanded === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 mt-8 border-t border-slate-50 text-slate-500 leading-relaxed text-lg">
                            {service.fullDesc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[3rem] shadow-2xl relative z-10"
              alt="Management Professional"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-navy p-10 rounded-[2rem] text-white shadow-2xl z-20 hidden md:block">
              <p className="text-4xl font-bold text-brand-gold mb-1">24/7</p>
              <p className="text-xs uppercase font-bold tracking-widest text-white/60">Tenant & Owner Support</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-brand-navy mb-8">Management Built for the <span className="text-brand-gold italic">Modern Era</span></h2>
            <div className="space-y-8">
              {[
                { title: 'Proprietary Tech Portal', desc: 'Manage your portfolio from any device, anywhere in the world.' },
                { title: 'Real-Time Transparency', desc: 'No more waiting for monthly reports. Access your data instantly.' },
                { title: 'Performance-Based', desc: 'We only earn when you do. Our interests are perfectly aligned.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              to="/owners"
              className="mt-12 inline-flex bg-brand-gold text-brand-navy px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:brightness-110 items-center gap-3 active:scale-95 transition-all"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        title="Stop Straining Start Earning"
        subtitle="Let our expert team handle the details so you can focus on building your legacy."
      />
    </div>
  );
}
