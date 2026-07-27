import React from 'react';

export const ContactSection = ({ onOpenContactPage }) => {
  return (
    <section id="contact" className="ncs-contact-banner-section">
      <div className="ncs-contact-banner-container">
        
        {/* Left Side: Contact Us Heading */}
        <div className="ncs-contact-banner-left">
          <h2 className="ncs-contact-banner-title">
            Contact us
          </h2>
          <p className="ncs-contact-banner-sub">
            If you're ready to make it happen, get in touch today.
          </p>
        </div>

        {/* Right Side: "Find out more" Button which opens dedicated Contact Us Page */}
        <div className="ncs-contact-banner-right">
          <button
            onClick={onOpenContactPage}
            className="ncs-contact-banner-btn"
          >
            Find out more
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
