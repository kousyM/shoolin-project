import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Play, Check, AlertCircle, X } from 'lucide-react';
import axios from 'axios';

export const ChallengeUsPage = ({
  onNavHome,
  onNavServices,
  onNavAbout,
  onNavCareers,
  onNavPartners,
  onNavInsights,
  onOpenContactPage,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    role: '',
    organisation: '',
    email: '',
    phone: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const scrollToForm = () => {
    const formElement = document.getElementById('challenge-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setSubmitStatus({
        type: 'error',
        message: 'Please check and agree to the Data Protection Notice before submitting.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // API call to Laravel backend
      const response = await axios.post('http://localhost:8000/api/challenge-us', formData);

      if (response.data && response.data.status === 'success') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for taking on the challenge! Your submission has been saved to database and email notification sent.'
        });
        setFormData({
          first_name: '',
          last_name: '',
          role: '',
          organisation: '',
          email: '',
          phone: '',
          message: '',
          consent: false
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: response.data.message || 'Submission failed. Please try again.'
        });
      }
    } catch (err) {
      console.error('Challenge submission error:', err);
      setSubmitStatus({
        type: 'error',
        message: 'Unable to submit your challenge at this moment. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main>
        {/* ============================================================ */}
        {/* HERO BANNER SECTION (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <section
          style={{
            position: 'relative',
            minHeight: '82vh',
            display: 'flex',
            alignItems: 'center',
            backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff',
            overflow: 'hidden'
          }}
        >
          {/* Magenta & Purple Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(55, 12, 85, 0.9) 0%, rgba(115, 18, 90, 0.78) 50%, rgba(195, 35, 80, 0.55) 100%)',
              zIndex: 1
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '6rem 2rem',
              width: '100%',
              display: 'flex',
              justify: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '3rem'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <h1
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: '3.6rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Whatever challenge you’re facing, challenge us.
              </h1>
              <p
                style={{
                  fontSize: '1.25rem',
                  color: '#f1f5f9',
                  lineHeight: 1.65,
                  fontWeight: 500,
                  margin: 0
                }}
              >
                In a challenging landscape, you need the right partners to help you see a way forward. Together, we can make your organisation more digital, resilient and impactful.
              </p>
            </div>

            {/* Giant White Slant Slash Logo Graphic matching Screenshot 1 */}
            <div style={{ display: 'flex', gap: '1.2rem', opacity: 0.9 }}>
              <div
                style={{
                  width: '65px',
                  height: '180px',
                  backgroundColor: '#ffffff',
                  transform: 'skewX(-25deg)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
              <div
                style={{
                  width: '65px',
                  height: '180px',
                  backgroundColor: '#ffffff',
                  transform: 'skewX(-25deg)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: AUSTRALIA, WE WANT YOU TO CHALLENGE US (MATCHING SCREENSHOT 1) */}
        {/* ============================================================ */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#ffffff', textAlign: 'center' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '3rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '1.75rem',
                letterSpacing: '-0.02em'
              }}
            >
              Australia, we want you to challenge us
            </h2>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#475569',
                lineHeight: 1.75,
                fontStyle: 'italic',
                fontWeight: 500,
                margin: 0
              }}
            >
              At NCS, “challenge us” is more than a campaign — it’s a mindset that drives us to deliver more value, better quality, and a different kind of partnership built on trust and bold thinking. We invite our clients to bring us their complex problems and boldest ideas, because we’re ready to make the extraordinary happen — together.
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: MOVE FORWARD IN A CHALLENGING LANDSCAPE VIDEO (MATCHING SCREENSHOT 2) */}
        {/* ============================================================ */}
        <section style={{ padding: '2rem 2rem 6rem', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '2.6rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '3rem'
              }}
            >
              Move forward in a challenging landscape
            </h2>

            {/* Video Thumbnail Container with Overlay matching Screenshot 2 */}
            <div
              onClick={() => setIsVideoModalOpen(true)}
              style={{
                position: 'relative',
                width: '100%',
                height: '520px',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876761c11969?auto=format&fit=crop&w=1600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.18)'
              }}
            >
              {/* Dark Overlay */}
              <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.35)', transition: 'all 0.3s ease' }} />

              {/* Top Left Title Bar matching Screenshot 2 */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.75rem',
                  left: '1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  zIndex: 2,
                  color: '#ffffff'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    color: '#004799',
                    fontWeight: 900,
                    fontSize: '1.1rem'
                  }}
                >
                  //
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>NCS | Challenge us</h4>
                  <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>NCS Group</span>
                </div>
              </div>

              {/* Central White Slash Graphic & Youtube Play Icon matching Screenshot 2 */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.5rem'
                }}
              >
                {/* Slanted Slash Logo */}
                <div style={{ display: 'flex', gap: '0.75rem', opacity: 0.95 }}>
                  <div style={{ width: '30px', height: '90px', backgroundColor: '#ffffff', transform: 'skewX(-25deg)', borderRadius: '6px' }} />
                  <div style={{ width: '30px', height: '90px', backgroundColor: '#ffffff', transform: 'skewX(-25deg)', borderRadius: '6px' }} />
                </div>

                {/* Red Youtube Play Button */}
                <div
                  style={{
                    width: '68px',
                    height: '48px',
                    backgroundColor: '#ff0000',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    color: '#ffffff',
                    boxShadow: '0 8px 25px rgba(255,0,0,0.4)',
                    transition: 'transform 0.2s ease'
                  }}
                >
                  <Play size={24} fill="#ffffff" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.85)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              padding: '2rem'
            }}
          >
            <div style={{ position: 'relative', width: '100%', maxWidth: '900px', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden' }}>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  color: '#fff',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center'
                }}
              >
                <X size={20} />
              </button>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="NCS Challenge Us"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* SECTION 4: "LET'S TAKE IT ON" 3 VERTICAL TALL CARDS (MATCHING SCREENSHOT 3) */}
        {/* ============================================================ */}
        <section style={{ backgroundColor: '#001838', color: '#ffffff', padding: '6rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '3rem', alignItems: 'center' }}>
            {/* Left Header */}
            <div>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.15 }}>
                Let's take it on
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.65, margin: 0 }}>
                Our services, partnerships and extraordinary talent pool will help you harness technology to create impact. In the face of challenges and complexity, let’s deliver the value, quality and innovation you need.
              </p>
            </div>

            {/* 3 Vertical Tall Image Cards matching Screenshot 3 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {/* Card 1 */}
              <div
                onClick={scrollToForm}
                style={{
                  position: 'relative',
                  height: '460px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,24,56,0.95) 0%, rgba(0,24,56,0.3) 60%, rgba(0,24,56,0.1) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '2rem', left: '1.5rem', right: '1.5rem', color: '#ffffff', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.5rem', color: '#ffffff' }}>
                    Maximising value from every investment
                  </h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    CHALLENGE US <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div
                onClick={scrollToForm}
                style={{
                  position: 'relative',
                  height: '460px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundImage: 'url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,24,56,0.95) 0%, rgba(0,24,56,0.3) 60%, rgba(0,24,56,0.1) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '2rem', left: '1.5rem', right: '1.5rem', color: '#ffffff', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.5rem', color: '#ffffff' }}>
                    Ensuring better quality and resilience
                  </h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    CHALLENGE US <ArrowRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div
                onClick={scrollToForm}
                style={{
                  position: 'relative',
                  height: '460px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,24,56,0.95) 0%, rgba(0,24,56,0.3) 60%, rgba(0,24,56,0.1) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '2rem', left: '1.5rem', right: '1.5rem', color: '#ffffff', zIndex: 2 }}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '1.5rem', color: '#ffffff' }}>
                    Bringing a different perspective
                  </h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', color: '#ffffff', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    CHALLENGE US <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: "OUR PERSPECTIVES" INSIGHTS (MATCHING SCREENSHOT 4) */}
        {/* ============================================================ */}
        <section style={{ padding: '6rem 2rem', backgroundColor: '#ffffff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '3rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem' }}>
              Our perspectives
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', maxWidth: '750px', margin: '0 auto 3.5rem', lineHeight: 1.65 }}>
              Read our latest insights and learn how we can help you harness AI, build digital resilience and overcome the challenges in front of you.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem', textAlign: 'left' }}>
              {/* Perspective Card 1 */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80" alt="AI Gambit" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                    The AI gambit: accelerate with digital resilience
                  </h3>
                  <button onClick={onNavInsights} style={{ background: 'none', border: 'none', color: '#004799', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.05em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: 0 }}>
                    READ MORE <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Perspective Card 2 */}
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', boxShadow: '0 4px 15px rgba(0,0,0,0.04)' }}>
                <div style={{ height: '240px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" alt="Horizon of AI" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3, marginBottom: '1.5rem' }}>
                    Navigate the new horizon of AI
                  </h3>
                  <button onClick={onNavInsights} style={{ background: 'none', border: 'none', color: '#004799', fontWeight: 800, fontSize: '0.88rem', letterSpacing: '0.05em', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: 0 }}>
                    READ MORE <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 6: "CHALLENGE US" FORM SECTION (MATCHING SCREENSHOT 5) */}
        {/* ============================================================ */}
        <section
          id="challenge-form-section"
          style={{
            background: 'linear-gradient(135deg, #2b1274 0%, #7c1a7d 50%, #d81b68 100%)',
            color: '#ffffff',
            padding: '6rem 2rem 7rem'
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '3.3rem',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '1rem',
                letterSpacing: '-0.02em'
              }}
            >
              Challenge us
            </h2>
            <p style={{ fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '3.5rem', lineHeight: 1.6 }}>
              What challenge are you facing? Let's work together to break it down and find a way forward.
            </p>

            {/* Notification Alert */}
            {submitStatus && (
              <div
                style={{
                  backgroundColor: submitStatus.type === 'success' ? '#10b981' : '#ef4444',
                  color: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '8px',
                  marginBottom: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textAlign: 'left',
                  fontSize: '0.98rem',
                  fontWeight: 600
                }}
              >
                {submitStatus.type === 'success' ? <Check size={24} /> : <AlertCircle size={24} />}
                <div>{submitStatus.message}</div>
              </div>
            )}

            {/* Form Fields matching Screenshot 5 */}
            <form onSubmit={handleSubmit} style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem' }}>
                {/* First name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    First name *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleInputChange}
                    placeholder="First name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Last name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Last name *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Role */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Role *
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="Role"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Organisation */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Organisation *
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    placeholder="Organisation"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Business email address */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Business email address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Business email address"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    required
                    style={{
                      width: '100%',
                      padding: '0.85rem 1rem',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Challenge Message / Details */}
              <div>
                <label style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, marginBottom: '0.5rem', color: '#ffffff' }}>
                  What challenge are you facing? *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your organisation's challenge or boldest idea..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              {/* Data Protection Consent Checkbox matching Screenshot 5 */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ width: '20px', height: '20px', marginTop: '3px', cursor: 'pointer', flexShrink: 0 }}
                />
                <label htmlFor="consent" style={{ fontSize: '0.85rem', color: '#f1f5f9', lineHeight: 1.5, cursor: 'pointer' }}>
                  I have read, understood and agree to be bound by NCS' Data Protection Notice which may be amended from time to time. I agree that NCS may collect, use and disclose my personal data as provided in this form in accordance with NCS Data Protection Notice for the purposes set out in the NCS Data Protection Notice and for the purposes relating to attending and responding to my enquiry and/or feedback.
                </label>
              </div>

              {/* SUBMIT Button */}
              <div style={{ marginTop: '1rem' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.95rem 3rem',
                    backgroundColor: '#ffffff',
                    color: '#2b1274',
                    fontWeight: 800,
                    fontSize: '1rem',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    transition: 'all 0.2s ease',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default ChallengeUsPage;
