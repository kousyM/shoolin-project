import React, { useState, useEffect, useRef } from 'react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5.5rem 1.5rem',
        overflow: 'hidden',
        backgroundColor: '#060A14'
      }}
    >
      {/* 1. CINEMATIC BACKGROUND IMAGE (AI CYBER HUMAN MATRIX) WITH SLOW MOTION */}
      <img
        src="/images/about_ai_bg.jpg"
        alt="Vebhor AI Human Workforce Matrix"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 35%',
          zIndex: 1,
          animation: 'heroImgKenBurns 12s ease-in-out infinite alternate',
          filter: 'brightness(0.6) contrast(1.15)'
        }}
      />

      {/* Dark Gradient Overlay for Maximum Readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(6, 10, 20, 0.88) 0%, rgba(6, 10, 20, 0.72) 50%, rgba(6, 10, 20, 0.88) 100%)',
          zIndex: 2
        }}
      />

      {/* 2. GLASSMORPHISM NARRATIVE CONTAINER WITH DYNAMIC ENTRANCE & GLOW BORDER */}
      <div
        style={{
          maxWidth: '1120px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 3,
          backgroundColor: 'rgba(10, 17, 40, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '24px',
          padding: 'clamp(1.75rem, 4vw, 3.5rem)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.55), 0 0 40px rgba(108, 92, 231, 0.25)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25px, 0)',
          transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Glowing Top Ambient Accent Line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '10%',
            right: '10%',
            height: '3px',
            background: 'linear-gradient(90deg, transparent 0%, #6C5CE7 30%, #55E6C1 70%, transparent 100%)',
            borderRadius: '3px'
          }}
        />

        {/* Center-Aligned About Us Eyebrow Tag Fully in Royal Purple Capsule */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '1.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-15px)',
            transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            <span style={{ backgroundColor: '#6C5CE7', color: '#ffffff', padding: '0.4rem 1.6rem', borderRadius: '18px 24px 24px 18px', boxShadow: '0 4px 20px rgba(108, 92, 231, 0.5)' }}>
              About Us
            </span>
          </div>
        </div>

        {/* Paragraph Narrative with High-Contrast Cyber Glow Highlights */}
        <p
          style={{
            fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif",
            fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
            fontWeight: 400,
            color: '#e2e8f0',
            lineHeight: 1.75,
            textAlign: 'start',
            margin: 0,
            letterSpacing: '-0.01em',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
            transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
          }}
        >
          Vebhor is a next‑generation HR Tech and Workforce Solutions company that helps enterprises build, manage, and scale global teams with{' '}
          <strong style={{ color: '#38bdf8', fontWeight: 700, textShadow: '0 0 12px rgba(56, 189, 248, 0.5)' }}>precision</strong>,{' '}
          <strong style={{ color: '#55e6c1', fontWeight: 700, textShadow: '0 0 12px rgba(85, 230, 193, 0.5)' }}>compliance</strong>, and{' '}
          <strong style={{ color: '#c084fc', fontWeight: 700, textShadow: '0 0 12px rgba(192, 132, 252, 0.5)' }}>AI‑driven efficiency</strong>. With deep expertise across talent management, payrolling, contractor operations, and global mobility, we deliver industry‑specific solutions that meet the complex workforce needs of modern businesses. Our multi‑vertical model mirrors the strength of leading global IT and consulting firms, enabling us to support clients across diverse sectors with{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>tailored workforce strategies</span>, transparent operations, and{' '}
          <span style={{ color: '#ffffff', fontWeight: 600 }}>end‑to‑end execution</span>.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
