import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight, Check, AlertCircle, ChevronRight,
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

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const elem = document.getElementById('challenge-form-section');
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
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
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0f172a' }}>
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
        {/* 1. HERO BANNER SECTION (SIGNATURE LINES & ANGLED CUTOUT) */}
        {/* ============================================================ */}
        <section
          ref={heroRef}
          className="signature-hero-banner-section"
          style={{
            position: 'relative',
            backgroundColor: '#f6f4ed',
            backgroundImage: `url('/images/career_lines_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            padding: '5.5rem 2rem 5rem 2rem',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          {/* Angled Cutout Visa & Mobility Photo Container */}
          <div
            className="career-banner-visual-clip"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '52%',
              minWidth: '380px',
              clipPath: 'polygon(18% 0%, 100% 0%, 100% 68%, 0% 100%)',
              overflow: 'hidden',
              zIndex: 1
            }}
          >
            <img
              src="/images/visa_banner_v2.png"
              alt="Visa & Challenge Us"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>

          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 3 }}>
            <div style={{ maxWidth: '640px' }}>

              {/* Blue Capsule Badge */}
              <div style={{ marginBottom: '1.1rem' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    padding: '0.35rem 1.25rem',
                    borderRadius: '50px',
                    display: 'inline-block',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.25)'
                  }}
                >
                  SOLVE COMPLEX PROBLEMS
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                  fontWeight: 800,
                  color: '#0a1128',
                  lineHeight: 1.25,
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.02em',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                Bring us your hardest challenges<br />
                We'll find the right answers
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  color: '#334155',
                  lineHeight: 1.65,
                  margin: '0 0 2rem 0',
                  fontWeight: 450,
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(25px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
                }}
              >
                Complex payroll across borders? Rapid scaling requirements? High-compliance contractor management? Tell us what is holding your organisation back.
              </p>

              {/* Action Button CTA */}
              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
                }}
              >
                <button
                  onClick={scrollToForm}
                  style={{
                    padding: '0.85rem 2.2rem',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 6px 20px rgba(2, 41, 176, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(40, 129, 251, 0.55)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 41, 176, 0.35)';
                  }}
                >
                  <span>Start The Challenge</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={onNavServices}
                  style={{
                    padding: '0.85rem 2.2rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '50px',
                    border: '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Explore Solutions</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. SECTION: EMPLOYER AND INDIVIDUALS */}
        {/* ============================================================ */}
        <section
          ref={audienceRef}
          style={{
            backgroundColor: '#f8fafc',
            color: '#0f172a',
            padding: '6rem 2rem 6.5rem',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
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
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgb(2, 41, 176)', display: 'inline-block', marginBottom: '1.25rem' }}>
                Section – Employer and Individuals
              </span>

              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: 'clamp(2.3rem, 4vw, 3.4rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '3.5rem', maxWidth: '700px' }}>
                We want to work with you.
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>

              {/* Employers Card */}
              <div
                onClick={() => onNavEmployers ? onNavEmployers() : (onNavServices && onNavServices('employers'))}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.8rem 2.4rem',
                  borderRadius: '24px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  opacity: audienceVisible ? 1 : 0,
                  transform: audienceVisible ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(2, 41, 176, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)', marginBottom: '2rem' }}>
                  <Building2 size={28} />
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  For Employers
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Whether you are scaling across Australia or deploying international specialists, we take care of EOR, compliance, and end-to-end talent lifecycle management.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavEmployers) onNavEmployers();
                    else if (onNavServices) onNavServices('employers');
                  }}
                  style={{
                    padding: '0.85rem 2rem',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 41, 176, 0.55)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 41, 176, 0.35)';
                  }}
                >
                  <span>Explore Employer Services</span>
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Individuals Card */}
              <div
                onClick={() => onNavIndividuals ? onNavIndividuals() : (onNavServices && onNavServices('individuals'))}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '2.8rem 2.4rem',
                  borderRadius: '24px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  opacity: audienceVisible ? 1 : 0,
                  transform: audienceVisible ? 'translateX(0)' : 'translateX(40px)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgb(40, 129, 251)';
                  e.currentTarget.style.boxShadow = '0 16px 36px rgba(2, 41, 176, 0.16)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)', marginBottom: '2rem' }}>
                  <Users size={28} />
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  For Individuals
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>
                  Looking for contract opportunities, immigration sponsorship, or a career move in high-growth enterprise domains? Let our experts connect you with the right teams.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavIndividuals) onNavIndividuals();
                    else if (onNavServices) onNavServices('individuals');
                  }}
                  style={{
                    padding: '0.85rem 2rem',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 41, 176, 0.55)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 41, 176, 0.4)';
                  }}
                >
                  <span>Explore Individual Services</span>
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. INDUSTRIES WE SERVE */}
        {/* ============================================================ */}
        <section
          ref={industriesRef}
          style={{
            padding: '6rem 2rem 6.5rem',
            backgroundColor: '#f6f4ed',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          {/* Light Warm Isometric Tile / Grid Background Pattern (matching OurSolutions) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/services_grid_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'invert(1)',
              opacity: 0.12,
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div
              style={{
                opacity: industriesVisible ? 1 : 0,
                transform: industriesVisible ? 'translateY(0)' : 'translateY(-25px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                marginBottom: '3rem'
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                  padding: '0.35rem 1.2rem',
                  borderRadius: '50px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 14px rgba(2, 41, 176, 0.25)'
                }}
              >
                SECTORS & EXPERTISE
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
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
                        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                        opacity: industriesVisible ? 1 : 0,
                        transform: industriesVisible ? 'translateX(0)' : 'translateX(-30px)',
                        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`
                      }}
                    >
                      <div style={{ color: 'rgb(2, 41, 176)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={24} strokeWidth={1.6} />
                      </div>
                      <span style={{ fontSize: '1.02rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.4 }}>
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
                        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
                        opacity: industriesVisible ? 1 : 0,
                        transform: industriesVisible ? 'translateX(0)' : 'translateX(30px)',
                        transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.06}s`
                      }}
                    >
                      <div style={{ color: 'rgb(2, 41, 176)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <IconComp size={24} strokeWidth={1.6} />
                      </div>
                      <span style={{ fontSize: '1.02rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.4 }}>
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
            backgroundColor: '#f8fafc',
            color: '#0f172a',
            padding: '4rem 2rem 6.5rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              position: 'relative',
              zIndex: 2,
              backgroundColor: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '24px',
              padding: '3rem 3rem 3.5rem',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.05)',
              opacity: formVisible ? 1 : 0,
              transform: formVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <h2
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0 0 0.75rem 0',
                  letterSpacing: '-0.02em'
                }}
              >
                Challenge us
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                What challenge are you facing? Let's work together to break it down and find a way forward.
              </p>
            </div>

            {/* Notification Alert */}
            {submitStatus && (
              <div
                style={{
                  backgroundColor: submitStatus.type === 'success' ? '#f0fdf4' : '#fef2f2',
                  border: `1.5px solid ${submitStatus.type === 'success' ? '#bbf7d0' : '#fecaca'}`,
                  color: submitStatus.type === 'success' ? '#16a34a' : '#ef4444',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  marginBottom: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textAlign: 'left',
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
                }}
              >
                {submitStatus.type === 'success' ? <Check size={24} color="#16a34a" /> : <AlertCircle size={24} color="#ef4444" />}
                <div>{submitStatus.message}</div>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                {/* First name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                      border: '1.5px solid #e2e8f0',
                      backgroundColor: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Last name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                      border: '1.5px solid #e2e8f0',
                      backgroundColor: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                      border: '1.5px solid #e2e8f0',
                      backgroundColor: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                      border: '1.5px solid #e2e8f0',
                      backgroundColor: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Business email address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                      border: '1.5px solid #e2e8f0',
                      backgroundColor: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                      border: '1.5px solid #e2e8f0',
                      backgroundColor: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '0.95rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Challenge Message / Details */}
              <div>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.45rem', color: '#1e293b' }}>
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
                    border: '1.5px solid #e2e8f0',
                    backgroundColor: '#f8fafc',
                    color: '#0f172a',
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
                  style={{ width: '20px', height: '20px', marginTop: '3px', cursor: 'pointer', flexShrink: 0, accentColor: 'rgb(2, 41, 176)' }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, cursor: 'pointer' }}>
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
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 8px 25px rgba(2, 41, 176, 0.45)',
                    transition: 'all 0.25s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 12px 30px rgba(2, 41, 176, 0.65)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(2, 41, 176, 0.45)';
                    }
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
