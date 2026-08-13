import React from 'react';
import { ShieldCheck, Lock, Globe, Zap, Layers, Check } from 'lucide-react';

export const OurSolutionSection = () => {
  const solutionCards = [
    {
      id: 'compliance',
      title: 'Global Payroll Compliance',
      description: 'Stay compliant across markets with locally informed payroll expertise. Shoolin manages evolving payroll regulations, statutory requirements, tax obligations, and reporting, helping ensure your workforce is paid accurately and on time while reducing compliance risk and administrative complexity.',
      icon: ShieldCheck,
      badgeBg: '#f3e8ff',
      iconColor: '#6C5CE7'
    },
    {
      id: 'global-payroll',
      title: 'Global Payroll',
      description: 'Simplify payroll across borders with accurate, compliant, and scalable global payroll solutions. Shoolin manages payroll processing, statutory requirements, tax obligations, and local compliance, helping you pay your workforce accurately and on time while reducing administrative complexity.',
      icon: Globe,
      badgeBg: '#e0e7ff',
      iconColor: '#3B3B98'
    },
    {
      id: 'consolidate',
      title: 'Consolidate Multiple Vendors',
      description: 'Simplify your workforce operations by bringing recruitment, contractor management, payroll, compliance, and workforce services under one trusted partner. Shoolin helps reduce vendor complexity, streamline processes, improve visibility, and create a more consistent workforce experience across markets.',
      icon: Layers,
      badgeBg: '#e0f2fe',
      iconColor: '#0284c7'
    },
    {
      id: 'onboarding',
      title: 'Seamless Onboarding',
      description: 'With Shoolin/Vebhor Payroll’s Partner & Contractor onboarding application, teams can activate payroll and compliance instantly—no heavy integrations, no delays. Just connect, configure, and go.',
      icon: Zap,
      badgeBg: '#d1fae5',
      iconColor: '#059669'
    },
    {
      id: 'screening',
      title: 'Effortless Background Checks',
      description: 'Automated verification for every new hire, powered by our trusted screening partner. Background checks run in parallel with onboarding, so your team can hire faster without compromising compliance.',
      icon: Check,
      badgeBg: '#fef3c7',
      iconColor: '#d97706'
    },
    {
      id: 'security',
      title: 'Solid International Security',
      description: 'Protect your team, data, and intellectual property with robust global compliance, ISO 27001 certified practices, and secure solutions that integrate seamlessly across your workflows.',
      icon: Lock,
      badgeBg: '#ffe4e6',
      iconColor: '#e11d48'
    }
  ];

  return (
    <section id="our-solution" style={{ backgroundColor: '#fafaf9', padding: '4.5rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.35rem 0.95rem', borderRadius: '50px', display: 'inline-block', marginBottom: '0.85rem' }}>
            OUR SOLUTION
          </span>
          <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", fontSize: '1.5rem', fontWeight: 500, color: '#2C2C54', letterSpacing: '-0.01em', marginBottom: '0.5rem', lineHeight: 1.3 }}>
            Global Workforce Solutions, Built Around Your Business
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#3B3B98', fontWeight: 600, maxWidth: '800px', margin: '0 auto', lineHeight: 1.5 }}>
            Hire Faster. Manage Smarter. Pay Global Teams with Confidence & Compliance.
          </p>
        </div>

        {/* 6 CLEAN CARD BOXES WITH ALIGNED ICONS */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {solutionCards.map((card) => {
              const IconComp = card.icon;

              return (
                <div
                  key={card.id}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    padding: '2rem 1.75rem',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    boxSizing: 'border-box',
                    transition: 'all 0.25s ease'
                  }}
                >
                  {/* PERFECTLY CENTERED ICON BADGE */}
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      minWidth: '46px',
                      maxWidth: '46px',
                      minHeight: '46px',
                      maxHeight: '46px',
                      borderRadius: '12px',
                      backgroundColor: card.badgeBg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: card.iconColor,
                      flexShrink: 0,
                      marginBottom: '1.25rem',
                      boxSizing: 'border-box'
                    }}
                  >
                    <IconComp size={22} style={{ width: '22px', height: '22px', minWidth: '22px', minHeight: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} />
                  </div>

                  {/* TITLE */}
                  <h4 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#2C2C54', marginBottom: '0.75rem', lineHeight: 1.3, wordBreak: 'break-word', width: '100%' }}>
                    {card.title}
                  </h4>

                  {/* CONTENT PARAGRAPH ONLY */}
                  <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.65, margin: 0, fontWeight: 400, width: '100%' }}>
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurSolutionSection;
