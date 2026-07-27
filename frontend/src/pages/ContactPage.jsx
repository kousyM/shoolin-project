import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';
import axios from 'axios';

export const ContactPage = ({ onBackHome }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    organisation: '',
    designation: '',
    subject: 'Request for Quotation/ Sales Enquiry',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        message: ''
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Error submitting enquiry. Please check fields and try again.'
      });
    }
  };

  return (
    <div className="min-h-screen ncs-contact-page-bg text-white font-sans flex flex-col justify-between">
      
      {/* Top Header Navigation */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center border-b border-white/10">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackHome}
            className="flex items-center gap-2 text-sm text-slate-200 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/20"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </button>
          <span className="font-extrabold text-2xl tracking-tight text-white font-heading">
            NCS<span className="text-cyan-400">//</span>
          </span>
        </div>

        <button
          onClick={onBackHome}
          className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white"
        >
          NCS Corporate Portal
        </button>
      </header>

      {/* Main Contact Form Section */}
      <main className="w-full max-w-5xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center">
        
        {/* Title and Subtitle matching exact screenshot */}
        <div className="mb-10 text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 font-heading tracking-tight">
            Contact us
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-3xl font-normal leading-relaxed">
            We will always respond to your enquiry as soon as possible. Please fill in your contact details and share what you can about the nature of your query.
          </p>
        </div>

        {status.success ? (
          <div className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 text-center max-w-2xl">
            <CheckCircle2 size={56} className="mx-auto text-emerald-400 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Enquiry Submitted Successfully!</h3>
            <p className="text-sm text-slate-200 mb-6">
              Thank you for getting in touch. Your contact details have been stored in our system and an email notification has been dispatched to our sales & technology team.
            </p>
            <button
              onClick={() => setStatus({ loading: false, success: false, error: null })}
              className="px-6 py-2.5 bg-white text-purple-900 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-all"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-8">
            
            {status.error && (
              <div className="p-4 bg-red-900/50 border border-red-400 text-red-200 text-sm rounded-xl flex items-center gap-3">
                <AlertCircle size={20} />
                <span>{status.error}</span>
              </div>
            )}

            {/* Row 1: First name & Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ncs-underline-field">
                <input
                  type="text"
                  name="first_name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="First name *"
                  className="ncs-input-underline"
                />
              </div>

              <div className="ncs-underline-field">
                <input
                  type="text"
                  name="last_name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="Last name *"
                  className="ncs-input-underline"
                />
              </div>
            </div>

            {/* Row 2: Email address & Organisation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ncs-underline-field">
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address *"
                  className="ncs-input-underline"
                />
              </div>

              <div className="ncs-underline-field">
                <input
                  type="text"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Organisation"
                  className="ncs-input-underline"
                />
              </div>
            </div>

            {/* Row 3: Designation & Request dropdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="ncs-underline-field">
                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Designation"
                  className="ncs-input-underline"
                />
              </div>

              <div className="ncs-underline-field">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="ncs-select-underline"
                >
                  <option value="Request for Quotation/ Sales Enquiry" className="text-slate-900">Request for Quotation/ Sales Enquiry</option>
                  <option value="Applications & Platform Modernisation" className="text-slate-900">Applications & Platform Modernisation</option>
                  <option value="Digital Experience (CX) Consult" className="text-slate-900">Digital Experience (CX) Consult</option>
                  <option value="Data & AI Ecosystem Partnerships" className="text-slate-900">Data & AI Ecosystem Partnerships</option>
                  <option value="Career / Partnership Inquiry" className="text-slate-900">Career / Partnership Inquiry</option>
                </select>
              </div>
            </div>

            {/* Row 4: Textarea Tell us more */}
            <div className="pt-2">
              <div className="ncs-textarea-box">
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your enquiry *"
                  className="ncs-textarea-input"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex justify-start">
              <button
                type="submit"
                disabled={status.loading}
                className="ncs-contact-submit-btn"
              >
                {status.loading ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
              </button>
            </div>

          </form>
        )}

      </main>

      {/* Simple Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-6 text-center text-xs text-slate-300 border-t border-white/10">
        © 2026 NCS Group. All rights reserved.
      </footer>

    </div>
  );
};

export default ContactPage;
