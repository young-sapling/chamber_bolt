import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold text-white">One in the Chamber</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Growing businesses seamlessly and affordably with an AI-driven marketing solution
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 One in the Chamber. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}