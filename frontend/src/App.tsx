import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AdminLayout from './pages/admin/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/admin/Login';
import ManageServices from './pages/admin/ManageServices';
import ManageProducts from './pages/admin/ManageProducts';
import ManagePortfolio from './pages/admin/ManagePortfolio';
import ManageInquiries from './pages/admin/ManageInquiries';
import Services from './pages/Services';
import Products from './pages/Products';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

const NotFound = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
    <h2 className="text-2xl font-semibold text-slate-800 mb-4">Page Not Found</h2>
    <p className="text-slate-500 mb-8 max-w-md">The page you are looking for doesn't exist or has been moved.</p>
    <a href="/" className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
      Back to Home
    </a>
  </div>
);

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<Login />} />
        
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<ManageServices />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="portfolio" element={<ManagePortfolio />} />
          <Route path="inquiries" element={<ManageInquiries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
