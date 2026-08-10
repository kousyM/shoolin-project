import React from 'react';
import { ArrowRight } from 'lucide-react';

/* Custom Dual-Tone Icons Matching Exact NCS Website Screenshot */
const ApplicationsIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="10" width="36" height="28" rx="3" stroke="#00B4D8" strokeWidth="3.5" fill="none" />
    <path d="M14 18H20M24 18H28" stroke="#00B4D8" strokeWidth="3" strokeLinecap="round" />
    <rect x="18" y="24" width="40" height="30" rx="3" stroke="#0046AD" strokeWidth="3.5" fill="#FFFFFF" />
    <path d="M28 34L23 39L28 44" stroke="#0046AD" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M48 34L53 39L48 44" stroke="#0046AD" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M40 33L36 45" stroke="#0046AD" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const DigitalCXIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="48" height="48" rx="4" stroke="#00B4D8" strokeWidth="3.5" fill="none" />
    <line x1="34" y1="10" x2="34" y2="58" stroke="#00B4D8" strokeWidth="3.5" strokeDasharray="4 4" />
    <path d="M16 22L24 32L30 26L22 16" stroke="#0046AD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="20" r="3" fill="#0046AD" />
    <line x1="40" y1="20" x2="52" y2="20" stroke="#0046AD" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="40" y1="28" x2="52" y2="28" stroke="#0046AD" strokeWidth="3.5" strokeLinecap="round" />
    <line x1="40" y1="36" x2="48" y2="36" stroke="#0046AD" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

const DataAIIcon = () => (
  <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="14" width="28" height="42" rx="4" stroke="#00B4D8" strokeWidth="3.5" fill="none" />
    <circle cx="26" cy="48" r="2.5" fill="#00B4D8" />
    <path d="M24 20C32 20 38 26 42 32C46 38 52 40 58 40" stroke="#0046AD" strokeWidth="4" strokeLinecap="round" fill="none" />
    <circle cx="24" cy="20" r="4.5" fill="#0046AD" />
    <circle cx="42" cy="32" r="4.5" fill="#0046AD" />
    <circle cx="58" cy="40" r="4.5" fill="#0046AD" />
  </svg>
);

const iconMap = {
  Code: ApplicationsIcon,
  Smartphone: DigitalCXIcon,
  Cpu: DataAIIcon
};

export const ServicesGrid = ({ services = [], onSelectService }) => {
  const displayServices = services && services.length >= 3 ? services.slice(0, 3) : [
    {
      id: 1,
      icon: 'Code',
      title: 'Applications',
      summary: "Our application development process will assist you in creating enterprise grade applications that prioritise your customers at the core of your business. Elevate your business's intelligence and agility with revolutionary enterprise software supported by AI and machine learning."
    },
    {
      id: 2,
      icon: 'Smartphone',
      title: 'Digital Experience',
      summary: "From reimagining healthcare for the future to driving digital transformations in defence, we'll help you create seamless, integrated customer-first digital experiences."
    },
    {
      id: 3,
      icon: 'Cpu',
      title: 'Data & AI',
      summary: 'Master data as the fuel for your business, harness data driven intelligence and deploy AI in the enterprise.'
    }
  ];

  return (
    <section id="services" className="ncs-services-section">
      <div className="ncs-services-container">
        
        {/* Section Header */}
        <div className="ncs-services-header">
          <h2 className="ncs-services-title">Our services</h2>
          <p className="ncs-services-subtitle">
            We help deliver business outcomes through technology. Find out more about our services.
          </p>
        </div>

        {/* Services 3-Column Layout */}
        <div className="ncs-services-3col">
          {displayServices.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || (idx === 0 ? ApplicationsIcon : idx === 1 ? DigitalCXIcon : DataAIIcon);
            return (
              <div key={service.id || idx} className="ncs-service-col">
                <div className="ncs-service-icon">
                  <IconComponent />
                </div>

                <h3 className="ncs-service-col-title">{service.title}</h3>

                <p className="ncs-service-col-desc">{service.summary}</p>

                <button
                  onClick={() => onSelectService && onSelectService(service)}
                  className="ncs-service-link"
                >
                  <span>FIND OUT MORE</span>
                  <ArrowRight size={16} className="ncs-service-arrow" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Centered Discover More Button */}
        <div className="ncs-services-cta">
          <a href="#case-studies" className="ncs-pill-btn font-semibold">
            Find out more
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
