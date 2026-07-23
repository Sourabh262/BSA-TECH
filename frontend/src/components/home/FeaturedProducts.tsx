import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'School Management Software',
    category: 'Education ERP',
    description: 'SaaS based Application for the Schools inbuilt with SMS Services and Digital Marksheet.',
    features: ['SMS Services', 'Digital Marksheet', 'Cloud Based SaaS', 'School Administration'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Library Management Software',
    category: 'Education ERP',
    description: 'Digital Solutions which help the organisation to manage the work of Library on a single click.',
    features: ['Book Tracking', 'Member Management', 'One Click Issue/Return', 'Digital Catalog'],
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Attendance Management Software',
    category: 'Enterprise Tools',
    description: 'To Mark the Attendance Manually or with the Help of Barcode or Bio-Metric Devices. Inbuilt with Automatic SMS Notifications also for the Absentees.',
    features: ['Biometric/Barcode Support', 'Automatic SMS for Absentees', 'Manual Override', 'Detailed Reports'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    name: 'SMS Panel',
    category: 'Communication',
    description: 'To send Bulk SMSs on both DND or Non-DND Numbers. Can be used as Promotional or Informational. Available with Customise Panel.',
    features: ['Bulk SMS Delivery', 'DND/Non-DND Routing', 'Customisable Panel', 'Promotional Campaigns'],
    image: 'https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80&w=800',
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Products</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ready-to-Deploy Software</h2>
            <p className="text-lg text-slate-600">
              Accelerate your digital transformation with our powerful, customizable, and enterprise-grade software products.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/products" className="inline-flex items-center gap-2 text-slate-900 font-semibold hover:text-primary-600 transition-colors group">
              Explore All Products
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 group flex flex-col sm:flex-row"
            >
              <div className="sm:w-2/5 h-64 sm:h-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full w-max mb-4">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h3>
                <p className="text-slate-600 mb-6 text-sm">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-700">
                      <CheckCircle2 size={16} className="text-primary-500 mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link to="/products" className="text-primary-600 font-semibold hover:text-primary-700 text-sm flex items-center group-hover:underline">
                    View Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
