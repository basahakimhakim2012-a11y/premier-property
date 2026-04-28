import { Link } from 'react-router-dom';
import { Bed, Bath, Move, MapPin, ArrowUpRight } from 'lucide-react';
import { Listing } from '../lib/listings';

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={listing.image} 
          alt={listing.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {listing.featured && (
            <span className="bg-brand-navy text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">Featured</span>
          )}
          <span className="bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">${listing.price}/mo</span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-1">{listing.title}</h3>
        </div>
        
        <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span className="line-clamp-1">{listing.address}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 border-y border-slate-50 py-4 mb-6">
          <div className="flex flex-col items-center gap-1">
            <Bed className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-brand-navy">{listing.beds} Bed</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-slate-50">
            <Bath className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-brand-navy">{listing.baths} Bath</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Move className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-bold text-brand-navy">{listing.sqft} sqft</span>
          </div>
        </div>

        <Link 
          to={`/rentals/${listing.slug}`}
          className="mt-auto bg-slate-50 text-brand-navy font-bold py-3.5 rounded-xl hover:bg-brand-navy hover:text-white transition-all text-center flex items-center justify-center gap-2 group/btn"
        >
          View Details
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}
