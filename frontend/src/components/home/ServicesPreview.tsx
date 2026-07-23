import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Megaphone, ArrowRight, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Web Design',
    description: 'We have a creative Team who creates beautiful Website for Clients.',
    icon: <Code size={32} />,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    title: 'Software Development',
    description: 'We provides SaaS Based Applications and Software to the Organisations.',
    icon: <Server size={32} />,
    color: 'bg-primary-50 text-primary-600',
  },
  {
    id: 3,
    title: 'ERP Solutions',
    description: 'We Customise Softwares and build the ERP Solutions as per the Customer Needs.',
    icon: <Database size={32} />,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    id: 4,
    title: 'E-Commerce',
    description: 'We build Shopping Sites for the Mid Segment Businesses who want to sell online.',
    icon: <Smartphone size={32} />,
    color: 'bg-emerald-50 text-emerald-600',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">High-Impact Digital Solutions</h2>
            <p className="text-lg text-slate-600">
              We provide end-to-end software development services designed to propel your business forward in the digital age.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${service.color} transition-transform transform group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">
                {service.description}
              </p>
              <Link to="/services" className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors">
                Learn more <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/services" className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-xl">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
