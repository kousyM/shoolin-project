import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye
} from 'lucide-react';

export const AboutPage = ({ onNavHome, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        activePage="about"
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

      <main style={{ paddingTop: 0, marginTop: 0 }}>

        {/* ============================================================ */}
        {/* 1. HERO BANNER SECTION */}
        {/* ============================================================ */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#1e1b4b',
            backgroundImage: `linear-gradient(135deg, rgba(30, 27, 75, 0.95) 0%, rgba(15, 23, 42, 0.92) 100%), url('/images/team_collaboration.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '5.5rem 2rem 5rem 2rem',
            textAlign: 'left'
          }}
        >
          <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#55E6C1', backgroundColor: 'rgba(85, 230, 193, 0.15)', padding: '0.45rem 1.25rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.5rem', border: '1px solid rgba(85, 230, 193, 0.3)' }}>
              ABOUT US
            </span>

            {/* Banner Heading with start alignment */}
            <h1 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 600, color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.3, letterSpacing: '-0.01em', textAlign: 'left' }}>
              Vebhor is a next‑generation Payroll and Workforce Solutions company
            </h1>

            <p style={{ fontSize: '1.18rem', color: '#DCD6F7', fontWeight: 400, maxWidth: '960px', margin: '0 0 1.5rem 0', lineHeight: 1.7, textAlign: 'left' }}>
              Vebhor is a next‑generation Payroll and Workforce Solutions company that helps enterprises build, manage, and scale global teams with precision, compliance, and AI‑driven efficiency. With deep expertise across talent management, payrolling, contractor operations, and global mobility, we deliver industry‑specific solutions that meet the complex workforce needs of modern businesses.
            </p>

            <p style={{ fontSize: '1.12rem', color: '#cbd5e1', fontWeight: 400, maxWidth: '960px', margin: '0 0 2.25rem 0', lineHeight: 1.7, textAlign: 'left' }}>
              For clients, we are the partner that builds and manages the workforce behind their success. For investors, we are a scalable, process‑driven consulting firm with strong market demand, recurring revenue models, and technology‑powered delivery.
            </p>

            {/* Partner With Us Button Linked to Partners Page */}
            <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '1rem' }}>
              <button
                onClick={onNavPartners}
                style={{
                  padding: '0.85rem 2.25rem',
                  backgroundColor: '#6C5CE7',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(108, 92, 231, 0.45)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                <span>Partner With Us</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. OUR STORY SECTION */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#f8fafc', padding: '5rem 2rem', borderBottom: '1px solid #e2e8f0' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div className="our-story-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3.5rem', alignItems: 'center' }}>
              <div className="our-story-text-col" style={{ gridColumn: 'span 6' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.25rem' }}>
                  OUR STORY
                </span>
                <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.25 }}>
                  Our Story
                </h2>
                <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Vebhor was founded with a simple belief: organisations grow when their people systems work effortlessly. Over the years, we’ve evolved into a trusted partner for startups, scale‑ups, and enterprises across industries—delivering workforce solutions that are transparent, compliant, and built for scale.
                </p>
                <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
                  As a mid‑size firm, we offer the agility of a boutique consultancy with the capability of an enterprise provider. Our teams operate across recruitment, HR, payroll, vendor management, and IT support, ensuring continuity and operational excellence at every stage of the workforce lifecycle.
                </p>
              </div>

              <div className="our-story-img-col" style={{ gridColumn: 'span 6' }}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                  <img
                    src="/images/team_collaboration.jpg"
                    alt="Our Story"
                    style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.1) 0%, rgba(15, 23, 42, 0.6) 100%)' }} />
                  <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem', color: '#ffffff' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#55E6C1', textTransform: 'uppercase', letterSpacing: '0.1em' }}>BOUTIQUE AGILITY • ENTERPRISE CAPABILITY</span>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0.4rem 0 0 0', color: '#ffffff' }}>End-to-End Workforce Lifecycle</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. WHAT WE DELIVER SECTION (EXACT 7 POINTS ONLY) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '5.5rem 2rem 4.5rem 2rem', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem' }}>
                WHAT WE DELIVER
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
                We help organisations:
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {[
                'Hire globally and compliantly',
                'Manage employees, contractors, and vendors in one system',
                'Run payroll accurately and on time',
                'Streamline HR operations and employee support',
                'Deliver IT and device lifecycle management',
                'Build scalable workforce processes and digital experiences',
                'Reduce operational friction and accelerate growth'
              ].map((point, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8fafc', padding: '1.25rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                  <CheckCircle2 size={22} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                  <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e293b' }}>{point}</span>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: '#f1f5f9', padding: '1.5rem 2rem', borderRadius: '12px', textAlign: 'center', borderLeft: '4px solid #6C5CE7' }}>
              <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 600, margin: 0 }}>
                Our solutions are designed to reduce complexity, strengthen compliance, and create predictable, scalable operations.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. OUR CODE OF CONDUCT SECTION (HEADER WRAPPED IN BOX) */}
        {/* ============================================================ */}
        <section id="code-of-conduct" style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '5.5rem 2rem 5rem 2rem' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

            {/* Unified Header Box (Matching Screenshot 2) */}
            <div
              style={{
                backgroundColor: 'rgba(30, 41, 59, 0.65)',
                backdropFilter: 'blur(10px)',
                padding: '3rem 2.5rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 12px 32px rgba(0,0,0,0.25)',
                textAlign: 'center',
                marginBottom: '3.5rem'
              }}
            >
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#55E6C1', backgroundColor: 'rgba(85, 230, 193, 0.15)', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.25rem', border: '1px solid rgba(85, 230, 193, 0.3)' }}>
                OUR GOVERNANCE
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Our Code of conduct
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '880px', margin: '0 auto', lineHeight: 1.7, fontWeight: 400 }}>
                At Vebhor Consultancy, integrity is the foundation of how we operate—with governments, communities, clients, partners, and our people. Our Code of Conduct guides every decision we make and every relationship we build.
              </p>
            </div>

            {/* 5 Box-by-Box Integrity Pillar Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {[
                {
                  title: 'Integrity with governments',
                  desc: 'We are committed to full compliance with the laws and regulations of every country in which we operate. We maintain transparent, ethical relationships with government bodies and strictly enforce a zero‑tolerance policy towards corruption, bribery, or any improper influence.'
                },
                {
                  title: 'Integrity with communities',
                  desc: 'We support and promote environmental responsibility and sustainable practices in the way we work. We safeguard Vebhor’s brand, information, and intellectual property, and we strive to communicate clearly, act responsibly, and make a positive impact on the communities we serve.'
                },
                {
                  title: 'Integrity with our clients',
                  desc: 'We respect and protect the privacy, data, and confidential information of our clients. We act with honesty and fairness in all client engagements and support fair competition, delivering services with professionalism, transparency, and accountability.'
                },
                {
                  title: 'Integrity with partners and suppliers',
                  desc: 'We work with partners and suppliers who share our commitment to ethical conduct and compliance. We avoid conflicts of interest and do not solicit or accept gifts, hospitality, or travel from third parties for personal gain.'
                },
                {
                  title: 'Integrity with our people',
                  desc: 'We are committed to providing a safe, healthy, and inclusive work environment. We promote meritocracy, non‑discrimination, and diversity, and we take responsibility for protecting our people, our assets, and our business.'
                }
              ].map((pillar, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(30, 41, 59, 0.75)',
                    backdropFilter: 'blur(10px)',
                    padding: '2rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <ShieldCheck size={24} style={{ color: '#55E6C1' }} />
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.98rem', color: '#cbd5e1', lineHeight: 1.65, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ backgroundColor: 'rgba(108, 92, 231, 0.18)', padding: '1.5rem 2rem', borderRadius: '12px', border: '1px solid rgba(108, 92, 231, 0.35)', textAlign: 'center' }}>
              <p style={{ fontSize: '1.05rem', color: '#DCD6F7', fontWeight: 600, margin: 0 }}>
                Every individual at Vebhor Consultancy is expected to uphold this Code of Conduct and embody our values in their daily work.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. WHY CLIENTS & WHY INVESTORS SECTION */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#ffffff', padding: '5.5rem 2rem 4.5rem 2rem', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>

            {/* Why Clients Work With Us */}
            <div style={{ marginBottom: '4.5rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem' }}>
                  CLIENT ADVANTAGE
                </span>
                <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                  Why Clients Work With Us
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {[
                  'End‑to‑end workforce delivery from hiring to payroll',
                  'Technology‑enabled operations for speed, accuracy, and visibility',
                  'Compliance‑first approach across regions and worker types',
                  'Transparent pricing with no hidden fees',
                  'Dedicated support teams for HR, payroll, IT, and onboarding',
                  'Scalable processes that grow with your organisation'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', backgroundColor: '#f8fafc', padding: '1.25rem 1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <CheckCircle2 size={22} style={{ color: '#6C5CE7', flexShrink: 0 }} />
                    <span style={{ fontSize: '1.02rem', fontWeight: 700, color: '#1e293b' }}>{point}</span>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#f1f5f9', padding: '1.5rem 2rem', borderRadius: '12px', textAlign: 'center', borderLeft: '4px solid #6C5CE7' }}>
                <p style={{ fontSize: '1.1rem', color: '#334155', fontWeight: 700, margin: 0 }}>
                  We operate as an extension of your team—ensuring continuity, compliance, and confidence.
                </p>
              </div>
            </div>

            {/* Why Investors Believe in Us */}
            <div>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem' }}>
                  INVESTOR PROOF
                </span>
                <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                  Why Investors Believe in Us
                </h2>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {[
                  { title: 'High‑growth market', desc: 'Global workforce, EOR, payroll, and compliance services' },
                  { title: 'Recurring revenue', desc: 'Payroll, HR support, device management, and vendor operations' },
                  { title: 'Technology leverage', desc: 'Automation, digital onboarding, and integrated workflows' },
                  { title: 'Operational efficiency', desc: 'Standardised processes and multi‑vertical delivery' },
                  { title: 'Scalable model', desc: 'Expandable across industries and geographies' },
                  { title: 'Strong client retention', desc: 'Long‑term partnerships built on trust and transparency' }
                ].map((inv, idx) => (
                  <div key={idx} style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                      {inv.title}
                    </h3>
                    <p style={{ fontSize: '0.98rem', color: '#64748b', margin: 0, lineHeight: 1.5 }}>
                      {inv.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '1.5rem 2rem', borderRadius: '12px', textAlign: 'center' }}>
                <p style={{ fontSize: '1.08rem', color: '#55E6C1', fontWeight: 700, margin: 0 }}>
                  Vebhor is positioned to scale through technology, process optimisation, and multi‑vertical workforce solutions.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* MISSION & VISION SECTION */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#f8fafc', padding: '5.5rem 2rem 5rem 2rem' }}>
          <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1rem' }}>
                PURPOSE
              </span>
              <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                Our Mission & Vision
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
              {/* Mission Card */}
              <div style={{ backgroundColor: '#1e1b4b', color: '#ffffff', padding: '3rem 2.5rem', borderRadius: '20px', boxShadow: '0 15px 35px rgba(30, 27, 75, 0.3)' }}>
                <div style={{ width: '52px', height: '52px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#55E6C1' }}>
                  <Target size={28} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Our Mission
                </h3>
                <p style={{ fontSize: '1.18rem', color: '#DCD6F7', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                  To empower organisations with workforce solutions that are simple, compliant, and built for growth.
                </p>
              </div>

              {/* Vision Card */}
              <div style={{ backgroundColor: '#0284c7', color: '#ffffff', padding: '3rem 2.5rem', borderRadius: '20px', boxShadow: '0 15px 35px rgba(2, 132, 199, 0.3)' }}>
                <div style={{ width: '52px', height: '52px', backgroundColor: 'rgba(255, 255, 255, 0.15)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: '#ffffff' }}>
                  <Eye size={28} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                  Our Vision
                </h3>
                <p style={{ fontSize: '1.18rem', color: '#e0f2fe', lineHeight: 1.65, margin: 0, fontWeight: 400 }}>
                  To become the most trusted mid‑size workforce consultancy—where technology, people, and operations come together to help businesses scale globally.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
      />
    </div>
  );
};

export default AboutPage;
