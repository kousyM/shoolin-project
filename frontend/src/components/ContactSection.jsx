import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, X } from 'lucide-react';
import axios from 'axios';

export const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
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
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: err.response?.data?.message || 'Something went wrong. Please try again.'
      });
    }
  };

  return (
    <section id="contact" className="ncs-contact-banner-section">
      <div className="ncs-contact-banner-container">
        
        {/* Left Side: Contact Us Heading */}
        <div className="ncs-contact-banner-left">
          <h2 className="ncs-contact-banner-title">
            Contact us
          </h2>
          <p className="ncs-contact-banner-sub">
            If you're ready to make it happen, get in touch today.
          </p>
        </div>

        {/* Right Side: "Find out more" Button which opens Contact Modal */}
        <div className="ncs-contact-banner-right">
          <button
            onClick={() => {
              setShowModal(true);
              setStatus({ loading: false, success: false, error: null });
            }}
            className="ncs-contact-banner-btn"
          >
            Find out more
          </button>
        </div>

      </div>

      {/* Contact Form Modal (Appears ONLY when clicking "Find out more") */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content max-w-xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="close-btn">
              <X size={20} />
            </button>

            <div className="text-left mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Get in Touch with NCS</h3>
              <p className="text-sm text-slate-600 mt-1">
                Fill out your details below and our solution architects will connect with you.
              </p>
            </div>

            {status.success ? (
              <div className="py-8 text-center bg-emerald-50 rounded-xl border border-emerald-200">
                <CheckCircle2 size={48} className="mx-auto text-emerald-600 mb-3" />
                <h4 className="text-lg font-bold text-emerald-900">Thank You!</h4>
                <p className="text-sm text-emerald-700 mt-1 max-w-md mx-auto">
                  Your message has been received. Our expert team will review your request and get back to you shortly.
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-6 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {status.error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle size={16} />
                    <span>{status.error}</span>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@organization.com"
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Company / Organization</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Government ICT Dept"
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">Area of Interest *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:border-blue-600"
                    >
                      <option value="">Select an area...</option>
                      <option value="Applications & Platforms">Applications & Platforms</option>
                      <option value="Digital Experience (CX)">Digital Experience (CX)</option>
                      <option value="Data & AI Ecosystems">Data & AI Ecosystems</option>
                      <option value="General Partnership">General Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">How can we help? *</label>
                  <textarea
                    name="message"
                    required
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your digital transformation requirements..."
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-600"
                  ></textarea>
                </div>

                <div className="pt-3 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status.loading}
                    className="btn-ncs-primary py-2 px-6 text-xs flex items-center gap-2"
                  >
                    <Send size={14} />
                    <span>{status.loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
