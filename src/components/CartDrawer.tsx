import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Tag, Info } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { CONTACT_INFO } from '../data/catalog';

interface CartDrawerProps {
  preferredPolo: 'curitiba' | 'serraTalhada' | null;
  onSelectPolo: (polo: 'curitiba' | 'serraTalhada') => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  preferredPolo,
  onSelectPolo,
}) => {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeItem,
    updateQuantity,
    clearCart,
    subtotal,
    discount,
    totalInitial,
    totalMonthly,
  } = useCart();

  const [customerName, setCustomerName] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const [selectedPolo, setSelectedPolo] = useState<'curitiba' | 'serraTalhada'>(
    preferredPolo || 'curitiba'
  );

  if (!isCartOpen) return null;

  const formatBRL = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);

  // Generates clean WhatsApp order message (Section 11.4 format)
  const handleCheckoutWhatsApp = () => {
    let msg = `Olá, VãBora Soluções! Gostaria de fazer o seguinte pedido:\n\n`;

    if (customerName.trim()) {
      msg += `*Cliente / Empresa:* ${customerName.trim()}\n\n`;
    }

    msg += `*ITENS DO PEDIDO:*\n`;
    items.forEach((item, idx) => {
      const isBulk =
        item.bulkThreshold &&
        item.bulkUnitPrice &&
        item.quantity >= item.bulkThreshold;
      const unit = isBulk ? item.bulkUnitPrice! : item.unitPrice;
      const itemSubtotal = unit * item.quantity;

      msg += `${idx + 1}. *${item.name}*\n`;
      if (item.variation) {
        msg += `   • Modelo / Variante: ${item.variation}\n`;
      }
      if (item.customizationNotes) {
        msg += `   • Obs. Personalização: ${item.customizationNotes}\n`;
      }
      msg += `   • Quantidade: ${item.quantity} un.\n`;
      msg += `   • Valor unitário: ${formatBRL(unit)}${isBulk ? ' (Preço atacado 10+ un.)' : ''}\n`;
      msg += `   • Subtotal do item: ${formatBRL(itemSubtotal)}\n`;
      if (item.monthlyUnitPrice && item.monthlyUnitPrice > 0) {
        msg += `   • Mensalidade de manutenção: ${formatBRL(item.monthlyUnitPrice)}/mês\n`;
      }
      msg += `\n`;
    });

    msg += `------------------------------------\n`;
    msg += `*Subtotal:* ${formatBRL(subtotal)}\n`;
    if (discount > 0) {
      msg += `*Desconto Atacado (10+ un.):* -${formatBRL(discount)}\n`;
    }
    msg += `*TOTAL INICIAL:* ${formatBRL(totalInitial)}\n`;

    if (totalMonthly > 0) {
      msg += `*MENSALIDADE OBRIGATÓRIA:* ${formatBRL(totalMonthly)}/mês\n`;
      msg += `(Manutenção contínua de servidor e suporte de e-mail ao lojista)\n`;
    }

    if (customerNotes.trim()) {
      msg += `\n*Observações adicionais:*\n${customerNotes.trim()}\n`;
    }

    msg += `\nPolo selecionado: ${selectedPolo === 'curitiba' ? 'Curitiba/PR' : 'Serra Talhada/PE'}\n`;
    msg += `\nComo posso prosseguir com o pagamento e envio dos dados para personalização?`;

    const encoded = encodeURIComponent(msg);
    const rawPhone =
      selectedPolo === 'curitiba'
        ? CONTACT_INFO.units.curitiba.rawPhone
        : CONTACT_INFO.units.serraTalhada.rawPhone;
    const targetUrl = `https://wa.me/${rawPhone}?text=${encoded}`;

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-sm transition-opacity animate-fade-in"
      onClick={() => setIsCartOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      <div
        className="fixed inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white border-l border-gray-200 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 id="cart-drawer-title" className="text-base font-bold text-gray-900 tracking-tight">
                  Sacola de Compras
                </h2>
                <span className="text-[11px] text-gray-500">
                  {items.length} {items.length === 1 ? 'item adicionado' : 'itens adicionados'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {items.length > 0 && (
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[11px] text-gray-400 hover:text-red-500 transition-colors px-2 py-1 font-medium"
                >
                  Limpar
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fechar sacola"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 hide-scrollbar">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-400">
                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-4 border border-gray-200">
                  <ShoppingBag className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-base font-bold text-gray-900 mb-1">Sua sacola está vazia</p>
                <p className="text-xs text-gray-500 max-w-xs mb-6">
                  Explore nossos displays em L, placas 10 × 10 cm, cartões NFC e combos para adicionar produtos.
                </p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
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
                    className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex gap-3 text-xs"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-gray-200 shrink-0">
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
                          <h4 className="font-bold text-gray-900 text-xs leading-snug truncate">
                            {item.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 p-0.5 transition-colors"
                            title="Remover"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {item.variation && (
                          <span className="text-[10px] text-gray-500 block mt-0.5">
                            Variante: <strong className="text-gray-800">{item.variation}</strong>
                          </span>
                        )}

                        {item.customizationNotes && (
                          <span className="text-[10px] text-blue-600 block mt-0.5 truncate font-medium">
                            Personalização: {item.customizationNotes}
                          </span>
                        )}

                        {isBulk && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-blue-600 font-semibold mt-1">
                            <Tag className="w-2.5 h-2.5" />
                            Preço por atacado aplicado (10+ un.)
                          </span>
                        )}

                        {item.monthlyUnitPrice && item.monthlyUnitPrice > 0 ? (
                          <span className="text-[10px] text-blue-600 block mt-0.5 font-bold">
                            + {formatBRL(item.monthlyUnitPrice)}/mês recorrente
                          </span>
                        ) : null}
                      </div>

                      {/* Quantity & Item Subtotal */}
                      <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-gray-200">
                        <div className="flex items-center gap-1.5 bg-white px-2 py-0.5 rounded-full border border-gray-200 shadow-sm">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-500 hover:text-gray-900 p-0.5"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-gray-900 px-1.5 font-mono">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-500 hover:text-gray-900 p-0.5"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-[11px] text-gray-400 block font-mono">
                            {formatBRL(effectiveUnit)} /un
                          </span>
                          <span className="text-xs font-extrabold text-gray-900 font-mono">
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
            <div className="p-5 border-t border-gray-200 bg-white space-y-4">
              {/* Optional Client Name Input */}
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Seu Nome ou Empresa (opcional)
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ex: Dra. Mariana / Loja Exemplo"
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              {/* Optional Custom Notes */}
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Observações ou Links desejados
                </label>
                <input
                  type="text"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Ex: Enviar logo em alta / Link do Google Maps"
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
                />
              </div>

              {/* Polo Selector */}
              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Polo de Atendimento no WhatsApp:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPolo('curitiba');
                      onSelectPolo('curitiba');
                    }}
                    className={`p-2.5 rounded-2xl text-xs font-semibold border text-left transition-all ${
                      selectedPolo === 'curitiba'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-bold block">Curitiba / PR</span>
                    <span className="text-[10px] opacity-80">(41) 98844-2761</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPolo('serraTalhada');
                      onSelectPolo('serraTalhada');
                    }}
                    className={`p-2.5 rounded-2xl text-xs font-semibold border text-left transition-all ${
                      selectedPolo === 'serraTalhada'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-bold block">Serra Talhada / PE</span>
                    <span className="text-[10px] opacity-80">(87) 99157-8326</span>
                  </button>
                </div>
              </div>

              {/* Price Calculation Summary (Section 11.3) */}
              <div className="space-y-1.5 pt-2 border-t border-gray-100 text-xs">
                <div className="flex items-center justify-between text-gray-500">
                  <span>Subtotal:</span>
                  <span className="font-mono text-gray-900">{formatBRL(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex items-center justify-between text-blue-600 font-semibold">
                    <span>Desconto por quantidade (10+ un.):</span>
                    <span className="font-mono">-{formatBRL(discount)}</span>
                  </div>
                )}

                <div className="flex items-center justify-between text-base font-extrabold text-gray-900 pt-1">
                  <span>Total Inicial:</span>
                  <span className="font-mono text-lg text-gray-900">{formatBRL(totalInitial)}</span>
                </div>

                {/* Recurring monthly fee presented separately */}
                {totalMonthly > 0 && (
                  <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-2 mt-2">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-blue-700 block">
                        Mensalidade obrigatória: {formatBRL(totalMonthly)}/mês
                      </span>
                      <span className="text-[10px] text-gray-600 block leading-relaxed mt-0.5">
                        Para manutenção do servidor e suporte aos envios de e-mail ao lojista. Cobrada separadamente do valor inicial.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Checkout Button (Pill Shape Wistag) */}
              <button
                type="button"
                onClick={handleCheckoutWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Finalizar Pedido pelo WhatsApp</span>
              </button>

              <p className="text-[10px] text-gray-400 text-center font-medium">
                A finalização ocorre via WhatsApp oficial sem cobrança automática no site.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
