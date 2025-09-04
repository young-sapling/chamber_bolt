import React from "react";
import { Sparkles, Target, Shield } from 'lucide-react';

export default function VideoShowcaseSection() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Column - Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Will My Content Look Like?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Professional, performance-driven content that's completely brand safe
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Bespoke Assets</h3>
                  <p className="text-purple-100">
                    Every piece of content is custom-created for your specific brand, products, and audience
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Reverse Engineered</h3>
                  <p className="text-purple-100">
                    Built from the DNA of top-performing campaigns to maximize your conversion rates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Brand Safe</h3>
                  <p className="text-purple-100">
                    Professional quality that maintains your brand integrity while driving performance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 h-full flex items-center justify-center">
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
      </div>
    </section>
  );
}