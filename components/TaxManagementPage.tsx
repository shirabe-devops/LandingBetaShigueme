
import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, FileSearch, TrendingDown, ClipboardCheck, MessageSquarePlus } from 'lucide-react';

interface TaxManagementPageProps {
  onBack: () => void;
  onGoToServices: () => void;
}

export const TaxManagementPage: React.FC<TaxManagementPageProps> = ({ onBack, onGoToServices }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('open-chat'));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para Início</span>
          </button>

          <div className="flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium w-fit mx-auto md:mx-0">
               <ShieldCheck className="w-4 h-4" />
               Área de Atuação
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              Gestão <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tributária</span> 360°
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Muito além do compliance. Uma estratégia integrada para reduzir riscos, otimizar custos e preparar sua empresa para o novo cenário do IVA Dual.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
              <button 
                onClick={openChat}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/40 transition-all flex items-center gap-2"
              >
                <MessageSquarePlus className="w-5 h-5" />
                Agendar Consultoria
              </button>
              <button 
                onClick={onGoToServices}
                className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-all"
              >
                Ver Outros Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">O que é nossa Gestão Tributária?</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                É o acompanhamento contínuo e estratégico de todas as obrigações fiscais da sua empresa. Nosso foco é garantir que você pague apenas o que é estritamente necessário por lei, utilizando ferramentas de inteligência para identificar créditos e evitar penalidades.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-colors">
                <FileSearch className="text-blue-400 mb-4 w-8 h-8" />
                <h3 className="text-white font-bold text-xl mb-2">Auditoria e Compliance</h3>
                <p className="text-slate-400 text-sm">Revisão rigorosa de todas as declarações e apurações para garantir 100% de conformidade com o fisco.</p>
              </div>
              
              <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-colors">
                <TrendingDown className="text-cyan-400 mb-4 w-8 h-8" />
                <h3 className="text-white font-bold text-xl mb-2">Engenharia de Custos Fiscais</h3>
                <p className="text-slate-400 text-sm">Análise da cadeia logística e operacional para identificar o regime tributário mais eficiente (Simples, Presumido ou Real).</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] backdrop-blur-sm">
              <h3 className="text-white font-bold text-2xl mb-6">Por que focar na gestão agora?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-blue-500/20 p-1.5 rounded-lg">
                    <ClipboardCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Monitoramento de Riscos</h4>
                    <p className="text-slate-400 text-sm mt-1">Antecipamos possíveis fiscalizações e corrigimos inconsistências antes que se tornem multas.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-cyan-500/20 p-1.5 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Transição para o IVA Dual</h4>
                    <p className="text-slate-400 text-sm mt-1">A Reforma Tributária mudará as regras do jogo. Nossa gestão já prepara sua empresa para o IBS e CBS.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 shrink-0 bg-blue-500/20 p-1.5 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Geração de Fluxo de Caixa</h4>
                    <p className="text-slate-400 text-sm mt-1">A gestão eficiente identifica créditos acumulados que podem ser reinjetados imediatamente no negócio.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20">
               <h4 className="text-white font-bold mb-2">Precisa de um diagnóstico gratuito?</h4>
               <p className="text-slate-400 text-sm mb-6">Nossos especialistas estão prontos para analisar sua estrutura atual sem compromisso.</p>
               <button 
                  onClick={openChat}
                  className="w-full py-3 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Falar com Consultor via IA
                </button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Benefits Banner */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Benefícios da nossa Metodologia</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-400">100%</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Digital</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-400">-30%</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Carga Média</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-400">24/7</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Monitoramento</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-blue-400">ZERO</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Risco Fiscal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation Buttons */}
      <div className="max-w-4xl mx-auto py-20 px-4 flex flex-col md:flex-row gap-4 items-center justify-center">
         <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-all px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Página Inicial</span>
          </button>
          <button 
            onClick={onGoToServices}
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-all px-6 py-3"
          >
            <span>Ver Nossos Serviços</span>
          </button>
      </div>
    </div>
  );
};
