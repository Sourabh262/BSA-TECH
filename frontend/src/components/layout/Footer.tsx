import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
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
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Team', path: '/team' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-primary-500 transition-colors">
                    {link.name}
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


        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-sm text-slate-400 font-medium">
            &copy; 2020 | BSA TECH | Designed by BSA TEAM
          </p>
          <p className="text-xs text-slate-500 max-w-4xl leading-relaxed">
            Use of this Site is subject to express <Link to="/terms" className="text-primary-500 hover:underline">Terms of Use</Link>. By using this Site, you signify that you agree to be bound by these Terms of Use, which were last revised on January 10, 2018. <Link to="/privacy" className="text-primary-500 hover:underline">Legal & Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
