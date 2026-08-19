import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

export const GoGlobalSection = ({ onNavCareers }) => {
  const [hoveredIdx, setHoveredIdx] = useState(2); // Singapore highlighted by default
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

  const globalCards = [
    {
      country: 'AUSTRALIA',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across Australia.',
      imageUrl: '/images/country_sydney.jpg'
    },
    {
      country: 'NEW ZEALAND',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across New Zealand.',
      imageUrl: '/images/country_melbourne.jpg'
    },
    {
      country: 'SINGAPORE',
      badge: 'TOP CLASS SERVICES',
      description: 'We are soon offering job opportunities from the government and private firms across Singapore.',
      imageUrl: '/images/country_singapore.jpg'
    },
    {
      country: 'INDIA',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across India.',
      imageUrl: '/images/country_india.jpg'
    },
    {
      country: 'EUROPE',
      badge: 'TOP CLASS SERVICES',
      description: 'We are now happily providing workforce & enterprise solutions across Europe.',
      imageUrl: '/images/country_brisbane.jpg'
    }
  ];

  return (
    <section ref={sectionRef} style={{ backgroundColor: '#F7F9FC', padding: '5.5rem 1.5rem', borderTop: '1px solid #e2e8f0', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Ambient Glow Orb */}
      <div style={{ position: 'absolute', bottom: '-50px', right: '10%', width: '500px', height: '300px', background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1320px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* Header Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#7C3AED', backgroundColor: '#EDE9FE', padding: '0.35rem 0.95rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.85rem' }}>
              <Globe size={14} />
              <span>GLOBAL PRESENCE</span>
            </div>
            <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#172033', margin: 0, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Go <span style={{ background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Global</span> With Us...
            </h2>
          </div>
          <div style={{ maxWidth: '440px' }}>
            <p style={{ fontSize: '1.02rem', color: '#475569', margin: 0, lineHeight: 1.6, textAlign: 'left', fontWeight: 400 }}>
              Our international presence is spread across the globe. We offer the best workforce & technology services across 5 major global hubs.
            </p>
          </div>
        </div>

        {/* 5 Vertical Card Columns Grid with Staggered Scroll Loading Animation */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem' }}>
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
                className="global-country-card"
                style={{
                  position: 'relative',
                  height: '430px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: isHovered ? '0 24px 48px rgba(37, 99, 235, 0.35)' : '0 6px 20px rgba(0,0,0,0.06)',
                  transform: isVisible
                    ? isHovered
                      ? 'translateY(-12px) scale(1.02)'
                      : 'translateY(0) scale(1)'
                    : 'translateY(40px) scale(0.96)',
                  opacity: isVisible ? 1 : 0,
                  border: isHovered ? '2px solid #55E6C1' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${idx * 120}ms, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s ease, border 0.3s ease`
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
                    transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: isHovered
                      ? 'linear-gradient(180deg, rgba(15, 23, 42, 0.3) 0%, rgba(37, 99, 235, 0.82) 60%, rgba(124, 58, 237, 0.95) 100%)'
                      : 'linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.85) 100%)',
                    transition: 'background 0.4s ease'
                  }}
                />

                {/* Shimmer Light Reflection on Hover */}
                <div
                  className="card-shimmer"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)',
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 0.35s ease',
                    pointerEvents: 'none'
                  }}
                />

                {/* Content Overlay */}
                <div style={{ position: 'relative', zIndex: 2, padding: '2rem 1.4rem 3.5rem 1.4rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#ffffff', boxSizing: 'border-box' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.1em', color: isHovered ? '#55E6C1' : '#94a3b8', textTransform: 'uppercase', display: 'block', marginBottom: '0.65rem', transition: 'color 0.25s ease' }}>
                      {card.badge}
                    </span>
                    <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', margin: 0, lineHeight: 1.2, letterSpacing: '0.02em', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                      {card.country}
                    </h3>
                  </div>

                  <div>
                    <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.55, margin: 0, fontWeight: 400, textShadow: '0 1px 6px rgba(0,0,0,0.6)' }}>
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
                    backgroundColor: isHovered ? '#55E6C1' : 'rgba(0, 0, 0, 0.7)',
                    color: isHovered ? '#08152F' : '#ffffff',
                    width: '46px',
                    height: '46px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopLeftRadius: '12px',
                    borderBottomRightRadius: '16px',
                    zIndex: 5,
                    boxSizing: 'border-box',
                    boxShadow: isHovered ? '0 0 16px rgba(85, 230, 193, 0.6)' : 'none',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <ArrowRight
                    size={20}
                    style={{
                      transform: isHovered ? 'translateX(3px)' : 'translateX(0)',
                      transition: 'transform 0.25s ease'
                    }}
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

export default GoGlobalSection;
