import React, { useState } from 'react';
import {
  User, Mail, Phone, FileText, Edit3, Send,
  CheckCircle2, MapPin, ArrowRight, X, Award
} from 'lucide-react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage({ onBackHome, onNavCareers, onNavAbout, onNavServices, onNavPartners, onNavInsights, onNavChallengeUs, onNavAdmin, isAdminLoggedIn, onAdminLogout }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    organisation: '',
    designation: '',
    enquiry_type: '',
    subject: '',
    message: '',
    agree: false,
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: null });
  const [hoveredRep, setHoveredRep] = useState(null);
  const [selectedRep, setSelectedRep] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      await axios.post('http://127.0.0.1:8000/api/contact', formData);
      setStatus({ loading: false, success: true, error: null });
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Submission failed. Please check inputs.' });
    }
  };

  // Representatives Data (Screenshot 2)
  const representatives = [
    {
      id: 1,
      name: 'Anne Carter (SA, WA, NT)',
      title: 'Executive Director, Client Services',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'Anne Carter is Executive Director of Client Services for SA, WA, and NT. She leads client success, enterprise account growth, and public sector digital delivery across Central and Western Australia.',
      region: 'South Australia, Western Australia, Northern Territory',
      linkedinUrl: 'https://www.linkedin.com'
    },
    {
      id: 2,
      name: 'Brooke Mabry (Qld)',
      title: 'Commercial Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
      bio: 'Brooke Mabry oversees commercial growth, strategic client partnerships, and enterprise procurement frameworks across Queensland.',
      region: 'Queensland',
      linkedinUrl: 'https://www.linkedin.com'
    },
    {
      id: 3,
      name: 'Martin Cass (Vic)',
      title: 'Executive Director, Client Services',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
      bio: "Martin Cass is NCS Australia's Executive Director of Client Services for Victoria. With an expansive client portfolio, he ensures strategic alignment and delivery excellence to drive business growth and client satisfaction.",
      region: 'Victoria',
      linkedinUrl: 'https://www.linkedin.com'
    },
    {
      id: 4,
      name: 'Sian Clissold (NSW)',
      title: 'Executive Director, Client Services',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80',
      bio: 'Sian Clissold leads New South Wales enterprise accounts, digital transformation programs, and key stakeholder relationships across government and private sector clients.',
      region: 'New South Wales',
      linkedinUrl: 'https://www.linkedin.com'
    },
    {
      id: 5,
      name: 'Steven O’Kane (ACT)',
      title: 'Commercial Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
      bio: 'Steven O’Kane drives strategic partnerships, government digital modernisations, and public sector accounts across the Australian Capital Territory.',
      region: 'Australian Capital Territory',
      linkedinUrl: 'https://www.linkedin.com'
    }
  ];

  // Offices Data (Screenshot 3)
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
        {/* ============================================================ */}
        {/* HERO BANNER (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
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

        {/* ============================================================ */}
        {/* "HERE TO HELP" REPRESENTATIVE CARDS (MATCHING SCREENSHOTS 1 & 2) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#f1f5f9', padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                Here to help
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '700px', margin: '0 auto' }}>
                We have coverage across the country, please get in touch with a local representative
              </p>
            </div>

            {/* Representative Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.75rem' }}>
              {representatives.map((rep) => (
                <div
                  key={rep.id}
                  onMouseEnter={() => setHoveredRep(rep.id)}
                  onMouseLeave={() => setHoveredRep(null)}
                  onClick={() => setSelectedRep(rep)}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    borderTop: '5px solid #002b49',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                  }}
                >
                  <div style={{ padding: '1.25rem 1.25rem 0.75rem', minHeight: '90px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem', lineHeight: 1.3 }}>
                      {rep.name}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                      {rep.title}
                    </p>
                  </div>

                  <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                    <img src={rep.image} alt={rep.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                    {/* Dark Navy Hover Overlay */}
                    {hoveredRep === rep.id && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: '#002b49',
                          color: '#ffffff',
                          padding: '1.75rem',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          zIndex: 10
                        }}
                      >
                        <div>
                          <p style={{ fontSize: '0.88rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                            {rep.bio}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRep(rep);
                            }}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#ffffff',
                              fontSize: '0.9rem',
                              fontWeight: 800,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              padding: 0
                            }}
                          >
                            <span>READ MORE</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>

                        <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openLinkedIn(rep.linkedinUrl);
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              border: '1px solid #ffffff',
                              backgroundColor: 'transparent',
                              color: '#ffffff',
                              fontSize: '0.85rem',
                              fontWeight: 800,
                              cursor: 'pointer'
                            }}
                          >
                            in
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Particular Person Detail Modal when READ MORE is clicked */}
        {selectedRep && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.80)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', maxWidth: '640px', width: '100%', padding: '2.5rem', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.25)' }}>
              <button
                onClick={() => setSelectedRep(null)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={24} />
              </button>

              <div style={{ display: 'flex', gap: '1.75rem', alignItems: 'flex-start', marginBottom: '1.75rem' }}>
                <img src={selectedRep.image} alt={selectedRep.name} style={{ width: '120px', height: '140px', objectFit: 'cover', borderRadius: '6px', borderTop: '4px solid #002b49' }} />
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.3rem' }}>
                    {selectedRep.name}
                  </h3>
                  <p style={{ color: '#0284c7', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    {selectedRep.title}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                    Region: {selectedRep.region}
                  </p>
                </div>
              </div>

              <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '1rem', marginBottom: '2rem' }}>
                {selectedRep.bio}
              </p>

              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  onClick={() => openLinkedIn(selectedRep.linkedinUrl)}
                  style={{
                    flex: 1,
                    padding: '0.85rem',
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', height: '20px', borderRadius: '3px', backgroundColor: '#ffffff', color: '#0284c7', fontWeight: 900, fontSize: '0.75rem' }}>in</span>
                  <span>View LinkedIn Profile</span>
                </button>
                <button
                  onClick={() => setSelectedRep(null)}
                  style={{ padding: '0.85rem 1.5rem', backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 700, borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* OFFICES GRID SECTION (MATCHING SCREENSHOT 3) */}
        {/* ============================================================ */}
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

        {/* ============================================================ */}
        {/* PHONE, EMAIL & SOCIAL MEDIA BAR (MATCHING SCREENSHOT 4 TOP) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '4rem 2rem 0' }}>
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
                  <a href="mailto:contactus@au.ncs.co" style={{ color: '#ffffff', textDecoration: 'none' }}>contactus@au.ncs.co</a>
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

        {/* ============================================================ */}
        {/* PURPLE CONTACT US BANNER (MATCHING SCREENSHOT 4 BOTTOM) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '0 2rem 5rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)',
                color: '#ffffff',
                padding: '4rem 3.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem'
              }}
            >
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                  Contact us
                </h2>
                <p style={{ fontSize: '1.15rem', color: '#f1f5f9' }}>
                  If you're ready to make it happen, get in touch today.
                </p>
              </div>

              <button
                onClick={() => setShowFormModal(true)}
                style={{
                  padding: '0.9rem 2.25rem',
                  borderRadius: '30px',
                  border: '2px solid #ffffff',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                Find out more
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXPLORE MORE CARDS SECTION (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#001938',
            color: '#ffffff',
            padding: '5rem 2rem 6rem',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem', color: '#ffffff' }}>
              Explore more
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5rem' }}>
              {/* Card 1: Industries */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Industries
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Explore our thinking and services that help to shape various industries through technology.
                </p>
                <button
                  onClick={onBackHome}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 2: Services */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Services
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Explore our full range of services that help organisation to transform for the future.
                </p>
                <button
                  onClick={onBackHome}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 3: Contact Us */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Contact Us
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Want to find out more about how we can help you?
                </p>
                <button
                  onClick={() => setShowFormModal(true)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* INTERACTIVE CONTACT INQUIRY FORM MODAL */}
        {/* ============================================================ */}
        {showFormModal && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.80)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', maxWidth: '720px', width: '100%', padding: '2.5rem', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', maxHeight: '90vh', overflowY: 'auto' }}>
              <button
                onClick={() => setShowFormModal(false)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={24} />
              </button>

              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                Send Us an Enquiry
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '2rem' }}>
                Fill out the form below and an NCS Australia representative will contact you shortly.
              </p>

              {status.success ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>Message Sent Successfully!</h3>
                  <p style={{ color: '#475569', marginTop: '0.5rem' }}>Thank you for reaching out. We will be in touch with you shortly.</p>
                  <button
                    onClick={() => {
                      setStatus({ loading: false, success: false, error: null });
                      setShowFormModal(false);
                    }}
                    style={{ marginTop: '2rem', padding: '0.75rem 2rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 700, borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                        First Name <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Enter first name"
                        required
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Enter last name"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                        Email Address <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        required
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                        Organisation
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        placeholder="Company name"
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                        Enquiry Type <span style={{ color: '#ef4444' }}>*</span>
                      </label>
                      <select
                        name="enquiry_type"
                        value={formData.enquiry_type}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff' }}
                      >
                        <option value="">Select Enquiry Type</option>
                        <option>General Enquiry</option>
                        <option>Sales Enquiry</option>
                        <option>Request for Quotation</option>
                        <option>Technical Support</option>
                        <option>Career</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Subject <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief subject"
                      required
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Message <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your enquiry..."
                      required
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <input
                      type="checkbox"
                      id="agree_modal"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="agree_modal" style={{ fontSize: '0.85rem', color: '#475569' }}>
                      I agree to the Privacy Policy and terms.
                    </label>
                  </div>

                  {status.error && (
                    <div style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 600 }}>
                      {status.error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status.loading}
                    style={{
                      padding: '0.9rem',
                      backgroundColor: '#002b49',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      marginTop: '0.5rem'
                    }}
                  >
                    {status.loading ? 'Sending...' : 'Send Message'}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={() => window.scrollTo(0, 0)} onNavAdmin={onNavAdmin} />
    </div>
  );
}
