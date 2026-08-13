import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" style={{ backgroundColor: '#ffffff', padding: '3.5rem 2rem 2rem 2rem', borderBottom: '1px solid #f1f5f9' }}>
      <div style={{ maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Small Eyebrow Label */}
        <span style={{ fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#0284c7', backgroundColor: '#e0f2fe', padding: '0.4rem 1.1rem', borderRadius: '50px', display: 'inline-block', marginBottom: '1.25rem' }}>
          ABOUT US — VEBHOR
        </span>

        {/* Clean Statement using Body Font Family */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", fontSize: '1.5rem', fontWeight: 500, color: '#1e293b', lineHeight: 1.6, maxWidth: '960px', margin: '0 auto 1.25rem' }}>
          Vebhor helps enterprises build, manage, and scale global teams with{' '}
          <strong style={{ color: '#0284c7', fontWeight: 700 }}>precision</strong>,{' '}
          <strong style={{ color: '#0284c7', fontWeight: 700 }}>compliance</strong>, and{' '}
          <strong style={{ color: '#0284c7', fontWeight: 700 }}>AI-driven efficiency</strong> so they stay ahead in a fast-changing world.
        </h2>

        {/* Supporting Narrative */}
        <p style={{ fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif", fontSize: '1.05rem', color: '#64748b', lineHeight: 1.75, maxWidth: '900px', margin: '0 auto', fontWeight: 400 }}>
          With deep expertise across talent management, payrolling, contractor operations, and global mobility, our multi-vertical model mirrors leading global consulting firms—delivering{' '}
          <span style={{ color: '#0f172a', fontWeight: 600 }}>tailored workforce strategies</span>, transparent operations, and{' '}
          <span style={{ color: '#0f172a', fontWeight: 600 }}>end-to-end execution</span>.
        </p>

      </div>
    </section>
  );
};

export default AboutSection;
