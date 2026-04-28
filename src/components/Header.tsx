import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Owners', href: '/owners' },
  { name: 'Tenants', href: '/tenants' },
  { name: 'Rentals', href: '/rentals' },
  { name: 'About', href: '/about' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <header 
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled || !isHome || isOpen
          ? "bg-brand-navy border-b border-white/10 py-3 shadow-xl" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand-gold rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
            <div className="w-4 h-4 bg-brand-navy rounded-sm"></div>
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white font-display">
            PREMIER<span className="text-brand-gold">PROPERTY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-brand-gold",
                location.pathname === link.href ? "text-brand-gold" : "text-white/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/owners" 
            className="bg-brand-gold text-brand-navy px-6 py-2.5 rounded-full font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all text-sm"
          >
            Get My Free Rental Analysis
          </Link>
        </nav>

        {/* Right side icons/mobile menu */}
        <div className="flex items-center gap-4">
          <a href="tel:8005550123" className="lg:hidden text-white bg-white/10 p-2 rounded-full">
            <Phone className="w-5 h-5" />
          </a>
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 top-[60px] bg-brand-navy transition-all duration-300 transform",
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        )}
      >
        <div className="flex flex-col p-8 gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-2xl font-display font-medium text-white hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-auto pb-12 flex flex-col gap-4">
            <Link 
              to="/owners"
              className="bg-brand-gold text-brand-navy py-4 rounded-xl font-bold text-center text-lg"
            >
              Free Rental Analysis
            </Link>
            <div className="flex justify-center gap-6 pt-4 text-white/60">
              <Link to="/owner-portal" className="text-sm border-b border-white/20">Owner Portal</Link>
              <Link to="/tenant-portal" className="text-sm border-b border-white/20">Tenant Portal</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
