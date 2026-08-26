import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Sparkles,
  Zap,
  Building2,
  Users,
  Compass,
  Cpu,
  Layers,
  Globe
} from 'lucide-react';

const BRAND_GRADIENT = 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)';
const BRAND_SHADOW = '0 4px 18px rgba(0, 92, 253, 0.4)';

export const AboutPage = ({
  onNavHome,
  onNavCareers,
  onNavPartners,
  onNavInsights,
  onNavServices,
  onNavChallengeUs,
  onOpenContactPage,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [evolutionVisible, setEvolutionVisible] = useState(false);
  const [deliverVisible, setDeliverVisible] = useState(false);
  const [conductVisible, setConductVisible] = useState(false);
  const [clientsVisible, setClientsVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  const heroRef = useRef(null);
  const evolutionRef = useRef(null);
  const deliverRef = useRef(null);
  const conductRef = useRef(null);
  const clientsRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  // IntersectionObserver for smooth scroll animations
  useEffect(() => {
    const createObserver = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    const cleanupEvolution = createObserver(evolutionRef, setEvolutionVisible);
    const cleanupDeliver = createObserver(deliverRef, setDeliverVisible);
    const cleanupConduct = createObserver(conductRef, setConductVisible);
    const cleanupClients = createObserver(clientsRef, setClientsVisible);
    const cleanupMission = createObserver(missionRef, setMissionVisible);

    return () => {
      cleanupEvolution();
      cleanupDeliver();
      cleanupConduct();
      cleanupClients();
      cleanupMission();
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", color: '#0f172a' }}>
      {/* Navbar */}
      <Navbar
        activePage="about"
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>

        {/* ============================================================ */}
        {/* 1. TOP HERO BANNER */}
        {/* ============================================================ */}
        <section
          ref={heroRef}
          style={{
            position: 'relative',
            backgroundColor: '#0f172a',
            backgroundImage: `url('/images/nature_banner_3.jpg?v=2026')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '7.5rem 2rem 6.5rem 2rem',
            textAlign: 'left',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Tag Badge with Brand Gradient */}
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                marginBottom: '1.25rem'
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#ffffff',
                  background: BRAND_GRADIENT,
                  padding: '0.4rem 1.4rem',
                  borderRadius: '18px 24px 24px 18px',
                  display: 'inline-block',
                  boxShadow: BRAND_SHADOW
                }}
              >
                ABOUT VEBHOR
              </span>
            </div>

            {/* Updated Banner Heading */}
            <h1
              style={{
                fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1.5rem',
                lineHeight: 1.18,
                letterSpacing: '-0.02em',
                textAlign: 'left',
                maxWidth: '920px',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.75), 0 1px 4px rgba(0, 0, 0, 0.9)',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              Vebhor, your local partner for Workforce Services & Solutions.
            </h1>

            {/* Opening Paragraph */}
            <p
              style={{
                fontSize: '1.22rem',
                color: '#f8fafc',
                lineHeight: 1.75,
                maxWidth: '860px',
                margin: '0 0 2.5rem 0',
                textShadow: '0 1px 8px rgba(0, 0, 0, 0.8), 0 2px 14px rgba(0, 0, 0, 0.6)',
                fontWeight: 400,
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
              }}
            >
              Vebhor was built on a simple belief: workforce operations shouldn’t be complicated. For years, enterprises struggled with fragmented payroll systems, inconsistent contractor management, and global mobility processes that slowed growth instead of enabling it. We saw an opportunity to change that.
            </p>

            {/* Quick Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById('our-evolution-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  padding: '0.85rem 2.2rem',
                  background: BRAND_GRADIENT,
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(6, 182, 212, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                }}
              >
                <span>Our Evolution</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onNavPartners}
                style={{
                  padding: '0.85rem 2.2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#0f172a',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
                }}
              >
                <span>Meet Our Partners</span>
              </button>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. OUR EVOLUTION & TRANSFORMATION (ELEGANT 2-COLUMN CARDS) */}
        {/* ============================================================ */}
        <section
          id="our-evolution-section"
          ref={evolutionRef}
          style={{
            backgroundColor: '#ffffff',
            padding: '6rem 2rem',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#ffffff',
                  background: BRAND_GRADIENT,
                  padding: '0.4rem 1.4rem',
                  borderRadius: '18px 24px 24px 18px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                  boxShadow: BRAND_SHADOW
                }}
              >
                OUR JOURNEY & CAPABILITIES
              </span>
              <h2
                style={{
                  fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                Built to Power How Modern Businesses Scale
              </h2>
            </div>

            {/* 2 Structured Cards for Narrative Paragraphs 2 & 3 */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
                gap: '2rem',
                opacity: evolutionVisible ? 1 : 0,
                transform: evolutionVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Card 1: Evolution */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#06b6d4';
                  e.currentTarget.style.boxShadow = '0 16px 35px rgba(6, 182, 212, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(6, 182, 212, 0.12)',
                    color: '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Cpu size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.3 }}>
                  Next‑Generation Payroll & Workforce Solutions
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                  What began as a specialised workforce services practice has evolved into a next‑generation Payroll and Workforce Solutions company—powered by technology, strengthened by process, and guided by a deep understanding of how modern businesses scale. As organisations expanded across borders and industries, we grew with them, building capabilities that make global workforce management seamless, compliant, and predictable.
                </p>
              </div>

              {/* Card 2: Transformation */}
              <div
                style={{
                  backgroundColor: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#10b981';
                  e.currentTarget.style.boxShadow = '0 16px 35px rgba(16, 185, 129, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.03)';
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: 'rgba(16, 185, 129, 0.12)',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <Zap size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.3 }}>
                  Smarter, AI‑Enabled Operations
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                  Our transformation into Vebhor reflects this journey. It represents a shift toward smarter, AI‑enabled operations; toward solutions that anticipate challenges rather than react to them; and toward a partner ecosystem designed to support enterprises wherever they operate.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. THE TEAM BEHIND THE TEAMS (4 SIGNATURE PILLARS) */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#f8fafc',
            color: '#0f172a',
            padding: '6rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Top Mission Statement (Paragraph 4) */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '24px',
                padding: '3rem 3rem',
                textAlign: 'center',
                maxWidth: '1000px',
                margin: '0 auto 3.5rem auto',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#005CFD',
                  display: 'inline-block',
                  marginBottom: '1rem'
                }}
              >
                OUR COMMITMENT
              </span>
              <h2
                style={{
                  fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                  fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  lineHeight: 1.3,
                  marginBottom: '1.25rem'
                }}
              >
                The Team Behind the Teams
              </h2>
              <p
                style={{
                  fontSize: '1.15rem',
                  color: '#64748b',
                  lineHeight: 1.8,
                  margin: 0
                }}
              >
                Today, Vebhor stands as the team behind the teams—helping clients hire, mobilise, pay, and manage talent with confidence. We bring together industry expertise, global reach, and technology‑powered delivery to simplify the complex and enable organisations to focus on what matters: growth, innovation, and impact.
              </p>
            </div>

            {/* 4 Signature Callout Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}
            >
              {[
                {
                  tag: 'PARTNERSHIP',
                  title: 'More than a provider',
                  desc: 'Vebhor is more than a service provider.'
                },
                {
                  tag: 'DRIVING SUCCESS',
                  title: 'Workforce Engine',
                  desc: 'We are the workforce engine behind modern enterprises.'
                },
                {
                  tag: 'SCALABILITY',
                  title: 'Scales With You',
                  desc: 'We are the partner that scales with you.'
                },
                {
                  tag: 'INNOVATION',
                  title: 'Next Generation',
                  desc: 'We are the next generation of workforce solutions.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#005CFD';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 92, 253, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                    <CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#005CFD' }}>
                      {item.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. WHAT WE DELIVER SECTION */}
        {/* ============================================================ */}
        <section
          ref={deliverRef}
          style={{
            backgroundColor: '#f8fafc',
            padding: '6rem 2rem 5.5rem 2rem',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '3.5rem',
                opacity: deliverVisible ? 1 : 0,
                transform: deliverVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', background: BRAND_GRADIENT, padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: BRAND_SHADOW }}>
                WHAT WE DELIVER
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                We help organisations:
              </h2>
            </div>

            {/* 6 Directional Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.35rem', marginBottom: '2.5rem' }}>
              {[
                'Hire globally and compliantly',
                'Manage employees, contractors, and vendors in one system',
                'Run payroll accurately and on time',
                'From HR operations to full IT and device lifecycle management—we make workforce support seamless',
                'Build scalable workforce processes and digital experiences',
                'Reduce operational friction and accelerate growth'
              ].map((point, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className="about-deliver-card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      backgroundColor: '#ffffff',
                      padding: '1.4rem 1.6rem',
                      borderRadius: '14px',
                      border: '1.5px solid #e2e8f0',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                      opacity: deliverVisible ? 1 : 0,
                      transform: deliverVisible ? 'translate(0, 0)' : isEven ? 'translateX(-40px)' : 'translateX(40px)',
                      transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s`
                    }}
                  >
                    <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e293b' }}>{point}</span>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '1.6rem 2.2rem',
                borderRadius: '14px',
                textAlign: 'center',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                opacity: deliverVisible ? 1 : 0,
                transform: deliverVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
              }}
            >
              <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 600, margin: 0 }}>
                Our solutions are designed to reduce complexity, strengthen compliance, and create predictable, scalable operations.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. OUR CODE OF CONDUCT SECTION */}
        {/* ============================================================ */}
        <section
          ref={conductRef}
          id="code-of-conduct"
          style={{
            backgroundColor: '#ffffff',
            color: '#0f172a',
            padding: '6rem 2rem 5.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Unified Header Box */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                padding: '3rem 2.5rem',
                borderRadius: '24px',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                textAlign: 'center',
                marginBottom: '3.5rem',
                opacity: conductVisible ? 1 : 0,
                transform: conductVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Our Code of Conduct — The Vebhor Way
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                  At Vebhor, integrity isn’t just a principle—it’s the story of how we choose to show up every day. From the way we work with governments and communities to how we support clients, partners, and our own people, integrity shapes every decision, every interaction, and every commitment we make.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                  It is the thread that connects our past to our future, guiding us as we grow, evolve, and build relationships grounded in trust. Our Code of Conduct is the compass that keeps us aligned—ensuring that no matter where we operate or who we work with, we act with transparency, respect, and responsibility.
                </p>
                <p style={{ fontSize: '1.12rem', color: '#005CFD', lineHeight: 1.8, fontWeight: 700, margin: '0.5rem 0 0 0', letterSpacing: '0.01em' }}>
                  This is who we are.<br />
                  This is how we lead.<br />
                  This is the Vebhor way.
                </p>
              </div>
            </div>

            {/* 3 Box-by-Box Integrity Pillar Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: 0 }}>
              {[
                {
                  title: 'Integrity with our clients and government',
                  desc: 'We comply fully with the laws and regulations of every country we operate in and maintain transparent, ethical relationships with government bodies. We enforce a strict zero‑tolerance policy toward corruption, bribery, or any improper influence.'
                },
                {
                  title: 'Integrity with communities and people',
                  desc: 'We promote environmental responsibility and sustainable practices in everything we do. We safeguard Vebhor’s brand, information, and intellectual property, and we communicate with clarity and accountability. We are committed to a safe, healthy, and inclusive workplace, upholding meritocracy, non‑discrimination, and diversity while protecting our people, our assets, and our business.'
                },
                {
                  title: 'Integrity with partners and suppliers',
                  desc: 'We work with partners and suppliers who share our commitment to ethical conduct and compliance. We avoid conflicts of interest and uphold strict standards of transparency, fairness, and professionalism in all engagements.'
                }
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '2.4rem 2rem',
                    borderRadius: '22px',
                    border: '1.5px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                    opacity: conductVisible ? 1 : 0,
                    transform: conductVisible ? 'translateY(0)' : 'translateY(30px)',
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.12}s`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = '#005CFD';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 92, 253, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.04)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '12px',
                        backgroundColor: '#f0fdf4',
                        border: '1px solid #bbf7d0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#16a34a'
                      }}
                    >
                      <ShieldCheck size={26} />
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0, lineHeight: 1.3 }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.98rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. WHY CLIENTS WORK WITH US SECTION */}
        {/* ============================================================ */}
        <section
          ref={clientsRef}
          style={{
            backgroundColor: '#ffffff',
            padding: '6rem 2rem 5rem 2rem',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

            <div
              style={{
                textAlign: 'center',
                marginBottom: '3rem',
                opacity: clientsVisible ? 1 : 0,
                transform: clientsVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', background: BRAND_GRADIENT, padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: BRAND_SHADOW }}>
                CLIENT ADVANTAGE
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                Why Clients Work With Us
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.35rem', marginBottom: '2.5rem' }}>
              {[
                'End‑to‑end workforce delivery from hiring to payroll',
                'Technology‑enabled operations for speed, accuracy, and visibility',
                'Compliance‑first approach across regions and worker types',
                'Transparent pricing with no hidden fees',
                'Dedicated support teams for HR, payroll, IT, and onboarding',
                'Scalable processes that grow with your organisation'
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="about-deliver-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    backgroundColor: '#f8fafc',
                    padding: '1.35rem 1.6rem',
                    borderRadius: '14px',
                    border: '1.5px solid #e2e8f0',
                    opacity: clientsVisible ? 1 : 0,
                    transform: clientsVisible ? 'translateY(0)' : 'translateY(35px)',
                    transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s`
                  }}
                >
                  <CheckCircle2 size={24} style={{ color: '#10b981', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1e293b' }}>{point}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                backgroundColor: '#f8fafc',
                padding: '1.6rem 2.2rem',
                borderRadius: '14px',
                textAlign: 'center',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
              }}
            >
              <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 700, margin: 0 }}>
                We operate as an extension of your team—ensuring continuity, compliance, and confidence.
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. OUR MISSION & VISION */}
        {/* ============================================================ */}
        <section
          ref={missionRef}
          style={{
            backgroundColor: '#f8fafc',
            padding: '6rem 2rem 6.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '3.5rem',
                opacity: missionVisible ? 1 : 0,
                transform: missionVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', background: BRAND_GRADIENT, padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: BRAND_SHADOW }}>
                PURPOSE
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                Our Mission & Vision
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>

              {/* Mission Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '3.5rem 2.8rem',
                  borderRadius: '24px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  opacity: missionVisible ? 1 : 0,
                  transform: missionVisible ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ width: '56px', height: '56px', backgroundColor: '#f0fdf4', border: '1.5px solid #bbf7d0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', color: '#16a34a' }}>
                  <Target size={30} />
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  Our Mission
                </h3>
                <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                  To empower organisations with workforce solutions that are simple, compliant, and built for growth.
                </p>
              </div>

              {/* Vision Card */}
              <div
                style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '3.5rem 2.8rem',
                  borderRadius: '24px',
                  border: '1.5px solid #e2e8f0',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
                  opacity: missionVisible ? 1 : 0,
                  transform: missionVisible ? 'translateX(0)' : 'translateX(40px)',
                  transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ width: '56px', height: '56px', backgroundColor: '#eff6ff', border: '1.5px solid #bfdbfe', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', color: '#005CFD' }}>
                  <Eye size={30} />
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                  Our Vision
                </h3>
                <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                  To become the most trusted mid‑size workforce consultancy—where technology, people, and operations come together to help businesses scale globally.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
      />
    </div>
  );
};

export default AboutPage;
