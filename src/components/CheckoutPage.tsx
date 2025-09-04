import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Shield, CreditCard } from 'lucide-react';

interface CheckoutPageProps {
  selectedPlan: 'essential' | 'premium';
  onBack: () => void;
}

export default function CheckoutPage({ selectedPlan, onBack }: CheckoutPageProps) {
  const navigate = useNavigate();
  const [currentPlan, setCurrentPlan] = useState<'essential' | 'premium'>(selectedPlan);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessUrl: '',
    phoneNumber: '',
    cardNumber: '',
    expiryDate: '',
    cvc: ''
  });

  const planDetails = {
    essential: {
      name: 'Essential Plan',
      price: 2500,
      features: [
        'Monthly ad management & optimization',
        '5 custom AI-generated static image ads',
        'Daily performance reporting & insights',
        'Email & Slack support within 48-hours'
      ]
    },
    premium: {
      name: 'Premium Plan',
      price: 3500,
      features: [
        'Everything in Essential plan',
        'Quarterly AI video funnel (3 custom videos)',
        '1 top-of-funnel prospecting video',
        '2 performance retargeting videos',
        'Priority email & Slack support within 1 business day'
      ]
    }
  };

  const planData = planDetails[currentPlan];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order submitted:', { plan: currentPlan, ...formData });
    // Navigate to thank you page
    navigate('/thank-you');
    window.scrollTo(0, 0);
  };

  const timelineSteps = [
    {
      number: 1,
      title: 'Within 10 Minutes',
      description: "You'll receive an email with an onboarding questionnaire (10 minutes to complete) plus key information for success."
    },
    {
      number: 2,
      title: 'Within 1 Business Day',
      description: "You'll be invited to a dedicated Slack channel where you can message directly with our team to start sharing access to your Meta account & brand assets."
    },
    {
      number: 3,
      title: 'Within 5 Business Days',
      description: "After granting Meta account access, we'll send your full campaign plans, audiences, creative assets for approval, and reporting dashboard link."
    },
    {
      number: 4,
      title: 'Within 10 Business Days',
      description: "Once you have approved campaign objectives, creative, targeting, and budgets, we'll go live while you sit back and watch the growth happen!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl p-6 text-white">
          <button
            onClick={onBack}
            className="flex items-center text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
          <h1 className="text-2xl font-bold">Complete Your Order</h1>
          <p className="text-white/90">One in the Chamber - {planData.name}</p>
        </div>

        <div className="bg-white rounded-b-2xl p-8">
          {/* What Happens Next Timeline */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-gray-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">What Happens Next?</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {timelineSteps.map((step, index) => (
                <div key={step.number} className="text-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold ${
                    index === 0 ? 'bg-purple-500' : 
                    index === 1 ? 'bg-pink-500' : 
                    index === 2 ? 'bg-blue-500' : 'bg-green-500'
                  }`}>
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Plan Selection & Order Summary */}
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Select Your Plan</h3>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Choose Plan
                    </label>
                    <div className="relative">
                      <select
                        value={currentPlan}
                        onChange={(e) => setCurrentPlan(e.target.value as 'essential' | 'premium')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white"
                      >
                        <option value="essential">Essential Plan - $2,500/month</option>
                        <option value="premium">Premium Plan - $3,500/month</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h3>
                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-800">{planData.name}</h4>
                        <p className="text-gray-600 text-sm">Monthly subscription</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">
                          ${planData.price.toLocaleString()}
                        </div>
                        <div className="text-gray-600 text-sm">/month</div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-4">
                      <h5 className="font-semibold text-gray-800 mb-3">Included:</h5>
                      <ul className="space-y-2">
                        {planData.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <span className="text-green-500 mr-2 mt-0.5">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Security Info */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-green-800">Secure & Protected</span>
                  </div>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 256-bit SSL encryption</li>
                    <li>• Cancel anytime with 30-day notice</li>
                    <li>• No setup fees or hidden costs</li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Payment Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Payment Information</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Website URL
                    </label>
                    <input
                      type="text"
                      name="businessUrl"
                      value={formData.businessUrl}
                      onChange={handleInputChange}
                      placeholder="yourbusiness.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-12"
                        required
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        name="cvc"
                        value={formData.cvc}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Complete Order - ${planData.price.toLocaleString()}/month
                    <ArrowLeft className="w-5 h-5 ml-2 rotate-180" />
                  </button>

                  <p className="text-sm text-gray-600 text-center flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Your subscription starts immediately after payment
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}