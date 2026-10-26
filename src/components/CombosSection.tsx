import React from 'react';
import { MessageCircle, Check, Sparkles, Building2, ShieldCheck, Zap, Gift, ArrowRight } from 'lucide-react';
import { COMMERCIAL_COMBOS } from '../data/catalog';
import { useCart } from '../context/CartContext';

export interface CombosSectionProps {
  onOpenContact: (comboName: string) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({ onOpenContact }) => {
  const getBadgeIcon = (id: string) => {
    if (id.includes('blindagem')) return ShieldCheck;
    if (id.includes('hotelaria')) return Building2;
    return Zap;
  };

  return (
    <section id="combos" className="py-16 lg:py-20 px-4 sm:px-8 bg-gray-50 border-b border-gray-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Pacotes Econômicos Integrados</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Combos e Ofertas Especiais
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Soluções completas pensadas para maximizar o retorno do seu investimento com vantagens comerciais de pacote e entrega rápida configurada.
          </p>
        </div>

        {/* Combos Mobile Snap Carousel, Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible mb-14">
          {COMMERCIAL_COMBOS.map((combo) => {
            const BadgeIcon = getBadgeIcon(combo.id);

            return (
              <div
                key={combo.id}
                className={`snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 relative rounded-3xl bg-white border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 ${
                  combo.highlight
                    ? 'border-blue-600 ring-2 ring-blue-100 shadow-md'
                    : 'border-gray-200/90'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {combo.badge}
                    </span>
                    {combo.highlight && (
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-bold uppercase tracking-wider shadow-sm">
                        Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {combo.name}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-6 font-normal">
                    {combo.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      Itens inclusos:
                    </span>
                    {combo.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {combo.notes && (
                    <p className="text-[10px] text-gray-400 mb-4 pt-2 border-t border-gray-100">
                      {combo.notes}
                    </p>
                  )}
                </div>

                <div>
                  <div className="pt-4 border-t border-gray-100 mb-5">
                    <span className="text-xs text-gray-400 block mb-0.5">Investimento:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-mono tracking-tight">
                        {combo.price}
                      </span>
                      {combo.monthlyPriceLabel && (
                        <span className="text-xs font-bold text-blue-600">
                          {combo.monthlyPriceLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenContact(combo.name)}
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md active:scale-95 ${
                      combo.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/25'
                        : 'bg-gray-900 hover:bg-black text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>{combo.ctaText || 'Garantir este Combo'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Promoção por Indicação (Clean White Card) */}
        <div className="p-7 sm:p-9 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-1">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Programa de Indicação VãBora
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Indique 3 clientes e ganhe uma Placa Plana 10 × 10 cm
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-2xl font-normal">
                O cliente que indicar 3 novos estabelecimentos distintos que concluam suas compras poderá receber uma placa plana 10 × 10 cm gratuita (padrão ou personalizada, de acordo com as regras confirmadas com a equipe).
              </p>
              <span className="text-[10px] text-gray-400 block mt-1.5 font-medium">
                *Consulte nossa equipe sobre as condições de participação e regras de validação.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenContact('Indicação de Novos Clientes')}
            className="w-full md:w-auto px-6 py-3.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 text-xs font-bold border border-gray-200 transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2 active:scale-95 shadow-sm"
          >
            <span>Saber mais sobre o programa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CombosSection;
