import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage({ onBackHome, onNavCareers, onNavAbout, onNavServices, onNavPartners, onNavInsights, onNavChallengeUs, onNavAdmin, isAdminLoggedIn, onAdminLogout }) {
  // Offices Data
  const officeLocations = [
    { city: 'Sydney', address: 'Level 4, 10 Shelley Street, Sydney, NSW 2000' },
    { city: 'Brisbane', address: '144 Montague Road, South Brisbane QLD 4101, Australia' },
    { city: 'Melbourne', address: 'Tower 5, Level 19, 727 Collins St, Docklands VIC 3008' },
    { city: 'Canberra', address: 'Level 9, 121 Marcus Clarke Street, Canberra ACT 2601' },
    { city: 'Adelaide', address: 'Level 12, 115 Grenfell Street, Adelaide SA 5000, Australia' },
    { city: 'Perth', address: 'Level 3, 182 St Georges Terrace, Perth WA 6000, Australia' },
    { city: 'Darwin', address: 'Suite 2, Level 8 11 Cavenagh Street, Darwin, Australia' }
  ];

  const openLinkedIn = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Top Navbar */}
      <Navbar
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
        {/* HERO BANNER */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#0b132b',
            backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.85) 0%, rgba(11, 19, 43, 0.70) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '6rem 2rem 5rem',
            minHeight: '340px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
              Contact us
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#e2e8f0', fontWeight: 500 }}>
              Get in touch with our team
            </p>
          </div>
        </section>

        {/* PRIMARY CONTACT FORM SECTION ("Send us an Enquiry") */}
        <ContactSection
          title="Send us an Enquiry"
          subtitle="Fill out the form below and a Vebhor representative will contact you shortly."
        />

        {/* OFFICES GRID SECTION */}
        <section style={{ backgroundColor: '#001938', color: '#ffffff', padding: '5rem 2rem 6rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#00a8e8', marginBottom: '3.5rem' }}>
              Offices
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5rem 4rem' }}>
              {officeLocations.map((office, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                    {office.city}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <MapPin size={18} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} />
                    <span>{office.address}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHONE, EMAIL & SOCIAL MEDIA BAR */}
        <section style={{ backgroundColor: '#ffffff', padding: '4rem 2rem 5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                backgroundColor: '#001b3a',
                color: '#ffffff',
                padding: '2.5rem 3rem',
                borderRadius: '0 40px 0 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem'
              }}
            >
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>
                Phone, Email, and Social media
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Phone size={18} style={{ color: '#38bdf8' }} />
                  <span>1300 804 879</span>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <Mail size={18} style={{ color: '#38bdf8' }} />
                  <a href="mailto:contactus@vebhor.com" style={{ color: '#ffffff', textDecoration: 'none' }}>contactus@vebhor.com</a>
                </div>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <div
                  onClick={() => openLinkedIn('https://www.linkedin.com')}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '22px', height: '22px', borderRadius: '4px', backgroundColor: '#38bdf8', color: '#001b3a', fontWeight: 900, fontSize: '0.75rem' }}>
                    in
                  </span>
                  <span>LinkedIn</span>
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
