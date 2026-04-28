import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import ExitIntentModal from './components/ExitIntentModal';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import OwnersPage from './pages/OwnersPage';
import TenantsPage from './pages/TenantsPage';
import RentalsPage from './pages/RentalsPage';
import RentalDetailPage from './pages/RentalDetailPage';
import AboutPage from './pages/AboutPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import PortalPage from './pages/PortalPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenModal = sessionStorage.getItem('seen_exit_intent');
        if (!hasSeenModal) {
          setShowExitIntent(true);
          sessionStorage.setItem('seen_exit_intent', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-gold selection:text-brand-navy">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/owners" element={<OwnersPage />} />
            <Route path="/tenants" element={<TenantsPage />} />
            <Route path="/rentals" element={<RentalsPage />} />
            <Route path="/rentals/:slug" element={<RentalDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/owner-portal" element={<PortalPage type="owner" />} />
            <Route path="/tenant-portal" element={<PortalPage type="tenant" />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <StickyMobileCTA />
      
      {/* Exit Intent Modal */}
      <AnimatePresence>
        {showExitIntent && (
          <ExitIntentModal onClose={() => setShowExitIntent(false)} />
        )}
      </AnimatePresence>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button className="bg-brand-navy text-white p-4 rounded-full shadow-2xl flex items-center gap-3 border border-brand-gold/30 hover:scale-110 transition-transform cursor-pointer group">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium pr-2 max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300">Chat with an Expert</span>
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
