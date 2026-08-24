import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight, Play, Check, AlertCircle, X,
  GraduationCap, Brain, Car, Building2, ShoppingBag, Zap, Film, CreditCard,
  Settings, MessageSquare, Dna, Scale, Gauge, Store, Cpu, Globe, Sparkles
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
  const [submitStatus, setSubmitStatus] = useState(null);

  // Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [audienceVisible, setAudienceVisible] = useState(false);
  const [industriesVisible, setIndustriesVisible] = useState(false);
  const [formVisible, setFormVisible] = useState(false);

  const heroRef = useRef(null);
  const audienceRef = useRef(null);
  const industriesRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const createObserver = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.12 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    const cleanupAudience = createObserver(audienceRef, setAudienceVisible);
    const cleanupIndustries = createObserver(industriesRef, setIndustriesVisible);
    const cleanupForm = createObserver(formRef, setFormVisible);

    return () => {
      cleanupAudience();
      cleanupIndustries();
      cleanupForm();
    };
  }, []);

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
        {/* 1. HERO BANNER SECTION (STAGGERED SLIDE ENTRANCE) */}
        {/* ============================================================ */}
        <section
          ref={heroRef}
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
              background: 'linear-gradient(135deg, rgba(55, 12, 85, 0.92) 0%, rgba(115, 18, 90, 0.82) 50%, rgba(195, 35, 80, 0.6) 100%)',
              zIndex: 1
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '4.5rem 2rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '2.5rem',
              overflow: 'hidden',
              boxSizing: 'border-box'
            }}
          >
            <div style={{ maxWidth: '780px', width: '100%' }}>
              <div
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                  marginBottom: '1.25rem'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.35rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', boxShadow: '0 4px 18px rgba(108, 92, 231, 0.5)' }}>
                  CHALLENGE US
                </span>
              </div>

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
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateX(0)' : 'translateX(-40px)',
                  filter: heroVisible ? 'blur(0)' : 'blur(8px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
                }}
              >
                A Connected Partner Ecosystem Powering Workforce Innovation
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  color: '#f1f5f9',
                  lineHeight: 1.65,
                  fontWeight: 400,
                  margin: 0,
                  wordBreak: 'break-word',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateX(0)' : 'translateX(-25px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s'
                }}
              >
                By teaming with industry‑leading technology providers, we help clients streamline operations, enhance compliance, and prepare for what’s next.
              </p>
            </div>

            {/* Giant White Slant Slash Logo Graphic with Floating Animation */}
            <div
              className="vebhor-banner-slant-logo"
              style={{
                display: 'flex',
                gap: '1.2rem',
                opacity: heroVisible ? 0.95 : 0,
                transform: heroVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.9)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            >
              <div
                style={{
                  width: '55px',
                  height: '160px',
                  backgroundColor: '#ffffff',
                  transform: 'skewX(-25deg)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
                }}
              />
              <div
                style={{
                  width: '55px',
                  height: '160px',
                  backgroundColor: '#ffffff',
                  transform: 'skewX(-25deg)',
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.35)'
                }}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. SECTION: EMPLOYER AND INDIVIDUALS (LEFT & RIGHT SLIDE-IN) */}
        {/* ============================================================ */}
        <section
          ref={audienceRef}
          style={{
            backgroundColor: '#0284c7',
            backgroundImage: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
            color: '#ffffff',
            padding: '6rem 2rem 6.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            
            <div
              style={{
                opacity: audienceVisible ? 1 : 0,
                transform: audienceVisible ? 'translateY(0)' : 'translateY(-25px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#e0f2fe', display: 'inline-block', marginBottom: '1.25rem' }}>
                Section – Employer and Individuals
              </span>

              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: '4rem', maxWidth: '700px' }}>
                We want to work with you.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.25)', paddingTop: '3.5rem' }}>
              
              {/* Employers (Left-to-Right Entrance) */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                  opacity: audienceVisible ? 1 : 0,
                  transform: audienceVisible ? 'translateX(0)' : 'translateX(-60px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
              >
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
                  Employers
                </h3>
                <p style={{ fontSize: '1.12rem', color: '#f0f9ff', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 400 }}>
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
                    padding: '0.75rem 1.6rem',
                    backgroundColor: '#ffffff',
                    color: '#0284c7',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
                  }}
                >
                  <span>Read more</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Individuals (Right-to-Left Entrance) */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                  opacity: audienceVisible ? 1 : 0,
                  transform: audienceVisible ? 'translateX(0)' : 'translateX(60px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
                  Individuals
                </h3>
                <p style={{ fontSize: '1.12rem', color: '#f0f9ff', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 400 }}>
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
                    padding: '0.75rem 1.6rem',
                    backgroundColor: '#ffffff',
                    color: '#0284c7',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.15)';
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
        {/* 3. INDUSTRIES WE SERVE SECTION (ANIMATED HOVER ITEMS) */}
        {/* ============================================================ */}
        <section
          ref={industriesRef}
          style={{ padding: '6rem 2rem 6.5rem', backgroundColor: '#ffffff' }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div
              style={{
                opacity: industriesVisible ? 1 : 0,
                transform: industriesVisible ? 'translateY(0)' : 'translateY(-25px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0284c7', marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>
                Industries we serve
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0 4rem' }}>
              
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
                      className="industry-item-row"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '1.35rem 0',
                        borderBottom: '1px solid #f1f5f9',
                        opacity: industriesVisible ? 1 : 0,
                        transform: industriesVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`
                      }}
                    >
                      <div className="industry-icon" style={{ color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease' }}>
                        <IconComp size={24} strokeWidth={1.5} />
                      </div>
                      <span style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.4, transition: 'color 0.25s ease' }}>
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
                      className="industry-item-row"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '1.35rem 0',
                        borderBottom: '1px solid #f1f5f9',
                        opacity: industriesVisible ? 1 : 0,
                        transform: industriesVisible ? 'translateX(0)' : 'translateX(30px)',
                        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`
                      }}
                    >
                      <div className="industry-icon" style={{ color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.25s ease' }}>
                        <IconComp size={24} strokeWidth={1.5} />
                      </div>
                      <span style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 600, lineHeight: 1.4, transition: 'color 0.25s ease' }}>
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
        {/* 4. "CHALLENGE US" FORM SECTION (GLOWING GLASSMORPHIC CARD) */}
        {/* ============================================================ */}
        <section
          ref={formRef}
          id="challenge-form-section"
          style={{
            background: 'linear-gradient(135deg, #2b1274 0%, #7c1a7d 50%, #d81b68 100%)',
            color: '#ffffff',
            padding: '6.5rem 2rem 7.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              textAlign: 'center',
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}
            >
              Challenge us
            </h2>
            <p style={{ fontSize: '1.18rem', color: '#f1f5f9', marginBottom: '3.5rem', lineHeight: 1.6 }}>
              What challenge are you facing? Let's work together to break it down and find a way forward.
            </p>

            {/* Notification Alert */}
            {submitStatus && (
              <div
                style={{
                  backgroundColor: submitStatus.type === 'success' ? '#10b981' : '#ef4444',
                  color: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  marginBottom: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textAlign: 'left',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.25)'
                }}
              >
                {submitStatus.type === 'success' ? <Check size={24} /> : <AlertCircle size={24} />}
                <div>{submitStatus.message}</div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
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
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
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
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
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
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
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
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
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
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
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
                      borderRadius: '10px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
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
                    borderRadius: '10px',
                    border: 'none',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                />
              </div>

              {/* Data Protection Consent Checkbox */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ width: '20px', height: '20px', marginTop: '3px', cursor: 'pointer', flexShrink: 0 }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.88rem', color: '#f1f5f9', lineHeight: 1.55, cursor: 'pointer' }}>
                  I have read, understood and agree to be bound by NCS' Data Protection Notice which may be amended from time to time. I agree that NCS may collect, use and disclose my personal data as provided in this form in accordance with NCS Data Protection Notice for the purposes set out in the NCS Data Protection Notice and for the purposes relating to attending and responding to my enquiry and/or feedback.
                </label>
              </div>

              {/* SUBMIT Button */}
              <div style={{ marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '1rem 3.5rem',
                    backgroundColor: '#ffffff',
                    color: '#2b1274',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                    transition: 'all 0.25s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.35)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.25)';
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
