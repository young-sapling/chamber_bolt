import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import HowItWorksSection from './components/HowItWorksSection';
import ReasonToBelieveSection from './components/ReasonToBelieveSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function HomePage() {

  const handlePlanSelection = (plan: 'essential' | 'premium') => {
    if (plan === 'premium') {
      window.open('https://chambermedia.app/chamber-one-premium', '_blank');
    } else {
      window.open('https://chambermedia.app/chamber-one-essential', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <HeroSection onPlanSelection={handlePlanSelection} />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="pt-16">
          <ReasonToBelieveSection />
        </div>
      </div>
      <div className="-mt-8">
        <VideoShowcaseSection />
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-2">
        <HowItWorksSection />
      </div>
      <PricingSection onPlanSelection={handlePlanSelection} />
      <FAQSection />
      <CTASection onPlanSelection={handlePlanSelection} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}