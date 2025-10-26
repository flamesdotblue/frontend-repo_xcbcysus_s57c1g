import React from 'react';
import { Sparkles, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="top" className="relative pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
              <Sparkles size={16} /> AI Voice Agents for modern businesses
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Turn conversations into growth with x-voice
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Automate inbound and outbound calls with human-like AI voice agents. Qualify leads, support customers, and follow-up 24/7 across languages.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800">
                Get Started
              </a>
              <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-900 font-semibold hover:bg-gray-50">
                <Play size={18} className="mr-2" /> See it in action
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
              <div>
                <div className="text-2xl font-extrabold text-gray-900">50k+</div>
                <div>Conversations handled</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">30%</div>
                <div>Lower response time</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">24/7</div>
                <div>Always-on support</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-gray-900">15+</div>
                <div>Languages supported</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-orange-300 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white grid place-items-center">
                <div className="text-center p-8">
                  <div className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">Live demo</div>
                  <div className="mt-2 text-3xl font-extrabold text-gray-900">AI voice that feels human</div>
                  <p className="mt-4 text-gray-600 max-w-md mx-auto">
                    Natural speech, real-time understanding, and smart flows that adapt to your callers.
                  </p>
                  <button className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800">
                    <Play size={18} /> Try sample call
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="px-4 py-2 rounded-full bg-white shadow-md border text-sm font-medium text-gray-700">Secure • Fast • Reliable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
