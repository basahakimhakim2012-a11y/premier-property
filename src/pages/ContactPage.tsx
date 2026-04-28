import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle2, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-[100px] bg-white min-h-screen">
      <section className="bg-brand-navy py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-8xl font-display font-light text-white mb-6 leading-tight">
              Get in <span className="text-brand-gold italic">Touch</span>.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Have questions about your property or looking for a new home? Our team of local [City] experts is standing by to assist.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2"></div>
      </section>

      <div className="container mx-auto px-6 -mt-16 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Card */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-6">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-8">Direct Connections</h3>
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-brand-gold">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Call Us</p>
                      <p className="text-xl font-bold text-brand-navy">(800) 555-0123</p>
                      <p className="text-sm text-slate-500 mt-1">Available 24/7 for maintenance emergencies.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-brand-gold">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Email Us</p>
                      <p className="text-xl font-bold text-brand-navy">hello@premierproperty.com</p>
                      <p className="text-sm text-slate-500 mt-1">We respond to all inquiries within 2 hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-brand-gold">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Visit Us</p>
                      <p className="text-xl font-bold text-brand-navy">123 Management Way, Manhattan, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 text-brand-gold">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">Office Hours</p>
                      <p className="text-xl font-bold text-brand-navy">Mon — Fri: 9:00 AM - 6:00 PM</p>
                      <p className="text-sm text-slate-500 mt-1">Saturday by appointment only.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100">
                <p className="text-slate-400 text-sm mb-6 uppercase font-bold tracking-widest">Connect Socially</p>
                <div className="flex gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 bg-brand-navy text-white rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all cursor-pointer">
                       <Globe className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-12 xl:col-span-7">
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
               <div className="mb-10">
                  <h3 className="text-3xl font-display font-light text-brand-navy mb-4">Send a <span className="text-brand-gold italic">Message</span></h3>
                  <p className="text-slate-500 text-lg">Thinking about professional management? Let's start the conversation.</p>
               </div>
               
               <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                        <input className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all" placeholder="Jane Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all" placeholder="jane@example.com" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Inquiry Type</label>
                     <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all appearance-none">
                        <option>Management Consultation</option>
                        <option>Maintenance Request</option>
                        <option>Rental Inquiry</option>
                        <option>General Question</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                     <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-brand-gold/30 outline-none transition-all placeholder:text-slate-300" placeholder="Tell us about your property or needs..."></textarea>
                  </div>
                  <button className="w-full bg-brand-navy text-white font-bold py-5 rounded-2xl hover:bg-brand-navy/90 hover:-translate-y-1 active:translate-y-0 transition-all shadow-xl shadow-brand-navy/20 flex items-center justify-center gap-3">
                     Send Message
                     <ChevronRight className="w-5 h-5 text-brand-gold" />
                  </button>
               </form>

               <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                     <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                     2 HR Response Time
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                     <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                     Secure Data Handling
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-slate-100 relative grayscale opacity-70">
         <img src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Map View" />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-brand-navy text-white p-8 rounded-[2rem] shadow-2xl flex flex-col items-center gap-4 border border-white/10">
               <MapPin className="w-12 h-12 text-brand-gold" />
               <div className="text-center">
                  <h4 className="font-bold text-lg">Main Office</h4>
                  <p className="text-white/60 text-sm">123 Management Way, Manhattan</p>
               </div>
               <button className="bg-brand-gold text-brand-navy px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest mt-2">Get Directions</button>
            </div>
         </div>
      </section>
    </div>
  );
}
