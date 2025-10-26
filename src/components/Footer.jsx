import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-white text-2xl font-extrabold">x-voice</div>
            <p className="mt-4 text-gray-400 max-w-md">AI voice agents that help you qualify leads, support customers and grow revenue around the clock.</p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone size={16} /> +91 90252 72265</div>
              <div className="flex items-center gap-3"><Mail size={16} /> support@aisa-x.ai</div>
              <div className="flex items-center gap-3"><Mail size={16} /> info@aisa-x.ai</div>
              <div className="flex items-start gap-3"><MapPin size={16} className="mt-0.5" /> 4-1-130m, Arasu Nagar, Palani ChettiPatti, Theni. 625531</div>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold">Product</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-white" href="#features">Features</a></li>
              <li><a className="hover:text-white" href="#how">How it works</a></li>
              <li><a className="hover:text-white" href="#pricing">Pricing</a></li>
              <li><a className="hover:text-white" href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold">Get in touch</div>
            <div className="mt-4 space-y-3 text-sm">
              <a href="mailto:support@aisa-x.ai" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-gray-900 font-semibold hover:bg-gray-100">Email support</a>
              <a href="tel:+919025272265" className="block hover:text-white">Call now</a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} x-voice. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
