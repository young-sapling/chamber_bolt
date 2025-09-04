import React from 'react';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onPlanSelection: (plan: 'essential' | 'premium') => void;
}

export default function PricingSection({ onPlanSelection }: PricingSectionProps) {
  return (
    <section id="pricing-section" className="py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-gray-300">
            Two powerful options designed to scale your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 max-w-4xl mx-auto">
          {/* Essential Plan */}
          <div className="bg-white rounded-2xl p-8 relative transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Essential</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-800">$2,500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Perfect for getting started with AI-powered ads</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Monthly ad management & optimization</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">5 custom AI-generated static image ads</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Daily performance reporting & insights</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Email & Slack support within 48-hours</span>
              </div>
            </div>
            
            <button
              onClick={() => onPlanSelection('essential')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Choose Essential Plan
            </button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white rounded-2xl p-8 relative border-2 border-purple-500 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-purple-600">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-800">$3,500</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600">Complete AI video funnel for maximum impact</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Everything in Essential plan</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Quarterly AI video funnel (3 custom videos)</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">1 top-of-funnel prospecting video</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">2 performance retargeting videos</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Priority email & Slack support within 1 business day</span>
              </div>
            </div>
            
            <button
              onClick={() => onPlanSelection('premium')}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Choose Premium Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}