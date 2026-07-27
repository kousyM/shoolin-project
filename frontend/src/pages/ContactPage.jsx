
// ContactPage.jsx
// NOTE: Skeleton generated from your existing component.
// Add your remaining JSX as needed.

import React, { useState } from "react";
import {
  User, Mail, Phone, FileText, Edit3, Send,
  CheckCircle2, AlertCircle, Building2, Briefcase
} from "lucide-react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage({ onBackHome }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organisation: "",
    designation: "",
    enquiry_type: "",
    subject: "",
    message: "",
    agree: false,
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      await axios.post("http://127.0.0.1:8000/api/contact", formData);
      setStatus({ loading: false, success: true, error: null });
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Submission failed." });
    }
  };

  const input = "w-full pl-10 pr-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-amber-500";

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar onNavHome={onBackHome} />
      <main className="max-w-5xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-4xl font-bold"><center>Contact Us</center></h1>
          <div className="w-12 h-1 bg-amber-500 my-4 rounded"></div>

          {status.success ? (
            <div className="text-center p-8">
              <CheckCircle2 className="mx-auto text-green-600" size={60} />
              <h2 className="text-2xl font-bold mt-4">Message Sent Successfully!</h2>
            </div>
          ) : (
            <div className="contact-container">
              <div className="contact-card">

                <form
                  id="contactForm"
                  className="contact-form"
                  onSubmit={handleSubmit}
                >

                  {/* Row 1 */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="first_name">
                        First Name <span>*</span>
                      </label>

                      <div className="input-box">

                        <User size={18} />

                        <input
                          id="first_name"
                          className="contact-input"
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                        />

                      </div>

                    </div>

                    <div className="form-group">

                      <label htmlFor="last_name">
                        Last Name
                      </label>

                      <div className="input-box">

                        <User size={18} />

                        <input
                          id="last_name"
                          className="contact-input"
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                        />

                      </div>

                    </div>

                  </div>



                  {/* Row 2 */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="email">
                        Email Address <span>*</span>
                      </label>

                      <div className="input-box">

                        <Mail size={18} />

                        <input
                          id="email"
                          className="contact-input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                        />

                      </div>

                    </div>

                    <div className="form-group">

                      <label htmlFor="phone">
                        Phone Number
                      </label>

                      <div className="input-box">

                        <Phone size={18} />

                        <input
                          id="phone"
                          className="contact-input"
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />

                      </div>

                    </div>

                  </div>



                  {/* Row 3 */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="organisation">

                        Organisation

                      </label>

                      <div className="input-box">

                        <Building2 size={18} />

                        <input
                          id="organisation"
                          className="contact-input"
                          type="text"
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleChange}
                          placeholder="Enter organisation"
                        />

                      </div>

                    </div>

                    <div className="form-group">

                      <label htmlFor="designation">

                        Designation

                      </label>

                      <div className="input-box">

                        <Briefcase size={18} />

                        <input
                          id="designation"
                          className="contact-input"
                          type="text"
                          name="designation"
                          value={formData.designation}
                          onChange={handleChange}
                          placeholder="Enter designation"
                        />

                      </div>

                    </div>

                  </div>



                  {/* Row 4 */}

                  <div className="form-row">

                    <div className="form-group">

                      <label htmlFor="enquiry_type">

                        Enquiry Type <span>*</span>

                      </label>

                      <div className="input-box">

                        <select
                          id="enquiry_type"
                          className="contact-select"
                          name="enquiry_type"
                          value={formData.enquiry_type}
                          onChange={handleChange}
                          required
                        >

                          <option value="">
                            Select Enquiry Type
                          </option>

                          <option>
                            General Enquiry
                          </option>

                          <option>
                            Sales Enquiry
                          </option>

                          <option>
                            Request for Quotation
                          </option>

                          <option>
                            Technical Support
                          </option>

                          <option>
                            Career
                          </option>

                          <option>
                            Partnership
                          </option>

                        </select>


                      </div>

                    </div>

                    <div className="form-group">

                      <label htmlFor="subject">

                        Subject <span>*</span>

                      </label>

                      <div className="input-box">

                        <FileText size={18} />

                        <input
                          id="subject"
                          className="contact-input"
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Enter subject"
                          required
                        />

                      </div>

                    </div>

                  </div>



                  {/* Message */}

                  <div className="form-group">

                    <label htmlFor="message">

                      Message <span>*</span>

                    </label>

                    <div className="input-box textarea">

                      <Edit3 size={18} />

                      <textarea
                        id="message"
                        className="contact-textarea"
                        name="message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your enquiry..."
                        required
                      />

                    </div>

                  </div>



                  {/* Privacy */}

                  <div className="contact-check">

                    <input
                      id="agree"
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                    />

                    <label htmlFor="agree">

                      I have read and agree to the

                      <span>

                        Privacy Policy

                      </span>

                    </label>

                  </div>



                  {/* Button */}

                  <button
                    type="submit"
                    className="contact-btn"
                    disabled={status.loading}
                  >

                    {status.loading
                      ? "Sending..."
                      : "Send Message"}

                    <Send size={18} />

                  </button>

                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
