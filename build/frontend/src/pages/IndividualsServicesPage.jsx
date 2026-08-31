import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { ArrowRight, UserCheck, Shield, Globe, Users, Compass, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

const IndividualsServicesPage = ({
  onNavHome,
  onNavServices,
  onNavAbout,
  onNavCareers,
  onNavPartners,
  onNavInsights,
  onNavChallengeUs,
  onOpenContactPage,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* 1. Header Navigation */}
      <Navbar
        activePage="challenge-us"
        onOpenContactPage={onOpenContactPage}
        onNavHome={onNavHome}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavServices={onNavServices}
        onNavChallengeUs={onNavChallengeUs}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main>
        {/* 2. Hero Banner (Signature Lines & Angled Cutout) */}
        <section
          className="signature-hero-banner-section"
          style={{
            position: 'relative',
            backgroundColor: '#f6f4ed',
            backgroundImage: `url('/images/career_lines_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            padding: '5.5rem 2rem 5rem 2rem',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'left',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          {/* Angled Cutout Individuals Photo Container */}
          <div
            className="career-banner-visual-clip"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '52%',
              minWidth: '380px',
              clipPath: 'polygon(18% 0%, 100% 0%, 100% 68%, 0% 100%)',
              overflow: 'hidden',
              zIndex: 1
            }}
          >
            <img
              src="/images/individuals_hero.jpg"
              alt="Immigration for Individuals"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>

          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 3 }}>
            <div style={{ maxWidth: '580px' }}>

              {/* Blue Capsule Badge */}
              <div style={{ marginBottom: '1.1rem' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    padding: '0.35rem 1.25rem',
                    borderRadius: '50px',
                    display: 'inline-block',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.25)'
                  }}
                >
                  FOR INDIVIDUALS
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                  fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
                  fontWeight: 800,
                  color: '#0a1128',
                  lineHeight: 1.2,
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Immigration & Global Talent Solutions
              </h1>

              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.2vw, 1.12rem)',
                  color: '#334155',
                  lineHeight: 1.65,
                  margin: '0 0 2rem 0',
                  fontWeight: 450
                }}
              >
                Vebhor helps individuals, professionals, and families navigate the complexities of global visas, work permits, residency, and citizenship worldwide.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('immigration-solutions-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    padding: '0.85rem 2.2rem',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 6px 20px rgba(2, 41, 176, 0.35)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(40, 129, 251, 0.55)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 41, 176, 0.35)';
                  }}
                >
                  <span>Explore Pathways</span>
                  <ArrowRight size={18} />
                </button>

                <button
                  onClick={onOpenContactPage}
                  style={{
                    padding: '0.85rem 2.2rem',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    borderRadius: '50px',
                    border: '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.borderColor = '#94a3b8';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span>Get in Touch</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Main Individuals Paragraph Content */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc', position: 'relative', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                maxWidth: '960px',
                margin: '0 auto 3.5rem auto',
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '3.5rem 3rem',
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
              }}
            >
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: 'rgb(2, 41, 176)', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Global Immigration & Residency Guidance
              </h2>

              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.75rem', lineHeight: 1.5 }}>
                Vebhor helps individuals and families navigate the complexities of immigration, residency and citizenship worldwide.
              </p>

              <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.85, margin: 0 }}>
                Immigration involves more than securing a visa—it shapes where you and your family will live, work and build your future. We provide clear, strategic guidance and practical support at every stage of the immigration journey, from assessing your options and preparing accurate applications to liaising with government authorities and managing the process through to a successful outcome.
              </p>
            </div>

            {/* EXPLORE IMMIGRATION SOLUTIONS - 4 CARDS IN 1 ROW */}
            <div style={{ marginTop: '1rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    padding: '0.4rem 1.4rem',
                    borderRadius: '18px 24px 24px 18px',
                    display: 'inline-block',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.4)'
                  }}
                >
                  PATHWAYS & MOBILITY
                </span>
                <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
                  Explore Immigration Solutions
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>

                {/* Card 1: LONG TERM RESIDENCY */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2.2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(2, 41, 176, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#eff6ff', color: 'rgb(2, 41, 176)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                    <Compass size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    Long Term Residency
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.55, marginBottom: '1.25rem', fontStyle: 'italic', minHeight: '44px' }}>
                    For individuals building a pathway towards settlement and long-term residence
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.1rem' }}>
                    {[
                      'Students & Graduates',
                      'Global Talent & Exceptional Ability',
                      'Entrepreneurs & Business Owners',
                      'Skilled Workers & Employment-Based',
                      'Athletes & Creatives',
                      'Retirees & Independently Wealthy'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                        <CheckCircle2 size={15} style={{ color: 'rgb(2, 41, 176)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 2: SHORT TERM STAY */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2.2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(2, 41, 176, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#eff6ff', color: 'rgb(2, 41, 176)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                    <Clock size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    Short Term Stay
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.55, marginBottom: '1.25rem', fontStyle: 'italic', minHeight: '44px' }}>
                    Short-term entry options for travel, work, business or remote mobility
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.1rem' }}>
                    {[
                      'Visitors (Tourism & Family Visits)',
                      'Digital Nomads',
                      'Domestic Workers',
                      'Temporary Residence Permits'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                        <CheckCircle2 size={15} style={{ color: 'rgb(2, 41, 176)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 3: FAMILY MIGRATION */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2.2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgb(40, 129, 251)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(2, 41, 176, 0.16)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#eff6ff', color: 'rgb(2, 41, 176)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                    <Users size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    Family Migration
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.55, marginBottom: '1.25rem', fontStyle: 'italic', minHeight: '44px' }}>
                    For families relocating or reuniting across borders smoothly
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.1rem' }}>
                    {[
                      'Spouses, Partners & Fiancés',
                      'Children & Dependents',
                      'Extended Family Members'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                        <CheckCircle2 size={15} style={{ color: 'rgb(2, 41, 176)', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card 4: PERMANENT RESIDENCY & CITIZENSHIP */}
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2.2rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = '#d97706';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(217, 119, 6, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                    <ShieldCheck size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem', lineHeight: 1.3 }}>
                    Permanent Residency & Citizenship
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.55, marginBottom: '1.25rem', fontStyle: 'italic', minHeight: '44px' }}>
                    For those relocating on a long-term or generational basis
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', borderTop: '1px solid #e2e8f0', paddingTop: '1.1rem' }}>
                    {[
                      'Permanent Residency',
                      'Citizenship by Naturalization',
                      'Citizenship by Marriage',
                      'Citizenship by Descent/Ancestry'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b' }}>
                        <CheckCircle2 size={15} style={{ color: '#d97706', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Contact Form Section */}
        <div id="contact-form-section" style={{ backgroundColor: '#ffffff' }}>
          <ContactSection />
        </div>
      </main>

      {/* 5. Footer */}
      <Footer
        onNavHome={onNavHome}
        onNavAbout={onNavAbout}
        onNavServices={onNavServices}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
      />
    </div>
  );
};

export default IndividualsServicesPage;
