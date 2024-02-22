import React from 'react';
import './Home.css';

// Assuming you have components for each part
import HeroSection from '../../components/HomeComponents/HeroSection/HeroSection';
import FeaturedContent from '../../components/HomeComponents/FeaturedContent/FeaturedContent';
import CallToAction from '../../components/HomeComponents/CallToAction/CallToAction';
// import SidebarAds from '../../components/SidebarAds/SidebarAds';
import ContactForm from '../../components/HomeComponents/ContactForm/ContactForm';


const HomePage = () => {
  return (
    <main className="homepage main-content">
      <HeroSection />
      <CallToAction />
    <FeaturedContent />
    {/* <BlogReferences /> */}
    <ContactForm />
    <div className="sidebar">
        {/* <SidebarAds /> */}
    </div>
    </main>
  );
};

export default HomePage;