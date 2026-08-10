import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Lock, Mail, Shield, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

export const AdminLoginPage = ({ onLoginSuccess, onNavHome, onNavCareers, onOpenContactPage }) => {
  const [email, setEmail] = useState('admin@ncs.co');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/admin/login', {
        email,
        password,
      });

      if (response.data && response.data.status === 'success') {
        const token = response.data.token;
        const user = response.data.user;
        localStorage.setItem('adminToken', token);
        localStorage.setItem('adminUser', JSON.stringify(user));
        onLoginSuccess(user);
      } else {
        setErrorMessage(response.data.message || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setErrorMessage(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#0b132b', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Header Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavCareers={onNavCareers}
        onOpenContactPage={onOpenContactPage}
      />

      {/* Main Login Form Container */}
      <main style={{ padding: '6rem 1.5rem 4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            maxWidth: '460px',
            width: '100%',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
            padding: '2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Top Logo & Icon Header */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '50%', backgroundColor: '#f0f9ff', color: '#004f6e', marginBottom: '1rem', border: '1px solid #bae6fd' }}>
              <Shield size={28} />
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
              Admin Portal Login
            </h1>
            <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Manage jobs & candidate applications
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '0.75rem 1rem', borderRadius: '6px', marginBottom: '1.5rem', fontSize: '0.88rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertCircle size={16} />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Admin Email
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@ncs.co"
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem 0.75rem 2.5rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    fontSize: '0.92rem',
                    outline: 'none',
                    backgroundColor: '#f8fafc',
                    color: '#0f172a'
                  }}
                />
                <Mail size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: '#64748b' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.85rem 0.75rem 2.5rem',
                    border: '1px solid #cbd5e1',
                    borderRadius: '6px',
                    fontSize: '0.92rem',
                    outline: 'none',
                    backgroundColor: '#f8fafc',
                    color: '#0f172a'
                  }}
                />
                <Lock size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: '#64748b' }} />
              </div>
            </div>

            {/* Demo Credentials Box */}
            <div style={{ backgroundColor: '#f1f5f9', border: '1px solid #e2e8f0', padding: '0.85rem 1rem', borderRadius: '6px', fontSize: '0.82rem', color: '#475569' }}>
              <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: '0.2rem' }}>Demo Credentials:</div>
              <div>Email: <span style={{ fontWeight: 600, color: '#004f6e' }}>admin@ncs.co</span></div>
              <div>Password: <span style={{ fontWeight: 600, color: '#004f6e' }}>admin123</span></div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                backgroundColor: '#004f6e',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.85rem',
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0, 79, 110, 0.3)',
                marginTop: '0.5rem',
                transition: 'background-color 0.2s ease'
              }}
            >
              {loading ? 'Authenticating...' : 'Login to Admin Dashboard'}
            </button>
          </form>

          {/* Back to Careers Link */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
            <button
              onClick={onNavCareers}
              style={{ background: 'none', border: 'none', color: '#64748b', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <ArrowLeft size={14} /> Back to Careers
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} />
    </div>
  );
};

export default AdminLoginPage;
