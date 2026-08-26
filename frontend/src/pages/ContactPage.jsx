import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail, Globe, Building2, Sparkles } from 'lucide-react';

export default function ContactPage({
  onBackHome,
  onNavCareers,
  onNavAbout,
  onNavServices,
  onNavPartners,
  onNavInsights,
  onNavChallengeUs,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) {
  // Offices Data matching the Home Page Global Presence
  const officeLocations = [
    {
      country: 'AUSTRALIA',
      region: 'Headquarters & APAC Hub',
      address: 'Sydney & Melbourne, Australia',
      description: 'Enterprise workforce solutions, EOR, and executive search across Australia.',
      badge: 'TOP CLASS SERVICES',
      imageUrl: '/images/country_sydney.jpg'
    },
    {
      country: 'NEW ZEALAND',
      region: 'Oceania Hub',
      address: 'Auckland & Wellington, New Zealand',
      description: 'Collaborating with government and private enterprise firms across New Zealand.',
      badge: 'TOP CLASS SERVICES',
      imageUrl: '/images/country_melbourne.jpg'
    },
    {
      country: 'SINGAPORE',
      region: 'Southeast Asia Hub',
      address: 'Marina Bay / Central, Singapore',
      description: 'Cross-border mobility, digital experience, and regional talent operations.',
      badge: 'TOP CLASS SERVICES',
      imageUrl: '/images/country_singapore.jpg'
    },
    {
      country: 'INDIA',
      region: 'Global Capability Centres (GCC)',
      address: 'Bangalore & NCR, India',
      description: 'High-performing technology delivery teams and scalable capability centres.',
      badge: 'TOP CLASS SERVICES',
      imageUrl: '/images/country_india.jpg'
    },
    {
      country: 'EUROPE',
      region: 'EMEA Enterprise Hub',
      address: 'London & European Metros',
      description: 'Comprehensive workforce management, payroll compliance, and mobility across Europe.',
      badge: 'TOP CLASS SERVICES',
      imageUrl: '/images/country_brisbane.jpg'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Top Navbar */}
      <Navbar
        activePage="contact"
        onNavHome={onBackHome}
        onNavServices={onNavServices}
        onNavCareers={onNavCareers}
        onNavAbout={onNavAbout}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={() => window.scrollTo(0, 0)}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main>
        {/* HERO BANNER WITH CLEAN LIGHT OVERLAY */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#ffffff',
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 250, 252, 0.98) 100%), url('/images/slider_3.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#0f172a',
            padding: '7rem 2rem 5rem',
            minHeight: '360px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#ffffff',
                background: 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)',
                padding: '0.4rem 1.1rem',
                borderRadius: '50px',
                fontSize: '0.82rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                marginBottom: '1.25rem',
                boxShadow: '0 4px 14px rgba(0, 92, 253, 0.4)'
              }}
            >
              <Sparkles size={14} />
              <span>LET'S CONNECT</span>
            </div>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Get in touch with our team
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#64748b', fontWeight: 400, maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
              Whether you are scaling global teams, seeking immigration support, or exploring enterprise solutions, we are here to help.
            </p>
          </div>
        </section>

        {/* PRIMARY CONTACT FORM SECTION */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <ContactSection
            title="Send us an Enquiry"
            subtitle="Fill out the form below and a Vebhor representative will contact you shortly."
          />
        </div>

        {/* GLOBAL OFFICES / HUBS SECTION (MATCHING HOME PAGE) */}
        <section style={{ backgroundColor: '#f8fafc', color: '#0f172a', padding: '5.5rem 1.5rem 6.5rem', position: 'relative', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)',
                  padding: '0.35rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.85rem',
                  boxShadow: '0 4px 14px rgba(0, 92, 253, 0.4)'
                }}
              >
                <Globe size={14} />
                <span>GLOBAL PRESENCE</span>
              </div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
                Our Global Offices & Hubs
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
                Delivering seamless workforce transformation and technology services across 5 major international regions.
              </p>
            </div>

            {/* 5 Global Hub Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
              {officeLocations.map((office, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '20px',
                    padding: '2rem 1.6rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
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
                  <div>
                    {/* Top Region Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: '#005CFD',
                          backgroundColor: '#eff6ff',
                          border: '1px solid #bfdbfe',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {office.badge}
                      </span>
                      <Globe size={18} style={{ color: '#64748b' }} />
                    </div>

                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                      {office.country}
                    </h3>

                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#005CFD', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <MapPin size={14} style={{ flexShrink: 0 }} />
                      <span>{office.address}</span>
                    </div>

                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                      {office.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHONE, EMAIL & SOCIAL MEDIA BAR */}
        <section style={{ backgroundColor: '#f8fafc', padding: '0 1.5rem 6rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1.5px solid #e2e8f0',
                color: '#0f172a',
                padding: '2.5rem 3rem',
                borderRadius: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.75rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#005CFD', display: 'block', marginBottom: '0.4rem' }}>
                  DIRECT CHANNELS
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  Phone, Email & Social Media
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', color: '#0f172a', fontSize: '1rem', fontWeight: 600 }}>
                {/* Phone */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#005CFD', border: '1px solid #bfdbfe' }}>
                    <Phone size={18} />
                  </div>
                  <a href="tel:+61466048975" style={{ color: '#0f172a', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 700 }} onMouseEnter={(e) => e.currentTarget.style.color = '#005CFD'} onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
                    +61 466 048 975
                  </a>
                </div>

                <span style={{ color: '#cbd5e1' }}>|</span>

                {/* Email */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#005CFD', border: '1px solid #bfdbfe' }}>
                    <Mail size={18} />
                  </div>
                  <a href="mailto:info@vebhor.com" style={{ color: '#0f172a', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 700 }} onMouseEnter={(e) => e.currentTarget.style.color = '#005CFD'} onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}>
                    info@vebhor.com
                  </a>
                </div>

                <span style={{ color: '#cbd5e1' }}>|</span>

                {/* Social Icons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/vebhor/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#005CFD', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                    aria-label="LinkedIn"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#005CFD'; e.currentTarget.style.color = '#ffffff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#005CFD'; }}
                  >
                    <span style={{ fontWeight: 900, fontSize: '0.85rem' }}>in</span>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/vebhor_aus/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ec4899', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                    aria-label="Instagram"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#ec4899'; e.currentTarget.style.color = '#ffffff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#ec4899'; }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=61593392762903&sk=directory_personal_details"
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#ffffff', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1877f2', textDecoration: 'none', transition: 'all 0.2s ease', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}
                    aria-label="Facebook"
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1877f2'; e.currentTarget.style.color = '#ffffff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.color = '#1877f2'; }}
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.63 13.78 5.63c1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={() => window.scrollTo(0, 0)} onNavAdmin={onNavAdmin} />
    </div>
  );
}


