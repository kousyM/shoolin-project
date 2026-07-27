import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const CaseStudiesSection = ({ caseStudies = [], onSelectCase }) => {
  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = 3;
  const totalCards = caseStudies.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, totalCards - cardsToShow) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= totalCards - cardsToShow ? 0 : prev + 1));
  };

  const visibleCards = caseStudies.slice(startIndex, startIndex + cardsToShow);
  const displayItems = visibleCards.length < cardsToShow && totalCards >= cardsToShow
    ? [...visibleCards, ...caseStudies.slice(0, cardsToShow - visibleCards.length)]
    : visibleCards;

  return (
    <section id="case-studies" className="ncs-case-section">
      <div className="ncs-case-container">
        
        {/* Section Header */}
        <div className="ncs-case-header-flex">
          <div>
            <h2 className="ncs-case-title">
              Case studies
            </h2>
            <p className="ncs-case-subtitle">
              Explore how we deliver high-impact digital transformation across industries
            </p>
          </div>

          {/* Slider Navigation Arrow Buttons */}
          {totalCards > cardsToShow && (
            <div className="ncs-case-actions">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="ncs-arrow-btn"
                  aria-label="Previous Case Study"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="ncs-arrow-btn"
                  aria-label="Next Case Study"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 3-Card Carousel Grid */}
        <div className="ncs-case-grid">
          {displayItems.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => onSelectCase(item)}
              className="ncs-case-card"
            >
              {/* Card Thumbnail Image */}
              <div className="ncs-case-img-box">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="ncs-case-img-file"
                />
              </div>

              {/* Card Body Container */}
              <div className="ncs-case-body-box">
                <div>
                  <h3 className="ncs-case-card-title">
                    {item.title}
                  </h3>
                  {item.summary && (
                    <p className="ncs-case-card-desc">
                      {item.summary}
                    </p>
                  )}
                </div>

                {/* Bottom Category Tag matching NCS exact design pill tag */}
                <div>
                  <span className="ncs-case-tag-pill">
                    {item.category || 'Public Sector'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
