import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, ArrowRight, ShieldCheck, Tag, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../data/catalog';

interface CartDrawerProps {
  preferredPolo: 'curitiba' | 'serraTalhada' | null;
  onSelectPolo: (polo: 'curitiba' | 'serraTalhada') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ preferredPolo, onSelectPolo }) => {
  const {
    items,
    updateQuantity,
    removeItem,
    clearCart,
    subtotal,
    discount,
    totalInitial,
    totalMonthly,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [selectedPolo, setSelectedPolo] = useState<'curitiba' | 'serraTalhada'>(
    preferredPolo || 'curitiba'
  );
  const [customerName, setCustomerName] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  if (!isCartOpen) return null;

  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleCheckoutWhatsApp = () => {
    // Curitiba is the primary commercial channel (Section 11.4)
    const poloData = CONTACT_INFO.units[selectedPolo];
    onSelectPolo(selectedPolo);

    let message = 'Olá! Quero fazer um pedido com a VaBora Soluções.\n\n';

    if (customerName.trim()) {
      message += `Cliente: ${customerName.trim()}\n\n`;
    }

    if (items.length === 1) {
      const item = items[0];
      const isBulk =
        item.bulkThreshold && item.bulkUnitPrice && item.quantity >= item.bulkThreshold;
      const effectiveUnit = isBulk ? item.bulkUnitPrice! : item.unitPrice;
      const itemTotal = effectiveUnit * item.quantity;

      message += `Produto: ${item.name}\n`;
      message += `Variante: ${item.variation || 'Padrão'}\n`;
      message += `Quantidade: ${item.quantity} un.\n`;
      message += `Preço unitário: ${formatBRL(effectiveUnit)}${isBulk ? ' (preço especial por quantidade)' : ''}\n`;
      message += `Subtotal: ${formatBRL(itemTotal)}\n`;
    } else {
      // First item
      const first = items[0];
      const isBulkFirst =
        first.bulkThreshold && first.bulkUnitPrice && first.quantity >= first.bulkThreshold;
      const effectiveUnitFirst = isBulkFirst ? first.bulkUnitPrice! : first.unitPrice;
      const firstTotal = effectiveUnitFirst * first.quantity;

      message += `Produto: ${first.name}\n`;
      message += `Variante: ${first.variation || 'Padrão'}\n`;
      message += `Quantidade: ${first.quantity} un.\n`;
      message += `Preço unitário: ${formatBRL(effectiveUnitFirst)}\n`;
      message += `Subtotal: ${formatBRL(firstTotal)}\n\n`;

      message += `Outros itens:\n`;
      for (let i = 1; i < items.length; i++) {
        const item = items[i];
        const isBulk =
          item.bulkThreshold && item.bulkUnitPrice && item.quantity >= item.bulkThreshold;
        const effectiveUnit = isBulk ? item.bulkUnitPrice! : item.unitPrice;
        const itemTotal = effectiveUnit * item.quantity;

        message += `- ${item.name} (${item.variation || 'Padrão'}) | Qtd: ${item.quantity} | Un: ${formatBRL(effectiveUnit)} | Subtotal: ${formatBRL(itemTotal)}\n`;
      }
    }

    if (discount > 0) {
      message += `\nDesconto aplicado (a partir de 10 unidades): -${formatBRL(discount)}\n`;
    }

    message += `\nTotal inicial: ${formatBRL(totalInitial)}`;

    if (totalMonthly > 0) {
      message += `\nMensalidades aplicáveis: ${formatBRL(totalMonthly)}/mês (manutenção do servidor e suporte aos envios de e-mail ao lojista)`;
    }

    if (customerNotes.trim()) {
      message += `\n\nObservações: ${customerNotes.trim()}`;
    }

    message += `\n\nPolo de contato: ${poloData.name}`;
    message += `\n\nGostaria de confirmar o pedido e as condições comerciais.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${poloData.rawPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        className="fixed inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-[#0D1118] border-l border-white/10 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#050608]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 flex items-center justify-center text-[#35CFFF]">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 id="cart-drawer-title" className="text-base font-bold text-white tracking-tight">
                  Sacola de Compras
                </h2>
                <span className="text-[11px] text-slate-400">
                  {items.length} {items.length === 1 ? 'item adicionado' : 'itens adicionados'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-slate-400 hover:text-red-400 transition-colors px-2 py-1"
                >
                  Limpar
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Fechar sacola"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 no-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <ShoppingBag className="w-12 h-12 text-slate-600 mb-3 stroke-[1.5]" />
                <p className="text-sm font-semibold text-white mb-1">Sua sacola está vazia</p>
                <p className="text-xs text-slate-400 max-w-xs mb-5">
                  Explore nossos displays em L, placas 10 × 10 cm, cartões NFC e combos para adicionar produtos.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#151B25] hover:bg-[#1677FF] text-white text-xs font-bold border border-white/10 transition-colors"
                >
                  Ver Catálogo
                </button>
              </div>
            ) : (
              items.map((item) => {
                const isBulk =
                  item.bulkThreshold &&
                  item.bulkUnitPrice &&
                  item.quantity >= item.bulkThreshold;
                const effectiveUnit = isBulk ? item.bulkUnitPrice! : item.unitPrice;
                const itemTotal = effectiveUnit * item.quantity;

                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#151B25] border border-white/5 flex gap-3 text-xs"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-black/40 border border-white/5 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-bold text-white text-xs leading-snug truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-slate-500 hover:text-red-400 p-0.5"
                            title="Remover"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {item.variation && (
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            Variante: <strong className="text-white">{item.variation}</strong>
                          </span>
                        )}

                        {item.customizationNotes && (
                          <span className="text-[10px] text-[#35CFFF] block mt-0.5 truncate">
                            Personalização: {item.customizationNotes}
                          </span>
                        )}

                        {isBulk && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-[#35CFFF] font-semibold mt-1">
                            <Tag className="w-2.5 h-2.5" />
                            Preço por quantidade aplicado (10+ un.)
                          </span>
                        )}

                        {item.monthlyUnitPrice && item.monthlyUnitPrice > 0 ? (
                          <span className="text-[10px] text-amber-400 block mt-0.5 font-medium">
                            + {formatBRL(item.monthlyUnitPrice)}/mês recorrente
                          </span>
                        ) : null}
                      </div>

                      {/* Quantity & Item Subtotal */}
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <div className="flex items-center gap-1.5 bg-[#0D1118] px-2 py-0.5 rounded-lg border border-white/10">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-slate-400 hover:text-white p-0.5"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-white px-1.5 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-slate-400 hover:text-white p-0.5"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-[11px] text-slate-400 block">
                            {formatBRL(effectiveUnit)} /un
                          </span>
                          <span className="text-xs font-bold text-white font-mono">
                            {formatBRL(itemTotal)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Controls & Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-white/10 bg-[#050608] space-y-4">
              {/* Optional Client Name Input */}
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Seu Nome ou Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ex: Dra. Mariana / Loja Exemplo"
                  className="w-full px-3 py-1.5 rounded-lg bg-[#0D1118] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF]"
                />
              </div>

              {/* Optional Custom Notes */}
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Observações ou Links desejados
                </label>
                <input
                  type="text"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Ex: Enviar logo em alta / Link do Google Maps"
                  className="w-full px-3 py-1.5 rounded-lg bg-[#0D1118] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF]"
                />
              </div>

              {/* Polo Selector */}
              <div>
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  Polo de Atendimento no WhatsApp:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPolo('curitiba');
                      onSelectPolo('curitiba');
                    }}
                    className={`p-2 rounded-lg text-xs font-medium border text-left transition-all ${
                      selectedPolo === 'curitiba'
                        ? 'bg-[#1677FF] text-white border-[#35CFFF]'
                        : 'bg-[#0D1118] text-slate-400 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="font-bold block">Curitiba / PR (Principal)</span>
                    <span className="text-[10px] opacity-80">(41) 98844-2761</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPolo('serraTalhada');
                      onSelectPolo('serraTalhada');
                    }}
                    className={`p-2 rounded-lg text-xs font-medium border text-left transition-all ${
                      selectedPolo === 'serraTalhada'
                        ? 'bg-[#1677FF] text-white border-[#35CFFF]'
                        : 'bg-[#0D1118] text-slate-400 border-white/5 hover:border-white/20'
                    }`}
                  >
                    <span className="font-bold block">Serra Talhada / PE</span>
                    <span className="text-[10px] opacity-80">(87) 99157-8326</span>
                  </button>
                </div>
              </div>

              {/* Price Calculation Summary (Section 11.3) */}
              <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-slate-200">{formatBRL(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex items-center justify-between text-[#35CFFF]">
                    <span>Desconto por quantidade (10+ un.):</span>
                    <span className="font-mono">-{formatBRL(discount)}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-base font-extrabold text-white pt-1">
                  <span>Total Inicial:</span>
                  <span className="font-mono text-lg text-white">{formatBRL(totalInitial)}</span>
                </div>

                {/* Recurring monthly fee presented separately (Section 11.3) */}
                {totalMonthly > 0 && (
                  <div className="p-2.5 rounded-lg bg-[#151B25] border border-white/5 flex items-start gap-2 mt-2">
                    <Info className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#35CFFF] block">
                        Mensalidade obrigatória: {formatBRL(totalMonthly)}/mês
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        Para manutenção do servidor e suporte aos envios de e-mail ao lojista. Cobrada separadamente do valor inicial.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Finalizar Pedido pelo WhatsApp</span>
              </button>

              <p className="text-[10px] text-slate-500 text-center">
                A finalização ocorre via WhatsApp oficial sem cobrança automática no site.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
