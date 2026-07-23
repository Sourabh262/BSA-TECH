import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2 } from 'lucide-react';
import api from '../utils/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await api.post('/inquiries', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
      console.error(error);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your next big project? Get in touch with our team of experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Our Location</h3>
                  <p className="text-slate-600">Krishnampuram, Prem Nagar, Korsand, Ghori Road,<br />Shantipuram, Phaphamau, Prayagraj, UP-211013</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Phone Number</h3>
                  <p className="text-slate-600">+918840854007<br />Mon-Fri 9am-6pm PST</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-start gap-4">
                <div className="bg-primary-50 p-3 rounded-xl text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Email Address</h3>
                  <p className="text-slate-600">hello@bsatech.com<br />support@bsatech.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200">
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-4">Message Sent!</h3>
                  <p className="text-slate-600 mb-8 text-lg">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                      <input
                        type="text" required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        placeholder="John Doe"
                        value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                      <input
                        type="email" required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        placeholder="john@example.com"
                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Phone (Optional)</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                      <input
                        type="text" required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
                        placeholder="Project Inquiry"
                        value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                    <textarea
                      required rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all resize-none"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                      Failed to send message. Please try again or email us directly.
                    </div>
                  )}
                  <button
                    type="submit" disabled={status === 'loading'}
                    className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : <><Send size={20} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
