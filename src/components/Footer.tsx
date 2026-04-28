import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Resources', href: '/resources' },
  ],
  owners: [
    { name: 'Free Rental Analysis', href: '/owners' },
    { name: 'Owner Portal', href: '/owner-portal' },
    { name: 'Management Services', href: '/services' },
    { name: 'Pricing Plans', href: '/pricing' },
  ],
  tenants: [
    { name: 'Available Rentals', href: '/rentals' },
    { name: 'Tenant Portal', href: '/tenant-portal' },
    { name: 'Apply Now', href: '/tenants' },
    { name: 'Maintenance Request', href: '/tenant-portal' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-brand-gold rounded-sm rotate-45 flex items-center justify-center transition-transform group-hover:rotate-90 duration-500">
                <div className="w-4 h-4 bg-brand-navy rounded-sm"></div>
              </div>
              <span className="text-2xl font-bold tracking-tight font-display">
                PREMIER<span className="text-brand-gold">PROPERTY</span>
              </span>
            </Link>
            <p className="text-white/60 mb-8 max-w-sm leading-relaxed">
              We provide stress-free, tech-enabled property management in [City]. Maximize your ROI with our performance-based management and award-winning service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-white/60 hover:text-brand-gold transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">For Owners</h4>
            <ul className="space-y-4">
              {footerLinks.owners.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-white/60 hover:text-brand-gold transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">For Tenants</h4>
            <ul className="space-y-4">
              {footerLinks.tenants.map((link) => (
                <li key={link.name}><Link to={link.href} className="text-white/60 hover:text-brand-gold transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-y border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-brand-gold/10 p-2 rounded-lg text-brand-gold"><Phone className="w-5 h-5" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Call Us</p>
              <p className="font-bold">(800) 555-0123</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-brand-gold/10 p-2 rounded-lg text-brand-gold"><Mail className="w-5 h-5" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Email Us</p>
              <p className="font-bold">hello@premierproperty.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-brand-gold/10 p-2 rounded-lg text-brand-gold"><MapPin className="w-5 h-5" /></div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/40">Visit Us</p>
              <p className="font-bold">123 Management Way, Manhattan, NY</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Premier Property Management. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/fair-housing" className="hover:text-white">Fair Housing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
