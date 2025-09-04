import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onPlanSelection: (plan: 'essential' | 'premium') => void;
}

export default function CTASection({ onPlanSelection }: CTASectionProps) {
  return (
    <section className="pt-2 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join businesses already scaling with AI-powered marketing automation
          </p>
          
          <button
            onClick={() => onPlanSelection('premium')}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto cursor-pointer"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}