import { motion } from 'framer-motion';
import { X, Download, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

export default function ExitIntentModal({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log('Exit intent lead:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onClose();
    // Redirect to thank you or show success
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-5">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-white rounded-3xl overflow-hidden max-w-xl w-full shadow-2xl flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-brand-navy z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="md:w-1/2 bg-brand-navy p-10 flex flex-col justify-center text-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-3xl font-display font-bold mb-4 leading-tight">Wait! Get Our Free <span className="text-brand-gold italic">Rental Pricing</span> Report</h3>
          <p className="text-white/60 text-sm mb-6">Discover how much your property could be earning in today's market. A 15-page deep dive into [City] rental trends.</p>
          <div className="flex items-center gap-3 text-brand-gold text-xs font-bold uppercase tracking-widest">
            <Download className="w-4 h-4" />
            Instant PDF Download
          </div>
        </div>

        <div className="md:w-1/2 p-10 flex flex-col justify-center bg-white">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input 
                  {...register('email')}
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-gold transition-all"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <button 
              disabled={isSubmitting}
              className="w-full bg-brand-gold text-brand-navy font-bold py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Me The Report'}
            </button>
            <p className="text-[10px] text-center text-slate-400">We respect your privacy. No spam, ever.</p>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
