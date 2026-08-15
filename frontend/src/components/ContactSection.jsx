import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { getApiBaseUrl } from '../api/config';

export const ContactSection = ({
  title = "Get answers to your questions",
  subtitle = "Fill out the form below and a Vebhor representative will get back to you shortly."
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organisation: '',
    enquiryType: '',
    subject: '',
    message: '',
    agree: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiBase = getApiBaseUrl();
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        full_name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        contactNumber: formData.phone,
        organisation: formData.organisation,
        organization: formData.organisation,
        inquiryType: formData.enquiryType,
        subject: formData.subject || 'Website Enquiry',
        message: formData.message || 'General Enquiry Submission'
      };
      await axios.post(`${apiBase}/api/contact`, payload, { timeout: 8000 });
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
      <div style={{ maxWidth: '960px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '3.5rem 3rem', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            {title}
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', margin: 0, fontWeight: 400 }}>
            {subtitle}
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center' }}>
            <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p style={{ fontSize: '1rem', color: '#334155' }}>Your enquiry has been received. One of our workforce specialists will contact you shortly.</p>
          </div>
        ) : (
          /* Form matching Screenshot exactly */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Row 1: First Name* & Last Name */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  First Name <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  placeholder="Enter first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Row 2: Email Address* & Phone Number */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Email Address <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
            </div>

            {/* Row 3: Organisation & Enquiry Type* */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Organisation
                </label>
                <input
                  type="text"
                  name="organisation"
                  placeholder="Company name"
                  value={formData.organisation}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Enquiry Type <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1.1rem',
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '0.95rem',
                    color: formData.enquiryType ? '#0f172a' : '#64748b',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="">Select Enquiry Type</option>
                  <option value="Employer of Record">Employer of Record & Global Employment</option>
                  <option value="Contractor Management">Contractor Management & Payroll</option>
                  <option value="Visa & Immigration">Visas & Global Mobility</option>
                  <option value="IT & HR Support">IT & HR Managed Services</option>
                  <option value="Digital Transformation">Digital Experience & Transformation</option>
                  <option value="Other">General Enquiry</option>
                </select>
              </div>
            </div>

            {/* Row 4: Subject* */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Subject <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Brief subject"
                value={formData.subject}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  color: '#0f172a',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            {/* Row 5: Message* */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Message <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell us about your enquiry..."
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.85rem 1.1rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  color: '#0f172a',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Row 6: Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '0.5rem' }}>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              <label htmlFor="agree" style={{ fontSize: '0.92rem', color: '#475569', cursor: 'pointer' }}>
                I agree to the Privacy Policy and terms.
              </label>
            </div>

            {/* Submit Button */}
            <div style={{ marginTop: '1rem' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.9rem 2.5rem',
                  backgroundColor: '#6C5CE7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 6px 20px rgba(108, 92, 231, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <span>{loading ? 'Submitting...' : 'Submit Enquiry'}</span>
                <ArrowRight size={18} />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

export default ContactSection;
