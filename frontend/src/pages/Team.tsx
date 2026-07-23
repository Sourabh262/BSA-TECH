import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const teamMembers = [
  {
    location: 'PRAYAGRAJ',
    name: 'Er. Alok Tripathi',
    address: 'Krishnampuram, Prem Nagar, Korsand, Ghori Road, Shantipuram, Phaphamau, Prayagraj, UP-211013',
    email: 'bsatech20@gmail.com',
    phone: '8840854007',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
  },
  {
    location: 'LUCKNOW',
    name: 'Er. Ajay Clarin',
    address: '306-B, 3rd Floor Prince Complex Behind Sahu Cinema, Hazratganj, Lucknow, UP-226301',
    email: 'ajay.clarin@bsatech.in',
    phone: '9936251117',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
  },
  {
    location: 'HALDWANI',
    name: 'Er. Ankur Agrahari',
    address: 'H-12, U-1 Durga City Centre, Haldwani, Nainital-Uttarakhand',
    email: 'ankur@bsatech.in',
    phone: '9406744677',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
  }
];

const Team = () => {
  return (
    <div className="pt-4 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Our Team & Offices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            Reach out to our experts directly. We have dedicated representatives across multiple locations ready to help transform your business.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary-900/40 group-hover:bg-primary-900/10 transition-colors z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
                    {member.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{member.name}</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary-600 mt-1 shrink-0" size={20} />
                    <p className="text-slate-600 text-sm leading-relaxed">{member.address}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-primary-600 shrink-0" size={20} />
                    <a href={`mailto:${member.email}`} className="text-slate-600 text-sm hover:text-primary-600 transition-colors">
                      {member.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-primary-600 shrink-0" size={20} />
                    <a href={`tel:${member.phone}`} className="text-slate-600 text-sm hover:text-primary-600 transition-colors font-medium">
                      +91 {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
