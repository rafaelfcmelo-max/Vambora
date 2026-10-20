import React from 'react';
import { Star, Shield, ArrowRight, Sparkles } from 'lucide-react';
import { ProductItemCard } from './ProductItemCard';
import { PLACAS_PLANAS_PADRAO, PLACAS_PLANAS_PERSONALIZADAS, PLACAS_EM_L } from '../data/catalog';

interface GooglePlatesSectionProps {
  onOpenContact: (productName: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export const GooglePlatesSection: React.FC<GooglePlatesSectionProps> = ({
  onOpenContact,
  onOpenZoom,
}) => {
  const googlePadraoPlana = PLACAS_PLANAS_PADRAO.products.find(
    (p) => p.id === 'plano-google-padrao'
  )!;
  const googlePersonalizadaPlana = PLACAS_PLANAS_PERSONALIZADAS.products.find(
    (p) => p.id === 'plano-personalizado-google'
  )!;
  const googleLPadrao = PLACAS_EM_L.products.find((p) => p.id === 'l-google-padrao')!;
  const googleLPersonalizada = PLACAS_EM_L.products.find(
    (p) => p.id === 'l-google-personalizada'
  )!;

  return (
    <section
      id="produtos-google"
      className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#050608] scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-amber-500/30 text-xs font-semibold text-amber-400 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>Foco em Avaliações no Google</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Displays Inteligentes para Google Avaliações
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Facilite o acesso dos seus clientes ao perfil oficial da sua empresa no Google. Escolha entre modelos compactos de mesa 10 × 10 cm ou displays premium em L 11 × 16 cm para balcão e recepção.
          </p>
        </div>

        {/* Google Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          <ProductItemCard
            product={googlePadraoPlana}
            onOpenContact={onOpenContact}
            onOpenZoom={onOpenZoom}
          />
          <ProductItemCard
            product={googlePersonalizadaPlana}
            onOpenContact={onOpenContact}
            onOpenZoom={onOpenZoom}
          />
          <ProductItemCard
            product={googleLPadrao}
            onOpenContact={onOpenContact}
            onOpenZoom={onOpenZoom}
          />
          <ProductItemCard
            product={googleLPersonalizada}
            onOpenContact={onOpenContact}
            onOpenZoom={onOpenZoom}
          />
        </div>

        {/* Reputation Protector Spotlight Box - Directly Below Google Products (Sections 4.5 & 8) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-[#0D1118] border border-[#1677FF]/40 relative overflow-hidden glow-border">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#35CFFF] uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4 text-[#35CFFF]" />
                <span>Quer ir além da placa de avaliação?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                Conheça o Protetor de Reputação
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Quer ir além da placa? Conheça o Protetor de Reputação e veja como ele pode ajudar a organizar o feedback dos seus clientes e reverter experiências negativas antes delas irem para o público.
              </p>

              <div className="p-3.5 rounded-xl bg-[#151B25] border border-white/5 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#35CFFF] shrink-0" />
                  <span>
                    <strong>Combo Placa Personalizada Google + Protetor:</strong>
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-black text-white font-mono">R$ 149,90</span>
                  <span className="text-xs text-[#35CFFF] font-semibold">+ R$ 29,90/mês</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="#protetor-reputacao"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#151B25] hover:bg-[#1677FF] text-white text-xs sm:text-sm font-bold border border-white/10 transition-colors text-center"
              >
                Como funciona o Protetor
              </a>
              <button
                type="button"
                onClick={() =>
                  onOpenContact('Combo Placa Personalizada Google + Protetor de Reputação (R$ 149,90 + R$ 29,90/mês)')
                }
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Solicitar Combo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
