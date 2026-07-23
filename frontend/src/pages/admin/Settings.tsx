import React from 'react';
import { motion } from 'framer-motion';
import { Save, User, Lock, Mail } from 'lucide-react';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">Admin Settings</h2>
          <p className="text-slate-500 mt-1">Manage your admin account credentials and general preferences.</p>
        </div>

        <div className="space-y-6">
          {/* Email Settings */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <Mail className="text-slate-500" size={20} />
              Account Email
            </h3>
            <div className="flex gap-4">
              <input 
                type="email" 
                disabled
                defaultValue="admin@bsatech.in" 
                className="flex-1 px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-500 cursor-not-allowed"
              />
            </div>
            <p className="text-sm text-slate-400 mt-2">Email address cannot be changed from the dashboard.</p>
          </div>

          {/* Password Settings */}
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <Lock className="text-slate-500" size={20} />
              Change Password
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Current Password</label>
                <input 
                  type="password" 
                  placeholder="Enter current password"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">New Password</label>
                <input 
                  type="password" 
                  placeholder="Enter new password"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Confirm New Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm new password"
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="pt-2">
                <button type="submit" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                  <Save size={18} />
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Settings;
