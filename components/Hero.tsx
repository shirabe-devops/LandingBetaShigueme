import React, { useState, useEffect } from 'react';
import { IconCheck, IconArrowRight } from './Icons';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Dados Estruturados (Schema Markup)
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Shigueme Consultoria Tributária",
    "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2072&auto=format&fit=crop",
    "description": "Especialistas em Reforma Tributária, IVA Dual (IBS e CBS) e BPO Financeiro.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "addressCountry": "BR"
    },
    "priceRange": "$$"
  };

  return (
    <div id="home" className="relative min-h-[100dvh] flex items-center justify-center bg-slate-900 overflow-hidden">
      {/* SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />

      {/* 1. Background Video Full-Screen */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Vídeo de Background representando Inteligência de Dados */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          className="w-full h-full object-cover scale-105"
        >
          {/* Link direto para um vídeo de stock royalty-free com tema tecnológico/azul */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-dots-and-lines-background-3126-large.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        {/* Gradient Overlay Profissional - Essencial para contraste do texto sobre o vídeo */}
        <div className="absolute inset-0 bg-slate-900/80 md:bg-slate-900/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/80"></div>
        
        {/* Textura de Grid sutil para dar ar técnico */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

        {/* Efeito Espelho/Distorção High-Tech no Topo */}
        <div 
          className="absolute top-0 left-0 right-0 h-[35vh] z-10 pointer-events-none"
          style={{ 
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
          }}
        >
          {/* Camada de Desfoque (Distortion) */}
          <div className="absolute inset-0 backdrop-blur-[2px]"></div>
          
          {/* Camada de Brilho Especular (Mirror Reflection) */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-400/10 via-white/5 to-transparent mix-blend-overlay"></div>
          
          {/* Linha de Grade Sutil para Estética Tech */}
          <div className="absolute inset-0 opacity-10" 
               style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '100% 40px' }}>
          </div>
        </div>
      </div>

      {/* 2. Content Container - Centralizado */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-semibold mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="relative flex h-2 w-2 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Prontos para a Reforma Tributária 2026
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
            Inteligência <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white animate-pulse-slow">Tributária</span> para o seu Negócio.
          </h1>

          {/* Descrição */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto border-none pl-0 bg-transparent rounded-none">
            Transforme a complexidade fiscal em vantagem competitiva. 
            Auditoria, compliance e planejamento estratégico para maximizar seus lucros.
          </p>

          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
            <a 
              href="#contact" 
              className="group relative w-full sm:w-auto px-8 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg rounded-xl shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] transition-all overflow-hidden border border-blue-400/20"
            >
              <span className="relative z-10 flex items-center justify-center">
                Agendar Diagnóstico
                <IconArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
            </a>
            
            <a 
              href="#services" 
              className="w-full sm:w-auto px-8 py-5 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-xl hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md flex items-center justify-center shadow-lg"
            >
              Nossos Serviços
            </a>
          </div>

          {/* Features */}
          <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-12 text-sm text-slate-400 font-medium opacity-80">
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm">
              <IconCheck className="w-5 h-5 text-green-400" />
              <span>Recuperação de Créditos</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm">
              <IconCheck className="w-5 h-5 text-green-400" />
              <span>BPO Financeiro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};