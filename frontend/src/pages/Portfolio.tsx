import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import api from '../utils/api';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  client?: string;
  technologies: string[];
  image: string;
  link?: string;
}

const Portfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const { data } = await api.get('/portfolio');
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch portfolio', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Our Work</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we help businesses transform their digital presence.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-emerald-600" size={48} />
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            Check back soon for our latest projects!
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all flex flex-col bg-slate-50"
              >
                <div className="h-56 relative overflow-hidden bg-slate-200">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-slate-700 hover:text-emerald-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    {item.client && (
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1 block">
                        Client: {item.client}
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-slate-800">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6 flex-1">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.technologies.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
