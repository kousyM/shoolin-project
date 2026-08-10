import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Building2, MessageSquare, ChevronRight, ArrowRight, ArrowLeft, Upload, CheckCircle2, X } from 'lucide-react';

export const CareersPage = ({ initialTab = 'career-stories', onSelectJob, onNavHome, onOpenContactPage, onNavAbout, onNavCareers, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [activeTab, setActiveTab] = useState(initialTab); // 'career-stories' | 'job-opportunities' | 'life-at-ncs'
  const [selectedStory, setSelectedStory] = useState(null); // When set, displays particular career story
  const [hoveredStory, setHoveredStory] = useState(null);
  const [showEoiModal, setShowEoiModal] = useState(false); // Expression of Interest Modal (Screenshot 4)

  // EOI Form State (Screenshot 4)
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

  // Jobs state for Job Opportunities tab
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [locationFilter, setLocationFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [locationsList, setLocationsList] = useState([]);
  const [departmentsList, setDepartmentsList] = useState([]);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      setSelectedStory(null);
    }
    window.scrollTo(0, 0);
  }, [initialTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedStory(null);
    window.location.hash = tab;
    window.scrollTo(0, 0);
  };

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (locationFilter !== 'All') params.location = locationFilter;
      if (departmentFilter !== 'All') params.department = departmentFilter;
      if (remoteOnly) params.remote = true;

      const response = await axios.get('http://127.0.0.1:8000/api/jobs', { params });
      if (response.data && response.data.jobs) {
        setJobs(response.data.jobs);
        if (response.data.meta) {
          setLocationsList(response.data.meta.locations || []);
          setDepartmentsList(response.data.meta.departments || []);
        }
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (activeTab === 'job-opportunities') {
      fetchJobs();
    }
  }, [activeTab, locationFilter, departmentFilter, remoteOnly]);

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

  // Career Stories Data (Screenshot 2)
  const careerStories = [
    {
      id: 1,
      name: 'Sowmiya Selvakumaraswamy',
      title: 'Engineer Innovation, S&A - AI Strategy',
      company: 'NCS Australia',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      summary: 'Building sovereign AI strategy frameworks and empowering local innovation at NCS Australia.',
      fullStory: 'Sowmiya Selvakumaraswamy started her journey at NCS Australia with a deep passion for artificial intelligence and cloud engineering. Today, as an Innovation Engineer, she leads AI strategy workshops for key enterprise accounts. "NCS provides an open platform where your ideas are supported from day one. Working with cross-disciplinary teams across Australia has expanded my technical horizons."'
    },
    {
      id: 2,
      name: 'Sandy Thondilege',
      title: 'Associate Project Director, Delivery',
      company: 'NCS Australia',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80',
      summary: 'Leading complex enterprise technology programs with agility and inclusive leadership.',
      fullStory: 'Sandy Thondilege oversees high-visibility digital delivery programs for government and enterprise clients. "What I value most about NCS Australia is the trust and empowerment given to leaders. We foster an environment where people bring their authentic selves to work every day while delivering high-impact technology solutions."'
    },
    {
      id: 3,
      name: 'Kavita Agarwal',
      title: 'Practice Principal, Digital Experience',
      company: 'NCS Australia',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
      summary: 'Designing human-centric digital experiences for Australian government agencies and enterprise accounts.',
      fullStory: 'Kavita Agarwal leads digital experience design across NCS Australia. With over 15 years in UX strategy, Kavita mentors junior designers and collaborates closely with software engineering teams. "At NCS, human-centered design is at the core of everything we build."'
    }
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar with Hover Mega Menu */}
      <Navbar
        onNavHome={onNavHome}
        onNavAbout={onNavAbout}
        onNavCareers={(tab) => handleTabChange(tab)}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* ============================================================ */}
        {/* PARTICULAR CAREER STORY DETAIL VIEW */}
        {/* ============================================================ */}
        {selectedStory ? (
          <div>
            <section style={{ backgroundColor: '#0b132b', color: '#ffffff', padding: '4rem 2rem' }}>
              <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <button
                  onClick={() => setSelectedStory(null)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#38bdf8',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '1.5rem',
                    padding: 0
                  }}
                >
                  <ArrowLeft size={16} />
                  <span>Back to Career Stories</span>
                </button>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  {selectedStory.company} Career Story
                </p>
                <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.5rem' }}>
                  {selectedStory.name}
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#38bdf8', fontWeight: 700 }}>
                  {selectedStory.title}
                </p>
              </div>
            </section>

            <section style={{ maxWidth: '1000px', margin: '4rem auto 6rem', padding: '0 1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', alignItems: 'flex-start' }}>
                <div style={{ gridColumn: 'span 5' }}>
                  <img src={selectedStory.image} alt={selectedStory.name} style={{ width: '100%', borderRadius: '8px', borderTop: '5px solid #002b49', boxShadow: '0 15px 35px rgba(0,0,0,0.1)' }} />
                </div>
                <div style={{ gridColumn: 'span 7' }}>
                  <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', lineHeight: 1.3 }}>
                    My Journey at NCS Australia
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#334155', lineHeight: 1.8, marginBottom: '2rem' }}>
                    {selectedStory.fullStory}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      onClick={() => handleTabChange('job-opportunities')}
                      style={{ padding: '0.85rem 1.75rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 700, borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                    >
                      Explore Open Roles
                    </button>
                    <button
                      onClick={() => setSelectedStory(null)}
                      style={{ padding: '0.85rem 1.5rem', backgroundColor: '#f1f5f9', color: '#475569', fontWeight: 700, borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                    >
                      Back to Stories
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div>
            {/* ============================================================ */}
            {/* 1. CAREER STORIES TAB */}
            {/* ============================================================ */}
            {activeTab === 'career-stories' && (
              <div>
                {/* Hero Header Banner */}
                <section
                  style={{
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.85) 0%, rgba(11, 19, 43, 0.70) 50%, rgba(11, 19, 43, 0.40) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '5rem 2rem',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                      Career stories
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '650px', lineHeight: 1.6 }}>
                      Discover how our people grow, lead innovation, and shape technology careers at NCS Australia.
                    </p>
                  </div>
                </section>

                {/* Multiple Career Stories Grid */}
                <section style={{ maxWidth: '1200px', margin: '4rem auto 6rem', padding: '0 1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                    {careerStories.map((story) => (
                      <div
                        key={story.id}
                        onMouseEnter={() => setHoveredStory(story.id)}
                        onMouseLeave={() => setHoveredStory(null)}
                        onClick={() => { setSelectedStory(story); window.scrollTo(0, 0); }}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '4px',
                          border: '1px solid #cbd5e1',
                          borderTop: '5px solid #002b49',
                          overflow: 'hidden',
                          position: 'relative',
                          cursor: 'pointer',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
                        }}
                      >
                        <div style={{ padding: '1.25rem 1.25rem 0.75rem', minHeight: '100px' }}>
                          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.25rem' }}>
                            {story.name}
                          </h3>
                          <p style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '0.15rem' }}>
                            {story.title}
                          </p>
                          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                            {story.company}
                          </p>
                        </div>

                        <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                          <img src={story.image} alt={story.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                          {hoveredStory === story.id && (
                            <div
                              style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: '#002b49',
                                color: '#ffffff',
                                padding: '1.75rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                zIndex: 10
                              }}
                            >
                              <div>
                                <p style={{ fontSize: '0.9rem', color: '#e2e8f0', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                                  "{story.summary}"
                                </p>
                              </div>
                              <button
                                onClick={() => { setSelectedStory(story); window.scrollTo(0, 0); }}
                                style={{
                                  background: 'none',
                                  border: 'none',
                                  color: '#ffffff',
                                  fontSize: '0.9rem',
                                  fontWeight: 800,
                                  cursor: 'pointer',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.4rem',
                                  padding: 0
                                }}
                              >
                                <span>READ STORY</span>
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* ============================================================ */}
            {/* 2. JOB OPPORTUNITIES TAB */}
            {/* ============================================================ */}
            {activeTab === 'job-opportunities' && (
              <div>
                <section
                  style={{
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '4.5rem 2rem',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem' }}>
                      Discover career opportunities
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

                      <div style={{ minWidth: '140px' }}>
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

                      <div style={{ minWidth: '150px' }}>
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
                    <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #e2e8f0', padding: '3rem', textAlign: 'center' }}>
                      <Building2 style={{ margin: '0 auto 1rem', color: '#94a3b8' }} size={40} />
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>No jobs match your search</h3>
                    </div>
                  ) : (
                    <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #cbd5e1', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflowX: 'auto' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                        <thead>
                          <tr style={{ backgroundColor: '#004f6e', color: '#ffffff' }}>
                            <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Job Title</th>
                            <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Type of Employment</th>
                            <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Department</th>
                            <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700 }}>Location</th>
                            <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700, textAlign: 'right' }}>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobs.map((job, index) => (
                            <tr
                              key={job.id}
                              onClick={() => onSelectJob(job.id)}
                              style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #e2e8f0', cursor: 'pointer' }}
                            >
                              <td style={{ padding: '1.1rem 1.25rem', color: '#0284c7', fontWeight: 700 }}>
                                {job.title}
                              </td>
                              <td style={{ padding: '1.1rem 1.25rem', color: '#334155', fontWeight: 500 }}>
                                {job.employment_type}
                              </td>
                              <td style={{ padding: '1.1rem 1.25rem', color: '#334155' }}>
                                {job.department}
                              </td>
                              <td style={{ padding: '1.1rem 1.25rem', color: '#334155' }}>
                                {job.location}
                              </td>
                              <td style={{ padding: '1.1rem 1.25rem', textAlign: 'right' }}>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onSelectJob(job.id);
                                  }}
                                  style={{ padding: '0.35rem 0.75rem', background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 600, color: '#004f6e', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                                >
                                  View Job <ChevronRight size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* ============================================================ */}
            {/* 3. LIFE AT NCS TAB (COMBINING HERO BANNER, VIDEO SPOTLIGHT & ALL 4 SECTIONS) */}
            {/* ============================================================ */}
            {activeTab === 'life-at-ncs' && (
              <div>
                {/* Hero Header Banner for Life at NCS */}
                <section
                  style={{
                    backgroundColor: '#0b132b',
                    backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.85) 0%, rgba(11, 19, 43, 0.70) 50%, rgba(11, 19, 43, 0.40) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: '#ffffff',
                    padding: '5rem 2rem',
                    minHeight: '280px',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                    <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                      Life at NCS
                    </h1>
                    <p style={{ fontSize: '1.15rem', color: '#e2e8f0', maxWidth: '650px', lineHeight: 1.6 }}>
                      Discover our culture of collaboration, innovation, and community impact across Australia.
                    </p>
                  </div>
                </section>

                {/* VIDEO SPOTLIGHT SECTION */}
                <section style={{ backgroundColor: '#f8fafc', padding: '4rem 2rem' }}>
                  <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                      A day in the life at NCS
                    </h2>
                    <p style={{ color: '#475569', fontSize: '1.15rem', maxWidth: '780px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                      Step into a day in the life of our people. From morning priorities to the moments that make the work meaningful.
                    </p>

                    {/* Video Card */}
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', position: 'relative' }}>
                      <div style={{ position: 'relative', height: '440px', backgroundColor: '#0f172a' }}>
                        <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                          alt="Life at NCS Video"
                          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                        />

                        <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(15, 23, 42, 0.85)', padding: '0.75rem 1.25rem', borderRadius: '8px', color: '#ffffff' }}>
                          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: '#38bdf8' }}>
                            ncs//
                          </span>
                          <div style={{ textAlign: 'left' }}>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                              More Than a Game: How Tennis Shapes Leadership with Darcie Kimber
                            </h3>
                            <p style={{ fontSize: '0.78rem', color: '#cbd5e1', margin: 0 }}>NCS Group</p>
                          </div>
                        </div>

                        <button
                          onClick={() => alert("Playing 'More Than a Game: How Tennis Shapes Leadership with Darcie Kimber'")}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            backgroundColor: '#ff0000',
                            color: '#ffffff',
                            width: '76px',
                            height: '52px',
                            borderRadius: '14px',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 8px 24px rgba(255, 0, 0, 0.4)'
                          }}
                        >
                          <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid #ffffff', marginLeft: '4px' }}></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 1: 2 SIDE-BY-SIDE CARDS (MATCHING SCREENSHOT 1) */}
                <section style={{ maxWidth: '1200px', margin: '4rem auto', padding: '0 1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
                    {/* Card 1: A Home for Great Work */}
                    <div style={{ backgroundColor: '#f8fafc', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ height: '300px', overflow: 'hidden' }}>
                        <img
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                          alt="A Home for Great Work"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                            A Home for Great Work
                          </h3>
                          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Great work is never created alone. That's why, we believe that having a collaborative environment fueled by knowledge sharing can bring people together to make the extraordinary happen.
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => setShowEoiModal(true)}
                            style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: 0 }}
                          >
                            <span>CHART YOUR CAREER</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Card 2: Making our communities extraordinary */}
                    <div style={{ backgroundColor: '#f8fafc', borderRadius: '4px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ height: '300px', overflow: 'hidden' }}>
                        <img
                          src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
                          alt="Making our communities extraordinary"
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>
                      <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                        <div>
                          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
                            Making our communities extraordinary
                          </h3>
                          <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            We don't just dream of making the world a better place. We make it happen. See how we advance our communities by partnering with governments and enterprises to harness technology.
                          </p>
                        </div>
                        <div>
                          <button
                            onClick={() => setShowEoiModal(true)}
                            style={{ background: 'none', border: 'none', color: '#3b82f6', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '0.05em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: 0 }}
                          >
                            <span>FIND OUT MORE</span>
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 2: DARK NAVY CONTAINER (MATCHING SCREENSHOT 2 TOP) */}
                <section style={{ backgroundColor: '#001938', color: '#ffffff', padding: '5rem 2rem' }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '3rem', alignItems: 'center' }}>
                      <div style={{ gridColumn: 'span 5' }}>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                          When you succeed, our business thrives
                        </h2>
                        <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                          We're creating an environment that maximises your potential as innovators. From skill courses to having a dedicated career roadmap, your growth matters to us. Join us and equip yourself with the skills you need to excel with our various talent development programmes.
                        </p>
                      </div>

                      <div style={{ gridColumn: 'span 7', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        {/* Right Card A */}
                        <div
                          onClick={() => setShowEoiModal(true)}
                          style={{ position: 'relative', height: '320px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer' }}
                        >
                          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Career Development" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 27, 58, 0.75)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                              Opportunities for Career Development
                            </h3>
                            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                              FIND OUT MORE <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>

                        {/* Right Card B */}
                        <div
                          onClick={() => setShowEoiModal(true)}
                          style={{ position: 'relative', height: '320px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer' }}
                        >
                          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Career Growth Stories" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 27, 58, 0.75)', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '0.75rem' }}>
                              Career Growth Stories
                            </h3>
                            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                              FIND OUT MORE <ArrowRight size={14} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 3: PURPLE/MAGENTA GRADIENT BANNER (MATCHING SCREENSHOT 2 BOTTOM & SCREENSHOT 3 TOP) */}
                <section style={{ backgroundColor: '#ffffff', padding: '4rem 2rem 0' }}>
                  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)',
                        color: '#ffffff',
                        padding: '4.5rem 3.5rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '2rem'
                      }}
                    >
                      <div style={{ maxWidth: '720px' }}>
                        <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>
                          Join an extraordinary team
                        </h2>
                        <p style={{ fontSize: '1.15rem', color: '#f1f5f9', lineHeight: 1.6 }}>
                          If you have an entrepreneurial spirit with big ideas who is excited in creating technological innovations that impact millions of lives, come and be part of the company that makes the ordinary, extraordinary.
                        </p>
                      </div>

                      <button
                        onClick={() => setShowEoiModal(true)}
                        style={{
                          padding: '0.9rem 2.5rem',
                          borderRadius: '30px',
                          border: '2px solid #ffffff',
                          backgroundColor: 'transparent',
                          color: '#ffffff',
                          fontWeight: 800,
                          fontSize: '1.05rem',
                          cursor: 'pointer'
                        }}
                      >
                        Join us
                      </button>
                    </div>
                  </div>
                </section>

                {/* SECTION 4: WE CELEBRATE DIVERSITY & INCLUSION (MATCHING SCREENSHOT 3 BOTTOM) */}
                <section style={{ backgroundColor: '#f1f5f9', padding: '5rem 2rem 6rem', textAlign: 'center' }}>
                  <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
                      We celebrate diversity and inclusion
                    </h2>
                    <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                      We value our people and the communities we serve; being different, diverse and inclusive is important to us. We're also committed to Equal Employment Opportunity Principles and providing reasonable accommodations to all of our applicants.
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                      If you need a modification or special assistance to navigate our website or complete your application, please send an email with your request to <a href="mailto:recruitment@au.ncs.co" style={{ color: '#0f172a', fontWeight: 800, textDecoration: 'underline' }}>recruitment@au.ncs.co</a>
                    </p>
                  </div>
                </section>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
        {/* EXPLORE MORE CARDS SECTION (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#001938',
            color: '#ffffff',
            padding: '5rem 2rem 6rem',
            textAlign: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem', color: '#ffffff' }}>
              Explore more
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3.5rem' }}>
              {/* Card 1: Industries */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Industries
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Explore our thinking and services that help to shape various industries through technology.
                </p>
                <button
                  onClick={onNavHome}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 2: Services */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Services
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Explore our full range of services that help organisation to transform for the future.
                </p>
                <button
                  onClick={onNavHome}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Card 3: Contact Us */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#00a8e8', marginBottom: '0.85rem' }}>
                  Contact Us
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem', maxWidth: '320px' }}>
                  Want to find out more about how we can help you?
                </p>
                <button
                  onClick={onOpenContactPage}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ffffff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}
                >
                  <span>GET IN TOUCH</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* EXPRESSION OF INTEREST FORM MODAL (MATCHING SCREENSHOT 4 EXACTLY) */}
        {/* ============================================================ */}
        {showEoiModal && (
          <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.80)', zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', maxWidth: '600px', width: '100%', padding: '2.5rem', position: 'relative', boxShadow: '0 25px 50px rgba(0,0,0,0.3)', maxHeight: '90vh', overflowY: 'auto' }}>
              <button
                onClick={() => setShowEoiModal(false)}
                style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
              >
                <X size={24} />
              </button>

              <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 900, color: '#002b49' }}>
                  ncs<span style={{ color: '#00b4d8' }}>//</span>
                </span>
                <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e293b', marginTop: '0.75rem', lineHeight: 1.3 }}>
                  Expression of Interest: Careers at NCS Australia
                </h2>
              </div>

              {eoiStatus.success ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle2 size={64} style={{ color: '#16a34a', margin: '0 auto 1rem' }} />
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a' }}>Application Submitted!</h3>
                  <p style={{ color: '#475569', marginTop: '0.5rem' }}>Thank you for expressing interest in joining NCS Australia. Our recruitment team will review your profile shortly.</p>
                  <button
                    onClick={() => {
                      setEoiStatus({ loading: false, success: false, error: null });
                      setShowEoiModal(false);
                    }}
                    style={{ marginTop: '2rem', padding: '0.75rem 2rem', backgroundColor: '#002b49', color: '#ffffff', fontWeight: 700, borderRadius: '4px', border: 'none', cursor: 'pointer' }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEoiSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Resume Upload Box */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Resume <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <label
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.6rem',
                        padding: '0.85rem',
                        border: '2px solid #0284c7',
                        borderRadius: '6px',
                        backgroundColor: '#ffffff',
                        color: '#0284c7',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        cursor: 'pointer'
                      }}
                    >
                      <Upload size={18} />
                      <span>{eoiFormData.resumeFileName || 'ADD YOUR RESUME'}</span>
                      <input type="file" onChange={handleEoiChange} accept=".pdf,.doc,.docx" required style={{ display: 'none' }} />
                    </label>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      First Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={eoiFormData.firstName}
                      onChange={handleEoiChange}
                      required
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Last Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={eoiFormData.lastName}
                      onChange={handleEoiChange}
                      required
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={eoiFormData.email}
                      onChange={handleEoiChange}
                      required
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Location <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={eoiFormData.location}
                      onChange={handleEoiChange}
                      placeholder="e.g. Sydney, Melbourne, Brisbane"
                      required
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Phone number <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <select
                        name="countryCode"
                        value={eoiFormData.countryCode}
                        onChange={handleEoiChange}
                        style={{ padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none', backgroundColor: '#f8fafc', fontWeight: 700 }}
                      >
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+65">🇸🇬 +65</option>
                        <option value="+64">🇳ℤ +64</option>
                        <option value="+1">🇺🇸 +1</option>
                      </select>
                      <input
                        type="text"
                        name="phone"
                        value={eoiFormData.phone}
                        onChange={handleEoiChange}
                        placeholder="Enter phone number"
                        required
                        style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', outline: 'none' }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', marginTop: '0.5rem' }}>
                    <input
                      type="checkbox"
                      id="agree_eoi"
                      name="agree"
                      checked={eoiFormData.agree}
                      onChange={handleEoiChange}
                      required
                      style={{ marginTop: '3px' }}
                    />
                    <label htmlFor="agree_eoi" style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      You declare that you have read and agree to the privacy notice of NCS Australia. <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={eoiStatus.loading}
                    style={{
                      marginTop: '1rem',
                      padding: '0.9rem',
                      backgroundColor: '#002b49',
                      color: '#ffffff',
                      fontWeight: 800,
                      fontSize: '1rem',
                      borderRadius: '6px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {eoiStatus.loading ? 'Submitting Application...' : 'Submit Application'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default CareersPage;
