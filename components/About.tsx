import React from 'react';

export const About: React.FC = () => {
  return (
    <div id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Image Section */}
          <div className="mb-12 lg:mb-0 relative">
             <div className="absolute top-0 left-0 -ml-4 -mt-4 w-24 h-24 bg-slate-100 rounded-full z-0"></div>
             <div className="absolute bottom-0 right-0 -mr-4 -mb-4 w-32 h-32 bg-blue-50 rounded-full z-0"></div>
             
             <img 
               src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop" 
               alt="Análise de dados tributários e contábeis em escritório moderno" 
               className="relative z-10 rounded-2xl shadow-2xl w-full h-auto object-cover"
             />
             
             <div className="absolute bottom-8 right-8 z-20 bg-white p-6 rounded-lg shadow-xl max-w-xs hidden md:block border border-slate-100">
               <div className="flex items-center gap-3 mb-2">
                 <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">AM</div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-xs text-slate-400">+5</div>
                 </div>
               </div>
               <p className="text-slate-700 font-bold text-sm">Equipe Especializada</p>
               <p className="text-slate-500 text-xs mt-1">Focada na sua conformidade fiscal.</p>
             </div>
          </div>
          
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Sobre Nós</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Seus parceiros na Nova Era da Tributação.</h3>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-6">
                A <strong>Shigueme Consultoria Tributária</strong> está na vanguarda da modernização fiscal. Com a aprovação da Reforma Tributária sobre o Consumo, o Brasil caminha para um sistema baseado na <strong>Simplicidade, Transparência e Justiça Fiscal</strong>.
              </p>
              <p className="mb-6">
                Nossa missão é descomplicar a migração do antigo sistema (PIS, COFINS, IPI, ICMS, ISS) para o novo <strong>IVA Dual</strong>. Utilizamos inteligência de dados para garantir que sua empresa aproveite o fim da cumulatividade e a desoneração de investimentos e exportações.
              </p>
              <p>
                Atendemos empresas que buscam não apenas conformidade, mas vantagem competitiva através de um planejamento tributário alinhado ao futuro econômico do país.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-blue-600 hover:bg-slate-100 transition-colors">
                <h4 className="font-bold text-slate-900">Transparência</h4>
                <p className="text-sm text-slate-600 mt-1">Clareza total sobre a incidência de IBS e CBS.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-green-500 hover:bg-slate-100 transition-colors">
                <h4 className="font-bold text-slate-900">Eficiência</h4>
                <p className="text-sm text-slate-600 mt-1">Eliminação da cumulatividade e resíduos tributários.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};