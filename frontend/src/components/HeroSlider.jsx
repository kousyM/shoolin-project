import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export const HeroSlider = ({ banners = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!banners || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [banners]);

  if (!banners || banners.length === 0) return null;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="hero-slider-container" style={{ position: 'relative', width: '100%', height: '80vh', minHeight: '580px', maxHeight: '740px', overflow: 'hidden' }}>
      {banners.map((banner, index) => {
        const isVideo = Boolean(banner.video_url);

        return (
          <div
            key={banner.id || index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'flex-start',
              opacity: index === currentSlide ? 1 : 0,
              zIndex: index === currentSlide ? 10 : 1,
              transition: 'opacity 0.8s ease-in-out'
            }}
          >
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-bg-img"
                style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
              >
                <source src={banner.video_url || "/hero_video.mp4"} type="video/mp4" />
              </video>
            ) : (
              <img
                src={banner.image_url}
                alt={banner.title}
                className="hero-bg-img"
                style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
              />
            )}

            {/* Background Dark Overlay for Readability across all slides */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: index === 0
                  ? 'linear-gradient(90deg, rgba(6, 13, 31, 0.85) 0%, rgba(6, 13, 31, 0.55) 45%, rgba(6, 13, 31, 0.12) 80%, rgba(6, 13, 31, 0.3) 100%)'
                  : index === 1
                  ? 'linear-gradient(135deg, rgba(6, 13, 31, 0.45) 0%, rgba(6, 13, 31, 0.25) 50%, rgba(6, 13, 31, 0.65) 100%)'
                  : 'linear-gradient(180deg, rgba(6, 13, 31, 0.35) 0%, rgba(6, 13, 31, 0.75) 100%)',
                zIndex: 2
              }}
            />

            {/* 1. Cyber Video Animation Effects for Slider 1 (Workforce Transformation) */}
            {index === 0 && (
              <>
                {/* Ambient Nebula Light Aura */}
                <div className="hero-slide1-nebula-glow" />

                {/* Sweeping Cyan & Purple Laser Streams */}
                <div
                  className="hero-slide1-laser"
                  style={{ top: '32%', left: '5%', width: '520px', animation: 'laserStreamSweep 6.5s ease-in-out infinite' }}
                />
                <div
                  className="hero-slide1-laser"
                  style={{ top: '64%', right: '10%', width: '440px', animation: 'laserStreamSweepReverse 8s ease-in-out infinite 1.5s' }}
                />
                <div
                  className="hero-slide1-laser"
                  style={{ top: '82%', left: '25%', width: '360px', animation: 'laserStreamSweep 7s ease-in-out infinite 3s' }}
                />

                {/* Pulsing Sonar Data Nodes & Rings */}
                <div className="hero-sonar-node" style={{ top: '31%', left: '42%' }}>
                  <div className="hero-sonar-ring" />
                </div>
                <div className="hero-sonar-node" style={{ top: '63%', right: '28%' }}>
                  <div className="hero-sonar-ring" style={{ animationDelay: '1.2s' }} />
                </div>
                <div className="hero-sonar-node" style={{ top: '78%', right: '14%' }}>
                  <div className="hero-sonar-ring" style={{ animationDelay: '2s' }} />
                </div>

                {/* Floating Modern Tech Pill */}
                <div className="hero-transformation-pill">
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#55E6C1', boxShadow: '0 0 10px #55E6C1', display: 'inline-block' }} />
                  <span>Workforce Transformation Active</span>
                </div>
              </>
            )}

            {/* 3D Tech Graphic with Motion Glow & Data Nodes for Slider 2 (Innovate) */}
            {index === 1 && (
              <>
                {/* 1. Futuristic 3D Data Sphere Motion Glow */}
                <div className="hero-sphere-ambient-glow" />

                {/* 2. Glowing Blue Circuit Lines & Rays */}
                <div className="hero-circuit-ray" style={{ top: '28%', left: '10%', width: '450px', animation: 'techRayMove 7s ease-in-out infinite' }} />
                <div className="hero-circuit-ray" style={{ top: '68%', left: '30%', width: '380px', animation: 'techRayMove 9s ease-in-out infinite 2s' }} />
                <div className="hero-circuit-ray" style={{ top: '45%', right: '5%', width: '320px', animation: 'techRayMove 6s ease-in-out infinite 1s' }} />

                {/* 3. Glowing Data Nodes */}
                <div className="hero-data-node" style={{ top: '27%', left: '35%', animationDelay: '0s' }} />
                <div className="hero-data-node" style={{ top: '67%', left: '55%', animationDelay: '1.2s' }} />
                <div className="hero-data-node" style={{ top: '44%', right: '22%', animationDelay: '0.6s' }} />
                <div className="hero-data-node" style={{ top: '72%', right: '12%', animationDelay: '1.8s' }} />
              </>
            )}

            {/* 3D Rotating Holographic Cyber Globe for Slider 3 (Global Workforce) */}
            {index === 2 && (
              <div className="hero-cyber-globe-wrapper">
                {/* Outer Orbiting Rings with Traveling Data Satellites */}
                <div className="hero-orbit-ring-1">
                  <div className="hero-satellite-dot" />
                </div>
                <div className="hero-orbit-ring-2">
                  <div className="hero-satellite-dot" style={{ backgroundColor: '#A855F7', boxShadow: '0 0 14px #A855F7' }} />
                </div>

                {/* Rotating Cyber Globe Core */}
                <div className="hero-globe-core">
                  <div className="hero-globe-latitudes" />
                  <div className="hero-globe-longitudes" />
                </div>
              </div>
            )}

            {/* Main Content Layout Container */}
            <div
              className="hero-content"
              style={{
                position: 'relative',
                zIndex: 3,
                maxWidth: '1280px',
                margin: '0 auto',
                padding: '2.5rem 2rem 2.5rem 2rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              {/* TOP SECTION: Tag Badge & Heading */}
              <div style={{ alignSelf: 'flex-start', maxWidth: '960px', marginTop: '1.25rem' }}>
                {/* CloudMarc Floating Innovate Badge for Slider 2 */}
                {index === 1 ? (
                  <div style={{ marginBottom: '1rem' }} className={index === currentSlide ? 'hero-animate-tag' : ''}>
                    <a
                      href="#contact"
                      className="cloudmarc-floating-badge"
                    >
                      <div className="badge-icon">
                        <Sparkles size={18} />
                      </div>
                      <span>Innovate</span>
                    </a>
                  </div>
                ) : banner.tag ? (
                  <div className={index === currentSlide ? 'hero-animate-tag' : ''}>
                    <span
                      className="hero-tag"
                      style={{
                        display: 'inline-block',
                        padding: '0.35rem 1.15rem',
                        backgroundColor: '#6C5CE7',
                        color: '#ffffff',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        boxShadow: '0 4px 14px rgba(108, 92, 231, 0.45)'
                      }}
                    >
                      {banner.tag}
                    </span>
                  </div>
                ) : null}

                <h1
                  className={`hero-title ${index === currentSlide ? 'hero-animate-title' : ''}`}
                  style={{
                    fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    margin: 0,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.75)'
                  }}
                >
                  {banner.title}
                </h1>
              </div>

              {/* BOTTOM SECTION: Subtitle + Button + Counter */}
              <div style={{ width: '100%', marginTop: 'auto', marginBottom: '0.5rem' }}>

                {/* Paragraph Subtitle */}
                {banner.subtitle && (
                  <p
                    className={`hero-subtitle ${index === currentSlide ? 'hero-animate-subtitle' : ''}`}
                    style={{
                      fontSize: '1.08rem',
                      color: '#F1F5F9',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      fontWeight: 400,
                      maxWidth: index === 0 ? '520px' : '720px',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.6)'
                    }}
                  >
                    {banner.subtitle}
                  </p>
                )}

                {/* Right-aligned Vertical Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.9rem',
                    width: '100%'
                  }}
                >
                  {/* 1. CTA Button on RIGHT */}
                  <div className={index === currentSlide ? 'hero-animate-button' : ''}>
                    <a
                      href={banner.button_link || '#services'}
                      className="btn-ncs-primary"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        backgroundColor: '#6C5CE7',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.96rem',
                        padding: '0.8rem 2.2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        boxShadow: '0 6px 20px rgba(108, 92, 231, 0.45)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <span>{banner.button_text || 'Explore Solutions'}</span>
                      <ArrowRight size={18} />
                    </a>
                  </div>

                  {/* 2. Slider Number Counter (< • ━ 01 / 04 >) */}
                  {banners.length > 1 && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.85rem',
                        backgroundColor: 'rgba(15, 23, 42, 0.85)',
                        backdropFilter: 'blur(8px)',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 255, 255, 0.2)'
                      }}
                    >
                      <button
                        onClick={handlePrev}
                        style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}
                        aria-label="Previous Slide"
                      >
                        <ChevronLeft size={18} />
                      </button>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {banners.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            style={{
                              width: idx === currentSlide ? '20px' : '8px',
                              height: '7px',
                              borderRadius: '4px',
                              backgroundColor: idx === currentSlide ? '#55E6C1' : 'rgba(255, 255, 255, 0.4)',
                              border: 'none',
                              cursor: 'pointer',
                              transition: 'all 0.3s ease'
                            }}
                            aria-label={`Go to slide ${idx + 1}`}
                          />
                        ))}
                      </div>

                      <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', fontFamily: 'monospace' }}>
                        0{currentSlide + 1} / 0{banners.length}
                      </span>

                      <button
                        onClick={handleNext}
                        style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}
                        aria-label="Next Slide"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>
                  )}

                </div>

              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeroSlider;
