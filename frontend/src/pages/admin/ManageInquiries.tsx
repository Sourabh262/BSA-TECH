import React, { useState, useEffect } from 'react';
import { Mail, Trash2, Loader2, CheckCircle } from 'lucide-react';
import api from '../../utils/api';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'New' | 'Read' | 'Responded';
  createdAt: string;
}

const ManageInquiries = () => {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewingInquiry, setViewingInquiry] = useState<Inquiry | null>(null);

  const fetchInquiries = async () => {
    try {
      const { data } = await api.get('/inquiries');
      setInquiries(data);
    } catch (error) {
      console.error('Failed to fetch inquiries', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await api.put(`/inquiries/${id}`, { status: newStatus });
      fetchInquiries();
    } catch (error) {
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    try {
      await api.delete(`/inquiries/${id}`);
      fetchInquiries();
    } catch (error) {
      alert('Failed to delete inquiry');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Mail className="text-primary-600" /> Manage Inquiries
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center p-12"><Loader2 className="animate-spin text-emerald-500" size={32} /></div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm">
                <th className="px-6 py-4 font-semibold">Contact Details</th>
                <th className="px-6 py-4 font-semibold">Message</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    No inquiries found.
                  </td>
                </tr>
              ) : (
                inquiries.map((inquiry) => (
                  <tr key={inquiry._id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{inquiry.name}</div>
                      <div className="text-sm text-slate-500">{inquiry.email}</div>
                      {inquiry.phone && <div className="text-xs text-slate-400">{inquiry.phone}</div>}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-slate-700 text-sm mb-1">{inquiry.subject}</div>
                      <div className="text-slate-600 text-sm line-clamp-2 max-w-xs">{inquiry.message}</div>
                      <div className="text-xs text-slate-400 mt-2">{new Date(inquiry.createdAt).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <select
                        value={inquiry.status}
                        onChange={(e) => handleStatusChange(inquiry._id, e.target.value)}
                        className={`text-sm rounded-full px-3 py-1 font-semibold border-2 outline-none
                          ${inquiry.status === 'New' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                          ${inquiry.status === 'Read' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                          ${inquiry.status === 'Responded' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                        `}
                      >
                        <option value="New">New</option>
                        <option value="Read">Read</option>
                        <option value="Responded">Responded</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-3 items-center h-full">
                      <button onClick={() => setViewingInquiry(inquiry)} className="text-blue-500 hover:bg-blue-50 px-3 py-1 rounded-md transition-colors text-sm font-medium border border-blue-200">
                        Read Full
                      </button>
                      <button onClick={() => handleDelete(inquiry._id)} className="text-red-500 hover:bg-red-50 p-2 rounded-md transition-colors">
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

      {/* View Inquiry Modal */}
      {viewingInquiry && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-200 flex justify-between items-start bg-slate-50">
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-1">{viewingInquiry.subject}</h3>
                <p className="text-sm text-slate-500">From: <span className="font-semibold text-slate-700">{viewingInquiry.name}</span> ({viewingInquiry.email})</p>
                {viewingInquiry.phone && <p className="text-sm text-slate-500">Phone: {viewingInquiry.phone}</p>}
                <p className="text-xs text-slate-400 mt-2">{new Date(viewingInquiry.createdAt).toLocaleString()}</p>
              </div>
              <button onClick={() => setViewingInquiry(null)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 border">✕</button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Message</h4>
              <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">{viewingInquiry.message}</p>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center">
              <select
                value={viewingInquiry.status}
                onChange={(e) => {
                  handleStatusChange(viewingInquiry._id, e.target.value);
                  setViewingInquiry({...viewingInquiry, status: e.target.value as any});
                }}
                className={`text-sm rounded-full px-3 py-1 font-semibold border-2 outline-none
                  ${viewingInquiry.status === 'New' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                  ${viewingInquiry.status === 'Read' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : ''}
                  ${viewingInquiry.status === 'Responded' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                `}
              >
                <option value="New">New</option>
                <option value="Read">Read</option>
                <option value="Responded">Responded</option>
              </select>
              <button onClick={() => setViewingInquiry(null)} className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageInquiries;
