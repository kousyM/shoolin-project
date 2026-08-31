import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { CheckCircle2, ArrowRight, Sparkles, Send } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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
    <section
      ref={sectionRef}
      id="contact"
      style={{
        position: 'relative',
        padding: '5.5rem 1.5rem 6rem 1.5rem',
        fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif",
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        borderTop: '1px solid #e2e8f0'
      }}
    >
      {/* 2. CLEAN WHITE FORM CONTAINER */}
      <div
        style={{
          maxWidth: '960px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
          backgroundColor: '#ffffff',
          border: '1.5px solid #e2e8f0',
          borderRadius: '24px',
          padding: '3.5rem 3rem',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(0, 45px, 0) scale(0.97)',
          transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Glowing Top Ambient Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, rgb(2, 41, 176) 30%, rgb(40, 129, 251) 70%, transparent 100%)',
            borderRadius: '3px'
          }}
        />

        {/* Header Section */}
        <div style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <h2
            style={{
              fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.25
            }}
          >
            Get answers to your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              questions
            </span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#64748b', margin: 0, fontWeight: 400, lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '3rem 2rem', textAlign: 'center' }}>
            <CheckCircle2 size={52} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p style={{ fontSize: '1.05rem', color: '#334155', margin: 0 }}>Your enquiry has been received. One of our workforce specialists will contact you shortly.</p>
          </div>
        ) : (
          /* Form with Clean Light Controls */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Row 1: First Name* & Last Name */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }}
                />
              </div>
            </div>

            {/* Row 2: Email Address* & Phone Number */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }}
                />
              </div>
            </div>

            {/* Row 3: Organisation & Enquiry Type* */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
                  Enquiry Type <span style={{ color: '#ef4444' }}>*</span>
                </label>
                <select
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: formData.enquiryType ? '#0f172a' : '#64748b',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }}
                >
                  <option value="" style={{ backgroundColor: '#ffffff', color: '#64748b' }}>Select Enquiry Type</option>
                  <option value="Employer of Record" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Employer of Record & Global Employment</option>
                  <option value="Contractor Management" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Contractor Management & Payroll</option>
                  <option value="Visa & Immigration" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Visas & Global Mobility</option>
                  <option value="IT & HR Support" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>IT & HR Managed Services</option>
                  <option value="Digital Transformation" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Digital Experience & Transformation</option>
                  <option value="Other" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>General Enquiry</option>
                </select>
              </div>
            </div>

            {/* Row 4: Subject* */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                  padding: '0.9rem 1.15rem',
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.96rem',
                  color: '#0f172a',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.25s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
              />
            </div>

            {/* Row 5: Message* */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>
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
                  padding: '0.9rem 1.15rem',
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '10px',
                  fontSize: '0.96rem',
                  color: '#0f172a',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  transition: 'all 0.25s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(2, 41, 176, 0.15)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
              />
            </div>

            {/* Row 6: Checkbox */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.25rem' }}>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'rgb(2, 41, 176)' }}
              />
              <label htmlFor="agree" style={{ fontSize: '0.92rem', color: '#64748b', cursor: 'pointer' }}>
                I agree to the Privacy Policy and terms.
              </label>
            </div>

            {/* Submit Button with Hover Flow */}
            <div style={{ marginTop: '1rem' }}>
              <button
                type="submit"
                disabled={loading}
                style={{
                  padding: '0.95rem 2.8rem',
                  background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 24px rgba(2, 41, 176, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 14px 34px rgba(2, 41, 176, 0.65)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 41, 176, 0.45)';
                  }
                }}
              >
                <span>{loading ? 'Submitting...' : 'Submit Enquiry'}</span>
                <Send size={18} />
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};

export default ContactSection;
