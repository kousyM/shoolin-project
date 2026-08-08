import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, Building2, MessageSquare, ChevronRight } from 'lucide-react';

export const CareersPage = ({ onSelectJob, onNavHome, onOpenContactPage, onNavAdmin, isAdminLoggedIn, onAdminLogout }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('All');
  const [department, setDepartment] = useState('All');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [locationsList, setLocationsList] = useState([]);
  const [departmentsList, setDepartmentsList] = useState([]);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const params = {};
      if (search) params.search = search;
      if (location !== 'All') params.location = location;
      if (department !== 'All') params.department = department;
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
    fetchJobs();
  }, [location, department, remoteOnly]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchJobs();
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* 1. Header Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavCareers={() => {}}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      {/* Main Container - Zero Top Padding to avoid white space gap under navbar */}
      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* 2. Hero Header Banner (Matching Screenshot 1) */}
        <section
          style={{
            position: 'relative',
            backgroundColor: '#0b132b',
            backgroundImage: `linear-gradient(90deg, rgba(11, 19, 43, 0.90) 0%, rgba(11, 19, 43, 0.75) 50%, rgba(11, 19, 43, 0.35) 100%), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            padding: '4.5rem 2rem',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
              Discover career opportunities
            </h1>
            <p style={{ fontSize: '1.1rem', color: '#e2e8f0', maxWidth: '680px', marginBottom: '2rem', lineHeight: '1.6' }}>
              Let us know if you're interested in new opportunities not currently advertised and we'll consider you as new roles emerge.
            </p>
            <button
              onClick={onOpenContactPage}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.75rem 1.75rem',
                border: '2px solid #ffffff',
                borderRadius: '4px',
                background: 'transparent',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer'
              }}
            >
              Connect with our team
            </button>
          </div>
        </section>

        {/* 3. Search and Filters Bar (Matching Screenshot 1) */}
        <section style={{ backgroundColor: '#e9ecef', borderTop: '1px solid #ced4da', borderBottom: '1px solid #ced4da', padding: '0.85rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
            <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', width: '100%' }}>
              
              {/* Search input */}
              <div style={{ flex: 1, minWidth: '240px' }}>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Filter by title, expertise"
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.85rem',
                    border: '1px solid #ced4da',
                    borderRadius: '3px',
                    fontSize: '0.9rem',
                    background: '#ffffff',
                    color: '#212529',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: '0.5rem 1.25rem',
                  backgroundColor: '#e2e8f0',
                  border: '1px solid #cbd5e1',
                  borderRadius: '3px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  cursor: 'pointer'
                }}
              >
                Search
              </button>

              {/* Location Select */}
              <div style={{ minWidth: '140px' }}>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.85rem',
                    border: '1px solid #ced4da',
                    borderRadius: '3px',
                    fontSize: '0.88rem',
                    background: '#ffffff',
                    color: '#212529',
                    outline: 'none'
                  }}
                >
                  <option value="All">Location (All)</option>
                  {locationsList.map((loc, idx) => (
                    <option key={idx} value={loc}>
                      {loc}
                    </option>
                  ))}
                  <option value="Melbourne, VIC">Melbourne, VIC</option>
                  <option value="Sydney, Australia">Sydney, Australia</option>
                  <option value="Macquarie Park, NSW">Macquarie Park, NSW</option>
                  <option value="Preston, VIC">Preston, VIC</option>
                  <option value="Canberra, Australia">Canberra, Australia</option>
                </select>
              </div>

              {/* Department Select */}
              <div style={{ minWidth: '150px' }}>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.85rem',
                    border: '1px solid #ced4da',
                    borderRadius: '3px',
                    fontSize: '0.88rem',
                    background: '#ffffff',
                    color: '#212529',
                    outline: 'none'
                  }}
                >
                  <option value="All">Department (All)</option>
                  {departmentsList.map((dept, idx) => (
                    <option key={idx} value={dept}>
                      {dept}
                    </option>
                  ))}
                  <option value="SAP">SAP</option>
                  <option value="Digital Applications">Digital Applications</option>
                  <option value="Cloud & AI">Cloud & AI</option>
                </select>
              </div>

              {/* Remote Checkbox */}
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', fontWeight: 500, color: '#212529', cursor: 'pointer', marginLeft: 'auto' }}>
                <input
                  type="checkbox"
                  checked={remoteOnly}
                  onChange={(e) => setRemoteOnly(e.target.checked)}
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
                <span>Employees can work remotely 🌍</span>
              </label>
            </form>
          </div>
        </section>

        {/* 4. Jobs List Table (Matching Screenshot 1 Table Layout) */}
        <section style={{ maxWidth: '1200px', margin: '2.5rem auto', padding: '0 1.5rem' }}>
          {loading ? (
            <div style={{ padding: '4rem 0', textAlign: 'center', color: '#64748b' }}>
              <div style={{ display: 'inline-block', width: '32px', height: '32px', border: '4px solid #004f6e', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
              <p style={{ marginTop: '0.5rem' }}>Loading available career opportunities...</p>
            </div>
          ) : jobs.length === 0 ? (
            <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #e2e8f0', padding: '3rem', textAlign: 'center' }}>
              <Building2 style={{ margin: '0 auto 1rem', color: '#94a3b8' }} size={40} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.5rem' }}>No jobs match your search</h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>Try adjusting your filter or search keywords.</p>
              <button
                onClick={() => {
                  setSearch('');
                  setLocation('All');
                  setDepartment('All');
                  setRemoteOnly(false);
                }}
                style={{ color: '#004f6e', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div style={{ background: '#ffffff', borderRadius: '4px', border: '1px solid #cbd5e1', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ backgroundColor: '#004f6e', color: '#ffffff' }}>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', borderBottom: '2px solid #00364d' }}>Job Title</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', borderBottom: '2px solid #00364d' }}>Type of Employment</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', borderBottom: '2px solid #00364d' }}>Department</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', borderBottom: '2px solid #00364d' }}>Location</th>
                    <th style={{ padding: '0.85rem 1.25rem', fontWeight: 700, fontSize: '0.88rem', borderBottom: '2px solid #00364d', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job, index) => (
                    <tr
                      key={job.id}
                      onClick={() => onSelectJob(job.id)}
                      style={{
                        backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                        borderBottom: '1px solid #e2e8f0',
                        cursor: 'pointer',
                        transition: 'background-color 0.15s ease'
                      }}
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
                          style={{
                            padding: '0.35rem 0.75rem',
                            background: '#ffffff',
                            border: '1px solid #cbd5e1',
                            borderRadius: '3px',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            color: '#004f6e',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.2rem'
                          }}
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
      </main>

      {/* Floating Bot Button (Matching Screenshot 1) */}
      <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
        <button
          onClick={() => alert("Welcome to NCS Careers Bot! How can we assist your job search?")}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: '#00a8e8',
            color: '#ffffff',
            fontWeight: 700,
            fontSize: '0.85rem',
            padding: '0.65rem 1.25rem',
            borderRadius: '50px',
            border: 'none',
            boxShadow: '0 4px 14px rgba(0, 168, 232, 0.4)',
            cursor: 'pointer'
          }}
        >
          <MessageSquare size={16} />
          <span>Searching for a Job?</span>
        </button>
      </div>

      {/* 5. Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default CareersPage;
