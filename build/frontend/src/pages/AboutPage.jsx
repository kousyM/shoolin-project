import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Sparkles
} from 'lucide-react';

export const AboutPage = ({ onNavHome, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [deliverVisible, setDeliverVisible] = useState(false);
  const [conductVisible, setConductVisible] = useState(false);
  const [clientsVisible, setClientsVisible] = useState(false);
  const [missionVisible, setMissionVisible] = useState(false);

  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const deliverRef = useRef(null);
  const conductRef = useRef(null);
  const clientsRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  // Generic IntersectionObserver setup for scroll animations
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

    const cleanupStory = createObserver(storyRef, setStoryVisible);
    const cleanupDeliver = createObserver(deliverRef, setDeliverVisible);
    const cleanupConduct = createObserver(conductRef, setConductVisible);
    const cleanupClients = createObserver(clientsRef, setClientsVisible);
    const cleanupMission = createObserver(missionRef, setMissionVisible);

    return () => {
      cleanupStory();
      cleanupDeliver();
      cleanupConduct();
      cleanupClients();
      cleanupMission();
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
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
        {/* 1. HERO BANNER SECTION (STAGGERED SLIDE & BLUR-FADE ENTRANCE) */}
        {/* ============================================================ */}
        <section
          ref={heroRef}
          style={{
            position: 'relative',
            backgroundColor: '#060A14',
            backgroundImage: `linear-gradient(135deg, rgba(6, 10, 20, 0.92) 0%, rgba(15, 23, 42, 0.88) 100%), url('/images/about_ai_bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '6rem 2rem 5.5rem 2rem',
            textAlign: 'left',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Subtle Ambient Radial Light */}
          <div
            style={{
              position: 'absolute',
              top: '-40px',
              left: '30%',
              width: '650px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(121, 22, 168, 0.25) 0%, rgba(56, 189, 248, 0.15) 50%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(40px)'
            }}
          />

          <div style={{ maxWidth: '1120px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            
            {/* Tag Badge */}
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(-25px)',
                filter: heroVisible ? 'blur(0)' : 'blur(8px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                marginBottom: '1.5rem'
              }}
            >
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#ffffff',
                  backgroundColor: '#6C5CE7',
                  padding: '0.4rem 1.35rem',
                  borderRadius: '18px 24px 24px 18px',
                  display: 'inline-block',
                  boxShadow: '0 4px 18px rgba(121, 22, 168, 0.5)'
                }}
              >
                ABOUT US
              </span>
            </div>

            {/* Banner Heading */}
            <h1
              style={{
                fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '1.6rem',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                textAlign: 'left',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateX(0)' : 'translateX(-45px)',
                filter: heroVisible ? 'blur(0)' : 'blur(10px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
              }}
            >
              Vebhor is a next‑generation Payroll and Workforce Solutions company
            </h1>

            {/* Paragraph 1 */}
            <p
              style={{
                fontSize: '1.18rem',
                color: '#DCD6F7',
                fontWeight: 400,
                maxWidth: '980px',
                margin: '0 0 1.5rem 0',
                lineHeight: 1.75,
                textAlign: 'left',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateX(0)' : 'translateX(-35px)',
                filter: heroVisible ? 'blur(0)' : 'blur(8px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
              }}
            >
              Vebhor is a next‑generation Payroll and Workforce Solutions company that helps enterprises build, manage, and scale global teams with <span style={{ color: '#55E6C1', fontWeight: 600 }}>precision</span>, <span style={{ color: '#A855F7', fontWeight: 600 }}>compliance</span>, and <span style={{ color: '#38BDF8', fontWeight: 600 }}>AI‑driven efficiency</span>. With deep expertise across talent management, payrolling, contractor operations, and global mobility, we deliver industry‑specific solutions that meet the complex workforce needs of modern businesses.
            </p>

            {/* Paragraph 2 */}
            <p
              style={{
                fontSize: '1.12rem',
                color: '#cbd5e1',
                fontWeight: 400,
                maxWidth: '980px',
                margin: '0 0 2.5rem 0',
                lineHeight: 1.7,
                textAlign: 'left',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateX(0)' : 'translateX(-25px)',
                filter: heroVisible ? 'blur(0)' : 'blur(6px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s'
              }}
            >
              For clients, we are the partner that builds and manages the workforce behind their success. For investors, we are a scalable, process‑driven consulting firm with strong market demand, recurring revenue models, and technology‑powered delivery.
            </p>

            {/* Partner With Us Button */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '1rem',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0) scale(1)' : 'translateY(25px) scale(0.95)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.7s'
              }}
            >
              <button
                onClick={onNavPartners}
                style={{
                  padding: '0.9rem 2.4rem',
                  backgroundColor: '#6C5CE7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 8px 25px rgba(108, 92, 231, 0.5)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#5842e3';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(108, 92, 231, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#6C5CE7';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(108, 92, 231, 0.5)';
                }}
              >
                <span>Partner With Us</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. OUR STORY SECTION - 3D ROBOTIC HAND & ATOMIC ORBIT GRAPHIC */}
        {/* ============================================================ */}
        <section
          ref={storyRef}
          style={{
            backgroundColor: '#060D1F',
            padding: '6rem 2rem 6.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Ambient Background Glow */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '10%',
              transform: 'translateY(-50%)',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, rgba(121, 22, 168, 0.15) 50%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }}
          />

          <div style={{ maxWidth: '1240px', margin: '0 auto', position: 'relative', zIndex: 3 }}>
            
            <div
              className="about-story-grid about-story-grid-card"
              style={{
                backgroundColor: 'rgba(10, 17, 40, 0.78)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '28px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55), 0 0 45px rgba(56, 189, 248, 0.15)',
                overflow: 'hidden'
              }}
            >
              {/* Left Side: Text Details (Slide-in from Left-to-Right) */}
              <div
                className="about-story-left"
                style={{
                  opacity: storyVisible ? 1 : 0,
                  transform: storyVisible ? 'translateX(0)' : 'translateX(-30px)',
                  filter: storyVisible ? 'blur(0)' : 'blur(10px)',
                  transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {/* Purple Capsule Badge */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      color: '#ffffff',
                      backgroundColor: '#6C5CE7',
                      padding: '0.4rem 1.4rem',
                      borderRadius: '18px 24px 24px 18px',
                      display: 'inline-block',
                      boxShadow: '0 4px 18px rgba(108, 92, 231, 0.5)'
                    }}
                  >
                    ABOUT US
                  </span>
                </div>

                {/* Main Heading (Building value) */}
                <h2
                  style={{
                    fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                    fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    marginBottom: '1.5rem',
                    lineHeight: 1.25
                  }}
                >
                  Building something of value means{' '}
                  <span
                    style={{
                      background: 'linear-gradient(90deg, #38BDF8 0%, #A855F7 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline'
                    }}
                  >
                    anything is possible
                  </span>
                </h2>

                <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.75, marginBottom: '1.25rem', fontWeight: 400 }}>
                  Vebhor was founded with a simple belief: organisations grow when their people systems work effortlessly. Over the years, we’ve evolved into a trusted partner for startups, scale‑ups, and enterprises across industries—delivering workforce solutions that are transparent, compliant, and built for scale.
                </p>
                
                <p style={{ fontSize: '1.08rem', color: '#94a3b8', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
                  As a mid‑size firm, we offer the agility of a boutique consultancy with the capability of an enterprise provider. Our teams operate across recruitment, HR, payroll, vendor management, and IT support, ensuring continuity and operational excellence at every stage of the workforce lifecycle.
                </p>
              </div>

              {/* Right Side: 3D Robotic Hand & Atomic Orbit Graphic with Zoom-In Entrance */}
              <div
                className="about-story-right"
                style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: storyVisible ? 1 : 0,
                  transform: storyVisible ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(30px)',
                  filter: storyVisible ? 'blur(0)' : 'blur(12px)',
                  transition: 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, filter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                {/* 1. Rotating Atomic Orbit Rings */}
                <div
                  className="atomic-orbit-ring"
                  style={{
                    position: 'absolute',
                    width: '380px',
                    height: '380px',
                    maxWidth: '85vw',
                    maxHeight: '85vw',
                    borderRadius: '50%',
                    border: '1.5px solid rgba(56, 189, 248, 0.55)',
                    boxShadow: '0 0 24px rgba(56, 189, 248, 0.35)',
                    animation: 'atomicOrbit1 12s linear infinite',
                    pointerEvents: 'none',
                    zIndex: 4,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-5px', left: '50%', width: '10px', height: '10px', backgroundColor: '#38BDF8', borderRadius: '50%', boxShadow: '0 0 14px #38BDF8, 0 0 24px #38BDF8' }} />
                </div>

                <div
                  className="atomic-orbit-ring"
                  style={{
                    position: 'absolute',
                    width: '340px',
                    height: '340px',
                    maxWidth: '75vw',
                    maxHeight: '75vw',
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(168, 85, 247, 0.65)',
                    boxShadow: '0 0 24px rgba(168, 85, 247, 0.35)',
                    animation: 'atomicOrbit2 16s linear infinite',
                    pointerEvents: 'none',
                    zIndex: 4,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-5px', left: '50%', width: '10px', height: '10px', backgroundColor: '#A855F7', borderRadius: '50%', boxShadow: '0 0 14px #A855F7, 0 0 24px #A855F7' }} />
                </div>

                {/* 2. 3D Robotic Hand Card with Continuous Zoom & Parallax Motion */}
                <div className="about-robot-card" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
                  <img
                    src="/images/contact_robot_bg.png"
                    alt="Futuristic Robotic Hand AI Matrix"
                    className="about-robot-img"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6, 13, 31, 0.15) 0%, rgba(6, 13, 31, 0.85) 100%)' }} />
                  
                  {/* Floating Overlay Badge on Card */}
                  <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#ffffff', zIndex: 5 }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={16} />
                      BOUTIQUE AGILITY • ENTERPRISE CAPABILITY
                    </span>
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, margin: '0.4rem 0 0 0', color: '#ffffff' }}>
                      AI‑Driven Workforce Lifecycle
                    </h3>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. WHAT WE DELIVER SECTION (DIRECTIONAL ANIMATED CARDS) */}
        {/* ============================================================ */}
        <section
          ref={deliverRef}
          style={{
            backgroundColor: '#ffffff',
            padding: '6rem 2rem 5rem 2rem',
            borderBottom: '1px solid #f1f5f9'
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
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: '0 4px 14px rgba(121, 22, 168, 0.35)' }}>
                WHAT WE DELIVER
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                We help organisations:
              </h2>
            </div>

            {/* 6 Directional Staggered Animated Cards (Alternating Left & Right Entrances) */}
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
                      backgroundColor: '#f8fafc',
                      padding: '1.35rem 1.6rem',
                      borderRadius: '14px',
                      border: '1.5px solid #e2e8f0',
                      boxShadow: '0 4px 14px rgba(0,0,0,0.03)',
                      opacity: deliverVisible ? 1 : 0,
                      transform: deliverVisible ? 'translate(0, 0)' : isEven ? 'translateX(-40px)' : 'translateX(40px)',
                      transition: `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.08}s`
                    }}
                  >
                    <CheckCircle2 size={24} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                    <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e293b' }}>{point}</span>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: '#f8f5ff',
                padding: '1.6rem 2.2rem',
                borderRadius: '14px',
                textAlign: 'center',
                borderLeft: '4px solid #6C5CE7',
                boxShadow: '0 4px 20px rgba(121, 22, 168, 0.08)',
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
        {/* 4. OUR CODE OF CONDUCT SECTION (DIRECTIONAL PILLAR CARDS) */}
        {/* ============================================================ */}
        <section
          ref={conductRef}
          id="code-of-conduct"
          style={{
            backgroundColor: '#060A14',
            color: '#ffffff',
            padding: '6rem 2rem 5.5rem 2rem',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Unified Header Box */}
            <div
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(16px)',
                padding: '3rem 2.5rem',
                borderRadius: '24px',
                border: '1.5px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
                textAlign: 'center',
                marginBottom: '3.5rem',
                opacity: conductVisible ? 1 : 0,
                transform: conductVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Our Code of Conduct — The Vebhor Way
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                  At Vebhor, integrity isn’t just a principle—it’s the story of how we choose to show up every day. From the way we work with governments and communities to how we support clients, partners, and our own people, integrity shapes every decision, every interaction, and every commitment we make.
                </p>
                <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                  It is the thread that connects our past to our future, guiding us as we grow, evolve, and build relationships grounded in trust. Our Code of Conduct is the compass that keeps us aligned—ensuring that no matter where we operate or who we work with, we act with transparency, respect, and responsibility.
                </p>
                <p style={{ fontSize: '1.12rem', color: '#38bdf8', lineHeight: 1.8, fontWeight: 700, margin: '0.5rem 0 0 0', letterSpacing: '0.01em' }}>
                  This is who we are.<br />
                  This is how we lead.<br />
                  This is the Vebhor way.
                </p>
              </div>
            </div>

            {/* 3 Box-by-Box Integrity Pillar Cards with Directional Entrances */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
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
              ].map((pillar, idx) => {
                const getEntranceTransform = (i) => {
                  if (i === 0) return 'translate3d(-40px, 0, 0)';
                  if (i === 1) return 'translate3d(0, 40px, 0)';
                  return 'translate3d(40px, 0, 0)';
                };

                return (
                  <div
                    key={idx}
                    className="about-conduct-card"
                    style={{
                      backgroundColor: 'rgba(17, 24, 39, 0.85)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      padding: '2.4rem 2rem',
                      borderRadius: '22px',
                      border: '1.5px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 12px 32px rgba(0,0,0,0.35)',
                      opacity: conductVisible ? 1 : 0,
                      transform: conductVisible ? 'translate3d(0, 0, 0)' : getEntranceTransform(idx),
                      animation: conductVisible ? (idx % 2 === 0 ? 'conductFloat1 6.5s ease-in-out infinite' : 'conductFloat2 7.5s ease-in-out infinite') : 'none',
                      transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.15}s`
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1.2rem' }}>
                      <div
                        className="conduct-icon-box"
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          backgroundColor: 'rgba(56, 189, 248, 0.12)',
                          border: '1px solid rgba(56, 189, 248, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#38bdf8'
                        }}
                      >
                        <ShieldCheck size={26} />
                      </div>
                      <h3 style={{ fontSize: '1.24rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.3 }}>
                        {pillar.title}
                      </h3>
                    </div>
                    <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, margin: 0 }}>
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: 'rgba(121, 22, 168, 0.2)',
                padding: '1.5rem 2rem',
                borderRadius: '14px',
                border: '1px solid rgba(121, 22, 168, 0.45)',
                textAlign: 'center',
                opacity: conductVisible ? 1 : 0,
                transform: conductVisible ? 'translateY(0)' : 'translateY(25px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
              }}
            >
              <p style={{ fontSize: '1.05rem', color: '#DCD6F7', fontWeight: 600, margin: 0 }}>
                Every individual at Vebhor Consultancy is expected to uphold this Code of Conduct and embody our values in their daily work.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. WHY CLIENTS & WHY INVESTORS SECTION (ANIMATED CARDS) */}
        {/* ============================================================ */}
        <section
          ref={clientsRef}
          style={{
            backgroundColor: '#ffffff',
            padding: '6rem 2rem 5rem 2rem',
            borderBottom: '1px solid #f1f5f9'
          }}
        >
          <div style={{ maxWidth: '1180px', margin: '0 auto' }}>

            {/* Why Clients Work With Us */}
            <div style={{ marginBottom: '5rem' }}>
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '3rem',
                  opacity: clientsVisible ? 1 : 0,
                  transform: clientsVisible ? 'translateY(0)' : 'translateY(-30px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: '0 4px 14px rgba(121, 22, 168, 0.35)' }}>
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
                    <CheckCircle2 size={24} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                    <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1e293b' }}>{point}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  backgroundColor: '#f8f5ff',
                  padding: '1.6rem 2.2rem',
                  borderRadius: '14px',
                  textAlign: 'center',
                  borderLeft: '4px solid #6C5CE7',
                  boxShadow: '0 4px 20px rgba(121, 22, 168, 0.08)'
                }}
              >
                <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 700, margin: 0 }}>
                  We operate as an extension of your team—ensuring continuity, compliance, and confidence.
                </p>
              </div>
            </div>

            {/* Why Investors Believe in Us */}
            <div>
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '3rem',
                  opacity: clientsVisible ? 1 : 0,
                  transform: clientsVisible ? 'translateY(0)' : 'translateY(-30px)',
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '0.4rem 1.4rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.25rem' }}>
                  INVESTOR PROOF
                </span>
                <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                  Why Investors Believe in Us
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { title: 'High‑growth market', desc: 'Global workforce, EOR, payroll, and compliance services' },
                  { title: 'Recurring revenue', desc: 'Payroll, HR support, device management, and vendor operations' },
                  { title: 'Technology leverage', desc: 'Automation, digital onboarding, and integrated workflows' },
                  { title: 'Operational efficiency', desc: 'Standardised processes and multi‑vertical delivery' },
                  { title: 'Scalable model', desc: 'Expandable across industries and geographies' },
                  { title: 'Strong client retention', desc: 'Long‑term partnerships built on trust and transparency' }
                ].map((inv, idx) => (
                  <div
                    key={idx}
                    className="about-deliver-card"
                    style={{
                      backgroundColor: '#f8fafc',
                      padding: '1.8rem',
                      borderRadius: '16px',
                      border: '1.5px solid #e2e8f0',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                      opacity: clientsVisible ? 1 : 0,
                      transform: clientsVisible ? 'translateY(0)' : 'translateY(35px)',
                      transition: `all 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.09}s`
                    }}
                  >
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                      {inv.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: '#64748b', margin: 0, lineHeight: 1.6 }}>
                      {inv.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#060A14', color: '#ffffff', padding: '1.6rem 2.2rem', borderRadius: '14px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                <p style={{ fontSize: '1.1rem', color: '#55E6C1', fontWeight: 700, margin: 0 }}>
                  Vebhor is positioned to scale through technology, process optimisation, and multi‑vertical workforce solutions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. OUR MISSION & VISION (LEFT-TO-RIGHT & RIGHT-TO-LEFT ENTRANCES) */}
        {/* ============================================================ */}
        <section
          ref={missionRef}
          style={{
            backgroundColor: '#060D1F',
            padding: '6rem 2rem 6.5rem 2rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Subtle Ambient Glow */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '350px', background: 'radial-gradient(ellipse, rgba(121, 22, 168, 0.2) 0%, rgba(2, 132, 199, 0.15) 50%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />

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
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', marginBottom: '1.25rem', boxShadow: '0 4px 14px rgba(121, 22, 168, 0.45)' }}>
                PURPOSE
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', margin: 0 }}>
                Our Mission & Vision
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '2.5rem' }}>
              
              {/* Mission Card (SLIDES IN FROM LEFT TO RIGHT) */}
              <div
                className="about-mission-card"
                style={{
                  backgroundColor: 'rgba(30, 27, 75, 0.85)',
                  backdropFilter: 'blur(16px)',
                  color: '#ffffff',
                  padding: '3.5rem 2.8rem',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(108, 92, 231, 0.35)',
                  boxShadow: '0 20px 45px rgba(30, 27, 75, 0.4), 0 0 30px rgba(108, 92, 231, 0.2)',
                  opacity: missionVisible ? 1 : 0,
                  transform: missionVisible ? 'translateX(0)' : 'translateX(-80px)',
                  filter: missionVisible ? 'blur(0)' : 'blur(10px)',
                  transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), filter 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(85, 230, 193, 0.15)', border: '1.5px solid rgba(85, 230, 193, 0.4)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', color: '#55E6C1' }}>
                  <Target size={30} />
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Our Mission
                </h3>
                <p style={{ fontSize: '1.18rem', color: '#DCD6F7', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                  To empower organisations with workforce solutions that are simple, compliant, and built for growth.
                </p>
              </div>

              {/* Vision Card (SLIDES IN FROM RIGHT TO LEFT) */}
              <div
                className="about-vision-card"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(16px)',
                  color: '#ffffff',
                  padding: '3.5rem 2.8rem',
                  borderRadius: '24px',
                  border: '1.5px solid rgba(56, 189, 248, 0.35)',
                  boxShadow: '0 20px 45px rgba(2, 132, 199, 0.35), 0 0 30px rgba(56, 189, 248, 0.2)',
                  opacity: missionVisible ? 1 : 0,
                  transform: missionVisible ? 'translateX(0)' : 'translateX(80px)',
                  filter: missionVisible ? 'blur(0)' : 'blur(10px)',
                  transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, filter 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
                }}
              >
                <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(56, 189, 248, 0.15)', border: '1.5px solid rgba(56, 189, 248, 0.4)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.75rem', color: '#38BDF8' }}>
                  <Eye size={30} />
                </div>
                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Our Vision
                </h3>
                <p style={{ fontSize: '1.18rem', color: '#e0f2fe', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
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
