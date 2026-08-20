import React, { useState } from 'react';
import { ArrowRight, Sparkles, MessageSquare, Users } from 'lucide-react';

export const WorkforceSolutionsTabSection = ({ onNavCareers }) => {
  const [selectedServiceId, setSelectedServiceId] = useState('outcome');

  const servicesList = [
    {
      id: 'outcome',
      title: 'Outcome Delivery',
      tag: 'GLOBAL DELIVERY CENTRES',
      heading: 'From Overseas Centres to Outcome-Based Delivery',
      description: 'We help organisations move beyond traditional offshore delivery models by building high-performing global teams focused on measurable business outcomes. From capability design and team setup to delivery governance and continuous optimisation, we create scalable models that combine global talent, technology, and local expertise to deliver greater agility, efficiency, and business value.',
      imageUrl: '/images/hero_cyber_network.jpg',
      stat: '99.4% SLA Delivery'
    },
    {
      id: 'immigration',
      title: 'Immigration & Visa',
      tag: 'GLOBAL MOBILITY & IMMIGRATION',
      heading: 'Seamless International Relocation & Visa Compliance',
      description: 'Accelerate global expansion with end-to-end visa sponsorship, work permit processing, and immigration compliance across 150+ countries. We handle legal paperwork, tax residency assessments, and relocation logistics so your talent can work anywhere with complete peace of mind.',
      imageUrl: '/images/slider_2.jpg',
      stat: '150+ Countries'
    },
    {
      id: 'digital',
      title: 'Digital Experience',
      tag: 'DIGITAL TRANSFORMATION',
      heading: 'Human-Centred UX & Intelligent Operating Platforms',
      description: 'Reimagine customer and employee journeys through intuitive digital design, modern application development, and seamless cloud integration. We craft responsive web applications and portals that drive engagement, efficiency, and business growth.',
      imageUrl: '/images/team_collaboration.jpg',
      stat: '3x Faster Time-to-Market'
    },
    {
      id: 'bpm',
      title: 'BPM & Ops',
      tag: 'PROCESS AUTOMATION & BPM',
      heading: 'Streamlining Operations for Scalable Productivity',
      description: 'Optimise business processes through intelligent workflow automation, robotic process automation (RPA), and enterprise governance frameworks. We eliminate operational bottlenecks, reduce costs, and elevate overall performance across all departments.',
      imageUrl: '/images/slider_1.jpg',
      stat: '40% Cost Optimization'
    },
    {
      id: 'eor',
      title: 'Employer of Record',
      tag: 'EMPLOYER OF RECORD (EOR)',
      heading: 'Global Hiring Without Entity Setup',
      description: 'Hire, onboard, and manage international employees in days without opening foreign legal entities. Vebhor acts as legal employer of record handling localized employment contracts, payroll, statutory benefits, and local tax compliance seamlessly.',
      imageUrl: '/images/country_singapore.jpg',
      stat: '100% Audit Compliance'
    },
    {
      id: 'contractor',
      title: 'Contractor Management',
      tag: 'CONTRACTOR MANAGEMENT',
      heading: 'Compliant Independent Contractor Solutions',
      description: 'Engage global freelancers and independent contractors securely without misclassification risks. Our automated system handles localized agreements, multi-currency invoicing, tax documentation, and instant payout execution.',
      imageUrl: '/images/country_sydney.jpg',
      stat: '24hr Contractor Setup'
    },
    {
      id: 'vendor',
      title: 'Vendor Consolidation',
      tag: 'VENDOR CONSOLIDATION',
      heading: 'Unified Partner & Supplier Governance',
      description: 'Consolidate multiple recruitment, IT, and operational vendors under one centralized management platform. Simplify vendor contracts, SLA tracking, invoice reconciliation, and global risk management.',
      imageUrl: '/images/country_melbourne.jpg',
      stat: 'Single Invoice Flow'
    },
    {
      id: 'itsupport',
      title: 'IT Support',
      tag: 'MANAGED IT & INFRASTRUCTURE',
      heading: '24/7 Managed Tech Support & Device Provisioning',
      description: 'Empower remote and hybrid workforces with enterprise IT service desk support, laptop provisioning, endpoint security, and cloud infrastructure management tailored for global operations.',
      imageUrl: '/images/country_brisbane.jpg',
      stat: '24/7 Enterprise Support'
    },
    {
      id: 'hrsupport',
      title: 'HR Support',
      tag: 'PEOPLE & HR ADVISORY',
      heading: 'Strategic HR Services & Employee Experience',
      description: 'Elevate employee retention and organizational culture with customized HR advisory, performance management systems, local benefit benchmarking, and transparent HR operations across all regions.',
      imageUrl: '/images/country_india.jpg',
      stat: '98% Retention Rate'
    }
  ];

  const activeService = servicesList.find((s) => s.id === selectedServiceId) || servicesList[0];

  return (
    <section id="services" style={{ backgroundColor: '#F8FAFC', padding: '5.5rem 1.5rem 5rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", position: 'relative', overflow: 'hidden', borderBottom: '1px solid #E2E8F0' }}>
      {/* Subtle Ambient Radial Light */}
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '400px', background: 'radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1340px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* 1. SECTION HEADER WITH OUR SERVICES FULLY IN PURPLE CAPSULE HIGHLIGHT */}
        <div style={{ textAlign: 'center', marginBottom: '3.25rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.25rem' }}>
            <span style={{ backgroundColor: '#7916A8', color: '#ffffff', padding: '0.4rem 1.6rem', borderRadius: '18px 24px 24px 18px', boxShadow: '0 4px 20px rgba(121, 22, 168, 0.45)' }}>
              Our Services
            </span>
          </div>

          <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.9rem', lineHeight: 1.25 }}>
            Everything you need to scale global workforce & operations
          </h2>

          <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '840px', margin: '0 auto', lineHeight: 1.6, fontWeight: 400 }}>
            Explore our 9 multi-vertical workforce solutions—from Outcome-Based delivery and global mobility to Employer of Record and digital operations.
          </p>
        </div>

        {/* 2. THREE-COLUMN / ALL 9 FULLY VISIBLE WITH DOUBLE SHADOW EFFECT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '1.5rem',
            alignItems: 'stretch'
          }}
        >
          {/* LEFT COLUMN: All 9 Services Fully Visible Without Scrolling */}
          <div
            style={{
              gridColumn: 'span 4',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.45rem'
            }}
          >
            {servicesList.map((service) => {
              const isSelected = service.id === selectedServiceId;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setSelectedServiceId(service.id)}
                  onClick={() => setSelectedServiceId(service.id)}
                  style={{
                    backgroundColor: isSelected ? '#ffffff' : '#ffffff',
                    border: isSelected ? '1.5px solid #2563EB' : '1px solid #E2E8F0',
                    borderLeft: isSelected ? '4px solid #2563EB' : '1px solid #E2E8F0',
                    borderRadius: '10px',
                    padding: '0.65rem 0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: isSelected
                      ? '0 10px 20px -3px rgba(37, 99, 235, 0.16), 0 4px 6px -2px rgba(37, 99, 235, 0.08)'
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.03)',
                    transform: isSelected ? 'translateX(4px)' : 'translateX(0)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.5rem'
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: isSelected ? '#2563EB' : '#94A3B8', display: 'block', marginBottom: '0.1rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {service.tag}
                    </span>
                    <h3 style={{ fontSize: '0.92rem', fontWeight: isSelected ? 700 : 600, color: isSelected ? '#0F172A' : '#334155', margin: 0, whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                      {service.title}
                    </h3>
                  </div>

                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: isSelected ? '#2563EB' : '#F1F5F9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isSelected ? '#ffffff' : '#64748B',
                      flexShrink: 0,
                      transition: 'all 0.25s ease',
                      transform: isSelected ? 'scale(1.1)' : 'scale(1)'
                    }}
                  >
                    <ArrowRight size={13} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CENTER COLUMN: Dynamic Preview Image & Complete Original Narrative Description with Double Shadow */}
          <div
            style={{
              gridColumn: 'span 5',
              backgroundColor: '#ffffff',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '1.75rem',
              boxShadow: '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Dynamic Technology Preview Image */}
            <div
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                marginBottom: '1.25rem',
                backgroundColor: '#0F172A'
              }}
            >
              <img
                key={activeService.id}
                src={activeService.imageUrl}
                alt={activeService.heading}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'opacity 0.35s ease, transform 0.4s ease',
                  animation: 'heroImgKenBurns 8s ease-in-out infinite alternate'
                }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(15, 23, 42, 0.75) 100%)' }} />

              {/* Stat Badge Over Image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '30px',
                  color: '#55E6C1',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}
              >
                <Sparkles size={12} color="#55E6C1" />
                <span>{activeService.stat}</span>
              </div>
            </div>

            {/* Dynamic Content: Original Paragraph Only (No Extra Bullets) */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.76rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2563EB', backgroundColor: '#EFF6FF', padding: '0.25rem 0.8rem', borderRadius: '6px', display: 'inline-block', marginBottom: '0.75rem', width: 'fit-content' }}>
                {activeService.tag}
              </span>

              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#0F172A', lineHeight: 1.35, marginBottom: '0.9rem' }}>
                {activeService.heading}
              </h3>

              <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                {activeService.description}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Action Cards ("Let's Talk" & "Join Our Team") */}
          <div
            style={{
              gridColumn: 'span 3',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}
          >
            {/* Card 1: Let's Talk */}
            <div
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
              }}
              style={{
                flex: 1,
                backgroundColor: '#0A1128',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 24px rgba(10, 17, 40, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(37, 99, 235, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)';
                const circle = e.currentTarget.querySelector('.card-circle-btn');
                if (circle) circle.style.transform = 'scale(1.15) translateX(3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(10, 17, 40, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                const circle = e.currentTarget.querySelector('.card-circle-btn');
                if (circle) circle.style.transform = 'scale(1) translateX(0)';
              }}
            >
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8', marginBottom: '1.25rem' }}>
                  <MessageSquare size={20} />
                </div>
                <h4 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Let's Talk
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Ready to transform and scale your enterprise workforce? Speak with our specialists today.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#38bdf8' }}>Contact Us</span>
                <div
                  className="card-circle-btn"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0A1128',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* Card 2: Join Our Team */}
            <div
              onClick={() => {
                if (onNavCareers) {
                  onNavCareers();
                } else {
                  window.location.hash = 'careers';
                }
              }}
              style={{
                flex: 1,
                backgroundColor: '#1E1B4B',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                color: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 8px 24px rgba(30, 27, 75, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(124, 58, 237, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(192, 132, 252, 0.5)';
                const circle = e.currentTarget.querySelector('.card-circle-btn-2');
                if (circle) circle.style.transform = 'scale(1.15) translateX(3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(30, 27, 75, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                const circle = e.currentTarget.querySelector('.card-circle-btn-2');
                if (circle) circle.style.transform = 'scale(1) translateX(0)';
              }}
            >
              <div>
                <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'rgba(192, 132, 252, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c084fc', marginBottom: '1.25rem' }}>
                  <Users size={20} />
                </div>
                <h4 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem' }}>
                  Join Our Team
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
                  Build the future of workforce technology with a high-impact global career.
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem' }}>
                <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#c084fc' }}>Explore Careers</span>
                <div
                  className="card-circle-btn-2"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1E1B4B',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkforceSolutionsTabSection;
