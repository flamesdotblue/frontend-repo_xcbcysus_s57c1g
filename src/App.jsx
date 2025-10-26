import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
