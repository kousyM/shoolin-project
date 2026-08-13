import React, { useState } from 'react';
import { Globe, Shield, Users, FileText, Monitor, Cpu, Building2, Zap } from 'lucide-react';

export const DEEL_HOMEPAGE_SERVICES = [
  {
    id: 'outcome-delivery',
    tabName: 'Outcome Delivery',
    heroTag: 'GLOBAL DELIVERY CENTRES',
    headline: 'From Overseas Centres to Outcome-Based delivery',
    description: 'We help organisations move beyond traditional offshore delivery models by building high-performing global teams focused on measurable business outcomes. From capability design and team setup to delivery governance and continuous optimisation, we create scalable models that combine global talent, technology, and local expertise to deliver greater agility, efficiency, and business value.',
    cardBgColor: '#f8fafc',
    icon: Zap
  },
  {
    id: 'immigration',
    tabName: 'Immigration & Visa',
    heroTag: 'GLOBAL MOBILITY',
    headline: 'Immigration & Visa',
    description: 'Expand your workforce anywhere. Shoolin’s immigration and visa services handle every step—assessment, paperwork, compliance, and approvals—so your hires move across borders smoothly. Our expert partners ensure fast processing and full compliance with local regulations, keeping onboarding on track.',
    cardBgColor: '#fafaf9',
    icon: Building2
  },
  {
    id: 'digital-cx',
    tabName: 'Digital Experience',
    heroTag: 'DIGITAL TRANSFORMATION',
    headline: 'Digital Experience',
    description: 'We focus on building the digital present for startups and enterprises—creating experiences that work today and scale tomorrow. Through a powerful mix of strategy, technology, data, and human centred design, we help organisations simplify complexity, enhance customer engagement, and accelerate sustainable growth. Our consulting approach ensures every digital solution is connected, intuitive, and ready for the next stage of your business.',
    cardBgColor: '#f9fafb',
    icon: Monitor
  },
  {
    id: 'bpm',
    tabName: 'BPM & Optimisation',
    heroTag: 'PROCESS EXCELLENCE',
    headline: 'Business Process Management & Optimisation',
    description: 'We reimagine and optimise business processes to create agile, efficient, and scalable operating models. Through process transformation, automation, governance, and continuous improvement, we help organisations build intelligent, resilient, and future-ready operations that drive productivity and sustainable business value',
    cardBgColor: '#fafaf9',
    icon: Cpu
  },
  {
    id: 'eor',
    tabName: 'Employer of Record',
    heroTag: 'GLOBAL EMPLOYMENT',
    headline: 'Employer of Record',
    description: 'Expand globally without opening an entity. Shoolin handles local employment, contracts, compliance, payroll, benefits, and taxes so you can hire top talent anywhere in the world seamlessly.',
    cardBgColor: '#f8fafc',
    icon: Globe
  },
  {
    id: 'contractor',
    tabName: 'Contractor',
    heroTag: 'CONTRACTOR MANAGEMENT',
    headline: 'Contractor',
    description: 'Manage your entire contractor workforce across countries with one unified platform. Shoolin handles onboarding, contracts, compliance, invoicing, and payments—ensuring every contractor is engaged and paid correctly, no matter where they work.',
    cardBgColor: '#f9fafb',
    icon: Users
  },
  {
    id: 'vendor',
    tabName: 'Vendor',
    heroTag: 'VENDOR MANAGEMENT',
    headline: 'Vendor',
    description: 'Streamline how you work with vendors worldwide. Shoolin automates onboarding, documentation, compliance, and payouts, ensuring every vendor is verified, contracted, and managed with complete transparency.',
    cardBgColor: '#f8fafc',
    icon: Shield
  },
  {
    id: 'it-support',
    tabName: 'IT Support',
    heroTag: 'MANAGED IT SERVICES',
    headline: 'IT Support',
    description: 'Shoolin provides end to end IT assistance—from onboarding devices and managing access to resolving technical issues quickly. Your workforce gets fast, dependable support that keeps operations moving without interruption.',
    cardBgColor: '#f8fafc',
    icon: Monitor
  },
  {
    id: 'hr-support',
    tabName: 'HR Support',
    heroTag: 'HUMAN CAPITAL SUPPORT',
    headline: 'HR Support',
    description: 'From onboarding to offboarding, Shoolin delivers reliable HR support that keeps your teams informed, compliant, and productive. We manage employee queries, documentation, policy guidance, and issue resolution so your operations never slow down.',
    cardBgColor: '#fafaf9',
    icon: FileText
  }
];

export const ServicesGrid = ({ onSelectService }) => {
  const [activeTabId, setActiveTabId] = useState('outcome-delivery');

  const activeService = DEEL_HOMEPAGE_SERVICES.find((s) => s.id === activeTabId) || DEEL_HOMEPAGE_SERVICES[0];
  const IconComp = activeService.icon;

  return (
    <section id="services" className="ncs-services-section" style={{ backgroundColor: '#ffffff', padding: '2.5rem 0 4rem 0' }}>
      <div className="ncs-services-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div className="ncs-services-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '0.35rem 0.9rem', borderRadius: '50px', display: 'inline-block', marginBottom: '0.85rem' }}>
            OUR SERVICES
          </span>
          <h2 className="ncs-services-title" style={{ fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", fontSize: '1.5rem', fontWeight: 500, color: '#0f172a', letterSpacing: '-0.01em', marginBottom: '0.5rem', lineHeight: 1.3 }}>
            We help deliver business outcomes through technology and workforce solutions
          </h2>
        </div>

        {/* SINGLE ROW SHORTENED TAB BAR */}
        <div
          style={{
            borderBottom: '1px solid #e2e8f0',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            gap: '0.5rem',
            paddingBottom: '0.25rem',
            scrollbarWidth: 'none'
          }}
        >
          {DEEL_HOMEPAGE_SERVICES.map((service) => {
            const isActive = service.id === activeTabId;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTabId(service.id)}
                style={{
                  padding: '0.65rem 0.85rem',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#0284c7' : '#64748b',
                  border: 'none',
                  borderBottom: isActive ? '3px solid #0284c7' : '3px solid transparent',
                  backgroundColor: isActive ? '#f0f9ff' : 'transparent',
                  borderRadius: '6px 6px 0 0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem'
                }}
              >
                <span>{service.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* SINGLE BOX DETAILS CONTAINER (ONLY PARAGRAPH CONTENT, BUTTON REMOVED) */}
        <div
          style={{
            backgroundColor: activeService.cardBgColor,
            borderRadius: '16px',
            padding: '2.5rem 3rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 6px 20px rgba(0,0,0,0.02)',
            maxWidth: '1000px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#0284c7', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
            <IconComp size={16} />
            <span>{activeService.heroTag}</span>
          </div>

          <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", fontSize: '1.45rem', fontWeight: 500, color: '#0f172a', lineHeight: 1.3, marginBottom: '1rem' }}>
            {activeService.headline}
          </h3>

          <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.75, margin: 0, fontWeight: 400 }}>
            {activeService.description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
