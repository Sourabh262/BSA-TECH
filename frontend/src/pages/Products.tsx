import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Box, ExternalLink, Loader2 } from 'lucide-react';
import api from '../utils/api';

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
}

const fallbackProducts = [
  { _id: '1', name: 'ERP Pro Suite', slug: 'erp-pro', description: 'Complete enterprise resource planning solution for modern businesses.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { _id: '2', name: 'FinTrack Analytics', slug: 'fintrack', description: 'Advanced financial tracking and predictive analytics dashboard.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { _id: '3', name: 'HR Connect', slug: 'hr-connect', description: 'Streamline your human resources and recruitment processes globally.', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('/products');
        if (data && data.length > 0) {
          setProducts(data);
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
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
          >
            Our <span className="text-emerald-600">Products</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Ready-to-deploy software products that accelerate your business operations and reduce time to market.
          </motion.p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-emerald-500" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden shadow-lg border border-slate-100 flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden bg-slate-100 relative">
                  <div className="absolute inset-0 bg-emerald-600/20 mix-blend-multiply group-hover:bg-emerald-600/0 transition-colors duration-500 z-10" />
                  <img 
                    src={(product as any).image || fallbackProducts[index % fallbackProducts.length].image} 
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1 bg-white">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">{product.name}</h3>
                  <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                    {product.description}
                  </p>
                  <Link 
                    to={`/products/${product.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  >
                    View Product Details
                    <ExternalLink size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Products;
