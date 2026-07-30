import React, { useState, useEffect } from 'react';
import { Users, Layers, Box, Briefcase, Loader2 } from 'lucide-react';
import api from '../../utils/api';

const Dashboard = () => {
  const [data, setData] = useState({
    totalServices: 0,
    activeProducts: 0,
    portfolioItems: 0,
    contactMessages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/stats');
        setData(res.data);
      } catch (error) {
        console.error('Failed to fetch stats', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  const stats = [
    { label: 'Total Services', value: data.totalServices, icon: <Layers className="text-blue-500" size={32} />, bg: 'bg-blue-50' },
    { label: 'Active Products', value: data.activeProducts, icon: <Box className="text-emerald-500" size={32} />, bg: 'bg-emerald-50' },
    { label: 'Portfolio Items', value: data.portfolioItems, icon: <Briefcase className="text-purple-500" size={32} />, bg: 'bg-purple-50' },
    { label: 'Contact Messages', value: data.contactMessages, icon: <Users className="text-orange-500" size={32} />, bg: 'bg-orange-50' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
            <div className={`p-4 rounded-lg ${stat.bg}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h2>
        <div className="text-slate-500 text-center py-12">
          Analytics chart integration goes here.
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
