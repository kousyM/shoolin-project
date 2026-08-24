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
      iconBg: '#f3e8ff',
      iconColor: '#6C5CE7'
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
      iconBg: '#fae8ff',
      iconColor: '#a855f7'
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
      iconBg: '#ede9fe',
      iconColor: '#7c3aed'
    }
  ];

  return (
    <div style={{ backgroundColor: 'rgb(6, 13, 31)', color: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
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
            backgroundColor: 'rgb(6, 13, 31)',
            color: '#ffffff',
            padding: '7rem 2rem 5rem',
            backgroundImage: 'linear-gradient(180deg, rgba(6, 13, 31, 0.8) 0%, rgba(6, 13, 31, 0.98) 100%), url("/images/slider_1.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(2, 132, 199, 0.2)', border: '1px solid rgba(56, 189, 248, 0.4)', padding: '0.4rem 1rem', borderRadius: '30px', marginBottom: '1.5rem' }}>
              <Building2 size={16} color="#38bdf8" />
              <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e0f2fe' }}>
                For Employers
              </span>
            </div>

            <h1 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.15, marginBottom: '1.5rem', maxWidth: '850px' }}>
              Corporate Immigration & Workforce Solutions for Employers
            </h1>
            
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '800px', margin: 0 }}>
              World-class corporate immigration services, compliance management, and strategic technology to help you optimize your immigration operations and scale global teams seamlessly.
            </p>
          </div>
        </section>

        {/* 3. 11 Employer Services Grid */}
        <section style={{ padding: '6rem 2rem', backgroundColor: 'rgb(6, 13, 31)', position: 'relative' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#ffffff',
                  backgroundColor: '#6C5CE7',
                  padding: '0.4rem 1.4rem',
                  borderRadius: '18px 24px 24px 18px',
                  display: 'inline-block',
                  marginBottom: '1rem',
                  boxShadow: '0 4px 14px rgba(108, 92, 231, 0.4)'
                }}
              >
                OUR WORKFORCE PORTFOLIO
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                Our Employer Services
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#94a3b8', maxWidth: '720px', margin: '0 auto', lineHeight: 1.7 }}>
                From business visas and work permits to compliance and litigation, we support your entire global workforce mobility lifecycle.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
              {employerServices.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    border: '1.5px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '2.2rem 1.85rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.25)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = 'rgba(108, 92, 231, 0.5)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 25px rgba(108, 92, 231, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.25)';
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
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.96rem', color: '#94a3b8', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Contact Form Section */}
        <div id="contact-form-section" style={{ backgroundColor: 'rgb(6, 13, 31)' }}>
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
