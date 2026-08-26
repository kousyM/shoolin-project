import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const getSlideTagStyle = (idx) => {
  switch (idx) {
    case 0: // Slider 1: Next-Gen HR Tech
      return {
        background: 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)',
        boxShadow: '0 4px 16px rgba(0, 92, 253, 0.45)'
      };
    case 1: // Slider 2: Workforce Transformation (Introducing Vebhor)
      return {
        background: 'linear-gradient(135deg, rgb(30, 93, 27) 0%, rgb(27, 67, 20) 100%)',
        boxShadow: '0 4px 16px rgba(30, 93, 27, 0.5)'
      };
    case 2: // Slider 3: AI & Tech Innovation
      return {
        background: 'linear-gradient(135deg, rgb(215, 124, 27) 0%, rgb(40, 31, 16) 100%)',
        boxShadow: '0 4px 16px rgba(215, 124, 27, 0.4)'
      };
    default:
      return {
        background: 'linear-gradient(135deg, #005CFD 0%, #019CFE 100%)',
        boxShadow: '0 4px 16px rgba(0, 92, 253, 0.45)'
      };
  }
};

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
              visibility: index === currentSlide ? 'visible' : 'hidden',
              transition: 'opacity 1s ease-in-out, visibility 1s ease-in-out',
              zIndex: index === currentSlide ? 2 : 1
            }}
          >
            {/* Background: Video or High-Res Image with High-Contrast Linear Overlay */}
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              >
                <source src={banner.video_url} type="video/mp4" />
              </video>
            ) : (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(90deg, rgba(6, 13, 31, 0.88) 0%, rgba(6, 13, 31, 0.6) 45%, rgba(6, 13, 31, 0.25) 100%), url(${banner.image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}

            {/* Slide Content Layout */}
            <div
              className="hero-content-wrapper"
              style={{
                position: 'relative',
                zIndex: 10,
                width: '100%',
                maxWidth: '1360px',
                margin: '0 auto',
                padding: '2.5rem 2rem 2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxSizing: 'border-box'
              }}
            >
              {/* TOP SECTION: Tag Badge & Heading */}
              <div style={{ alignSelf: 'flex-start', maxWidth: '960px', marginTop: '1.25rem' }}>
                {banner.tag && (
                  <div className={index === currentSlide ? 'hero-animate-tag' : ''}>
                    <span
                      className="hero-tag"
                      style={{
                        display: 'inline-block',
                        padding: '0.35rem 1.15rem',
                        ...getSlideTagStyle(index),
                        color: '#ffffff',
                        borderRadius: '50px',
                        fontSize: '0.8rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        transition: 'all 0.4s ease'
                      }}
                    >
                      {banner.tag}
                    </span>
                  </div>
                )}

                <h1
                  className={`hero-title ${index === currentSlide ? 'hero-animate-title' : ''}`}
                  style={{
                    fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                    fontSize: 'clamp(1.5rem, 3.2vw, 2.35rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    margin: 0,
                    marginBottom: '0.85rem',
                    letterSpacing: '-0.01em',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                    textShadow: '0 2px 12px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.8)'
                  }}
                >
                  {banner.title}
                </h1>

                {/* Subtitle Paragraph directly below Heading */}
                {banner.subtitle && (
                  <p
                    className={`hero-subtitle ${index === currentSlide ? 'hero-animate-subtitle' : ''}`}
                    style={{
                      fontSize: '1.12rem',
                      color: '#ffffff',
                      lineHeight: 1.65,
                      marginTop: '0.65rem',
                      marginBottom: '0',
                      fontWeight: 500,
                      maxWidth: '740px',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.85), 0 0 25px rgba(0, 0, 0, 0.7)'
                    }}
                  >
                    {banner.subtitle}
                  </p>
                )}
              </div>

              {/* BOTTOM SECTION: Button + Counter */}
              <div style={{ width: '100%', marginTop: 'auto', marginBottom: '0.5rem' }}>

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
                        background: 'linear-gradient(135deg, #0066ff 0%, #00a8ff 100%)',
                        color: '#ffffff',
                        fontWeight: 700,
                        fontSize: '0.96rem',
                        padding: '0.8rem 2.2rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        boxShadow: '0 6px 20px rgba(0, 102, 255, 0.45)',
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
                              backgroundColor: idx === currentSlide ? '#019CFE' : 'rgba(255, 255, 255, 0.4)',
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
