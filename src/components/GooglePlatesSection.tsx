import React from 'react';
import { Star, Shield, Sparkles } from 'lucide-react';
import { ProductItemCard } from './ProductItemCard';
import { PLACAS_PLANAS_PADRAO, PLACAS_PLANAS_PERSONALIZADAS, PLACAS_EM_L } from '../data/catalog';

export interface GooglePlatesSectionProps {
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
      className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 mb-3 uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Foco em Avaliações no Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Displays Inteligentes para Google Avaliações
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Facilite o acesso dos seus clientes ao perfil oficial da sua empresa no Google. Escolha entre modelos compactos de mesa 10 × 10 cm em acrílico 3 mm ou displays premium em L de 11 × 16 cm resinados para balcão e recepção.
          </p>
        </div>

        {/* Google Products Carousel Mobile (snap-x), Grid no Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible mb-14">
          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 flex flex-col">
            <ProductItemCard
              product={googlePadraoPlana}
              onOpenContact={onOpenContact}
              onOpenZoom={onOpenZoom}
            />
          </div>
          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 flex flex-col">
            <ProductItemCard
              product={googlePersonalizadaPlana}
              onOpenContact={onOpenContact}
              onOpenZoom={onOpenZoom}
            />
          </div>
          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 flex flex-col">
            <ProductItemCard
              product={googleLPadrao}
              onOpenContact={onOpenContact}
              onOpenZoom={onOpenZoom}
            />
          </div>
          <div className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 flex flex-col">
            <ProductItemCard
              product={googleLPersonalizada}
              onOpenContact={onOpenContact}
              onOpenZoom={onOpenZoom}
            />
          </div>
        </div>

        {/* Reputation Protector Spotlight Box - Clean White Card */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gray-50 border border-gray-200/90 relative overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Quer ir além da placa de avaliação?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
                Conheça o Protetor de Reputação
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Quer ir além da placa? Conheça o Protetor de Reputação e veja como ele pode ajudar a organizar o feedback dos seus clientes e reverter experiências negativas antes delas irem para o público.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-gray-200 text-xs text-gray-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    <strong className="text-gray-900">Placa Personalizada Google + Protetor:</strong>
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-base font-extrabold text-gray-900 font-mono">R$ 119,90</span>
                  <span className="text-xs text-blue-600 font-bold">+ R$ 19,90/mês</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="#protetor-reputacao"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-bold border border-gray-300 transition-all text-center shadow-sm"
              >
                Como funciona o Protetor
              </a>
              <button
                type="button"
                onClick={() =>
                  onOpenContact('Combo Placa Personalizada Google + Protetor de Reputação (R$ 119,90 + R$ 19,90/mês)')
                }
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all text-center"
              >
                Garantir este Combo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GooglePlatesSection;
