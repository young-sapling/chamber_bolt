import React from 'react';
import { FileText, Share2, MessageSquare, Zap, Play, Monitor, Pause, RotateCcw } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: "Fill Out Intake Form",
      description: "Complete our comprehensive questionnaire about your business and goals"
    },
    {
      step: 2,
      icon: Share2,
      title: "Share Meta Account Access",
      description: "Grant us secure access to your Meta advertising accounts"
    },
    {
      step: 3,
      icon: MessageSquare,
      title: "AI Chat Creative Brief",
      description: "Use our AI chat to generate a detailed creative brief for your campaigns"
    },
    {
      step: 4,
      icon: Zap,
      title: "Receive AI Content",
      description: "Get custom AI-generated performance content in 3-5 business days"
    },
    {
      step: 5,
      icon: Play,
      title: "Approve & Launch",
      description: "Review and approve your content and audiences, then launch your ad campaigns"
    },
    {
      step: 6,
      icon: Monitor,
      title: "Monitor Dashboard",
      description: "Track performance with our daily-updating analytics dashboard"
    },
    {
      step: 7,
      icon: Pause,
      title: "Control Your Spend",
      description: "Pause campaigns anytime or increase spending as desired"
    },
    {
      step: 8,
      icon: RotateCcw,
      title: "Rinse, Repeat, Grow",
      description: "Continuously optimize and scale your successful campaigns"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-300">
          <span className="text-gray-100 font-medium">Your journey to AI-powered growth in 8 simple steps</span>
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/15"
            style={{
              animationDelay: `${index * 0.1}s`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <div className="relative mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                {item.step}
              </div>
            </div>
            <h3 className="text-base font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200 text-xs leading-relaxed font-medium">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}