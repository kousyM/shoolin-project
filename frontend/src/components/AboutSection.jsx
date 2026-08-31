import React, { useState, useEffect, useRef } from 'react';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2.5rem 1.5rem 1.75rem 1.5rem',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Centered Clean Container */}
      <div
        style={{
          maxWidth: '1120px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 20px, 0)',
          transition: 'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Glowing Top Ambient Accent Line */}
        <div
          style={{
            height: '3px',
            maxWidth: '880px',
            margin: '0 auto 1.75rem auto',
            background: 'linear-gradient(90deg, transparent 0%, #E11D48 30%, #E11D48 70%, transparent 100%)',
            borderRadius: '3px'
          }}
        />

        {/* Paragraph Narrative */}
        <p
          style={{
            width: '100%',
            maxWidth: '1200px',
            margin: '0px auto',
            textAlign: 'justify',
            fontFamily: '"Archivo", sans-serif',
            fontSize: '20px',
            fontWeight: 400,
            lineHeight: '28px',
            color: 'rgb(100, 116, 139)'
          }}
        >
          Shoolin is a next‑generation Workforce Enablement Services company that helps enterprises build, manage, & scale global teams{' '}
          <strong style={{ color: '#E11D48', fontWeight: 700 }}>precision</strong>,{' '}
          <strong style={{ color: '#00c9a7', fontWeight: 700 }}>compliance</strong>, &{' '}
          <strong style={{ color: '#E11D48', fontWeight: 700 }}>AI‑driven efficiency</strong>. With deep expertise across talent management, payrolling, contractor operations, & global mobility, we deliver industry‑specific solutions that meet the complex workforce needs of modern businesses. tailored workforce strategies, transparent operations, & end‑to‑end execution.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
