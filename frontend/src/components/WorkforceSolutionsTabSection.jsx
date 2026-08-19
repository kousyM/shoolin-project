import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const WorkforceSolutionsTabSection = () => {
  const [activeTabId, setActiveTabId] = useState('outcome');

  const tabsData = [
    {
      id: 'outcome',
      label: 'Outcome Delivery',
      tag: 'GLOBAL DELIVERY CENTRES',
      heading: 'From Overseas Centres to Outcome-Based delivery',
      description: 'We help organisations move beyond traditional offshore delivery models by building high-performing global teams focused on measurable business outcomes. From capability design and team setup to delivery governance and continuous optimisation, we create scalable models that combine global talent, technology, and local expertise to deliver greater agility, efficiency, and business value.'
    },
    {
      id: 'immigration',
      label: 'Immigration & Visa',
      tag: 'GLOBAL MOBILITY & IMMIGRATION',
      heading: 'Seamless International Relocation & Visa Compliance',
      description: 'Accelerate global expansion with end-to-end visa sponsorship, work permit processing, and immigration compliance across 150+ countries. We handle legal paperwork, tax residency assessments, and relocation logistics so your talent can work anywhere with complete peace of mind.'
    },
    {
      id: 'digital',
      label: 'Digital Experience',
      tag: 'DIGITAL TRANSFORMATION',
      heading: 'Human-Centred UX & Intelligent Operating Platforms',
      description: 'Reimagine customer and employee journeys through intuitive digital design, modern application development, and seamless cloud integration. We craft responsive web applications and portals that drive engagement, efficiency, and business growth.'
    },
    {
      id: 'bpm',
      label: 'BPM & Ops',
      tag: 'PROCESS AUTOMATION & BPM',
      heading: 'Streamlining Operations for Scalable Productivity',
      description: 'Optimise business processes through intelligent workflow automation, robotic process automation (RPA), and enterprise governance frameworks. We eliminate operational bottlenecks, reduce costs, and elevate overall performance across all departments.'
    },
    {
      id: 'eor',
      label: 'Employer of Record',
      tag: 'EMPLOYER OF RECORD (EOR)',
      heading: 'Global Hiring Without Entity Setup',
      description: 'Hire, onboard, and manage international employees in days without opening foreign legal entities. Vebhor acts as legal employer of record handling localized employment contracts, payroll, statutory benefits, and local tax compliance seamlessly.'
    },
    {
      id: 'contractor',
      label: 'Contractor',
      tag: 'CONTRACTOR MANAGEMENT',
      heading: 'Compliant Independent Contractor Solutions',
      description: 'Engage global freelancers and independent contractors securely without misclassification risks. Our automated system handles localized agreements, multi-currency invoicing, tax documentation, and instant payout execution.'
    },
    {
      id: 'vendor',
      label: 'Vendor',
      tag: 'VENDOR CONSOLIDATION',
      heading: 'Unified Partner & Supplier Governance',
      description: 'Consolidate multiple recruitment, IT, and operational vendors under one centralized management platform. Simplify vendor contracts, SLA tracking, invoice reconciliation, and global risk management.'
    },
    {
      id: 'itsupport',
      label: 'IT Support',
      tag: 'MANAGED IT & INFRASTRUCTURE',
      heading: '24/7 Managed Tech Support & Device Provisioning',
      description: 'Empower remote and hybrid workforces with enterprise IT service desk support, laptop provisioning, endpoint security, and cloud infrastructure management tailored for global operations.'
    },
    {
      id: 'hrsupport',
      label: 'HR Support',
      tag: 'PEOPLE & HR ADVISORY',
      heading: 'Strategic HR Services & Employee Experience',
      description: 'Elevate employee retention and organizational culture with customized HR advisory, performance management systems, local benefit benchmarking, and transparent HR operations across all regions.'
    }
  ];

  const activeContent = tabsData.find((tab) => tab.id === activeTabId) || tabsData[0];

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '5.5rem 1.5rem 4.5rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Eyebrow Badge Tag */}
        <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#7C3AED', backgroundColor: '#EDE9FE', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.25rem' }}>
          OUR SERVICES
        </span>

        {/* Title Matching User Screenshot */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#172033', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.25 }}>
          Everything you need to scale global workforce & operations
        </h2>

        {/* Subtitle Matching User Screenshot */}
        <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '860px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 400 }}>
          Explore our multi-vertical workforce solutions—from Employer of Record and global contractor management to Outcome-Based delivery and digital transformation.
        </p>

        {/* Single Line Horizontal Tab Navigation Bar - All 9 In One Line, No Scroll, Zero Overlap */}
        <div
          className="workforce-tabs-bar"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
            gap: '0.2rem',
            backgroundColor: '#F1F5F9',
            padding: '0.35rem',
            borderRadius: '50px',
            maxWidth: '1280px',
            margin: '0 auto 3rem auto',
            border: '1px solid #E2E8F0',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)',
            overflow: 'hidden',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`workforce-tab-btn ${isActive ? 'active' : ''}`}
                style={{
                  background: isActive ? 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' : 'transparent',
                  border: 'none',
                  padding: '0.65rem 0.2rem',
                  fontSize: 'clamp(0.72rem, 0.85vw, 0.84rem)',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#ffffff' : '#64748B',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                  whiteSpace: 'nowrap',
                  textAlign: 'center',
                  minWidth: 0,
                  width: '100%',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  boxShadow: isActive ? '0 4px 14px rgba(37, 99, 235, 0.35)' : 'none'
                }}
                title={tab.label}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Animated Active Content Card */}
        <div
          key={activeContent.id}
          className="workforce-active-card animated-fade-slide"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            padding: '3.5rem 3.5rem',
            textAlign: 'left',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.06)',
            border: '1px solid #E2E8F0',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Subtle Accent Glow Top Border */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, #2563EB 0%, #7C3AED 50%, #10B981 100%)' }} />

          {/* Active Category Tag */}
          <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2563EB', backgroundColor: '#EFF6FF', padding: '0.35rem 1rem', borderRadius: '6px', display: 'inline-block', marginBottom: '1.25rem' }}>
            {activeContent.tag}
          </span>

          {/* Card Heading */}
          <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#172033', letterSpacing: '-0.02em', marginBottom: '1.25rem', lineHeight: 1.3 }}>
            {activeContent.heading}
          </h3>

          {/* Card Description */}
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
            {activeContent.description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default WorkforceSolutionsTabSection;
