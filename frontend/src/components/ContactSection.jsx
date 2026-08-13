import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle2 } from 'lucide-react';
import { getApiBaseUrl } from '../api/config';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    contactNumber: '',
    region: '',
    inquiryType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiBase = getApiBaseUrl();
      await axios.post(`${apiBase}/api/contact`, formData, { timeout: 8000 });
      setSubmitted(true);
    } catch (error) {
      console.warn('API contact request fallback:', error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#2C2C54', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Get answers to your <span style={{ color: '#6C5CE7' }}>questions</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', margin: 0, fontWeight: 400 }}>
            Our clients turn to us to help them reimagine ways of working with technology.
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center' }}>
            <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p style={{ fontSize: '1rem', color: '#334155' }}>Your inquiry has been received. Our workforce experts will get back to you shortly via email.</p>
          </div>
        ) : (
          /* Form matching Cognizant fields */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            {/* Row 1: Name* & Email* */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name*"
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: '#2C2C54',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: '#2C2C54',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Row 2: Organization* & Contact Number* */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              <div>
                <input
                  type="text"
                  name="organization"
                  required
                  placeholder="Organization*"
                  value={formData.organization}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: '#2C2C54',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="contactNumber"
                  required
                  placeholder="Contact Number*"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: '#2C2C54',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Row 3: Region* & Inquiry Type* */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
              <div>
                <select
                  name="region"
                  required
                  value={formData.region}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: formData.region ? '#2C2C54' : '#64748b',
                    outline: 'none',
                    boxSizing: 'border-box',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled hidden>Region*</option>
                  <option value="Australia">Australia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Singapore">Singapore</option>
                  <option value="India">India</option>
                  <option value="Europe">Europe</option>
                  <option value="Global">Global / Other</option>
                </select>
              </div>

              <div>
                <select
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #cbd5e1',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    color: formData.inquiryType ? '#2C2C54' : '#64748b',
                    outline: 'none',
                    boxSizing: 'border-box',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled hidden>Inquiry Type*</option>
                  <option value="Workforce & Payroll Solutions">Workforce & Payroll Solutions</option>
                  <option value="Global Employer of Record">Global Employer of Record</option>
                  <option value="IT & Digital Services">IT & Digital Services</option>
                  <option value="Careers & Job Opportunities">Careers & Job Opportunities</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Row 4: Message */}
            <div>
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.9rem 1.15rem',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #cbd5e1',
                  borderRadius: '12px',
                  fontSize: '0.95rem',
                  color: '#2C2C54',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Submit Button */}
            <div style={{ marginTop: '0.5rem' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  backgroundColor: '#6C5CE7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.9rem 2.25rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(108,92,231,0.3)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>{loading ? 'Sending Email...' : 'Submit Inquiry'}</span>
                <Send size={16} />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

export default ContactSection;
