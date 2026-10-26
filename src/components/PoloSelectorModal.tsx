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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              <MessageCircle className="w-3.5 h-3.5" />
              Atendimento WhatsApp
            </div>
            <h3 id="polo-modal-title" className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              Selecione o polo de atendimento
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {target?.itemName && (
          <div className="mb-5 p-3.5 rounded-2xl bg-blue-50/70 border border-blue-100">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-0.5">
              Item selecionado
            </span>
            <p className="text-sm font-bold text-gray-900">{target.itemName}</p>
          </div>
        )}

        <p className="text-xs text-gray-500 mb-4 leading-relaxed font-normal">
          A VãBora Soluções atende todo o Brasil com pronta entrega e suporte dedicado a partir de dois polos operacionais:
        </p>

        {/* Polos choices */}
        <div className="space-y-3">
          {/* Curitiba */}
          <button
            type="button"
            onClick={() => handleSelect('curitiba', getPoloUrl(CONTACT_INFO.units.curitiba.rawPhone))}
            className="w-full text-left p-4 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-600 transition-all duration-200 group flex items-center justify-between shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Polo Curitiba / PR
                  </span>
                  {preferredPolo === 'curitiba' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold shadow-sm">
                      Preferido
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 block mt-0.5 font-mono">
                  WhatsApp: {CONTACT_INFO.units.curitiba.phone}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </button>

          {/* Serra Talhada */}
          <button
            type="button"
            onClick={() => handleSelect('serraTalhada', getPoloUrl(CONTACT_INFO.units.serraTalhada.rawPhone))}
            className="w-full text-left p-4 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-600 transition-all duration-200 group flex items-center justify-between shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Polo Serra Talhada / PE
                  </span>
                  {preferredPolo === 'serraTalhada' && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-600 text-white font-bold shadow-sm">
                      Preferido
                    </span>
                  )}
                </div>
                <span className="text-xs text-gray-500 block mt-0.5 font-mono">
                  WhatsApp: {CONTACT_INFO.units.serraTalhada.phone}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
          </button>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400 font-medium">
          <span>Mensagem pré-preenchida com o item selecionado</span>
          <span className="text-gray-600 font-semibold">Atendimento oficial</span>
        </div>
      </div>
    </div>
  );
};

export default PoloSelectorModal;
