import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';
import UseCases from './components/UseCases.jsx';
import IntegrationsPage from './components/IntegrationsPage.jsx';
import Docs from './components/Docs.jsx';
import PricingPage from './components/PricingPage.jsx';

function Home() {
  return (
    <>
      <Hero />
      <Sections />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/use-cases" element={<UseCases />} />
            <Route path="/integrations" element={<IntegrationsPage />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
