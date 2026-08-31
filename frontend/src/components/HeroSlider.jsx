import React, { useState, useEffect } from 'react';

export const HeroSlider = ({ banners = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!banners || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [banners]);

  if (!banners || banners.length === 0) return null;

  return (
    <div className="hero-slider-container" style={{ position: 'relative', width: '100%', height: '76vh', minHeight: '520px', maxHeight: '700px', backgroundColor: '#000000', overflow: 'hidden' }}>
      
      {banners.map((banner, index) => {
        const isVideo = Boolean(banner.video_url);
        const isActive = index === currentSlide;

        return (
          <div
            key={banner.id || index}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 10 : 1,
              transition: 'opacity 0.8s ease-in-out',
              pointerEvents: isActive ? 'auto' : 'none'
            }}
          >
            {/* Background Image / Video */}
            {isVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="hero-bg-img"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  opacity: 1
                }}
              >
                <source src={banner.video_url} type="video/mp4" />
              </video>
            ) : (
              <img
                src={banner.image_url}
                alt={banner.title}
                className="hero-bg-img"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 1,
                  opacity: 1
                }}
              />
            )}

            {/* Dark gradient overlay for ultra-crisp text legibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(4, 7, 20, 0.4) 0%, rgba(4, 7, 20, 0.75) 100%)',
                zIndex: 2
              }}
            />

            {/* Slide Content Layout Container */}
            <div
              className="hero-content"
              style={{
                position: 'relative',
                zIndex: 3,
                maxWidth: '1420px',
                margin: '0 auto',
                padding: '2.5rem 2.5rem',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
                boxSizing: 'border-box'
              }}
            >
              {/* SLIDE CONTENT - SINGLE LINE TITLE & SUBTITLE */}
              <div style={{ width: '100%', maxWidth: '100%' }} className="anim-fade-left">
                
                {/* 1. Tag Badge */}
                {banner.tag && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        background: 'rgba(225, 29, 72, 0.25)',
                        color: '#ffffff',
                        border: '1px solid rgba(225, 29, 72, 0.6)',
                        padding: '0.4rem 1.25rem',
                        borderRadius: '50px',
                        fontWeight: 800,
                        fontSize: '0.82rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        backdropFilter: 'blur(8px)',
                        boxShadow: '0 4px 14px rgba(225, 29, 72, 0.35)',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {banner.tag}
                    </span>
                  </div>
                )}

                {/* 2. Main Title - STRICTLY SINGLE LINE & COMPACT */}
                <h1
                  style={{
                    fontFamily: "'Plus Jakarta Sans', 'Outfit', 'Archivo', sans-serif",
                    fontSize: 'clamp(1.35rem, 2.4vw, 2.15rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    margin: 0,
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.95)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    width: '100%'
                  }}
                  title={banner.title}
                >
                  {banner.title}
                </h1>

                {/* 3. Subtitle Description - STRICTLY SINGLE LINE */}
                {banner.subtitle && (
                  <p
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontSize: 'clamp(0.85rem, 1.15vw, 1.05rem)',
                      color: '#e2e8f0',
                      lineHeight: 1.5,
                      margin: 0,
                      fontWeight: 400,
                      maxWidth: '100%',
                      width: '100%',
                      textShadow: '0 2px 14px rgba(0, 0, 0, 0.95)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      textAlign: 'left'
                    }}
                    title={banner.subtitle}
                  >
                    {banner.subtitle}
                  </p>
                )}
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};

export default HeroSlider;
