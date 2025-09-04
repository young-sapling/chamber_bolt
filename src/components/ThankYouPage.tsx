import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl p-12 text-center shadow-2xl">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Welcome to One in the Chamber!
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase! Please check your email (including your spam folder) for an invitation to our shared Slack channel.
            </p>
          </div>

          {/* Onboarding Timeline */}
          <div className="text-left mb-8">
            <h2 className="text-xl font-bold text-purple-600 mb-6 text-center">
              Your Onboarding Timeline:
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-1">Within 10 Minutes:</h3>
                  <p className="text-gray-700">
                    You'll receive an email with an onboarding questionnaire (10 minutes to complete) plus key information for success.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-1">Within 1 Business Day:</h3>
                  <p className="text-gray-700">
                    You'll be invited to a dedicated Slack channel where you can message directly with our team to start sharing access to your Meta account & brand assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-1">Within 5 Business Days:</h3>
                  <p className="text-gray-700">
                    After granting Meta account access, we'll send your full campaign plans, audiences, creative assets for approval, and reporting dashboard link.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-purple-600 mb-1">Within 10 Business Days:</h3>
                  <p className="text-gray-700">
                    Once you have approved campaign objectives, creative, targeting, and budgets, we'll go live while you sit back and watch the growth happen!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-2">
              Let's Blow Up the Internet Together!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}