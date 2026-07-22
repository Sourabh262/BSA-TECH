import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-medium text-sm mb-6 border border-primary-200">
                🚀 Transforming Ideas Into Digital Reality
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Build The Future With <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">BSA TECH</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                We craft premium, high-performance web and mobile applications that drive business growth and user engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/30">
                  Start Your Project
                  <ArrowRight size={20} />
                </Link>
                <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 shadow-sm hover:shadow">
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Visual Showcase (Cards) */}
          <div className="relative h-[500px] hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, x: 50, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-10 right-10 glass p-6 rounded-2xl w-72 shadow-2xl z-20 border border-white/40"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Web Development</h3>
              <p className="text-slate-600 text-sm">Scalable React & Node.js applications built for performance.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-20 left-10 glass p-6 rounded-2xl w-72 shadow-xl z-30 border border-white/40"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Mobile Apps</h3>
              <p className="text-slate-600 text-sm">Native and cross-platform mobile experiences.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 bg-gradient-to-tr from-primary-200 to-blue-200 w-96 h-96 rounded-full blur-2xl opacity-60 animate-pulse"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
