import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How will communication work?",
      answer: "All communication and customer service happens via email and Slack for streamlined, efficient support. No phone calls are available with One in the Chamber. Need more hands-on support? Consider working directly with Chamber Media for a more personalized experience."
    },
    {
      question: "Can AI content really drive growth?",
      answer: "Yes! Our AI is trained on thousands of high-performing campaigns and has consistently delivered 40% better performance metrics including reduced cost per click, lower cost per lead, and improved ROAS for our clients."
    },
    {
      question: "What will my AI content look like?",
      answer: "Your content will be professional, brand-safe, and custom-created for your specific products and audience. Every piece is reverse-engineered from top-performing campaigns to maximize conversion rates while maintaining your brand integrity."
    },
    {
      question: "What are the risks?",
      answer: "As with any marketing, there are always risks involved, but we minimized them with decades of experience growing brands. Most importantly, you still have total control. Our AI creates brand-safe content and campaign optimizations, but you approve all budgets, campaigns, targeting, and creative. You can pause or adjust spending at any time."
    },
    {
      question: "Is ad spend included?",
      answer: "No, ad spend is separate from our service fees. You maintain full control over your advertising budget and can adjust spending based on performance and your business goals."
    },
    {
      question: "What does ad management include?",
      answer: "Complete campaign setup, audience targeting, bid optimization, A/B testing, performance monitoring, and regular optimization adjustments. We handle all technical aspects while you focus on running your business."
    },
    {
      question: "How long is a contract?",
      answer: "You pay at the start of each month on a rolling basis but you can cancel at any time with a written notice in Slack and e-mail. This allows you to scale up or pause services based on your business needs and performance results."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about One in the Chamber
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
              >
                <span className="text-white font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-white transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}