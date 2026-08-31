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
    <section style={{ backgroundColor: '#ffffff', padding: '3.75rem 1.5rem 4.5rem 1.5rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>

        {/* Section Header */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 0.85rem 0', lineHeight: 1.2 }}>
          Meet our{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Partners
          </span>
        </h2>

        {/* Subtitle */}
        <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '780px', margin: '0 auto 2.5rem auto', lineHeight: 1.6, fontWeight: 400 }}>
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
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>{partner.name}</span>
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
              color: '#0f172a',
              backgroundColor: '#ffffff',
              border: '1.5px solid #cbd5e1',
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.98rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)';
              e.currentTarget.style.borderColor = 'rgb(40, 129, 251)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 41, 176, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
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
