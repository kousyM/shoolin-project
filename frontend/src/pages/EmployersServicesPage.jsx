import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, ShieldCheck, Globe, Building2, Briefcase, FileText, Award } from 'lucide-react';

const EmployersServicesPage = ({
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

  const employerServices = [
    {
      title: 'Business Visa Services and Technology',
      desc: 'Guidance, support and technology to help you get your business travelers on the ground quickly and compliantly.'
    },
    {
      title: 'Connecting Employers with Skilled Displaced Individuals',
      desc: 'Assistance with integrating displaced individuals into your talent pipeline.'
    },
    {
      title: 'Consular Services',
      desc: 'Personalized support to help ease the burden of complex immigration consular processing.'
    },
    {
      title: 'Corporate Immigration Program Development',
      desc: 'World-class corporate immigration services to help you optimize your immigration operations.'
    },
    {
      title: 'Document Services',
      desc: 'Proactive planning and on-the-ground support to streamline the immigration document process.'
    },
    {
      title: 'Immigration Analytics, Benchmarking and Knowledge',
      desc: 'Robust resources to help you understand immigration in a changing world.'
    },
    {
      title: 'Immigration Compliance Services',
      desc: 'Experienced guidance to help manage your most complicated immigration activities and maximize your compliance.'
    },
    {
      title: 'Immigration Litigation Services',
      desc: 'Experienced, skilled immigration litigation to help you resolve complex situations.'
    },
    {
      title: 'Immigration Work Permit Services',
      desc: 'Comprehensive, end-to-end immigration services and technology to help streamline business immigration.'
    },
    {
      title: 'Private-Client Services',
      desc: 'Sound, holistic alternative residency and citizenship solutions to help you seize your opportunities.'
    },
    {
      title: 'Remote Work Strategic Services for Employers',
      desc: 'As the world moves forward from the pandemic, some companies are calling employees back to the office full-time, while others are implementing or formalizing hybrid work schedules.'
    }
  ];

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
            backgroundImage: 'linear-gradient(135deg, rgba(0,24,56,0.95) 0%, rgba(2,132,199,0.8) 100%), url("/images/slider_1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(2, 132, 199, 0.3)', border: '1px solid rgba(2, 132, 199, 0.5)', padding: '0.4rem 1rem', borderRadius: '30px', marginBottom: '1.5rem' }}>
              <Building2 size={16} color="#38bdf8" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e0f2fe' }}>
                For Employers
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '850px' }}>
              Corporate Immigration & Workforce Solutions for Employers
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: '#cbd5e1', lineHeight: 1.7, maxWidth: '800px', margin: 0 }}>
              World-class corporate immigration services, compliance management, and strategic technology to help you optimize your immigration operations and scale global teams seamlessly.
            </p>
          </div>
        </section>

        {/* 3. 11 Employer Services Grid */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0284c7', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Our Employer Services
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '700px', margin: '0 auto' }}>
                From business visas and work permits to compliance and litigation, we support your entire global workforce mobility lifecycle.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {employerServices.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    padding: '2.25rem 2.5rem',
                    border: '1px solid #e2e8f0',
                    borderLeft: '5px solid #0284c7',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.04)',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0284c7', marginBottom: '0.85rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
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

export default EmployersServicesPage;
