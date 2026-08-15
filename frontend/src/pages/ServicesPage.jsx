import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DeelServicesSubpage } from '../components/DeelServicesSubpage';
import { PartnersSection } from '../components/PartnersSection';
import { DriveCareerBanner } from '../components/DriveCareerBanner';
import { ContactSection } from '../components/ContactSection';

export const ServicesPage = ({
  onNavHome,
  onNavServices,
  onNavAbout,
  onNavCareers,
  onNavPartners,
  onNavInsights,
  onNavChallengeUs,
  onOpenContactPage,
  onNavAdmin,
  isAdminLoggedIn,
  onAdminLogout
}) => {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* Navbar */}
      <Navbar
        onNavHome={onNavHome}
        onNavServices={onNavServices}
        onNavAbout={onNavAbout}
        onNavCareers={onNavCareers}
        onNavPartners={onNavPartners}
        onNavInsights={onNavInsights}
        onNavChallengeUs={onNavChallengeUs}
        onOpenContactPage={onOpenContactPage}
        onNavAdmin={onNavAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
        onAdminLogout={onAdminLogout}
      />

      <main style={{ paddingTop: 0, marginTop: 0 }}>
        {/* STANDALONE SERVICES PAGE WITH ALL TABS & SINGLE BOX DETAILS */}
        <DeelServicesSubpage onOpenContactPage={onOpenContactPage} />

        {/* MEET OUR PARTNERS SECTION */}
        <PartnersSection onNavPartners={onNavPartners} />

        {/* DRIVE YOUR CAREER FORWARD BANNER */}
        <DriveCareerBanner onNavCareers={onNavCareers} />

        {/* GET ANSWERS TO YOUR QUESTIONS CONTACT FORM */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenContactPage={onOpenContactPage} onNavAdmin={onNavAdmin} />
    </div>
  );
};

export default ServicesPage;
