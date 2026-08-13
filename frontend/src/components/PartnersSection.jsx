import React from 'react';

export const PartnersSection = () => {
  const partners = [
    { name: 'Microsoft', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google Cloud', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'AWS', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'Dell', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' }
  ];

  return (
    <section className="ncs-partners-exact-section">
      <div className="ncs-partners-exact-container">
        
        {/* Section Header */}
        <h2 className="ncs-partners-title">
          Meet our partners
        </h2>

        {/* 4 Partner Logo Grid separated by light vertical borders */}
        <div className="ncs-partners-4col">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className={`ncs-partner-box ${idx < partners.length - 1 ? 'border-r border-slate-200' : ''}`}
            >
              {partner.logoUrl ? (
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="ncs-partner-logo-img"
                />
              ) : (
                <span className="text-xl font-bold text-slate-800">{partner.name}</span>
              )}
            </div>
          ))}
        </div>

        {/* Centered Outline Pill Button matching Screenshot 2 */}
        <div className="text-center mt-10">
          <a href="#contact" className="ncs-partners-pill-btn">
            Find out more
          </a>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
