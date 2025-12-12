import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIAssistant } from './components/AIAssistant';
import { PrivacyPolicy } from './components/PrivacyPolicy';

type Page = 'home' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateToPrivacy = () => setCurrentPage('privacy');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 scroll-smooth">
      {/* 
        A Navbar permanece se estiver na home. 
        Se estiver na Privacy, podemos optar por não mostrar a navbar completa ou 
        mostrar uma versão simplificada, mas por simplicidade, 
        vamos renderizar o conteúdo condicionalmente abaixo.
      */}
      
      {currentPage === 'home' ? (
        <>
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <Clients />
            <Services />
            <About />
            <Contact />
          </main>
          <Footer onOpenPrivacy={navigateToPrivacy} />
          <AIAssistant />
        </>
      ) : (
        <PrivacyPolicy onBack={navigateToHome} />
      )}
    </div>
  );
}

export default App;