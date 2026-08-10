import React, { useState } from 'react';
import { Menu, X, Globe, UserCheck, ArrowRight } from 'lucide-react';

export const Navbar = ({ onOpenContactPage, onNavHome, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);

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

  return (
    <nav className="ncs-navbar" style={{ position: 'relative', zIndex: 100 }}>
      <div className="nav-container">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            if (onNavHome) onNavHome();
          }}
          className="flex items-center gap-2 text-decoration-none"
        >
          <span className="logo-text">
            NCS<span className="logo-accent">//</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {/* 1. About Us with Hover Mega Menu Dropdown */}
          <li
            style={{ position: 'relative' }}
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <a
              href="#code-of-conduct"
              onClick={(e) => handleAboutSubnavClick(e, 'code-of-conduct')}
              className="nav-link"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
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
            <a href="#services" onClick={(e) => { e.preventDefault(); onNavHome(); }} className="nav-link">Our services</a>
          </li>
          <li>
            <a href="#case-studies" onClick={(e) => { e.preventDefault(); onNavHome(); }} className="nav-link">Case studies</a>
          </li>
          <li>
            <a
              href="#insights"
              onClick={(e) => {
                e.preventDefault();
                if (onNavInsights) onNavInsights();
              }}
              className="nav-link"
            >
              Insights
            </a>
          </li>

          {/* 2. Partners Menu Link */}
          <li>
            <a
              href="#partners"
              onClick={(e) => {
                e.preventDefault();
                if (onNavPartners) onNavPartners();
              }}
              className="nav-link"
            >
              Partners
            </a>
          </li>

          {/* 3. Careers with Hover Mega Menu Dropdown */}
          <li
            style={{ position: 'relative' }}
            onMouseEnter={() => setCareersDropdownOpen(true)}
            onMouseLeave={() => setCareersDropdownOpen(false)}
          >
            <a
              href="#career-stories"
              onClick={(e) => handleCareersSubnavClick(e, 'career-stories')}
              className="nav-link nav-link-careers"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
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

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
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
            <a href="#contact" onClick={(e) => { e.preventDefault(); onOpenContactPage(); }} className="nav-link">Contact us</a>
          </li>
        </ul>

        {/* Right Country Badge & Admin Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#cbd5e1', fontSize: '0.75rem', fontWeight: 600, padding: '0.25rem 0.65rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
            <Globe size={13} style={{ color: '#38bdf8' }} />
            <span>EN-AU</span>
          </div>

          {isAdminLoggedIn && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={onNavAdmin}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <UserCheck size={13} />
                <span>Admin Dashboard</span>
              </button>
              <button
                onClick={onAdminLogout}
                style={{
                  color: '#94a3b8',
                  fontSize: '0.75rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle lg:hidden text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="logo-text">
            NCS<span className="logo-accent">//</span>
          </span>
          <button onClick={() => setMobileMenuOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <ul className="flex flex-col gap-4 list-none p-0">
          <li>
            <button onClick={(e) => handleAboutSubnavClick(e, 'code-of-conduct')} className="text-white text-lg font-medium hover:text-cyan-400 border-none bg-none p-0">
              About us
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavInsights) onNavInsights();
              }}
              className="text-white text-lg font-medium hover:text-cyan-400 border-none bg-none p-0"
            >
              Insights
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavPartners) onNavPartners();
              }}
              className="text-white text-lg font-medium hover:text-cyan-400 border-none bg-none p-0"
            >
              Partners
            </button>
          </li>
          <li>
            <button onClick={(e) => handleCareersSubnavClick(e, 'career-stories')} className="text-white text-lg font-medium hover:text-cyan-400 border-none bg-none p-0">
              Careers
            </button>
            <div className="flex flex-col gap-2 pl-4 pt-2 text-sm text-slate-300">
              <button onClick={(e) => handleCareersSubnavClick(e, 'career-stories')} className="text-left bg-none border-none p-0 text-slate-300">Career Stories</button>
              <button onClick={(e) => handleCareersSubnavClick(e, 'job-opportunities')} className="text-left bg-none border-none p-0 text-slate-300">Job Opportunities</button>
              <button onClick={(e) => handleCareersSubnavClick(e, 'life-at-ncs')} className="text-left bg-none border-none p-0 text-slate-300">Life at NCS</button>
            </div>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onOpenContactPage(); }} className="text-white text-lg font-medium">Contact us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
