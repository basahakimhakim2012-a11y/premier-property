import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ArrowRight, Building2, MapPin, User, Mail, Phone } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone is required'),
  propertyAddress: z.string().min(5, 'Address is required'),
  numUnits: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  className?: string;
  source?: string;
}

export default function LeadForm({ className, source = 'general' }: LeadFormProps) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Lead submitted:', { ...data, source });
    // In a real app, this would POST to /api/lead
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/thank-you');
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className={cn("bg-white p-6 md:p-10 rounded-3xl shadow-2xl border border-slate-100", className)}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-brand-navy mb-2">Get Your <span className="text-brand-gold italic">Free</span> Analysis</h3>
        <p className="text-slate-500 text-sm">Professional management starts with expert pricing.</p>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                {...register('name')}
                placeholder="Jane Doe"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {errors.name && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                {...register('email')}
                placeholder="jane@example.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {errors.email && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1">Phone</label>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <input 
                {...register('phone')}
                placeholder="(555) 000-0000"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1"># of Properties</label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
              <select 
                {...register('numUnits')}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold outline-none transition-all appearance-none text-slate-600"
              >
                <option value="1">1 Property</option>
                <option value="2-5">2-5 Properties</option>
                <option value="5-10">5-10 Properties</option>
                <option value="10+">10+ Properties</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 ml-1">Property Address</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
            <input 
              {...register('propertyAddress')}
              placeholder="123 Street Ave, City, State"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold outline-none transition-all placeholder:text-slate-300"
            />
          </div>
          {errors.propertyAddress && <p className="text-red-500 text-[10px] mt-1 ml-1">{errors.propertyAddress.message}</p>}
        </div>

        <button 
          disabled={isSubmitting}
          className="w-full bg-brand-navy text-white font-bold py-4 rounded-xl hover:bg-brand-navy/90 hover:-translate-y-1 active:translate-y-0 transition-all shadow-xl shadow-brand-navy/20 flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            'Processing...'
          ) : (
            <>
              Get My Free Analysis
              <ArrowRight className="w-5 h-5 text-brand-gold" />
            </>
          )}
        </button>
        <p className="text-[10px] text-center text-slate-400">No commitment required. 100% Secure.</p>
      </div>
    </form>
  );
}
