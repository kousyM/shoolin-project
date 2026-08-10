import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="ncs-about-section">
      <div className="ncs-about-container">
        {/* Left Column Text Content */}
        <div className="ncs-about-left">
          <h2 className="ncs-about-title">
            About us
          </h2>
          
          <p className="ncs-about-lead">
            Our passion is unlocking more client value through technology.
          </p>

          <p className="ncs-about-text">
            Through our commitment to quality, our focus on people and by challenging traditional thinking we believe that technology services can be done better.
          </p>

          <p className="ncs-about-text">
            Our people bring this to life by advising, transforming and managing technology to help our clients and communities.
          </p>
        </div>

        {/* Right Column Image */}
        <div className="ncs-about-right">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="NCS Team in Office"
            className="ncs-about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
