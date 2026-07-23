import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, ExternalLink, Loader2, ArrowRight } from 'lucide-react';
import api from '../utils/api';

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  category?: string;
  image?: string;
}

const fallbackProducts = [
  { 
    _id: '1', 
    name: 'SaĝoKomm - A School Software on SaaS', 
    slug: 'sagokomm', 
    category: 'Education ERP',
    description: `SaĝoKomm - 'Saĝo' Means 'Wisdom - Knowledge' and 'Komm' Means 'Communications' refers as 'A 360 degree Communication of the Knowledge and Information between the Students, Parents, Teachers, Principal and Schools'.

SaĝoKomm offers a unique blend to drastically reduce the Total Cost of Ownership while providing the impetus for business growth, results based computing and managed information delivery. SaĝoKomm provides a 360 degree view with all the features and functionalities of the school preferences. SaĝoKomm is the complete School/College Management Integrated Software that caters across all the features and functionalities of schools and college which they require to operate.

One Click Result Oriented Based Reports. Digital Marksheet based on CBSE, ICSE and State Board with Automatic Calculations. Automatic Notifications through SMS and Secure Online Data.

Functionalities & Features:
• 24*7*365 Automatic SMS Notifications
• CBSE, ICSE Based Digital Marksheet
• Scholastic n Co-Scholastic Auto Calculations
• Marksheet Printing Features
• Data Security with SiteLock Secure
• Cloud Based Software as to avoid Data Loss
• Auto Synchronization with Mobile App
• Customisation Available on Dashboard, Fees & Marksheet Panel
• Time Table & TC/CC Auto Generation
• Promotion to Next Class with Pass, Fail & Awaiting Results
• Session Wise Reports - can access the old session data also
• One Click Report
• 100% Cloud Based ERP.
• No Set Up Cost.
• No Installation Cost.
• No Extra AMC.
• No Extra VPS (Virtual Private Server) Cost.
• Constant Evolution with No Extra Cost.
• Free Training (Training Twice in 1st Year and once with every update).
• Data Export to Excel and Print Feature is available with every Report on One Click.
• Data Back Up Facility on One Click.
• 99.5% Up - Time SLA.
• Responsive Application – Accessible on all Browser, Smart Phones and Tablets
• Transactional SMS (active on DND) with Sender ID in a year.`,
    image: '/sagokoom.webp' 
  },
  { _id: '2', name: 'FinTrack Analytics', slug: 'fintrack', category: 'Finance', description: 'Advanced financial tracking and predictive analytics dashboard.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { _id: '3', name: 'HR Connect', slug: 'hr-connect', category: 'Human Resources', description: 'Streamline your human resources and recruitment processes globally.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        if (data && data.length > 0) {
          // Combine backend products with fallback products
          setProducts([...data, ...fallbackProducts] as any);
        } else {
          setProducts(fallbackProducts as any);
        }
      } catch (error) {
        console.error('Failed to fetch products, using fallback data', error);
        setProducts(fallbackProducts as any);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Products</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready-to-deploy software products designed to accelerate your business growth.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-emerald-600" size={48} />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all"
              >
                <div className="h-64 bg-slate-100 relative overflow-hidden">
                  {(product as any).image ? (
                    <img src={(product as any).image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-blue-500/20 group-hover:scale-105 transition-transform duration-500"></div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-slate-700">
                    {product.category || 'Software'}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">{product.name}</h3>
                  <p className="text-slate-600 mb-8 text-lg line-clamp-3">
                    {product.description}
                  </p>
                  
                  <button onClick={() => setSelectedProduct(product)} className="inline-flex items-center justify-center w-full bg-slate-900 text-white font-semibold py-4 rounded-xl hover:bg-emerald-600 transition-colors">
                    Explore Product <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden max-h-[90vh] flex flex-col">
            {(selectedProduct as any).image && (
              <div className="h-64 w-full relative">
                <img src={(selectedProduct as any).image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">✕</button>
              </div>
            )}
            <div className="p-8 overflow-y-auto">
              {!((selectedProduct as any).image) && (
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-slate-800">{selectedProduct.name}</h2>
                  <button onClick={() => setSelectedProduct(null)} className="text-slate-500 hover:text-slate-800 text-xl">✕</button>
                </div>
              )}
              {((selectedProduct as any).image) && <h2 className="text-3xl font-bold text-slate-800 mb-4">{selectedProduct.name}</h2>}
              
              <div className="inline-block bg-emerald-100 text-emerald-700 font-semibold px-3 py-1 rounded-full text-sm mb-6">
                {selectedProduct.category || 'Software Product'}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">Overview</h3>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap mb-8">
                {selectedProduct.description}
              </p>

              {selectedProduct.slug === 'sagokomm' && (
                <div className="mt-8 mb-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Modules, Plans & Pricing</h3>
                  <img src="/plans-and-pricing.webp" alt="SaĝoKomm Plans & Pricing" className="w-full rounded-xl shadow-md border border-slate-200 mb-8" />
                  
                  <div className="bg-red-500 text-white rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <h4 className="text-xl font-semibold mb-2">Interested In SaĝoKomm Service! Great.. Let Us help You....</h4>
                    <p className="mb-6">Landing from Facebook Page Offer, Please fill the Form by Clicking Below.</p>
                    <Link to="/contact" className="inline-block bg-white text-red-600 font-bold uppercase tracking-wider py-3 px-8 rounded-full shadow-md hover:bg-slate-100 transition-colors mb-4">
                      Get In Touch !
                    </Link>
                    <p className="font-semibold text-lg">or Call us at 8840854007</p>
                  </div>
                </div>
              )}
              
              <div className="flex justify-end gap-4 border-t border-slate-200 pt-6 mt-6">
                <button onClick={() => setSelectedProduct(null)} className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200">Close</button>
                <Link to="/contact" className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700">Request Demo</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
