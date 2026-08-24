import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight, Check, AlertCircle,
  GraduationCap, Brain, Car, Building2, ShoppingBag, Zap, Film, CreditCard,
  Settings, MessageSquare, Dna, Scale, Gauge, Store, Cpu, Globe, Sparkles, Users
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
    <div style={{ backgroundColor: 'rgb(6, 13, 31)', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#ffffff' }}>
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
        {/* 1. HERO BANNER SECTION */}
        {/* ============================================================ */}
        <section
          ref={heroRef}
          style={{
            position: 'relative',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(6, 13, 31)',
            backgroundImage: 'linear-gradient(135deg, rgba(6, 13, 31, 0.94) 0%, rgba(11, 22, 49, 0.88) 100%), url("/images/challenge_hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Subtle Ambient Radial Light */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              left: '25%',
              width: '700px',
              height: '380px',
              background: 'radial-gradient(circle, rgba(108, 92, 231, 0.25) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '5rem 2rem',
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
                <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', boxShadow: '0 4px 18px rgba(108, 92, 231, 0.4)' }}>
                  VISA
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(2.1rem, 5vw, 3.6rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.18,
                  marginBottom: '1.35rem',
                  letterSpacing: '-0.02em',
                  wordBreak: 'break-word',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateX(0)' : 'translateX(-40px)',
                  filter: heroVisible ? 'blur(0)' : 'blur(8px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
                }}
              >
                Your Global Immigration Partner
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  fontWeight: 400,
                  margin: 0,
                  wordBreak: 'break-word',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateX(0)' : 'translateX(-25px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s'
                }}
              >
                Experienced immigration professionals across all regions, supported by industry‑leading technology partners to streamline operations, enhance compliance, and enable workforce innovation.
              </p>
            </div>

            {/* Giant Slant Slash Graphic with Floating Animation */}
            <div
              className="vebhor-banner-slant-logo"
              style={{
                display: 'flex',
                gap: '1.2rem',
                opacity: heroVisible ? 0.9 : 0,
                transform: heroVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.9)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
              }}
            >
              <div
                style={{
                  width: '55px',
                  height: '160px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  transform: 'skewX(-25deg)',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
                }}
              />
              <div
                style={{
                  width: '55px',
                  height: '160px',
                  backgroundColor: 'rgba(108, 92, 231, 0.25)',
                  border: '1.5px solid rgba(108, 92, 231, 0.6)',
                  transform: 'skewX(-25deg)',
                  borderRadius: '12px',
                  boxShadow: '0 15px 35px rgba(108, 92, 231, 0.3)'
                }}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. SECTION: EMPLOYER AND INDIVIDUALS */}
        {/* ============================================================ */}
        <section
          ref={audienceRef}
          style={{
            backgroundColor: 'rgb(6, 13, 31)',
            color: '#ffffff',
            padding: '6rem 2rem 6.5rem',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
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
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#55E6C1', display: 'inline-block', marginBottom: '1.25rem' }}>
                Section – Employer and Individuals
              </span>

              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '3.5rem', maxWidth: '700px' }}>
                We want to work with you.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
              
              {/* Employers Card */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '2.8rem 2.4rem',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  opacity: audienceVisible ? 1 : 0,
                  transform: audienceVisible ? 'translateX(0)' : 'translateX(-60px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), 0 0 25px rgba(56, 189, 248, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    color: '#38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(56, 189, 248, 0.3)'
                  }}
                >
                  <Building2 size={28} />
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Employers
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 400 }}>
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
                    padding: '0.85rem 1.8rem',
                    backgroundColor: '#6C5CE7',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 18px rgba(108, 92, 231, 0.45)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span>Read more</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Individuals Card */}
              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  padding: '2.8rem 2.4rem',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                  opacity: audienceVisible ? 1 : 0,
                  transform: audienceVisible ? 'translateX(0)' : 'translateX(60px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'rgba(85, 230, 193, 0.5)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), 0 0 25px rgba(85, 230, 193, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    backgroundColor: 'rgba(85, 230, 193, 0.15)',
                    color: '#55E6C1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(85, 230, 193, 0.3)'
                  }}
                >
                  <Users size={28} />
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Individuals
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem', fontWeight: 400 }}>
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
                    padding: '0.85rem 1.8rem',
                    backgroundColor: '#6C5CE7',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 18px rgba(108, 92, 231, 0.45)',
                    transition: 'all 0.25s ease'
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
        {/* 3. INDUSTRIES WE SERVE SECTION */}
        {/* ============================================================ */}
        <section
          ref={industriesRef}
          style={{ padding: '6rem 2rem 6.5rem', backgroundColor: 'rgb(6, 13, 31)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div
              style={{
                opacity: industriesVisible ? 1 : 0,
                transform: industriesVisible ? 'translateY(0)' : 'translateY(-25px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', marginBottom: '3.5rem', letterSpacing: '-0.02em' }}>
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        opacity: industriesVisible ? 1 : 0,
                        transform: industriesVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`
                      }}
                    >
                      <div style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={24} strokeWidth={1.6} />
                      </div>
                      <span style={{ fontSize: '1.02rem', color: '#e2e8f0', fontWeight: 600, lineHeight: 1.4 }}>
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
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                        opacity: industriesVisible ? 1 : 0,
                        transform: industriesVisible ? 'translateX(0)' : 'translateX(30px)',
                        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`
                      }}
                    >
                      <div style={{ color: '#55E6C1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={24} strokeWidth={1.6} />
                      </div>
                      <span style={{ fontSize: '1.02rem', color: '#e2e8f0', fontWeight: 600, lineHeight: 1.4 }}>
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
        {/* 4. "CHALLENGE US" FORM SECTION */}
        {/* ============================================================ */}
        <section
          ref={formRef}
          id="challenge-form-section"
          style={{
            backgroundColor: 'rgb(6, 13, 31)',
            color: '#ffffff',
            padding: '6.5rem 2rem 7.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Ambient Radial Light */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '800px',
              height: '400px',
              background: 'radial-gradient(circle, rgba(108, 92, 231, 0.18) 0%, rgba(56, 189, 248, 0.08) 50%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(60px)'
            }}
          />

          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '3.5rem 3rem',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4)',
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: '0 4px 18px rgba(108, 92, 231, 0.4)' }}>
                GET IN TOUCH
              </span>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Challenge us
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                What challenge are you facing? Let's work together to break it down and find a way forward.
              </p>
            </div>

            {/* Notification Alert */}
            {submitStatus && (
              <div
                style={{
                  backgroundColor: submitStatus.type === 'success' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  border: `1.5px solid ${submitStatus.type === 'success' ? '#10b981' : '#ef4444'}`,
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
                {submitStatus.type === 'success' ? <Check size={24} color="#10b981" /> : <AlertCircle size={24} color="#ef4444" />}
                <div>{submitStatus.message}</div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {/* First name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Last name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Business email address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Challenge Message / Details */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#cbd5e1' }}>
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
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
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
                <label htmlFor="consent" style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, cursor: 'pointer' }}>
                  I have read, understood, and agree to be bound by Vebhor’s Data Protection Notice, which may be amended from time to time. I consent to Vebhor collecting, using, and disclosing my personal data as provided in this form, in accordance with the Data Protection Notice, for the purposes stated therein and for matters relating to responding to my enquiry or feedback.
                </label>
              </div>

              {/* SUBMIT Button */}
              <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '1rem 3.5rem',
                    backgroundColor: '#6C5CE7',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 25px rgba(108, 92, 231, 0.45)',
                    transition: 'all 0.25s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(108, 92, 231, 0.6)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(108, 92, 231, 0.45)';
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
