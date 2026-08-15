import React, { useState, useEffect } from 'react';

export const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '0.9rem',
        padding: '0.65rem 1.25rem',
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        boxShadow: '0 6px 20px rgba(59, 130, 246, 0.45)',
        transition: 'all 0.25 ease'
      }}
    >
      <span>Back to top</span>
      <span style={{ fontSize: '0.85rem' }}>▲</span>
    </button>
  );
};

export default BackToTopButton;
