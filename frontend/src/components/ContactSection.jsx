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
        backgroundColor: '#060A14',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Subtle Ambient Radial Light */}
      <div
        style={{
          position: 'absolute',
          top: '-60px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(121, 22, 168, 0.18) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }}
      />

      {/* 2. DYNAMIC FORM CONTAINER WITH GLOW & SLIDE-UP ENTRANCE */}
      <div
        style={{
          maxWidth: '960px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
          backgroundColor: '#0F172A',
          border: '1.5px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '3.5rem 3rem',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 35px rgba(108, 92, 231, 0.15)',
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
            background: 'linear-gradient(90deg, transparent 0%, #7916A8 30%, #38BDF8 70%, transparent 100%)',
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
              color: '#ffffff',
              marginBottom: '0.75rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.25
            }}
          >
            Get answers to your{' '}
            <span
              style={{
                backgroundColor: '#7916A8',
                color: '#ffffff',
                padding: '0.2rem 1.15rem',
                borderRadius: '14px 22px 22px 14px',
                display: 'inline-block',
                boxShadow: '0 4px 18px rgba(121, 22, 168, 0.45)'
              }}
            >
              questions
            </span>
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#cbd5e1', margin: 0, fontWeight: 400, lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </div>

        {/* Success State */}
        {submitted ? (
          <div style={{ backgroundColor: 'rgba(22, 101, 52, 0.25)', border: '1px solid rgba(34, 197, 94, 0.4)', borderRadius: '14px', padding: '3rem 2rem', textAlign: 'center', backdropFilter: 'blur(10px)' }}>
            <CheckCircle2 size={52} color="#4ade80" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4ade80', marginBottom: '0.5rem' }}>Thank You!</h3>
            <p style={{ fontSize: '1.05rem', color: '#e2e8f0', margin: 0 }}>Your enquiry has been received. One of our workforce specialists will contact you shortly.</p>
          </div>
        ) : (
          /* High-Tech Form with Neon Focus */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Row 1: First Name* & Last Name */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  First Name <span style={{ color: '#f87171' }}>*</span>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                />
              </div>
            </div>

            {/* Row 2: Email Address* & Phone Number */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  Email Address <span style={{ color: '#f87171' }}>*</span>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                />
              </div>
            </div>

            {/* Row 3: Organisation & Enquiry Type* */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: '#ffffff',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                  Enquiry Type <span style={{ color: '#f87171' }}>*</span>
                </label>
                <select
                  name="enquiryType"
                  required
                  value={formData.enquiryType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.9rem 1.15rem',
                    backgroundColor: '#111625',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    borderRadius: '10px',
                    fontSize: '0.96rem',
                    color: formData.enquiryType ? '#ffffff' : '#94a3b8',
                    outline: 'none',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#38bdf8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <option value="" style={{ backgroundColor: '#111625', color: '#94a3b8' }}>Select Enquiry Type</option>
                  <option value="Employer of Record" style={{ backgroundColor: '#111625', color: '#ffffff' }}>Employer of Record & Global Employment</option>
                  <option value="Contractor Management" style={{ backgroundColor: '#111625', color: '#ffffff' }}>Contractor Management & Payroll</option>
                  <option value="Visa & Immigration" style={{ backgroundColor: '#111625', color: '#ffffff' }}>Visas & Global Mobility</option>
                  <option value="IT & HR Support" style={{ backgroundColor: '#111625', color: '#ffffff' }}>IT & HR Managed Services</option>
                  <option value="Digital Transformation" style={{ backgroundColor: '#111625', color: '#ffffff' }}>Digital Experience & Transformation</option>
                  <option value="Other" style={{ backgroundColor: '#111625', color: '#ffffff' }}>General Enquiry</option>
                </select>
              </div>
            </div>

            {/* Row 4: Subject* */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                Subject <span style={{ color: '#f87171' }}>*</span>
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
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  borderRadius: '10px',
                  fontSize: '0.96rem',
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'all 0.25s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#38bdf8';
                  e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
                }}
              />
            </div>

            {/* Row 5: Message* */}
            <div>
              <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 700, color: '#e2e8f0', marginBottom: '0.5rem' }}>
                Message <span style={{ color: '#f87171' }}>*</span>
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
                  backgroundColor: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  borderRadius: '10px',
                  fontSize: '0.96rem',
                  color: '#ffffff',
                  outline: 'none',
                  boxSizing: 'border-box',
                  resize: 'vertical',
                  transition: 'all 0.25s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#38bdf8';
                  e.currentTarget.style.boxShadow = '0 0 14px rgba(56, 189, 248, 0.35)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.07)';
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
                style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#6C5CE7' }}
              />
              <label htmlFor="agree" style={{ fontSize: '0.92rem', color: '#cbd5e1', cursor: 'pointer' }}>
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
                  backgroundColor: '#6C5CE7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  boxShadow: '0 8px 24px rgba(108, 92, 231, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = '#5842e3';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(108, 92, 231, 0.65)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    e.currentTarget.style.backgroundColor = '#6C5CE7';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(108, 92, 231, 0.45)';
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
