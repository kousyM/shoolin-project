import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" style={{ backgroundColor: '#ffffff', padding: '4.5rem 2rem 4rem 2rem', borderBottom: '1px solid #f1f5f9' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
        
        {/* Center-Aligned ABOUT US Eyebrow Tag */}
        <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#6C5CE7', backgroundColor: '#DCD6F7', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block' }}>
            ABOUT US
          </span>
        </div>

        {/* Paragraph Narrative with text-align: start */}
        <p
          style={{
            fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif",
            fontSize: '1.4rem',
            fontWeight: 400,
            color: '#334155',
            lineHeight: 1.65,
            textAlign: 'start',
            margin: '0 0 1.5rem 0',
            letterSpacing: '-0.01em'
          }}
        >
          Vebhor is a next‑generation HR Tech and Workforce Solutions company that helps enterprises build, manage, and scale global teams with{' '}
          <strong style={{ color: '#0284c7', fontWeight: 700 }}>precision</strong>,{' '}
          <strong style={{ color: '#0284c7', fontWeight: 700 }}>compliance</strong>, and{' '}
          <strong style={{ color: '#0284c7', fontWeight: 700 }}>AI‑driven efficiency</strong>. With deep expertise across talent management, payrolling, contractor operations, and global mobility, we deliver industry‑specific solutions that meet the complex workforce needs of modern businesses. Our multi‑vertical model mirrors the strength of leading global IT and consulting firms, enabling us to support clients across diverse sectors with{' '}
          <span style={{ color: '#0f172a', fontWeight: 600 }}>tailored workforce strategies</span>, transparent operations, and{' '}
          <span style={{ color: '#0f172a', fontWeight: 600 }}>end‑to‑end execution</span>.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
