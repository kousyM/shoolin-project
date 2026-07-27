import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const LatestNewsSection = ({ news = [], onSelectNews }) => {
  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = 3;
  const totalCards = news.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, totalCards - cardsToShow) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= totalCards - cardsToShow ? 0 : prev + 1));
  };

  if (!news || news.length === 0) return null;

  const visibleCards = news.slice(startIndex, startIndex + cardsToShow);
  const displayItems = visibleCards.length < cardsToShow && totalCards >= cardsToShow
    ? [...visibleCards, ...news.slice(0, cardsToShow - visibleCards.length)]
    : visibleCards;

  return (
    <section id="latest-news" className="ncs-news-section">
      <div className="ncs-news-container">
        
        {/* Section Header */}
        <div className="ncs-news-header">
          <h2 className="ncs-news-title">
            Latest news
          </h2>
          <p className="ncs-news-subtitle">
            Keep up to date with news on NCS, from upcoming developments to collaborations with governments and enterprises.
          </p>
        </div>

        {/* News Cards Carousel Grid */}
        <div className="ncs-news-grid">
          {displayItems.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => onSelectNews(item)}
              className="ncs-news-card"
            >
              {/* Left Image Side with Graphic Overlay */}
              <div className="ncs-news-img-side">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="ncs-news-img-file"
                />
                <div className="ncs-news-icon-overlay">
                  {item.icon_overlay === 'quote' ? '//' : item.icon_overlay === 'cloud' ? '☁' : '⚡'}
                </div>
              </div>

              {/* Right Content Side */}
              <div className="ncs-news-body-side">
                <h3 className="ncs-news-card-title">
                  {item.title}
                </h3>

                <div className="ncs-news-link">
                  <span>FIND OUT MORE</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow Controls - PLACED AT BOTTOM RIGHT */}
        {totalCards > cardsToShow && (
          <div className="ncs-news-bottom-arrows">
            <button
              onClick={handlePrev}
              className="ncs-arrow-btn"
              aria-label="Previous News"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="ncs-arrow-btn"
              aria-label="Next News"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default LatestNewsSection;
