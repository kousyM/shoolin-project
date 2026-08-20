import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Lock, Globe, Zap, Layers, Check } from 'lucide-react';

export const OurSolutionSection = () => {
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

  const solutionCards = [
    {
      id: 'compliance',
      title: 'Global Payroll Compliance',
      description: 'Stay compliant across markets with locally informed payroll expertise. Vebhor manages evolving payroll regulations, statutory requirements, tax obligations, and reporting, helping ensure your workforce is paid accurately and on time while reducing compliance risk and administrative complexity.',
      icon: ShieldCheck,
      badgeBg: 'rgba(108, 92, 231, 0.15)',
      iconColor: '#a855f7',
      initialTransform: 'translate3d(-80px, -40px, 0)' // Top-Left entrance
    },
    {
      id: 'global-payroll',
      title: 'Global Payroll',
      description: 'Simplify payroll across borders with accurate, compliant, and scalable global payroll solutions. Vebhor manages payroll processing, statutory requirements, tax obligations, and local compliance, helping you pay your workforce accurately and on time while reducing administrative complexity.',
      icon: Globe,
      badgeBg: 'rgba(37, 99, 235, 0.15)',
      iconColor: '#38bdf8',
      initialTransform: 'translate3d(0, -80px, 0)' // Top-Down entrance
    },
    {
      id: 'consolidate',
      title: 'Consolidate Multiple Vendors',
      description: 'Simplify your workforce operations by bringing recruitment, contractor management, payroll, compliance, and workforce services under one trusted partner. Vebhor helps reduce vendor complexity, streamline processes, improve visibility, and create a more consistent workforce experience across markets.',
      icon: Layers,
      badgeBg: 'rgba(2, 132, 199, 0.15)',
      iconColor: '#06b6d4',
      initialTransform: 'translate3d(80px, -40px, 0)' // Top-Right entrance
    },
    {
      id: 'onboarding',
      title: 'Seamless Onboarding',
      description: 'With Vebhor Payroll’s Partner & Contractor onboarding application, teams can activate payroll and compliance instantly—no heavy integrations, no delays. Just connect, configure, and go.',
      icon: Zap,
      badgeBg: 'rgba(5, 150, 105, 0.15)',
      iconColor: '#10b981',
      initialTransform: 'translate3d(-80px, 50px, 0)' // Bottom-Left entrance
    },
    {
      id: 'screening',
      title: 'Effortless Background Checks',
      description: 'Automated verification for every new hire, powered by our trusted screening partner. Background checks run in parallel with onboarding, so your team can hire faster without compromising compliance.',
      icon: Check,
      badgeBg: 'rgba(217, 119, 6, 0.15)',
      iconColor: '#f59e0b',
      initialTransform: 'translate3d(0, 80px, 0)' // Bottom-Up entrance
    },
    {
      id: 'security',
      title: 'Solid International Security',
      description: 'Protect your team, data, and intellectual property with robust global compliance, ISO 27001 certified practices, and secure solutions that integrate seamlessly across your workflows.',
      icon: Lock,
      badgeBg: 'rgba(225, 29, 72, 0.15)',
      iconColor: '#f43f5e',
      initialTransform: 'translate3d(80px, 50px, 0)' // Bottom-Right entrance
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="our-solution"
      style={{
        backgroundColor: '#060A14',
        padding: '5.5rem 1.5rem 6rem 1.5rem',
        fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Background Soft Purple & Blue Radial Glow Light */}
      <div
        style={{
          position: 'absolute',
          top: '-80px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '500px',
          background: 'radial-gradient(ellipse at center, rgba(121, 22, 168, 0.22) 0%, rgba(37, 99, 235, 0.1) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(30px)'
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* 1. SCROLL-TRIGGERED SECTION HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Eyebrow Tag Fully in Purple Capsule */}
          <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
            <span style={{ backgroundColor: '#7916A8', color: '#ffffff', padding: '0.4rem 1.6rem', borderRadius: '18px 24px 24px 18px', boxShadow: '0 4px 20px rgba(121, 22, 168, 0.5)' }}>
              Our Solutions
            </span>
          </div>

          {/* Original Main Title */}
          <h2
            style={{
              fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
              fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '0.85rem',
              lineHeight: 1.3
            }}
          >
            Global Workforce Solutions,{' '}
            <span
              style={{
                backgroundColor: '#7916A8',
                color: '#ffffff',
                padding: '0.2rem 1.15rem',
                borderRadius: '16px 24px 24px 16px',
                display: 'inline-block',
                boxShadow: '0 4px 18px rgba(121, 22, 168, 0.45)'
              }}
            >
              Built Around Your Business
            </span>
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '820px', margin: '0 auto', lineHeight: 1.6, fontWeight: 400 }}>
            Hire Faster. Manage Smarter. Pay Global Teams with Confidence & Compliance.
          </p>
        </div>

        {/* 2. 6 DIRECTIONAL ENTRANCE CARDS (TOP/BOTTOM/SIDE ANIMATIONS) WITHOUT EXPLORE LINK */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {solutionCards.map((card, idx) => {
            const IconComp = card.icon;

            return (
              <div
                key={card.id}
                className="solution-dark-card"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate3d(0, 0, 0)' : card.initialTransform,
                  transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s, background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease`
                }}
              >
                {/* ICON BADGE */}
                <div
                  className="solution-card-icon"
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    backgroundColor: card.badgeBg,
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: card.iconColor,
                    marginBottom: '1.35rem',
                    boxShadow: `0 4px 14px ${card.badgeBg}`
                  }}
                >
                  <IconComp size={25} />
                </div>

                {/* ORIGINAL CARD TITLE */}
                <h3
                  style={{
                    fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    lineHeight: 1.3
                  }}
                >
                  {card.title}
                </h3>

                {/* ORIGINAL CARD DESCRIPTION */}
                <p
                  style={{
                    fontSize: '0.94rem',
                    color: '#94a3b8',
                    lineHeight: 1.65,
                    margin: 0,
                    fontWeight: 400
                  }}
                >
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurSolutionSection;
