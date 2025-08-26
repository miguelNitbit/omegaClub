import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import ResourcesSection from './components/ResourcesSection';
import VideoSection from './components/VideoSection';
import RegistrationSection from './components/RegistrationSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ResourcesSection />
      <VideoSection />
      <RegistrationSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
