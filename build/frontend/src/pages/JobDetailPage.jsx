import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Building2, Share2, Mail, MessageCircle, Globe } from 'lucide-react';
import { getApiBaseUrl } from '../api/config';
import { DEFAULT_JOBS, getStoredJobs } from '../data/defaultJobs';

export const JobDetailPage = ({ jobId, onBackToCareers, onApplyJob, onSelectOtherJob, onNavHome, onNavServices, onNavAbout, onNavPartners, onNavInsights, onNavChallengeUs, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [job, setJob] = useState(null);
  const [otherJobs, setOtherJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = async () => {
      setLoading(true);
      try {
        const apiBase = getApiBaseUrl();
        const response = await axios.get(`${apiBase}/api/jobs/${jobId}`, { timeout: 5000 });
        if (response.data && response.data.job) {
          setJob(response.data.job);
          setOtherJobs(response.data.otherJobs || []);
        } else {
          throw new Error('Job not found in API');
        }
      } catch (err) {
        console.warn('Backend API unavailable, using stored job details:', err);
        const stored = getStoredJobs();
        const found = stored.find((j) => String(j.id) === String(jobId)) || stored[0];
        setJob(found);
        setOtherJobs(stored.filter((j) => String(j.id) !== String(jobId)));
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJobDetail();
    }
  }, [jobId]);

  if (loading) {
    return (
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Navbar onNavHome={onNavHome} onNavServices={onNavServices} onNavAbout={onNavAbout} onNavPartners={onNavPartners} onNavInsights={onNavInsights} onNavCareers={onBackToCareers} onOpenContactPage={onOpenContactPage} />
        <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '4px solid #004f6e', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <p style={{ marginTop: '0.5rem', color: '#475569' }}>Loading job details...</p>
        </div>
        <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
      </div>
    );
  }

  if (!job) {
    return (
      <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Navbar onNavHome={onNavHome} onNavServices={onNavServices} onNavAbout={onNavAbout} onNavPartners={onNavPartners} onNavInsights={onNavInsights} onNavCareers={onBackToCareers} onOpenContactPage={onOpenContactPage} />
        <div style={{ maxWidth: '800px', margin: '5rem auto', textAlign: 'center', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>Job Not Found</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>The requested position may have been closed or removed.</p>
          <button
            onClick={onBackToCareers}
            style={{ backgroundColor: '#004f6e', color: '#ffffff', fontWeight: 600, padding: '0.6rem 1.25rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
          >
            Back to Careers
          </button>
        </div>
        <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavAbout={onNavAbout}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onNavCareers={onBackToCareers}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: '80px', paddingBottom: '60px', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        {/* Back Link */}
        <button
          onClick={onBackToCareers}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: '#475569', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Career Opportunities</span>
        </button>

        <div className="vebhor-job-detail-grid">
          {/* Main Left Content Column */}
          <div className="vebhor-job-main-col" style={{ background: '#ffffff', padding: '2.5rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            {/* Vebhor Brand Logo */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.2rem', fontWeight: 900, color: '#0f172a' }}>
                vebhor<span style={{ color: '#55E6C1' }}>//</span>
              </span>
            </div>

            {/* Job Title */}
            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem', lineHeight: 1.25, wordBreak: 'break-word' }}>
              {job.title}
            </h1>

            {/* Meta Info Header */}
            <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid #f1f5f9' }}>
              <div style={{ fontWeight: 600, color: '#1e293b' }}>{job.location}, Australia</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#475569' }}>
                <Building2 size={16} style={{ color: '#64748b' }} />
                <span>Employees work in a hybrid mode</span>
              </div>
              {job.work_mode && <div style={{ color: '#475569', fontWeight: 500, paddingLeft: '1.5rem' }}>{job.work_mode}</div>}
              <div>{job.employment_type}</div>
              <div style={{ color: '#334155', fontWeight: 600 }}>Department: {job.department}</div>
            </div>

            {/* Company Description */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Company Description</h2>
              <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                {job.company_description ||
                  'At Vebhor, we believe in doing technology services better. Our commitment to quality, focus on people, and willingness to challenge traditional thinking set us apart. Our team brings this belief to life by partnering with our clients and communities to make tomorrow together.'}
              </p>
            </div>

            {/* Job Description */}
            <div style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Job Description</h2>
              <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                {job.job_description}
              </p>
            </div>

            {/* Key Responsibilities */}
            {job.key_responsibilities && (
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Key Responsibilities</h2>
                <div style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                  {job.key_responsibilities}
                </div>
              </div>
            )}

            {/* Requirements */}
            {job.requirements && (
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>Qualifications & Requirements</h2>
                <div style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                  {job.requirements}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar Column */}
          <div className="vebhor-job-side-col">
            <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', position: 'sticky', top: '100px' }}>
              {/* Primary Action Button: "I'm interested" */}
              <button
                onClick={() => onApplyJob(job.id)}
                style={{
                  width: '100%',
                  backgroundColor: '#002b49',
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  padding: '0.9rem 1.5rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  marginBottom: '0.75rem',
                  textAlign: 'center'
                }}
              >
                I'm interested
              </button>

              {/* Secondary Action: Refer a friend */}
              <button
                onClick={() => alert("Share referral link copied!")}
                style={{
                  width: '100%',
                  backgroundColor: '#ffffff',
                  color: '#334155',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '0.7rem 1.25rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginBottom: '2rem'
                }}
              >
                Refer a friend
              </button>

              {/* Share This Job */}
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  SHARE THIS JOB
                </h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#475569' }}>
                  <button onClick={() => alert("Sharing link...")} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: '#004f6e' }} title="Website">
                    <Globe size={20} />
                  </button>
                  <button onClick={() => alert("Sending email...")} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: '#004f6e' }} title="Email">
                    <Mail size={20} />
                  </button>
                  <button onClick={() => alert("Sharing on Chat...")} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: '#004f6e' }} title="Chat">
                    <MessageCircle size={20} />
                  </button>
                  <button onClick={() => alert("Copy Link...")} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem', color: '#004f6e' }} title="Share Link">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Other Jobs At NCS Australia */}
              <div>
                <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                  OTHER JOBS AT VEBHOR
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem' }}>
                  {otherJobs.map((other) => (
                    <div key={other.id} style={{ cursor: 'pointer' }} onClick={() => onSelectOtherJob(other.id)}>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.2rem' }}>
                        {other.title}
                      </h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{other.location}</p>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onBackToCareers}
                  style={{ color: '#004f6e', fontSize: '0.85rem', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  Show all jobs
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default JobDetailPage;
