import React from 'react';
import { Smartphone, Check, Sparkles, ArrowRight, ExternalLink, QrCode } from 'lucide-react';
import { motion } from 'framer-motion';
import { DIGITAL_SERVICES } from '../data/catalog';

export interface BioSiteShowcaseSectionProps {
  onOpenContact: (planName: string) => void;
}

export const BioSiteShowcaseSection: React.FC<BioSiteShowcaseSectionProps> = ({ onOpenContact }) => {
  const biositePlans = DIGITAL_SERVICES.filter((s) => s.id.startsWith('biosite'));
  const recommendedPlan = biositePlans.find((p) => p.id.includes('profissional')) || biositePlans[0];

  return (
    <section id="biosites" className="py-20 lg:py-28 px-4 sm:px-8 border-b border-gray-200 bg-gray-50 scroll-mt-28 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Bloco Split: Copy Persuasiva (Esquerda) vs Demonstração Real do MultiLinks (Direita) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Lado Esquerdo: Textos Persuasivos */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>Demonstração Real • Interaja ao Vivo</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Seu negócio inteiro. <br className="hidden sm:inline" />
              <span className="text-blue-600">Em uma página pensada para celular.</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-2xl mx-auto lg:mx-0">
              Reúna seus principais canais em uma página ultra-rápida, com a identidade visual da sua marca e acesso imediato para seus clientes: cardápio, WhatsApp, localização e avaliação 5 estrelas no Google.
            </p>

            {/* Destaques de Valor Wistag */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">Sem Mensalidades</h4>
                  <p className="text-[11px] text-gray-500">Pague uma única vez pelo desenvolvimento</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white p-3.5 rounded-2xl border border-gray-200/80 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                  <QrCode className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900">QR Code e NFC</h4>
                  <p className="text-[11px] text-gray-500">Pronto para aproximar no balcão e cartões</p>
                </div>
              </div>
            </div>

            {/* Chamada para Interação no Celular ao Lado */}
            <div className="p-4 rounded-2xl bg-white border border-blue-100 flex items-center gap-3 text-xs text-gray-600 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>
                <strong>Demonstração ativa ao lado:</strong> Você pode navegar, rolar e clicar nos botões diretamente na tela do celular simulado!
              </span>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => onOpenContact(recommendedPlan.title)}
                className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Quero meu BioSite</span>
                <span className="text-blue-400 font-mono text-sm font-semibold">({recommendedPlan.price})</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
              
              <a
                href="https://multlinks.com/vaborasolucoescontatos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3.5 rounded-full font-medium transition flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Abrir em tela cheia</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </a>
            </div>
          </motion.div>

          {/* Lado Direito: Mockup de Celular com Iframe Real Interativo (MultiLinks) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Blob de fundo (Wistag Glow Suave) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 pointer-events-none" />

            {/* Mockup do Celular com Animação de Flutuação Contínua */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative w-[310px] sm:w-[340px] bg-gray-900 rounded-[50px] p-3.5 shadow-2xl border-4 border-gray-800"
            >
              {/* Entalhe Superior / Dynamic Island */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 bg-gray-900 rounded-full mr-2 border border-gray-800" />
                <div className="w-2.5 h-2.5 bg-blue-900/60 rounded-full" />
              </div>

              {/* Tag Flutuante indicando Interatividade Real */}
              <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg z-30 flex items-center gap-1.5 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                Link Real Interativo
              </div>

              {/* Tela do Celular com Iframe Real */}
              <div className="w-full bg-white rounded-[40px] overflow-hidden pt-7 pb-2 flex flex-col justify-between h-[580px] sm:h-[620px] border border-gray-200 relative">
                <iframe
                  src="https://multlinks.com/vaborasolucoescontatos"
                  title="Demonstração Real do BioSite VãBora Soluções"
                  className="w-full h-full border-0 rounded-[36px]"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>

              {/* Botões laterais de hardware falso */}
              <div className="absolute -left-[6px] top-24 w-[3px] h-10 bg-gray-700 rounded-l-md pointer-events-none" />
              <div className="absolute -left-[6px] top-38 w-[3px] h-10 bg-gray-700 rounded-l-md pointer-events-none" />
              <div className="absolute -right-[6px] top-28 w-[3px] h-14 bg-gray-700 rounded-r-md pointer-events-none" />
            </motion.div>
          </div>

        </div>

        {/* Comparativo dos 3 Planos (Essencial, Profissional, Completo) */}
        <div id="planos-detalhes" className="pt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Escolha o formato ideal para seu negócio
            </h3>
            <p className="text-sm text-gray-500 mt-2">
              Todas as opções contam com suporte na configuração e entrega sem mensalidades.
            </p>
          </div>

          {/* Cards com Stagger Scroll Animation no Desktop e Snap no Mobile */}
          <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible mb-10">
            {biositePlans.map((plan, index) => {
              const isProf = plan.id.includes('profissional');

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-2 ${
                    isProf
                      ? 'border-blue-600 bg-white ring-2 ring-blue-100 shadow-md'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                        {plan.tagline}
                      </span>
                      {isProf && (
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-bold uppercase tracking-wider shadow-sm">
                          Recomendado
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed mb-5 font-normal">{plan.description}</p>

                    <div className="space-y-2.5 mb-6">
                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                        Recursos inclusos:
                      </span>
                      {plan.includes.map((it, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </div>
                      ))}
                    </div>

                    {plan.scopeNote && (
                      <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 text-[10px] text-gray-500 mb-5 shadow-sm">
                        {plan.scopeNote}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="pt-4 border-t border-gray-200 mb-4 flex items-baseline justify-between">
                      <span className="text-xs text-gray-400">Investimento único:</span>
                      <span className="text-2xl font-extrabold text-gray-900 font-mono tracking-tight">
                        {plan.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenContact(plan.title)}
                      className={`w-full py-3.5 px-5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2 active:scale-95 ${
                        isProf
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                          : 'bg-gray-900 hover:bg-black text-white'
                      }`}
                    >
                      <span>Quero meu {plan.title.replace('BioSite ', '')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Chamada para Combos com Desconto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-3xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <strong className="text-gray-900 block text-sm">Quer um pacote de presença digital completa?</strong>
                <span className="text-gray-500">Combine seu BioSite com placa de balcão e cartão NFC com desconto de combo.</span>
              </div>
            </div>
            <a
              href="#combos"
              className="px-6 py-2.5 rounded-full bg-gray-900 hover:bg-black text-white font-bold transition-all shrink-0 shadow-sm"
            >
              Ver Combos com BioSite
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BioSiteShowcaseSection;
