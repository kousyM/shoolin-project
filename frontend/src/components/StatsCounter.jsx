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
    handleScroll(); // initial check
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
          
          {/* Column 1 */}
          <div className="ncs-stat-col border-r border-slate-300">
            <div className="ncs-stat-number text-cyan-600">
              <span className="ncs-hash">#</span> {count1}
            </div>
            <p className="ncs-stat-desc">
              in IT services in Singapore and Southeast Asia*
            </p>
          </div>

          {/* Column 2 */}
          <div className="ncs-stat-col border-r border-slate-300">
            <div className="ncs-stat-number text-pink-600">
              <span className="ncs-prefix">&gt;</span> {count2.toLocaleString()}
            </div>
            <p className="ncs-stat-desc">
              people across Singapore, Australia, China, India and Philippines
            </p>
          </div>

          {/* Column 3 */}
          <div className="ncs-stat-col">
            <div className="ncs-stat-number text-slate-900">
              <span className="ncs-prefix">&gt;</span> {count3}
            </div>
            <p className="ncs-stat-desc">
              cities where we operate in within Asia Pacific
            </p>
          </div>

        </div>

        {/* Disclaimer note at bottom center matching screenshot 1 */}
        <div className="ncs-stats-disclaimer">
          <p>
            *As part of NCS Group — #1 in IT services in Singapore and Southeast Asia — we bring world-class expertise to Australian businesses.
          </p>
          <p>
            Our global team of 15,000+ people across Singapore, Australia, China and India delivers innovative solutions locally and internationally.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StatsCounter;
