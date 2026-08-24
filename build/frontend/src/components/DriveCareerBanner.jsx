import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export const DriveCareerBanner = ({ onNavCareers }) => {
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
      className="career-banner-container"
      style={{
        backgroundColor: '#08152F',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
      }}
    >
      <div
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          alignItems: 'center',
          minHeight: '340px'
        }}
      >
        {/* Left Side: Angled Image Container with Slide-in Entrance & Floating Parallax */}
        <div
          style={{
            gridColumn: 'span 5',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-60px, 0, 0)',
            transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 0.85s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          <div className="career-banner-img" />
        </div>

        {/* Right Side: Text with Slide-in Entrance & Interactive Hover */}
        <div
          style={{
            gridColumn: 'span 7',
            padding: '3.5rem 4rem 3.5rem 3rem',
            color: '#ffffff',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(60px, 0, 0)',
            transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
          }}
        >
          <h2
            style={{
              fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.15,
              marginBottom: '1.75rem',
              letterSpacing: '-0.02em'
            }}
          >
            Drive your career<br />forward. Fast.
          </h2>

          <div>
            <a
              href="#careers"
              onClick={(e) => {
                if (onNavCareers) {
                  e.preventDefault();
                  onNavCareers();
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                color: '#55E6C1',
                fontSize: '1.25rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#38bdf8';
                const icon = e.currentTarget.querySelector('.browse-chevron-arrow');
                if (icon) icon.style.transform = 'translateX(8px) scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#55E6C1';
                const icon = e.currentTarget.querySelector('.browse-chevron-arrow');
                if (icon) icon.style.transform = 'translateX(0) scale(1)';
              }}
            >
              <span>Browse job listings</span>
              <ChevronRight
                size={22}
                className="browse-chevron-arrow"
                style={{ transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)', color: 'currentColor' }}
              />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DriveCareerBanner;
