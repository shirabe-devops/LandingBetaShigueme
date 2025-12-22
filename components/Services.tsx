import React from 'react';
import { MorphingCardStack, type CardData } from './ui/morphing-card-stack';
import { BarChart3, Coins, Layers, TrendingUp, ShieldCheck } from 'lucide-react';

const serviceCards: CardData[] = [
  {
    id: "1",
    title: "Adequação à Reforma",
    description: "Prepare-se para o IBS e CBS. Análise preditiva de impacto da unificação tributária no seu ecossistema financeiro para 2026.",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    id: "2",
    title: "Recuperação de Créditos",
    description: "Algoritmos avançados para identificação e resgate de ativos fiscais ocultos antes da transição de modelo tributário.",
    icon: <Coins className="h-6 w-6" />,
  },
  {
    id: "3",
    title: "BPO Financeiro 4.0",
    description: "Terceirização digital completa. Dashboards em tempo real e conformidade automatizada com as novas regras fiscais.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    id: "4",
    title: "Planejamento Estratégico",
    description: "Navegação inteligente pelo período de transição (2026-2033). Otimização fiscal considerando o novo IVA Dual.",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    id: "5",
    title: "Auditoria Inteligente",
    description: "Monitoramento contínuo via IA para prevenir riscos e garantir 100% de compliance com as obrigações acessórias.",
    icon: <ShieldCheck className="h-6 w-6" />,
  },
];

export const Services: React.FC = () => {
  return (
    <div id="services" className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-cyan-400 font-semibold tracking-widest uppercase text-xs mb-3 flex items-center justify-center md:justify-start gap-2">
            <span className="w-8 h-[1px] bg-cyan-400"></span>
            Nossas Soluções
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ecossistema de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Inteligência</span>
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto md:mx-0">
            Escolha o formato que melhor se adapta à sua visualização. Alterne entre pilha, grade ou lista para explorar nossas verticais de consultoria.
          </p>
        </div>

        {/* Morphing Card Stack Section */}
        <div className="w-full flex justify-center items-center py-10">
          <MorphingCardStack cards={serviceCards} className="w-full" />
        </div>

        {/* Feature Grid for SEO and Context */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-slate-800 pt-12">
           <div className="group cursor-default">
              <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">Compliance Fiscal</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Conformidade total com as normas vigentes e futuras.</p>
           </div>
           <div className="group cursor-default">
              <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">Gestão de Caixa</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Otimização de fluxo e resgate de tributos acumulados.</p>
           </div>
           <div className="group cursor-default">
              <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">Segurança Digital</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Dados protegidos e auditoria por IA em tempo real.</p>
           </div>
           <div className="group cursor-default">
              <h4 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">Expertise Local</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Time sênior com vivência no cenário tributário brasileiro.</p>
           </div>
        </div>
      </div>
    </div>
  );
};