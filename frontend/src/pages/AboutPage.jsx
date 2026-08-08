import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

export const AboutPage = ({ onNavHome, onNavCareers, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const integritySections = [
    {
      id: 1,
      title: 'Integrity with governments',
      text: 'With a foundation on maintaining integrity, transparency and honesty, we are committed to complying with the laws of the countries where we operate. This includes fostering appropriate working arrangements with government entities and adopting a zero-tolerance policy towards any form of corruption or bribery.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      imageOnLeft: true
    },
    {
      id: 2,
      title: 'Integrity with communities',
      text: 'As a responsible corporate citizen, we strive to make a positive impact in the communities where we operate. We support local initiatives, educational programs, and environmental projects to foster sustainable development and social well-being.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      imageOnLeft: false
    },
    {
      id: 3,
      title: 'Integrity with our clients',
      text: 'We build long-term relationships with our clients based on trust, quality and mutual success. We prioritize data protection, deliver on our promises, and maintain transparency in all our business transactions.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      imageOnLeft: true
    },
    {
      id: 4,
      title: 'Integrity with partners & suppliers',
      text: 'We value our partners and suppliers as essential contributors to our success. We expect them to uphold similar standards of integrity, ethical behavior, and respect for human rights in their operations.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      imageOnLeft: false
    },
    {
      id: 5,
      title: 'Integrity with our people',
      text: 'We are committed to creating a safe, inclusive, and empowering workplace. We respect individual differences, support professional growth, and foster a culture of open communication and fair treatment for all employees.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80',
      imageOnLeft: true
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* 1. Header Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavCareers={onNavCareers}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* 2. Top Hero Banner Header */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#0b132b',
            backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')`,
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
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              NCS code of conduct
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '720px', lineHeight: '1.6' }}>
              Our commitment to integrity, ethics, and operational excellence guides how we partner with clients, support communities, and empower our workforce across Australia and Asia-Pacific.
            </p>
          </div>
        </section>

        {/* 3. Staggered Asymmetric Integrity Sections (Matching Reference Screenshot Overlap Design) */}
        <section style={{ maxWidth: '1200px', margin: '5rem auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
          {integritySections.map((item) => (
            <div
              key={item.id}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: item.imageOnLeft ? 'row' : 'row-reverse',
                alignItems: 'flex-start'
              }}
            >
              {/* Image Block (takes 55% width) */}
              <div
                style={{
                  width: '55%',
                  flexShrink: 0,
                  boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  borderRadius: '2px'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '420px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Text Block (positioned lower and offset into right/left column matching screenshot) */}
              <div
                style={{
                  width: '50%',
                  marginTop: '150px',
                  marginLeft: item.imageOnLeft ? '-5%' : 0,
                  marginRight: item.imageOnLeft ? 0 : '-5%',
                  backgroundColor: '#ffffff',
                  padding: '2.5rem 3rem 1.5rem',
                  zIndex: 2,
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)'
                }}
              >
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
                  {item.title}
                </h2>
                <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.8', fontWeight: 400 }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* 4. Code of Conduct Call to Action Banner (Matching Screenshot CTA) */}
        <section style={{ maxWidth: '1200px', margin: '6rem auto 6rem', padding: '0 1.5rem' }}>
          <div
            style={{
              backgroundColor: '#002b49',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              boxShadow: '0 15px 35px rgba(0, 43, 73, 0.25)'
            }}
          >
            {/* Left Content */}
            <div style={{ gridColumn: 'span 7', padding: '4rem 3.5rem', color: '#ffffff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                Want to know more about NCS code of conduct?
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Read our full code of conduct policy document and discover how we build trust in every engagement.
              </p>
              <div>
                <button
                  onClick={onOpenContactPage}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 2rem',
                    backgroundColor: 'transparent',
                    border: '2px solid #ffffff',
                    borderRadius: '4px',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span>Read code of conduct</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ gridColumn: 'span 5', position: 'relative', minHeight: '360px' }}>
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                alt="NCS Team discussion"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
      </main>

      {/* 5. Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default AboutPage;
