import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DeelServicesSubpage } from '../components/DeelServicesSubpage';
import { PartnersSection } from '../components/PartnersSection';
import { DriveCareerBanner } from '../components/DriveCareerBanner';
import { ContactSection } from '../components/ContactSection';
import { ArrowRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

const BRAND_GRADIENT = 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)';
const BRAND_SHADOW = '0 4px 18px rgba(0, 92, 253, 0.45)';

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
        {/* 1. TOP HERO HEADER BANNER */}
        {/* ============================================================ */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.94) 0%, rgba(248, 250, 252, 0.88) 100%), url('/images/nature_banner_2.jpg?v=2026')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#0f172a',
            padding: '6.5rem 2rem 5.5rem 2rem',
            textAlign: 'left',
            overflow: 'hidden',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Tag Badge */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span
                style={{
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.14em',
                  color: '#ffffff',
                  background: BRAND_GRADIENT,
                  padding: '0.4rem 1.4rem',
                  borderRadius: '18px 24px 24px 18px',
                  display: 'inline-block',
                  boxShadow: BRAND_SHADOW
                }}
              >
                OUR SERVICES & SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.15,
                marginBottom: '1.5rem',
                maxWidth: '920px',
                letterSpacing: '-0.02em'
              }}
            >
              End-to-End Workforce, Mobility & Technology Services
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: '1.2rem',
                color: '#64748b',
                lineHeight: 1.7,
                maxWidth: '820px',
                margin: '0 0 2.25rem 0'
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
                  padding: '0.85rem 2rem',
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
                  boxShadow: BRAND_SHADOW,
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(0, 92, 253, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = BRAND_SHADOW;
                }}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenContactPage}
                style={{
                  padding: '0.85rem 2rem',
                  backgroundColor: '#f8fafc',
                  color: '#0f172a',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  border: '1.5px solid #e2e8f0',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#eff6ff';
                  e.currentTarget.style.borderColor = '#005CFD';
                  e.currentTarget.style.color = '#005CFD';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.color = '#0f172a';
                }}
              >
                Talk to an Expert
              </button>
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
