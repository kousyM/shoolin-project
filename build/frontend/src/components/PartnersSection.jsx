import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const PartnersSection = ({ onNavPartners }) => {
  const partners = [
    { name: 'Microsoft', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google Cloud', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'AWS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Salesforce', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' }
  ];

  // Repeat the 4 partners for seamless continuous infinite loop marquee
  const marqueeList = [...partners, ...partners, ...partners, ...partners];

  return (
    <section style={{ backgroundColor: '#060D1F', padding: '5.5rem 1.5rem 5rem 1.5rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Eyebrow Tag */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#55E6C1', backgroundColor: 'rgba(85, 230, 193, 0.12)', border: '1px solid rgba(85, 230, 193, 0.3)', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '1.25rem' }}>
          <Sparkles size={14} color="#55E6C1" />
          <span>STRATEGIC ALLIANCES</span>
        </div>

        {/* Section Header */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
          Meet our partners
        </h2>

        {/* Subtitle */}
        <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 3rem auto', lineHeight: 1.6, fontWeight: 400 }}>
          Partnering with world-leading technology innovators, cloud platforms, and global enterprise ecosystems to accelerate your business.
        </p>

        {/* CONTINUOUS AUTO-SCROLLING MARQUEE SLIDER WITH EDGE FADES */}
        <div className="partner-marquee-wrapper">
          {/* Left subtle gradient fade */}
          <div className="partner-fade-left" />

          {/* Scrolling Track */}
          <div className="partner-marquee-track">
            {marqueeList.map((partner, idx) => (
              <div
                key={`${partner.name}-${idx}`}
                className="partner-logo-card"
                title={partner.name}
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                  />
                ) : (
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff' }}>{partner.name}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right subtle gradient fade */}
          <div className="partner-fade-right" />
        </div>

        {/* Centered Outline Pill Button */}
        <div style={{ marginTop: '2.5rem' }}>
          <button
            onClick={() => {
              if (onNavPartners) {
                onNavPartners();
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              color: '#ffffff',
              backgroundColor: 'transparent',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.98rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#2563eb';
              e.currentTarget.style.borderColor = '#2563eb';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 99, 235, 0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span>Find out more</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
