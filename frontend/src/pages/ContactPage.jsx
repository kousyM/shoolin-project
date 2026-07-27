import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Search, Globe, Mail, ArrowLeft } from 'lucide-react';
import axios from 'axios';

export const ContactPage = ({ onBackHome }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    organisation: '',
    designation: '',
    subject: 'Request for Quotation/ Sales Enquiry',
    message: '',
    consent: true
  });

  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaChecked) {
      setStatus({ loading: false, success: false, error: 'Please verify that you are not a robot.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null });

    try {
      await axios.post('http://127.0.0.1:8000/api/contact', formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        organisation: '',
        designation: '',
        subject: 'Request for Quotation/ Sales Enquiry',
        message: '',
        consent: true
      });
      setRecaptchaChecked(false);
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Error submitting enquiry. Please check fields and try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-between">
      
      {/* 1. Header Navigation Bar (White Bar Matching Exact Screenshot) */}
      <header className="w-full bg-white text-slate-900 shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex justify-between items-center">
          
          {/* Logo & Main Nav Links */}
          <div className="flex items-center gap-8">
            <button onClick={onBackHome} className="flex items-center gap-1.5 focus:outline-none">
              <span className="font-extrabold text-2xl tracking-tight text-slate-950 font-heading">
                NCS<span className="text-cyan-500">//</span>
              </span>
            </button>

            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-700">
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">Challenge Us</a>
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">Services</a>
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">Industries</a>
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">Insights</a>
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">Partners</a>
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">Careers</a>
              <a href="#" onClick={onBackHome} className="hover:text-blue-700 transition-colors">About Us</a>
              <a href="#contact" className="text-blue-700 font-bold border-b-2 border-blue-700 pb-1">Contact Us</a>
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-5 text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-700">
              <Globe size={16} className="text-slate-600" />
              <span>AU</span>
            </div>
            <button aria-label="Search" className="hover:text-blue-700 text-slate-700">
              <Search size={18} />
            </button>
            <button
              onClick={onBackHome}
              className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              <span>Back Home</span>
            </button>
          </div>

        </div>
      </header>

      {/* 2. Main Contact Section (Exact Reference Screenshot Layout with Center Alignment) */}
      <main className="w-full flex-1 py-14 px-4 ncs-exact-contact-gradient flex justify-center items-center">
        
        {/* Centered Max Width Container (approx 840px) */}
        <div className="w-full max-w-3xl mx-auto">
          
          {/* Header Title & Subtitle */}
          <div className="mb-10 text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 font-heading tracking-tight">
              Contact us
            </h1>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
              We will always respond to your enquiry as soon as possible. Please fill in your contact details and share what you can about the nature of your query.
            </p>
          </div>

          {status.success ? (
            <div className="p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-emerald-400/40 text-center my-6 max-w-xl mx-auto shadow-2xl">
              <CheckCircle2 size={56} className="mx-auto text-emerald-400 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted Successfully!</h3>
              <p className="text-sm text-slate-200 mb-6">
                Thank you for getting in touch. Your contact details have been stored in our MySQL <code className="text-cyan-300 font-mono">contacts</code> database table and an email notification has been sent.
              </p>
              <button
                onClick={() => setStatus({ loading: false, success: false, error: null })}
                className="px-6 py-2.5 bg-white text-slate-950 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all shadow-lg"
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-8">
              
              {status.error && (
                <div className="p-4 bg-red-950/80 border border-red-400 text-red-200 text-xs rounded-xl flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                  <span>{status.error}</span>
                </div>
              )}

              {/* Row 1: First name | Last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="ncs-underline-group">
                  <input
                    type="text"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="First name *"
                    className="ncs-screenshot-input"
                  />
                </div>

                <div className="ncs-underline-group">
                  <input
                    type="text"
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Last name *"
                    className="ncs-screenshot-input"
                  />
                </div>
              </div>

              {/* Row 2: Email address | Organisation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="ncs-underline-group">
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address *"
                    className="ncs-screenshot-input"
                  />
                </div>

                <div className="ncs-underline-group">
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    placeholder="Organisation"
                    className="ncs-screenshot-input"
                  />
                </div>
              </div>

              {/* Row 3: Designation | Request for Quotation Dropdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="ncs-underline-group">
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Designation"
                    className="ncs-screenshot-input"
                  />
                </div>

                <div className="ncs-underline-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="ncs-screenshot-select"
                  >
                    <option value="Request for Quotation/ Sales Enquiry" className="text-slate-900">Request for Quotation/ Sales Enquiry</option>
                    <option value="Applications & Platform Modernisation" className="text-slate-900">Applications & Platform Modernisation</option>
                    <option value="Digital Experience (CX) Consult" className="text-slate-900">Digital Experience (CX) Consult</option>
                    <option value="Data & AI Ecosystem Partnerships" className="text-slate-900">Data & AI Ecosystem Partnerships</option>
                    <option value="Career / General Enquiry" className="text-slate-900">Career / General Enquiry</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Textarea Tell us more about your enquiry */}
              <div className="pt-2">
                <div className="ncs-textarea-outline-box">
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your enquiry *"
                    className="ncs-screenshot-textarea"
                  ></textarea>
                </div>
              </div>

              {/* Row 5: Consent Checkbox Text */}
              <div className="flex items-start gap-3 text-xs text-slate-300 pt-2 leading-relaxed">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-purple-600 rounded cursor-pointer"
                />
                <label htmlFor="consent" className="cursor-pointer">
                  I have read, understood and agree to be bound by <a href="#" className="underline text-slate-100 hover:text-cyan-300">NCS Privacy Policy</a> which may be amended from time to time. I agree that NCS may collect, use and disclose my personal data as provided in this form in accordance with NCS Privacy Policy and for the purposes set out in the NCS Privacy Policy and for the purposes relating to attending and responding to my enquiry and/or feedback.
                </label>
              </div>

              {/* Row 6: reCAPTCHA Box Mockup */}
              <div className="pt-2">
                <div
                  onClick={() => setRecaptchaChecked(!recaptchaChecked)}
                  className="inline-flex items-center gap-4 bg-white text-slate-800 p-3.5 rounded-md shadow-md border border-slate-300 cursor-pointer select-none"
                >
                  <div className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${recaptchaChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-400 bg-slate-50'}`}>
                    {recaptchaChecked && <CheckCircle2 size={16} />}
                  </div>
                  <span className="text-xs font-semibold text-slate-800">I'm not a robot</span>
                  <div className="ml-6 flex flex-col items-center justify-center border-l pl-3 border-slate-200">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-5 h-5 object-contain" />
                    <span className="text-[9px] text-slate-400 mt-0.5">reCAPTCHA</span>
                  </div>
                </div>
              </div>

              {/* Row 7: Submit Button Pill */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="ncs-screenshot-submit-pill"
                >
                  {status.loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>

            </form>
          )}

        </div>

      </main>

      {/* 3. Footer (Exact Reference Screenshot Layout) */}
      <footer className="w-full bg-slate-900 text-slate-400 text-xs pt-12 pb-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Footer 5 Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            
            <div>
              <h5 className="text-cyan-400 font-bold text-sm mb-4 font-heading">Challenge Us</h5>
              <ul className="space-y-2.5">
                <li><a href="#" className="hover:text-white transition-colors">Challenge Us</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-cyan-400 font-bold text-sm mb-4 font-heading">Services</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Advisory</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Applications</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AWS Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clouds and Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cyber Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data and AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Databricks Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Experience</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Innovation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Managed Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Microsoft Solutions</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-cyan-400 font-bold text-sm mb-4 font-heading">Industries</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Energy, Utilities and Resources</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Financial Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Public Sector</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Transport & Logistics</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-cyan-400 font-bold text-sm mb-4 font-heading">Insights</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Overview</a></li>
              </ul>

              <h5 className="text-cyan-400 font-bold text-sm mt-6 mb-3 font-heading">Careers</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Career Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Job Opportunities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Life at NCS</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-cyan-400 font-bold text-sm mb-4 font-heading">Partners</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>

              <h5 className="text-cyan-400 font-bold text-sm mt-6 mb-3 font-heading">About Us</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Milestones</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

          </div>

          {/* Social Icons Bar */}
          <div className="flex justify-end items-center gap-3 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="mailto:admin@ncs.co" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-500 transition-colors">
              <Mail size={14} />
            </a>
          </div>

          {/* Bottom Legal Copyright */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-[11px] text-slate-400 gap-4">
            <div>
              Copyright © 2026 NCS AU Pty Ltd
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-200">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-200">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-200">Modern Slavery Statement</a>
              <span>|</span>
              <a href="#" className="hover:text-slate-200">Cookie Policy</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default ContactPage;
