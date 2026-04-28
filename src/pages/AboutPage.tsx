import { ShieldCheck, Heart, Building2, Sparkles } from 'lucide-react';
import StatCounter from '../components/StatCounter';
import CTASection from '../components/CTASection';

export default function AboutPage() {
  return (
    <div className="pt-[100px] bg-white min-h-screen pb-24">
      {/* Hero */}
      <section className="bg-brand-navy py-12 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 py-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-8xl font-display font-light text-white mb-8 leading-[0.9]">
              Managing with <br />
              <span className="text-brand-gold italic">Integrity</span> since 2012.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              We started with a single multi-unit building in [City]. Today, we manage a portfolio worth over $400M, driven by a simple goal: humanizing the landlord-tenant relationship through technology and trust.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/4"></div>
      </section>

      {/* Stats */}
      <section className="bg-brand-offwhite py-12 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-12">
            <StatCounter value={14} label="Years in Business" />
            <StatCounter value={1200} suffix="+" label="Doors Managed" />
            <StatCounter value={450} suffix="+" label="Satisfied Owners" />
            <StatCounter value={5.0} label="Google Rating" decimals={1} />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" className="rounded-[2rem] shadow-lg" alt="Exterior" />
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" className="rounded-[2rem] shadow-lg" alt="Interior" />
            </div>
            <div className="pt-12 space-y-4">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800" className="rounded-[2rem] shadow-lg" alt="Loft" />
              <div className="aspect-square bg-brand-gold rounded-[2rem] flex items-center justify-center p-8 text-brand-navy shadow-xl">
                 <Building2 className="w-full h-full" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-light text-brand-navy mb-8">Redefining Property <span className="text-brand-gold italic">Stewardship</span></h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-6">
              Premier Property Management was founded on the belief that property management shouldn't be a source of stress, but a driver of wealth and community stability.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Our founders were landlords themselves who became frustrated with the lack of transparency, the hidden fees, and the slow response times of traditional agencies. They built the company they wanted to hire.
            </p>
            <div className="space-y-6">
               {[
                 { icon: ShieldCheck, title: 'Total Transparency', desc: 'Every receipt and communication is visible in your portal.' },
                 { icon: Heart, title: 'Tenant First Culture', desc: 'Happy tenants lead to longer stays and better ROI for owners.' },
                 { icon: Sparkles, title: 'Tech-Forward Approach', desc: 'Automating the mundane so our team can focus on people.' }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
                       <item.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                       <h4 className="font-bold text-brand-navy">{item.title}</h4>
                       <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-navy relative overflow-hidden text-center text-white">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-display font-light mb-16">The Values That <span className="text-brand-gold italic">Drive Us</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Honesty Above All', desc: 'We deliver news fast, especially the tough news. No sugar-coating, just solutions.' },
              { title: 'Obsessive Quality', desc: 'Whether it’s a photograph or a pipe repair, we do it right the first time.' },
              { title: 'Radical Ownership', desc: 'We treat every property like we own it. Your success is our reputation.' }
            ].map((v, i) => (
              <div key={i} className="bg-white/5 p-12 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group">
                <h3 className="text-2xl font-bold text-brand-gold mb-4 group-hover:scale-110 transition-transform">{v.title}</h3>
                <p className="text-white/60 leading-relaxed text-lg">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-display font-light text-brand-navy mb-4">Meet the <span className="text-brand-gold italic">Leadership</span> Team</h2>
          <p className="text-slate-500">Expertise in real estate, law, technology, and customer service.</p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Marcus Sterling', role: 'CEO & Founder', img: 'https://i.pravatar.cc/300?img=12' },
            { name: 'Elena Vance', role: 'COO', img: 'https://i.pravatar.cc/300?img=32' },
            { name: 'David Cho', role: 'Head of Maintenance', img: 'https://i.pravatar.cc/300?img=15' },
            { name: 'Maya Patel', role: 'Legal Compliance', img: 'https://i.pravatar.cc/300?img=45' }
          ].map((m, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 rounded-full overflow-hidden aspect-square mx-auto max-w-[240px] shadow-xl border-4 border-white ring-1 ring-slate-100">
                <img src={m.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={m.name} />
              </div>
              <h4 className="text-2xl font-bold text-brand-navy mb-1">{m.name}</h4>
              <p className="text-[10px] uppercase font-black tracking-widest text-brand-gold">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection 
        title="Ready to Start Your Partnership?"
        subtitle="Experience the difference of a management company that values your time as much as you do."
      />
    </div>
  );
}
