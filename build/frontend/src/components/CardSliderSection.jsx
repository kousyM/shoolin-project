import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * Reusable CardSliderSection Component
 * - Mouse Drag / Swipe Gesture to slide cards
 * - Center-aligned heading and subtitle
 * - Dark blue hover overlay ONLY for Insights section
 */
export const CardSliderSection = ({
  id,
  title,
  subtitle,
  items = [],
  cardType = 'case-study', // 'case-study' | 'insight' | 'news'
  onSelectItem,
  autoPlay = true
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [wasDragged, setWasDragged] = useState(false);

  const cardsToShow = 3;
  const totalCards = items.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % totalCards);
  };

  // Auto moving slider effect
  useEffect(() => {
    if (!autoPlay || isHovered || isDragging || totalCards <= cardsToShow) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(interval);
  }, [autoPlay, isHovered, isDragging, totalCards, startIndex]);

  // Mouse Drag / Touch Swipe Handlers
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
    setWasDragged(false);
  };

  const handleDragMove = (clientX) => {
    if (!isDragging) return;
    const offset = clientX - dragStartX;
    setDragOffset(offset);
    if (Math.abs(offset) > 10) {
      setWasDragged(true);
    }
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset < -50) {
      handleNext();
    } else if (dragOffset > 50) {
      handlePrev();
    }
    setDragOffset(0);
  };

  if (!items || items.length === 0) return null;

  // Build continuous cyclic slide array of 3 cards
  const displayItems = [];
  for (let i = 0; i < Math.min(cardsToShow, totalCards); i++) {
    const itemIndex = (startIndex + i) % totalCards;
    displayItems.push(items[itemIndex]);
  }

  return (
    <section id={id} className="ncs-slider-single-section">
      <div className="ncs-slider-single-container">
        
        {/* Centered Section Header */}
        <div className="ncs-slider-header-centered">
          {title && <h2 className="ncs-single-section-title text-center">{title}</h2>}
          {subtitle && <p className="ncs-single-section-sub text-center">{subtitle}</p>}
        </div>

        {/* Moving Slider Track / Grid with Mouse Drag Support */}
        <div
          className={`ncs-single-slider-grid ${isDragging ? 'grabbing' : 'grab'}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleDragEnd();
          }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
          style={{
            transform: isDragging ? `translateX(${dragOffset * 0.4}px)` : 'none',
            transition: isDragging ? 'none' : 'transform 0.3s ease'
          }}
        >
          {displayItems.map((item, idx) => (
            <div
              key={item.id ? `${id}-${item.id}-${idx}` : `${id}-${idx}`}
              onClick={() => {
                if (!wasDragged && onSelectItem) {
                  onSelectItem(item);
                }
              }}
              className="ncs-exact-ncs-card select-none cursor-pointer group"
            >
              {/* Default Card Front */}
              <div className="ncs-card-img-wrapper">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="ncs-card-img"
                  draggable={false}
                />
              </div>

              {/* Card Content Area */}
              <div className="ncs-card-content">
                <div className="ncs-card-main-info">
                  <h3 className="ncs-card-heading">{item.title}</h3>
                </div>

                {/* Pill Tags */}
                <div className="ncs-card-tags-row">
                  {cardType === 'insight' && item.type && (
                    <span className="ncs-pill-outline-tag font-bold uppercase text-[10px]">
                      {item.type}
                    </span>
                  )}
                  {item.category && (
                    <span className="ncs-pill-outline-tag">{item.category}</span>
                  )}
                  {item.sub_categories &&
                    item.sub_categories
                      .split('•')
                      .slice(0, 2)
                      .map((sub, i) => (
                        <span key={i} className="ncs-pill-outline-tag">
                          {sub.trim()}
                        </span>
                      ))}
                </div>

                {/* READ MORE / FIND OUT MORE Button */}
                <div className="ncs-card-action-btn">
                  <span>{cardType === 'news' ? 'FIND OUT MORE' : 'READ MORE'}</span>
                  <ArrowRight size={16} className="ncs-action-arrow" />
                </div>
              </div>

              {/* Dark Blue Hover Overlay Card (ONLY rendered for INSIGHTS) */}
              {cardType === 'insight' && (
                <div className="ncs-card-blue-hover-overlay">
                  <div>
                    <div className="text-sky-400 font-bold uppercase tracking-wider text-xs mb-2">
                      {item.type || item.category || 'Featured'}
                    </div>
                    <h3 className="text-white text-lg font-bold leading-snug mb-3">
                      {item.title}
                    </h3>
                    {item.summary && (
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-3 mb-4">
                        {item.summary}
                      </p>
                    )}
                    {item.sub_categories && (
                      <div className="text-slate-400 text-xs font-semibold mb-4">
                        {item.sub_categories}
                      </div>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-2 text-white font-extrabold text-xs tracking-widest uppercase mt-auto">
                    <span>READ MORE</span>
                    <ArrowRight size={14} className="text-sky-400" />
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* Bottom Right Navigation Arrow Controls */}
        {totalCards > 1 && (
          <div className="ncs-bottom-nav-arrows">
            <button
              onClick={handlePrev}
              className="ncs-circle-arrow-btn"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="ncs-circle-arrow-btn"
              aria-label="Next Slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CardSliderSection;
