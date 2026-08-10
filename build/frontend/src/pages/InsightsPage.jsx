import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, ArrowLeft, Search, Filter, ChevronLeft, ChevronRight, X, BookOpen, Clock, Tag } from 'lucide-react';

export const InsightsPage = ({ onNavHome, onNavAbout, onNavCareers, onNavPartners, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  // Featured Insights Carousel State
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [hoveredInsightId, setHoveredInsightId] = useState(null);

  // Filter States
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedContentType, setSelectedContentType] = useState('All');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [selectedArticle, setSelectedArticle] = useState(null); // Modal view for detail

  // Featured Insights List (Screenshot 1 & 2)
  const featuredInsights = [
    {
      id: 'f1',
      category: 'WHITE PAPER',
      title: '10x: from AI promise to ROI',
      summary: 'This NCS AI playbook outlines practical steps to help organisations move from experimentation to execution, using the 3R framework to ask the right questions and the four operating pillars of Cheaper, Better, Faster and Safer to deliver measurable business outcomes. It is a grounded guide for leaders built on insights gathered from enterprise deployments across Australia and Asia Pacific.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      topic: 'AI Governance',
      industry: 'Public Sector & Government',
      date: 'Jun 2026'
    },
    {
      id: 'f2',
      category: 'REPORT',
      title: 'Sovereign AI & Data Resilience in Australia',
      summary: 'Why enterprise leaders are shifting from generic cloud platforms to sovereign data governance. Learn how Australian organisations protect sensitive workloads while harnessing generative AI models at scale.',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      topic: 'Data & AI',
      industry: 'Financial Services',
      date: 'May 2026'
    },
    {
      id: 'f3',
      category: 'ARTICLE',
      title: 'Platform, people, and process: why AI governance is the missing piece',
      summary: 'A comprehensive study on aligning AI technologies, organizational talent, and risk management to achieve scalable, safe enterprise modernisations.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      topic: 'AI Governance',
      industry: 'Health & Life Sciences',
      date: 'Apr 2026'
    },
    {
      id: 'f4',
      category: 'CASE STUDY',
      title: 'Databricks Data + AI Summit 2026: Shift to AI Powered Innovation',
      summary: 'Key takeaways on scaling lakehouse architecture and sovereign data governance for generative AI enterprise models across public sector infrastructure.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      topic: 'Cloud & Infrastructure',
      industry: 'Telecommunications',
      date: 'Mar 2026'
    }
  ];

  // All Insights List (Screenshots 2, 3, 4)
  const allInsights = [
    {
      id: 1,
      type: 'WHITE PAPER',
      title: 'Perspectives on AI & Technology Governance',
      summary: 'Practical frameworks for CTOs and CDOs to govern agentic AI workflows, safeguard sensitive data assets, and measure real return on investment.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      topic: 'AI Governance',
      industry: 'Public Sector & Government',
      contentType: 'White Paper',
      subCategories: 'AI • Technology • Governance',
      date: 'May 28'
    },
    {
      id: 2,
      type: 'ARTICLE',
      title: 'Sovereign capability is not a data centre',
      summary: 'Sovereignty goes far beyond physical server locations. It encompasses data ownership, operational control, and indigenous tech capabilities.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
      topic: 'Data & AI',
      industry: 'Public Sector & Government',
      contentType: 'Article',
      subCategories: 'AI • Data • Transformation',
      date: 'May 27'
    },
    {
      id: 3,
      type: 'ARTICLE',
      title: 'South Australia moved early on AI. Now comes the make-or-break moment',
      summary: 'How South Australian government departments are transitioning early AI pilot projects into core citizen services.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      topic: 'Digital Transformation',
      industry: 'Public Sector & Government',
      contentType: 'Article',
      subCategories: 'AI • Innovation • Policy',
      date: 'May 28'
    },
    {
      id: 4,
      type: 'ARTICLE',
      title: 'From AI assistants to AI teammates: The Next Step for Enterprise AI',
      summary: 'Moving beyond basic Q&A chatbots into multi-agent systems that execute complex business workflows autonomously.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      topic: 'Data & AI',
      industry: 'Financial Services',
      contentType: 'Article',
      subCategories: 'Agentic AI • Enterprise • Automation',
      date: 'May 25'
    },
    {
      id: 5,
      type: 'CASE STUDY',
      title: 'Transforming compliance controls with AI in financial services',
      summary: 'Automating regulatory compliance checks and fraud detection with machine learning audit pipelines.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      topic: 'Cybersecurity',
      industry: 'Financial Services',
      contentType: 'Case Study',
      subCategories: 'AI • Compliance • Finance',
      date: 'May 25'
    },
    {
      id: 6,
      type: 'REPORT',
      title: 'State of Cloud Modernisation in Australian Enterprise 2026',
      summary: 'Benchmark findings from 300+ Australian IT decision makers on hybrid cloud migration costs, security challenges, and AI readiness.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      topic: 'Cloud & Infrastructure',
      industry: 'Telecommunications',
      contentType: 'Report',
      subCategories: 'Cloud • Strategy • Research',
      date: 'May 20'
    }
  ];

  // Filter Logic
  const filteredInsights = useMemo(() => {
    return allInsights.filter((item) => {
      if (selectedTopic !== 'All' && item.topic !== selectedTopic) return false;
      if (selectedIndustry !== 'All' && item.industry !== selectedIndustry) return false;
      if (selectedContentType !== 'All' && item.contentType !== selectedContentType) return false;
      return true;
    });
  }, [selectedTopic, selectedIndustry, selectedContentType]);

  const currentFeatured = featuredInsights[featuredIndex];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* ============================================================ */}
        {/* HEADER SECTION (MATCHING SCREENSHOT 1 TOP) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '4rem 2rem 3rem', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
            <div>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                All Insights
              </h1>
            </div>
            <div style={{ maxWidth: '580px' }}>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                The latest insights, ideas, and perspectives from NCS. Explore a cross-section of up-to-date content on the trends shaping the future of business and society.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FEATURED INSIGHTS CAROUSEL (MATCHING SCREENSHOT 1 & 2 TOP) */}
        {/* ============================================================ */}
        <section style={{ maxWidth: '1200px', margin: '3.5rem auto 4rem', padding: '0 1.5rem' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 0, alignItems: 'stretch' }}>
              {/* Left Image */}
              <div style={{ gridColumn: 'span 6', minHeight: '380px', position: 'relative' }}>
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Right Content */}
              <div style={{ gridColumn: 'span 6', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f8fafc' }}>
                <div>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#64748b', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.75rem' }}>
                    FEATURED INSIGHTS
                  </span>
                  <span style={{ display: 'inline-block', backgroundColor: '#e0e7ff', color: '#3730a3', fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
                    {currentFeatured.category}
                  </span>
                  <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '1rem' }}>
                    {currentFeatured.title}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    {currentFeatured.summary}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid #e2e8f0' }}>
                  <button
                    onClick={() => setSelectedArticle(currentFeatured)}
                    style={{ padding: '0.65rem 1.5rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 800, fontSize: '0.88rem', borderRadius: '4px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <span>READ ARTICLE</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Sliders Navigation */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1rem', marginTop: '1.25rem' }}>
            <button
              onClick={() => setFeaturedIndex((prev) => (prev === 0 ? featuredInsights.length - 1 : prev - 1))}
              style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #94a3b8', backgroundColor: '#ffffff', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <ChevronLeft size={20} />
            </button>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1e293b' }}>
              {featuredIndex + 1}/{featuredInsights.length}
            </span>
            <button
              onClick={() => setFeaturedIndex((prev) => (prev === featuredInsights.length - 1 ? 0 : prev + 1))}
              style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid #94a3b8', backgroundColor: '#ffffff', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </section>

        {/* ============================================================ */}
        {/* FILTER BAR SECTION (MATCHING SCREENSHOT 2 MIDDLE) */}
        {/* ============================================================ */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 2.5rem', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '1.25rem 0' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#002b49', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              FILTER BY
            </span>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', flex: 1, justifyContent: 'flex-end' }}>
              {/* Topic Dropdown */}
              <div style={{ minWidth: '220px' }}>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 1rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', backgroundColor: '#ffffff', fontWeight: 600, color: '#1e293b' }}
                >
                  <option value="All">Topic (All)</option>
                  <option value="AI Governance">AI Governance</option>
                  <option value="Data & AI">Data & AI</option>
                  <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Digital Transformation">Digital Transformation</option>
                </select>
              </div>

              {/* Industry Dropdown */}
              <div style={{ minWidth: '220px' }}>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 1rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', backgroundColor: '#ffffff', fontWeight: 600, color: '#1e293b' }}
                >
                  <option value="All">Industry (All)</option>
                  <option value="Public Sector & Government">Public Sector & Government</option>
                  <option value="Financial Services">Financial Services</option>
                  <option value="Health & Life Sciences">Health & Life Sciences</option>
                  <option value="Telecommunications">Telecommunications</option>
                </select>
              </div>

              {/* Content Type Dropdown */}
              <div style={{ minWidth: '220px' }}>
                <select
                  value={selectedContentType}
                  onChange={(e) => setSelectedContentType(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem 1rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', backgroundColor: '#ffffff', fontWeight: 600, color: '#1e293b' }}
                >
                  <option value="All">Content Type (All)</option>
                  <option value="White Paper">White Paper</option>
                  <option value="Article">Article</option>
                  <option value="Report">Report</option>
                  <option value="Case Study">Case Study</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0284c7' }}>
              {filteredInsights.length * 32} Records Found
            </span>
          </div>
        </section>

        {/* ============================================================ */}
        {/* INSIGHTS GRID SECTION (BLUE BACKGROUND APPEARS ONLY ON HOVER) */}
        {/* ============================================================ */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 5rem', padding: '0 1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {filteredInsights.map((insight) => {
              const isHovered = hoveredInsightId === insight.id;

              return (
                <div
                  key={insight.id}
                  onMouseEnter={() => setHoveredInsightId(insight.id)}
                  onMouseLeave={() => setHoveredInsightId(null)}
                  onClick={() => setSelectedArticle(insight)}
                  style={{
                    backgroundColor: isHovered ? '#001b3a' : '#ffffff',
                    color: isHovered ? '#ffffff' : '#0f172a',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    boxShadow: isHovered ? '0 15px 30px rgba(0,27,58,0.25)' : '0 4px 12px rgba(0,0,0,0.05)',
                    transition: 'all 0.25s ease',
                    minHeight: '420px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {isHovered ? (
                    // BLUE BACKGROUND ON HOVER (MATCHING SCREENSHOT 3 RIGHT)
                    <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between', backgroundColor: '#001b3a', color: '#ffffff' }}>
                      <div>
                        <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#38bdf8', display: 'block', marginBottom: '1.25rem' }}>
                          {insight.type}
                        </span>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                          {insight.title}
                        </h3>
                        <p style={{ fontSize: '0.95rem', color: '#cbd5e1', fontWeight: 600, letterSpacing: '0.03em' }}>
                          {insight.subCategories || 'AI • Data • Transformation'}
                        </p>
                      </div>

                      <div style={{ paddingTop: '2rem' }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                          READ MORE <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  ) : (
                    // DEFAULT WHITE CARD LAYOUT
                    <div>
                      <div style={{ height: '220px', overflow: 'hidden' }}>
                        <img src={insight.image} alt={insight.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div>
                          <span style={{ display: 'inline-block', backgroundColor: '#e2e8f0', color: '#334155', fontSize: '0.72rem', fontWeight: 800, padding: '0.2rem 0.6rem', borderRadius: '3px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {insight.type}
                          </span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>
                          {insight.title}
                        </h3>
                        <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginTop: '0.5rem' }}>
                          {insight.topic} | {insight.date}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* PAGINATION BAR SECTION (MATCHING SCREENSHOT 4 BOTTOM) */}
        {/* ============================================================ */}
        <section style={{ maxWidth: '1200px', margin: '0 auto 6rem', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button
                disabled={currentPageNum === 1}
                onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                style={{ background: 'none', border: 'none', color: currentPageNum === 1 ? '#cbd5e1' : '#0284c7', fontWeight: 800, fontSize: '0.85rem', cursor: currentPageNum === 1 ? 'default' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                ← PREV
              </button>

              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPageNum(num)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: currentPageNum === num ? '2px solid #0284c7' : '1px solid transparent',
                    backgroundColor: currentPageNum === num ? '#ffffff' : 'transparent',
                    color: currentPageNum === num ? '#0284c7' : '#475569',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  {num}
                </button>
              ))}

              <button
                onClick={() => setCurrentPageNum((p) => Math.min(6, p + 1))}
                style={{ background: 'none', border: 'none', color: '#0284c7', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              >
                NEXT →
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#475569', fontWeight: 600 }}>
              <span>Go to page:</span>
              <select
                value={currentPageNum}
                onChange={(e) => setCurrentPageNum(Number(e.target.value))}
                style={{ padding: '0.35rem 0.75rem', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '0.88rem', fontWeight: 700, outline: 'none' }}
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
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

        {/* ARTICLE DETAIL MODAL VIEW */}
        {selectedArticle && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.85)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', maxWidth: '800px', width: '100%', padding: '3rem', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', maxHeight: '90vh', overflowY: 'auto' }}>
              <button
                onClick={() => setSelectedArticle(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={24} />
              </button>

              <span style={{ display: 'inline-block', backgroundColor: '#e0e7ff', color: '#3730a3', fontSize: '0.78rem', fontWeight: 800, padding: '0.3rem 0.75rem', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                {selectedArticle.category || selectedArticle.type}
              </span>

              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '1rem' }}>
                {selectedArticle.title}
              </h2>

              <p style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600, marginBottom: '2rem' }}>
                Published by NCS Insights Team • {selectedArticle.date || '2026'}
              </p>

              <img src={selectedArticle.image} alt={selectedArticle.title} style={{ width: '100%', height: '360px', objectFit: 'cover', borderRadius: '8px', marginBottom: '2rem' }} />

              <div style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  {selectedArticle.summary}
                </p>
                <p style={{ marginBottom: '1.5rem' }}>
                  As Australian government agencies and enterprise workloads evolve, adopting sovereign technology frameworks is essential for long-term scalability and security.
                </p>
              </div>

              <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedArticle(null)}
                  style={{ padding: '0.75rem 2rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 700, borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default InsightsPage;
