import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

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
        const isVideo = banner.video_url || index === 0;

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

            {/* Background Dark Overlay for Readability */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.75) 100%)',
                zIndex: 2
              }}
            />

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
              {/* TOP SECTION: Tag Badge & Heading Moved UP */}
              <div style={{ alignSelf: 'flex-start', maxWidth: '980px', marginTop: '1rem' }}>
                {banner.tag && (
                  <span
                    className="hero-tag"
                    style={{
                      display: 'inline-block',
                      padding: '0.4rem 1.1rem',
                      backgroundColor: 'rgba(108, 92, 231, 0.85)',
                      color: '#ffffff',
                      borderRadius: '50px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '1rem'
                    }}
                  >
                    {banner.tag}
                  </span>
                )}

                <h1
                  className="hero-title"
                  style={{
                    fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                    fontSize: 'clamp(1.4rem, 4vw, 2.5rem)',
                    fontWeight: 600,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    margin: 0,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textShadow: '0 2px 14px rgba(0, 0, 0, 0.9)'
                  }}
                >
                  {banner.title}
                </h1>
              </div>

              {/* BOTTOM SECTION: Subtitle Paragraph on Left + Button & Slider Counter Stacked on RIGHT */}
              <div style={{ width: '100%', marginTop: 'auto', marginBottom: '0.5rem' }}>
                
                {/* Paragraph Subtitle Moved Down */}
                <p
                  className="hero-subtitle"
                  style={{
                    fontSize: '1.15rem',
                    color: '#DCD6F7',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    fontWeight: 400,
                    maxWidth: '780px',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.85)'
                  }}
                >
                  {banner.subtitle}
                </p>

                {/* Right-aligned Vertical Stack: Button on Top Right, Slider Counter Badge DIRECTLY BELOW IT on Right */}
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
                  <a
                    href={banner.button_link || '#services'}
                    className="btn-ncs-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      backgroundColor: '#2563eb',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '1rem',
                      padding: '0.85rem 2.25rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      boxShadow: '0 6px 20px rgba(37, 99, 235, 0.45)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span>{banner.button_text || 'Explore Solutions'}</span>
                    <ArrowRight size={18} />
                  </a>

                  {/* 2. Slider Number Counter (< • ━ 01 / 02 >) DIRECTLY BELOW THE BUTTON on RIGHT */}
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
