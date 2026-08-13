import React from 'react';
import { ArrowRight } from 'lucide-react';

export const GetStartedStepper = ({ onOpenContact }) => {
  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* Main Heading & Subtitle */}
        <h2 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '2.25rem', fontWeight: 700, color: '#2C2C54', lineHeight: 1.25, marginBottom: '1rem' }}>
          Get started in 1 hour with <span style={{ color: '#6C5CE7' }}>Vebhor’s</span> Payroll & Workforce Services
        </h2>
        <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '840px', margin: '0 auto 3.5rem', lineHeight: 1.6 }}>
          Launch payroll and workforce operations in record time. Vebhor’s plug‑and‑play setup gets your organisation fully activated within an hour—so you can hire, onboard, and pay your team without delays.
        </p>

        {/* 4 Step Connected Process Stepper Bar */}
        <div style={{ position: 'relative', marginBottom: '3.5rem' }}>
          {/* Horizontal Line behind numbers */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '10%',
              right: '10%',
              height: '3px',
              backgroundColor: '#6C5CE7',
              zIndex: 1
            }}
          />

          {/* 4 Step Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', position: 'relative', zIndex: 2 }}>
            {/* Step 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #6C5CE7', backgroundColor: '#ffffff', color: '#6C5CE7', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(108,92,231,0.2)' }}>
                1
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#2C2C54', marginBottom: '0.6rem' }}>
                Create an Account
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Sign up for free and get onboarded as a client instantly. Our team sets up your workspace, verifies your details, and gets everything ready to start operations.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #6C5CE7', backgroundColor: '#ffffff', color: '#6C5CE7', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(108,92,231,0.2)' }}>
                2
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#2C2C54', marginBottom: '0.6rem' }}>
                Contracts
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Country specific compliant employment or contractor agreements. Localised, legally‑aligned contracts ensure every worker is engaged correctly from day one.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #6C5CE7', backgroundColor: '#ffffff', color: '#6C5CE7', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(108,92,231,0.2)' }}>
                3
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#2C2C54', marginBottom: '0.6rem' }}>
                Onboarding
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Add employees, contractors, or vendors with a seamless, guided onboarding flow. Collect documents, assign roles, provision devices, and activate access—all in one place.
              </p>
            </div>

            {/* Step 4 */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #6C5CE7', backgroundColor: '#ffffff', color: '#6C5CE7', fontWeight: 800, fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', boxShadow: '0 4px 10px rgba(108,92,231,0.2)' }}>
                4
              </div>
              <h3 style={{ fontFamily: "var(--bs-body-font-family), 'Outfit', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#2C2C54', marginBottom: '0.6rem' }}>
                Run Payroll
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.55, margin: 0 }}>
                Process payroll with a single click. Automate calculations, taxes, compliance, and payouts—locally and globally. Same‑day payments available through regulated banking
              </p>
            </div>
          </div>
        </div>

        {/* Primary Action Button */}
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
              gap: '0.6rem',
              backgroundColor: '#6C5CE7',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1rem',
              padding: '0.85rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(108,92,231,0.35)',
              transition: 'all 0.2s ease'
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
