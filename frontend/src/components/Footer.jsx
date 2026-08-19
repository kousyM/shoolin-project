import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer = ({ onOpenContactPage, onNavAdmin, onNavAbout }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    if (onNavAbout) {
      onNavAbout('privacy-policy');
    } else {
      window.location.hash = '#privacy-policy';
    }
    setTimeout(() => {
      const el = document.getElementById('privacy-policy');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer style={{ backgroundColor: '#08152F', color: '#ffffff', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>

      {/* ============================================================ */}
      {/* 1. DEEL-STYLE NEWSLETTER BANNER MATCHING IMAGE 2 */}
      {/* ============================================================ */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>

          {/* Left: Brand Logo & Social Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <img
                src="/logo_icon.png"
                alt="Vebhor"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span
                style={{
                  fontFamily: "'Cinzel', 'Outfit', 'Plus Jakarta Sans', sans-serif",
                  fontSize: '1.9rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '0.02em'
                }}
              >
                vebhor
              </span>
            </div>

            {/* Social Circular Icon Badges matching Image 2 */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/vebhor/?viewAsMember=true"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.91 0-1.64.73-1.64 1.64s.73 1.64 1.64 1.64 1.64-.73 1.64-1.64-.73-1.64-1.64-1.64Z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vebhor_aus/"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61593392762903&sk=directory_personal_details"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                aria-label="Facebook"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Newsletter Email Subscribe Box */}
          <div style={{ maxWidth: '440px', width: '100%' }}>
            <h4 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.85rem' }}>
              Subscribe to our monthly newsletter
            </h4>

            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#55E6C1', backgroundColor: 'rgba(85, 230, 193, 0.12)', padding: '0.85rem 1.25rem', borderRadius: '50px', marginBottom: '0.85rem', border: '1px solid rgba(85, 230, 193, 0.3)' }}>
                <CheckCircle2 size={20} />
                <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ position: 'relative', display: 'flex', alignItems: 'center', marginBottom: '0.85rem' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="What's your e-mail?"
                  style={{
                    width: '100%',
                    padding: '0.85rem 3.5rem 0.85rem 1.5rem',
                    borderRadius: '50px',
                    border: 'none',
                    backgroundColor: '#ffffff',
                    color: '#08152F',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#18181b',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>
              I confirm that I have read{' '}
              <a
                href="#privacy-policy"
                onClick={handlePrivacyClick}
                style={{
                  fontWeight: 700,
                  color: '#ffffff',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#55E6C1'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
              >
                Vebhor's Privacy Policy
              </a>{' '}
              and agree with it.
            </p>
          </div>

        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. BOTTOM LEGAL FOOTER */}
      {/* ============================================================ */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '2rem 1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: '#a1a1aa' }}>
        <div>
          © 2026 Vebhor Consultancy Services. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              if (onNavAbout) onNavAbout('code-of-conduct');
              else window.location.hash = '#about';
            }}
            style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#55E6C1'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
          >
            About Us
          </a>
          <a
            href="#privacy-policy"
            onClick={handlePrivacyClick}
            style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#55E6C1'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#a1a1aa'}
          >
            Privacy Policy
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
