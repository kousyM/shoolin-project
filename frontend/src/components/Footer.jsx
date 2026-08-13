import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer = ({ onOpenContactPage, onNavAdmin }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer style={{ backgroundColor: '#2C2C54', color: '#ffffff', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      
      {/* ============================================================ */}
      {/* 1. DEEL-STYLE NEWSLETTER BANNER MATCHING IMAGE 2 */}
      {/* ============================================================ */}
      <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)', padding: '3rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
          
          {/* Left: Brand Logo & Social Icons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
              vebhor<span style={{ color: '#55E6C1' }}>.</span>
            </span>

            {/* Social Circular Icon Badges matching Image 2 */}
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#27272a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s ease' }}
                aria-label="X / Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#27272a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s ease' }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#27272a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s ease' }}
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.63 13.78 5.63c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#27272a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 0.2s ease' }}
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Middle: Headline Text matching Image 2 */}
          <div style={{ maxWidth: '460px' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.4, margin: 0 }}>
              Get the latest insights on today's world of work delivered straight to your inbox.
            </p>
          </div>

          {/* Right: Pill Form & Consent Disclaimer matching Image 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.6rem', minWidth: '340px' }}>
            {subscribed ? (
              <div style={{ color: '#4ade80', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={18} />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
                <input
                  type="email"
                  required
                  placeholder="What's your e-mail?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.9rem 3.5rem 0.9rem 1.5rem',
                    borderRadius: '50px',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    border: 'none',
                    fontSize: '0.95rem',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    position: 'absolute',
                    right: '6px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#18181b',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    transition: 'all 0.2s ease'
                  }}
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} />
                </button>
              </form>
            )}

            <p style={{ fontSize: '0.78rem', color: '#94a3b8', margin: 0, lineHeight: 1.4 }}>
              I confirm that I have read <span style={{ fontWeight: 700, color: '#ffffff' }}>Vebhor's Privacy Policy</span> and agree with it.
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
          <a href="#about" style={{ color: '#a1a1aa', textDecoration: 'none' }}>About Us</a>
          <a href="#privacy-policy" style={{ color: '#a1a1aa', textDecoration: 'none' }}>Privacy Policy</a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
