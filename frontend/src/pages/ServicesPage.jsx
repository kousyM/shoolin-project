import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DeelServicesSubpage } from '../components/DeelServicesSubpage';
import { PartnersSection } from '../components/PartnersSection';
import { DriveCareerBanner } from '../components/DriveCareerBanner';
import { ContactSection } from '../components/ContactSection';
import { ArrowRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

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
            backgroundColor: '#060A14',
            backgroundImage: `linear-gradient(135deg, rgba(6, 10, 20, 0.94) 0%, rgba(8, 21, 47, 0.88) 100%), url('/images/hero_cyber_network.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '6.5rem 2rem 5.5rem 2rem',
            textAlign: 'left',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Subtle Ambient Radial Light */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              left: '25%',
              width: '700px',
              height: '380px',
              background: 'radial-gradient(circle, rgba(108, 92, 231, 0.22) 0%, rgba(56, 189, 248, 0.12) 50%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }}
          />

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
                  backgroundColor: '#6C5CE7',
                  padding: '0.4rem 1.4rem',
                  borderRadius: '18px 24px 24px 18px',
                  display: 'inline-block',
                  boxShadow: '0 4px 18px rgba(108, 92, 231, 0.4)'
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
                color: '#ffffff',
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
                color: '#cbd5e1',
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
                  backgroundColor: '#6C5CE7',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 4px 18px rgba(108, 92, 231, 0.45)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 22px rgba(108, 92, 231, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(108, 92, 231, 0.45)';
                }}
              >
                <span>Explore Solutions</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={onOpenContactPage}
                style={{
                  padding: '0.85rem 2rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
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
