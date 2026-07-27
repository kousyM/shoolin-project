import React from 'react';

export const Footer = ({ onOpenContactPage }) => {
  return (
    <footer className="ncs-footer">
      <div className="max-w-7xl mx-auto">
        
        <div className="footer-grid">
          
          {/* Brand Info */}
          <div className="footer-col">
            <span className="logo-text text-2xl font-extrabold block mb-3">
              NCS<span className="logo-accent">//</span>
            </span>
            <p className="text-sm text-slate-400 max-w-sm mb-4 leading-relaxed">
              We bring world-class expertise in cloud, data, cyber security, and enterprise AI to accelerate digital value across Asia-Pacific.
            </p>
            <p className="text-xs text-slate-500">
              Part of Singtel Group • Australia & Asia Pacific
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h5>Solutions</h5>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Applications & Platforms</a></li>
              <li><a href="#services" className="footer-link">Digital Experience (CX)</a></li>
              <li><a href="#services" className="footer-link">Data & AI Ecosystems</a></li>
              <li><a href="#services" className="footer-link">Sovereign Cloud Infrastructure</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#case-studies" className="footer-link">Case Studies</a></li>
              <li><a href="#insights" className="footer-link">Insights & Whitepapers</a></li>
              <li><a href="#latest-news" className="footer-link">Latest News & Press</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-col">
            <h5>Connect</h5>
            <ul className="footer-links">
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onOpenContactPage) onOpenContactPage();
                  }}
                  className="footer-link font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Contact Us Page →
                </a>
              </li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-link">Twitter / X</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-4">
          <div>
            © 2026 NCS Group. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Cyber Resilience Statement</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
