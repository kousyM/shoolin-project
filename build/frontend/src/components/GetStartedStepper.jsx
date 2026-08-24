import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export const GetStartedStepper = ({ onOpenContact }) => {
  const [activeStep, setActiveStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // IntersectionObserver to start animation when section enters viewport
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

  // 100% AUTOMATED NON-STOP STEP PROGRESSION (1 -> 2 -> 3 -> 4 -> 1)
  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 2400);

    return () => clearInterval(timer);
  }, [isVisible]);

  const steps = [
    {
      num: 1,
      title: 'Create an Account',
      description: 'Sign up for free and get onboarded as a client instantly. Our team sets up your workspace and gets everything ready.'
    },
    {
      num: 2,
      title: 'Contracts',
      description: 'Country specific compliant agreements. Localised, legally-aligned contracts ensure every worker is engaged correctly.'
    },
    {
      num: 3,
      title: 'Onboarding',
      description: 'Add employees or contractors with seamless onboarding. Collect documents, assign roles, and activate access in one place.'
    },
    {
      num: 4,
      title: 'Run Payroll!',
      description: 'Process payroll with a single click. Automate calculations, taxes, compliance, and payouts locally and globally.'
    }
  ];

  // Calculated width of the active connecting line
  const progressLineWidth = `${((activeStep - 1) / 3) * 100}%`;

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#ffffff',
        padding: '5.5rem 1.5rem 5rem 1.5rem',
        fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif"
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: '#FAF7FF',
          border: '1.5px solid #EFE6FD',
          borderRadius: '24px',
          padding: '4.5rem 3.5rem 4rem 3.5rem',
          boxShadow: '0 16px 45px rgba(108, 92, 231, 0.07)',
          position: 'relative',
          overflow: 'hidden',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* Ambient Glow Light */}
        <div
          style={{
            position: 'absolute',
            top: '-50px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        {/* 1. Main Heading Matching Screenshot */}
        <h2
          style={{
            fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.25,
            marginBottom: '3.5rem',
            color: '#172033',
            letterSpacing: '-0.02em'
          }}
        >
          <span style={{ color: '#6C5CE7', fontWeight: 800 }}>Get started in 1 hour</span> with Vebhor’s<br />
          <span style={{ color: '#172033' }}>Payroll & Workforce Services</span>
        </h2>

        {/* 2. Connected 4-Step Process with Automatic Animated Progress Line */}
        <div style={{ position: 'relative', marginBottom: '3.75rem' }}>
          
          {/* Background Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '12%',
              right: '12%',
              height: '4px',
              backgroundColor: '#E9D5FF',
              borderRadius: '4px',
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            {/* Ambient Flowing Beam Light Along Track */}
            <div className="stepper-flowing-beam" />
          </div>

          {/* Active Filled Progress Line (Advances Automatically 1 -> 2 -> 3 -> 4) */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '12%',
              width: `calc(${progressLineWidth} * 0.76)`,
              height: '4px',
              background: 'linear-gradient(90deg, #6C5CE7 0%, #A855F7 50%, #38BDF8 100%)',
              borderRadius: '4px',
              zIndex: 2,
              transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              boxShadow: '0 0 12px rgba(124, 58, 237, 0.6)'
            }}
          />

          {/* 4 Step Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 3
            }}
          >
            {steps.map((step) => {
              const isPastOrActive = step.num <= activeStep;
              const isCurrent = step.num === activeStep;

              return (
                <div
                  key={step.num}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: isCurrent ? 'translateY(-6px)' : 'translateY(0)'
                  }}
                >
                  {/* Step Number Circle Badge */}
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      border: isPastOrActive ? '2.5px solid #6C5CE7' : '2px solid #D8B4FE',
                      backgroundColor: isPastOrActive ? '#6C5CE7' : '#ffffff',
                      color: isPastOrActive ? '#ffffff' : '#6C5CE7',
                      fontWeight: 800,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      boxShadow: isCurrent
                        ? '0 0 0 7px rgba(108, 92, 231, 0.25), 0 8px 24px rgba(108, 92, 231, 0.45)'
                        : isPastOrActive
                        ? '0 4px 14px rgba(108, 92, 231, 0.3)'
                        : '0 2px 8px rgba(0, 0, 0, 0.04)',
                      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                      transform: isCurrent ? 'scale(1.18)' : 'scale(1)'
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Step Title */}
                  <h3
                    style={{
                      fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif",
                      fontSize: '1.2rem',
                      fontWeight: isCurrent ? 800 : 700,
                      color: isCurrent ? '#6C5CE7' : '#172033',
                      marginBottom: '0.65rem',
                      transition: 'color 0.4s ease'
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: isCurrent ? '#334155' : '#64748b',
                      lineHeight: 1.6,
                      margin: 0,
                      fontWeight: isCurrent ? 500 : 400,
                      maxWidth: '260px',
                      transition: 'color 0.4s ease'
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Primary Call-to-Action Button */}
        <div>
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              backgroundColor: '#5842E3',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.9rem 2.4rem',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(88, 66, 227, 0.4)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#4834D4';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(88, 66, 227, 0.55)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#5842E3';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(88, 66, 227, 0.4)';
            }}
          >
            <span>Start Now</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default GetStartedStepper;
