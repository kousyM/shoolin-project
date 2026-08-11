import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Monitor, Share2, Shield, CheckCircle, FileText, PieChart, Layers, HelpCircle, Mail, ChevronRight } from 'lucide-react';

export const ServicesPage = ({ initialCategory = 'cloud', onNavHome, onNavServices, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavChallengeUs, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || 'cloud'); // 'cloud' | 'databricks' | 'advisory'
  const [activeSubTab, setActiveSubTab] = useState('overview');

  const scrollToSection = (id) => {
    setActiveSubTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDatabricksPage = activeCategory === 'databricks' || activeCategory === 'databricks-solutions';
  const isCloudPage = activeCategory === 'cloud' || activeCategory === 'cloud-and-infrastructure';

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavServices={(cat) => {
          if (cat) setActiveCategory(cat);
          window.scrollTo(0, 0);
        }}
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
        {/* HERO BANNER SECTION (MATCHING SCREENSHOT) */}
        {/* ============================================================ */}
        <section
          style={{
            background: isDatabricksPage
              ? 'linear-gradient(135deg, #001b3a 0%, #003875 50%, #0056b3 100%)'
              : isCloudPage
              ? 'linear-gradient(135deg, #2b24a3 0%, #6d1b7d 45%, #be1b70 100%)'
              : '#004799',
            color: '#ffffff',
            padding: '5.5rem 2rem 5.5rem',
            position: 'relative'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '720px' }}>
              <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3.3rem', fontWeight: 800, marginBottom: '1.25rem', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                {isDatabricksPage ? 'Databricks' : isCloudPage ? 'Become a cloud-first organisation' : 'Shaping your digital transformation'}
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#f1f5f9', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                {isDatabricksPage
                  ? 'NCS is a distinguished member of the Databricks Delivery Partner Program and a recognised Databricks Partner in the region. Our team boasts 117 technically certified consultants and over 100 technically trained professionals, ensuring top tier expertise and service.'
                  : isCloudPage
                  ? 'Our services can help you achieve a modern, scalable foundation that supports your business goals.'
                  : 'Align your IT strategy to enable the business outcomes across people, process and technology.'}
              </p>
            </div>

            {/* Databricks Right Banner Logo matching Screenshot 1 */}
            {isDatabricksPage && (
              <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '1.75rem 2.5rem', borderRadius: '12px', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#ff3600', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 900, fontSize: '1.5rem' }}>
                  ◇
                </div>
                <div>
                  <span style={{ fontSize: '2.2rem', fontWeight: 900, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.03em', color: '#ffffff' }}>
                    databricks
                  </span>
                  <p style={{ color: '#cbd5e1', fontSize: '0.8rem', margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    DELIVERY PARTNER PROGRAM
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ============================================================ */}
        {/* IN-PAGE SUB-NAVIGATION BAR (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', sticky: 'top', top: 0, zIndex: 10 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '3rem', padding: '0 2rem' }}>
            {(isDatabricksPage ? [
              { id: 'offerings', label: 'Our offerings' },
              { id: 'case-studies', label: 'Case studies' },
              { id: 'insights', label: 'Insights' },
              { id: 'meet-experts', label: 'Meet our experts' },
              { id: 'lets-talk', label: "Let's talk" }
            ] : isCloudPage ? [
              { id: 'overview', label: 'Overview' },
              { id: 'case-studies', label: 'Case studies' },
              { id: 'insights', label: 'Insights' },
              { id: 'meet-expert', label: 'Meet our expert' },
              { id: 'contact-us', label: 'Contact us' }
            ] : [
              { id: 'overview', label: 'Overview' },
              { id: 'case-studies', label: 'Case studies' },
              { id: 'insights', label: 'Insights' },
              { id: 'contact-us', label: 'Contact us' }
            ]).map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                style={{
                  padding: '1.1rem 0.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeSubTab === tab.id ? '3px solid #004799' : '3px solid transparent',
                  color: activeSubTab === tab.id ? '#004799' : '#475569',
                  fontWeight: activeSubTab === tab.id ? 800 : 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* SECTION 1: DATABRICKS PARTNER PROGRAM (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        {isDatabricksPage && (
          <section id="offerings" style={{ padding: '5rem 2rem 4rem', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '2.5rem' }}>
                Databricks partner program
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem', textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
                <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#ff3600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CERTIFIED PARTNER</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Databricks Delivery Partner Program (DPP)
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                    As a verified DPP member, NCS delivers end-to-end Lakehouse migrations, Delta Lake optimisations, and enterprise AI platform deployment with guaranteed quality.
                  </p>
                </div>

                <div style={{ backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#004799', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CONSULTING PARTNER</span>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Databricks Consulting Partner
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                    Our team of 117+ certified engineers work directly with enterprises to design sovereign data platforms, real-time streaming, and generative AI model governance.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* SECTION 2: DATABRICKS VALIDATED QUALIFICATIONS (MATCHING SCREENSHOT 2) */}
        {/* ============================================================ */}
        {isDatabricksPage && (
          <section style={{ padding: '5rem 2rem 5rem', backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                Databricks validated qualifications
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, maxWidth: '820px', margin: '0 auto 3.5rem' }}>
                Databricks leading pan-APAC partner with capabilities across the region including Australia, Singapore, Hong Kong and others, and is part of its Databricks Delivery Partner Program (DPP)
              </p>

              {/* 3 Counter Stats Columns matching Screenshot 2 */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', alignItems: 'center' }}>
                {/* Counter 1 */}
                <div style={{ borderRight: '1px solid #cbd5e1', padding: '1rem 1.5rem' }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '4.2rem', fontWeight: 800, color: '#e11d48', lineHeight: 1 }}>
                    117
                  </div>
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginTop: '1rem', margin: '1rem 0 0 0' }}>
                    Technical trained
                  </p>
                </div>

                {/* Counter 2 */}
                <div style={{ borderRight: '1px solid #cbd5e1', padding: '1rem 1.5rem' }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '4.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                    100 +
                  </div>
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginTop: '1rem', margin: '1rem 0 0 0' }}>
                    Technical certified
                  </p>
                </div>

                {/* Counter 3 */}
                <div style={{ padding: '1rem 1.5rem' }}>
                  <div style={{ fontFamily: "'Outfit', sans-serif", fontSize: '4.2rem', fontWeight: 800, color: '#0284c7', lineHeight: 1 }}>
                    45
                  </div>
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginTop: '1rem', margin: '1rem 0 0 0' }}>
                    Databricks Certifications
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* OVERVIEW SECTION 1: FOR NON-DATABRICKS PAGES */}
        {/* ============================================================ */}
        {!isDatabricksPage && (
          <section id="overview" style={{ padding: '5rem 2rem 4rem', backgroundColor: '#ffffff' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                {isCloudPage ? 'Right size your journey to cloud' : 'Thrive in the digital age'}
              </h2>
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '820px', margin: '0 auto 4rem' }}>
                {isCloudPage
                  ? 'Navigating cloud adoption requires a balanced strategy across migration, modernise, security, and financial governance. We help enterprise leaders accelerate their cloud journey while keeping costs predictable and workloads resilient.'
                  : "Your digital transformation needs are specific to your organisation. Our Advisory team's experience, deep industry knowledge and technical expertise will help you plan and execute your digital transformation agenda successfully."}
              </p>

              {/* 3 Column Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', textAlign: 'left' }}>
                {isCloudPage ? (
                  <>
                    <div style={{ padding: '2rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ width: '56px', height: '56px', color: '#00a8e8' }}>
                        <Monitor size={48} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Cloud Strategy & Migration
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        Seamlessly transition legacy applications and workloads to AWS, Azure, and Google Cloud with zero downtime and optimized architecture.
                      </p>
                    </div>

                    <div style={{ padding: '2rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ width: '56px', height: '56px', color: '#00a8e8' }}>
                        <Layers size={48} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Cloud Native & Kubernetes
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        Build scalable, containerised applications powered by Kubernetes, microservices, and serverless compute platforms.
                      </p>
                    </div>

                    <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ width: '56px', height: '56px', color: '#00a8e8' }}>
                        <Shield size={48} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        FinOps & Governance
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        Maximise ROI with automated cloud cost optimization, continuous compliance monitoring, and sovereign security controls.
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ padding: '2rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ width: '56px', height: '56px', color: '#00a8e8' }}>
                        <Monitor size={48} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        IT strategy
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        Practical, implementable strategies that support business objectives while moving IT towards the 'new' IT.
                      </p>
                    </div>

                    <div style={{ padding: '2rem 1.5rem', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ width: '56px', height: '56px', color: '#00a8e8' }}>
                        <Share2 size={48} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Business case
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        Crafting strategic IT solutions tailored to client needs for enhanced efficiency and productivity.
                      </p>
                    </div>

                    <div style={{ padding: '2rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ width: '56px', height: '56px', color: '#00a8e8' }}>
                        <FileText size={48} strokeWidth={1.8} />
                      </div>
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Program reviews
                      </h3>
                      <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                        Evaluating program effectiveness, identifying improvements, and maximizing efficiency.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* CASE STUDIES SECTION */}
        {/* ============================================================ */}
        <section id="case-studies" style={{ padding: '5rem 2rem 6rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '3.5rem' }}>
              Case studies
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {/* Case Study 1 */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Databricks Lakehouse" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.4, margin: 0 }}>
                    {isDatabricksPage ? 'Building real-time Delta Lake architecture for tier-1 bank to process 5B daily transactions' : isCloudPage ? 'Migrating 300+ legacy workloads to AWS with zero service interruption' : 'Transforming compliance controls with AI in financial services'}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '0.75rem' }}>
                    {isDatabricksPage ? 'Unifying data engineering, governance, and fraud detection model deployment.' : isCloudPage ? 'Modernising enterprise core architecture while guaranteeing sovereign security compliance.' : 'Automating regulatory compliance and risk monitoring with generative AI.'}
                  </p>
                </div>
              </div>

              {/* Case Study 2 */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Healthcare Analytics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.4, margin: 0 }}>
                    {isDatabricksPage ? 'Accelerating clinical data analytics with Databricks Lakehouse for healthcare network' : isCloudPage ? 'Building a sovereign hybrid cloud platform for Australian public sector' : 'When a leading education provider set out to reimagine student engagement'}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '0.75rem' }}>
                    {isDatabricksPage ? 'Enabling multi-party genomic research with Unity Catalog fine-grained security.' : isCloudPage ? 'Enabling multi-agency data sharing with automated landing zone governance.' : 'Deploying personalized mobile student portals and automated digital administration.'}
                  </p>
                </div>
              </div>

              {/* Case Study 3 */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #cbd5e1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80" alt="Hadoop Migration" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.4, margin: 0 }}>
                    {isDatabricksPage ? 'Migrating legacy Hadoop cluster to Databricks on AWS saving 45% annual infrastructure cost' : isCloudPage ? 'Reducing enterprise multi-cloud expenditure by 38% with FinOps' : 'Raising the bar for cashless school payments'}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', marginTop: '0.75rem' }}>
                    {isDatabricksPage ? 'Automating serverless compute scaling and rightsizing workload clusters.' : isCloudPage ? 'Automating resource scaling and rightsizing workloads across AWS and Azure.' : 'Streamlining payment ecosystems across 400+ schools.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* INSIGHTS SECTION */}
        {/* ============================================================ */}
        <section id="insights" style={{ padding: '5rem 2rem 6rem', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '3.5rem' }}>
              Insights
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
              <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden', display: 'flex', backgroundColor: '#f8fafc' }}>
                <div style={{ width: '40%', minHeight: '200px' }}>
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" alt="Databricks AI Summit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: '60%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#ff3600', textTransform: 'uppercase' }}>WHITE PAPER</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', lineHeight: 1.3 }}>
                    Databricks Data + AI Summit 2026: The Shift to AI Innovation
                  </h3>
                  <button onClick={onNavInsights} style={{ marginTop: '1.25rem', background: 'none', border: 'none', color: '#004799', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: 0 }}>
                    READ INSIGHT <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              <div style={{ border: '1px solid #cbd5e1', borderRadius: '8px', overflow: 'hidden', display: 'flex', backgroundColor: '#f8fafc' }}>
                <div style={{ width: '40%', minHeight: '200px' }}>
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" alt="Lakehouse Intelligence" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ width: '60%', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase' }}>REPORT</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginTop: '0.5rem', lineHeight: 1.3 }}>
                    Building Sovereign Data Intelligence on Databricks Lakehouse Platform
                  </h3>
                  <button onClick={onNavInsights} style={{ marginTop: '1.25rem', background: 'none', border: 'none', color: '#004799', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', padding: 0 }}>
                    READ INSIGHT <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* MEET OUR EXPERTS SECTION */}
        {/* ============================================================ */}
        {(isDatabricksPage || isCloudPage) && (
          <section id={isDatabricksPage ? "meet-experts" : "meet-expert"} style={{ padding: '5rem 2rem 6rem', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', textAlign: 'center', marginBottom: '3.5rem' }}>
                Meet our {isDatabricksPage ? 'experts' : 'expert'}
              </h2>

              <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #cbd5e1', padding: '3rem', display: 'flex', gap: '2.5rem', alignItems: 'center', boxShadow: '0 8px 25px rgba(0,0,0,0.06)' }}>
                <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: isDatabricksPage ? '4px solid #ff3600' : '4px solid #00a8e8' }}>
                  <img src={isDatabricksPage ? "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" : "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"} alt="Expert Leader" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: isDatabricksPage ? '#ff3600' : '#00a8e8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {isDatabricksPage ? 'DATABRICKS PRACTICE DIRECTOR' : 'PRACTICE LEAD'}
                  </span>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    {isDatabricksPage ? 'Sarah Chen' : 'David Miller'}
                  </h3>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: '#004799', margin: 0 }}>
                    {isDatabricksPage ? 'Vice President, Databricks & Data AI Practice' : 'Vice President, Cloud & Infrastructure Practice'}
                  </p>
                  <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>
                    {isDatabricksPage
                      ? 'Sarah leads the Databricks Center of Excellence across APAC. With 18+ years in big data engineering, Delta Lake, and enterprise generative AI, she empowers organizations to build sovereign Lakehouse platforms.'
                      : 'David leads cloud engineering, multi-cloud modernise, and infrastructure transformation across Australia. With 20+ years in enterprise IT, he empowers organisations to build sovereign, resilient cloud platforms.'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* LET'S TALK / CONTACT US SECTION */}
        {/* ============================================================ */}
        <section id={isDatabricksPage ? "lets-talk" : "contact-us"} style={{ backgroundColor: isDatabricksPage ? '#001b3a' : isCloudPage ? '#2b24a3' : '#004799', color: '#ffffff', padding: '5rem 2rem 5.5rem', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.25rem' }}>
              {isDatabricksPage ? "Let's talk about your Databricks journey" : isCloudPage ? 'Ready to accelerate your cloud transformation?' : 'Ready to accelerate your digital transformation?'}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#e2e8f0', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              {isDatabricksPage
                ? 'Get in touch with our certified Databricks specialists to architect your Lakehouse and scale enterprise AI initiatives.'
                : isCloudPage
                ? 'Get in touch with our Cloud & Infrastructure experts to plan your multi-cloud strategy, container modernise, and FinOps governance.'
                : 'Get in touch with our Advisory experts to plan your strategy, evaluate program efficiency, and optimize cloud investments.'}
            </p>
            <button
              onClick={onOpenContactPage}
              style={{
                padding: '0.85rem 2.5rem',
                backgroundColor: '#ffffff',
                color: isDatabricksPage ? '#001b3a' : isCloudPage ? '#2b24a3' : '#004799',
                fontWeight: 800,
                fontSize: '1rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>{isDatabricksPage ? "LET'S TALK" : 'CONTACT US'}</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default ServicesPage;
