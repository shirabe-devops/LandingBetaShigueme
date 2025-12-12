import React, { useState, useEffect } from 'react';
import { IconWhatsApp, IconX } from './Icons';

export const AIAssistant: React.FC = () => {
  const [showBalloon, setShowBalloon] = useState(false);
  const phoneNumber = '5544988601424'; // Substitua pelo número real da empresa
  const message = encodeURIComponent('Olá, gostaria de falar com um especialista sobre a Reforma Tributária.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    // Exibe o balão automaticamente após 2.5 segundos
    const timer = setTimeout(() => {
      setShowBalloon(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Balão de Mensagem (Animação Pop-up) */}
      <div 
        className={`pointer-events-auto bg-white text-slate-800 px-5 py-4 rounded-2xl shadow-2xl border border-slate-100 max-w-[280px] mb-4 relative transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right ${
          showBalloon ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-10 translate-x-4 pointer-events-none'
        }`}
      >
        <p className="text-sm font-medium leading-relaxed">
          Olá, se precisar de ajuda ou informações, basta clicar aqui! 👋
        </p>
        
        {/* Botão de Fechar Balão */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setShowBalloon(false);
          }}
          className="absolute -top-3 -left-3 bg-slate-50 hover:bg-red-50 hover:text-red-500 text-slate-400 rounded-full p-1.5 shadow-sm transition-colors border border-slate-200"
          aria-label="Fechar mensagem"
        >
          <IconX className="w-3 h-3" />
        </button>

        {/* Seta do Balão */}
        <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white transform rotate-45 border-r border-b border-slate-100"></div>
      </div>

      {/* Botão WhatsApp com Animação */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center justify-center w-16 h-16 bg-green-500 rounded-full text-white shadow-[0_4px_14px_0_rgba(74,222,128,0.39)] hover:shadow-[0_6px_20px_rgba(74,222,128,0.23)] hover:bg-green-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Falar no WhatsApp"
        onMouseEnter={() => setShowBalloon(true)}
      >
        {/* Animação de "Onda" (Pulse Ring) */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-30 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
        
        <IconWhatsApp className="w-8 h-8 relative z-10" />
      </a>
    </div>
  );
};