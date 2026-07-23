import React from 'react';
import { Users, Target, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About BSA TECH</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to delivering premium digital solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" className="rounded-2xl shadow-2xl" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 mb-6">
              At BSA TECH, our mission is to empower businesses through innovative technology. We believe in building scalable, secure, and beautiful software that solves real-world problems and accelerates growth.
            </p>
            <p className="text-lg text-slate-600">
              Founded with a vision to redefine digital excellence, we partner with startups and enterprises alike to transform their ideas into production-ready realities.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Users size={32} />, title: 'Expert Team', desc: 'Industry-leading professionals' },
            { icon: <Target size={32} />, title: 'Result Driven', desc: 'Focused on your success' },
            { icon: <Zap size={32} />, title: 'Fast Delivery', desc: 'Agile and efficient' },
            { icon: <Shield size={32} />, title: 'Secure By Design', desc: 'Enterprise-grade security' }
          ].map((val, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{val.title}</h3>
              <p className="text-slate-600">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
