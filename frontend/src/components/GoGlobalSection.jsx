import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export const GoGlobalSection = ({ onNavCareers }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const globalCards = [
    {
      country: 'AUSTRALIA',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across Australia.',
      imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80'
    },
    {
      country: 'NEW ZEALAND',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across New Zealand.',
      imageUrl: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80'
    },
    {
      country: 'SINGAPORE',
      badge: 'TOP CLASS SERVICES',
      description: 'We are soon offering job opportunities from the government and private firms across Singapore.',
      imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80'
    },
    {
      country: 'INDIA',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across India.',
      imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80'
    },
    {
      country: 'EUROPE',
      badge: 'TOP CLASS SERVICES',
      description: 'We are now happily providing workforce & enterprise solutions across Europe.',
      imageUrl: 'https://images.unsplash.com/photo-1519197924294-4ac991a115fe?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 500, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
              Go <span style={{ color: '#6C5CE7', fontWeight: 800 }}>Global</span> With Us...
            </h2>
          </div>
          <div style={{ maxWidth: '420px' }}>
            <p style={{ fontSize: '1rem', color: '#475569', margin: 0, lineHeight: 1.5, textAlign: 'left' }}>
              Our international presence is spread across the globe. We offer the best workforce & technology services across 5 major global hubs.
            </p>
          </div>
        </div>

        {/* 5 Vertical Card Columns Grid with Interactive Hover Box Effects */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.1rem' }}>
          {globalCards.map((card, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => {
                  if (onNavCareers) onNavCareers();
                }}
                style={{
                  position: 'relative',
                  height: '420px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: isHovered ? '0 20px 40px rgba(108, 92, 231, 0.25)' : '0 4px 15px rgba(0,0,0,0.08)',
                  transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                  border: isHovered ? '2px solid #55E6C1' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Background Image with Zoom on Hover */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: `url(${card.imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isHovered ? 'scale(1.12)' : 'scale(1)',
                    transition: 'transform 0.5s ease'
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHovered
                      ? 'linear-gradient(180deg, rgba(44, 44, 84, 0.4) 0%, rgba(108, 92, 231, 0.88) 100%)'
                      : 'linear-gradient(180deg, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.85) 100%)',
                    transition: 'background 0.35s ease'
                  }}
                />

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2, padding: '1.75rem 1.25rem 3.25rem 1.25rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#ffffff', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: isHovered ? '#55E6C1' : '#cbd5e1', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem', transition: 'color 0.2s ease' }}>
                      {card.badge}
                    </span>
                    <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.2, letterSpacing: '0.02em' }}>
                      {card.country}
                    </h3>
                  </div>

                  <div>
                    <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                      {card.description}
                    </p>
                  </div>
                </div>

                {/* Neatly Corner-Aligned Bottom Right Arrow Button */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    backgroundColor: isHovered ? '#55E6C1' : 'rgba(0, 0, 0, 0.65)',
                    color: isHovered ? '#2C2C54' : '#ffffff',
                    width: '44px',
                    height: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    borderTopLeftRadius: '10px',
                    borderBottomRightRadius: '12px',
                    zIndex: 5,
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ArrowRight size={20} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default GoGlobalSection;
