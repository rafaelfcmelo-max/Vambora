import React from 'react';
import { MessageCircle, Check, Sparkles, Building2, ShieldCheck, Zap, Gift, ArrowRight } from 'lucide-react';
import { COMMERCIAL_COMBOS } from '../data/catalog';
import { useCart } from '../context/CartContext';

interface CombosSectionProps {
  onOpenContact: (comboName: string) => void;
}

export const CombosSection: React.FC<CombosSectionProps> = ({ onOpenContact }) => {
  const { addItem } = useCart();

  const getBadgeIcon = (id: string) => {
    if (id.includes('blindagem')) return ShieldCheck;
    if (id.includes('hotelaria')) return Building2;
    return Zap;
  };

  return (
    <section id="combos-comerciais" className="py-20 px-4 sm:px-8 bg-[#0D1118]/80 border-t border-white/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#35CFFF]" />
            <span>Pacotes Econômicos Integrados</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Combos e Ofertas Especiais
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Soluções completas pensadas para maximizar o retorno do seu investimento com vantagens comerciais de pacote e entrega rápida configurada.
          </p>
        </div>

        {/* Combos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {COMMERCIAL_COMBOS.map((combo) => {
            const BadgeIcon = getBadgeIcon(combo.id);

            return (
              <div
                key={combo.id}
                className={`relative rounded-2xl bg-[#0D1118] border p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 glow-border ${
                  combo.highlight
                    ? 'border-[#1677FF] shadow-[0_0_30px_rgba(22,119,255,0.2)] bg-[#151B25]/50'
                    : 'border-white/5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#35CFFF] uppercase tracking-wider flex items-center gap-1.5">
                      <BadgeIcon className="w-3.5 h-3.5" />
                      {combo.badge}
                    </span>
                    {combo.highlight && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-[#1677FF]/30 text-[#35CFFF] border border-[#1677FF]/50 font-bold uppercase tracking-wider">
                        Destaque
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {combo.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {combo.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      Itens inclusos:
                    </span>
                    {combo.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#35CFFF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {combo.notes && (
                    <p className="text-[10px] text-slate-500 mb-4 pt-2 border-t border-white/5">
                      {combo.notes}
                    </p>
                  )}
                </div>

                <div>
                  <div className="pt-4 border-t border-white/5 mb-5">
                    <span className="text-xs text-slate-400 block mb-0.5">Investimento:</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                        {combo.price}
                      </span>
                      {combo.monthlyPriceLabel && (
                        <span className="text-xs font-semibold text-[#35CFFF]">
                          {combo.monthlyPriceLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenContact(combo.name)}
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-md ${
                      combo.highlight
                        ? 'bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white shadow-[0_0_20px_rgba(22,119,255,0.35)]'
                        : 'bg-[#151B25] hover:bg-[#1677FF] text-white border border-[#1677FF]/40 hover:border-transparent'
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

        {/* Promoção por Indicação (Section 7) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#151B25] via-[#0D1118] to-[#151B25] border border-[#35CFFF]/30 flex flex-col md:flex-row items-center justify-between gap-6 glow-border">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#35CFFF]/15 border border-[#35CFFF]/40 flex items-center justify-center text-[#35CFFF] shrink-0 mt-1">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#35CFFF] uppercase tracking-wider block mb-1">
                Programa de Indicação VãBora
              </span>
              <h3 className="text-lg font-bold text-white mb-2">
                Indique 3 clientes e ganhe uma Placa Plana 10 × 10 cm
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-2xl">
                O cliente que indicar 3 novos estabelecimentos distintos que concluam suas compras poderá receber uma placa plana 10 × 10 cm gratuita (padrão ou personalizada, de acordo com as regras confirmadas com a equipe).
              </p>
              <span className="text-[10px] text-slate-500 block mt-1.5">
                *Consulte nossa equipe sobre as condições de participação e regras de validação.
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onOpenContact('Indicação de Novos Clientes')}
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-[#151B25] hover:bg-[#1677FF] text-white text-xs font-bold border border-white/10 transition-colors whitespace-nowrap shrink-0 flex items-center justify-center gap-2"
          >
            <span>Saber mais sobre o programa</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
