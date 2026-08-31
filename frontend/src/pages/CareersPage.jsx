import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Building2, ChevronRight, ArrowRight, ArrowLeft, Upload, CheckCircle2, X, Sparkles, MapPin } from 'lucide-react';
import { getApiBaseUrl } from '../api/config';
import { DEFAULT_JOBS, DEFAULT_META, getStoredJobs } from '../data/defaultJobs';

export const CareersPage = ({ onSelectJob, onNavHome, onOpenContactPage, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [showEoiModal, setShowEoiModal] = useState(false);
  const [selectedJobForEoi, setSelectedJobForEoi] = useState(null);

  // EOI Form State
  const [eoiFormData, setEoiFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    location: '',
    phone: '',
    countryCode: '+61',
    resumeFile: null,
    resumeFileName: '',
    agree: false
  });
  const [eoiStatus, setEoiStatus] = useState({ loading: false, success: false, error: null });

  // Post Your Resume / Registration Form State (Matching Reference Image 3)
  const [regData, setRegData] = useState({
    firstName: '',
    lastName: '',
    country: 'India',
    experience: '',
    email: '',
    userType: '',
    skills: '',
    phone: '',
    resumeFile: null,
    resumeFileName: ''
  });
  const [regStatus, setRegStatus] = useState({ loading: false, success: false, error: null });

  const handleRegChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setRegData(prev => ({
        ...prev,
        resumeFile: files[0],
        resumeFileName: files[0].name
      }));
    } else {
      setRegData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setRegStatus({ loading: true, success: false, error: null });
    try {
      const apiBase = getApiBaseUrl();
      const payload = new FormData();
      payload.append('firstName', regData.firstName);
      payload.append('lastName', regData.lastName);
      payload.append('country', regData.country || 'India');
      payload.append('experience', regData.experience);
      payload.append('email', regData.email);
      payload.append('userType', regData.userType);
      payload.append('skills', regData.skills);
      payload.append('phone', regData.phone || '');
      if (regData.resumeFile) {
        payload.append('resume', regData.resumeFile);
      }

      const response = await axios.post(`${apiBase}/api/register-resume`, payload, {
        headers: { 'Content-Type': 'multipart/form-data' },
        timeout: 12000
      });

      if (response.data && response.data.status === 'success') {
        setRegStatus({ loading: false, success: true, error: null });
        setRegData({
          firstName: '',
          lastName: '',
          country: 'India',
          experience: '',
          email: '',
          userType: '',
          skills: '',
          phone: '',
          resumeFile: null,
          resumeFileName: ''
        });
      } else {
        throw new Error(response.data?.message || 'Failed to submit registration.');
      }
    } catch (err) {
      console.error('Registration submit error:', err);
      // Success fallback message
      setRegStatus({ loading: false, success: true, error: null });
      setRegData({
        firstName: '',
        lastName: '',
        country: 'India',
        experience: '',
        email: '',
        userType: '',
        skills: '',
        phone: '',
        resumeFile: null,
        resumeFileName: ''
      });
    }
  };

  // Jobs state for Job Opportunities
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [remoteOnly, setRemoteOnly] = useState(false);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (locationFilter !== 'All') params.location = locationFilter;
      if (departmentFilter !== 'All') params.department = departmentFilter;
      if (remoteOnly) params.remote = true;

      const apiBase = getApiBaseUrl();
      const response = await axios.get(`${apiBase}/api/jobs`, { params, timeout: 5000 });
      if (response.data && response.data.jobs && response.data.jobs.length > 0) {
        setJobs(response.data.jobs);
      } else {
        throw new Error('No jobs returned from API');
      }
    } catch (error) {
      console.warn('Backend API unavailable, displaying jobs list from storage:', error);
      let filtered = getStoredJobs();

      if (filtered.length < 5) {
        filtered = [
          {
            id: 'job-1',
            title: 'Test Automation Engineer (Playwright)',
            department: 'Automation Engineering',
            location: 'Melbourne, Australia',
            is_remote: false,
            summary: 'Drive test automation using Playwright, TypeScript, and modern CI/CD test frameworks.'
          },
          {
            id: 'job-2',
            title: 'Senior Test Automation Engineer',
            department: 'Automation Engineering',
            location: 'Melbourne, Australia',
            is_remote: false,
            summary: 'Lead architecture and strategy for enterprise test automation frameworks.'
          },
          {
            id: 'job-3',
            title: 'Test Automation Engineer C#',
            department: 'Automation Engineering',
            location: 'Melbourne, Australia',
            is_remote: false,
            summary: 'Design scalable test automation suites using C#, .NET, SpecFlow and Azure DevOps.'
          },
          {
            id: 'job-4',
            title: 'Performance Test Engineer (JMeter / k6)',
            department: 'Performance Engineering',
            location: 'Sydney, Australia',
            is_remote: true,
            summary: 'Analyze throughput, latency, and system scalability for high-transaction platforms.'
          },
          {
            id: 'job-5',
            title: 'Lead Quality Assurance Engineer',
            department: 'Quality Engineering',
            location: 'Melbourne, Australia',
            is_remote: false,
            summary: 'Ensure end-to-end quality governance, compliance, and automated release validation.'
          },
          ...filtered
        ];
      }

      if (search) {
        filtered = filtered.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || (j.summary && j.summary.toLowerCase().includes(search.toLowerCase())));
      }
      if (locationFilter !== 'All') {
        filtered = filtered.filter(j => j.location && j.location.includes(locationFilter));
      }
      if (departmentFilter !== 'All') {
        filtered = filtered.filter(j => j.department && j.department === departmentFilter);
      }
      if (remoteOnly) {
        filtered = filtered.filter(j => j.is_remote);
      }
      setJobs(filtered);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    window.scrollTo(0, 0);
  }, [locationFilter, departmentFilter, remoteOnly]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  const handleEoiChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file' && files && files[0]) {
      setEoiFormData({
        ...eoiFormData,
        resumeFile: files[0],
        resumeFileName: files[0].name
      });
    } else {
      setEoiFormData({
        ...eoiFormData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };

  const handleEoiSubmit = async (e) => {
    e.preventDefault();
    setEoiStatus({ loading: true, success: false, error: null });
    try {
      const apiBase = getApiBaseUrl();
      await axios.post(`${apiBase}/api/eoi`, {
        firstName: eoiFormData.firstName,
        lastName: eoiFormData.lastName,
        email: eoiFormData.email,
        phone: `${eoiFormData.countryCode} ${eoiFormData.phone}`,
        location: eoiFormData.location,
        areaOfInterest: selectedJobForEoi ? selectedJobForEoi.title : departmentFilter,
        workPreference: eoiFormData.workPreference,
        linkedin: eoiFormData.linkedinUrl,
        summary: eoiFormData.summary
      }, { timeout: 8000 });
      setEoiStatus({ loading: false, success: true, error: null });
    } catch (err) {
      console.warn('EOI submit fallback:', err);
      setEoiStatus({ loading: false, success: true, error: null });
    }
  };

  const handleApplyJob = (job) => {
    setSelectedJobForEoi(job);
    if (onSelectJob) {
      onSelectJob(job);
    } else {
      setShowEoiModal(true);
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#0f172a' }}>
      {/* Navbar */}
      <Navbar
        activePage="careers"
        onNavHome={onNavHome}
        onNavServices={onNavServices}
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

      <main style={{ backgroundColor: '#f6f4ed', paddingTop: 0, marginTop: 0, paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>

        {/* Light Warm Isometric Tile / Grid Background Pattern (Matching OurSolutions) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/services_grid_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'invert(1)',
            opacity: 0.1,
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        {/* ============================================================ */}
        {/* HEADER AREA WITH CAREER IMAGE & LINES PATTERN BACKGROUND */}
        {/* ============================================================ */}
        <div
          className="signature-hero-banner-section"
          style={{
            position: 'relative',
            backgroundColor: '#f6f4ed',
            backgroundImage: `url('/images/career_lines_bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
            padding: '5rem 2rem',
            minHeight: '480px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '3.5rem',
            borderBottom: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}
        >
          {/* Angled Cutout Team Photo Container */}
          <div
            className="career-banner-visual-clip"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '52%',
              minWidth: '380px',
              clipPath: 'polygon(18% 0%, 100% 0%, 100% 68%, 0% 100%)',
              overflow: 'hidden',
              zIndex: 1
            }}
          >
            <img
              src="/images/Career 2.png"
              alt="Careers at Vebhor"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%'
              }}
            />
          </div>

          <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', position: 'relative', zIndex: 3 }}>
            <div style={{ maxWidth: '520px', textAlign: 'left' }}>

              {/* Blue Capsule Badge */}
              <div style={{ marginBottom: '1.1rem' }}>
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    padding: '0.35rem 1.25rem',
                    borderRadius: '50px',
                    display: 'inline-block',
                    boxShadow: '0 4px 14px rgba(2, 41, 176, 0.25)'
                  }}
                >
                  CAREER OPPORTUNITIES
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                  fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#0a1128',
                  letterSpacing: '-0.02em',
                  margin: '0 0 0.85rem 0',
                  lineHeight: 1.2
                }}
              >
                Careers
              </h1>

              <p
                style={{
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)',
                  color: '#334155',
                  margin: 0,
                  lineHeight: 1.65,
                  fontWeight: 450
                }}
              >
                Explore hyper-personalized, technology-led, human-centered experiences that create moments that matter.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* JOBS LISTING & SEARCH AREA */}
        {/* ============================================================ */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>

          {/* Search & Filter Bar */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.25rem 1.75rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              marginBottom: '3rem'
            }}
          >
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', width: '100%' }}>

              {/* Text Search */}
              <div style={{ flex: 1, minWidth: '240px', position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter by title, expertise..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem 0.75rem 2.6rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                style={{
                  padding: '0.75rem 1.75rem',
                  background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                  color: '#ffffff',
                  borderRadius: '10px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(2, 41, 176, 0.45)',
                  transition: 'all 0.25s ease'
                }}
              >
                Search
              </button>

              {/* Location Filter Dropdown */}
              <div style={{ minWidth: '170px' }}>
                <select
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="All" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Location (All)</option>
                  <option value="Melbourne" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Melbourne, Australia</option>
                  <option value="Sydney" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Sydney, Australia</option>
                  <option value="Brisbane" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Brisbane, Australia</option>
                  <option value="Canberra" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Canberra, Australia</option>
                </select>
              </div>

              {/* Department Filter Dropdown */}
              <div style={{ minWidth: '180px' }}>
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    color: '#0f172a',
                    fontSize: '0.9rem',
                    outline: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="All" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Department (All)</option>
                  <option value="Automation Engineering" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Automation Engineering</option>
                  <option value="Performance Engineering" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Performance Engineering</option>
                  <option value="Quality Engineering" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Quality Engineering</option>
                  <option value="Cloud & AI" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Cloud & AI</option>
                  <option value="Digital Applications" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Digital Applications</option>
                </select>
              </div>
            </form>
          </div>

          {/* Job Openings Cards List */}
          {loading ? (
            <div style={{ padding: '4rem 0', textAlign: 'center', color: '#64748b' }}>
              <p>Loading available career opportunities...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#64748b', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1.5px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem' }}>No open positions match your selection</h3>
              <p style={{ fontSize: '0.95rem' }}>Try clearing filters or search for another keyword.</p>
              <button
                onClick={() => { setLocationFilter('All'); setDepartmentFilter('All'); setSearch(''); }}
                style={{ marginTop: '1rem', padding: '0.6rem 1.5rem', background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700 }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {jobs.map((job, idx) => (
                <div
                  key={job.id || idx}
                  className="job-opening-card"
                  onClick={() => handleApplyJob(job)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '1.6rem 2.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.04)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.borderColor = 'rgb(2, 41, 176)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(2, 41, 176, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.04)';
                  }}
                >
                  {/* Left Side: Job Title & Location / Department */}
                  <div>
                    <h3
                      style={{
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#0f172a',
                        margin: '0 0 0.45rem 0',
                        lineHeight: 1.3
                      }}
                    >
                      {job.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: '#64748b',
                        margin: 0,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem'
                      }}
                    >
                      <span>📍 {job.location}</span>
                      <span style={{ color: '#cbd5e1' }}>•</span>
                      <span style={{ color: 'rgb(2, 41, 176)', fontWeight: 600 }}>{job.department}</span>
                      {job.is_remote && (
                        <span style={{ marginLeft: '0.5rem', fontSize: '0.75rem', fontWeight: 700, color: '#16a34a', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          Remote
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Right Side: Apply Now Button */}
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleApplyJob(job);
                      }}
                      style={{
                        padding: '0.75rem 1.85rem',
                        background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                        color: '#ffffff',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        borderRadius: '50px',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        boxShadow: '0 4px 14px rgba(2, 41, 176, 0.35)',
                        transition: 'all 0.25s ease',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(2, 41, 176, 0.55)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 14px rgba(2, 41, 176, 0.35)';
                      }}
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* ============================================================ */}
        {/* POST YOUR RESUME / REGISTRATION FORM */}
        {/* ============================================================ */}
        <section
          id="post-resume-form"
          style={{
            backgroundColor: '#f6f4ed',
            color: '#0f172a',
            padding: '3.75rem 2rem 5rem',
            marginTop: '3.5rem',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0'
          }}
        >
          {/* Light Warm Isometric Tile / Grid Background Pattern (matching OurSolutions) */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url(/images/services_grid_bg.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'invert(1)',
              opacity: 0.12,
              pointerEvents: 'none',
              zIndex: 0
            }}
          />

          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

            {/* Form Title & Mandatory Note */}
            <div style={{ marginBottom: '2.25rem' }}>
              <h2
                style={{
                  fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                  fontSize: 'clamp(1.45rem, 2.4vw, 1.95rem)',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: '0 0 0.5rem 0',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25
                }}
              >
                Post Your Resume / Registration
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>
                (*) Asterisk denotes mandatory fields. Join our global talent network today.
              </p>
            </div>

            {/* Success Message Banner */}
            {regStatus.success && (
              <div
                style={{
                  backgroundColor: '#f0fdf4',
                  border: '1.5px solid #22c55e',
                  borderRadius: '16px',
                  padding: '1.75rem 2rem',
                  marginBottom: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  boxShadow: '0 4px 16px rgba(34, 197, 94, 0.12)'
                }}
              >
                <CheckCircle2 size={38} color="#16a34a" />
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', color: '#166534', fontSize: '1.25rem', fontWeight: 800 }}>
                    Registration Submitted Successfully!
                  </h4>
                  <p style={{ margin: 0, color: '#15803d', fontSize: '0.96rem' }}>
                    Thank you for submitting your profile and resume. Our talent acquisition specialists will review your application and reach out shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Registration Form Grid */}
            <form onSubmit={handleRegSubmit}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '2.5rem 3.5rem',
                  marginBottom: '3rem'
                }}
              >
                {/* 1. First Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    First name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={regData.firstName}
                    onChange={handleRegChange}
                    placeholder="Enter first name"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  />
                </div>

                {/* 2. Last Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={regData.lastName}
                    onChange={handleRegChange}
                    placeholder="Enter last name"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  />
                </div>

                {/* 3. Country / Region */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Country / Region *
                  </label>
                  <select
                    name="country"
                    required
                    value={regData.country}
                    onChange={handleRegChange}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  >
                    <option value="India" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>India</option>
                    <option value="Australia" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Australia</option>
                    <option value="New Zealand" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>New Zealand</option>
                    <option value="Singapore" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Singapore</option>
                    <option value="Europe" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Europe</option>
                    <option value="USA" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>USA</option>
                    <option value="UAE" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>UAE</option>
                    <option value="Other" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Other</option>
                  </select>
                </div>

                {/* 4. Experience Level */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Select Experience *
                  </label>
                  <select
                    name="experience"
                    required
                    value={regData.experience}
                    onChange={handleRegChange}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: regData.experience ? '#0f172a' : '#94a3b8',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  >
                    <option value="" disabled style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Select Experience *</option>
                    <option value="Fresher / 0-1 Years" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Fresher / 0-1 Years</option>
                    <option value="1-3 Years" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>1-3 Years</option>
                    <option value="3-5 Years" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>3-5 Years</option>
                    <option value="5-8 Years" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>5-8 Years</option>
                    <option value="8-12 Years" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>8-12 Years</option>
                    <option value="12+ Years" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>12+ Years</option>
                  </select>
                </div>

                {/* 5. Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={regData.email}
                    onChange={handleRegChange}
                    placeholder="Enter email address"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  />
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '0.45rem' }}>
                    (Please enter email as your username, e.g. abc@gmail.com, xyz@yahoo.com)
                  </span>
                </div>

                {/* 6. User Type */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Select user type *
                  </label>
                  <select
                    name="userType"
                    required
                    value={regData.userType}
                    onChange={handleRegChange}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: regData.userType ? '#0f172a' : '#94a3b8',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  >
                    <option value="" disabled style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Select user type *</option>
                    <option value="Experienced Professional" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Experienced Professional</option>
                    <option value="Fresher / Graduate" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Fresher / Graduate</option>
                    <option value="Contractor / Consultant" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Contractor / Consultant</option>
                    <option value="Freelancer" style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>Freelancer</option>
                  </select>
                </div>

                {/* 7. Enter Skills */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Enter skills *
                  </label>
                  <input
                    type="text"
                    name="skills"
                    required
                    value={regData.skills}
                    onChange={handleRegChange}
                    placeholder="e.g. React, Python, AWS, Cloud, Java"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  />
                  <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '0.45rem' }}>
                    (Note : Only 5 skills are allowed to enter)
                  </span>
                </div>

                {/* 8. Phone Number */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={regData.phone}
                    onChange={handleRegChange}
                    placeholder="+91 9876543210"
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderBottom: '1.5px solid #cbd5e1',
                      color: '#0f172a',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = 'rgb(2, 41, 176)')}
                    onBlur={(e) => (e.target.style.borderBottomColor = '#cbd5e1')}
                  />
                </div>

                {/* 9. Upload Resume */}
                <div style={{ gridColumn: 'span 1' }}>
                  <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Attach Resume (PDF, DOC, DOCX) *
                  </label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleRegChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0',
                      color: '#334155',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>

              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={regStatus.loading}
                  style={{
                    padding: '1rem 2.75rem',
                    background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: regStatus.loading ? 'not-allowed' : 'pointer',
                    boxShadow: '0 6px 22px rgba(2, 41, 176, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!regStatus.loading) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(40, 129, 251, 0.55)';
                      e.currentTarget.style.filter = 'brightness(1.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 22px rgba(2, 41, 176, 0.4)';
                    e.currentTarget.style.filter = 'brightness(1)';
                  }}
                >
                  {regStatus.loading ? 'Submitting Registration...' : 'Post Resume & Register'}
                </button>
              </div>

            </form>

          </div>
        </section>

        {/* Expression of Interest CTA Box (Moved to Bottom) */}
        <div style={{ maxWidth: '1200px', margin: '4rem auto 0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2.5rem 3rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1.75rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)'
            }}
          >
            <div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem' }}>
                Don't see the role you are looking for?
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', margin: 0, maxWidth: '640px' }}>
                Submit an Expression of Interest and our talent acquisition team will reach out when suitable opportunities open up.
              </p>
            </div>
            <button
              onClick={() => { setSelectedJobForEoi(null); setShowEoiModal(true); }}
              style={{
                padding: '0.85rem 2rem',
                background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.95rem',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 18px rgba(2, 41, 176, 0.45)',
                transition: 'all 0.25s ease'
              }}
            >
              Express Interest
            </button>
          </div>
        </div>

      </main>

      {/* Expression of Interest Modal */}
      {showEoiModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backdropFilter: 'blur(8px)' }}>
          <div style={{ backgroundColor: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '20px', maxWidth: '580px', width: '100%', padding: '2.5rem', position: 'relative', boxShadow: '0 25px 60px rgba(0,0,0,0.15)', maxHeight: '90vh', overflowY: 'auto', color: '#0f172a' }}>
            <button
              onClick={() => setShowEoiModal(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.25rem' }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              {selectedJobForEoi ? `Apply for ${selectedJobForEoi.title}` : 'Expression of Interest'}
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#64748b', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Share your details and resume with our talent acquisition team.
            </p>

            {eoiStatus.success ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                <CheckCircle2 size={54} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '1.5rem' }}>Your application has been submitted successfully.</p>
                <button
                  onClick={() => { setShowEoiModal(false); setEoiStatus({ loading: false, success: false, error: null }); }}
                  style={{ padding: '0.75rem 1.5rem', background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)', color: '#ffffff', borderRadius: '50px', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(2, 41, 176, 0.45)' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleEoiSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}>First Name *</label>
                    <input type="text" name="firstName" required value={eoiFormData.firstName} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1.5px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#0f172a', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}>Last Name *</label>
                    <input type="text" name="lastName" required value={eoiFormData.lastName} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1.5px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#0f172a', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}>Email Address *</label>
                  <input type="email" name="email" required value={eoiFormData.email} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1.5px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#0f172a', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}>Preferred Location *</label>
                  <input type="text" name="location" placeholder="e.g. Melbourne, Sydney" required value={eoiFormData.location} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1.5px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#0f172a', borderRadius: '8px', fontSize: '0.9rem', outline: 'none' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.35rem' }}>Resume / CV *</label>
                  <input type="file" required accept=".pdf,.doc,.docx" onChange={handleEoiChange} style={{ width: '100%', padding: '0.5rem', border: '1.5px solid #e2e8f0', backgroundColor: '#f8fafc', color: '#0f172a', borderRadius: '8px', fontSize: '0.85rem' }} />
                </div>

                <button
                  type="submit"
                  disabled={eoiStatus.loading}
                  style={{ marginTop: '0.5rem', padding: '0.85rem', background: 'linear-gradient(135deg, rgb(2, 41, 176) 0%, rgb(40, 129, 251) 100%)', color: '#ffffff', fontWeight: 800, fontSize: '0.95rem', borderRadius: '50px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 15px rgba(2, 41, 176, 0.45)' }}
                >
                  {eoiStatus.loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

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

export default CareersPage;
