import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const HeroSlider = ({ banners = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) return;
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
      {banners.map((banner, index) => (
        <div
          key={banner.id || index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
        >
          <img
            src={banner.image_url}
            alt={banner.title}
            className="hero-bg-img"
          />
          <div className="hero-content">
            {banner.tag && <span className="hero-tag">{banner.tag}</span>}
            <h1 className="hero-title">{banner.title}</h1>
            <p className="hero-subtitle">{banner.subtitle}</p>
            <a href={banner.button_link || '#services'} className="btn-ncs-primary">
              <span>{banner.button_text || 'Explore Solutions'}</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      ))}

      {/* Slider Nav Controls */}
      {banners.length > 1 && (
        <div className="slider-controls">
          <button onClick={handlePrev} className="slider-btn" aria-label="Previous Slide">
            <ChevronLeft size={20} />
          </button>
          <span className="slider-counter">
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
