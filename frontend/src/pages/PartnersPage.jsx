import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Layers, 
  TrendingUp, 
  ShieldCheck
} from 'lucide-react';

export const PartnersPage = ({ onNavHome, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    organisation: '',
    email: '',
    phone: '',
    enquiry: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={() => window.scrollTo(0, 0)}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        
        {/* ============================================================ */}
        {/* 1. HERO BANNER SECTION */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#001938',
            backgroundImage: `linear-gradient(90deg, rgba(0, 25, 56, 0.90) 0%, rgba(0, 25, 56, 0.75) 50%, rgba(0, 25, 56, 0.45) 100%), url('/images/partners_hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '6rem 2rem 5.5rem',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', overflow: 'hidden' }}>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(1.85rem, 5vw, 3rem)', fontWeight: 800, color: '#ffffff', maxWidth: '880px', lineHeight: 1.25, marginBottom: '1.25rem', wordBreak: 'break-word' }}>
              A Connected Partner Ecosystem Powering Workforce Innovation
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#e2e8f0', maxWidth: '780px', lineHeight: 1.65, wordBreak: 'break-word' }}>
              By teaming with industry‑leading technology providers, we help clients streamline operations, enhance compliance, and prepare for what’s next.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. KEY PARTNERS SECTION (WITH DELL INSTEAD OF DATABRICKS) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '3.5rem' }}>
              Key partners
            </h2>

            {/* 4-column key partners grid: AWS, Dell, Google Cloud, Microsoft */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
              {/* AWS */}
              <div style={{ padding: '2.5rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 900, color: '#ff9900', letterSpacing: '-0.03em' }}>
                  aws
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Premier Tier Partner
                </span>
              </div>

              {/* Salesforce (Replaced Dell as requested) */}
              <div style={{ padding: '2.5rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                    alt="Salesforce"
                    style={{ height: '38px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Summit Partner
                </span>
              </div>

              {/* Google Cloud */}
              <div style={{ padding: '2.5rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                    <span style={{ color: '#4285f4' }}>G</span>
                    <span style={{ color: '#ea4335' }}>o</span>
                    <span style={{ color: '#fbbc05' }}>o</span>
                    <span style={{ color: '#4285f4' }}>g</span>
                    <span style={{ color: '#34a853' }}>l</span>
                    <span style={{ color: '#ea4335' }}>e</span>
                  </span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 600, color: '#475569' }}>Cloud</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  MSP Premier Partner
                </span>
              </div>

              {/* Microsoft */}
              <div style={{ padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', width: '20px', height: '20px' }}>
                    <div style={{ backgroundColor: '#f25022' }}></div>
                    <div style={{ backgroundColor: '#7fba00' }}></div>
                    <div style={{ backgroundColor: '#00a4ef' }}></div>
                    <div style={{ backgroundColor: '#ffb900' }}></div>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.9rem', fontWeight: 700, color: '#475569' }}>
                    Microsoft
                  </span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Solutions Partner
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CAPABILITIES FEATURE GRID (EXACT USER CONTENT & MATCHING IMAGE DESIGN) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '5.5rem 2rem 5.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Main Header Title & Subtitle */}
            <div style={{ marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.75rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '1.25rem' }}>
                Accelerate Success Through Powerful Partnerships
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#475569', maxWidth: '880px', lineHeight: 1.65, margin: 0 }}>
                Benefit from best‑in‑class capabilities delivered through Vebhor Consultancy and our trusted global partner network.
              </p>
            </div>

            {/* 4-Grid Feature Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3.5rem', marginBottom: '3.5rem' }}>
              {/* Feature 1 */}
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Lightbulb size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                  Innovation That Moves You Forward
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  From cloud‑driven efficiency to AI‑powered workforce intelligence, we work with our partners help us deliver technology that creates real competitive advantage.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#f3e8ff', color: '#6C5CE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <Layers size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                  Integration Made Effortless
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  We collaborate with platforms and providers you already rely on—ensuring every solution fits seamlessly into your existing workflows and scales with your business.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <TrendingUp size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                  Big Thinking for Big Impact
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Together with our Strategic Partners, we build solutions that operate at enterprise scale and meet the demands of today’s digital workforce landscape.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                  <ShieldCheck size={26} />
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                  Emerging Tech, Applied With Precision
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                  Our Extended Partner Network enables us to solve complex, nuanced business challenges with specialised expertise and cutting‑edge technology.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. LET'S TALK FORM SECTION */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)',
            color: '#ffffff',
            padding: '5.5rem 2rem 6.5rem'
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Let's talk
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#f1f5f9', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
                Let us help you simplify licensing, optimise costs, and ensure you get the most value from your technology investments.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '3.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Enquiry Received!</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '500px', margin: '0.5rem auto 2rem' }}>
                  Thank you for reaching out. One of our technology partner specialists will connect with you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{ padding: '0.85rem 2rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 800, borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      First name <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Last name <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Role <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Role"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Organisation <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      placeholder="Organisation"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Business email address <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Business email address"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Phone <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                    Tell us more about your enquiry <span style={{ color: '#fca5a5' }}>*</span>
                  </label>
                  <textarea
                    name="enquiry"
                    rows={4}
                    value={formData.enquiry}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your enquiry"
                    required
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a', resize: 'vertical' }}
                  ></textarea>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '1rem 3rem',
                      backgroundColor: '#002b49',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      borderRadius: '30px',
                      border: '2px solid #ffffff',
                      cursor: 'pointer',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXPLORE MORE CARDS SECTION */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#001938',
            color: '#ffffff',
            padding: '5rem 2rem 6rem',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem', color: '#ffffff' }}>
              Explore more
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5rem' }}>
              {/* Card 1: Services */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Services
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Explore our full range of workforce & HR services that help organisations transform for the future.
                </p>
                <button
                  onClick={onNavServices}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 2: Careers */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Careers
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Join our team and build a rewarding career delivering global workforce innovation.
                </p>
                <button
                  onClick={onNavCareers}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 3: Contact Us */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Contact Us
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Want to find out more about how we can help you?
                </p>
                <button
                  onClick={onOpenContactPage}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default PartnersPage;
