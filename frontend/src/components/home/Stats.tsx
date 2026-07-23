import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Monitor, Smile, Trophy, User } from 'lucide-react';

const stats = [
  { id: 1, label: 'Projects', value: 85, icon: Monitor },
  { id: 2, label: 'Schools', value: 22, icon: Smile },
  { id: 3, label: 'Students', value: 27000, icon: Trophy },
  { id: 4, label: 'Overseas Projects', value: 10, icon: User },
];

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 5,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = Math.round(val).toString();
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span ref={ref}>0</span>;
};

const Stats = () => {
  return (
    <section className="py-20 bg-emerald-500 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center text-white"
              >
                <div className="mb-4 p-4 bg-white/10 rounded-full backdrop-blur-sm">
                  <Icon size={40} className="text-white" strokeWidth={1.5} />
                </div>
                <div className="text-5xl md:text-6xl font-light mb-2 tracking-tight">
                  <AnimatedNumber value={stat.value} />
                </div>
                <div className="text-sm md:text-base font-bold tracking-widest uppercase text-emerald-50">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
