import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

export default function CTASection({ 
  title, 
  subtitle, 
  primaryCTA = "Get My Free Rental Analysis",
  primaryHref = "/owners",
  className 
}: { 
  title: string; 
  subtitle: string; 
  primaryCTA?: string; 
  primaryHref?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-20 bg-brand-navy relative overflow-hidden", className)}>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-white/5 blur-[100px] rounded-full -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-6 leading-tight">
          {title.split(' ').map((word, i) => i === 1 ? <span key={i} className="text-brand-gold italic block md:inline">{word} </span> : word + ' ')}
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to={primaryHref}
            className="bg-brand-gold text-brand-navy px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {primaryCTA}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/contact"
            className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all text-center"
          >
            Speak with an Expert
          </Link>
        </div>
        <p className="mt-8 text-white/40 text-xs flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Now accepting 12 new properties this month
        </p>
      </div>
    </section>
  );
}
