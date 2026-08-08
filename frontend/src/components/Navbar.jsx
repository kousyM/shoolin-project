import React, { useState } from 'react';
import { Menu, X, Globe, UserCheck } from 'lucide-react';

export const Navbar = ({ onOpenContactPage, onNavHome, onNavAbout, onNavCareers, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About us', href: '#about', action: onNavAbout || onNavHome },
    { label: 'Our services', href: '#services', action: onNavHome },
    { label: 'Case studies', href: '#case-studies', action: onNavHome },
    { label: 'Insights', href: '#insights', action: onNavHome },
    { label: 'Latest news', href: '#latest-news', action: onNavHome },
    { label: 'Careers', href: '#careers', action: onNavCareers, isSpecial: true },
    { label: 'Contact us', href: '#contact', action: onOpenContactPage }
  ];

  return (
    <nav className="ncs-navbar">
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
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.action) item.action();
                }}
                className={`nav-link ${item.isSpecial ? 'nav-link-careers' : ''}`}
              >
                {item.label}
              </a>
            </li>
          ))}
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
          {navItems.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  if (item.action) item.action();
                }}
                className="text-white text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          {isAdminLoggedIn && (
            <li className="pt-4 border-t border-slate-700">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavAdmin();
                }}
                className="text-cyan-400 text-base font-semibold"
              >
                Admin Dashboard
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
