import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Shield, ArrowRight, Loader2, Database, Server, Globe } from 'lucide-react';
import api from '../utils/api';

interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  icon?: string;
}

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Server,
  Globe
};

const fallbackServices = [
  { _id: '1', title: 'Custom Software Development', slug: 'custom-software', shortDescription: 'Tailored software solutions designed to meet your specific business requirements and accelerate growth.', icon: <Code size={32} /> },
  { _id: '2', title: 'Mobile App Development', slug: 'mobile-app', shortDescription: 'Native and cross-platform mobile applications that deliver exceptional user experiences.', icon: <Smartphone size={32} /> },
  { _id: '3', title: 'Cloud Architecture', slug: 'cloud-architecture', shortDescription: 'Scalable and secure cloud infrastructure setup, migration, and management.', icon: <Cloud size={32} /> },
  { _id: '4', title: 'Cybersecurity Solutions', slug: 'cybersecurity', shortDescription: 'Comprehensive security audits and implementation to protect your digital assets.', icon: <Shield size={32} /> }
];

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch services', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive technology solutions engineered for scale, performance, and security.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-primary-600" size={48} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon || 'Code'] || Code;
              return (
                <motion.div
                  key={service._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group overflow-hidden flex flex-col"
                >
                  {(service as any).image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img src={(service as any).image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors shrink-0">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                      {service.shortDescription}
                    </p>
                    <button onClick={() => setSelectedService(service)} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 mt-auto text-left">
                      Learn more <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden max-h-[90vh] flex flex-col">
            {(selectedService as any).image && (
              <div className="h-56 w-full relative">
                <img src={(selectedService as any).image} alt={selectedService.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedService(null)} className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">✕</button>
              </div>
            )}
            <div className="p-8 overflow-y-auto">
              {!((selectedService as any).image) && (
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-slate-800">{selectedService.title}</h2>
                  <button onClick={() => setSelectedService(null)} className="text-slate-500 hover:text-slate-800 text-xl">✕</button>
                </div>
              )}
              {((selectedService as any).image) && <h2 className="text-3xl font-bold text-slate-800 mb-6">{selectedService.title}</h2>}
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">Service Details</h3>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap mb-8">
                {(selectedService as any).fullDescription || selectedService.shortDescription}
              </p>
              
              <div className="flex justify-end gap-4 border-t border-slate-200 pt-6 mt-6">
                <button onClick={() => setSelectedService(null)} className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200">Close</button>
                <Link to="/contact" className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
