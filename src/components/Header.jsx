import React from 'react';
import { Rocket, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#top" className="flex items-center gap-2 font-semibold text-gray-900">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 grid place-items-center text-white">
              <Rocket size={18} />
            </div>
            <span className="text-lg">x-voice</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#how" className="hover:text-gray-900">How it works</a>
            <a href="#pricing" className="hover:text-gray-900">Pricing</a>
            <a href="#faq" className="hover:text-gray-900">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+919025272265" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-800 hover:text-gray-900">
              <Phone size={16} /> +91 90252 72265
            </a>
            <a href="mailto:support@aisa-x.ai" className="inline-flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-md bg-gray-900 hover:bg-gray-800">
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
