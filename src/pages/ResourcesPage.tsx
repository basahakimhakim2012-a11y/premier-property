import { motion } from 'framer-motion';
import { Search, ChevronRight, BookOpen, Calculator, FileText, TrendingUp, ShieldCheck } from 'lucide-react';
import CTASection from '../components/CTASection';

const articles = [
  {
    title: 'How to Set the Right Rent Price in [City]',
    excerpt: 'Avoid long vacancies or leaving money on the table with these data-driven pricing strategies.',
    category: 'Guides',
    date: 'Apr 24, 2026',
    img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: '2026 Tax Tips for Rental Property Owners',
    excerpt: 'Maximize your deductions and prepare for tax season with this comprehensive checklist.',
    category: 'Finance',
    date: 'Mar 12, 2026',
    img: 'https://images.unsplash.com/photo-1554224155-1b4e2311f496?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Top 5 Rental Upgrades That Actually Increase ROI',
    excerpt: 'Luxury finishes vs functional updates: where should you invest your renovation dollars?',
    category: 'Investment',
    date: 'Feb 28, 2026',
    img: 'https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'The Landlord Transition Guide: Moving to Professional PM',
    excerpt: 'Everything you need to know about switching from DIY to hiring a management company.',
    category: 'Guides',
    date: 'Feb 15, 2026',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'New Fair Housing Regulations: What Owners Need to Know',
    excerpt: 'Stay compliant and avoid legal pitfalls with our summary of the latest local laws.',
    category: 'Legal',
    date: 'Jan 30, 2026',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Attracting "Type-A" Tenants: Marketing Your Luxury Unit',
    excerpt: 'The psychological factors that influence higher-income renters to choose your property.',
    category: 'Marketing',
    date: 'Jan 12, 2026',
    img: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&q=80&w=800'
  }
];

export default function ResourcesPage() {
  return (
    <div className="pt-[100px] bg-white min-h-screen">
      {/* Search/Header */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-display font-light text-white mb-6">
            Owner <span className="text-brand-gold italic">Insights</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Free guides, market reports, and expert advice for property owners and investors in [City].
          </p>
          <div className="max-w-2xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-gold transition-colors w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search resources (e.g. 'taxes', 'eviction', 'roi')..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
            />
          </div>
        </div>
      </section>

      {/* Categories Bar */}
      <div className="bg-brand-offwhite border-b border-slate-100">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex justify-center gap-12 py-6">
            {[
              { name: 'All Resources', icon: BookOpen },
              { name: 'Guides', icon: FileText },
              { name: 'Investment', icon: TrendingUp },
              { name: 'Finance', icon: Calculator },
              { name: 'Legal', icon: ShieldCheck }
            ].map((cat, i) => (
              <button key={i} className="flex items-center gap-2 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-brand-navy transition-colors">
                 <cat.icon className="w-4 h-4" />
                 {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="group cursor-pointer bg-brand-navy rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2 shadow-2xl relative">
            <div className="aspect-video md:aspect-auto overflow-hidden">
               <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                alt="New York City Skyline Offices"
               />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center text-white relative">
               <div className="absolute top-0 right-0 p-12 text-brand-gold/10 font-display font-black text-9xl select-none">FEATURED</div>
               <span className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4">Latest Guide</span>
               <h2 className="text-4xl md:text-5xl font-display font-light mb-6 leading-tight">State of the <span className="text-brand-gold italic ellipsis">2026 Rental Market</span> in [City]</h2>
               <p className="text-white/60 mb-8 text-lg">Our annual breakdown of vacancy rates, average rents, and upcoming regulatory changes that every owner needs to know.</p>
               <button className="flex items-center gap-3 text-brand-gold font-bold uppercase tracking-widest hover:gap-4 transition-all w-fit">
                 Read Full Report <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Grid */}
      <section className="py-24 bg-brand-offwhite">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group"
              >
                <div className="aspect-video relative overflow-hidden">
                   <img src={article.img} className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110" alt={article.title} />
                   <div className="absolute top-4 left-4 bg-brand-navy/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{article.category}</div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <p className="text-[10px] uppercase font-black text-slate-400 tracking-widest mb-4">{article.date}</p>
                   <h3 className="text-2xl font-display font-medium text-brand-navy mb-4 group-hover:text-brand-gold transition-colors">{article.title}</h3>
                   <p className="text-slate-500 mb-8 flex-grow">{article.excerpt}</p>
                   <button className="inline-flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors group/btn">
                      Read Guide <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
             <button className="bg-white border border-slate-200 text-brand-navy px-10 py-5 rounded-2xl font-bold hover:bg-brand-navy hover:text-white transition-all shadow-sm">
                Load More Articles
             </button>
          </div>
        </div>
      </section>

      <CTASection 
        title="Ready to Transform Your Asset?"
        subtitle="Get a personalized portfolio analysis and see how professional management pays for itself."
      />
    </div>
  );
}
