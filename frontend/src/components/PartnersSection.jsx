import React from 'react';
import { ArrowRight } from 'lucide-react';

export const PartnersSection = ({ onNavPartners }) => {
  const partnersList = [
    { name: 'HCL', logoUrl: '/images/partners/hcl.png' },
    { name: 'Dell', logoUrl: '/images/partners/dell.png' },
    { name: 'Cognizant', logoUrl: '/images/partners/cognizant.png' },
    { name: 'GSK', logoUrl: '/images/partners/gsk.png' },
    { name: 'Coforge', logoUrl: '/images/partners/coforge.png' },
    { name: 'Wipro', logoUrl: '/images/partners/wipro.png' },
    { name: 'NSW Government', logoUrl: '/images/partners/nsw_gov.png' },
    { name: 'Government of Western Australia', logoUrl: '/images/partners/wa_gov.png' },
    { name: 'Government of South Australia', logoUrl: '/images/partners/sa_gov.png' },
    { name: 'Mindtree', logoUrl: '/images/partners/mindtree.png' },
    { name: 'Australian Government - Industry & Science', logoUrl: '/images/partners/aus_industry.png' },
    { name: 'Australian Government - Agriculture', logoUrl: '/images/partners/aus_agri.png' },
    { name: 'L&T Infotech', logoUrl: '/images/partners/lt_infotech.png' },
    { name: 'Persistent', logoUrl: '/images/partners/persistent.png' }
  ];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '4.5rem 1.5rem', position: 'relative', overflow: 'hidden', borderTop: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>

        {/* Section Header */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 0.85rem 0', lineHeight: 1.2 }}>
          Meet our{' '}
          <span style={{ color: '#E11D48' }}>
            Partners
          </span>
        </h2>

        {/* Subtitle */}
        <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '780px', margin: '0 auto 3rem auto', lineHeight: 1.6, fontWeight: 400 }}>
          Partnering with leading tech enterprises and government departments to engineer secure, resilient, and high-performance workforce systems.
        </p>

        {/* 14 PARTNERS GRID - MATCHING EXACT DESIGN (5 COLUMNS) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {partnersList.map((partner, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E11D48';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(225, 29, 72, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.03)';
              }}
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                title={partner.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '85px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>

        {/* Centered Outline Pill Button */}
        <div>
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
              e.currentTarget.style.background = 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)';
              e.currentTarget.style.borderColor = '#E11D48';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(225, 29, 72, 0.35)';
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
