import React, { useState } from 'react';
import { Zap } from 'lucide-react';

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
      label: 'BPM & Optimisation',
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
    <section style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem 4rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Eyebrow Badge Tag */}
        <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.25rem' }}>
          OUR SERVICES
        </span>

        {/* Title Matching User Screenshot */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.25 }}>
          Everything you need to scale global workforce & operations
        </h2>

        {/* Subtitle Matching User Screenshot */}
        <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '860px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 400 }}>
          Explore our multi-vertical workforce solutions—from Employer of Record and global contractor management to Outcome-Based delivery and digital transformation.
        </p>

        {/* Single Line Horizontal Tab Navigation Bar */}
        <div
          className="workforce-tabs-bar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: '0.15rem',
            borderBottom: '1px solid #e2e8f0',
            marginBottom: '3rem',
            paddingBottom: '0.25rem',
            width: '100%'
          }}
        >
          {tabsData.map((tab) => {
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                style={{
                  background: isActive ? '#f0f9ff' : 'transparent',
                  border: 'none',
                  borderBottom: isActive ? '3px solid #0284c7' : '3px solid transparent',
                  padding: '0.65rem 0.85rem',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0284c7' : '#64748b',
                  borderRadius: '6px 6px 0 0',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Content Card Matching User Screenshot */}
        <div
          className="workforce-active-card"
          style={{
            backgroundColor: '#f8fafc',
            borderRadius: '24px',
            border: '1px solid #f1f5f9',
            padding: '3.5rem 3.5rem 3.5rem 3.5rem',
            textAlign: 'left',
            maxWidth: '1020px',
            margin: '0 auto',
            boxShadow: '0 4px 20px rgba(0,0,0,0.015)'
          }}
        >
          {/* Cyan Tag with Lightning Icon */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#0284c7', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
            <Zap size={16} color="#0284c7" />
            <span>{activeContent.tag}</span>
          </div>

          {/* Heading */}
          <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
            {activeContent.heading}
          </h3>

          {/* Paragraph Narrative */}
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.8, margin: 0, fontWeight: 400 }}>
            {activeContent.description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default WorkforceSolutionsTabSection;
