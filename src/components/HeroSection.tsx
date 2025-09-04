import React from 'react';
import { Sparkles, ArrowRight, Target, BarChart3, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onPlanSelection: (plan: 'essential' | 'premium') => void;
}

export default function HeroSection({ onPlanSelection }: HeroSectionProps) {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-6 items-center mb-16">
          {/* Left Column - Text Content */}
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white mb-6">
                <Sparkles className="w-5 h-5 mr-2" />
                Introducing Chamber Media's Latest Innovation
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                One in the
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Chamber</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                The completely AI-powered growth solution that handles your ad buying, performance content creation, and campaign reporting—all while you focus on running your business.
              </p>
             
             <div className="mb-8">
               <div className="flex justify-center">
                 <button
                 onClick={scrollToPricing}
                 className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                 style={{
                   animation: 'wiggle 4s ease-in-out infinite'
                 }}
                 >
                   Get Started
                   <ArrowRight className="w-5 h-5 ml-2" />
                 </button>
               </div>
             </div>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="flex justify-center lg:justify-start lg:ml-48">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-80 h-[500px] rounded-xl overflow-hidden shadow-2xl border-2 border-purple-400/30">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/ge5c3kNLrPY?si=TIHskendq_ocSHw-&autoplay=1&mute=1&loop=1&playlist=ge5c3kNLrPY&controls=0&showinfo=0&rel=0&iv_load_policy=3" 
                  title="AI Content Examples" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
    
        {/* Feature Cards - Under Hero */}
        <div className="text-center mb-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Ad Buying</h3>
              <p className="text-gray-300 text-sm">AI-optimized campaigns across all major platforms</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Content Creation</h3>
              <p className="text-gray-300 text-sm">Professional product content generated automatically</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Monthly Reporting</h3>
              <p className="text-gray-300 text-sm">Detailed insights and performance analytics</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pointing Arrow */}
      <div className="flex justify-center pb-8 -mt-8">
        <div className="flex flex-col items-center">
          <div 
            className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </div>
          <p className="text-white/70 text-sm mt-2">Scroll to see how AI ads work</p>
        </div>
      </div>
    </div>
  );
}