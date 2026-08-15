import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, ChevronDown, ChevronUp, Share2, Mail, Phone } from 'lucide-react';

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
      <nav className="ncs-navbar" style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#2C2C54', borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}>
        <div className="nav-container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0.85rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              if (onNavHome) onNavHome();
            }}
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
          >
            <span className="logo-text" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.75rem', color: '#ffffff' }}>
              vebhor<span className="logo-accent" style={{ color: '#55E6C1' }}>//</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
            {/* About Us Link */}
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavAbout) onNavAbout('code-of-conduct');
                }}
                className="nav-link"
                style={{
                  color: activePage === 'about' ? '#55E6C1' : '#cbd5e1',
                  fontWeight: activePage === 'about' ? 700 : 600,
                  borderBottom: activePage === 'about' ? '2px solid #55E6C1' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                About us
              </a>
            </li>

            {/* Services Link */}
            <li>
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavServices) onNavServices('overview');
                }}
                className="nav-link"
                style={{
                  color: activePage === 'services' || activePage === 'services-page' ? '#55E6C1' : '#cbd5e1',
                  fontWeight: activePage === 'services' || activePage === 'services-page' ? 700 : 600,
                  borderBottom: activePage === 'services' || activePage === 'services-page' ? '2px solid #55E6C1' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Services
              </a>
            </li>

            {/* 3. Partners */}
            <li>
              <a
                href="#partners"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavPartners) onNavPartners();
                }}
                className="nav-link"
                style={{
                  color: activePage === 'partners' ? '#55E6C1' : '#cbd5e1',
                  fontWeight: activePage === 'partners' ? 700 : 600,
                  borderBottom: activePage === 'partners' ? '2px solid #55E6C1' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Partners
              </a>
            </li>

            {/* 3b. Challenge Us Menu Link */}
            <li>
              <a
                href="#challenge-us"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavChallengeUs) onNavChallengeUs();
                }}
                className="nav-link"
                style={{
                  color: activePage === 'challenge-us' ? '#55E6C1' : '#cbd5e1',
                  fontWeight: activePage === 'challenge-us' ? 700 : 600,
                  borderBottom: activePage === 'challenge-us' ? '2px solid #55E6C1' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Challenge us
              </a>
            </li>

            {/* 4. Careers Direct Link */}
            <li>
              <a
                href="#job-opportunities"
                onClick={(e) => handleCareersSubnavClick(e, 'job-opportunities')}
                className="nav-link"
                style={{
                  color: activePage === 'careers' ? '#55E6C1' : '#cbd5e1',
                  fontWeight: activePage === 'careers' ? 700 : 600,
                  borderBottom: activePage === 'careers' ? '2px solid #55E6C1' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s ease'
                }}
              >
                Careers
              </a>
            </li>

            <li>
              <button
                onClick={() => {
                  if (onOpenContactPage) onOpenContactPage();
                }}
                style={{
                  color: activePage === 'contact' ? '#55E6C1' : '#cbd5e1',
                  fontWeight: activePage === 'contact' ? 700 : 600,
                  borderBottom: activePage === 'contact' ? '2px solid #55E6C1' : '2px solid transparent',
                  paddingBottom: '0.2rem',
                  background: 'none',
                  border: 'none',
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s ease'
                }}
              >
                Contact us
              </button>
            </li>
          </ul>

          {/* Action Controls & Mobile Hamburger Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#ffffff', fontSize: '0.88rem', fontWeight: 600 }}>
              <Globe size={16} />
              <span>AU</span>
            </div>

            {/* Mobile Hamburger Toggle (STRICTLY Hidden on Desktop via CSS) */}
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
          <div className="mobile-drawer-left">
            {/* Drawer Top Header (Logo + Circle Close X) */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (onNavHome) onNavHome();
                }}
                style={{ textDecoration: 'none' }}
              >
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.6rem', color: '#ffffff' }}>
                  NCS<span style={{ color: '#00b4d8' }}>//</span>
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
              <a href="mailto:info@ncs.com" style={{ color: '#38bdf8', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} />
                <span>info@ncs.com</span>
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
