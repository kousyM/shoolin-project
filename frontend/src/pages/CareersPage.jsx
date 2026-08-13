import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Building2, ChevronRight, ArrowRight, ArrowLeft, Upload, CheckCircle2, X } from 'lucide-react';
import { getApiBaseUrl } from '../api/config';
import { DEFAULT_JOBS, DEFAULT_META, getStoredJobs } from '../data/defaultJobs';

export const CareersPage = ({ onSelectJob, onNavHome, onOpenContactPage, onNavAbout, onNavCareers, onNavPartners, onNavInsights, onNavServices, onNavChallengeUs, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [showEoiModal, setShowEoiModal] = useState(false);

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
      if (search) {
        filtered = filtered.filter(j => j.title.toLowerCase().includes(search.toLowerCase()) || j.summary.toLowerCase().includes(search.toLowerCase()));
      }
      if (locationFilter !== 'All') {
        filtered = filtered.filter(j => j.location.includes(locationFilter));
      }
      if (departmentFilter !== 'All') {
        filtered = filtered.filter(j => j.department === departmentFilter);
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
    setTimeout(() => {
      setEoiStatus({ loading: false, success: true, error: null });
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
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

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* ============================================================ */}
        {/* JOB OPPORTUNITIES EXCLUSIVE PAGE */}
        {/* ============================================================ */}
        <div>
          {/* Header Banner */}
          <section
            style={{
              backgroundColor: '#0b132b',
              backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#ffffff',
              padding: '4.5rem 2rem',
              minHeight: '260px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
              <h1 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                Job Opportunities
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#e2e8f0', maxWidth: '680px', lineHeight: '1.6' }}>
                Explore open engineering, cloud, cybersecurity, and delivery positions across Australia.
              </p>
            </div>
          </section>

          {/* Search & Filter Bar */}
          <section style={{ backgroundColor: '#e9ecef', borderTop: '1px solid #ced4da', borderBottom: '1px solid #ced4da', padding: '0.85rem 2rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
              <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', width: '100%' }}>
                <div style={{ flex: 1, minWidth: '240px' }}>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Filter by title, expertise"
                    style={{ width: '100%', padding: '0.5rem 0.85rem', border: '1px solid #ced4da', borderRadius: '3px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{ padding: '0.5rem 1.25rem', backgroundColor: '#e2e8f0', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '0.88rem', fontWeight: 600, color: '#1e293b', cursor: 'pointer' }}
                >
                  Search
                </button>

                <div style={{ minWidth: '160px' }}>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem 0.85rem', border: '1px solid #ced4da', borderRadius: '3px', fontSize: '0.88rem', outline: 'none' }}
                  >
                    <option value="All">Location (All)</option>
                    <option value="Melbourne, VIC">Melbourne, VIC</option>
                    <option value="Sydney, Australia">Sydney, Australia</option>
                    <option value="Macquarie Park, NSW">Macquarie Park, NSW</option>
                    <option value="Preston, VIC">Preston, VIC</option>
                    <option value="Canberra, Australia">Canberra, Australia</option>
                  </select>
                </div>

                <div style={{ minWidth: '160px' }}>
                  <select
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                    style={{ width: '100%', padding: '0.5rem 0.85rem', border: '1px solid #ced4da', borderRadius: '3px', fontSize: '0.88rem', outline: 'none' }}
                  >
                    <option value="All">Department (All)</option>
                    <option value="SAP">SAP</option>
                    <option value="Digital Applications">Digital Applications</option>
                    <option value="Cloud & AI">Cloud & AI</option>
                  </select>
                </div>
              </form>
            </div>
          </section>

          {/* Jobs Table */}
          <section style={{ maxWidth: '1200px', margin: '2.5rem auto 6rem', padding: '0 1.5rem' }}>
            {loading ? (
              <div style={{ padding: '4rem 0', textAlign: 'center', color: '#64748b' }}>
                <p>Loading available career opportunities...</p>
              </div>
            ) : jobs.length === 0 ? (
              <div style={{ padding: '4rem 0', textAlign: 'center', color: '#64748b', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#1e293b', marginBottom: '0.5rem' }}>No open positions match your search</h3>
                <p style={{ fontSize: '0.95rem' }}>Try clearing filters or search for another keyword.</p>
              </div>
            ) : (
              <div style={{ backgroundColor: '#ffffff', borderRadius: '4px', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                      <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>JOB TITLE</th>
                      <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>DEPARTMENT</th>
                      <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#334155' }}>LOCATION</th>
                      <th style={{ padding: '1.2rem 1.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#334155', textAlign: 'right' }}>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {jobs.map((job, idx) => (
                      <tr
                        key={job.id || idx}
                        style={{ borderBottom: '1px solid #f1f5f9', transition: 'background-color 0.15s ease' }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f8fafc')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
                      >
                        <td style={{ padding: '1.25rem 1.5rem' }}>
                          <span
                            onClick={() => {
                              if (onSelectJob) onSelectJob(job);
                            }}
                            style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0284c7', textDecoration: 'none', cursor: 'pointer' }}
                          >
                            {job.title}
                          </span>
                          {job.is_remote && (
                            <span style={{ marginLeft: '0.6rem', fontSize: '0.75rem', fontWeight: 700, color: '#16a34a', backgroundColor: '#dcfce7', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                              Remote
                            </span>
                          )}
                        </td>
                        <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', color: '#475569' }}>
                          {job.department}
                        </td>
                        <td style={{ padding: '1.25rem 1.5rem', fontSize: '0.95rem', color: '#475569' }}>
                          {job.location}
                        </td>
                        <td style={{ padding: '1.25rem 1.5rem', textAlign: 'right' }}>
                          <button
                            onClick={() => {
                              if (onSelectJob) onSelectJob(job);
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.4rem',
                              padding: '0.5rem 1rem',
                              backgroundColor: '#0f172a',
                              color: '#ffffff',
                              borderRadius: '4px',
                              fontSize: '0.85rem',
                              fontWeight: 700,
                              border: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            <span>View Role</span>
                            <ChevronRight size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Expressions of Interest Banner */}
            <div style={{ marginTop: '3.5rem', backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '12px', padding: '2.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
              <div>
                <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#0369a1', marginBottom: '0.4rem' }}>
                  Don't see the role you are looking for?
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#334155', margin: 0 }}>
                  Submit an Expression of Interest and our talent team will reach out when suitable opportunities open up.
                </p>
              </div>
              <button
                onClick={() => setShowEoiModal(true)}
                style={{ padding: '0.85rem 1.75rem', backgroundColor: '#0284c7', color: '#ffffff', fontWeight: 700, fontSize: '0.95rem', borderRadius: '6px', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(2,132,199,0.25)' }}
              >
                Express Interest
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Expression of Interest Modal */}
      {showEoiModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', maxWidth: '580px', width: '100%', padding: '2.5rem', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', maxHeight: '90vh', overflowY: 'auto' }}>
            <button
              onClick={() => setShowEoiModal(false)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.25rem' }}
            >
              <X size={24} />
            </button>

            <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
              Expression of Interest
            </h2>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '1.75rem', lineHeight: 1.5 }}>
              Share your details and resume with our talent acquisition team.
            </p>

            {eoiStatus.success ? (
              <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
                <CheckCircle2 size={54} color="#16a34a" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#16a34a', marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '1.5rem' }}>Your Expression of Interest has been submitted successfully.</p>
                <button
                  onClick={() => { setShowEoiModal(false); setEoiStatus({ loading: false, success: false, error: null }); }}
                  style={{ padding: '0.75rem 1.5rem', backgroundColor: '#0f172a', color: '#ffffff', borderRadius: '6px', fontWeight: 700, border: 'none', cursor: 'pointer' }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleEoiSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>First Name *</label>
                    <input type="text" name="firstName" required value={eoiFormData.firstName} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>Last Name *</label>
                    <input type="text" name="lastName" required value={eoiFormData.lastName} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>Email Address *</label>
                  <input type="email" name="email" required value={eoiFormData.email} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>Preferred Location *</label>
                  <input type="text" name="location" placeholder="e.g. Melbourne, Sydney" required value={eoiFormData.location} onChange={handleEoiChange} style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>Resume / CV *</label>
                  <input type="file" required accept=".pdf,.doc,.docx" onChange={handleEoiChange} style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e1', borderRadius: '6px', fontSize: '0.85rem' }} />
                </div>

                <button
                  type="submit"
                  disabled={eoiStatus.loading}
                  style={{ marginTop: '0.5rem', padding: '0.85rem', backgroundColor: '#0284c7', color: '#ffffff', fontWeight: 800, fontSize: '0.95rem', borderRadius: '6px', border: 'none', cursor: 'pointer' }}
                >
                  {eoiStatus.loading ? 'Submitting...' : 'Submit Expression of Interest'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default CareersPage;
