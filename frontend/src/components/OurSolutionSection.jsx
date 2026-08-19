import React from 'react';
import { ShieldCheck, Lock, Globe, Zap, Layers, Check, ArrowRight, Sparkles } from 'lucide-react';

export const OurSolutionSection = () => {
  const solutionCards = [
    {
      id: 'compliance',
      title: 'Global Payroll Compliance',
      description: 'Stay compliant across markets with locally informed payroll expertise. Vebhor manages evolving payroll regulations, statutory requirements, tax obligations, and reporting, helping ensure your workforce is paid accurately and on time while reducing compliance risk and administrative complexity.',
      icon: ShieldCheck,
      badgeBg: '#f3e8ff',
      iconColor: '#6C5CE7',
      gradient: 'linear-gradient(135deg, #6C5CE7 0%, #a855f7 100%)'
    },
    {
      id: 'global-payroll',
      title: 'Global Payroll',
      description: 'Simplify payroll across borders with accurate, compliant, and scalable global payroll solutions. Vebhor manages payroll processing, statutory requirements, tax obligations, and local compliance, helping you pay your workforce accurately and on time while reducing administrative complexity.',
      icon: Globe,
      badgeBg: '#e0e7ff',
      iconColor: '#3B3B98',
      gradient: 'linear-gradient(135deg, #2563EB 0%, #4f46e5 100%)'
    },
    {
      id: 'consolidate',
      title: 'Consolidate Multiple Vendors',
      description: 'Simplify your workforce operations by bringing recruitment, contractor management, payroll, compliance, and workforce services under one trusted partner. Vebhor helps reduce vendor complexity, streamline processes, improve visibility, and create a more consistent workforce experience across markets.',
      icon: Layers,
      badgeBg: '#e0f2fe',
      iconColor: '#0284c7',
      gradient: 'linear-gradient(135deg, #0284c7 0%, #06b6d4 100%)'
    },
    {
      id: 'onboarding',
      title: 'Seamless Onboarding',
      description: 'With Vebhor Payroll’s Partner & Contractor onboarding application, teams can activate payroll and compliance instantly—no heavy integrations, no delays. Just connect, configure, and go.',
      icon: Zap,
      badgeBg: '#d1fae5',
      iconColor: '#059669',
      gradient: 'linear-gradient(135deg, #059669 0%, #10b981 100%)'
    },
    {
      id: 'screening',
      title: 'Effortless Background Checks',
      description: 'Automated verification for every new hire, powered by our trusted screening partner. Background checks run in parallel with onboarding, so your team can hire faster without compromising compliance.',
      icon: Check,
      badgeBg: '#fef3c7',
      iconColor: '#d97706',
      gradient: 'linear-gradient(135deg, #d97706 0%, #f59e0b 100%)'
    },
    {
      id: 'security',
      title: 'Solid International Security',
      description: 'Protect your team, data, and intellectual property with robust global compliance, ISO 27001 certified practices, and secure solutions that integrate seamlessly across your workflows.',
      icon: Lock,
      badgeBg: '#ffe4e6',
      iconColor: '#e11d48',
      gradient: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)'
    }
  ];

  return (
    <section id="our-solution" style={{ backgroundColor: '#F8FAFC', padding: '5.5rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ambient Gradient Light */}
      <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#7C3AED', backgroundColor: '#EDE9FE', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1rem' }}>
            <Sparkles size={14} />
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#172033', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.25 }}>
            Global Workforce Solutions, Built Around Your Business
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#2563EB', fontWeight: 600, maxWidth: '800px', margin: '0 auto', lineHeight: 1.5 }}>
            Hire Faster. Manage Smarter. Pay Global Teams with Confidence & Compliance.
          </p>
        </div>

        {/* 6 CLEAN CARD BOXES WITH ALIGNED ICONS & INTERACTIVE HOVER */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {solutionCards.map((card) => {
            const IconComp = card.icon;

            return (
              <div
                key={card.id}
                className="solution-interactive-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  padding: '2.5rem 2.25rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  boxSizing: 'border-box',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                {/* Glowing Top Line */}
                <div
                  className="card-top-glow"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: card.gradient,
                    transition: 'height 0.3s ease'
                  }}
                />

                <div style={{ width: '100%' }}>
                  {/* PERFECTLY CENTERED ICON BADGE WITH ANIMATED CLASS */}
                  <div
                    className="card-icon-badge"
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      backgroundColor: card.badgeBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.iconColor,
                      flexShrink: 0,
                      marginBottom: '1.5rem',
                      boxSizing: 'border-box',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                      transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  >
                    <IconComp size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 800, color: '#172033', marginBottom: '0.85rem', lineHeight: 1.3, wordBreak: 'break-word', width: '100%' }}>
                    {card.title}
                  </h3>

                  {/* CONTENT PARAGRAPH */}
                  <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, margin: '0 0 1.5rem 0', fontWeight: 400, width: '100%' }}>
                    {card.description}
                  </p>
                </div>

                {/* Explore Link with Sliding Arrow */}
                <div
                  className="card-explore-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#2563EB',
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    paddingTop: '0.5rem',
                    borderTop: '1px solid #f1f5f9',
                    width: '100%'
                  }}
                >
                  <span>Explore Solution</span>
                  <ArrowRight
                    size={16}
                    className="explore-arrow"
                    style={{ transition: 'transform 0.25s ease' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurSolutionSection;
