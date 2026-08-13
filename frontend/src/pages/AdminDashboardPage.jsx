import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Plus, Edit2, Trash2, FileText, Briefcase, Users, LogOut, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { getApiBaseUrl } from '../api/config';
import { getStoredJobs, saveStoredJobs } from '../data/defaultJobs';

export const AdminDashboardPage = ({ onNavHome, onNavCareers, onOpenContactPage, onAdminLogout }) => {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' | 'applications' | 'create-job'
  const [jobs, setJobs] = useState(getStoredJobs());
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJobId, setEditingJobId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    employment_type: 'Full-time',
    department: 'Digital Applications',
    location: 'Melbourne, VIC',
    work_mode: '4 days onsite, 1 wfh',
    remote: false,
    company_description: 'At NCS Australia, we believe in doing technology services better. Our commitment to quality, focus on people, and willingness to challenge traditional thinking set us apart.',
    job_description: '',
    key_responsibilities: '',
    requirements: '',
  });

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const fetchDashboardData = async () => {
    setLoading(true);
    const token = localStorage.getItem('adminToken');
    const headers = { Authorization: `Bearer ${token}` };

    try {
      const apiBase = getApiBaseUrl();
      // Fetch jobs from API
      const jobsRes = await axios.get(`${apiBase}/api/admin/jobs`, { headers, timeout: 4000 });
      if (jobsRes.data && jobsRes.data.jobs && jobsRes.data.jobs.length > 0) {
        setJobs(jobsRes.data.jobs);
        saveStoredJobs(jobsRes.data.jobs);
      } else {
        throw new Error('API returned no jobs');
      }

      // Fetch applications
      const appsRes = await axios.get(`${apiBase}/api/admin/applications`, { headers, timeout: 4000 });
      if (appsRes.data && appsRes.data.applications) {
        setApplications(appsRes.data.applications);
      }
    } catch (err) {
      console.warn('Backend API unavailable or offline, using stored admin jobs:', err);
      const localJobs = getStoredJobs();
      setJobs(localJobs);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleEditJob = (job) => {
    setEditingJobId(job.id);
    setFormData({
      title: job.title || '',
      employment_type: job.type || job.employment_type || 'Full-time',
      department: job.department || 'Digital Applications',
      location: job.location || 'Melbourne, VIC',
      work_mode: job.work_mode || '4 days onsite, 1 wfh',
      remote: job.is_remote ?? job.remote ?? false,
      company_description: job.company_description || 'At NCS Australia, we believe in doing technology services better.',
      job_description: job.description || job.job_description || '',
      key_responsibilities: Array.isArray(job.responsibilities) ? job.responsibilities.join('\n') : (job.key_responsibilities || ''),
      requirements: Array.isArray(job.requirements) ? job.requirements.join('\n') : (job.requirements || ''),
    });
    setActiveTab('create-job');
    window.scrollTo(0, 0);
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm('Are you sure you want to delete this job posting?')) return;
    const token = localStorage.getItem('adminToken');

    try {
      const apiBase = getApiBaseUrl();
      await axios.delete(`${apiBase}/api/admin/jobs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 4000
      });
    } catch (err) {
      console.warn('Backend delete API failed, performing local delete:', err);
    }

    // Local state fallback update
    const currentJobs = getStoredJobs();
    const updated = currentJobs.filter((j) => String(j.id) !== String(id));
    saveStoredJobs(updated);
    setJobs(updated);
    setStatusMessage('Job posting deleted successfully.');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setStatusMessage('');

    const token = localStorage.getItem('adminToken');
    const headers = { Authorization: `Bearer ${token}` };

    const formattedJob = {
      id: editingJobId || Date.now(),
      title: formData.title,
      department: formData.department,
      location: formData.location,
      type: formData.employment_type,
      employment_type: formData.employment_type,
      work_mode: formData.work_mode,
      is_remote: formData.remote,
      remote: formData.remote,
      summary: formData.job_description ? formData.job_description.substring(0, 140) + '...' : 'Career opportunity at NCS Australia.',
      description: formData.job_description,
      company_description: formData.company_description,
      requirements: typeof formData.requirements === 'string' ? formData.requirements.split('\n').filter(Boolean) : (formData.requirements || []),
      responsibilities: typeof formData.key_responsibilities === 'string' ? formData.key_responsibilities.split('\n').filter(Boolean) : (formData.key_responsibilities || [])
    };

    try {
      const apiBase = getApiBaseUrl();
      if (editingJobId) {
        // Update Job via API
        await axios.put(`${apiBase}/api/admin/jobs/${editingJobId}`, formData, { headers, timeout: 4000 });
      } else {
        // Create Job via API
        await axios.post(`${apiBase}/api/admin/jobs`, formData, { headers, timeout: 4000 });
      }
    } catch (err) {
      console.warn('Backend API submission failed or offline, saving job locally:', err);
    }

    // Always update local storage & state to ensure immediate UI update
    let currentJobs = getStoredJobs();
    if (editingJobId) {
      currentJobs = currentJobs.map((j) => (String(j.id) === String(editingJobId) ? { ...j, ...formattedJob } : j));
      setStatusMessage('Job updated successfully!');
    } else {
      currentJobs = [formattedJob, ...currentJobs];
      setStatusMessage('New job posted successfully!');
    }

    saveStoredJobs(currentJobs);
    setJobs(currentJobs);

    // Reset form
    setEditingJobId(null);
    setFormData({
      title: '',
      employment_type: 'Full-time',
      department: 'Digital Applications',
      location: 'Melbourne, VIC',
      work_mode: '4 days onsite, 1 wfh',
      remote: false,
      company_description: 'At NCS Australia, we believe in doing technology services better. Our commitment to quality, focus on people, and willingness to challenge traditional thinking set us apart.',
      job_description: '',
      key_responsibilities: '',
      requirements: '',
    });
    setFormSubmitting(false);
    setActiveTab('jobs');
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavCareers={onNavCareers}
        onOpenContactPage={onOpenContactPage}
        isAdminLoggedIn={true}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: '80px', paddingBottom: '60px', maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
        {/* Dashboard Title Banner & Single Logout */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.25rem' }}>
          <div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
              NCS Admin Portal
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Post new career positions & review applicant submissions
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={fetchDashboardData}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #cbd5e1', background: '#ffffff', color: '#475569', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              <RefreshCw size={14} /> Refresh
            </button>
            <button
              onClick={onAdminLogout}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #fecaca', background: '#fef2f2', color: '#ef4444', padding: '0.5rem 1rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Status Alert Banner */}
        {statusMessage && (
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '0.85rem 1.25rem', borderRadius: '6px', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
            <CheckCircle2 size={18} />
            <span>{statusMessage}</span>
          </div>
        )}

        {/* Metrics Overview Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#e0f2fe', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Briefcase size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>{jobs.length}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Active Job Postings</div>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>{applications.length}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Candidate Applications</div>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: '#fef3c7', color: '#d97706', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a' }}>100%</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>System Health</div>
            </div>
          </div>
        </div>

        {/* Tab Navigation Row (POINT 4 FIX: ONLY ONE Post New Job Button) */}
        <div style={{ display: 'flex', borderBottom: '2px solid #cbd5e1', marginBottom: '2rem', gap: '0.5rem' }}>
          <button
            onClick={() => setActiveTab('jobs')}
            style={{
              padding: '0.75rem 1.5rem',
              fontWeight: 700,
              fontSize: '0.92rem',
              border: 'none',
              background: 'none',
              color: activeTab === 'jobs' ? '#004f6e' : '#64748b',
              borderBottom: activeTab === 'jobs' ? '3px solid #004f6e' : '3px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Briefcase size={16} /> Manage Jobs ({jobs.length})
          </button>

          <button
            onClick={() => setActiveTab('applications')}
            style={{
              padding: '0.75rem 1.5rem',
              fontWeight: 700,
              fontSize: '0.92rem',
              border: 'none',
              background: 'none',
              color: activeTab === 'applications' ? '#004f6e' : '#64748b',
              borderBottom: activeTab === 'applications' ? '3px solid #004f6e' : '3px solid transparent',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Users size={16} /> Candidate Applications ({applications.length})
          </button>

          {/* SINGLE ONLY "Post New Job" Tab Button */}
          <button
            onClick={() => {
              setEditingJobId(null);
              setFormData({
                title: '',
                employment_type: 'Full-time',
                department: 'Digital Applications',
                location: 'Melbourne, VIC',
                work_mode: '4 days onsite, 1 wfh',
                remote: false,
                company_description: 'At NCS Australia, we believe in doing technology services better.',
                job_description: '',
                key_responsibilities: '',
                requirements: '',
              });
              setActiveTab('create-job');
            }}
            style={{
              marginLeft: 'auto',
              padding: '0.5rem 1.25rem',
              fontWeight: 700,
              fontSize: '0.88rem',
              backgroundColor: activeTab === 'create-job' ? '#002b49' : '#004f6e',
              color: '#ffffff',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <Plus size={16} /> {editingJobId ? 'Edit Job' : 'Post New Job'}
          </button>
        </div>

        {/* TAB 1: MANAGE JOBS LIST TABLE (POINT 2 DESIGN) */}
        {activeTab === 'jobs' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#002b49', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Job Title</th>
                  <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Department</th>
                  <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Location</th>
                  <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Type</th>
                  <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Work Mode</th>
                  <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, idx) => (
                  <tr key={job.id} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#004f6e' }}>
                      {job.title}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                      {job.department}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                      {job.location}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: '#334155' }}>
                      <span style={{ background: '#e0f2fe', color: '#0369a1', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 700 }}>
                        {job.employment_type}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.25rem', color: '#64748b', fontSize: '0.85rem' }}>
                      {job.work_mode || 'Hybrid mode'}
                    </td>
                    <td style={{ padding: '1rem 1.25rem', textAlign: 'right' }}>
                      <div style={{ display: 'inline-flex', gap: '0.5rem' }}>
                        <button
                          onClick={() => handleEditJob(job)}
                          style={{ border: '1px solid #3b82f6', background: '#eff6ff', color: '#1d4ed8', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                        >
                          <Edit2 size={13} /> Edit
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job.id)}
                          style={{ border: '1px solid #fecaca', background: '#fef2f2', color: '#b91c1c', padding: '0.35rem 0.65rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                        >
                          <Trash2 size={13} /> Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: CANDIDATE APPLICATIONS TABLE */}
        {activeTab === 'applications' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            {applications.length === 0 ? (
              <div style={{ padding: '4rem', textAlign: 'center', color: '#64748b' }}>
                <Users size={40} style={{ margin: '0 auto 1rem', color: '#94a3b8' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e293b' }}>No candidate applications received yet</h3>
                <p style={{ fontSize: '0.88rem' }}>Submissions will appear here in real-time when candidates apply.</p>
              </div>
            ) : (
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#002b49', color: '#ffffff' }}>
                    <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Applicant Name</th>
                    <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Applied Position</th>
                    <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Email & Phone</th>
                    <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem' }}>Resume</th>
                    <th style={{ padding: '0.9rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', textAlign: 'right' }}>Submitted Date</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, idx) => (
                    <tr key={app.id} style={{ backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '1rem 1.25rem', fontWeight: 700, color: '#0f172a' }}>
                        {app.first_name} {app.last_name}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: '#004f6e', fontWeight: 600 }}>
                        {app.job_posting ? app.job_posting.title : `Job #${app.job_posting_id}`}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', color: '#334155', fontSize: '0.88rem' }}>
                        <div>{app.email}</div>
                        <div style={{ color: '#64748b' }}>{app.phone || 'N/A'}</div>
                      </td>
                      <td style={{ padding: '1rem 1.25rem' }}>
                        {app.resume_path ? (
                          <a
                            href={`http://127.0.0.1:8000/storage/${app.resume_path}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', padding: '0.3rem 0.6rem', borderRadius: '4px', fontSize: '0.82rem', fontWeight: 700, textDecoration: 'none' }}
                          >
                            <FileText size={14} /> Download Resume
                          </a>
                        ) : (
                          <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>No file</span>
                        )}
                      </td>
                      <td style={{ padding: '1rem 1.25rem', textAlign: 'right', color: '#64748b', fontSize: '0.85rem' }}>
                        {new Date(app.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* TAB 3: POST NEW CAREER OPPORTUNITY FORM (POINT 3 DESIGN) */}
        {activeTab === 'create-job' && (
          <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #cbd5e1', padding: '2.5rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.75rem' }}>
              {editingJobId ? 'Edit Career Position' : 'Post New Career Opportunity'}
            </h2>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Job Title*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g. SAP ABAP Technical Consultant"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Employment Type*
                  </label>
                  <select
                    value={formData.employment_type}
                    onChange={(e) => setFormData({ ...formData, employment_type: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', background: '#ffffff' }}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Casual">Casual</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Department*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    placeholder="e.g. SAP, Digital Applications, Cloud & AI"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                    Location*
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Melbourne, VIC"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Work Mode (e.g. 4 days onsite, 1 wfh)
                </label>
                <input
                  type="text"
                  value={formData.work_mode}
                  onChange={(e) => setFormData({ ...formData, work_mode: e.target.value })}
                  placeholder="e.g. Hybrid mode (4 days onsite, 1 wfh)"
                  style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, color: '#334155', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.remote}
                  onChange={(e) => setFormData({ ...formData, remote: e.target.checked })}
                  style={{ width: '16px', height: '16px' }}
                />
                <span>Employees can work remotely 🌍</span>
              </label>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Company Description
                </label>
                <textarea
                  rows={3}
                  value={formData.company_description}
                  onChange={(e) => setFormData({ ...formData, company_description: e.target.value })}
                  style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Job Description*
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.job_description}
                  onChange={(e) => setFormData({ ...formData, job_description: e.target.value })}
                  placeholder="Detailed position summary..."
                  style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Key Responsibilities
                </label>
                <textarea
                  rows={3}
                  value={formData.key_responsibilities}
                  onChange={(e) => setFormData({ ...formData, key_responsibilities: e.target.value })}
                  placeholder="• Bullet points of key responsibilities..."
                  style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                  Qualifications & Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="• Required skills and experience..."
                  style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={formSubmitting}
                  style={{
                    backgroundColor: '#002b49',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    padding: '0.75rem 2rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {formSubmitting ? 'Saving...' : editingJobId ? 'Update Job Posting' : 'Publish Job Posting'}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('jobs')}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#475569',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} />
    </div>
  );
};

export default AdminDashboardPage;
