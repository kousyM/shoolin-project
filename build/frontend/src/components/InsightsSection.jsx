import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const InsightsSection = ({ insights = [], onSelectInsight }) => {
  const [startIndex, setStartIndex] = useState(0);

  const cardsToShow = 3;
  const totalCards = insights.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, totalCards - cardsToShow) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= totalCards - cardsToShow ? 0 : prev + 1));
  };

  if (!insights || insights.length === 0) return null;

  const visibleCards = insights.slice(startIndex, startIndex + cardsToShow);
  const displayItems = visibleCards.length < cardsToShow && totalCards >= cardsToShow
    ? [...visibleCards, ...insights.slice(0, cardsToShow - visibleCards.length)]
    : visibleCards;

  return (
    <section id="insights" className="ncs-insight-section">
      <div className="ncs-insight-container">
        
        {/* Section Header */}
        <div className="ncs-case-header-flex">
          <div>
            <h2 className="ncs-case-title">
              Insights
            </h2>
            <p className="ncs-case-subtitle">
              Perspectives, research & whitepapers on AI, cloud and transformation
            </p>
          </div>

          {/* Slider Navigation Arrow Buttons */}
          {totalCards > cardsToShow && (
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="ncs-arrow-btn"
                aria-label="Previous Insight"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="ncs-arrow-btn"
                aria-label="Next Insight"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Insights Carousel Grid */}
        <div className="ncs-insight-grid">
          {displayItems.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => onSelectInsight(item)}
              className="ncs-hover-insight-card"
            >
              {/* Default Front View */}
              <div className="ncs-insight-front">
                {item.image_url && (
                  <div className="ncs-insight-img-box">
                    <img
                      src={item.image_url}
                      alt={item.title}
                      className="ncs-insight-img-file"
                    />
                  </div>
                )}

                <div className="ncs-insight-body">
                  <div>
                    <span className="ncs-yellow-tag">
                      {item.type || 'ARTICLE'}
                    </span>

                    <h3 className="ncs-insight-card-title">
                      {item.title}
                    </h3>
                  </div>

                  <div className="ncs-insight-meta-text pt-3 border-t border-slate-200/60">
                    <span>{item.category || 'Data'}</span>
                    {item.date_str && <span> | {item.date_str}</span>}
                  </div>
                </div>
              </div>

              {/* Dark Navy Blue Back View (Appears on Hover!) */}
              <div className="ncs-insight-back-hover">
                <div>
                  <div className="ncs-featured-type">{item.type || 'Article'}</div>
                  <h3 className="ncs-featured-title">
                    {item.title}
                  </h3>
                  <p className="ncs-featured-sub">
                    {item.sub_categories || 'AI • Data • Transformation'}
                  </p>
                </div>

                <div className="ncs-featured-readmore">
                  <span>READ MORE</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
