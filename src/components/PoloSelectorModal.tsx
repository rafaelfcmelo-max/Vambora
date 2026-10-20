import React, { useEffect } from 'react';
import { X, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export interface WhatsAppTarget {
  itemName?: string;
  itemType?: 'product' | 'service' | 'combo' | 'general';
  customMessage?: string;
}

interface PoloSelectorModalProps {
  isOpen: boolean;
  target: WhatsAppTarget | null;
  onClose: () => void;
  preferredPolo?: 'curitiba' | 'serraTalhada' | null;
  onSelectPolo?: (polo: 'curitiba' | 'serraTalhada') => void;
}

export const PoloSelectorModal: React.FC<PoloSelectorModalProps> = ({
  isOpen,
  target,
  onClose,
  preferredPolo,
  onSelectPolo,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const buildMessage = () => {
    if (target?.customMessage) {
      return target.customMessage;
    }
    if (target?.itemName) {
      if (target.itemType === 'product') {
        return `Olá! Tenho interesse no produto ${target.itemName} da VãBora Soluções. Poderia me passar mais informações?`;
      }
      return `Olá! Conheci a VãBora Soluções pelo site e gostaria de saber mais sobre ${target.itemName}.`;
    }
    return 'Olá! Conheci a VãBora Soluções pelo site e gostaria de saber mais sobre as soluções de vocês.';
  };

  const messageText = buildMessage();
  const encodedMessage = encodeURIComponent(messageText);

  const getPoloUrl = (rawPhone: string) => {
    return `https://wa.me/${rawPhone}?text=${encodedMessage}`;
  };

  const handleSelect = (polo: 'curitiba' | 'serraTalhada', url: string) => {
    if (onSelectPolo) {
      onSelectPolo(polo);
    }
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="polo-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#0B0F14] border border-[#1677FF]/30 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden glow-blue"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#35CFFF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-start justify-between mb-4 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#35CFFF] mb-1">
              <MessageCircle className="w-3.5 h-3.5" />
              Atendimento WhatsApp
            </div>
            <h3 id="polo-modal-title" className="text-xl font-bold text-white tracking-tight">
              Selecione o polo de atendimento
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {target?.itemName && (
          <div className="mb-5 p-3.5 rounded-xl bg-[#101B32]/60 border border-[#1677FF]/20 relative z-10">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
              Item selecionado
            </span>
            <p className="text-sm font-semibold text-white">{target.itemName}</p>
          </div>
        )}

        <p className="text-xs text-slate-400 mb-4 leading-relaxed relative z-10">
          A VãBora Soluções atende todo o Brasil com pronta entrega e suporte dedicado a partir de dois polos operacionais:
        </p>

        {/* Polos choices */}
        <div className="space-y-3 relative z-10">
          {/* Curitiba */}
          <button
            type="button"
            onClick={() => handleSelect('curitiba', getPoloUrl(CONTACT_INFO.units.curitiba.rawPhone))}
            className="w-full text-left p-4 rounded-xl bg-[#050608] hover:bg-[#101B32]/80 border border-white/10 hover:border-[#1677FF] transition-all duration-200 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#1677FF]/15 border border-[#1677FF]/30 flex items-center justify-center text-[#35CFFF] group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-[#35CFFF] transition-colors">
                    Polo Curitiba / PR
                  </span>
                  {preferredPolo === 'curitiba' && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#35CFFF] font-semibold border border-[#1677FF]/40">
                      Preferido
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400 block mt-0.5">
                  WhatsApp: {CONTACT_INFO.units.curitiba.phone}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>

          {/* Serra Talhada */}
          <button
            type="button"
            onClick={() => handleSelect('serraTalhada', getPoloUrl(CONTACT_INFO.units.serraTalhada.rawPhone))}
            className="w-full text-left p-4 rounded-xl bg-[#050608] hover:bg-[#101B32]/80 border border-white/10 hover:border-[#1677FF] transition-all duration-200 group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#1677FF]/15 border border-[#1677FF]/30 flex items-center justify-center text-[#35CFFF] group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-[#35CFFF] transition-colors">
                    Polo Serra Talhada / PE
                  </span>
                  {preferredPolo === 'serraTalhada' && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#35CFFF] font-semibold border border-[#1677FF]/40">
                      Preferido
                    </span>
                  )}
                </div>
                <span className="text-xs text-slate-400 block mt-0.5">
                  WhatsApp: {CONTACT_INFO.units.serraTalhada.phone}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 relative z-10">
          <span>Mensagem pré-preenchida com o item selecionado</span>
          <span className="text-slate-400">Atendimento oficial</span>
        </div>
      </div>
    </div>
  );
};
