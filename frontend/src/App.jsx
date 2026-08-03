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
import DetailModal from './components/DetailModal';
import Footer from './components/Footer';

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
    },
    {
      id: 4,
      category: 'Industrial & Commercial',
      title: 'Driving proactive worksite safety through AI technology',
      summary: 'Deploying computer vision edge analytics to detect hazards and PPE compliance in real time on heavy industrial worksites.',
      image_url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      category: 'Enterprise Technology',
      title: 'Enabling AI-powered high performance for a global workforce',
      summary: 'Empowering 18,000+ employees with sovereign generative AI copilots.',
      image_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      category: 'Healthcare & Biotech',
      title: 'Modernising patient care systems with secure cloud infrastructure',
      summary: 'Connecting regional healthcare networks with real-time electronic health records and data pipelines.',
      image_url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
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
    },
    {
      id: 3,
      type: 'REPORT',
      category: 'Public Sector',
      date_str: 'Jun 18',
      title: 'AI in government: the procurement problem',
      summary: 'How public sector procurement frameworks must evolve to accommodate rapidly shifting cloud & AI technologies safely.',
      image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      sub_categories: 'AI • Data • Transformation'
    },
    {
      id: 4,
      type: 'ARTICLE',
      category: 'Cloud & Security',
      date_str: 'Jun 05',
      title: 'Navigating Sovereign Cloud Requirements for Government Agencies',
      summary: 'Ensuring strict data sovereignty while harvesting the agility of multi-cloud architectures in government.',
      image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
      sub_categories: 'Cloud • Sovereignty • Security'
    },
    {
      id: 5,
      type: 'PERSPECTIVE',
      category: 'Digital CX',
      date_str: 'May 20',
      title: 'Designing Human-Centric Citizen Experiences in the Age of Autonomous AI',
      summary: 'Creating accessible, frictionless digital services that build trust across diverse demographics.',
      image_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      sub_categories: 'CX • Accessibility • AI'
    },
    {
      id: 6,
      type: 'RESEARCH',
      category: 'Cybersecurity',
      date_str: 'May 10',
      title: 'Zero Trust in the GenAI Era: Securing LLM Integrations against Data Leakage',
      summary: 'Best practices for securing enterprise Large Language Models against prompt injections and telemetry leaks.',
      image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
      sub_categories: 'Security • GenAI • ZeroTrust'
    }
  ],
  news: [
    {
      id: 1,
      category: 'PRESS RELEASE',
      title: 'Challenge Us: A new era of partnership and possibility',
      date_str: 'JULY 20, 2026',
      summary: 'Discover how NCS is partnering with enterprises to challenge conventional thinking and accelerate digital value.',
      image_url: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=600&q=80',
      icon_overlay: 'quote'
    },
    {
      id: 2,
      category: 'PARTNERSHIP',
      title: 'NCS and Newgen announce new low-code partnership to accelerate enterprise-scale modernisation for Australian businesses',
      date_str: 'JUNE 15, 2026',
      summary: 'Empowering commercial enterprises with rapid application delivery and workflow automation.',
      image_url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      icon_overlay: 'tech'
    },
    {
      id: 3,
      category: 'ANNOUNCEMENT',
      title: 'NCS launches Google Cloud Academy in Australia to strengthen Australian AI and cloud talent',
      date_str: 'MAY 28, 2026',
      summary: 'Creating specialized training programs to upskill 1,000+ local engineers in enterprise generative AI.',
      image_url: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
      icon_overlay: 'cloud'
    },
    {
      id: 4,
      category: 'AWARD',
      title: 'NCS recognised as Leader in Asia-Pacific Cloud Migration & AI Operations Report 2026',
      date_str: 'MAY 12, 2026',
      summary: 'Independent study highlights NCS for market leadership in public sector digital transformation.',
      image_url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
      icon_overlay: 'star'
    },
    {
      id: 5,
      category: 'COLLABORATION',
      title: 'NCS expands Strategic Collaboration with AWS to build Sovereign Cloud Solutions',
      date_str: 'APRIL 29, 2026',
      summary: 'Delivering next-generation secure cloud environments for critical infrastructure across ANZ.',
      image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
      icon_overlay: 'cloud'
    },
    {
      id: 6,
      category: 'EXPANSION',
      title: 'NCS opens new Innovation Hub in Melbourne to accelerate AI research and enterprise co-creation',
      date_str: 'APRIL 14, 2026',
      summary: 'New state-of-the-art facility dedicated to rapid prototyping of generative AI solutions.',
      image_url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
      icon_overlay: 'tech'
    }
  ]
};

export function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'contact'
  const [data, setData] = useState(DEFAULT_HOMEPAGE_DATA);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null);

  const fetchHomepageData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/homepage');
      if (response.data && response.data.banners && response.data.banners.length > 0) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Error fetching homepage content from Laravel backend:', error);
    }
  };

  useEffect(() => {
    fetchHomepageData();
  }, []);

  const handleOpenDetail = (item, type) => {
    setSelectedItem(item);
    setModalType(type);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
    setModalType(null);
  };

  // If user navigated to Contact Page
  if (currentPage === 'contact') {
    return <ContactPage onBackHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. Header Navigation */}
      <Navbar
        onOpenContactPage={() => setCurrentPage('contact')}
        onNavHome={() => setCurrentPage('home')}
      />

      <main>
        {/* 2. Hero Banner Slider */}
        <HeroSlider banners={data.banners} />

        {/* 3. About Us Section */}
        <AboutSection />

        {/* 4. Our Services Grid */}
        <ServicesGrid
          services={data.services}
          onSelectService={(service) => handleOpenDetail(service, 'Service Detail')}
        />

        {/* 5. Separate Reusable Moving Slider Sections */}
        {/* A. Case Studies Slider Section */}
        <CardSliderSection
          id="case-studies"
          title="Case studies"
          subtitle="Explore how we deliver high-impact digital transformation across industries"
          items={data.caseStudies}
          cardType="case-study"
          onSelectItem={(item) => handleOpenDetail(item, 'Case Study Detail')}
        />

        {/* B. Insights Slider Section */}
        <CardSliderSection
          id="insights"
          title="Insights"
          subtitle="Perspectives, research & whitepapers on AI, cloud and transformation"
          items={data.insights}
          cardType="insight"
          onSelectItem={(item) => handleOpenDetail(item, 'Insight Detail')}
        />

        {/* C. Latest News Slider Section */}
        <CardSliderSection
          id="latest-news"
          title="Latest news"
          subtitle="Keep up to date with news on NCS, from upcoming developments to enterprise collaborations"
          items={data.news}
          cardType="news"
          onSelectItem={(item) => handleOpenDetail(item, 'News Article')}
        />

        {/* 8. Stats / Numbers Counter Section */}
        <StatsCounter />

        {/* 9. Meet Our Partners Section */}
        <PartnersSection />

        {/* 10. Join An Extraordinary Team Section */}
        <JoinTeamSection />

        {/* 11. Contact Us Banner (Navigates to dedicated Contact Page without popup modal!) */}
        <ContactSection onOpenContactPage={() => setCurrentPage('contact')} />
      </main>

      {/* Item Detail Modal */}
      {/* {selectedItem && (
        <DetailModal
          item={selectedItem}
          type={modalType}
          onClose={handleCloseDetail}
        />
      )} */}

      {/* 12. Footer */}
      <Footer onOpenContactPage={() => setCurrentPage('contact')} />
    </div>
  );
}

export default App;
