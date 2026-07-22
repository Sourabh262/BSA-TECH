import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Shield, ArrowRight, Loader2 } from 'lucide-react';
import api from '../utils/api';

interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
}

const fallbackServices = [
  { _id: '1', title: 'Custom Software Development', slug: 'custom-software', shortDescription: 'Tailored software solutions designed to meet your specific business requirements and accelerate growth.', icon: <Code size={32} /> },
  { _id: '2', title: 'Mobile App Development', slug: 'mobile-app', shortDescription: 'Native and cross-platform mobile applications that deliver exceptional user experiences.', icon: <Smartphone size={32} /> },
  { _id: '3', title: 'Cloud Architecture', slug: 'cloud-architecture', shortDescription: 'Scalable and secure cloud infrastructure setup, migration, and management.', icon: <Cloud size={32} /> },
  { _id: '4', title: 'Cybersecurity Solutions', slug: 'cybersecurity', shortDescription: 'Comprehensive security audits and implementation to protect your digital assets.', icon: <Shield size={32} /> }
];

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        if (data && data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices as any);
        }
      } catch (error) {
        console.error('Failed to fetch services, using fallback data', error);
        setServices(fallbackServices as any);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Our <span className="text-primary-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            We deliver enterprise-grade digital solutions that empower businesses to thrive in the modern technological landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary-500" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl flex items-center justify-center mb-6">
                  {/* Dynamic icon rendering would go here, using a placeholder for now */}
                  <Code size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                  {service.shortDescription}
                </p>
                <Link 
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors mt-auto group"
                >
                  Learn More 
                  <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Services;
