import React, { useState } from 'react';
import { Smartphone, Check, Sparkles, ArrowRight } from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/catalog';

export interface BioSiteShowcaseSectionProps {
  onOpenContact: (planName: string) => void;
}

export const BioSiteShowcaseSection: React.FC<BioSiteShowcaseSectionProps> = ({ onOpenContact }) => {
  const [selectedPlan] = useState<'essencial' | 'profissional' | 'completo'>('profissional');

  const biositePlans = DIGITAL_SERVICES.filter((s) => s.id.startsWith('biosite'));

  return (
    <section id="biosites" className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Smartphone className="w-3.5 h-3.5 text-blue-600" />
            <span>Presença Digital no Smartphone</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Seus principais links em uma página com a identidade da sua marca.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4 font-normal">
            Reúna seus canais em uma página organizada, com apresentação visual personalizada e acesso rápido às informações que seus clientes procuram.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed font-normal">
            Uma página simples de links resolve uma necessidade básica. Um BioSite personalizado permite trabalhar melhor a apresentação da marca e organizar a jornada do cliente conforme os recursos contratados.
          </p>
        </div>

        {/* 3 Plans Mobile Snap Carousel, Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible mb-12">
          {biositePlans.map((plan) => {
            const isProf = plan.id.includes('profissional');

            return (
              <div
                key={plan.id}
                className={`snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 ${
                  isProf
                    ? 'border-blue-600 bg-white ring-2 ring-blue-100 shadow-md'
                    : 'border-gray-200 bg-gray-50'
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
                    <div className="p-3 rounded-2xl bg-white border border-gray-200 text-[10px] text-gray-500 mb-5 shadow-sm">
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
              </div>
            );
          })}
        </div>

        {/* Honest Comparison Callout */}
        <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600 shadow-sm">
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
            className="px-5 py-2.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 font-bold transition-all shrink-0 border border-gray-300 shadow-sm"
          >
            Ver Combos com BioSite
          </a>
        </div>
      </div>
    </section>
  );
};

export default BioSiteShowcaseSection;
