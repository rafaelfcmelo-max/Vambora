import React, { useState } from 'react';
import { Smartphone, Check, Sparkles, ArrowRight, Layers, FileText, Clock, Users, HelpCircle } from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/catalog';

interface BioSiteShowcaseSectionProps {
  onOpenContact: (planName: string) => void;
}

export const BioSiteShowcaseSection: React.FC<BioSiteShowcaseSectionProps> = ({ onOpenContact }) => {
  const [selectedPlan, setSelectedPlan] = useState<'essencial' | 'profissional' | 'completo'>('profissional');

  const biositePlans = DIGITAL_SERVICES.filter((s) => s.id.startsWith('biosite'));

  return (
    <section id="biosites" className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#0D1118]/80 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Presença Digital no Smartphone</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Seus principais links em uma página com a identidade da sua marca.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            Reúna seus canais em uma página organizada, com apresentação visual personalizada e acesso rápido às informações que seus clientes procuram.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Uma página simples de links resolve uma necessidade básica. Um BioSite personalizado permite trabalhar melhor a apresentação da marca e organizar a jornada do cliente conforme os recursos contratados.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {biositePlans.map((plan) => {
            const isSelected = plan.id.includes(selectedPlan);
            const isProf = plan.id.includes('profissional');

            return (
              <div
                key={plan.id}
                className={`p-6 sm:p-7 rounded-2xl bg-[#0D1118] border flex flex-col justify-between transition-all duration-300 glow-border ${
                  isProf
                    ? 'border-[#1677FF] shadow-[0_0_25px_rgba(22,119,255,0.2)] bg-[#151B25]/60'
                    : 'border-white/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-[#35CFFF] uppercase tracking-wider">
                      {plan.tagline}
                    </span>
                    {isProf && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1677FF]/30 text-white font-bold uppercase tracking-wider">
                        Recomendado
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5">{plan.description}</p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Recursos inclusos:
                    </span>
                    {plan.includes.map((it, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#35CFFF] shrink-0 mt-0.5" />
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>

                  {plan.scopeNote && (
                    <div className="p-2.5 rounded-lg bg-[#050608] border border-white/5 text-[10px] text-slate-400 mb-5">
                      {plan.scopeNote}
                    </div>
                  )}
                </div>

                <div>
                  <div className="pt-4 border-t border-white/5 mb-4 flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Investimento único:</span>
                    <span className="text-2xl font-extrabold text-white font-mono tracking-tight">
                      {plan.price}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenContact(plan.title)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
                      isProf
                        ? 'bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white'
                        : 'bg-[#151B25] hover:bg-[#1677FF] text-white border border-white/10'
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
        <div className="p-6 rounded-2xl bg-[#151B25] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#35CFFF] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block">Quer um pacote de presença digital completa?</strong>
              <span className="text-slate-400">Combine seu BioSite com placa de balcão e cartão NFC com desconto de combo.</span>
            </div>
          </div>
          <a
            href="#combos-comerciais"
            className="px-4 py-2.5 rounded-xl bg-[#0D1118] hover:bg-[#1677FF] text-white font-semibold transition-colors shrink-0 border border-white/10"
          >
            Ver Combos com BioSite
          </a>
        </div>
      </div>
    </section>
  );
};
