import React from 'react';

export const JoinTeamSection = ({ onOpenCareers }) => {
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
            <button
              onClick={(e) => {
                e.preventDefault();
                if (onOpenCareers) onOpenCareers();
              }}
              className="ncs-join-pill-btn"
            >
              Explore Careers
            </button>
          </div>
        </div>

        {/* Right Side: High Quality Office Team Image */}
        <div className="ncs-join-right">
          <img
            src="/images/team_collaboration.jpg"
            alt="Join an extraordinary team at Vebhor"
            className="ncs-join-img"
          />
        </div>

      </div>
    </section>
  );
};

export default JoinTeamSection;
