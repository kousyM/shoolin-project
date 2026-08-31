import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Lock, Globe, Zap, Layers, Check, ArrowRight } from 'lucide-react';

const BRAND_GRADIENT = 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)';

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
      category: 'Compliance & Risk',
      title: 'Global Payroll Compliance',
      description: 'Stay compliant across markets with locally informed payroll expertise. Shoolin manages evolving payroll regulations, statutory requirements, tax obligations, and reporting, helping ensure your workforce is paid accurately and on time while reducing compliance risk and administrative complexity.',
      image: '/images/insights_security.jpg',
      icon: ShieldCheck,
      initialTransform: 'translate3d(-50px, -30px, 0)'
    },
    {
      id: 'global-payroll',
      category: 'Global Expansion',
      title: 'Global Payroll',
      description: 'Simplify payroll across borders with accurate, compliant, and scalable global payroll solutions. Shoolin manages payroll processing, statutory requirements, tax obligations, and local compliance, helping you pay your workforce accurately and on time while reducing administrative complexity.',
      image: '/images/service_eor.jpg',
      icon: Globe,
      initialTransform: 'translate3d(0, -50px, 0)'
    },
    {
      id: 'consolidate',
      category: 'Vendor Ecosystem',
      title: 'Consolidate Multiple Vendors',
      description: 'Simplify your workforce operations by bringing recruitment, contractor management, payroll, compliance, and workforce services under one trusted partner. Shoolin helps reduce vendor complexity, streamline processes, improve visibility, and create a more consistent workforce experience across markets.',
      image: '/images/service_vendor_consolidation.jpg',
      icon: Layers,
      initialTransform: 'translate3d(50px, -30px, 0)'
    },
    {
      id: 'onboarding',
      category: 'Rapid Onboarding',
      title: 'Seamless Onboarding',
      description: 'With Shoolin Payroll’s Partner & Contractor onboarding application, teams can activate payroll and compliance instantly—no heavy integrations, no delays. Just connect, configure, and go.',
      image: '/images/service_outcome_delivery.jpg',
      icon: Zap,
      initialTransform: 'translate3d(-50px, 30px, 0)'
    },
    {
      id: 'screening',
      category: 'Background Verification',
      title: 'Effortless Background Checks',
      description: 'Automated verification for every new hire, powered by our trusted screening partner. Background checks run in parallel with onboarding, so your team can hire faster without compromising compliance.',
      image: '/images/team_collaboration.jpg',
      icon: Check,
      initialTransform: 'translate3d(0, 50px, 0)'
    },
    {
      id: 'security',
      category: 'Enterprise Security',
      title: 'Solid International Security',
      description: 'Protect your team, data, and intellectual property with robust global compliance, ISO 27001 certified practices, and secure solutions that integrate seamlessly across your workflows.',
      image: '/images/hero_cyber_network.jpg',
      icon: Lock,
      initialTransform: 'translate3d(50px, 30px, 0)'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="our-solution"
      style={{
        padding: '3.5rem 1.5rem 2.5rem 1.5rem',
        fontFamily: '"Archivo", sans-serif',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f6f4ed'
      }}
    >
      {/* Light Warm Geometric Wireframe Background Pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/services_grid_bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'invert(1)',
          opacity: 0.09,
          pointerEvents: 'none'
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* 1. SCROLL-TRIGGERED SECTION HEADER */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Clean Main Title */}
          <h2
            style={{
              fontFamily: '"Archivo", sans-serif',
              fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
              fontWeight: 800,
              color: '#0f172a',
              letterSpacing: '-0.02em',
              margin: '0 0 0.75rem 0',
              lineHeight: 1.3
            }}
          >
            Global Workforce Solutions,{' '}
            <span style={{ color: '#E11D48', fontFamily: '"Archivo", sans-serif' }}>
              Built Around Your Business
            </span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: 'rgb(100, 116, 139)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.6, fontWeight: 400, fontFamily: '"Archivo", sans-serif' }}>
            Hire Faster. Manage Smarter. Pay Global Teams with Confidence & Compliance.
          </p>
        </div>

        {/* 2. CLEAN WHITE CARDS WITH CONTENT */}
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
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  backgroundColor: '#ffffff',
                  padding: '2.2rem 2rem',
                  cursor: 'pointer',
                  border: '1.5px solid #e8e8e8',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate3d(0, 0, 0)' : card.initialTransform,
                  transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + idx * 0.08}s, border-color 0.3s ease, box-shadow 0.3s ease`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#E11D48';
                  e.currentTarget.style.boxShadow = '0 18px 36px rgba(225, 29, 72, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e8e8e8';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                }}
              >
                <div>
                  {/* Top Icon and Category Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        backgroundColor: '#FEE2E2',
                        border: '1px solid #FECDD3',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#E11D48'
                      }}
                    >
                      <IconComp size={24} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.76rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: 'rgb(100, 116, 139)',
                        backgroundColor: '#f1f5f9',
                        padding: '0.35rem 0.8rem',
                        borderRadius: '6px',
                        fontFamily: '"Archivo", sans-serif'
                      }}
                    >
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontFamily: '"Archivo", sans-serif',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      marginBottom: '0.85rem'
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.94rem',
                      color: 'rgb(100, 116, 139)',
                      lineHeight: 1.65,
                      textAlign: 'left',
                      wordSpacing: 'normal',
                      margin: 0,
                      fontWeight: 400,
                      fontFamily: '"Archivo", sans-serif'
                    }}
                  >
                    {card.description}
                  </p>
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
