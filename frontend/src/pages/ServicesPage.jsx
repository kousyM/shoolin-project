import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DeelServicesSubpage } from '../components/DeelServicesSubpage';
import { PartnersSection } from '../components/PartnersSection';
import { DriveCareerBanner } from '../components/DriveCareerBanner';
import { ContactSection } from '../components/ContactSection';
import { ArrowRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

const BRAND_GRADIENT = 'linear-gradient(135deg, #E11D48 0%, #BE123C 100%)';
const BRAND_SHADOW = '0 4px 18px rgba(2, 41, 176, 0.45)';

export const ServicesPage = ({
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

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        activePage="services"
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* ============================================================ */}
        {/* 1. TOP HERO HEADER BANNER (SIGNATURE LINES & ANGLED CUTOUT) */}
        {/* ============================================================ */}
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
          {/* Angled Cutout Services Photo Container */}
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
              src="/images/services_banner_v2.png"
              alt="Our Services"
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
                    background: BRAND_GRADIENT,
                    padding: '0.35rem 1.25rem',
                    borderRadius: '50px',
                    display: 'inline-block',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.25)'
                  }}
                >
                  OUR SERVICES & SOLUTIONS
                </span>
              </div>

              {/* Main Headline */}
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
                End-to-End Workforce, Mobility & Technology Services
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: 'clamp(1rem, 1.25vw, 1.15rem)',
                  color: '#334155',
                  lineHeight: 1.65,
                  margin: '0 0 2rem 0',
                  fontWeight: 450
                }}
              >
                From outcome-based delivery and corporate immigration to global employment, digital experience, and managed IT services—everything you need to scale effortlessly across borders.
              </p>

              {/* Quick Action CTAs */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    const el = document.getElementById('services-tabs-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    padding: '0.85rem 2.2rem',
                    background: BRAND_GRADIENT,
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
                  <span>Get in Touch</span>
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* STANDALONE SERVICES PAGE WITH ALL TABS & SINGLE BOX DETAILS */}
        <DeelServicesSubpage onOpenContactPage={onOpenContactPage} />

        {/* MEET OUR PARTNERS SECTION */}
        <PartnersSection onNavPartners={onNavPartners} />

        {/* DRIVE YOUR CAREER FORWARD BANNER */}
        <DriveCareerBanner onNavCareers={onNavCareers} />

        {/* GET ANSWERS TO YOUR QUESTIONS CONTACT FORM */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default ServicesPage;
