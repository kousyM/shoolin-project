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
        {/* 2. Hero Banner */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            color: '#0f172a',
            padding: '7rem 2rem 5rem',
            backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.98) 100%), url("/images/nature_banner_1.jpg?v=2026")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '0.4rem 1rem', borderRadius: '30px', marginBottom: '1.5rem' }}>
              <Users size={16} color="#16a34a" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#16a34a' }}>
                For Individuals & Families
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '850px' }}>
              Immigration Services for Individuals and Families
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.7, maxWidth: '800px', margin: 0 }}>
              Vebhor helps individuals and families navigate the complexities of immigration, residency and citizenship worldwide.
            </p>
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
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#005CFD', marginBottom: '1.25rem', lineHeight: 1.2 }}>
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
                    background: 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)',
                    padding: '0.4rem 1.4rem',
                    borderRadius: '18px 24px 24px 18px',
                    display: 'inline-block',
                    marginBottom: '1rem',
                    boxShadow: '0 4px 14px rgba(0, 92, 253, 0.4)'
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
                    e.currentTarget.style.borderColor = '#005CFD';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 92, 253, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#eff6ff', color: '#005CFD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
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
                        <CheckCircle2 size={15} style={{ color: '#005CFD', flexShrink: 0 }} />
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
                    e.currentTarget.style.borderColor = '#005CFD';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 92, 253, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#eff6ff', color: '#005CFD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
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
                        <CheckCircle2 size={15} style={{ color: '#005CFD', flexShrink: 0 }} />
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
                    e.currentTarget.style.borderColor = '#16a34a';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(22, 163, 74, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
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
                        <CheckCircle2 size={15} style={{ color: '#16a34a', flexShrink: 0 }} />
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
