import { useParams, Link } from 'react-router-dom';
import { 
  Bed, Bath, Move, MapPin, Share2, Heart, 
  ChevronLeft, CheckCircle2, Calendar, Phone, 
  ShieldCheck, ArrowRight, Home as HomeIcon,
  Info
} from 'lucide-react';
import { listings } from '../lib/listings';
import { cn } from '../lib/utils';
import { useState } from 'react';

export default function RentalDetailPage() {
  const { slug } = useParams();
  const listing = listings.find(l => l.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!listing) {
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold">Property Not Found</h2>
        <Link to="/rentals" className="text-brand-gold underline font-bold">Back to Rentals</Link>
      </div>
    );
  }

  // Mock secondary images
  const images = [
    listing.image,
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <div className="pt-[100px] bg-brand-offwhite min-h-screen pb-24">
      <div className="container mx-auto px-6 mb-8">
        <Link to="/rentals" className="flex items-center gap-2 text-slate-500 hover:text-brand-navy transition-colors font-bold text-xs uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4" />
          Back to Listings
        </Link>
      </div>

      {/* Gallery Section */}
      <section className="container mx-auto px-6 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[400px] md:h-[600px]">
          <div className="md:col-span-8 h-full relative group">
            <img 
              src={images[activeImage]} 
              className="w-full h-full object-cover rounded-[2rem] shadow-xl"
              alt={listing.title}
            />
            <div className="absolute top-6 right-6 flex gap-2">
              <button className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white text-brand-navy shadow-lg transition-all"><Share2 className="w-5 h-5" /></button>
              <button className="bg-white/90 backdrop-blur p-3 rounded-full hover:bg-white text-red-500 shadow-lg transition-all"><Heart className="w-5 h-5" /></button>
            </div>
          </div>
          <div className="md:col-span-4 h-full grid grid-cols-2 md:grid-cols-1 gap-4">
            {images.slice(1).map((img, i) => (
              <button 
                key={i} 
                onClick={() => setActiveImage(i + 1)}
                className={cn(
                  "relative rounded-2xl overflow-hidden border-2 transition-all",
                  activeImage === i + 1 ? "border-brand-gold" : "border-transparent opacity-60 hover:opacity-100"
                )}
              >
                <img src={img} className="w-full h-full object-cover" alt="Property interior" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Details */}
        <div className="lg:col-span-8 space-y-12">
          {/* Header Info */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
            <div className="flex flex-wrap justify-between items-start gap-6 pb-8 border-b border-slate-100 mb-8">
              <div>
                <div className="flex gap-2 mb-4">
                  <span className="bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Managed by Premier</span>
                  <span className="bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Available Now</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-display font-light text-brand-navy mb-4">{listing.title}</h1>
                <p className="flex items-center gap-2 text-slate-400 font-medium text-lg">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  {listing.address}, {listing.city} {listing.zip}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-1">Monthly Rent</p>
                <p className="text-4xl md:text-5xl font-bold text-brand-navy">${listing.price}<span className="text-lg text-slate-400 font-normal">/mo</span></p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400"><Bed className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">Beds</span></div>
                <p className="text-2xl font-bold text-brand-navy">{listing.beds}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400"><Bath className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">Baths</span></div>
                <p className="text-2xl font-bold text-brand-navy">{listing.baths}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400"><Move className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">Square Feet</span></div>
                <p className="text-2xl font-bold text-brand-navy">{listing.sqft.toLocaleString()}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-slate-400"><HomeIcon className="w-5 h-5" /> <span className="text-xs uppercase font-bold tracking-widest">Type</span></div>
                <p className="text-2xl font-bold text-brand-navy capitalize">{listing.type}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
            <h3 className="text-2xl font-display font-medium text-brand-navy mb-6">Property <span className="text-brand-gold italic">Overview</span></h3>
            <p className="text-slate-500 leading-relaxed text-lg mb-8">
              {listing.description} This meticulously maintained property offers the perfect blend of modern convenience and refined aesthetic. Nestled in a prime location, you'll find yourself steps away from the city's finest dining, parks, and transportation hubs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {listing.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location Area Info */}
          <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-brand-navy text-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brand-gold" />
                <div className="text-xs">
                  <p className="font-bold">Walk Score: 94</p>
                  <p className="text-white/60 uppercase text-[8px] tracking-widest">Walker's Paradise</p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-display font-medium text-brand-navy mb-6">Explore the <span className="text-brand-gold italic">Neighborhood</span></h3>
            <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative mb-8 border border-slate-200">
              <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200" alt="Map View" className="w-full h-full object-cover grayscale opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-navy text-white px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-gold" />
                  Explore on Google Maps
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">Public Transit</p>
                <p className="font-bold text-brand-navy">2 min walk (J, M, Z Lines)</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">Nearest Park</p>
                <p className="font-bold text-brand-navy">4 min walk (Battery Park)</p>
              </div>
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2">Grocery Store</p>
                <p className="font-bold text-brand-navy">6 min walk (Whole Foods)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-[120px] space-y-6">
            {/* Booking Form */}
            <div className="bg-brand-navy p-10 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/5 blur-3xl rounded-full translate-x-[-20%] translate-y-[-20%]"></div>
              <h3 className="text-2xl font-display font-medium text-white mb-6">Schedule <span className="text-brand-gold italic">a Tour</span></h3>
              <form className="space-y-4 relative z-10">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white focus:ring-1 focus:ring-brand-gold outline-none" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Tour Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white focus:ring-1 focus:ring-brand-gold outline-none appearance-none">
                      <option className="bg-brand-navy">In-Person</option>
                      <option className="bg-brand-navy">Video Call</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest ml-1">Time</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 text-white focus:ring-1 focus:ring-brand-gold outline-none appearance-none">
                      <option className="bg-brand-navy">Morning</option>
                      <option className="bg-brand-navy">Afternoon</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-brand-gold text-brand-navy font-bold py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-xl mt-4">
                  Book This Tour
                </button>
              </form>
            </div>

            {/* Application CTAs */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-xl font-display font-medium text-brand-navy mb-4">Interested?</h3>
              <div className="space-y-4">
                <Link to="/tenants" className="flex items-center justify-between w-full p-5 bg-slate-50 hover:bg-slate-100 rounded-2xl group transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-navy text-white rounded-xl flex items-center justify-center"><CheckCircle2 className="w-5 h-5" /></div>
                    <div className="text-left">
                      <p className="font-bold text-brand-navy">Apply Now</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Secure Your Home</p>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                </Link>
                
                <a href="tel:8005550123" className="flex items-center justify-between w-full p-5 bg-slate-50 hover:bg-slate-100 rounded-2xl group transition-all text-brand-navy">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-gold/20 text-brand-gold rounded-xl flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                    <div className="text-left">
                      <p className="font-bold">Call Agent</p>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Direct Line: (800) 555-0123</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-4 text-xs text-slate-400 px-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Verified Listing & Secure Application</span>
              </div>
              <div className="flex items-center gap-3">
                <Info className="w-4 h-4 text-brand-gold" />
                <span>Professional Management guaranteed by Premier</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
