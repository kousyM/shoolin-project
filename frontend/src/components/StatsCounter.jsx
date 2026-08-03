import React, { useState, useEffect, useRef } from 'react';

export const StatsCounter = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !hasAnimated) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          setHasAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    // Count 1: 0 to 1
    const timer1 = setInterval(() => {
      setCount1((prev) => {
        if (prev >= 1) {
          clearInterval(timer1);
          return 1;
        }
        return prev + 1;
      });
    }, 100);

    // Count 2: 0 to 15,000
    const duration2 = 1200;
    const steps2 = 40;
    const increment2 = 15000 / steps2;
    const interval2 = duration2 / steps2;
    const timer2 = setInterval(() => {
      setCount2((prev) => {
        if (prev + increment2 >= 15000) {
          clearInterval(timer2);
          return 15000;
        }
        return Math.floor(prev + increment2);
      });
    }, interval2);

    // Count 3: 0 to 20
    const timer3 = setInterval(() => {
      setCount3((prev) => {
        if (prev >= 20) {
          clearInterval(timer3);
          return 20;
        }
        return prev + 1;
      });
    }, 50);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="ncs-stats-exact-section">
      <div className="ncs-stats-exact-container">
        
        <div className="ncs-stats-3col">
          
          {/* Column 1: # 1 (Sky Blue / Cyan #38bdf8) */}
          <div className="ncs-stat-col border-r border-slate-300/80">
            <div
              className="ncs-stat-number ncs-stat-cyan"
              style={{ color: '#38bdf8' }}
            >
              <span className="ncs-hash mr-1" style={{ color: '#38bdf8' }}>#</span>
              <span style={{ color: '#38bdf8' }}>{count1}</span>
            </div>
            <p className="ncs-stat-desc">
              in IT services in Singapore and Southeast Asia*
            </p>
          </div>

          {/* Column 2: > 15,000 (Magenta / Hot Pink #e01a4f) */}
          <div className="ncs-stat-col border-r border-slate-300/80">
            <div
              className="ncs-stat-number ncs-stat-magenta"
              style={{ color: '#e01a4f' }}
            >
              <span className="ncs-prefix mr-1" style={{ color: '#e01a4f' }}>&gt;</span>
              <span style={{ color: '#e01a4f' }}>{count2.toLocaleString()}</span>
            </div>
            <p className="ncs-stat-desc">
              people across Singapore, Australia, China, India and Philippines
            </p>
          </div>

          {/* Column 3: > 20 (Dark Navy #001738) */}
          <div className="ncs-stat-col">
            <div
              className="ncs-stat-number ncs-stat-navy"
              style={{ color: '#001738' }}
            >
              <span className="ncs-prefix mr-1" style={{ color: '#001738' }}>&gt;</span>
              <span style={{ color: '#001738' }}>{count3}</span>
            </div>
            <p className="ncs-stat-desc">
              cities where we operate in within Asia Pacific
            </p>
          </div>

        </div>

        {/* Disclaimer note at bottom center matching screenshot */}
        <div className="ncs-stats-disclaimer">
          <p>
            *As part of NCS Group — #1 in IT services in Singapore and Southeast Asia — we bring world-class expertise to Australian businesses.
          </p>
          <p className="mt-1">
            Our global team of 15,000+ people across Singapore, Australia, China and India delivers innovative solutions locally and internationally.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
