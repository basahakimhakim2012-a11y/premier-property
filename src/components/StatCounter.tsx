import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export default function StatCounter({ value, suffix = '', label, decimals = 0 }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setCount(progress * value);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center group">
      <p className="text-4xl md:text-5xl font-bold text-brand-gold mb-2 transition-transform group-hover:scale-110 duration-300">
        {count.toFixed(decimals)}{suffix}
      </p>
      <p className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-bold">{label}</p>
    </div>
  );
}
