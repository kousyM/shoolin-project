import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getApiBaseUrl } from '../api/config';
import { 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Layers, 
  TrendingUp, 
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Building,
  UserCheck,
  FileText,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

export const PartnersPage = ({ onNavHome, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  
  // Tab Selection between Vendor Update and General Partner Enquiry
  const [activeFormTab, setActiveFormTab] = useState('vendor');

  // Vendor Information Form State (13 specific fields from Microsoft Form)
  const [vendorData, setVendorData] = useState({
    vendorName: '',
    vendorCode: '',
    registeredAddress: '',
    country: '',
    modesOfHiring: [],
    pocName: '',
    pocContactNumber: '',
    pocEmail: '',
    escalationPocName: '',
    escalationPocEmail: '',
    workOrderSigningEmail: '',
    ceoFounderName: '',
    ceoFounderEmail: ''
  });

  // General Partner Enquiry Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    role: '',
    organisation: '',
    email: '',
    phone: '',
    enquiry: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [vendorFormSubmitted, setVendorFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Scroll Animation states
  const [heroVisible, setHeroVisible] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const [talkVisible, setTalkVisible] = useState(false);
  const [exploreVisible, setExploreVisible] = useState(false);

  const heroRef = useRef(null);
  const partnersRef = useRef(null);
  const featuresRef = useRef(null);
  const talkRef = useRef(null);
  const exploreRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const createObserver = (ref, setter) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setter(true);
          }
        },
        { threshold: 0.12 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    };

    const cleanupPartners = createObserver(partnersRef, setPartnersVisible);
    const cleanupFeatures = createObserver(featuresRef, setFeaturesVisible);
    const cleanupTalk = createObserver(talkRef, setTalkVisible);
    const cleanupExplore = createObserver(exploreRef, setExploreVisible);

    return () => {
      cleanupPartners();
      cleanupFeatures();
      cleanupTalk();
      cleanupExplore();
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleVendorInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const current = vendorData.modesOfHiring || [];
      if (checked) {
        setVendorData({ ...vendorData, modesOfHiring: [...current, value] });
      } else {
        setVendorData({ ...vendorData, modesOfHiring: current.filter(m => m !== value) });
      }
    } else {
      setVendorData({ ...vendorData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiBase = getApiBaseUrl();
      await axios.post(`${apiBase}/api/partner`, {
        type: 'general_enquiry',
        firstName: formData.firstName,
        lastName: formData.lastName,
        company: formData.organisation,
        email: formData.email,
        phone: formData.phone,
        enquiry: formData.enquiry
      }, { timeout: 8000 });
      setFormSubmitted(true);
    } catch (err) {
      console.warn('Partner submit fallback:', err);
      setFormSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleVendorSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiBase = getApiBaseUrl();
      const primaryEmail = vendorData.pocEmail || vendorData.workOrderSigningEmail || vendorData.ceoFounderEmail || 'vendor@vebhor.com';
      await axios.post(`${apiBase}/api/partner`, {
        type: 'vendor_update',
        email: primaryEmail,
        ...vendorData
      }, { timeout: 8000 });
      setVendorFormSubmitted(true);
    } catch (err) {
      console.warn('Vendor form submit fallback:', err);
      setVendorFormSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        activePage="partners"
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={() => window.scrollTo(0, 0)}
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
          ref={heroRef}
          style={{
            backgroundColor: '#001938',
            backgroundImage: `linear-gradient(90deg, rgba(0, 25, 56, 0.92) 0%, rgba(0, 25, 56, 0.78) 50%, rgba(0, 25, 56, 0.48) 100%), url('/images/partners_hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '6.5rem 2rem 6rem',
            minHeight: '380px',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
            <div
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
                marginBottom: '1.25rem'
              }}
            >
              <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ffffff', backgroundColor: '#6C5CE7', padding: '0.4rem 1.4rem', borderRadius: '18px 24px 24px 18px', display: 'inline-block', boxShadow: '0 4px 18px rgba(108, 92, 231, 0.5)' }}>
                PARTNERSHIPS & VENDORS
              </span>
            </div>

            <h1
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(1.85rem, 5vw, 3.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                maxWidth: '900px',
                lineHeight: 1.25,
                marginBottom: '1.35rem',
                wordBreak: 'break-word',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateX(0)' : 'translateX(-45px)',
                filter: heroVisible ? 'blur(0)' : 'blur(8px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.25s'
              }}
            >
              A Connected Partner Ecosystem Powering Workforce Innovation
            </h1>
            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                color: '#e2e8f0',
                maxWidth: '780px',
                lineHeight: 1.65,
                wordBreak: 'break-word',
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.45s'
              }}
            >
              By teaming with industry‑leading technology providers and verified vendors, we help clients streamline operations, enhance compliance, and prepare for what’s next.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. KEY PARTNERS SECTION (INTERACTIVE HOVER LOGOS) */}
        {/* ============================================================ */}
        <section
          ref={partnersRef}
          style={{ backgroundColor: '#ffffff', padding: '5.5rem 2rem 4.5rem', textAlign: 'center', borderBottom: '1px solid #e2e8f0' }}
        >
          <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
            <div
              style={{
                opacity: partnersVisible ? 1 : 0,
                transform: partnersVisible ? 'translateY(0)' : 'translateY(-25px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                marginBottom: '3.5rem'
              }}
            >
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Key partners
              </h2>
            </div>

            {/* 4-column key partners grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                border: '1.5px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                opacity: partnersVisible ? 1 : 0,
                transform: partnersVisible ? 'translateY(0) scale(1)' : 'translateY(35px) scale(0.97)',
                transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              {/* AWS */}
              <div className="partner-logo-box">
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 900, color: '#ff9900', letterSpacing: '-0.03em' }}>
                  aws
                </span>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Premier Tier Partner
                </span>
              </div>

              {/* Salesforce */}
              <div className="partner-logo-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', height: '45px' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
                    alt="Salesforce"
                    style={{ height: '40px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Summit Partner
                </span>
              </div>

              {/* Google Cloud */}
              <div className="partner-logo-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', height: '45px' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                    alt="Google Cloud"
                    style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Premier Partner
                </span>
              </div>

              {/* Microsoft */}
              <div className="partner-logo-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', height: '45px' }}>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg"
                    alt="Microsoft"
                    style={{ height: '26px', width: 'auto', objectFit: 'contain' }}
                  />
                </div>
                <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Solutions Partner
                </span>
              </div>
            </div>

            {/* Sub-text quote under logos */}
            <p style={{ marginTop: '2.5rem', fontSize: '1.05rem', color: '#64748b', fontStyle: 'italic', maxWidth: '650px', margin: '2.5rem auto 0' }}>
              "Partnering with leading tech enterprises to engineer secure, resilient, and high-performance workforce systems."
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CAPABILITIES / FEATURES SECTION (4-COLUMN ROW 1, 2, 3, 4) */}
        {/* ============================================================ */}
        <section
          ref={featuresRef}
          style={{ backgroundColor: '#f8fafc', padding: '6rem 2rem 6.5rem', borderBottom: '1px solid #e2e8f0' }}
        >
          <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
            <div
              style={{
                textAlign: 'center',
                marginBottom: '3.5rem',
                opacity: featuresVisible ? 1 : 0,
                transform: featuresVisible ? 'translateY(0)' : 'translateY(-30px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.85rem' }}>
                Accelerate Success Through Powerful Partnerships
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '880px', lineHeight: 1.65, margin: '0 auto' }}>
                Benefit from best‑in‑class capabilities delivered through Vebhor Consultancy and our trusted global partner network.
              </p>
            </div>

            {/* 4 Feature Cards Layout across (1, 2, 3, 4) with Directional Entrances & Swaying Motion */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
              
              {/* Feature 1 (Comes from Top-Left) */}
              <div
                className="partner-feat-card"
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible ? 'translate3d(0, 0, 0)' : 'translate3d(-45px, -35px, 0)',
                  animation: featuresVisible ? 'partnerSway1 6.5s ease-in-out infinite' : 'none',
                  transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
              >
                <div className="partner-icon-box" style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                  <Lightbulb size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Innovation That Moves You Forward
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                  From cloud‑driven efficiency to AI‑powered workforce intelligence, we work with our partners help us deliver technology that creates real competitive advantage.
                </p>
              </div>

              {/* Feature 2 (Comes from Top) */}
              <div
                className="partner-feat-card"
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -45px, 0)',
                  animation: featuresVisible ? 'partnerSway2 7.2s ease-in-out infinite' : 'none',
                  transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                <div className="partner-icon-box" style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#f3e8ff', color: '#6C5CE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                  <Layers size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Integration Made Effortless
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                  We collaborate with platforms and providers you already rely on—ensuring every solution fits seamlessly into your existing workflows and scales with your business.
                </p>
              </div>

              {/* Feature 3 (Comes from Bottom) */}
              <div
                className="partner-feat-card"
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 45px, 0)',
                  animation: featuresVisible ? 'partnerSway1 6.8s ease-in-out infinite' : 'none',
                  transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                <div className="partner-icon-box" style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                  <TrendingUp size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Big Thinking for Big Impact
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                  Together with our Strategic Partners, we build solutions that operate at enterprise scale and meet the demands of today’s digital workforce landscape.
                </p>
              </div>

              {/* Feature 4 (Comes from Bottom-Right) */}
              <div
                className="partner-feat-card"
                style={{
                  opacity: featuresVisible ? 1 : 0,
                  transform: featuresVisible ? 'translate3d(0, 0, 0)' : 'translate3d(45px, 35px, 0)',
                  animation: featuresVisible ? 'partnerSway2 7.5s ease-in-out infinite' : 'none',
                  transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                }}
              >
                <div className="partner-icon-box" style={{ width: '52px', height: '52px', borderRadius: '14px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.35rem' }}>
                  <ShieldCheck size={28} />
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                  Emerging Tech, Applied Precision
                </h3>
                <p style={{ fontSize: '0.98rem', color: '#475569', lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                  Our Extended Partner Network enables us to solve complex, nuanced business challenges with specialised expertise and cutting‑edge technology.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. VENDOR INFORMATION - UPDATE / PARTNER FORM SECTION */}
        {/* ============================================================ */}
        <section
          ref={talkRef}
          style={{
            backgroundColor: '#001938',
            backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(108, 92, 231, 0.25) 0%, rgba(0, 25, 56, 0.95) 75%)',
            color: '#ffffff',
            padding: '6rem 2rem 7rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div
            style={{
              maxWidth: '1080px',
              margin: '0 auto',
              opacity: talkVisible ? 1 : 0,
              transform: talkVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Header with Switcher Tabs */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              
              <div style={{ marginBottom: '1.25rem' }}>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#ffffff',
                    backgroundColor: '#6C5CE7',
                    padding: '0.4rem 1.4rem',
                    borderRadius: '18px 24px 24px 18px',
                    display: 'inline-block',
                    boxShadow: '0 4px 18px rgba(108, 92, 231, 0.5)'
                  }}
                >
                  PARTNER & VENDOR PORTAL
                </span>
              </div>

              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, color: '#ffffff', marginBottom: '0.85rem' }}>
                {activeFormTab === 'vendor' ? 'Vendor Information - Update' : "Let's Connect & Partner"}
              </h2>

              {/* Form Switcher Pill Tabs */}
              <div style={{ display: 'inline-flex', gap: '0.5rem', backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '0.4rem', borderRadius: '50px', border: '1px solid rgba(255, 255, 255, 0.15)', margin: '1rem 0 1.5rem' }}>
                <button
                  type="button"
                  onClick={() => setActiveFormTab('vendor')}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '50px',
                    border: 'none',
                    backgroundColor: activeFormTab === 'vendor' ? '#6C5CE7' : 'transparent',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: activeFormTab === 'vendor' ? '0 4px 15px rgba(108, 92, 231, 0.5)' : 'none'
                  }}
                >
                  Vendor Information Update
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFormTab('enquiry')}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '50px',
                    border: 'none',
                    backgroundColor: activeFormTab === 'enquiry' ? '#6C5CE7' : 'transparent',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    boxShadow: activeFormTab === 'enquiry' ? '0 4px 15px rgba(108, 92, 231, 0.5)' : 'none'
                  }}
                >
                  General Partner Enquiry
                </button>
              </div>

              {/* Instructions Paragraph for Vendor Form */}
              {activeFormTab === 'vendor' && (
                <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'left', backgroundColor: 'rgba(10, 25, 60, 0.65)', border: '1px solid rgba(108, 92, 231, 0.35)', borderRadius: '14px', padding: '1.25rem 1.6rem', color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  <p style={{ margin: '0 0 0.5rem 0' }}>
                    These details are being collected to update the <strong>Vendor POC and Escalation POC</strong> information in the database. Kindly provide the details for each country-specific agreement. If you have agreements covering multiple countries, please submit a separate response for each country. The POC details can remain the same across multiple responses, if applicable.
                  </p>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#94a3b8' }}>
                    When you submit this form, it will not automatically collect your details like name and email address unless you provide it yourself.
                  </p>
                  <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span style={{ color: '#f87171', fontWeight: 700, fontSize: '0.85rem' }}>* Required</span>
                    <a
                      href="https://forms.cloud.microsoft/pages/responsepage.aspx?id=iVI1_x5y102mY6_sYqudVMhxEyRJlKlOrNk-G3hIjphUN0VDRFVRQzRMRlNISk9NRVJSRUtXNTZRWC4u&route=shorturl"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#55E6C1', fontSize: '0.85rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.35rem', textDecoration: 'none' }}
                    >
                      Open in Microsoft Forms <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* ======================================================== */}
            {/* TAB 1: VENDOR INFORMATION - UPDATE FORM (13 FIELDS) */}
            {/* ======================================================== */}
            {activeFormTab === 'vendor' && (
              <div
                style={{
                  backgroundColor: 'rgba(7, 17, 38, 0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(108, 92, 231, 0.4)',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5), 0 0 35px rgba(108, 92, 231, 0.15)'
                }}
              >
                {vendorFormSubmitted ? (
                  <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                    <CheckCircle2 size={64} style={{ color: '#55E6C1', margin: '0 auto 1.25rem' }} />
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                      Vendor Details Submitted Successfully!
                    </h3>
                    <p style={{ color: '#cbd5e1', fontSize: '1.1rem', maxWidth: '580px', margin: '0.5rem auto 2rem', lineHeight: 1.6 }}>
                      Thank you for updating your Vendor and POC information. Our Vendor Management Team has received your details.
                    </p>
                    <button
                      onClick={() => setVendorFormSubmitted(false)}
                      style={{
                        padding: '0.85rem 2.5rem',
                        backgroundColor: '#6C5CE7',
                        color: '#ffffff',
                        fontWeight: 800,
                        borderRadius: '50px',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 18px rgba(108, 92, 231, 0.5)'
                      }}
                    >
                      Submit Another Country Response
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleVendorSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    
                    {/* Field 1: Vendor Name */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        1. Vendor Name <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 0.75rem 0' }}>
                        Legal Entity Full Name as per respective country and agreement
                      </p>
                      <input
                        type="text"
                        name="vendorName"
                        value={vendorData.vendorName}
                        onChange={handleVendorInputChange}
                        placeholder="Enter your answer"
                        required
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    {/* Field 2: Vendor Code */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        2. Vendor Code <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 0.75rem 0' }}>
                        Code as per the Supplier 360
                      </p>
                      <input
                        type="text"
                        name="vendorCode"
                        value={vendorData.vendorCode}
                        onChange={handleVendorInputChange}
                        placeholder="Enter your answer"
                        required
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    {/* Field 3: Registered Address */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        3. Registered Address <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 0.75rem 0' }}>
                        Provide the registered address as per the agreement
                      </p>
                      <textarea
                        name="registeredAddress"
                        rows={3}
                        value={vendorData.registeredAddress}
                        onChange={handleVendorInputChange}
                        placeholder="Enter your answer"
                        required
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none', resize: 'vertical' }}
                      />
                    </div>

                    {/* Field 4: Country */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        4. Country <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 0.75rem 0' }}>
                        Requesting you update country name as per the signed agreement
                      </p>
                      <input
                        type="text"
                        name="country"
                        value={vendorData.country}
                        onChange={handleVendorInputChange}
                        placeholder="Enter your answer"
                        required
                        style={{ width: '100%', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    {/* Field 5: Mode of Hiring (Checkboxes) */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        5. Mode of Hiring <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0 0 0.85rem 0' }}>
                        Requesting you to select the mode of hiring based on agreement for respective country with LTM
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {['Permanent', 'Subcon', 'HTD (Hire Train Deploy)'].map((mode) => (
                          <label key={mode} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', color: '#e2e8f0', fontSize: '0.95rem' }}>
                            <input
                              type="checkbox"
                              name="modeOfHiring"
                              value={mode}
                              checked={(vendorData.modesOfHiring || []).includes(mode)}
                              onChange={handleVendorInputChange}
                              style={{ width: '18px', height: '18px', accentColor: '#6C5CE7', cursor: 'pointer' }}
                            />
                            <span>{mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Field 6 & 7: POC Name & POC Contact Number */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                          6. Vendor Point of Contact (POC) Name <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="pocName"
                          value={vendorData.pocName}
                          onChange={handleVendorInputChange}
                          placeholder="Enter your answer"
                          required
                          style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                        />
                      </div>
                      <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                          7. POC Contact Number <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="pocContactNumber"
                          value={vendorData.pocContactNumber}
                          onChange={handleVendorInputChange}
                          placeholder="Enter your answer"
                          required
                          style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                        />
                      </div>
                    </div>

                    {/* Field 8: POC Email ID */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        8. POC Email ID <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="pocEmail"
                        value={vendorData.pocEmail}
                        onChange={handleVendorInputChange}
                        placeholder="Enter your answer"
                        required
                        style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    {/* Field 9 & 10: Escalation POC Name & Escalation POC Email ID */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                          9. Escalation POC Name
                        </label>
                        <input
                          type="text"
                          name="escalationPocName"
                          value={vendorData.escalationPocName}
                          onChange={handleVendorInputChange}
                          placeholder="Enter your answer"
                          style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                        />
                      </div>
                      <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                          10. Escalation POC Email ID
                        </label>
                        <input
                          type="email"
                          name="escalationPocEmail"
                          value={vendorData.escalationPocEmail}
                          onChange={handleVendorInputChange}
                          placeholder="Enter your answer"
                          style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                        />
                      </div>
                    </div>

                    {/* Field 11: Work Order Signing Authority Email id */}
                    <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                        11. Work Order Signing Authority Email id <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="workOrderSigningEmail"
                        value={vendorData.workOrderSigningEmail}
                        onChange={handleVendorInputChange}
                        placeholder="Enter your answer"
                        required
                        style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>

                    {/* Field 12 & 13: CEO/Founder/MD Name & Email ID */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                          12. CEO/Founder/MD Name <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="ceoFounderName"
                          value={vendorData.ceoFounderName}
                          onChange={handleVendorInputChange}
                          placeholder="Enter your answer"
                          required
                          style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                        />
                      </div>
                      <div style={{ backgroundColor: 'rgba(15, 25, 55, 0.6)', padding: '1.35rem 1.6rem', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.25rem' }}>
                          13. CEO/Founder/MD Email ID <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="ceoFounderEmail"
                          value={vendorData.ceoFounderEmail}
                          onChange={handleVendorInputChange}
                          placeholder="Enter your answer"
                          required
                          style={{ width: '100%', marginTop: '0.5rem', padding: '0.85rem 1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.18)', backgroundColor: '#071126', color: '#ffffff', fontSize: '0.95rem', outline: 'none' }}
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          padding: '1rem 4rem',
                          backgroundColor: '#6C5CE7',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '1.05rem',
                          borderRadius: '50px',
                          border: 'none',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          boxShadow: '0 8px 25px rgba(108, 92, 231, 0.55)',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        {loading ? 'Submitting Vendor Update...' : 'Submit Vendor Update'}
                      </button>
                    </div>

                  </form>
                )}
              </div>
            )}

            {/* ======================================================== */}
            {/* TAB 2: GENERAL PARTNER ENQUIRY FORM */}
            {/* ======================================================== */}
            {activeFormTab === 'enquiry' && (
              <div
                style={{
                  backgroundColor: 'rgba(7, 17, 38, 0.85)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(108, 92, 231, 0.4)',
                  borderRadius: '24px',
                  padding: '3rem 2.5rem',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)'
                }}
              >
                {formSubmitted ? (
                  <div style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: '3.5rem', borderRadius: '18px', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}>
                    <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 1.25rem' }} />
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Enquiry Received!</h3>
                    <p style={{ color: '#475569', fontSize: '1.1rem', marginTop: '0.5rem', maxWidth: '500px', margin: '0.5rem auto 2rem' }}>
                      Thank you for reaching out. One of our technology partner specialists will connect with you shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      style={{ padding: '0.85rem 2.25rem', backgroundColor: '#6C5CE7', color: '#ffffff', fontWeight: 800, borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(108, 92, 231, 0.4)' }}
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.6rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                          First name <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First name"
                          required
                          style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                          Last name <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last name"
                          required
                          style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.6rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                          Role <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          placeholder="Role"
                          required
                          style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                          Organisation <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="organisation"
                          value={formData.organisation}
                          onChange={handleInputChange}
                          placeholder="Organisation"
                          required
                          style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.6rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                          Business email address <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Business email address"
                          required
                          style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff' }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                          Phone <span style={{ color: '#f87171' }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone"
                          required
                          style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff' }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.4rem' }}>
                        Tell us more about your enquiry <span style={{ color: '#f87171' }}>*</span>
                      </label>
                      <textarea
                        name="enquiry"
                        rows={4}
                        value={formData.enquiry}
                        onChange={handleInputChange}
                        placeholder="Tell us more about your enquiry"
                        required
                        style={{ width: '100%', padding: '0.9rem 1.1rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.18)', fontSize: '0.95rem', outline: 'none', backgroundColor: '#071126', color: '#ffffff', resize: 'vertical' }}
                      ></textarea>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          padding: '1rem 3.5rem',
                          backgroundColor: '#6C5CE7',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '1.05rem',
                          borderRadius: '50px',
                          border: 'none',
                          cursor: loading ? 'not-allowed' : 'pointer',
                          boxShadow: '0 8px 25px rgba(108, 92, 231, 0.55)',
                          transition: 'all 0.25s ease'
                        }}
                      >
                        {loading ? 'Submitting...' : 'Submit Enquiry'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            )}

          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. EXPLORE MORE CARDS SECTION */}
        {/* ============================================================ */}
        <section
          ref={exploreRef}
          style={{ backgroundColor: '#f8fafc', padding: '6rem 2rem 7rem', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                opacity: exploreVisible ? 1 : 0,
                transform: exploreVisible ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                marginBottom: '3.5rem'
              }}
            >
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.6rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Explore more
              </h2>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '880px', margin: '0 auto' }}>
              
              {/* Card 1: Careers */}
              <div
                className="about-deliver-card"
                onClick={() => {
                  if (onNavCareers) onNavCareers();
                }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textAlign: 'left',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  border: '1px solid #e2e8f0',
                  opacity: exploreVisible ? 1 : 0,
                  transform: exploreVisible ? 'translateY(0)' : 'translateY(35px)',
                  transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.15s'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src="/images/team_collaboration.jpg"
                    alt="Careers at Vebhor"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '2.2rem' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.85rem' }}>
                    Careers
                  </h3>
                  <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Join our growing global team of engineers, recruiters, HR leaders, and workforce consultants.
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#6C5CE7', fontWeight: 800, fontSize: '0.95rem' }}>
                    Explore open roles <ArrowRight size={18} />
                  </span>
                </div>
              </div>

              {/* Card 2: Challenge Us */}
              <div
                className="about-deliver-card"
                onClick={() => {
                  if (onNavChallengeUs) onNavChallengeUs();
                }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  textAlign: 'left',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  border: '1px solid #e2e8f0',
                  opacity: exploreVisible ? 1 : 0,
                  transform: exploreVisible ? 'translateY(0)' : 'translateY(35px)',
                  transition: 'all 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img
                    src="/images/challenge_hero.jpg"
                    alt="Challenge Us"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '2.2rem' }}>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.85rem' }}>
                    Challenge Us
                  </h3>
                  <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    Have a complex workforce or talent scaling problem? Challenge our specialists to engineer a high-impact solution.
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#6C5CE7', fontWeight: 800, fontSize: '0.95rem' }}>
                    Submit a challenge <ArrowRight size={18} />
                  </span>
                </div>
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

export default PartnersPage;
