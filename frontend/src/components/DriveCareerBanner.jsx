import React from 'react';
import { ChevronRight } from 'lucide-react';

export const DriveCareerBanner = ({ onNavCareers }) => {
  return (
    <section style={{ backgroundColor: '#08152F', overflow: 'hidden', position: 'relative' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', alignItems: 'center', minHeight: '320px' }}>
        
        {/* Left Side: Angled Image Container */}
        <div style={{ gridColumn: 'span 5', height: '100%', position: 'relative', overflow: 'hidden' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              minHeight: '320px',
              backgroundImage: 'url("/images/team_collaboration.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(0 0, 100% 0, 75% 100%, 0 100%)'
            }}
          />
        </div>

        {/* Right Side: Text & Browse Job Listings Link */}
        <div style={{ gridColumn: 'span 7', padding: '3rem 4rem 3rem 2rem', color: '#ffffff' }}>
          <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '3rem', fontWeight: 500, color: '#ffffff', lineHeight: 1.15, marginBottom: '1.75rem', letterSpacing: '-0.02em' }}>
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
                gap: '0.4rem',
                color: '#55E6C1',
                fontSize: '1.2rem',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <span>Browse job listings</span>
              <ChevronRight size={22} style={{ color: '#55E6C1' }} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DriveCareerBanner;
