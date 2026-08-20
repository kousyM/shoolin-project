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

            {/* Background Dark Overlay for Readability (Removed for Slider 1 and Slider 4) */}
            {index !== 0 && index !== 3 && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(6, 13, 31, 0.35) 0%, rgba(6, 13, 31, 0.75) 100%)',
                  zIndex: 2
                }}
              />
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
              {/* TOP SECTION: Tag Badge & Heading (Hidden on Slider 4 as requested) */}
              {index !== 3 && (
                <div style={{ alignSelf: 'flex-start', maxWidth: '960px', marginTop: '1.25rem' }}>
                  {/* CloudMarc Floating Innovate Badge for Slider 2 */}
                  {index === 1 ? (
                    <div style={{ marginBottom: '1rem' }}>
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
                  ) : null}

                  <h1
                    className="hero-title"
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
              )}

              {/* BOTTOM SECTION: Subtitle + Button + Counter */}
              <div style={{ width: '100%', marginTop: 'auto', marginBottom: '0.5rem' }}>

                {/* Paragraph Subtitle (Hidden on Slider 4) */}
                {index !== 3 && banner.subtitle && (
                  <p
                    className="hero-subtitle"
                    style={{
                      fontSize: '1.08rem',
                      color: '#F1F5F9',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                      fontWeight: 400,
                      maxWidth: '720px',
                      textShadow: '0 2px 8px rgba(0, 0, 0, 0.75)'
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
                  {/* 1. CTA Button on RIGHT (Hidden on Slider 4) */}
                  {index !== 3 && (
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
                  )}

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
