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
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

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
                onClick={() => setSelectedItem(item)}
                className="group rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all flex flex-col bg-slate-50 cursor-pointer"
              >
                <div className="h-56 relative overflow-hidden bg-slate-200">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
                  )}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-slate-700 hover:text-emerald-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
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
                  <p className="text-slate-600 mb-6 flex-1 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.technologies.slice(0, 3).map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-semibold">+{item.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Portfolio Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row">
            {selectedItem.image && (
              <div className="md:w-1/2 h-64 md:h-auto relative bg-slate-100 shrink-0">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-cover" />
                <button onClick={() => setSelectedItem(null)} className="md:hidden absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">✕</button>
              </div>
            )}
            <div className="p-8 overflow-y-auto flex-1">
              <div className="hidden md:flex justify-end mb-2">
                <button onClick={() => setSelectedItem(null)} className="text-slate-500 hover:text-slate-800 text-xl">✕</button>
              </div>
              
              {selectedItem.client && (
                <span className="inline-block bg-emerald-100 text-emerald-700 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-full mb-3">
                  Client: {selectedItem.client}
                </span>
              )}
              <h2 className="text-3xl font-bold text-slate-800 mb-6">{selectedItem.title}</h2>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2">Project Overview</h3>
              <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-wrap mb-8">
                {selectedItem.description}
              </p>
              
              <h3 className="text-lg font-bold text-slate-800 mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedItem.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-sm font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4 border-t border-slate-200 pt-6 mt-6">
                {selectedItem.link && (
                  <a href={selectedItem.link} target="_blank" rel="noreferrer" className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 flex items-center gap-2">
                    <ExternalLink size={18} /> View Live Project
                  </a>
                )}
                <button onClick={() => setSelectedItem(null)} className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
