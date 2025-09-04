import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import VideoShowcaseSection from './components/VideoShowcaseSection';
import HowItWorksSection from './components/HowItWorksSection';
import ReasonToBelieveSection from './components/ReasonToBelieveSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CheckoutPage from './components/CheckoutPage';
import ThankYouPage from './components/ThankYouPage';

function HomePage() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'essential' | 'premium' | null>(null);

  const handlePlanSelection = (plan: 'essential' | 'premium') => {
    setSelectedPlan(plan);
    navigate(`/checkout/${plan}`);
    window.scrollTo(0, 0);
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

function CheckoutRoute() {
  const { plan } = useParams<{ plan: string }>();
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/');
  };

  return (
    <CheckoutPage 
      selectedPlan={(plan || 'essential') as 'essential' | 'premium'} 
      onBack={handleBack} 
    />
  );
}

function ThankYouRoute() {
  return <ThankYouPage />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout/:plan" element={<CheckoutRoute />} />
        <Route path="/thank-you" element={<ThankYouRoute />} />
      </Routes>
    </Router>
  );
}