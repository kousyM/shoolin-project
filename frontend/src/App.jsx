import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesGrid from './components/ServicesGrid';
import CardSliderSection from './components/CardSliderSection';
import StatsCounter from './components/StatsCounter';
import PartnersSection from './components/PartnersSection';
import JoinTeamSection from './components/JoinTeamSection';
import ContactSection from './components/ContactSection';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PartnersPage from './pages/PartnersPage';
import InsightsPage from './pages/InsightsPage';
import ServicesPage from './pages/ServicesPage';
import JobDetailPage from './pages/JobDetailPage';
import JobApplyPage from './pages/JobApplyPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AboutPage from './pages/AboutPage';
import ChallengeUsPage from './pages/ChallengeUsPage';
import Footer from './components/Footer';
import { getApiBaseUrl } from './api/config';

const DEFAULT_HOMEPAGE_DATA = {
  banners: [
    {
      id: 1,
      tag: 'TRANSFORM WITH CONFIDENCE',
      title: 'What challenge are you facing?',
      subtitle: 'We partner with governments and enterprises to navigate complex digital transformations with Next-Gen technology, cloud innovation, and AI.',
      image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
      button_text: 'Explore Our Solutions',
      button_link: '#services'
    },
    {
      id: 2,
      tag: 'ARTIFICIAL INTELLIGENCE & DATA',
      title: 'Accelerating Enterprise AI Value',
      subtitle: 'Unlock sustainable growth with sovereign data platforms, predictive analytics, and enterprise generative AI solutions built for real impact.',
      image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
      button_text: 'Discover Data & AI',
      button_link: '#services'
    }
  ],
  services: [
    {
      id: 1,
      icon: 'Code',
      title: 'Applications & Platforms',
      summary: 'Modernise, build, and run critical business applications with microservices and cloud-native architecture.',
      description: 'Our application modernise capabilities accelerate digital delivery, boost resiliency, and lower total cost of ownership across public sector and enterprise workloads.',
      features: ['Cloud Migration & Modernisation', 'Custom API & Microservices', 'DevSecOps Automation', 'Legacy Application Evolution']
    },
    {
      id: 2,
      icon: 'Smartphone',
      title: 'Digital Experience (CX)',
      summary: 'Create seamless, human-centric digital experiences that captivate citizens and enterprise users alike.',
      description: 'Combining human-centred design with agile engineering to craft intuitive digital portals, mobile applications, and omnichannel citizen experiences.',
      features: ['Human-Centred UX/UI Design', 'Omnichannel Citizen Portals', 'Mobile App Development', 'Accessibility & Design Systems']
    },
    {
      id: 3,
      icon: 'Cpu',
      title: 'Data & AI Ecosystems',
      summary: 'Harness sovereign data intelligence, enterprise analytics, and generative AI models safely.',
      description: 'Turn massive data streams into actionable operational intelligence while maintaining strict data governance, security compliance, and privacy.',
      features: ['Enterprise Data Platforms', 'Generative AI & LLM Integration', 'Predictive Analytics & ML', 'Data Governance & Sovereignty']
    }
  ],
  caseStudies: [
    {
      id: 1,
      category: 'Financial Services',
      title: 'Transforming compliance controls with AI in financial services',
      summary: 'Automating regulatory compliance and risk monitoring with generative AI and machine learning audit models.',
      image_url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      category: 'Public Services',
      title: 'When a leading education provider set out to reimagine student engagement, NCS helped make it real',
      summary: 'Deploying personalized mobile student portals and automated digital administration for 50,000+ students.',
      image_url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      category: 'Education',
      title: 'Raising the bar for cashless school payments',
      summary: 'Streamlining payment ecosystems across 400+ schools with contactless smart cards and real-time transaction reconciliation.',
      image_url: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80'
    }
  ],
  insights: [
    {
      id: 1,
      type: 'ARTICLE',
      category: 'Data & AI',
      date_str: 'Jul 02',
      title: 'Databricks Data + AI Summit 2026: The Shift from Data Platforms to AI Powered Innovation',
      summary: 'Key takeaways on scaling lakehouse architecture and sovereign data governance for generative AI enterprise models.',
      image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      sub_categories: 'Data • AI • Platform'
    },
    {
      id: 2,
      type: 'WHITEPAPER',
      category: 'AI Governance',
      date_str: 'Jun 22',
      title: 'Platform, people, and process: why AI governance is the missing piece',
      summary: 'Why successful AI deployment requires aligning technology platforms, human talent, and transparent risk management frameworks.',
      image_url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
      sub_categories: 'AI • Governance • People'
    }
  ]
};

export function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'services' | 'about' | 'contact' | 'careers' | 'partners' | 'insights' | 'job-detail' | 'job-apply' | 'admin-login' | 'admin-dashboard'
  const [aboutInitialTab, setAboutInitialTab] = useState('code-of-conduct');
  const [careersInitialTab, setCareersInitialTab] = useState('career-stories');
  const [servicesInitialCategory, setServicesInitialCategory] = useState('cloud');
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [adminUser, setAdminUser] = useState(null);
  const [data, setData] = useState(DEFAULT_HOMEPAGE_DATA);

  // Sync Hash / Path for robust URL access
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (hash.includes('code-of-conduct')) {
        setAboutInitialTab('code-of-conduct');
        setCurrentPage('about');
      } else if (hash.includes('leadership')) {
        setAboutInitialTab('leadership');
        setCurrentPage('about');
      } else if (hash.includes('milestones')) {
        setAboutInitialTab('milestones');
        setCurrentPage('about');
      } else if (hash.includes('newsroom')) {
        setAboutInitialTab('newsroom');
        setCurrentPage('about');
      } else if (hash.includes('privacy-policy')) {
        setAboutInitialTab('privacy-policy');
        setCurrentPage('about');
      } else if (hash.includes('about')) {
        setAboutInitialTab('code-of-conduct');
        setCurrentPage('about');
      } else if (hash.includes('databricks')) {
        setServicesInitialCategory('databricks');
        setCurrentPage('services');
      } else if (hash.includes('cloud')) {
        setServicesInitialCategory('cloud');
        setCurrentPage('services');
      } else if (hash.includes('advisory')) {
        setServicesInitialCategory('advisory');
        setCurrentPage('services');
      } else if (hash.includes('services-page') || hash.includes('services')) {
        setServicesInitialCategory('cloud');
        setCurrentPage('services');
      } else if (hash.includes('insights')) {
        setCurrentPage('insights');
      } else if (hash.includes('challenge-us')) {
        setCurrentPage('challenge-us');
      } else if (hash.includes('partners')) {
        setCurrentPage('partners');
      } else if (hash.includes('career-stories')) {
        setCareersInitialTab('career-stories');
        setCurrentPage('careers');
      } else if (hash.includes('job-opportunities')) {
        setCareersInitialTab('job-opportunities');
        setCurrentPage('careers');
      } else if (hash.includes('life-at-ncs')) {
        setCareersInitialTab('life-at-ncs');
        setCurrentPage('careers');
      } else if (hash.includes('careers')) {
        setCareersInitialTab('career-stories');
        setCurrentPage('careers');
      } else if (hash.includes('job-detail')) {
        setCurrentPage('job-detail');
      } else if (hash.includes('job-apply')) {
        setCurrentPage('job-apply');
      } else if (hash.includes('contact')) {
        setCurrentPage('contact');
      } else if (hash.includes('admin-dashboard')) {
        const storedToken = localStorage.getItem('adminToken');
        setCurrentPage(storedToken ? 'admin-dashboard' : 'admin-login');
      } else if (hash.includes('admin-login') || hash === '#admin') {
        setCurrentPage('admin-login');
      } else {
        if (path.includes('services-page')) {
          setCurrentPage('services');
        } else if (path.includes('about')) {
          setCurrentPage('about');
        } else if (path.includes('insights')) {
          setCurrentPage('insights');
        } else if (path.includes('partners')) {
          setCurrentPage('partners');
        } else if (path.includes('admin')) {
          const storedToken = localStorage.getItem('adminToken');
          setCurrentPage(storedToken ? 'admin-dashboard' : 'admin-login');
        } else if (path.includes('careers')) {
          setCurrentPage('careers');
        } else if (path.includes('contact')) {
          setCurrentPage('contact');
        }
      }
    };

    handleUrlChange();

    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const storedUser = localStorage.getItem('adminUser');
    if (token && storedUser) {
      try {
        setAdminUser(JSON.parse(storedUser));
      } catch (e) {
        console.error(e);
      }
    }

    const baseUrl = getApiBaseUrl();
    axios.get(`${baseUrl}/api/homepage`)
      .then(response => {
        if (response.data && response.data.banners) {
          setData(response.data);
        }
      })
      .catch(err => console.log('Using default homepage data:', err));
  }, []);

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setAdminUser(null);
    window.location.hash = '';
    setCurrentPage('home');
  };

  const navigateTo = (page, hashName = '', subTab = 'code-of-conduct') => {
    if (page === 'about') {
      setAboutInitialTab(subTab);
    }
    if (page === 'careers') {
      setCareersInitialTab(subTab || 'career-stories');
    }
    if (page === 'services') {
      setServicesInitialCategory(subTab || 'cloud');
    }
    setCurrentPage(page);
    if (hashName) {
      window.location.hash = hashName;
    } else {
      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    }
    window.scrollTo(0, 0);
  };

  // Route Views:

  // 1. Services Standalone Page
  if (currentPage === 'services') {
    return (
      <ServicesPage
        initialCategory={servicesInitialCategory}
        onNavHome={() => navigateTo('home', '')}
        onNavServices={(subTab = 'cloud') => navigateTo('services', subTab, subTab)}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 2. About Us Standalone Page
  if (currentPage === 'about') {
    return (
      <AboutPage
        initialTab={aboutInitialTab}
        onNavHome={() => navigateTo('home', '')}
        onNavServices={() => navigateTo('services', 'services-page')}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 3. Insights Standalone Page
  if (currentPage === 'insights') {
    return (
      <InsightsPage
        onNavHome={() => navigateTo('home', '')}
        onNavServices={() => navigateTo('services', 'services-page')}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 4. Partners Standalone Page
  if (currentPage === 'partners') {
    return (
      <PartnersPage
        onNavHome={() => navigateTo('home', '')}
        onNavServices={() => navigateTo('services', 'services-page')}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 5. Contact Page
  if (currentPage === 'contact') {
    return (
      <ContactPage
        onBackHome={() => navigateTo('home', '')}
        onNavServices={() => navigateTo('services', 'services-page')}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 6. Careers Job Opportunities Page
  if (currentPage === 'careers') {
    return (
      <CareersPage
        initialTab={careersInitialTab}
        onSelectJob={(id) => {
          setSelectedJobId(id);
          navigateTo('job-detail', 'job-detail');
        }}
        onNavHome={() => navigateTo('home', '')}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavServices={() => navigateTo('services', 'services-page')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 7. Job Detail Page
  if (currentPage === 'job-detail') {
    return (
      <JobDetailPage
        jobId={selectedJobId}
        onBackToCareers={() => navigateTo('careers', 'job-opportunities', 'job-opportunities')}
        onApplyJob={(id) => {
          setSelectedJobId(id);
          navigateTo('job-apply', 'job-apply');
        }}
        onSelectOtherJob={(id) => {
          setSelectedJobId(id);
          navigateTo('job-detail', 'job-detail');
        }}
        onNavHome={() => navigateTo('home', '')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 8. Job Application Form Page
  if (currentPage === 'job-apply') {
    return (
      <JobApplyPage
        jobId={selectedJobId}
        onBackToJob={() => navigateTo('job-detail', 'job-detail')}
        onNavHome={() => navigateTo('home', '')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 9. Admin Login Page
  if (currentPage === 'admin-login') {
    return (
      <AdminLoginPage
        onLoginSuccess={(user) => {
          setAdminUser(user);
          navigateTo('admin-dashboard', 'admin-dashboard');
        }}
        onNavHome={() => navigateTo('home', '')}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
      />
    );
  }

  // 10. Admin Dashboard Page
  if (currentPage === 'admin-dashboard') {
    return (
      <AdminDashboardPage
        onNavHome={() => navigateTo('home', '')}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 11. Challenge Us Page
  if (currentPage === 'challenge-us') {
    return (
      <ChallengeUsPage
        onNavHome={() => navigateTo('home', '')}
        onNavServices={(cat) => navigateTo('services', 'services-page', cat)}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />
    );
  }

  // 12. Homepage (Default)
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenContactPage={() => navigateTo('contact', 'contact')}
        onNavHome={() => navigateTo('home', '')}
        onNavAbout={(subTab = 'code-of-conduct') => navigateTo('about', subTab, subTab)}
        onNavCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)}
        onNavPartners={() => navigateTo('partners', 'partners')}
        onNavInsights={() => navigateTo('insights', 'insights')}
        onNavServices={() => navigateTo('services', 'services-page')}
        onNavChallengeUs={() => navigateTo('challenge-us', 'challenge-us')}
        onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')}
        isAdminLoggedIn={!!adminUser}
        onAdminLogout={handleAdminLogout}
      />

      <main>
        {/* 2. Hero Banner Slider */}
        <HeroSlider banners={data.banners} />

        {/* 3. About Us Section */}
        <AboutSection />

        {/* 4. Our Services Grid */}
        <ServicesGrid services={data.services} />

        {/* 5. Case Studies Slider */}
        <CardSliderSection
          id="case-studies"
          title="Case studies"
          subtitle="Explore how we deliver high-impact digital transformation across industries"
          items={data.caseStudies}
          cardType="case-study"
        />

        {/* 6. Insights Slider */}
        <CardSliderSection
          id="insights"
          title="Insights"
          subtitle="Perspectives, research & whitepapers on AI, cloud and transformation"
          items={data.insights}
          cardType="insight"
        />

        {/* 7. Stats / Numbers Counter Section */}
        <StatsCounter />

        {/* 8. Meet Our Partners Section */}
        <PartnersSection onNavPartners={() => navigateTo('partners', 'partners')} />

        {/* 9. Join An Extraordinary Team Section */}
        <JoinTeamSection onOpenCareers={(subTab = 'career-stories') => navigateTo('careers', subTab, subTab)} />

        {/* 10. Contact Us Banner */}
        <ContactSection onOpenContactPage={() => navigateTo('contact', 'contact')} />
      </main>

      {/* 11. Footer */}
      <Footer onOpenContactPage={() => navigateTo('contact', 'contact')} onNavAdmin={() => navigateTo(adminUser ? 'admin-dashboard' : 'admin-login', 'admin-login')} />
    </div>
  );
}

export default App;
