import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ArrowRight, ChevronDown, ChevronUp, Globe, Mail, Share2 } from 'lucide-react';

export const Navbar = ({ activePage = 'home', onOpenContactPage, onNavHome, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Mobile Accordion States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleAboutSubnavClick = (e, tabName) => {
    if (e) e.preventDefault();
    setAboutDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavAbout) {
      onNavAbout(tabName);
    }
  };

  const handleCareersSubnavClick = (e, tabName) => {
    if (e) e.preventDefault();
    setCareersDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavCareers) {
      onNavCareers(tabName);
    }
  };

  const handleServicesSubnavClick = (e, tabName = 'overview') => {
    if (e) e.preventDefault();
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onNavServices) {
      onNavServices(tabName);
    }
  };

  return (
    <>
      <nav className="ncs-navbar" style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#060D1F', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
        <div className="nav-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0.85rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* 1. BRAND LOGO (User's Logo Icon + Clean Vebhor Text, NO bottom tagline) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onNavHome) onNavHome();
            }}
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
          >
            <img
              src="/logo_icon.png"
              alt="Vebhor"
              style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span
              className="logo-text"
              style={{
                fontFamily: "'Cinzel', 'Outfit', 'Plus Jakarta Sans', sans-serif",
                fontSize: '1.75rem',
                fontWeight: 800,
                letterSpacing: '0.02em',
                color: '#ffffff'
              }}
            >
              vebhor
            </span>
          </a>

          {/* 2. ORIGINAL DESKTOP NAVIGATION LINKS WITH HOVER & ACTIVE UNDERLINE */}
          <ul className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
            {/* About us */}
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavAbout) onNavAbout('code-of-conduct');
                }}
                className={`nav-link-item ${activePage === 'about' ? 'active' : ''}`}
              >
                About us
              </a>
            </li>

            {/* Services */}
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavServices) onNavServices('overview');
                }}
                className={`nav-link-item ${activePage === 'services' || activePage === 'services-page' ? 'active' : ''}`}
              >
                Services
              </a>
            </li>

            {/* Partners */}
            <li>
              <a
                href="#partners"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavPartners) onNavPartners();
                }}
                className={`nav-link-item ${activePage === 'partners' ? 'active' : ''}`}
              >
                Partners
              </a>
            </li>

            {/* Challenge us */}
            <li>
              <a
                href="#challenge-us"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavChallengeUs) onNavChallengeUs();
                }}
                className={`nav-link-item ${activePage === 'challenge-us' ? 'active' : ''}`}
              >
                Challenge us
              </a>
            </li>

            {/* Careers */}
            <li>
              <a
                href="#job-opportunities"
                onClick={(e) => handleCareersSubnavClick(e, 'job-opportunities')}
                className={`nav-link-item ${activePage === 'careers' ? 'active' : ''}`}
              >
                Careers
              </a>
            </li>

            {/* Contact us */}
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenContactPage) onOpenContactPage();
                }}
                className={`nav-link-item ${activePage === 'contact' ? 'active' : ''}`}
              >
                Contact us
              </a>
            </li>
          </ul>

          {/* 3. RIGHT ACTION CONTROLS */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>

            {/* Search Icon Circle Button */}
            <button
              onClick={() => {
                if (onNavServices) onNavServices('overview');
              }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Get In Touch Green-to-Cyan Gradient Pill Button */}
            <button
              onClick={() => {
                if (onOpenContactPage) onOpenContactPage();
              }}
              className="navbar-touch-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.62rem 1.4rem',
                background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 60%, #3B82F6 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50px',
                fontSize: '0.92rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(16, 185, 129, 0.35)',
                transition: 'all 0.25s ease'
              }}
            >
              <span>Get In Touch</span>
              <ArrowRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '0.3rem' }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* FULL-HEIGHT LEFT-SIDE MODAL DRAWER (MATCHING SCREENSHOT 2) */}
      {mobileMenuOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <div
            className="mobile-backdrop"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* 100vh Left Drawer Container */}
          <div className="mobile-drawer-left" style={{ backgroundColor: '#060D1F' }}>
            {/* Drawer Top Header (Logo + Circle Close X) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavHome) onNavHome();
                }}
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
              >
                <img
                  src="/logo_icon.png"
                  alt="Vebhor"
                  style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <span style={{ fontFamily: "'Cinzel', 'Outfit', sans-serif", fontWeight: 800, fontSize: '1.5rem', letterSpacing: '0.02em', color: '#ffffff' }}>
                  vebhor
                </span>
              </a>

              {/* Circular Close (X) Button matching Screenshot 2 */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Navigation Items */}
            <div style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* 0. Home Link */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavHome) onNavHome();
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    Home
                  </button>
                </li>

                {/* About us Link */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavAbout) onNavAbout('code-of-conduct');
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    About us
                  </button>
                </li>

                {/* Services Link */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavServices) onNavServices('overview');
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    Services
                  </button>
                </li>

                {/* 4. Partners */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavPartners) onNavPartners();
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    Partners
                  </button>
                </li>

                {/* 5. Careers Direct Link */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      handleCareersSubnavClick(e, 'job-opportunities');
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <span>Careers</span>
                    <ArrowRight size={20} color="#00b4d8" />
                  </button>
                </li>

                {/* 5b. Challenge us */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onNavChallengeUs) onNavChallengeUs();
                    }}
                    style={{ color: '#38bdf8', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    Challenge us
                  </button>
                </li>

                {/* 6. Contact us */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      if (onOpenContactPage) onOpenContactPage();
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    Contact us
                  </button>
                </li>
              </ul>
            </div>

            {/* Bottom Footer Section matching Screenshot 2 */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>Get in touch</span>
              <a href="mailto:info@vebhor.com" style={{ color: '#38bdf8', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} />
                <span>info@vebhor.com</span>
              </a>
              <span style={{ color: '#cbd5e1', fontSize: '0.88rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Globe size={16} />
                <span>Australia (AU)</span>
              </span>

              {/* Social / Contact Icons row matching Screenshot 2 */}
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                  <Share2 size={16} />
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                  <Mail size={16} />
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cbd5e1' }}>
                  <Globe size={16} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
