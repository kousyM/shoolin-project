import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, Building2, Phone, Mail } from 'lucide-react';

export const PartnersPage = ({ onNavHome, onNavAbout, onNavCareers, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [activeTab, setActiveTab] = useState('A-F'); // 'A-F' | 'G-L' | 'M-R' | 'S-Z'
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    organisation: '',
    email: '',
    phone: '',
    enquiry: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Partners Network Data
  const extendedPartners = {
    'A-F': [
      { name: 'Akamai', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80', tag: 'Cloud Security' },
      { name: 'ARISTA', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80', tag: 'Networking' },
      { name: 'BeyondTrust', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80', tag: 'Identity Security' },
      { name: 'BITSIGHT', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80', tag: 'Cyber Risk' },
      { name: 'BlueVoyant', logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80', tag: 'Cyber Defense' },
      { name: 'CHECK POINT', logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80', tag: 'Firewall & Security' },
      { name: 'CISCO', logo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80', tag: 'Enterprise Networking' },
      { name: 'Citrix', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80', tag: 'Digital Workspace' },
      { name: 'CLAROTY', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80', tag: 'OT Security' },
      { name: 'ClickHouse', logo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80', tag: 'Analytics DB' },
      { name: 'CrowdStrike', logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=300&q=80', tag: 'Endpoint Security' },
      { name: 'CYBERARK', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80', tag: 'Privileged Access' }
    ],
    'G-L': [
      { name: 'Google Cloud', logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', tag: 'Hyperscale Cloud' },
      { name: 'IBM', logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80', tag: 'Hybrid Cloud & AI' },
      { name: 'Imperva', logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80', tag: 'Application Security' },
      { name: 'Infoblox', logo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80', tag: 'DNS Security' },
      { name: 'Juniper Networks', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80', tag: 'AI Native Networking' },
      { name: 'Kaseya', logo: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80', tag: 'IT Management' },
      { name: 'Lenovo', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80', tag: 'Enterprise Infrastructure' },
      { name: 'LogicMonitor', logo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80', tag: 'Observability' }
    ],
    'M-R': [
      { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80', tag: 'Azure & Productivity' },
      { name: 'NetApp', logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=300&q=80', tag: 'Intelligent Data Infrastructure' },
      { name: 'Nutanix', logo: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=300&q=80', tag: 'Hyperconverged Infrastructure' },
      { name: 'Okta', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80', tag: 'Identity Management' },
      { name: 'Palo Alto Networks', logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=300&q=80', tag: 'Cybersecurity Leader' },
      { name: 'Pure Storage', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80', tag: 'All-Flash Data Storage' },
      { name: 'Red Hat', logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=300&q=80', tag: 'Open Source Hybrid Cloud' },
      { name: 'Rubrik', logo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=300&q=80', tag: 'Zero Trust Data Security' }
    ],
    'S-Z': [
      { name: 'Salesforce', logo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80', tag: 'CRM & AI Agentforce' },
      { name: 'SAP', logo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80', tag: 'Enterprise ERP' },
      { name: 'ServiceNow', logo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80', tag: 'Workflow Automation' },
      { name: 'Snowflake', logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80', tag: 'AI Data Cloud' },
      { name: 'Splunk', logo: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=300&q=80', tag: 'Cybersecurity & SIEM' },
      { name: 'Trend Micro', logo: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=300&q=80', tag: 'Threat Defense' },
      { name: 'Veeam', logo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&q=80', tag: 'Data Resilience' },
      { name: 'Zscaler', logo: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=300&q=80', tag: 'Zero Trust Exchange' }
    ]
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* ============================================================ */}
        {/* HERO BANNER SECTION (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#001938',
            backgroundImage: `linear-gradient(90deg, rgba(0, 25, 56, 0.88) 0%, rgba(0, 25, 56, 0.70) 50%, rgba(0, 25, 56, 0.40) 100%), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '6rem 2rem 5rem',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', maxWidth: '820px', lineHeight: 1.25, marginBottom: '1.25rem' }}>
              Ecosystem of partners to support open innovation and co-creation
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '680px', lineHeight: 1.6 }}>
              We work alongside our technology partners to help our clients achieve their business goals and meet their future needs.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* KEY PARTNERS GRID SECTION (MATCHING SCREENSHOT 2 TOP) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '5rem 2rem 4rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '3.5rem' }}>
              Key partners
            </h2>

            {/* 4-column key partners grid with vertical border dividers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
              {/* AWS */}
              <div style={{ padding: '2.5rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 900, color: '#ff9900', letterSpacing: '-0.03em' }}>
                  aws
                </span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Premier Tier Partner
                </span>
              </div>

              {/* Databricks */}
              <div style={{ padding: '2.5rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '22px', height: '22px', backgroundColor: '#ff3621', transform: 'rotate(45deg)' }}></div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.9rem', fontWeight: 800, color: '#1e293b' }}>
                    databricks
                  </span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Elite SI Partner
                </span>
              </div>

              {/* Google Cloud */}
              <div style={{ padding: '2.5rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800 }}>
                    <span style={{ color: '#4285f4' }}>G</span>
                    <span style={{ color: '#ea4335' }}>o</span>
                    <span style={{ color: '#fbbc05' }}>o</span>
                    <span style={{ color: '#4285f4' }}>g</span>
                    <span style={{ color: '#34a853' }}>l</span>
                    <span style={{ color: '#ea4335' }}>e</span>
                  </span>
                  <span style={{ fontSize: '1.3rem', fontWeight: 600, color: '#475569' }}>Cloud</span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  MSP Premier Partner
                </span>
              </div>

              {/* Microsoft */}
              <div style={{ padding: '2.5rem 1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px', width: '20px', height: '20px' }}>
                    <div style={{ backgroundColor: '#f25022' }}></div>
                    <div style={{ backgroundColor: '#7fba00' }}></div>
                    <div style={{ backgroundColor: '#00a4ef' }}></div>
                    <div style={{ backgroundColor: '#ffb900' }}></div>
                  </div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.9rem', fontWeight: 700, color: '#475569' }}>
                    Microsoft
                  </span>
                </div>
                <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600, marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Solutions Partner
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXTENDED PARTNER NETWORK WITH TABS (MATCHING SCREENSHOT 2 & 3) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '3rem 2rem 6rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
              Our extended partner network
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', maxWidth: '850px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
              These technologies provide the foundation for solutions that grow with your business. With NCS's proven expertise and collaborative approach, we help Australian organisations build future-ready systems that scale seamlessly and keep you ahead in a rapidly changing world.
            </p>

            {/* Alphabetical Filter Tabs matching Screenshot 2 Bottom */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', borderBottom: '1px solid #e2e8f0', marginBottom: '3rem' }}>
              {['A-F', 'G-L', 'M-R', 'S-Z'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: activeTab === tab ? '#002b49' : '#64748b',
                    cursor: 'pointer',
                    borderBottom: activeTab === tab ? '4px solid #002b49' : '4px solid transparent',
                    marginBottom: '-1px'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Partner Logos Grid matching Screenshot 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
              {extendedPartners[activeTab].map((partner, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    padding: '2rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'transform 0.2s ease, boxShadow 0.2s ease',
                    minHeight: '130px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.03)';
                  }}
                >
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                    {partner.name}
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: '#0284c7', fontWeight: 700, backgroundColor: '#f0f9ff', padding: '0.2rem 0.6rem', borderRadius: '12px' }}>
                    {partner.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* OUR DIFFERENCE QUOTE SECTION (MATCHING SCREENSHOT 4 TOP) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#f8fafc', padding: '5rem 2rem 6rem', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '2.5rem' }}>
              Our difference
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', alignItems: 'center' }}>
              <div style={{ gridColumn: 'span 7' }}>
                <p style={{ fontSize: '1.1rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '2rem' }}>
                  "NCS has proven to be an exceptional Databricks partner, consistently delivering impressive outcomes for our joint customers. Leveraging the Databricks Data Intelligence Platform, they bring value from pre-sales consultations through to seamless delivery. This success is fuelled by NCS's relentless commitment to customer results and continuous upskilling — achieving an impressive 15x increase in Databricks certifications in just a few years. NCS truly empowers Australian businesses to unlock the full potential of their data and drive transformative AI initiatives."
                </p>
                <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Greg Taylor
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, margin: '0.2rem 0 0 0' }}>
                    VP Consulting & SI partners, APJ, Databricks
                  </p>
                </div>
              </div>

              <div style={{ gridColumn: 'span 5', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <div style={{ padding: '3rem', backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 15px 30px rgba(0,0,0,0.06)', width: '100%', textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: '#ff3621', transform: 'rotate(45deg)' }}></div>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#1e293b' }}>
                      databricks
                    </span>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#0284c7', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Global Strategic Partner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* LET'S TALK FORM SECTION (MATCHING SCREENSHOT 4 BOTTOM & SCREENSHOT 5) */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)',
            color: '#ffffff',
            padding: '5.5rem 2rem 6.5rem'
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Let's talk
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#f1f5f9', maxWidth: '720px', margin: '0 auto', lineHeight: 1.6 }}>
                Let us help you simplify licensing, optimise costs, and ensure you get the most value from your technology investments.
              </p>
            </div>

            {formSubmitted ? (
              <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '3.5rem', borderRadius: '12px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Enquiry Received!</h3>
                <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '500px', margin: '0.5rem auto 2rem' }}>
                  Thank you for reaching out. One of our technology partner specialists will connect with you shortly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  style={{ padding: '0.85rem 2rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 800, borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      First name <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Last name <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Role <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Role"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Organisation <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      placeholder="Organisation"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Business email address <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Business email address"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                      Phone <span style={{ color: '#fca5a5' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      required
                      style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                    Tell us more about your enquiry <span style={{ color: '#fca5a5' }}>*</span>
                  </label>
                  <textarea
                    name="enquiry"
                    rows={4}
                    value={formData.enquiry}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your enquiry"
                    required
                    style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '6px', border: 'none', fontSize: '0.95rem', outline: 'none', backgroundColor: '#ffffff', color: '#0f172a', resize: 'vertical' }}
                  ></textarea>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '1rem 3rem',
                      backgroundColor: '#002b49',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      borderRadius: '30px',
                      border: '2px solid #ffffff',
                      cursor: 'pointer',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                    }}
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXPLORE MORE CARDS SECTION */}
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
                  onClick={onNavHome}
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
                  onClick={onNavHome}
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
                  onClick={onOpenContactPage}
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
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default PartnersPage;
