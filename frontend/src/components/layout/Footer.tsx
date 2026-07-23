import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-6 inline-flex">
              <img src="/swank-logo.webp" alt="BSA TECH" className="h-16 sm:h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering businesses with innovative software solutions, cutting-edge web development, and digital transformation strategies.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="hover:text-primary-500 transition-colors"><Globe size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Team', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase().replace(' ', '-')}`} className="hover:text-primary-500 transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'ERP Solutions', 'UI/UX Design', 'Digital Marketing'].map((service) => (
                <li key={service}>
                  <Link to="/services" className="hover:text-primary-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary-500 shrink-0 mt-1" />
                <span>123 Tech Boulevard, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary-500 shrink-0" />
                <span>hello@bsatech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} BSA TECH. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary-500 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
