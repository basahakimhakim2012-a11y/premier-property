import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYouPage() {
  return (
    <div className="pt-[100px] min-h-screen bg-brand-offwhite flex items-center justify-center py-20 px-6">
      <div className="max-w-3xl w-full bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden text-center relative">
        <div className="absolute top-0 inset-x-0 h-2 bg-brand-gold"></div>
        
        <div className="p-12 md:p-20">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500"
          >
            <CheckCircle2 className="w-12 h-12" />
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-display font-light text-brand-navy mb-6">
            Analysis <span className="text-brand-gold italic">Confirmed</span>.
          </h1>
          
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
            Thank you for your request. Our local market expert is already crunching the numbers for your property. You'll receive your detailed report via email within the next 2-4 business hours.
          </p>

          <div className="bg-brand-navy rounded-3xl p-10 text-white mb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-4">Want a faster result?</h3>
              <p className="text-white/60 mb-8 text-sm">Skip the wait and schedule a 15-minute valuation call directly with our portfolio manager.</p>
              
              <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center p-8 group cursor-pointer hover:bg-white/10 transition-all">
                <Calendar className="w-10 h-10 text-brand-gold mb-4" />
                <p className="font-bold text-lg mb-2">Book Valuation Call</p>
                <div className="flex items-center gap-2 text-xs uppercase font-black tracking-widest text-white/40">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Next Available: Tomorrow at 9:00 AM
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/" className="text-brand-navy font-bold flex items-center gap-2 hover:gap-3 transition-all py-3">
              Return to Homepage
              <ChevronRight className="w-5 h-5 text-brand-gold" />
            </Link>
            <Link to="/resources" className="text-slate-400 font-bold hover:text-brand-navy transition-colors">
              Browse Owner Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
