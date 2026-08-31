import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import { MapPin, Phone, Mail, Globe, Building2, Sparkles, ArrowRight, Plus, Minus } from 'lucide-react';

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
  const [hoveredCardIndex, setHoveredCardIndex] = useState(2); // Singapore active by default matching reference
  const [activeAccordion, setActiveAccordion] = useState(null); // Closed by default when page opens

  const accordionItems = [
    {
      id: 'request-service',
      title: 'Request for Service',
      description: 'Get in touch to learn more about our solutions and services tailored to help enterprises Scale at Speed.',
      buttons: [
        {
          label: 'REQUEST FOR SERVICES',
          action: () => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      ]
    },
    {
      id: 'join-vebhor',
      title: 'Join Vebhor',
      description: 'Discover exciting career opportunities and apply now through our dedicated career portal.',
      buttons: [
        {
          label: 'EXPLORE CAREERS',
          action: () => {
            if (onNavCareers) {
              onNavCareers();
              setTimeout(() => {
                const el = document.getElementById('post-resume-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }
          }
        },
        {
          label: 'APPLY NOW',
          action: () => {
            if (onNavCareers) {
              onNavCareers();
              setTimeout(() => {
                const el = document.getElementById('post-resume-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }
          }
        }
      ]
    },
    {
      id: 'vendor-registration',
      title: 'Vendor Registration',
      description: 'Be part of our expansive and trusted supplier network.',
      buttons: [
        {
          label: 'SUBMIT A PROPOSAL',
          action: () => {
            if (onNavPartners) {
              onNavPartners('vendor');
              setTimeout(() => {
                const el = document.getElementById('vendor-registration-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 150);
            }
          }
        }
      ]
    }
  ];

  // Offices Data matching the User's Reference Image
  const officeLocations = [
    {
      country: 'AUSTRALIA',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across Australia.',
      imageUrl: '/images/country_sydney.jpg'
    },
    {
      country: 'NEW ZEALAND',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across New Zealand.',
      imageUrl: '/images/country_melbourne.jpg'
    },
    {
      country: 'SINGAPORE',
      badge: 'TOP CLASS SERVICES',
      description: 'We are soon offering job opportunities from the government and private firms across Singapore.',
      imageUrl: '/images/country_singapore.jpg'
    },
    {
      country: 'INDIA',
      badge: 'TOP CLASS SERVICES',
      description: 'We collaborate with many government and private firms to offer the best job opportunities across India.',
      imageUrl: '/images/country_india.jpg'
    },
    {
      country: 'EUROPE',
      badge: 'TOP CLASS SERVICES',
      description: 'We are now happily providing workforce & enterprise solutions across Europe.',
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
        {/* ============================================================ */}
        {/* 1. HERO BANNER: CONTACT US (SIGNATURE LINES & ANGLED CUTOUT) */}
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
          {/* Angled Cutout Contact Photo Container */}
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
              src="/images/contact_banner_v2.jpeg"
              alt="Get in touch"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>

          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 3 }}>
            <div style={{ maxWidth: '640px' }}>

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
                  LET'S CONNECT
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.45rem)',
                  fontWeight: 800,
                  color: '#0a1128',
                  marginBottom: '0.85rem',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                Get in touch with our team
              </h1>
              <p
                style={{
                  fontSize: 'clamp(0.98rem, 1.2vw, 1.12rem)',
                  color: '#334155',
                  fontWeight: 450,
                  margin: 0,
                  lineHeight: 1.65,
                  maxWidth: '560px'
                }}
              >
                Whether you are scaling global teams, seeking immigration support, or exploring enterprise solutions, we are here to help.
              </p>
            </div>
          </div>
        </section>

        {/* 2. ACCORDION / DIRECTORY SECTION (REFER IMAGES 2, 3, 4) */}
        <section
          style={{
            backgroundColor: '#f6f5f0',
            padding: '5rem 2rem',
            borderBottom: '1px solid #e2ddd3'
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {accordionItems.map((item, idx) => {
              const isOpen = activeAccordion === idx;
              return (
                <div
                  key={item.id}
                  style={{
                    borderTop: '1px solid #cfc8ba',
                    borderBottom: idx === accordionItems.length - 1 ? '1px solid #cfc8ba' : 'none',
                    padding: '2.2rem 0',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div
                    onClick={() => setActiveAccordion(prev => prev === idx ? null : idx)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      userSelect: 'none'
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(1.6rem, 2.6vw, 2rem)',
                        fontWeight: 600,
                        color: '#111827',
                        margin: 0,
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {item.title}
                    </h2>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        color: '#111827',
                        cursor: 'pointer'
                      }}
                    >
                      {isOpen ? <Minus size={30} strokeWidth={1.5} /> : <Plus size={30} strokeWidth={1.5} />}
                    </div>
                  </div>

                  {/* Accordion Expandable Content */}
                  {isOpen && (
                    <div
                      style={{
                        marginTop: '1.5rem',
                        paddingRight: '2rem',
                        animation: 'fadeIn 0.3s ease'
                      }}
                    >
                      <p
                        style={{
                          fontSize: '1.08rem',
                          color: '#334155',
                          lineHeight: 1.65,
                          maxWidth: '850px',
                          margin: '0 0 1.85rem 0'
                        }}
                      >
                        {item.description}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                        {item.buttons.map((btn, bIdx) => (
                          <button
                            key={bIdx}
                            onClick={btn.action}
                            style={{
                              background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                              color: '#ffffff',
                              border: 'none',
                              padding: '0.95rem 1.95rem',
                              fontSize: '0.82rem',
                              fontWeight: 800,
                              letterSpacing: '0.09em',
                              textTransform: 'uppercase',
                              cursor: 'pointer',
                              borderRadius: '4px',
                              boxShadow: '0 4px 16px rgba(2, 41, 176, 0.35)',
                              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = '0 8px 24px rgba(2, 41, 176, 0.5)';
                              e.currentTarget.style.filter = 'brightness(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = '0 4px 16px rgba(2, 41, 176, 0.35)';
                              e.currentTarget.style.filter = 'brightness(1)';
                            }}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. PRIMARY CONTACT FORM SECTION */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <ContactSection
            title="Send us an Enquiry"
            subtitle="Fill out the form below and a Vebhor representative will contact you shortly."
          />
        </div>

        {/* 4. GLOBAL OFFICES / HUBS SECTION (MATCHING HOME PAGE) */}
        <section style={{ backgroundColor: '#f8fafc', color: '#0f172a', padding: '4rem 1.5rem 5.5rem', position: 'relative', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 0.85rem 0' }}>
                Our Global Offices & Hubs
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '620px', margin: '0 auto', lineHeight: 1.6 }}>
                Delivering seamless workforce transformation and technology services across 5 major international regions.
              </p>
            </div>

            {/* 5 Country Presence Cards matching reference image */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {officeLocations.map((office, idx) => {
                const isSelected = hoveredCardIndex === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredCardIndex(idx)}
                    onClick={() => setHoveredCardIndex(idx)}
                    style={{
                      minHeight: '400px',
                      borderRadius: '22px',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '2.2rem 1.4rem 1.6rem 1.4rem',
                      backgroundImage: `url(${office.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      border: isSelected ? '2.5px solid rgb(40, 129, 251)' : '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: isSelected
                        ? '0 20px 42px rgba(2, 41, 176, 0.45)'
                        : '0 8px 24px rgba(0, 0, 0, 0.12)',
                      transform: isSelected ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      cursor: 'pointer'
                    }}
                  >
                    {/* Background Gradient Overlay */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: isSelected
                          ? 'linear-gradient(180deg, rgba(2, 41, 176, 0.82) 0%, rgba(40, 129, 251, 0.52) 45%, rgba(2, 41, 176, 0.96) 100%)'
                          : 'linear-gradient(180deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.15) 35%, rgba(15, 23, 42, 0.92) 100%)',
                        zIndex: 1,
                        transition: 'background 0.4s ease'
                      }}
                    />

                    {/* Card Content Top */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          color: isSelected ? '#dbeafe' : 'rgba(255, 255, 255, 0.75)',
                          display: 'block',
                          marginBottom: '0.5rem',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {office.badge}
                      </span>
                      <h3
                        style={{
                          fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                          fontSize: '1.65rem',
                          fontWeight: 800,
                          color: '#ffffff',
                          textTransform: 'uppercase',
                          letterSpacing: '0.02em',
                          margin: 0,
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)'
                        }}
                      >
                        {office.country}
                      </h3>
                    </div>

                    {/* Card Content Bottom */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <p
                        style={{
                          fontSize: '0.88rem',
                          color: '#f8fafc',
                          lineHeight: 1.55,
                          margin: '0 0 1.25rem 0',
                          fontWeight: 400,
                          textShadow: '0 1px 6px rgba(0, 0, 0, 0.85)'
                        }}
                      >
                        {office.description}
                      </p>

                      {/* Bottom Right Arrow Button */}
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: isSelected ? 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)' : 'rgba(15, 23, 42, 0.9)',
                            color: '#ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: isSelected ? 'none' : '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: isSelected ? '0 4px 14px rgba(40, 129, 251, 0.65)' : '0 2px 8px rgba(0, 0, 0, 0.3)',
                            transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={() => window.scrollTo(0, 0)} onNavAdmin={onNavAdmin} />
    </div>
  );
}


