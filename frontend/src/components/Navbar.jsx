import React, { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export const Navbar = ({ onOpenContactPage, onNavHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About us', href: '#about', action: onNavHome },
    { label: 'Our services', href: '#services', action: onNavHome },
    { label: 'Case studies', href: '#case-studies', action: onNavHome },
    { label: 'Insights', href: '#insights', action: onNavHome },
    { label: 'Latest news', href: '#latest-news', action: onNavHome },
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
                  if (item.label === 'Contact us') {
                    e.preventDefault();
                    if (onOpenContactPage) onOpenContactPage();
                  } else {
                    if (onNavHome) onNavHome();
                  }
                }}
                className="nav-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right CTA Badge & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-1.5 text-slate-300 text-xs font-semibold px-2.5 py-1 bg-white/5 rounded-full border border-white/10">
            <Globe size={14} className="text-cyan-400" />
            <span>EN-AU</span>
          </div>

          <button
            onClick={onOpenContactPage}
            className="btn-ncs-primary hidden sm:inline-flex"
          >
            <span>Get in Touch</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-nav-toggle"
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
                  setMobileMenuOpen(false);
                  if (item.label === 'Contact us') {
                    e.preventDefault();
                    if (onOpenContactPage) onOpenContactPage();
                  } else {
                    if (onNavHome) onNavHome();
                  }
                }}
                className="text-white text-lg font-medium hover:text-cyan-400 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
