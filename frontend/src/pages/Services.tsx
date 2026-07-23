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
  { 
    _id: '1', 
    title: 'Web Design', 
    slug: 'web-design', 
    shortDescription: 'We have a creative Team who creates beautiful Website for Clients.', 
    icon: <Code size={32} />, 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fullDescription: `"WEBSITE" starts with WWW (World Wide Web) and gives your identity with a Domain Name and make your presence in the Virtual World. From anywhere in the world, Anyone can see virtually/online your identity, your work profile, your products, services, your achievements, and your contact number and address to reach you.

For Website, you need 3 things: Domain Name, Web Hosting and Website Designing. Domain Name reflects your Business/Company Name in the WWW (For Ex:- www.bsatech.in - where bsatech.in is the Domain Name), Web Hosting is the space in the virtual world where your Website stays or host it and Website Designing is the Main Part of the Website which we excel in it. Its a collection of the Layout, Designing, Images, Content, Forms, etc which the Customers need to put it in and we collect the customer ideas with all this and gives the designing and development in the form of Website Development. Cheers !!! Its so simple, your website is UP Now and Live !`,
    ctaMessage: 'So why you are Waiting Now, Give your Ideas to us and we will make them Live in the Digital World......',
    ctaButtonText: 'GET IN TOUCH WITH US FOR YOUR BRAND PARTNER.. ! CLICK HERE'
  },
  { 
    _id: '2', 
    title: 'Software Development', 
    slug: 'software-development', 
    shortDescription: 'We provides SaaS Based Applications and Software to the Organisations.', 
    icon: <Server size={32} />, 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fullDescription: `"SOFTWARE" - the name itself says a very Techy Terms having a set of Structures, Functions, Arrays, Loops and etc, but it helps the people to make their Work very Easy on a Single Click. It runs on the Desktop/Laptop with the Servers, Databases and Framework and in the layman language, we can say, its the APPLICATIONS - who ease our life in this competitive world.

Anyone who want their work Automated in the Computer and need their results or reports on a single click, they need to get their Custom Software Developed by us simply. We have many PRODUCTS for the various Education Sectors and Industries and we can develop the Customised Applications for the New One...`,
    ctaMessage: 'So Share your Work and Ideas with us and we will give you the Better Solutions who will ease your work on a Single Click !',
    ctaButtonText: 'GET IN TOUCH WITH US FOR YOUR TECHNOLOGY PARTNER.. ! CLICK HERE'
  },
  { 
    _id: '3', 
    title: 'ERP Solutions', 
    slug: 'erp-solutions', 
    shortDescription: 'We Customise Softwares and build the ERP Solutions as per the Customer Needs.', 
    icon: <Database size={32} />, 
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fullDescription: `"ERP - Enterprise Resource Planning" - A very complicated Name but in simple, we can say that its the Custom Software/Applications for the Industries as per their Business Need. It Gives you an easy platform to automate your organisation/Industry at your suitability or at your preferences.

With the customisation of the software, you can easily automate your organisation at your preference for your easiness and a user friendly functionality. A unique blend which reduces the work of customers and fasten the work and the growth of the business.`,
    ctaMessage: 'So, if you want your Industry online as per your need, share your requirement with us and we will provide you the Right Solutions for this...',
    ctaButtonText: 'GET IN TOUCH WITH US FOR YOUR TECHNOLOGY PARTNER.. ! CLICK HERE'
  },
  { 
    _id: '4', 
    title: 'E-Commerce Portal', 
    slug: 'e-commerce', 
    shortDescription: 'We build Shopping Sites for the Mid Segment Businesses who want to sell online.', 
    icon: <Smartphone size={32} />, 
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    fullDescription: `"E-COMMERCE" - A Complicated Name but in the layman language, we can say its a Simple Buying and Selling Website, A Shopping Online Website. E-Commerce Website is the Website from where you can buy and sell your products and services by businesses or consumers over the World Wide Web or Online. Its the trading or facilitation of trading in products or services using computer networks, such as the Internet. In Simple Language, you can simply sell or purchase the products Online while sitting at your home.

Easy Navigation, Beautiful Design, Automatic SMS Notifications, Online Payment Gateway and COD Options for the Payment, User Management, CMS Panel to manage the Orders, Products, Quantity and all. With thousands of Ready-Made Themes, you can choose easily what you want for your Industry or Company.`,
    ctaMessage: 'So, if you want your products online to be sell nationally, share with us and we will provide you the Right Solutions for this...',
    ctaButtonText: 'GET IN TOUCH WITH US FOR YOUR TECHNOLOGY PARTNER.. ! CLICK HERE'
  }
];

const Services = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const { data } = await api.get('/services');
        if (data && data.length > 0) {
          setServices([...data, ...fallbackServices] as any);
        } else {
          setServices(fallbackServices as any);
        }
      } catch (error) {
        console.error('Failed to fetch services', error);
        setServices(fallbackServices as any);
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

              {((selectedService as any).ctaMessage) && (
                <div className="bg-red-500 text-white rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8">
                  <h4 className="text-xl font-semibold mb-6">{(selectedService as any).ctaMessage}</h4>
                  <Link to="/contact" className="inline-block bg-white text-red-600 font-bold tracking-wider py-3 px-8 rounded-full shadow-md hover:bg-slate-100 transition-colors">
                    {(selectedService as any).ctaButtonText || "GET IN TOUCH WITH US ! CLICK HERE"}
                  </Link>
                </div>
              )}
              
              <div className="flex justify-end gap-4 border-t border-slate-200 pt-6 mt-6">
                <button onClick={() => setSelectedService(null)} className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
