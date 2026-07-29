import React from 'react';
import { Laptop, Layout, Share2, Cloud, ChevronRight } from 'lucide-react';

const iconMap = {
  Code: Laptop,
  Smartphone: Layout,
  Cpu: Share2,
  Cloud: Cloud
};

export const ServicesGrid = ({ services = [], onSelectService }) => {
  if (!services || services.length === 0) return null;

  return (
    <section id="services" className="ncs-services-section">
      <div className="ncs-services-container">
        {/* Section Header */}
        <div className="ncs-services-header">
          <h2 className="ncs-services-title">
            Our services
          </h2>
          <p className="ncs-services-subtitle">
            advise, transform and manage digital, data and cloud services across industries
          </p>
        </div>

        {/* Services 3-Column Grid */}
        <div className="ncs-services-3col">
          {services.slice(0, 3).map((service) => {
            const IconComponent = iconMap[service.icon] || Laptop;
            return (
              <div key={service.id || service.title} className="ncs-service-col">
                <div className="ncs-service-icon">
                  <IconComponent size={48} strokeWidth={1.4} />
                </div>

                <h3 className="ncs-service-col-title">
                  {service.title}
                </h3>

                <p className="ncs-service-col-desc">
                  {service.summary}
                </p>

                <button
                  onClick={() => onSelectService(service)}
                  className="ncs-service-link"
                >
                  <span>FIND OUT MORE</span>
                  <ChevronRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Centered Discover More Pill Button */}
        <div className="ncs-services-cta">
  <a href="#case-studies" className="ncs-pill-btn">
    Find out more
  </a>
</div>
      </div>
    </section>
  );
};

export default ServicesGrid;
