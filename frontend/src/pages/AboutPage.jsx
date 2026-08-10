import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, ArrowLeft, Mail, Award, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';

export const AboutPage = ({ initialTab = 'code-of-conduct', onNavHome, onNavCareers, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [activeTab, setActiveTab] = useState(initialTab); // 'code-of-conduct' | 'leadership' | 'milestones' | 'newsroom' | 'privacy-policy'
  const [leadershipTeam, setLeadershipTeam] = useState('management'); // 'management' | 'senior'
  const [hoveredLeader, setHoveredLeader] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null); // When set, displays specific leader detail view
  const [newsFilterYear, setNewsFilterYear] = useState('ALL');
  const [milestonesSubtab, setMilestonesSubtab] = useState('milestones'); // 'milestones' | 'businesses' | 'integration'

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      setSelectedLeader(null);
    }
    window.scrollTo(0, 0);
  }, [initialTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedLeader(null);
    window.location.hash = tab;
    window.scrollTo(0, 0);
  };

  // Executive Leadership Data with Complete Detailed Profiles
  const allLeaders = [
    {
      id: 1,
      category: 'management',
      name: 'Andre Conti',
      title: 'Delivery Lead',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      shortBio: 'Andre leads enterprise delivery excellence across cloud, software engineering, and public sector accounts.',
      fullBio: 'Andre Conti leads enterprise delivery excellence across cloud infrastructure, custom application engineering, and public sector accounts for NCS Australia. With over 18 years of executive IT experience across Asia-Pacific, Andre oversees large-scale digital modernisation initiatives that deliver tangible commercial value and operational resilience.',
      expertise: ['Cloud Transformation & Migration', 'DevSecOps & Automation', 'Public Sector Governance', 'Large-Scale Program Management'],
      experience: '18+ Years Industry Leadership'
    },
    {
      id: 2,
      category: 'management',
      name: 'Brooke Mabry',
      title: 'Commercial Lead',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      shortBio: 'Brooke oversees commercial growth, strategic client partnerships, and enterprise contract frameworks.',
      fullBio: 'Brooke Mabry oversees commercial growth, strategic client partnerships, and enterprise procurement frameworks across NCS Australia. She brings extensive experience structuring multi-million dollar technology engagements and driving long-term strategic value across government and commercial accounts.',
      expertise: ['Enterprise Contracting', 'Commercial Strategy', 'Strategic Client Partnerships', 'Vendor Ecosystem Governance'],
      experience: '15+ Years Commercial Leadership'
    },
    {
      id: 3,
      category: 'management',
      name: 'Hitesh Gossain',
      title: 'Telco Lead',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
      shortBio: 'Hitesh spearheads 5G telecommunications infrastructure, network modernise, and edge computing models.',
      fullBio: 'Hitesh Gossain spearheads 5G telecommunications infrastructure, network modernise, and edge computing practice areas for NCS. He collaborates closely with major telco operators and enterprise partners across Australia to design resilient, next-generation connected digital platforms.',
      expertise: ['5G Network Infrastructure', 'Telco Digital Transformation', 'Edge Computing & IoT', 'Network Virtualisation (NFV)'],
      experience: '16+ Years Telecommunications Practice'
    },
    {
      id: 4,
      category: 'management',
      name: 'Jane Spurrs',
      title: 'People & Culture Lead',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      bio: 'Jane drives talent acquisition, diversity & inclusion programs, and workforce development across NCS Australia.',
      fullBio: 'Jane Spurrs drives talent acquisition, diversity & inclusion programs, and workforce development across NCS Australia. She is passionate about cultivating a high-performance, inclusive workplace culture, supporting local STEM educational initiatives, and empowering software talent.',
      expertise: ['Talent Strategy & Acquisition', 'Workplace Diversity & Inclusion', 'Leadership Development', 'Change Management'],
      experience: '14+ Years Human Capital Leadership'
    },
    {
      id: 5,
      category: 'senior',
      name: 'Marcus Vance',
      title: 'Chief Executive Officer, Australia',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      shortBio: 'Marcus leads NCS Australia across cloud, data, cybersecurity, and digital practice areas.',
      fullBio: 'Marcus Vance leads NCS Australia across cloud, sovereign data, cybersecurity, and digital practice areas. He sets strategic growth directives and strengthens enterprise client partnerships across Australia and New Zealand.',
      expertise: ['Executive Corporate Strategy', 'Enterprise Digital Innovation', 'Regional Market Growth', 'Sovereign IT Delivery'],
      experience: '20+ Years Executive Leadership'
    },
    {
      id: 6,
      category: 'senior',
      name: 'Elena Rostova',
      title: 'Head of Data & Artificial Intelligence',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
      shortBio: 'Elena directs enterprise generative AI platforms, sovereign data governance, and cloud analytics.',
      fullBio: 'Elena Rostova directs enterprise generative AI platforms, sovereign data governance, and cloud analytics at NCS. She partners with government agencies and commercial enterprises to deploy safe, ethical, and high-impact AI ecosystems.',
      expertise: ['Generative AI & LLM Ecosystems', 'Sovereign Data Governance', 'Predictive Machine Learning', 'Enterprise Analytics'],
      experience: '17+ Years Data & AI Practice'
    }
  ];

  const managementLeaders = allLeaders.filter(l => l.category === 'management');
  const seniorLeaders = allLeaders.filter(l => l.category === 'senior');

  // Newsroom Data (Screenshot 5)
  const newsroomArticles = [
    {
      id: 1,
      year: '2025',
      date: 'Aug 21, 2025',
      readTime: '5 mins read',
      title: 'NCS Australia expands cloud security & AI advisory services across public sector accounts',
      summary: 'Accelerating digital transformation with sovereign cloud governance and zero-trust cybersecurity frameworks.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      year: '2025',
      date: 'Aug 19, 2025',
      readTime: '5 mins read',
      title: 'NCS and technology partners showcase next-generation enterprise low-code automation platform',
      summary: 'Empowering commercial enterprises with rapid application delivery and automated workflow orchestration.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      year: '2024',
      date: 'Jul 30, 2024',
      readTime: '4 mins read',
      title: 'Building digital talent: NCS launches new graduate engineering academy across Australia',
      summary: 'Investing in local ICT skills development and mentoring the next generation of software engineers.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const filteredNews = newsFilterYear === 'ALL'
    ? newsroomArticles
    : newsroomArticles.filter(item => item.year === newsFilterYear);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavCareers={onNavCareers}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
        onNavAbout={(tab) => handleTabChange(tab)}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* ============================================================ */}
        {/* PARTICULAR LEADER DETAIL VIEW (WHEN READ MORE IS CLICKED) */}
        {/* ============================================================ */}
        {selectedLeader ? (
          <div>
            {/* Header Breadcrumb */}
            <section style={{ backgroundColor: '#0b132b', color: '#ffffff', padding: '3.5rem 2rem' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <button
                  onClick={() => setSelectedLeader(null)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#38bdf8',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '1.5rem',
                    padding: 0
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>Back to Leadership Team</span>
                </button>

                <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {selectedLeader.name}
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#38bdf8', fontWeight: 700 }}>
                  {selectedLeader.title}
                </p>
              </div>
            </section>

            {/* Profile Grid Detail */}
            <section style={{ maxWidth: '1200px', margin: '4rem auto 6rem', padding: '0 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'flex-start' }}>
                {/* Left Photo & Key Info */}
                <div style={{ gridColumn: 'span 5' }}>
                  <div style={{ borderRadius: '8px', overflow: 'hidden', borderTop: '6px solid #002b49', boxShadow: '0 15px 35px rgba(0,0,0,0.12)' }}>
                    <img src={selectedLeader.image} alt={selectedLeader.name} style={{ width: '100%', height: '440px', objectFit: 'cover' }} />
                  </div>

                  <div style={{ marginTop: '2rem', backgroundColor: '#f8fafc', padding: '1.75rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Award size={18} style={{ color: '#0284c7' }} />
                      <span>Professional Background</span>
                    </h3>
                    <p style={{ color: '#475569', fontSize: '0.95rem', fontWeight: 600, marginBottom: '1.25rem' }}>
                      {selectedLeader.experience}
                    </p>

                    <button
                      onClick={() => window.open('https://www.linkedin.com', '_blank', 'noopener,noreferrer')}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.25rem',
                        backgroundColor: '#0284c7',
                        color: '#ffffff',
                        fontWeight: 700,
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
                  </div>
                </div>

                {/* Right Detailed Biography & Key Practice Expertise */}
                <div style={{ gridColumn: 'span 7' }}>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                    Executive Biography
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                    {selectedLeader.fullBio}
                  </p>

                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                    Key Areas of Expertise & Strategic Focus
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
                    {selectedLeader.expertise.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: '#f1f5f9', padding: '1rem 1.25rem', borderRadius: '6px' }}>
                        <CheckCircle2 size={18} style={{ color: '#0284c7', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={() => setSelectedLeader(null)}
                      style={{
                        padding: '0.85rem 2rem',
                        backgroundColor: 'transparent',
                        border: '2px solid #002b49',
                        color: '#002b49',
                        fontWeight: 700,
                        borderRadius: '4px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <ArrowLeft size={16} />
                      <span>Back to Leadership Team</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div>
            {/* ============================================================ */}
            {/* 1. CODE OF CONDUCT TAB */}
            {/* ============================================================ */}
            {activeTab === 'code-of-conduct' && (
              <div>
                <section
                  style={{
                    position: 'relative',
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '5rem 2rem',
                    minHeight: '320px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                      NCS code of conduct
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '720px', lineHeight: '1.6' }}>
                      Our commitment to integrity, ethics, and operational excellence guides how we partner with clients, support communities, and empower our workforce across Australia and Asia-Pacific.
                    </p>
                  </div>
                </section>

                {/* Staggered Overlapping Integrity Sections */}
                <section style={{ maxWidth: '1200px', margin: '5rem auto', padding: '0 1.5rem', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <div style={{ width: '55%', flexShrink: 0, boxShadow: '0 15px 35px rgba(0,0,0,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80" alt="Governments" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ width: '50%', marginTop: '150px', marginLeft: '-5%', backgroundColor: '#ffffff', padding: '2.5rem 3rem 1.5rem', zIndex: 2, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '1.25rem' }}>Integrity with governments</h2>
                      <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.8' }}>
                        With a foundation on maintaining integrity, transparency and honesty, we are committed to complying with the laws of the countries where we operate. This includes fostering appropriate working arrangements with government entities and adopting a zero-tolerance policy towards any form of corruption or bribery.
                      </p>
                    </div>
                  </div>

                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ width: '55%', flexShrink: 0, boxShadow: '0 15px 35px rgba(0,0,0,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80" alt="Communities" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ width: '50%', marginTop: '150px', marginRight: '-5%', backgroundColor: '#ffffff', padding: '2.5rem 3rem 1.5rem', zIndex: 2, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '1.25rem' }}>Integrity with communities</h2>
                      <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.8' }}>
                        As a responsible corporate citizen, we strive to make a positive impact in the communities where we operate. We support local initiatives, educational programs, and environmental projects to foster sustainable development and social well-being.
                      </p>
                    </div>
                  </div>

                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <div style={{ width: '55%', flexShrink: 0, boxShadow: '0 15px 35px rgba(0,0,0,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Clients" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ width: '50%', marginTop: '150px', marginLeft: '-5%', backgroundColor: '#ffffff', padding: '2.5rem 3rem 1.5rem', zIndex: 2, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '1.25rem' }}>Integrity with our clients</h2>
                      <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.8' }}>
                        We build long-term relationships with our clients based on trust, quality and mutual success. We prioritize data protection, deliver on our promises, and maintain transparency in all our business transactions.
                      </p>
                    </div>
                  </div>

                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'row-reverse', alignItems: 'flex-start' }}>
                    <div style={{ width: '55%', flexShrink: 0, boxShadow: '0 15px 35px rgba(0,0,0,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Partners" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ width: '50%', marginTop: '150px', marginRight: '-5%', backgroundColor: '#ffffff', padding: '2.5rem 3rem 1.5rem', zIndex: 2, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '1.25rem' }}>Integrity with partners & suppliers</h2>
                      <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.8' }}>
                        We value our partners and suppliers as essential contributors to our success. We expect them to uphold similar standards of integrity, ethical behavior, and respect for human rights in their operations.
                      </p>
                    </div>
                  </div>

                  <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                    <div style={{ width: '55%', flexShrink: 0, boxShadow: '0 15px 35px rgba(0,0,0,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80" alt="People" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
                    </div>
                    <div style={{ width: '50%', marginTop: '150px', marginLeft: '-5%', backgroundColor: '#ffffff', padding: '2.5rem 3rem 1.5rem', zIndex: 2, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)' }}>
                      <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 800, color: '#111827', marginBottom: '1.25rem' }}>Integrity with our people</h2>
                      <p style={{ fontSize: '1rem', color: '#4b5563', lineHeight: '1.8' }}>
                        We are committed to creating a safe, inclusive, and empowering workplace. We respect individual differences, support professional growth, and foster a culture of open communication and fair treatment for all employees.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* ============================================================ */}
            {/* 2. LEADERSHIP TEAM TAB */}
            {/* ============================================================ */}
            {activeTab === 'leadership' && (
              <div>
                <section
                  style={{
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '4.5rem 2rem',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                      Our Leadership Team
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: 1.6 }}>
                      Meet the leaders partnering with clients and communities to transform technology services across Australia and Asia-Pacific.
                    </p>
                  </div>
                </section>

                {/* Leadership Subnav Tabs */}
                <section style={{ maxWidth: '1200px', margin: '3rem auto 0', padding: '0 1.5rem', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', borderBottom: '2px solid #cbd5e1', gap: '2rem' }}>
                    <button
                      onClick={() => setLeadershipTeam('management')}
                      style={{
                        padding: '0.75rem 1.5rem',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        border: 'none',
                        background: 'none',
                        color: leadershipTeam === 'management' ? '#002b49' : '#64748b',
                        borderBottom: leadershipTeam === 'management' ? '3px solid #002b49' : '3px solid transparent',
                        cursor: 'pointer'
                      }}
                    >
                      Management Team
                    </button>
                    <button
                      onClick={() => setLeadershipTeam('senior')}
                      style={{
                        padding: '0.75rem 1.5rem',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        border: 'none',
                        background: 'none',
                        color: leadershipTeam === 'senior' ? '#002b49' : '#64748b',
                        borderBottom: leadershipTeam === 'senior' ? '3px solid #002b49' : '3px solid transparent',
                        cursor: 'pointer'
                      }}
                    >
                      Senior Leadership Team
                    </button>
                  </div>
                </section>

                {/* Executive Cards Grid */}
                <section style={{ maxWidth: '1200px', margin: '3rem auto 5rem', padding: '0 1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.75rem' }}>
                    {(leadershipTeam === 'management' ? managementLeaders : seniorLeaders).map((leader) => (
                      <div
                        key={leader.id}
                        onMouseEnter={() => setHoveredLeader(leader.id)}
                        onMouseLeave={() => setHoveredLeader(null)}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '4px',
                          border: '1px solid #cbd5e1',
                          borderTop: '5px solid #002b49',
                          overflow: 'hidden',
                          position: 'relative',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                        }}
                      >
                        <div style={{ padding: '1.25rem 1.25rem 0.75rem', minHeight: '80px' }}>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>
                            {leader.name}
                          </h3>
                          <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
                            {leader.title}
                          </p>
                        </div>

                        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                          <img src={leader.image} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                          {hoveredLeader === leader.id && (
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 43, 73, 0.92)',
                                color: '#ffffff',
                                padding: '1.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                textAlign: 'center'
                              }}
                            >
                              <button
                                onClick={() => {
                                  setSelectedLeader(leader);
                                  window.scrollTo(0, 0);
                                }}
                                style={{
                                  padding: '0.65rem 1.5rem',
                                  backgroundColor: '#0284c7',
                                  color: '#ffffff',
                                  fontWeight: 800,
                                  fontSize: '0.9rem',
                                  borderRadius: '4px',
                                  border: 'none',
                                  cursor: 'pointer',
                                  marginBottom: '0.75rem',
                                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                }}
                              >
                                Read More
                              </button>
                              <p style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                                {leader.shortBio}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ============================================================ */}
            {/* 3. MILESTONES & OUR JOURNEY TAB */}
            {/* ============================================================ */}
            {activeTab === 'milestones' && (
              <div>
                <section
                  style={{
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '4.5rem 2rem',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                      Our journey
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: '#e2e8f0', maxWidth: '600px' }}>
                      Key milestones shaping NCS Australia's digital evolution and expansion.
                    </p>
                  </div>
                </section>

                {/* Milestones Subtab Bar */}
                <section style={{ backgroundColor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '1rem' }}>
                    <button
                      onClick={() => setMilestonesSubtab('milestones')}
                      style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        background: milestonesSubtab === 'milestones' ? '#e0f2fe' : 'transparent',
                        color: milestonesSubtab === 'milestones' ? '#002b49' : '#475569',
                        borderBottom: milestonesSubtab === 'milestones' ? '3px solid #002b49' : '3px solid transparent',
                        cursor: 'pointer'
                      }}
                    >
                      Milestones
                    </button>
                    <button
                      onClick={() => setMilestonesSubtab('businesses')}
                      style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        background: milestonesSubtab === 'businesses' ? '#e0f2fe' : 'transparent',
                        color: milestonesSubtab === 'businesses' ? '#002b49' : '#475569',
                        borderBottom: milestonesSubtab === 'businesses' ? '3px solid #002b49' : '3px solid transparent',
                        cursor: 'pointer'
                      }}
                    >
                      Our businesses
                    </button>
                    <button
                      onClick={() => setMilestonesSubtab('integration')}
                      style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        background: milestonesSubtab === 'integration' ? '#e0f2fe' : 'transparent',
                        color: milestonesSubtab === 'integration' ? '#002b49' : '#475569',
                        borderBottom: milestonesSubtab === 'integration' ? '3px solid #002b49' : '3px solid transparent',
                        cursor: 'pointer'
                      }}
                    >
                      Our integration
                    </button>
                    <button
                      onClick={onOpenContactPage}
                      style={{
                        padding: '1rem 2rem',
                        fontSize: '1rem',
                        fontWeight: 700,
                        border: 'none',
                        background: 'transparent',
                        color: '#475569',
                        cursor: 'pointer'
                      }}
                    >
                      Contact us
                    </button>
                  </div>
                </section>

                {/* Milestones Content View */}
                {(milestonesSubtab === 'milestones' || milestonesSubtab === 'all') && (
                  <section style={{ maxWidth: '1000px', margin: '4rem auto', padding: '0 1.5rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                      Milestones
                    </h2>
                    <p style={{ color: '#475569', maxWidth: '780px', margin: '0 auto 3rem', lineHeight: 1.7, fontSize: '1.05rem' }}>
                      We have brought together some of the most trusted technology services businesses in Australia to meet the growing digital needs of our clients. Today, we offer end to end services from advisory to managed services across Australia and Asia-Pacific.
                    </p>

                    <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '3.5rem 2rem', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '100px', height: '100px', borderRadius: '50%', border: '2px solid #00b4d8', backgroundColor: '#ffffff', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 900, color: '#0f172a' }}>
                          ncs<span style={{ color: '#00b4d8' }}>//</span>
                        </span>
                      </div>

                      <div style={{ fontSize: '7rem', fontWeight: 900, color: '#e0f2fe', letterSpacing: '-0.05em', margin: '-2rem 0 -1rem', opacity: 0.8 }}>
                        2000
                      </div>

                      <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', position: 'relative', zIndex: 2 }}>
                        NCS enters Australia
                      </h3>
                      <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto 1.5rem', lineHeight: 1.6, position: 'relative', zIndex: 2 }}>
                        NCS expands operations into Australia, providing IT services, cloud systems integration, and cybersecurity management for leading enterprises and public sector agencies.
                      </p>
                      <button
                        onClick={onOpenContactPage}
                        style={{ padding: '0.65rem 1.75rem', border: '2px solid #002b49', borderRadius: '4px', background: 'transparent', color: '#002b49', fontWeight: 700, cursor: 'pointer' }}
                      >
                        Read More
                      </button>
                    </div>
                  </section>
                )}

                {/* Businesses Content View */}
                {(milestonesSubtab === 'businesses' || milestonesSubtab === 'all') && (
                  <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <div style={{ gridColumn: 'span 6', backgroundColor: '#002b49', color: '#ffffff', padding: '4rem 3.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem' }}>
                          Our Businesses
                        </h2>
                        <p style={{ color: '#cbd5e1', lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.05rem' }}>
                          Discover more about the trusted businesses brought together as part of NCS Australia. Each business has involved a strategic investment underpinned by our focus on expanding our footprint nationally to support Australian clients with high quality IT services. Wherever you are on your technology journey, our team have the experience and depth of knowledge across varied IT capabilities to partner with you into the future.
                        </p>
                        <div>
                          <button
                            onClick={onOpenContactPage}
                            style={{ padding: '0.75rem 1.75rem', border: '2px solid #ffffff', borderRadius: '4px', background: 'transparent', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}
                          >
                            Learn more
                          </button>
                        </div>
                      </div>
                      <div style={{ gridColumn: 'span 6', minHeight: '380px' }}>
                        <img
                          src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80"
                          alt="Sydney Cityscape"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                    </div>
                  </section>
                )}

                {/* Integration Content View */}
                {(milestonesSubtab === 'integration' || milestonesSubtab === 'all') && (
                  <section style={{ maxWidth: '1200px', margin: '4rem auto 6rem', padding: '0 1.5rem' }}>
                    <div style={{ backgroundColor: '#7dd3fc', padding: '4rem 3.5rem', borderRadius: '8px', color: '#0f172a', textAlign: 'center' }}>
                      <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '1rem' }}>
                        Our integration
                      </h2>
                      <p style={{ color: '#0f172a', maxWidth: '800px', margin: '0 auto 2rem', lineHeight: 1.7, fontSize: '1.1rem' }}>
                        Our integration journey unites deep domain expertise, agile delivery practices, and enterprise cloud capabilities under one unified brand to empower Australian businesses and government partners.
                      </p>
                      <button
                        onClick={onOpenContactPage}
                        style={{ padding: '0.75rem 1.75rem', border: '2px solid #0f172a', borderRadius: '4px', background: 'transparent', color: '#0f172a', fontWeight: 700, cursor: 'pointer' }}
                      >
                        Contact us
                      </button>
                    </div>
                  </section>
                )}
              </div>
            )}

            {/* ============================================================ */}
            {/* 4. NEWSROOM TAB */}
            {/* ============================================================ */}
            {activeTab === 'newsroom' && (
              <div>
                <section
                  style={{
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.85) 0%, rgba(11, 19, 43, 0.70) 50%, rgba(11, 19, 43, 0.40) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '5rem 2rem',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                      Newsroom
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '650px', lineHeight: 1.6 }}>
                      Keep up to date with news on NCS, from upcoming developments to collaborations with governments and enterprises.
                    </p>
                  </div>
                </section>

                {/* Newsroom Filter Bar */}
                <section style={{ maxWidth: '1200px', margin: '3rem auto 1rem', padding: '0 1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.05em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                        SORT BY
                      </label>
                      <select style={{ padding: '0.5rem 1rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.9rem', color: '#334155', outline: 'none' }}>
                        <option>Select one</option>
                        <option>Newest first</option>
                        <option>Oldest first</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.05em', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                        FILTER BY YEAR
                      </label>
                      <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.95rem', fontWeight: 700 }}>
                        {['ALL', '2025', '2024', '2023', '2022', '2021'].map(yr => (
                          <button
                            key={yr}
                            onClick={() => setNewsFilterYear(yr)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: newsFilterYear === yr ? '#0284c7' : '#94a3b8',
                              fontWeight: newsFilterYear === yr ? 800 : 600,
                              cursor: 'pointer',
                              padding: 0
                            }}
                          >
                            {yr}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Newsroom Cards Grid */}
                <section style={{ maxWidth: '1200px', margin: '2rem auto 6rem', padding: '0 1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                    {filteredNews.map(item => (
                      <div key={item.id} style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden', boxShadow: '0 6px 18px rgba(0,0,0,0.05)' }}>
                        <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                          <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div style={{ position: 'absolute', top: '1rem', left: '1rem', backgroundColor: 'rgba(15, 23, 42, 0.85)', color: '#ffffff', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 600 }}>
                            {item.date}
                          </div>
                          <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: '#3b82f6', color: '#ffffff', padding: '0.35rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700 }}>
                            {item.readTime}
                          </div>
                        </div>
                        <div style={{ padding: '1.75rem' }}>
                          <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                            {item.title}
                          </h3>
                          <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                            {item.summary}
                          </p>
                          <button onClick={onOpenContactPage} style={{ color: '#0284c7', fontWeight: 800, fontSize: '0.9rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                            <span>READ ARTICLE</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ============================================================ */}
            {/* 5. PRIVACY POLICY TAB */}
            {/* ============================================================ */}
            {activeTab === 'privacy-policy' && (
              <div>
                <section style={{ backgroundColor: '#0b132b', color: '#ffffff', padding: '4rem 2rem' }}>
                  <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                      Privacy Policy
                    </h1>
                    <p style={{ color: '#cbd5e1', fontSize: '1rem' }}>
                      Last updated: August 2026 • NCS Group & Affiliates
                    </p>
                  </div>
                </section>

                <section style={{ maxWidth: '1000px', margin: '4rem auto 6rem', padding: '0 1.5rem', lineHeight: 1.8, color: '#334155' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                    1. Information We Collect
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    At NCS Australia, we strictly respect your personal privacy. We collect personal information necessary to deliver IT consultancy, digital transformation services, job applicant evaluations, and contact inquiries.
                  </p>

                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                    2. How We Use Your Data
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    Your personal details, resume attachments, and contact information are used exclusively to process job applications, respond to client service inquiries, and fulfill enterprise contract requirements under Australian Privacy Principles.
                  </p>

                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                    3. Security & Sovereignty
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                    NCS enforces enterprise-grade encryption, sovereign cloud storage protocols, and ISO/IEC 27001 data governance standards to safeguard all user information against unauthorized access.
                  </p>
                </section>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* EXPLORE MORE CARDS SECTION (MATCHING SCREENSHOT 1 EXACTLY) */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#001938', // Dark Navy Background (Screenshot 1)
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

export default AboutPage;
