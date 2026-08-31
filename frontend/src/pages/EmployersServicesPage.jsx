import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Globe,
  Building2,
  Briefcase,
  FileText,
  Award,
  Users,
  BarChart3,
  Scale,
  FileCheck,
  Compass,
  Laptop,
  Plane
} from 'lucide-react';

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
      desc: 'Guidance, support and technology to help you get your business travelers on the ground quickly and compliantly.',
      icon: <Plane size={26} />,
      iconBg: '#e0f2fe',
      iconColor: '#0284c7'
    },
    {
      title: 'Connecting Employers with Skilled Displaced Individuals',
      desc: 'Assistance with integrating displaced individuals into your talent pipeline.',
      icon: <Users size={26} />,
      iconBg: '#cffafe',
      iconColor: '#0891b2'
    },
    {
      title: 'Consular Services',
      desc: 'Personalized support to help ease the burden of complex immigration consular processing.',
      icon: <Building2 size={26} />,
      iconBg: '#dcfce7',
      iconColor: '#16a34a'
    },
    {
      title: 'Corporate Immigration Program Development',
      desc: 'World-class corporate immigration services to help you optimize your immigration operations.',
      icon: <Award size={26} />,
      iconBg: '#fef3c7',
      iconColor: '#d97706'
    },
    {
      title: 'Document Services',
      desc: 'Proactive planning and on-the-ground support to streamline the immigration document process.',
      icon: <FileText size={26} />,
      iconBg: '#fee2e2',
      iconColor: '#dc2626'
    },
    {
      title: 'Immigration Analytics, Benchmarking and Knowledge',
      desc: 'Robust resources to help you understand immigration in a changing world.',
      icon: <BarChart3 size={26} />,
      iconBg: '#e0e7ff',
      iconColor: '#4f46e5'
    },
    {
      title: 'Immigration Compliance Services',
      desc: 'Experienced guidance to help manage your most complicated immigration activities and maximize your compliance.',
      icon: <ShieldCheck size={26} />,
      iconBg: '#ccfbf1',
      iconColor: '#0d9488'
    },
    {
      title: 'Immigration Litigation Services',
      desc: 'Experienced, skilled immigration litigation to help you resolve complex situations.',
      icon: <Scale size={26} />,
      iconBg: '#d1fae5',
      iconColor: '#059669'
    },
    {
      title: 'Immigration Work Permit Services',
      desc: 'Comprehensive, end-to-end immigration services and technology to help streamline business immigration.',
      icon: <FileCheck size={26} />,
      iconBg: '#ecfdf5',
      iconColor: '#059669'
    },
    {
      title: 'Private-Client Services',
      desc: 'Sound, holistic alternative residency and citizenship solutions to help you seize your opportunities.',
      icon: <Compass size={26} />,
      iconBg: '#fef9c3',
      iconColor: '#ca8a04'
    },
    {
      title: 'Remote Work Strategic Services for Employers',
      desc: 'As the world moves forward, assist companies implementing or formalizing global remote and hybrid work schedules with full immigration alignment.',
      icon: <Laptop size={26} />,
      iconBg: '#eff6ff',
      iconColor: 'rgb(2, 41, 176)'
    }
  ];

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
          {/* Angled Cutout Employer Photo Container */}
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
              src="/images/team_collaboration.jpg"
              alt="Employer Workforce Solutions"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 25%'
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
                  FOR EMPLOYERS
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
                Corporate Immigration & Workforce Solutions
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
                World-class corporate immigration services, compliance management, and strategic technology to help you optimize your immigration operations and scale global teams seamlessly.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('employer-portfolio-section');
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
                  <span>Explore Services</span>
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
                  <span>Talk to an Expert</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* 3. 11 Employer Services Grid */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#f8fafc', position: 'relative', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
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
                OUR WORKFORCE PORTFOLIO
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Our Employer Services
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '720px', margin: '0 auto', lineHeight: 1.7 }}>
                From business visas and work permits to compliance and litigation, we support your entire global workforce mobility lifecycle.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
              {employerServices.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2.2rem 1.85rem',
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
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: item.iconBg,
                      color: item.iconColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.35rem'
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: '#64748b', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
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

export default EmployersServicesPage;
