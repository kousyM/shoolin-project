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
    <div className="hero-slider-container">
      {banners.map((banner, index) => {
        const isVideo = banner.video_url || index === 0;

        return (
          <div
            key={banner.id || index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
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
              />
            )}

            <div className="hero-content" style={{ position: 'relative', zIndex: 3 }}>
              {banner.tag && <span className="hero-tag">{banner.tag}</span>}
              <h1 className="hero-title">{banner.title}</h1>
              <p className="hero-subtitle">{banner.subtitle}</p>
              <a href={banner.button_link || '#services'} className="btn-ncs-primary">
                <span>{banner.button_text || 'Explore Solutions'}</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        );
      })}

      {/* Slider Nav Controls */}
      {banners.length > 1 && (
        <div className="slider-controls" style={{ zIndex: 10 }}>
          <button onClick={handlePrev} className="slider-btn" aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {banners.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? '24px' : '8px',
                  height: '8px',
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

          <span className="slider-counter" style={{ marginLeft: '6px', marginRight: '6px' }}>
            0{currentSlide + 1} / 0{banners.length}
          </span>
          <button onClick={handleNext} className="slider-btn" aria-label="Next Slide">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
