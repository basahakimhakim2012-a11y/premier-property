import { Link } from 'react-router-dom';
import { Phone, Search } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-brand-navy border-t border-white/10 grid grid-cols-2">
      <a 
        href="tel:8005550123"
        className="flex items-center justify-center gap-2 py-4 text-white hover:bg-white/5 transition-colors font-bold"
      >
        <Phone className="w-5 h-5 text-brand-gold" />
        Call Us
      </a>
      <Link 
        to="/owners"
        className="flex items-center justify-center gap-2 py-4 bg-brand-gold text-brand-navy font-bold hover:brightness-110 active:scale-95 transition-all"
      >
        <Search className="w-5 h-5" />
        Free Analysis
      </Link>
    </div>
  );
}
