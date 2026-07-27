import React from 'react';

export const JoinTeamSection = () => {
  return (
    <section className="ncs-join-section">
      <div className="ncs-join-container">
        
        {/* Left Side: Dark Navy Container */}
        <div className="ncs-join-left">
          <h2 className="ncs-join-title">
            Join an extraordinary team
          </h2>
          <p className="ncs-join-desc">
            Our diverse and talented teams build innovations that touch millions of lives every day, are you ready to be part of it?
          </p>

          <div>
            <a href="#contact" className="ncs-join-pill-btn">
              Learn more
            </a>
          </div>
        </div>

        {/* Right Side: High Quality Office Team Image */}
        <div className="ncs-join-right">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="Join an extraordinary team at NCS"
            className="ncs-join-img"
          />
        </div>

      </div>
    </section>
  );
};

export default JoinTeamSection;
