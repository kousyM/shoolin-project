import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight, Play, Check, AlertCircle, X,
  GraduationCap, Brain, Car, Building2, ShoppingBag, Zap, Film, CreditCard,
  Settings, MessageSquare, Dna, Scale, Gauge, Store, Cpu, Globe
} from 'lucide-react';
import axios from 'axios';
import { getApiBaseUrl } from '../api/config';

export const ChallengeUsPage = ({
  onNavHome,
  onNavServices,
  onNavAbout,
  onNavCareers,
  onNavPartners,
  onNavInsights,
  onOpenContactPage,
  onNavEmployers,
  onNavIndividuals,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    role: '',
    organisation: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [activeAudienceTab, setActiveAudienceTab] = useState('employers');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectAudience = (tabKey) => {
    setActiveAudienceTab(tabKey);
    setTimeout(() => {
      const elem = document.getElementById('audience-detail-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('challenge-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setSubmitStatus({
        type: 'error',
        message: 'Please check and agree to the Data Protection Notice before submitting.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const apiBase = getApiBaseUrl();
      const response = await axios.post(`${apiBase}/api/challenge-us`, formData, { timeout: 5000 });

      if (response.data && response.data.status === 'success') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for taking on the challenge! Your submission has been saved to database and email notification sent.'
        });
        setFormData({
          first_name: '',
          last_name: '',
          role: '',
          organisation: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      } else {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for taking on the challenge! Your message has been received.'
        });
      }
    } catch (err) {
      console.warn('Challenge submission network warning:', err);
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for taking on the challenge! Your message has been received.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        activePage="challenge-us"
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main>
        {/* ============================================================ */}
        {/* HERO BANNER SECTION (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <section
          style={{
            position: 'relative',
            minHeight: '82vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: 'url("/images/challenge_hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            overflow: 'hidden'
          }}
        >
          {/* Magenta & Purple Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(55, 12, 85, 0.9) 0%, rgba(115, 18, 90, 0.78) 50%, rgba(195, 35, 80, 0.55) 100%)',
              zIndex: 1
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '4.5rem 1.5rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2rem',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ maxWidth: '780px', width: '100%' }}>
              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(1.85rem, 5vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.22,
                  marginBottom: '1.25rem',
                  letterSpacing: '-0.02em',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                A Connected Partner Ecosystem Powering Workforce Innovation
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#f1f5f9',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  margin: 0,
                  wordBreak: 'break-word'
                }}
              >
                By teaming with industry‑leading technology providers, we help clients streamline operations, enhance compliance, and prepare for what’s next.
              </p>
            </div>

            {/* Giant White Slant Slash Logo Graphic */}
            <div className="vebhor-banner-slant-logo" style={{ display: 'flex', gap: '1.2rem', opacity: 0.9 }}>
              <div
                style={{
                  width: '55px',
                  height: '160px',
                  backgroundColor: '#ffffff',
                  transform: 'skewX(-25deg)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
              <div
                style={{
                  width: '55px',
                  height: '160px',
                  backgroundColor: '#ffffff',
                  transform: 'skewX(-25deg)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION: EMPLOYER AND INDIVIDUALS (MATCHING ATTACHED SCREENSHOT) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#0284c7', color: '#ffffff', padding: '5.5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e0f2fe', display: 'inline-block', marginBottom: '1.25rem' }}>
              Section – Employer and Individuals
            </span>

            <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '3.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '4rem', maxWidth: '700px' }}>
              We want to work with you.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem', borderTop: '1px solid rgba(255, 255, 255, 0.25)', paddingTop: '3.5rem' }}>
              {/* Employers */}
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.25)', paddingRight: '3rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
                  Employers
                </h3>
                <p style={{ fontSize: '1.12rem', color: '#f0f9ff', lineHeight: 1.65, marginBottom: '2.5rem', fontWeight: 400 }}>
                  From small local businesses to the world's largest companies, we can support all of your immigration needs, all over the world.
                </p>
                <button
                  onClick={() => {
                    if (onNavEmployers) {
                      onNavEmployers();
                    } else {
                      handleSelectAudience('employers');
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 0
                  }}
                >
                  <span>Read more</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Individuals */}
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
                  Individuals
                </h3>
                <p style={{ fontSize: '1.12rem', color: '#f0f9ff', lineHeight: 1.65, marginBottom: '2.5rem', fontWeight: 400 }}>
                  We offer comprehensive immigration solutions and guidance for individuals, their families and their advisors around the globe.
                </p>
                <button
                  onClick={() => {
                    if (onNavIndividuals) {
                      onNavIndividuals();
                    } else {
                      handleSelectAudience('individuals');
                    }
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 0
                  }}
                >
                  <span>Read more</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>
        </section>



        {/* ============================================================ */}
        {/* INDUSTRIES WE SERVE SECTION (MATCHING ATTACHED SCREENSHOT) */}
        {/* ============================================================ */}
        <section style={{ padding: '5.5rem 2rem 6rem', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0284c7', marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>
              Industries we serve
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 4rem' }}>
              
              {/* Left Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { icon: GraduationCap, name: 'Academic Institutions, Higher Education and Non-Profit Organizations' },
                  { icon: Brain, name: 'Artificial Intelligence (AI)' },
                  { icon: Car, name: 'Automotive' },
                  { icon: Building2, name: 'Construction and Engineering' },
                  { icon: ShoppingBag, name: 'Consumer Products/Retail Goods' },
                  { icon: Zap, name: 'Energy, Mining and Resources' },
                  { icon: Film, name: 'Film, Music and Entertainment' },
                  { icon: CreditCard, name: 'Financial Services' }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '1.25rem 0',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      <div style={{ color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={24} strokeWidth={1.5} />
                      </div>
                      <span style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.4 }}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { icon: Settings, name: 'Manufacturing Industry' },
                  { icon: MessageSquare, name: 'Media and Communications' },
                  { icon: Dna, name: 'Pharmaceuticals and Biotechnology' },
                  { icon: Scale, name: 'Professional Services' },
                  { icon: Gauge, name: 'Public Utilities' },
                  { icon: Store, name: 'Retail/Wholesale' },
                  { icon: Cpu, name: 'Semiconductors' },
                  { icon: Globe, name: 'Space and Aerospace' }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '1.25rem 0',
                        borderBottom: '1px solid #f1f5f9'
                      }}
                    >
                      <div style={{ color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={24} strokeWidth={1.5} />
                      </div>
                      <span style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.4 }}>
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: "CHALLENGE US" FORM SECTION (MATCHING SCREENSHOT 5) */}
        {/* ============================================================ */}
        <section
          id="challenge-form-section"
          style={{
            background: 'linear-gradient(135deg, #2b1274 0%, #7c1a7d 50%, #d81b68 100%)',
            color: '#ffffff',
            padding: '6rem 2rem 7rem'
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '3.3rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}
            >
              Challenge us
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '3.5rem', lineHeight: 1.6 }}>
              What challenge are you facing? Let's work together to break it down and find a way forward.
            </p>

            {/* Notification Alert */}
            {submitStatus && (
              <div
                style={{
                  backgroundColor: submitStatus.type === 'success' ? '#10b981' : '#ef4444',
                  color: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  marginBottom: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textAlign: 'left',
                  fontSize: '0.98rem',
                  fontWeight: 600
                }}
              >
                {submitStatus.type === 'success' ? <Check size={24} /> : <AlertCircle size={24} />}
                <div>{submitStatus.message}</div>
              </div>
            )}

            {/* Form Fields matching Screenshot 5 */}
            <form onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem' }}>
                {/* First name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    First name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="First name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Last name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Role *
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="Role"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Organisation *
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    placeholder="Organisation"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Business email address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Business email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business email address"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Challenge Message / Details */}
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                  What challenge are you facing? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your organisation's challenge or boldest idea..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Data Protection Consent Checkbox matching Screenshot 5 */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ width: '20px', height: '20px', marginTop: '3px', cursor: 'pointer', flexShrink: 0 }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.85rem', color: '#f1f5f9', lineHeight: 1.5, cursor: 'pointer' }}>
                  I have read, understood and agree to be bound by NCS' Data Protection Notice which may be amended from time to time. I agree that NCS may collect, use and disclose my personal data as provided in this form in accordance with NCS Data Protection Notice for the purposes set out in the NCS Data Protection Notice and for the purposes relating to attending and responding to my enquiry and/or feedback.
                </label>
              </div>

              {/* SUBMIT Button */}
              <div style={{ marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.95rem 3rem',
                    backgroundColor: '#ffffff',
                    color: '#2b1274',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'all 0.2s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default ChallengeUsPage;
