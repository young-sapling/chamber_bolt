import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function ReasonToBelieveSection() {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="bg-white rounded-2xl p-12">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Can Our AI Actually Grow Your Business?
          </h2>
          <p className="text-2xl text-gray-800 font-semibold">Yes, and here's why...</p>
        </div>
        
        {/* Animated Arrow */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center">
            <div 
              className="w-8 h-8 border-2 border-purple-500 rounded-full flex items-center justify-center"
              style={{
                animation: 'bounceArrow 2s infinite'
              }}
            >
              <ChevronDown className="w-5 h-5 text-purple-500" />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">40%</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Better Performance</h3>
            <p className="text-gray-800 text-sm">Our AI ads have reduced cost per click, cost per lead, and improved ROAS by as much as 40%</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">1000+</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Proven Data</h3>
            <p className="text-gray-800 text-sm">Our AI creator module is trained on 1,000s of the best performing ad content in the world</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">24/7</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Always Optimizing</h3>
            <p className="text-gray-800 text-sm">AI never sleeps - continuous optimization and performance monitoring around the clock</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">The Chamber Media Advantage</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Decades of Experience</h4>
                  <p className="text-gray-800 text-sm">We've been growing brands for decades, now supercharged with AI technology</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Performance-First Approach</h4>
                  <p className="text-gray-800 text-sm">Every piece of content is reverse-engineered from high-performing campaigns</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Brand Safety Guaranteed</h4>
                  <p className="text-gray-800 text-sm">Professional, on-brand content that maintains your reputation while driving results</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3 mt-1">
                  <span className="text-purple-600 font-bold text-sm">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Full Control</h4>
                  <p className="text-gray-800 text-sm">You approve everything - content, audiences, budgets. We never launch without your approval</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}