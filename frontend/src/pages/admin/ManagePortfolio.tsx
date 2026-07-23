import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Loader2, Link as LinkIcon } from 'lucide-react';
import api from '../../utils/api';

interface PortfolioItem {
  _id: string;
  title: string;
  slug: string;
  description: string;
  client?: string;
  technologies: string[];
  image: string;
  link?: string;
  isActive: boolean;
}

const ManagePortfolio = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    client: '',
    technologies: 'React, Node, Tailwind',
    image: '',
    link: '',
  });

  const [uploading, setUploading] = useState(false);

  const fetchItems = async () => {
    try {
      const { data } = await api.get('/portfolio');
      setItems(data);
    } catch (error) {
      console.error('Failed to fetch portfolio', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('image', file);

    try {
      const { data } = await api.post('/upload', formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setFormData(prev => ({ ...prev, image: data.url }));
    } catch (error: any) {
      alert('Failed to upload image: ' + (error.response?.data?.error || error.message));
    } finally {
      setUploading(false);
    }
  };

  const openCreateModal = () => {
    setEditingId(null);
    setFormData({ title: '', slug: '', description: '', client: '', technologies: 'React, Node, Tailwind', image: '', link: '' });
    setIsModalOpen(true);
  };

  const openEditModal = (item: any) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      slug: item.slug,
      description: item.description,
      client: item.client || '',
      technologies: item.technologies?.join(', ') || '',
      image: item.image || '',
      link: item.link || '',
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this portfolio item?')) return;
    try {
      await api.delete(`/portfolio/${id}`);
      fetchItems();
    } catch (error) {
      alert('Failed to delete portfolio item');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
    };
    
    try {
      if (editingId) {
        await api.put(`/portfolio/${editingId}`, payload);
      } else {
        await api.post('/portfolio', payload);
      }
      setIsModalOpen(false);
      fetchItems();
    } catch (error: any) {
      const errorMsg = error.response?.data?.message || error.response?.data?.error || error.message;
      alert(`Error saving portfolio: ${errorMsg}`);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800">Manage Portfolio</h2>
        <button 
          onClick={openCreateModal}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={20} /> Add New Item
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center p-12"><Loader2 className="animate-spin text-emerald-500" size={32} /></div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Title</th>
                <th className="px-6 py-4 font-semibold">Client</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    No portfolio items found. Click "Add New Item" to create one.
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item._id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-800">
                      <div className="flex items-center gap-3">
                        {item.image && <img src={item.image} alt={item.title} className="w-10 h-10 rounded-md object-cover border border-slate-200" />}
                        {item.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{item.client || '-'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'}`}>
                        {item.isActive ? 'Active' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-3">
                      <button onClick={() => openEditModal(item)} className="text-blue-500 hover:bg-blue-50 p-2 rounded-md transition-colors">
                        <Edit2 size={18} />
                      </button>
                      <button onClick={() => handleDelete(item._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-slate-800 mb-6">{editingId ? 'Edit Portfolio Item' : 'Create New Item'}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Title</label>
                <input 
                  type="text" required
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value, slug: e.target.value.toLowerCase().replace(/ /g, '-')})}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Slug URL</label>
                  <input 
                    type="text" required
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                    value={formData.slug}
                    onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Client (Optional)</label>
                  <input 
                    type="text"
                    className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                    value={formData.client}
                    onChange={(e) => setFormData({...formData, client: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
                <textarea 
                  required
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none h-24"
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Technologies (Comma separated)</label>
                <input 
                  type="text" required
                  placeholder="React, Node.js, MongoDB"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                  value={formData.technologies}
                  onChange={(e) => setFormData({...formData, technologies: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Live Link (Optional)</label>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 text-slate-400" size={18} />
                  <input 
                    type="url" placeholder="https://"
                    className="w-full border border-slate-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                    value={formData.link}
                    onChange={(e) => setFormData({...formData, link: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Screenshot</label>
                <div className="flex items-center gap-4">
                  {formData.image && (
                    <img src={formData.image} alt="Preview" className="h-16 w-16 object-cover rounded-lg border border-slate-200" />
                  )}
                  <div className="flex-1">
                    <input 
                      type="file" accept="image/*"
                      onChange={handleImageUpload} disabled={uploading}
                      className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 disabled:opacity-50"
                    />
                    {uploading && <p className="text-xs text-emerald-600 mt-1">Uploading...</p>}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 font-medium hover:bg-slate-100 rounded-lg">Cancel</button>
                <button type="submit" disabled={uploading} className="px-4 py-2 bg-emerald-600 text-white font-medium hover:bg-emerald-700 rounded-lg disabled:opacity-50">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePortfolio;
