import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowLeft, Upload, CheckCircle2, AlertCircle, Plus, User, FileText, Building2, Search, Trash2, GraduationCap } from 'lucide-react';

export const JobApplyPage = ({ jobId, onBackToJob, onNavHome, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [website, setWebsite] = useState('');
  const [resumeFile, setResumeFile] = useState(null);
  const [coverNote, setCoverNote] = useState('');

  // Profile Avatar Upload State
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreviewUrl, setProfilePreviewUrl] = useState(null);
  const profileInputRef = useRef(null);

  // Experience List & Add Form State (Matching Screenshot 3)
  const [experiencesList, setExperiencesList] = useState([]);
  const [showExpForm, setShowExpForm] = useState(false);
  const [expTitle, setExpTitle] = useState('');
  const [expCompany, setExpCompany] = useState('');
  const [expLocation, setExpLocation] = useState('');
  const [expDescription, setExpDescription] = useState('');
  const [expFromDate, setExpFromDate] = useState('');
  const [expToDate, setExpToDate] = useState('');
  const [expCurrentlyWork, setExpCurrentlyWork] = useState(false);

  // Education List & Add Form State (Matching Screenshot 3)
  const [educationsList, setEducationsList] = useState([]);
  const [showEduForm, setShowEduForm] = useState(false);
  const [eduDegree, setEduDegree] = useState('');
  const [eduSchool, setEduSchool] = useState('');
  const [eduFromDate, setEduFromDate] = useState('');
  const [eduToDate, setEduToDate] = useState('');

  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/jobs/${jobId}`);
        if (res.data && res.data.job) {
          setJob(res.data.job);
        }
      } catch (err) {
        console.error('Error loading job details for application:', err);
      } finally {
        setLoading(false);
      }
    };

    if (jobId) {
      fetchJob();
      window.scrollTo(0, 0);
    }
  }, [jobId]);

  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      setProfilePreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleResumeFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('File size exceeds 10MB limit. Please upload a smaller file.');
        return;
      }
      setResumeFile(file);
      setErrorMessage('');
    }
  };

  const handleSaveExperience = (e) => {
    e.preventDefault();
    if (!expTitle) {
      alert('Please fill in the Experience Title.');
      return;
    }
    const newExp = {
      id: Date.now(),
      title: expTitle,
      company: expCompany,
      location: expLocation,
      description: expDescription,
      fromDate: expFromDate,
      toDate: expCurrentlyWork ? 'Present' : expToDate,
      currentlyWork: expCurrentlyWork,
    };
    setExperiencesList([...experiencesList, newExp]);
    // Reset form
    setExpTitle('');
    setExpCompany('');
    setExpLocation('');
    setExpDescription('');
    setExpFromDate('');
    setExpToDate('');
    setExpCurrentlyWork(false);
    setShowExpForm(false);
  };

  const handleSaveEducation = (e) => {
    e.preventDefault();
    if (!eduDegree) {
      alert('Please fill in Degree / Field of Study.');
      return;
    }
    const newEdu = {
      id: Date.now(),
      degree: eduDegree,
      school: eduSchool,
      fromDate: eduFromDate,
      toDate: eduToDate,
    };
    setEducationsList([...educationsList, newEdu]);
    // Reset form
    setEduDegree('');
    setEduSchool('');
    setEduFromDate('');
    setEduToDate('');
    setShowEduForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!firstName || !lastName || !email) {
      setErrorMessage('Please fill in all required fields (First name, Last name, Email).');
      return;
    }

    if (confirmEmail && email.toLowerCase() !== confirmEmail.toLowerCase()) {
      setErrorMessage('Email and Confirm email do not match.');
      return;
    }

    if (!resumeFile) {
      setErrorMessage('Please attach your resume file (PDF or DOCX).');
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('email', email);
      if (confirmEmail) formData.append('confirm_email', confirmEmail);
      if (phone) formData.append('phone', phone);
      if (educationsList.length > 0) {
        formData.append('education', JSON.stringify(educationsList));
      }
      if (experiencesList.length > 0) {
        formData.append('experience', JSON.stringify(experiencesList));
      }
      if (linkedin) formData.append('linkedin', linkedin);
      if (facebook) formData.append('facebook', facebook);
      if (twitter) formData.append('twitter', twitter);
      if (website) formData.append('website', website);
      if (coverNote) formData.append('cover_note', coverNote);
      formData.append('resume', resumeFile);
      if (profileImage) {
        formData.append('profile_image', profileImage);
      }

      const response = await axios.post(`http://127.0.0.1:8000/api/jobs/${jobId}/apply`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.status === 'success') {
        setSubmitted(true);
      } else {
        setErrorMessage(response.data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      setErrorMessage(err.response?.data?.message || 'Server error occurred while submitting your application.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Navbar onNavHome={onNavHome} onNavCareers={onBackToJob} onOpenContactPage={onOpenContactPage} />
        <div style={{ padding: '6rem 1rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '4px solid #004f6e', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
          <p style={{ marginTop: '0.5rem', color: '#475569' }}>Loading application form...</p>
        </div>
        <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavCareers={onBackToJob}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: '80px', paddingBottom: '80px', paddingLeft: '1.5rem', paddingRight: '1.5rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
        {/* Back Link */}
        <button
          onClick={onBackToJob}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.88rem', fontWeight: 600, color: '#475569', background: 'none', border: 'none', cursor: 'pointer', marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={16} />
          <span>Back to Job Details</span>
        </button>

        {job && (
          <div style={{ marginBottom: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.3rem' }}>
              Apply for {job.title}
            </h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{job.location} • {job.department}</p>
          </div>
        )}

        {submitted ? (
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px', padding: '3rem 2rem', textAlign: 'center', margin: '2rem 0' }}>
            <CheckCircle2 style={{ margin: '0 auto 1rem', color: '#16a34a' }} size={56} />
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#14532d', marginBottom: '0.5rem' }}>Application Submitted Successfully!</h2>
            <p style={{ color: '#166534', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
              Thank you for applying for <strong>{job ? job.title : 'this role'}</strong>. Our talent acquisition team has received your application and resume file. We will review your submission and contact you shortly.
            </p>
            <button
              onClick={onBackToJob}
              style={{ backgroundColor: '#15803d', color: '#ffffff', fontWeight: 700, padding: '0.75rem 1.5rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
            >
              Return to Job Details
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* 1. Easy Apply Top Section (Matching Screenshot 3) */}
            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '2rem', borderRadius: '8px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.3rem' }}>Easy Apply</h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                Choose an option to autocomplete your application. You can still fill your profile manually.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', alignItems: 'center' }}>
                {/* Upload Box Left */}
                <div style={{ gridColumn: 'span 7' }}>
                  <label style={{ display: 'block', cursor: 'pointer' }}>
                    <div style={{ border: '2px dashed #3b82f6', background: '#ffffff', borderRadius: '8px', padding: '1.75rem', textAlign: 'center' }}>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeFileChange}
                        style={{ display: 'none' }}
                      />
                      <p style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                        Choose a file <span style={{ color: '#475569', fontWeight: 400 }}>or drop it here</span>
                      </p>
                      <p style={{ color: '#94a3b8', fontSize: '0.8rem' }}>10MB size limit</p>
                      {resumeFile && (
                        <div style={{ marginTop: '0.75rem', fontSize: '0.82rem', fontWeight: 600, color: '#15803d', background: '#f0fdf4', padding: '0.4rem 0.75rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', border: '1px solid #bbf7d0' }}>
                          <FileText size={14} />
                          <span>Selected: {resumeFile.name}</span>
                        </div>
                      )}
                    </div>
                  </label>
                </div>

                {/* Divider Line with 'or' */}
                <div style={{ gridColumn: 'span 1', textAlign: 'center', color: '#94a3b8', fontWeight: 500, fontSize: '0.9rem' }}>
                  or
                </div>

                {/* Fast Apply Social Buttons Right */}
                <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => alert("LinkedIn Easy Apply connected")}
                    style={{ backgroundColor: '#0077b5', color: '#ffffff', fontWeight: 700, fontSize: '0.88rem', padding: '0.65rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                  >
                    Apply With LinkedIn
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("Indeed Easy Apply connected")}
                    style={{ backgroundColor: '#2164f3', color: '#ffffff', fontWeight: 700, fontSize: '0.88rem', padding: '0.65rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                  >
                    Apply With Indeed
                  </button>
                  <button
                    type="button"
                    onClick={() => alert("SEEK Easy Apply connected")}
                    style={{ backgroundColor: '#e6007e', color: '#ffffff', fontWeight: 700, fontSize: '0.88rem', padding: '0.65rem 1rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                  >
                    Apply with SEEK
                  </button>
                </div>
              </div>
            </div>

            {/* Error Banner */}
            {errorMessage && (
              <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '0.85rem 1rem', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 2. Personal Information Section (Matching Screenshot 3) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>Personal information</h3>
                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Fields marked with * are required.</p>
              </div>

              {/* Profile Avatar Photo Upload (Point 2 Fix) */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '0.5rem' }}>
                <input
                  type="file"
                  ref={profileInputRef}
                  accept="image/*"
                  onChange={handleProfileImageChange}
                  style={{ display: 'none' }}
                />
                <div
                  onClick={() => profileInputRef.current && profileInputRef.current.click()}
                  style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    backgroundColor: '#e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    border: '2px solid #cbd5e1'
                  }}
                  title="Click to upload profile picture"
                >
                  {profilePreviewUrl ? (
                    <img src={profilePreviewUrl} alt="Profile preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <User size={36} style={{ color: '#94a3b8' }} />
                  )}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      right: 0,
                      backgroundColor: '#334155',
                      color: '#ffffff',
                      borderRadius: '50%',
                      padding: '4px',
                      fontSize: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ✏️
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => profileInputRef.current && profileInputRef.current.click()}
                    style={{ background: 'none', border: 'none', color: '#004f6e', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer', textDecoration: 'underline' }}
                  >
                    Upload Profile Photo
                  </button>
                  <p style={{ color: '#94a3b8', fontSize: '0.78rem', marginTop: '0.1rem' }}>PNG, JPG or WEBP up to 5MB</p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    First name*
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Last name*
                  </label>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Email*
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Confirm your email*
                  </label>
                  <input
                    type="email"
                    required
                    value={confirmEmail}
                    onChange={(e) => setConfirmEmail(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Phone number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+61 400 000 000"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* 3. Experience Section (Matching Screenshot 3) */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>Experience</h3>
                <button
                  type="button"
                  onClick={() => setShowExpForm(!showExpForm)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', border: '1px solid #002b49', background: '#ffffff', color: '#002b49', fontSize: '0.82rem', fontWeight: 700, padding: '0.4rem 0.85rem', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <Plus size={14} /> Add
                </button>
              </div>

              {/* Saved Experience Cards */}
              {experiencesList.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {experiencesList.map((exp) => (
                    <div key={exp.id} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{exp.title}</h4>
                        <p style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>{exp.company} {exp.location ? `• ${exp.location}` : ''}</p>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{exp.fromDate} - {exp.toDate}</p>
                        {exp.description && <p style={{ fontSize: '0.85rem', color: '#475569', marginTop: '0.5rem' }}>{exp.description}</p>}
                      </div>
                      <button
                        type="button"
                        onClick={() => setExperiencesList(experiencesList.filter(item => item.id !== exp.id))}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Interactive Experience Form Box (Matching Screenshot 3) */}
              {showExpForm && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1.75rem', marginTop: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                      <Building2 size={24} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Fields marked with * are required.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          Title*
                        </label>
                        <div style={{ position: 'relative' }}>
                          <input
                            type="text"
                            required
                            value={expTitle}
                            onChange={(e) => setExpTitle(e.target.value)}
                            placeholder="e.g. SAP ABAP Developer"
                            style={{ width: '100%', padding: '0.65rem 2.2rem 0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                          />
                          <Search size={16} style={{ position: 'absolute', right: '10px', top: '12px', color: '#94a3b8' }} />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          Company
                        </label>
                        <div style={{ position: 'relative' }}>
                          <input
                            type="text"
                            value={expCompany}
                            onChange={(e) => setExpCompany(e.target.value)}
                            placeholder="e.g. NCS Australia"
                            style={{ width: '100%', padding: '0.65rem 2.2rem 0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                          />
                          <Search size={16} style={{ position: 'absolute', right: '10px', top: '12px', color: '#94a3b8' }} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Office location
                      </label>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="text"
                          value={expLocation}
                          onChange={(e) => setExpLocation(e.target.value)}
                          placeholder="e.g. Melbourne, Australia"
                          style={{ width: '100%', padding: '0.65rem 2.2rem 0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                        />
                        <Search size={16} style={{ position: 'absolute', right: '10px', top: '12px', color: '#94a3b8' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Description
                      </label>
                      <textarea
                        rows={3}
                        value={expDescription}
                        onChange={(e) => setExpDescription(e.target.value)}
                        placeholder="Summarise key achievements and responsibilities..."
                        style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          From*
                        </label>
                        <input
                          type="date"
                          value={expFromDate}
                          onChange={(e) => setExpFromDate(e.target.value)}
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          To*
                        </label>
                        <input
                          type="date"
                          disabled={expCurrentlyWork}
                          value={expToDate}
                          onChange={(e) => setExpToDate(e.target.value)}
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none', opacity: expCurrentlyWork ? 0.5 : 1 }}
                        />
                      </div>
                    </div>

                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#334155', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={expCurrentlyWork}
                        onChange={(e) => setExpCurrentlyWork(e.target.checked)}
                        style={{ width: '16px', height: '16px' }}
                      />
                      <span>I currently work here</span>
                    </label>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => setShowExpForm(false)}
                        style={{ padding: '0.5rem 1.25rem', border: '1px solid #cbd5e1', borderRadius: '4px', background: '#ffffff', color: '#334155', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveExperience}
                        style={{ padding: '0.5rem 1.5rem', border: 'none', borderRadius: '4px', background: '#002b49', color: '#ffffff', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer' }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Education Section (Matching Screenshot 3) */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>Education</h3>
                <button
                  type="button"
                  onClick={() => setShowEduForm(!showEduForm)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', border: '1px solid #002b49', background: '#ffffff', color: '#002b49', fontSize: '0.82rem', fontWeight: 700, padding: '0.4rem 0.85rem', borderRadius: '4px', cursor: 'pointer' }}
                >
                  <Plus size={14} /> Add
                </button>
              </div>

              {/* Saved Education Cards */}
              {educationsList.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  {educationsList.map((edu) => (
                    <div key={edu.id} style={{ background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '6px', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{edu.degree}</h4>
                        <p style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>{edu.school}</p>
                        <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>{edu.fromDate} - {edu.toDate}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setEducationsList(educationsList.filter(item => item.id !== edu.id))}
                        style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer' }}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Interactive Education Form Box */}
              {showEduForm && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '8px', padding: '1.75rem', marginTop: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Fields marked with * are required.</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          Degree / Field of Study*
                        </label>
                        <input
                          type="text"
                          required
                          value={eduDegree}
                          onChange={(e) => setEduDegree(e.target.value)}
                          placeholder="e.g. Bachelor of Computer Science"
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          School / Institution
                        </label>
                        <input
                          type="text"
                          value={eduSchool}
                          onChange={(e) => setEduSchool(e.target.value)}
                          placeholder="e.g. University of Melbourne"
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          From*
                        </label>
                        <input
                          type="date"
                          value={eduFromDate}
                          onChange={(e) => setEduFromDate(e.target.value)}
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                          To*
                        </label>
                        <input
                          type="date"
                          value={eduToDate}
                          onChange={(e) => setEduToDate(e.target.value)}
                          style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                        />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', justifyContent: 'flex-end' }}>
                      <button
                        type="button"
                        onClick={() => setShowEduForm(false)}
                        style={{ padding: '0.5rem 1.25rem', border: '1px solid #cbd5e1', borderRadius: '4px', background: '#ffffff', color: '#334155', fontWeight: 600, fontSize: '0.88rem', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSaveEducation}
                        style={{ padding: '0.5rem 1.5rem', border: 'none', borderRadius: '4px', background: '#002b49', color: '#ffffff', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer' }}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 5. Your Profiles Section (Matching Screenshot 4) */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.2rem' }}>Your Profiles</h3>
                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Fields marked with * are required.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Facebook
                  </label>
                  <input
                    type="url"
                    value={facebook}
                    onChange={(e) => setFacebook(e.target.value)}
                    placeholder="https://facebook.com/profile"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    X (fka Twitter)
                  </label>
                  <input
                    type="url"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    placeholder="https://x.com/username"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                    Website
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourportfolio.com"
                    style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>
              </div>
            </div>

            {/* 6. Resume * Required Section (Matching Screenshot 4) */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                Resume <span style={{ color: '#ef4444' }}>*</span>
              </h3>

              <label style={{ display: 'block', cursor: 'pointer' }}>
                <div style={{ border: '2px dashed #3b82f6', background: '#f8fafc', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeFileChange}
                    style={{ display: 'none' }}
                  />
                  <p style={{ color: '#2563eb', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>
                    Choose a file <span style={{ color: '#475569', fontWeight: 400 }}>or drop it here</span>
                  </p>
                  <p style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.5rem' }}>10MB size limit (PDF, DOC, DOCX)</p>
                  {resumeFile ? (
                    <div style={{ marginTop: '0.75rem', fontSize: '0.88rem', fontWeight: 600, color: '#14532d', background: '#dcfce7', padding: '0.5rem 1rem', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1px solid #86efac' }}>
                      <CheckCircle2 size={16} style={{ color: '#16a34a' }} />
                      <span>Attached: {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)} MB)</span>
                    </div>
                  ) : (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: '#2563eb', fontWeight: 600 }}>
                      <Upload size={14} /> Click to browse computer
                    </div>
                  )}
                </div>
              </label>
            </div>

            {/* Cover Note optional */}
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                Cover Note / Message (Optional)
              </label>
              <textarea
                rows={3}
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Share any additional details with our hiring team..."
                style={{ width: '100%', padding: '0.65rem 0.85rem', border: '1px solid #cbd5e1', borderRadius: '4px', fontSize: '0.9rem', outline: 'none' }}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  backgroundColor: '#002b49',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '1rem',
                  padding: '0.9rem 2.5rem',
                  borderRadius: '4px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {submitting ? 'Submitting Application...' : 'Submit Application'}
              </button>
            </div>
          </form>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default JobApplyPage;
