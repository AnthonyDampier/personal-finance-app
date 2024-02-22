import React from 'react';
import './Home.css';

// Assuming you have components for each part
import HeroSection from '../../components/HomeComponents/HeroSection/HeroSection';
import FeaturedContent from '../../components/HomeComponents/FeaturedContent/FeaturedContent';
import CallToAction from '../../components/HomeComponents/CallToAction/CallToAction';
// import SidebarAds from '../../components/SidebarAds/SidebarAds';
import ContactForm from '../../components/HomeComponents/ContactForm/ContactForm';
import BlogReferences from '../../components/HomeComponents/BlogReferences/BlogReferences';


const HomePage = ({blogPosts}) => {
  console.log(blogPosts);
  return (
    <main className="homepage main-content">
      <HeroSection />
      <CallToAction />
      <FeaturedContent />
      <BlogReferences blogPosts={blogPosts}/>
      <ContactForm />
      <div className="sidebar">
          {/* <SidebarAds /> */}
      </div>
    </main>
  );
};

export default HomePage;