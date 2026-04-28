import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { listings } from '../lib/listings';
import ListingCard from '../components/ListingCard';
import { cn } from '../lib/utils';

export default function RentalsPage() {
  const [filterType, setFilterType] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<number>(6000);

  const filteredListings = listings.filter(l => {
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          l.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' || l.type === filterType;
    const matchesPrice = l.price <= priceRange;
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="pt-[100px] min-h-screen bg-brand-offwhite pb-24">
      {/* Search Header */}
      <section className="bg-brand-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-light text-white mb-6">
            Find Your <span className="text-brand-gold italic">Next</span> Home
          </h1>
          <p className="text-white/60 mb-10 max-w-2xl mx-auto">
            Explore our curated selection of luxury rentals in [City]. Every property is professionally managed for a seamless living experience.
          </p>
          
          <div className="max-w-4xl mx-auto bg-white p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-grow w-full relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by neighborhood, street, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-16 pr-6 py-4 bg-transparent focus:outline-none text-brand-navy font-medium"
              />
            </div>
            <div className="h-10 w-[1px] bg-slate-100 hidden md:block"></div>
            <div className="flex gap-2 p-2">
              <button 
                className={cn(
                  "px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap",
                  filterType === 'all' ? "bg-brand-navy text-white" : "text-slate-500 hover:bg-slate-50"
                )}
                onClick={() => setFilterType('all')}
              >
                All Properties
              </button>
              <button 
                className={cn(
                  "px-6 py-3 rounded-2xl font-bold transition-all whitespace-nowrap",
                  filterType === 'apartment' ? "bg-brand-navy text-white" : "text-slate-500 hover:bg-slate-50"
                )}
                onClick={() => setFilterType('apartment')}
              >
                Apartments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Results */}
      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 sticky top-[120px]">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-50">
                <h3 className="text-xl font-bold text-brand-navy flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-brand-gold" />
                  Filters
                </h3>
                <button 
                  onClick={() => {
                    setFilterType('all');
                    setPriceRange(6000);
                    setSearchQuery('');
                  }}
                  className="text-xs font-bold text-brand-gold uppercase tracking-widest hover:underline"
                >
                  Reset
                </button>
              </div>

              <div className="mb-8">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-6">Max Price: ${priceRange}/mo</label>
                <input 
                  type="range" 
                  min="2000" 
                  max="6000" 
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full accent-brand-gold bg-slate-100 h-1.5 rounded-full appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase">
                  <span>$2k</span>
                  <span>$6k+</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="block text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Property Type</p>
                {['apartment', 'house', 'condo'].map((type) => (
                  <label key={type} className="flex items-center gap-3 group cursor-pointer">
                    <div 
                      className={cn(
                        "w-5 h-5 rounded border transition-all flex items-center justify-center",
                        filterType === type ? "border-brand-gold bg-brand-gold" : "border-slate-300 group-hover:border-brand-gold"
                      )}
                      onClick={() => setFilterType(type)}
                    >
                      {filterType === type && <X className="w-3 h-3 text-brand-navy" />}
                    </div>
                    <span className="capitalize text-slate-600 font-medium group-hover:text-brand-navy">{type}</span>
                  </label>
                ))}
              </div>

              <div className="mt-12 bg-brand-navy p-6 rounded-2xl relative overflow-hidden group cursor-pointer">
                <div className="relative z-10">
                  <h4 className="text-white font-bold mb-2">Owner?</h4>
                  <p className="text-white/60 text-xs mb-4 leading-relaxed">List your property with Premier and find qualified tenants fast.</p>
                  <button className="text-brand-gold font-bold text-xs uppercase tracking-widest flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </aside>

          {/* Results Grid */}
          <main className="lg:w-3/4">
            <div className="flex justify-between items-center mb-8">
              <p className="text-slate-500 font-medium">Showing <span className="text-brand-navy font-bold">{filteredListings.length}</span> properties</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 uppercase font-black tracking-widest">Sort By:</span>
                <select className="bg-transparent font-bold text-brand-navy outline-none cursor-pointer">
                  <option>Price: High to Low</option>
                  <option>Price: Low to High</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <AnimatePresence mode="popLayout">
              {filteredListings.length > 0 ? (
                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredListings.map((listing) => (
                    <motion.div 
                      key={listing.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      layout
                    >
                      <ListingCard listing={listing} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white p-20 rounded-[3rem] text-center border-2 border-dashed border-slate-100"
                >
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                    <Search className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-display font-light text-brand-navy mb-2">No Properties Found</h3>
                  <p className="text-slate-400 mb-8">Try adjusting your filters or search query.</p>
                  <button 
                    onClick={() => {
                      setFilterType('all');
                      setPriceRange(6000);
                      setSearchQuery('');
                    }}
                    className="text-brand-gold font-bold uppercase tracking-widest border-b-2 border-brand-gold"
                  >
                    Clear All Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
);
