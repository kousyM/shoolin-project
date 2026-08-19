import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GetStartedStepper = ({ onOpenContact }) => {
  return (
    <section style={{ backgroundColor: '#ffffff', padding: '4.5rem 1.5rem', fontFamily: "var(--bs-body-font-family), 'Plus Jakarta Sans', sans-serif" }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          backgroundColor: '#faf5ff',
          border: '1px solid #e9d5ff',
          borderRadius: '16px',
          padding: '4rem 3rem 3.5rem',
          boxShadow: '0 4px 20px rgba(108, 92, 231, 0.05)'
        }}
      >
        
        {/* Main Heading & Subtitle matching Reference Image 2 with Primary Colors */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.4rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '2.5rem' }}>
          <span style={{ color: '#7C3AED' }}>Get started in 1 hour</span> <span style={{ color: '#172033' }}>with Vebhor’s</span><br />
          <span style={{ color: '#172033' }}>Payroll & Workforce Services</span>
        </h2>

        {/* 4 Step Connected Process Stepper Bar */}
        <div style={{ position: 'relative', marginBottom: '3.5rem' }}>
          {/* Horizontal Line behind numbers */}
          <div
            style={{
              position: 'absolute',
              top: '18px',
              left: '12%',
              right: '12%',
              height: '3px',
              backgroundColor: '#7C3AED',
              zIndex: 1
            }}
          />

          {/* 4 Step Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #7C3AED', backgroundColor: '#ffffff', color: '#7C3AED', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(124, 58, 237, 0.2)' }}>
                1
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#172033', marginBottom: '0.6rem' }}>
                Create an Account
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Sign up for free and get onboarded as a client instantly. Our team sets up your workspace and gets everything ready.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #7C3AED', backgroundColor: '#ffffff', color: '#7C3AED', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(124, 58, 237, 0.2)' }}>
                2
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#172033', marginBottom: '0.6rem' }}>
                Contracts
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Country specific compliant agreements. Localised, legally‑aligned contracts ensure every worker is engaged correctly.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #7C3AED', backgroundColor: '#ffffff', color: '#7C3AED', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(124, 58, 237, 0.2)' }}>
                3
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#172033', marginBottom: '0.6rem' }}>
                Onboarding
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Add employees or contractors with seamless onboarding. Collect documents, assign roles, and activate access in one place.
              </p>
            </div>

            {/* Step 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', border: '2px solid #7C3AED', backgroundColor: '#ffffff', color: '#7C3AED', fontWeight: 800, fontSize: '0.95rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(124, 58, 237, 0.2)' }}>
                4
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#172033', marginBottom: '0.6rem' }}>
                Run Payroll!
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Process payroll with a single click. Automate calculations, taxes, compliance, and payouts locally and globally.
              </p>
            </div>
          </div>
        </div>

        {/* Primary Action Button using Site Primary Color (#6C5CE7) */}
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
              gap: '0.5rem',
              backgroundColor: '#6C5CE7',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.95rem',
              padding: '0.85rem 2.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(108, 92, 231, 0.4)',
              transition: 'all 0.2s ease'
            }}
          >
            <span>Start Now</span>
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default GetStartedStepper;
