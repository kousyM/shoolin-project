import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ArrowRight, ChevronDown, ChevronUp, Share2, Mail, Phone } from 'lucide-react';

export const Navbar = ({ onOpenContactPage, onNavHome, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  // Mobile Accordion States (Default open Services so options are instantly visible)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(false);

  // Lock body scroll when mobile menu drawer is open
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
      <nav className="ncs-navbar" style={{ position: 'sticky', top: 0, zIndex: 100, backgroundColor: '#001229', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
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
              NCS<span className="logo-accent" style={{ color: '#00b4d8' }}>//</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
            {/* 1. Services with Hover Mega Menu Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <a
                href="#services"
                onClick={(e) => handleServicesSubnavClick(e, 'overview')}
                className="nav-link"
                style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                Services
              </a>

              {/* Hover Mega Menu Dropdown Box for Services */}
              {servicesDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-60px',
                    width: '820px',
                    backgroundColor: '#001b3a',
                    color: '#ffffff',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    borderRadius: '0 0 8px 8px',
                    padding: '2.5rem 3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    animation: 'fadeIn 0.2s ease',
                    borderTop: '3px solid #00b4d8',
                    zIndex: 9999
                  }}
                >
                  <div>
                    <button
                      onClick={(e) => handleServicesSubnavClick(e, 'overview')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: '#ffffff',
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <span>Overview</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '1.5rem' }}>
                    {/* Column 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'advisory')}
                        style={{ color: '#38bdf8', fontSize: '0.95rem', fontWeight: 800, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Advisory
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'cloud')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Cloud and Infrastructure
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'databricks')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Databricks Solutions
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'innovation')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Innovation
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'quality')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Quality and Testing
                      </button>
                    </div>

                    {/* Column 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'applications')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Applications
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'cybersecurity')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Cyber Security
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'cx')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Digital Experience
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'managed')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Managed Services
                      </button>
                    </div>

                    {/* Column 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'aws')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        AWS Solutions
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'data-ai')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Data and AI
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'google')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Google Solutions
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'microsoft')}
                        style={{ color: '#ffffff', fontSize: '0.92rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Microsoft Solutions
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* 2. About Us with Hover Mega Menu Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <a
                href="#code-of-conduct"
                onClick={(e) => handleAboutSubnavClick(e, 'code-of-conduct')}
                className="nav-link"
                style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                About us
              </a>

              {/* Hover Mega Menu Dropdown Box for About Us */}
              {aboutDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-80px',
                    width: '720px',
                    backgroundColor: '#002b49',
                    color: '#ffffff',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
                    borderRadius: '0 0 8px 8px',
                    padding: '2rem 2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    animation: 'fadeIn 0.2s ease',
                    borderTop: '3px solid #00b4d8',
                    zIndex: 9999
                  }}
                >
                  <div>
                    <button
                      onClick={(e) => handleAboutSubnavClick(e, 'code-of-conduct')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: '#ffffff',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <span>Overview</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.2rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    <div>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'code-of-conduct')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Code of Conduct
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'leadership')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Leadership
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'milestones')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Milestones
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'newsroom')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Newsroom
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'privacy-policy')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Privacy Policy
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a
                href="#insights"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavInsights) onNavInsights();
                }}
                className="nav-link"
                style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}
              >
                Insights
              </a>
            </li>

            {/* 3. Partners Menu Link */}
            <li>
              <a
                href="#partners"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavPartners) onNavPartners();
                }}
                className="nav-link"
                style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}
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
                style={{ color: '#38bdf8', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700 }}
              >
                Challenge us
              </a>
            </li>

            {/* 4. Careers with Hover Mega Menu Dropdown */}
            <li
              style={{ position: 'relative' }}
              onMouseEnter={() => setCareersDropdownOpen(true)}
              onMouseLeave={() => setCareersDropdownOpen(false)}
            >
              <a
                href="#career-stories"
                onClick={(e) => handleCareersSubnavClick(e, 'career-stories')}
                className="nav-link"
                style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
              >
                Careers
              </a>

              {/* Hover Mega Menu Dropdown Box for Careers */}
              {careersDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-120px',
                    width: '560px',
                    backgroundColor: '#002b49',
                    color: '#ffffff',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
                    borderRadius: '0 0 8px 8px',
                    padding: '2rem 2.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    animation: 'fadeIn 0.2s ease',
                    borderTop: '3px solid #00b4d8',
                    zIndex: 9999
                  }}
                >
                  <div>
                    <button
                      onClick={(e) => handleCareersSubnavClick(e, 'career-stories')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        color: '#ffffff',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <span>Overview</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                    <div>
                      <button
                        onClick={(e) => handleCareersSubnavClick(e, 'career-stories')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Career Stories
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleCareersSubnavClick(e, 'job-opportunities')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Job Opportunities
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={(e) => handleCareersSubnavClick(e, 'life-at-ncs')}
                        style={{ color: '#ffffff', fontSize: '0.88rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Life at NCS
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <button
                onClick={() => {
                  if (onOpenContactPage) onOpenContactPage();
                }}
                style={{ color: '#cbd5e1', background: 'none', border: 'none', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', padding: 0 }}
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

                {/* 1. Services Mobile Accordion */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <div
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer' }}
                  >
                    <span>Services</span>
                    {mobileServicesOpen ? <ChevronUp size={20} color="#00b4d8" /> : <ChevronDown size={20} color="#94a3b8" />}
                  </div>

                  {mobileServicesOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.85rem', paddingLeft: '1rem', borderLeft: '2px solid #00b4d8' }}>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'cloud')}
                        style={{ color: '#38bdf8', fontSize: '1rem', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Cloud and Infrastructure
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'overview')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Overview
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'advisory')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Advisory
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'databricks')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Databricks Solutions
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'applications')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Applications
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'cybersecurity')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Cyber Security
                      </button>
                      <button
                        onClick={(e) => handleServicesSubnavClick(e, 'data-ai')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Data and AI
                      </button>
                    </div>
                  )}
                </li>

                {/* 2. About us Mobile Accordion */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <div
                    onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer' }}
                  >
                    <span>About us</span>
                    {mobileAboutOpen ? <ChevronUp size={20} color="#00b4d8" /> : <ChevronDown size={20} color="#94a3b8" />}
                  </div>

                  {mobileAboutOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.85rem', paddingLeft: '1rem', borderLeft: '2px solid #00b4d8' }}>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'code-of-conduct')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Code of Conduct
                      </button>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'leadership')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Leadership
                      </button>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'milestones')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Milestones
                      </button>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'newsroom')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Newsroom
                      </button>
                      <button
                        onClick={(e) => handleAboutSubnavClick(e, 'privacy-policy')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Privacy Policy
                      </button>
                    </div>
                  )}
                </li>

                {/* 3. Insights */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      if (onNavInsights) onNavInsights();
                    }}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
                  >
                    Insights
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

                {/* 5. Careers Mobile Accordion */}
                <li style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '0.85rem' }}>
                  <div
                    onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#ffffff', fontSize: '1.35rem', fontWeight: 800, cursor: 'pointer' }}
                  >
                    <span>Careers</span>
                    {mobileCareersOpen ? <ChevronUp size={20} color="#00b4d8" /> : <ChevronDown size={20} color="#94a3b8" />}
                  </div>

                  {mobileCareersOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.85rem', paddingLeft: '1rem', borderLeft: '2px solid #00b4d8' }}>
                      <button
                        onClick={(e) => handleCareersSubnavClick(e, 'career-stories')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Career Stories
                      </button>
                      <button
                        onClick={(e) => handleCareersSubnavClick(e, 'job-opportunities')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Job Opportunities
                      </button>
                      <button
                        onClick={(e) => handleCareersSubnavClick(e, 'life-at-ncs')}
                        style={{ color: '#cbd5e1', fontSize: '0.95rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
                      >
                        Life at NCS
                      </button>
                    </div>
                  )}
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
