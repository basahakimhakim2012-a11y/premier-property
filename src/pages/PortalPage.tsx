import { Link } from 'react-router-dom';
import { User, Lock, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function PortalPage({ type }: { type: 'owner' | 'tenant' }) {
  const isOwner = type === 'owner';

  return (
    <div className="pt-[100px] min-h-screen bg-brand-navy flex items-center justify-center p-6 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[100px] rounded-full -translate-x-1/2"></div>

      <div className="max-w-xl w-full relative z-10">
        <div className="text-center mb-10">
           <Link to="/" className="inline-flex items-center gap-2 mb-8 group">
            <div className="w-8 h-8 bg-brand-gold rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
              <div className="w-4 h-4 bg-brand-navy rounded-sm"></div>
            </div>
            <span className="text-2xl font-bold tracking-tight font-display text-white">
              PREMIER<span className="text-brand-gold">PROPERTY</span>
            </span>
          </Link>
          <h1 className="text-4xl font-display font-light text-white mb-4">
            {isOwner ? 'Owner' : 'Tenant'} <span className="text-brand-gold italic">Portal</span>
          </h1>
          <p className="text-white/40">Enter your credentials to access your secure dashboard.</p>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  type="email"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all placeholder:text-slate-300"
                  placeholder="name@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] uppercase font-bold text-brand-gold hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  type="password"
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-6 focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <button className={cn(
              "w-full py-5 rounded-2xl font-bold text-white shadow-xl flex items-center justify-center gap-3 transition-all active:scale-95",
              isOwner ? "bg-brand-navy" : "bg-brand-gold text-brand-navy"
            )}>
              Secure Login
              <ArrowRight className="w-5 h-5 text-brand-gold" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col items-center gap-6">
             <div className="flex items-center gap-2 text-xs text-slate-400">
               <ShieldCheck className="w-4 h-4 text-green-500" />
               256-bit Encrypted Connection
             </div>
             <p className="text-sm text-slate-500">
                New to Premier? <Link to={isOwner ? "/contact" : "/rentals"} className="text-brand-gold font-bold hover:underline">Request access here.</Link>
             </p>
          </div>
        </div>

        <div className="mt-12 text-center">
           <p className="text-white/20 text-xs mb-4">Having trouble logging in?</p>
           <a href="tel:8005550123" className="text-white/60 font-bold hover:text-brand-gold transition-colors flex items-center justify-center gap-2">
             <HelpCircle className="w-4 h-4" />
             Contact Support
           </a>
        </div>
      </div>
    </div>
  );
}
