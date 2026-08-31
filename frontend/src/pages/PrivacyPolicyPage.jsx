import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ShieldCheck,
  Building2,
  Users,
  Scale,
  FileSpreadsheet,
  Cpu,
  Lock,
  CheckCircle2,
  AlertCircle,
  FileText,
  Mail,
  ArrowLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const BRAND_GRADIENT = 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)';
const BRAND_SHADOW = '0 4px 18px rgba(2, 41, 176, 0.35)';

export const PrivacyPolicyPage = ({
  onNavHome,
  onNavServices,
  onNavCareers,
  onNavAbout,
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
    window.scrollTo(0, 0);
  }, []);

  const purposesData = [
    {
      srNo: 1,
      purpose: 'Managing job applications and recruitment processes',
      legalBasis: 'Contractual necessity'
    },
    {
      srNo: 2,
      purpose: 'Assessing suitability for positions applied',
      legalBasis: 'Legitimate interest'
    },
    {
      srNo: 3,
      purpose: 'Conducting interviews and assessments (including AI‑assisted interviews, where applicable)',
      legalBasis: 'Legitimate interest'
    },
    {
      srNo: 4,
      purpose: 'Verifying qualifications, experience, and eligibility',
      legalBasis: 'Legal obligation / legitimate interest'
    },
    {
      srNo: 5,
      purpose: 'Communicating recruitment updates and opportunities',
      legalBasis: 'Consent'
    },
    {
      srNo: 6,
      purpose: 'Improving recruitment platforms and processes',
      legalBasis: 'Legitimate interest'
    },
    {
      srNo: 7,
      purpose: 'Meeting legal, audit, and regulatory requirements',
      legalBasis: 'Legal obligation'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", color: '#0f172a' }}>
      {/* 1. Header Navigation */}
      <Navbar
        activePage="privacy-policy"
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      {/* 2. Hero Banner */}
      <header
        style={{
          background: 'linear-gradient(135deg, #0b1536 0%, #002b49 60%, rgb(2, 41, 176) 100%)',
          color: '#ffffff',
          padding: '4rem 1.5rem 4.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle background glow circle */}
        <div
          style={{
            position: 'absolute',
            top: '-40%',
            right: '-10%',
            width: '550px',
            height: '550px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(40, 129, 251, 0.25) 0%, rgba(0,0,0,0) 70%)',
            pointerEvents: 'none'
          }}
        />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
            <span
              onClick={onNavHome}
              style={{ cursor: 'pointer', transition: 'color 0.2s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              Home
            </span>
            <ChevronRight size={14} />
            <span style={{ color: '#38bdf8', fontWeight: 600 }}>Privacy Policy</span>
          </div>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(8px)', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.15)', marginBottom: '1.25rem' }}>
            <ShieldCheck size={16} style={{ color: '#38bdf8' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#e2e8f0' }}>
              Data Protection & Privacy Notice
            </span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1rem', color: '#ffffff' }}>
            Privacy Policy
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '780px', lineHeight: 1.6, margin: 0 }}>
            Transparent information on how Shoolin Consultancy collects, processes, protects, and respects your personal data during Recruitment and Payrolling.
          </p>
        </div>
      </header>

      {/* 3. Main Body Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }}>

          {/* SECTION 1: Purpose of This Notice */}
          <section
            id="section-1"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <FileText size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                1. Purpose of This Notice
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              This Notice provides transparent information on the personal data we collect and process during <strong>Recruitment</strong>, and <strong>Payrolling</strong>, including:
            </p>

            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.75rem', padding: 0, margin: '0 0 1.75rem 0', listStyle: 'none' }}>
              {[
                'Your name, physical address, email address, and telephone number',
                'Behavioural or demographic attributes tied to personal identifiers',
                'Gender, age, date of birth, and country of residence',
                'Employment details and professional records',
                'Full‑face photographs or comparable images'
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.65rem',
                    background: '#f8fafc',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.92rem',
                    color: '#1e293b',
                    lineHeight: 1.5
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'rgb(2, 41, 176)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '1.15rem 1.25rem' }}>
              <p style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1e40af', marginBottom: '0.5rem' }}>
                This Notice is issued in accordance with applicable data protection laws, including:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: '6px', border: '1px solid #93c5fd', fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a' }}>
                  <ShieldCheck size={16} style={{ color: '#2563eb' }} /> EU GDPR (Regulation (EU) 2016/679)
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#ffffff', padding: '0.4rem 0.85rem', borderRadius: '6px', border: '1px solid #93c5fd', fontSize: '0.85rem', fontWeight: 600, color: '#1e3a8a' }}>
                  <ShieldCheck size={16} style={{ color: '#2563eb' }} /> India Digital Personal Data Protection Act, 2023
                </span>
              </div>
            </div>
          </section>

          {/* SECTION 2: Who Is the Data Controller? */}
          <section
            id="section-2"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <Building2 size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                2. Who Is the Data Controller?
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
              <strong>Shoolin Consultancy</strong> acts as the <strong>Data Controller</strong> for personal data processed through our careers website for recruitment purposes.
            </p>
            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginTop: '0.85rem' }}>
              Authorised third‑party recruitment service providers (such as applicant tracking systems, interview platforms, or assessment vendors) act as <strong>Data Processors</strong> and process personal data only on documented instructions from Shoolin.
            </p>
          </section>

          {/* SECTION 3: To Whom Does This Notice Apply? */}
          <section
            id="section-3"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <Users size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                3. To Whom Does This Notice Apply?
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {/* Applies to */}
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#166534', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <CheckCircle2 size={18} style={{ color: '#16a34a' }} /> This Notice applies to:
                </h3>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    'Job applicants and candidates',
                    'Prospective employees, suppliers, vendors and contractors',
                    'Individuals participating in interviews, assessments, or recruitment events'
                  ].map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.92rem', color: '#14532d', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#16a34a', fontWeight: 'bold' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Does not apply to */}
              <div style={{ background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '12px', padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#9f1239', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
                  <AlertCircle size={18} style={{ color: '#e11d48' }} /> This Notice does not apply to:
                </h3>
                <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {[
                    'Customers, vendors, or visitors browsing other Shoolin websites',
                    'Third‑party websites linked from the careers website'
                  ].map((item, idx) => (
                    <li key={idx} style={{ fontSize: '0.92rem', color: '#881337', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                      <span style={{ color: '#e11d48', fontWeight: 'bold' }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* SECTION 4: Why and on What Legal Grounds Do We Process Personal Data? */}
          <section
            id="section-4"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <Scale size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                4. Why and on What Legal Grounds Do We Process Personal Data?
              </h2>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '1.25rem' }}>
              4.1 Purposes of Processing
            </h3>

            {/* Exact Table Matching the Screenshot Image */}
            <div style={{ overflowX: 'auto', border: '1px solid #475569', borderRadius: '4px', background: '#ffffff', marginBottom: '1rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: '#ffffff', borderBottom: '1px solid #475569' }}>
                    <th style={{ padding: '0.85rem 1rem', width: '80px', borderRight: '1px solid #475569', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                      Sr No.
                    </th>
                    <th style={{ padding: '0.85rem 1.25rem', borderRight: '1px solid #475569', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                      Purpose
                    </th>
                    <th style={{ padding: '0.85rem 1.25rem', width: '280px', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a' }}>
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {purposesData.map((row, idx) => (
                    <tr
                      key={row.srNo}
                      style={{
                        borderBottom: idx === purposesData.length - 1 ? 'none' : '1px solid #475569',
                        transition: 'background-color 0.15s ease'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                    >
                      <td style={{ padding: '1rem', borderRight: '1px solid #475569', fontSize: '0.95rem', color: '#0f172a', fontWeight: 500, verticalAlign: 'middle' }}>
                        {row.srNo}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', borderRight: '1px solid #475569', fontSize: '0.95rem', color: '#0f172a', lineHeight: 1.5, verticalAlign: 'middle' }}>
                        {row.purpose}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', fontSize: '0.95rem', color: '#0f172a', lineHeight: 1.5, verticalAlign: 'middle' }}>
                        {row.legalBasis}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* SECTION 5: What Categories of Personal Data Are Collected? */}
          <section
            id="section-5"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <FileSpreadsheet size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                5. What Categories of Personal Data Are Collected?
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              During recruitment, <strong>Shoolin</strong> may collect:
            </p>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: 0, margin: '0 0 1.5rem 0', listStyle: 'none' }}>
              {[
                { title: 'Identification and contact details', desc: 'name, email, phone number, location' },
                { title: 'CV/resume information', desc: 'education, work history, skills, certifications' },
                { title: 'Interview feedback', desc: 'assessment results, evaluation notes' },
                { title: 'Assessment tools data', desc: 'information generated through authorised interview or assessment tools (including recordings or transcripts, where applicable)' },
                { title: 'Technical information', desc: 'system‑generated technical information related to use of recruitment platforms' }
              ].map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    background: '#f8fafc',
                    padding: '0.9rem 1.15rem',
                    borderRadius: '8px',
                    border: '1px solid #e2e8f0',
                    fontSize: '0.92rem',
                    color: '#334155',
                    lineHeight: 1.5
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: 'rgb(2, 41, 176)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: '#0f172a' }}>{item.title}: </strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ background: '#fef3c7', border: '1px solid #fde68a', borderRadius: '8px', padding: '0.9rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <AlertCircle size={18} style={{ color: '#b45309', flexShrink: 0 }} />
              <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#92400e' }}>
                Sensitive personal data is collected only where legally required.
              </span>
            </div>
          </section>

          {/* SECTION 6: How Is Personal Data Collected? */}
          <section
            id="section-6"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <Users size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                6. How Is Personal Data Collected?
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Personal data may be collected through:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
              {[
                'Careers website and applicant tracking systems',
                'Emails and recruitment communications',
                'Interviews, assessments, and recruitment events',
                'Employee referrals (limited to professional contact details only)',
                'Suppliers for the payroll management'
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '1rem 1.15rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(2, 41, 176, 0.1)', color: 'rgb(2, 41, 176)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>
                    {idx + 1}
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 500, lineHeight: 1.4 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 7: Use of AI or Automated Tools */}
          <section
            id="section-7"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <Cpu size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                7. Use of AI or Automated Tools
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              <strong>Shoolin</strong> may use automated or semi‑automated tools to support recruitment activities, such as shortlisting based on predefined job criteria.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {[
                { title: 'Human in the Loop', desc: 'These tools do not make final hiring decisions' },
                { title: 'Recruiter Evaluation', desc: 'Human recruiters always conduct final evaluations' },
                { title: 'Model Privacy Guard', desc: 'Candidate data is not used to train AI models' }
              ].map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderTop: '3px solid rgb(2, 41, 176)',
                    borderRadius: '10px',
                    padding: '1.25rem'
                  }}
                >
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={16} style={{ color: 'rgb(2, 41, 176)' }} /> {card.title}
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 8: Who Has Access to Personal Data? */}
          <section
            id="section-8"
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '2.25rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(2, 41, 176, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgb(2, 41, 176)' }}>
                <Lock size={22} />
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                8. Who Has Access to Personal Data?
              </h2>
            </div>

            <p style={{ fontSize: '1rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Access is restricted to authorised personnel involved in:
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {['Recruitment, Payrolling', 'Human Resources, Visa Management', 'Hiring management'].map((tag, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#f1f5f9',
                    border: '1px solid #cbd5e1',
                    padding: '0.6rem 1.15rem',
                    borderRadius: '8px',
                    fontSize: '0.92rem',
                    fontWeight: 600,
                    color: '#0f172a',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <CheckCircle2 size={16} style={{ color: 'rgb(2, 41, 176)' }} />
                  <span>{tag}</span>
                </div>
              ))}
            </div>

            <div style={{ background: '#f8fafc', borderLeft: '4px solid rgb(2, 41, 176)', padding: '1rem 1.25rem', borderRadius: '0 8px 8px 0' }}>
              <p style={{ fontSize: '0.95rem', color: '#334155', margin: 0, lineHeight: 1.6 }}>
                Data may be shared with authorised third‑party recruitment service providers solely for recruitment purposes and subject to contractual data protection safeguards.
              </p>
            </div>
          </section>

          {/* Bottom Help / Contact Banner */}
          <div
            style={{
              background: BRAND_GRADIENT,
              borderRadius: '16px',
              padding: '2.5rem',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
              boxShadow: BRAND_SHADOW
            }}
          >
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>
                Questions About Your Data Privacy?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#e0e7ff', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
                If you have questions regarding this notice or wish to exercise your data subject rights, feel free to reach out to our team.
              </p>
            </div>
            <button
              onClick={onOpenContactPage}
              style={{
                background: '#ffffff',
                color: 'rgb(2, 41, 176)',
                fontWeight: 700,
                fontSize: '0.95rem',
                padding: '0.85rem 1.8rem',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 18px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
              }}
            >
              <Mail size={16} /> Contact Privacy Team
            </button>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      <Footer
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        onNavAbout={onNavAbout}
        onNavPrivacy={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </div>
  );
};

export default PrivacyPolicyPage;
