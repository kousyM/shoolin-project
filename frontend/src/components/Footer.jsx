import React from 'react';
import { Share2, Globe, ShieldCheck, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="ncs-footer">
      <div className="container-ncs">
        <div className="footer-grid">
          <div>
            <span className="logo-text mb-4 inline-block">NCS<span className="logo-accent">//</span></span>
            <p className="text-sm text-slate-400 max-w-sm mb-6">
              Leading technology services firm partnering with governments and enterprises to navigate digital transformation across Asia-Pacific and Australia.
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-cyan-400 transition-colors p-2 rounded-full bg-slate-800"><Share2 size={16} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors p-2 rounded-full bg-slate-800"><Globe size={16} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors p-2 rounded-full bg-slate-800"><ShieldCheck size={16} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors p-2 rounded-full bg-slate-800"><Mail size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Our Capabilities</h5>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Applications & Platforms</a></li>
              <li><a href="#services" className="footer-link">Digital Experience (CX)</a></li>
              <li><a href="#services" className="footer-link">Data & AI Ecosystems</a></li>
              <li><a href="#services" className="footer-link">Cloud & Cybersecurity</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Industries</h5>
            <ul className="footer-links">
              <li><a href="#case-studies" className="footer-link">Public Sector & Government</a></li>
              <li><a href="#case-studies" className="footer-link">Healthcare & Lifesciences</a></li>
              <li><a href="#case-studies" className="footer-link">Financial Services</a></li>
              <li><a href="#case-studies" className="footer-link">Telecommunications</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#about" className="footer-link">About NCS</a></li>
              <li><a href="#insights" className="footer-link">Insights & Reports</a></li>
              <li><a href="#latest-news" className="footer-link">Latest News</a></li>
              <li><a href="#contact" className="footer-link">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} NCS Pte Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Statement</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Security & Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
