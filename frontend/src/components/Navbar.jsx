import React, { useState } from 'react';
import { Menu, X, Globe, Search, ChevronRight } from 'lucide-react';

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="ncs-navbar">
        <div className="nav-container">
          <a href="#" className="brand flex items-center gap-2 text-decoration-none">
            <span className="logo-text">
              NCS<span className="logo-accent">//</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            <li><a href="#about" className="nav-link">About us</a></li>
            <li><a href="#services" className="nav-link">Our services</a></li>
            <li><a href="#case-studies" className="nav-link">Case studies</a></li>
            <li><a href="#insights" className="nav-link">Insights</a></li>
            <li><a href="#latest-news" className="nav-link">Latest news</a></li>
            <li><a href="#contact" className="nav-link">Contact us</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-slate-300 text-xs font-semibold cursor-pointer">
              <Globe size={16} className="text-cyan-400" />
              <span>EN-AU</span>
            </div>

            <a href="#contact" className="btn-ncs-primary hidden sm:inline-flex">
              <span>Get in Touch</span>
              <ChevronRight size={16} />
            </a>

            <button 
              className="mobile-nav-toggle p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center pb-4 border-b border-slate-700">
          <span className="logo-text">NCS<span className="logo-accent">//</span></span>
          <button onClick={() => setMobileOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-4 py-4">
          <a href="#about" onClick={() => setMobileOpen(false)} className="nav-link text-lg">About us</a>
          <a href="#services" onClick={() => setMobileOpen(false)} className="nav-link text-lg">Our services</a>
          <a href="#case-studies" onClick={() => setMobileOpen(false)} className="nav-link text-lg">Case studies</a>
          <a href="#insights" onClick={() => setMobileOpen(false)} className="nav-link text-lg">Insights</a>
          <a href="#latest-news" onClick={() => setMobileOpen(false)} className="nav-link text-lg">Latest news</a>
          <a href="#contact" onClick={() => setMobileOpen(false)} className="nav-link text-lg">Contact us</a>
        </div>

        <div className="mt-auto">
          <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-ncs-primary w-full justify-center">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
