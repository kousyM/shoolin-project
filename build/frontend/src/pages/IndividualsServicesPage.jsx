import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { ArrowRight, UserCheck, Shield, Globe, Users } from 'lucide-react';

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
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
            backgroundColor: '#001838',
            color: '#ffffff',
            padding: '7rem 2rem 5rem',
            backgroundImage: 'linear-gradient(135deg, rgba(0,24,56,0.95) 0%, rgba(2,132,199,0.8) 100%), url("/images/individuals_hero.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(2, 132, 199, 0.3)', border: '1px solid rgba(2, 132, 199, 0.5)', padding: '0.4rem 1rem', borderRadius: '30px', marginBottom: '1.5rem' }}>
              <Users size={16} color="#38bdf8" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e0f2fe' }}>
                For Individuals & Families
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '850px' }}>
              Immigration Services for Individuals and Families
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.7, maxWidth: '800px', margin: 0 }}>
              Vebhor helps individuals and families navigate the complexities of immigration, residency and citizenship worldwide.
            </p>
          </div>
        </section>

        {/* 3. Main Individuals Paragraph Content */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '4rem 3.5rem',
                border: '1px solid #cbd5e1',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
              }}
            >
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0284c7', marginBottom: '1.25rem', lineHeight: 1.2 }}>
                Global Immigration & Residency Guidance
              </h2>
              
              <p style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0284c7', marginBottom: '1.75rem', lineHeight: 1.5 }}>
                Vebhor helps individuals and families navigate the complexities of immigration, residency and citizenship worldwide.
              </p>
              
              <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.85, margin: 0 }}>
                Immigration involves more than securing a visa—it shapes where you and your family will live, work and build your future. We provide clear, strategic guidance and practical support at every stage of the immigration journey, from assessing your options and preparing accurate applications to liaising with government authorities and managing the process through to a successful outcome.
              </p>
            </div>

            {/* EXPLORE IMMIGRATION SOLUTIONS - 4 CARDS (MATCHING USER SCREENSHOT EXACTLY) */}
            <div style={{ marginTop: '2.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
                  EXPLORE IMMIGRATION SOLUTIONS
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', alignItems: 'start' }}>
                
                {/* Column 1 (Left Column Stack) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Card 1: LONG TERM RESIDENCY */}
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1.5px solid #4338ca', overflow: 'hidden', boxShadow: '0 6px 20px rgba(67, 56, 202, 0.08)' }}>
                    <div style={{ backgroundColor: '#4338ca', color: '#ffffff', padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '0.04em', color: '#ffffff' }}>
                        LONG TERM RESIDENCY
                      </h3>
                    </div>
                    <div style={{ padding: '1.25rem 1.35rem 1.5rem' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: '#64748b', textAlign: 'center', margin: '0 0 1rem 0', lineHeight: 1.4, paddingBottom: '0.85rem', borderBottom: '1px solid #e2e8f0' }}>
                        For individuals building a pathway towards settlement and long-term residence
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                          'Students & Graduates',
                          'Global Talent & Exceptional Ability',
                          'Entrepreneurs & Business Owners',
                          'Skilled Workers & Employment-Based',
                          'Athletes & Creatives',
                          'Retirees & Independently Wealthy'
                        ].map((item, idx) => (
                          <div key={idx} style={{ padding: '0.7rem 0', borderBottom: idx < 5 ? '1px solid #f1f5f9' : 'none', color: '#0f172a', fontWeight: 600, fontSize: '0.94rem' }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card 3: FAMILY MIGRATION */}
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1.5px solid #2563eb', overflow: 'hidden', boxShadow: '0 6px 20px rgba(37, 99, 235, 0.08)' }}>
                    <div style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '0.04em', color: '#ffffff' }}>
                        FAMILY MIGRATION
                      </h3>
                    </div>
                    <div style={{ padding: '1.25rem 1.35rem 1.5rem' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: '#64748b', textAlign: 'center', margin: '0 0 1rem 0', lineHeight: 1.4, paddingBottom: '0.85rem', borderBottom: '1px solid #e2e8f0' }}>
                        For families relocating or reuniting across borders
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                          'Spouses, Partners & Fiancés',
                          'Children',
                          'Extended Family Members'
                        ].map((item, idx) => (
                          <div key={idx} style={{ padding: '0.7rem 0', borderBottom: idx < 2 ? '1px solid #f1f5f9' : 'none', color: '#0f172a', fontWeight: 600, fontSize: '0.94rem' }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Column 2 (Right Column Stack) */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Card 2: SHORT TERM STAY */}
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1.5px solid #9333ea', overflow: 'hidden', boxShadow: '0 6px 20px rgba(147, 51, 234, 0.08)' }}>
                    <div style={{ backgroundColor: '#9333ea', color: '#ffffff', padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '0.04em', color: '#ffffff' }}>
                        SHORT TERM STAY
                      </h3>
                    </div>
                    <div style={{ padding: '1.25rem 1.35rem 1.5rem' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: '#64748b', textAlign: 'center', margin: '0 0 1rem 0', lineHeight: 1.4, paddingBottom: '0.85rem', borderBottom: '1px solid #e2e8f0' }}>
                        Short-term entry options for travel, work or remote mobility
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                          'Visitors (Tourism & Family Visits)',
                          'Digital Nomads',
                          'Domestic Workers',
                          'Temporary Residence Permits'
                        ].map((item, idx) => (
                          <div key={idx} style={{ padding: '0.7rem 0', borderBottom: idx < 3 ? '1px solid #f1f5f9' : 'none', color: item === 'Digital Nomads' ? '#0284c7' : '#0f172a', fontWeight: 600, fontSize: '0.94rem' }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card 4: PERMANENT RESIDENCY & CITIZENSHIP */}
                  <div style={{ backgroundColor: '#ffffff', borderRadius: '10px', border: '1.5px solid #ef4444', overflow: 'hidden', boxShadow: '0 6px 20px rgba(239, 68, 68, 0.08)' }}>
                    <div style={{ backgroundColor: '#ef4444', color: '#ffffff', padding: '1.1rem 1rem', textAlign: 'center' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, letterSpacing: '0.04em', color: '#ffffff' }}>
                        PERMANENT RESIDENCY & CITIZENSHIP
                      </h3>
                    </div>
                    <div style={{ padding: '1.25rem 1.35rem 1.5rem' }}>
                      <p style={{ fontStyle: 'italic', fontSize: '0.94rem', color: '#64748b', textAlign: 'center', margin: '0 0 1rem 0', lineHeight: 1.4, paddingBottom: '0.85rem', borderBottom: '1px solid #e2e8f0' }}>
                        For those relocating on a long-term or generational basis
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {[
                          'Permanent Residency',
                          'Citizenship by Naturalization',
                          'Citizenship by Marriage',
                          'Citizenship by Descent/Ancestry'
                        ].map((item, idx) => (
                          <div key={idx} style={{ padding: '0.7rem 0', borderBottom: idx < 3 ? '1px solid #f1f5f9' : 'none', color: item === 'Citizenship by Descent/Ancestry' ? '#0284c7' : '#0f172a', fontWeight: 600, fontSize: '0.94rem' }}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 4. Contact Form Section */}
        <div id="contact-form-section">
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
