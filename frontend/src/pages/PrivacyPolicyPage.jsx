import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ShieldCheck, Lock, CheckCircle2, ChevronRight, Scale, Bot, UserCheck, Mail, ArrowRight, MessageSquare } from 'lucide-react';

export const PrivacyPolicyPage = ({
  onNavHome,
  onNavServices,
  onNavAbout,
  onNavCareers,
  onNavPartners,
  onNavInsights,
  onNavChallengeUs,
  onNavVisa,
  onOpenContactPage,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const tableData = [
    {
      srNo: 1,
      purpose: 'Managing job applications and recruitment processes',
      legalBasis: 'Contractual necessity',
      badgeColor: '#E11D48',
      badgeBg: '#FEE2E2'
    },
    {
      srNo: 2,
      purpose: 'Assessing suitability for positions applied',
      legalBasis: 'Legitimate interest',
      badgeColor: '#0F172A',
      badgeBg: '#F1F5F9'
    },
    {
      srNo: 3,
      purpose: 'Conducting interviews and assessments (including AI‑assisted interviews, where applicable)',
      legalBasis: 'Legitimate interest',
      badgeColor: '#0F172A',
      badgeBg: '#F1F5F9'
    },
    {
      srNo: 4,
      purpose: 'Verifying qualifications, experience, and eligibility',
      legalBasis: 'Legal obligation / legitimate interest',
      badgeColor: '#0F172A',
      badgeBg: '#F1F5F9'
    },
    {
      srNo: 5,
      purpose: 'Communicating recruitment updates and opportunities',
      legalBasis: 'Consent',
      badgeColor: '#059669',
      badgeBg: '#D1FAE5'
    },
    {
      srNo: 6,
      purpose: 'Improving recruitment platforms and processes',
      legalBasis: 'Legitimate interest',
      badgeColor: '#0F172A',
      badgeBg: '#F1F5F9'
    },
    {
      srNo: 7,
      purpose: 'Meeting legal, audit, and regulatory requirements',
      legalBasis: 'Legal obligation',
      badgeColor: '#B91C1C',
      badgeBg: '#FEE2E2'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased" style={{ fontFamily: "'Archivo', sans-serif" }}>
      {/* 1. Header Navbar */}
      <Navbar
        activePage="privacy-policy"
        onOpenContactPage={onOpenContactPage}
        onNavHome={onNavHome}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavServices={onNavServices}
        onNavChallengeUs={onNavChallengeUs}
        onNavVisa={onNavVisa}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      {/* 2. Hero Header Banner - Compact & Crisp Headings */}
      <header
        style={{
          backgroundColor: '#090D1A',
          color: '#ffffff',
          padding: '3.5rem 2rem 3rem',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        {/* Subtle Ambient Red Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '10%',
            width: '450px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(225, 29, 72, 0.15) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: '#94a3b8', marginBottom: '1rem' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (onNavHome) onNavHome();
              }}
              style={{ color: '#94a3b8', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              Home
            </a>
            <ChevronRight size={13} />
            <span style={{ color: '#E11D48', fontWeight: 600 }}>Privacy Policy</span>
          </div>

          {/* Eyebrow Pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#ffffff', backgroundColor: 'rgba(225, 29, 72, 0.25)', border: '1px solid rgba(225, 29, 72, 0.5)', padding: '0.3rem 0.9rem', borderRadius: '50px', fontSize: '0.74rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.85rem' }}>
            <ShieldCheck size={13} style={{ color: '#E11D48' }} />
            <span>DATA PRIVACY & COMPLIANCE</span>
          </div>

          {/* Main Title - Compact Size */}
          <h1 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.25, margin: '0 0 0.65rem 0' }}>
            Privacy Policy & Data Protection Notice
          </h1>

          <p style={{ fontSize: '0.98rem', color: '#cbd5e1', maxWidth: '780px', lineHeight: 1.55, margin: 0, fontWeight: 400 }}>
            Transparent information on how Shoolin Consultancy collects, processes, protects, and governs your personal data during Recruitment and Payrolling.
          </p>
        </div>
      </header>

      {/* 3. Main Policy Content Layout */}
      <main style={{ maxWidth: '1140px', margin: '0 auto', padding: '3.5rem 1.5rem 5rem' }}>
        
        {/* SECTION 1: Purpose of This Notice */}
        <section id="section-1" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              1
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              Purpose of This Notice
            </h2>
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem', textAlign: 'justify' }}>
            This Notice provides transparent information on the personal data we collect and process during Recruitment, and Payrolling, including:
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Your name, physical address, email address, and telephone number',
              'Behavioural or demographic attributes tied to personal identifiers',
              'Gender, age, date of birth, and country of residence',
              'Employment details and professional records',
              'Full‑face photographs or comparable images'
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.94rem', color: '#475569', lineHeight: 1.55 }}>
                <CheckCircle2 size={16} style={{ color: '#E11D48', flexShrink: 0, marginTop: '3px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ backgroundColor: '#F8FAFC', borderLeft: '3.5px solid #E11D48', padding: '1rem 1.25rem', borderRadius: '0 6px 6px 0' }}>
            <p style={{ fontSize: '0.92rem', color: '#1E293B', fontWeight: 700, margin: '0 0 0.4rem 0' }}>
              This Notice is issued in accordance with applicable data protection laws, including:
            </p>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#475569', fontSize: '0.9rem', lineHeight: 1.55 }}>
              <li><strong>EU GDPR</strong> (Regulation (EU) 2016/679)</li>
              <li><strong>India Digital Personal Data Protection Act, 2023</strong></li>
            </ul>
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 2: Who Is the Data Controller? */}
        <section id="section-2" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              2
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              Who Is the Data Controller?
            </h2>
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}>
            <strong>Shoolin Consultancy</strong> acts as the Data Controller for personal data processed through our careers website for recruitment purposes. Authorised third‑party recruitment service providers (such as applicant tracking systems, interview platforms, or assessment vendors) act as Data Processors and process personal data only on documented instructions from Shoolin.
          </p>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 3: To Whom Does This Notice Apply? */}
        <section id="section-3" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              3
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              To Whom Does This Notice Apply?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
            {/* Applies To */}
            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#059669', fontWeight: 800, fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                <CheckCircle2 size={18} />
                <span>This Notice applies to:</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'Job applicants and candidates',
                  'Prospective employees, suppliers, vendors and contractors',
                  'Individuals participating in interviews, assessments, or recruitment events'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.91rem', color: '#475569', lineHeight: 1.5 }}>
                    <span style={{ color: '#059669', fontWeight: 900 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Does Not Apply To */}
            <div style={{ backgroundColor: '#FFF1F2', border: '1px solid #FECDD3', borderRadius: '10px', padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: '#B91C1C', fontWeight: 800, fontSize: '0.96rem', marginBottom: '0.85rem' }}>
                <Scale size={18} />
                <span>This Notice does not apply to:</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                {[
                  'Customers, vendors, or visitors browsing other Shoolin websites',
                  'Third‑party websites linked from the careers website'
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', fontSize: '0.91rem', color: '#881337', lineHeight: 1.5 }}>
                    <span style={{ color: '#B91C1C', fontWeight: 900 }}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 4: Why and on What Legal Grounds Do We Process Personal Data? */}
        <section id="section-4" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              4
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              Why and on What Legal Grounds Do We Process Personal Data?
            </h2>
          </div>

          <h3 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.12rem', fontWeight: 700, color: '#0F172A', marginTop: '1.25rem', marginBottom: '1rem' }}>
            4.1 Purposes of Processing
          </h3>

          {/* EXACT TABLE AS SHOWN IN SCREENSHOT */}
          <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid #334155', boxShadow: '0 4px 14px rgba(0, 0, 0, 0.03)', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontFamily: "'Archivo', sans-serif" }}>
              <thead>
                <tr style={{ backgroundColor: '#F8FAFC', borderBottom: '2px solid #334155' }}>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 800, fontSize: '0.92rem', color: '#0F172A', borderRight: '1px solid #334155', width: '70px' }}>
                    Sr No.
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 800, fontSize: '0.92rem', color: '#0F172A', borderRight: '1px solid #334155' }}>
                    Purpose
                  </th>
                  <th style={{ padding: '0.85rem 1rem', fontWeight: 800, fontSize: '0.92rem', color: '#0F172A', width: '280px' }}>
                    Legal Basis
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, idx) => (
                  <tr
                    key={row.srNo}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafafa',
                      borderBottom: idx < tableData.length - 1 ? '1px solid #475569' : 'none',
                      transition: 'background-color 0.2s ease'
                    }}
                  >
                    <td style={{ padding: '0.9rem 1rem', fontSize: '0.92rem', fontWeight: 600, color: '#0F172A', borderRight: '1px solid #334155', textAlign: 'center' }}>
                      {row.srNo}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', fontSize: '0.92rem', color: '#1E293B', lineHeight: 1.55, borderRight: '1px solid #334155', fontWeight: 500 }}>
                      {row.purpose}
                    </td>
                    <td style={{ padding: '0.9rem 1rem', fontSize: '0.9rem', color: '#0F172A', fontWeight: 600 }}>
                      <span
                        style={{
                          display: 'inline-block',
                          backgroundColor: row.badgeBg,
                          color: row.badgeColor,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '6px',
                          fontSize: '0.84rem',
                          fontWeight: 700
                        }}
                      >
                        {row.legalBasis}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 5: What Categories of Personal Data Are Collected? */}
        <section id="section-5" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              5
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              What Categories of Personal Data Are Collected?
            </h2>
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
            During recruitment, Shoolin may collect:
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.25rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {[
              'Identification and contact details (name, email, phone number, location)',
              'CV/resume information, education, work history, skills, certifications',
              'Interview feedback, assessment results, evaluation notes',
              'Information generated through authorised interview or assessment tools (including recordings or transcripts, where applicable)',
              'System‑generated technical information related to use of recruitment platforms'
            ].map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.94rem', color: '#475569', lineHeight: 1.55 }}>
                <CheckCircle2 size={16} style={{ color: '#E11D48', flexShrink: 0, marginTop: '3px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ backgroundColor: '#FEF3C7', borderLeft: '3.5px solid #D97706', padding: '0.85rem 1.25rem', borderRadius: '0 6px 6px 0', color: '#92400E', fontSize: '0.9rem', fontWeight: 600 }}>
            Sensitive personal data is collected only where legally required.
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 6: How Is Personal Data Collected? */}
        <section id="section-6" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              6
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              How Is Personal Data Collected?
            </h2>
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
            Personal data may be collected through:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { title: 'Careers Website & ATS', desc: 'Careers website and applicant tracking systems' },
              { title: 'Direct Communications', desc: 'Emails and recruitment communications' },
              { title: 'Interviews & Events', desc: 'Interviews, assessments, and recruitment events' },
              { title: 'Employee Referrals', desc: 'Employee referrals (limited to professional contact details only)' },
              { title: 'Payroll Suppliers', desc: 'Suppliers for the payroll management' }
            ].map((box, idx) => (
              <div key={idx} style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '1.1rem 1.25rem' }}>
                <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0F172A', marginBottom: '0.35rem' }}>
                  {box.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.45, margin: 0 }}>
                  {box.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 7: Use of AI or Automated Tools */}
        <section id="section-7" style={{ marginBottom: '2.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              7
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              Use of AI or Automated Tools
            </h2>
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem', textAlign: 'justify' }}>
            Shoolin may use automated or semi‑automated tools to support recruitment activities, such as shortlisting based on predefined job criteria.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {[
              { icon: Bot, text: 'These tools do not make final hiring decisions' },
              { icon: UserCheck, text: 'Human recruiters always conduct final evaluations' },
              { icon: Lock, text: 'Candidate data is not used to train AI models' }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} style={{ backgroundColor: '#ffffff', border: '1.5px solid #E2E8F0', borderRadius: '10px', padding: '1.25rem', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem' }}>
                    <Icon size={19} />
                  </div>
                  <p style={{ fontSize: '0.94rem', fontWeight: 600, color: '#0F172A', lineHeight: 1.45, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <hr style={{ border: 'none', borderTop: '1px solid #E2E8F0', margin: '2.5rem 0' }} />

        {/* SECTION 8: Who Has Access to Personal Data? */}
        <section id="section-8" style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', backgroundColor: '#FEE2E2', color: '#E11D48', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.88rem' }}>
              8
            </div>
            <h2 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.28rem', fontWeight: 800, color: '#090D1A', margin: 0 }}>
              Who Has Access to Personal Data?
            </h2>
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
            Access is restricted to authorised personnel involved in:
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
            {[
              'Recruitment & Talent Acquisition',
              'Payrolling & Statutory Compliance',
              'Human Resources & People Ops',
              'Visa & Immigration Management',
              'Hiring Management'
            ].map((role, idx) => (
              <span
                key={idx}
                style={{
                  backgroundColor: '#090D1A',
                  color: '#ffffff',
                  padding: '0.45rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                {role}
              </span>
            ))}
          </div>

          <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}>
            Data may be shared with authorised third‑party recruitment service providers solely for recruitment purposes and subject to contractual data protection safeguards.
          </p>
        </section>

        {/* 9. Contact / Inquiries Box with Direct Contact Us Link */}
        <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '2.25rem 2rem', textAlign: 'center', marginTop: '3.5rem' }}>
          <h3 style={{ fontFamily: "'Outfit', 'Archivo', sans-serif", fontSize: '1.35rem', fontWeight: 800, color: '#090D1A', marginBottom: '0.5rem' }}>
            Questions About Your Privacy?
          </h3>
          <p style={{ fontSize: '0.95rem', color: '#64748B', maxWidth: '620px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            If you have any questions regarding this Notice or wish to exercise your data subject rights, please reach out to us directly through our Contact page.
          </p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Primary Action: Direct Contact Page Navigation */}
            <button
              onClick={() => {
                if (onOpenContactPage) {
                  onOpenContactPage();
                } else {
                  window.location.hash = '#contact';
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#E11D48',
                color: '#ffffff',
                border: 'none',
                padding: '0.8rem 2.2rem',
                borderRadius: '50px',
                fontWeight: 700,
                fontSize: '0.96rem',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(225, 29, 72, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#BE123C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E11D48';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <MessageSquare size={16} />
              <span>Contact Us Form</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

      </main>

      {/* 4. Footer */}
      <Footer
        onOpenContactPage={onOpenContactPage}
        onNavAbout={onNavAbout}
        onNavPrivacyPolicy={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavAdmin={onNavAdmin}
      />
    </div>
  );
};

export default PrivacyPolicyPage;
