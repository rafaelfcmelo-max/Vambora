import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, ChevronDown, Ruler, Check, Sparkles, Layers } from 'lucide-react';
import { ProductItem } from '../data/catalog';
import { ProductImage } from './ProductImage';
import { useCart } from '../context/CartContext';

interface ProductItemCardProps {
  product: ProductItem;
  onOpenContact: (productName: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export const ProductItemCard: React.FC<ProductItemCardProps> = ({
  product,
  onOpenContact,
  onOpenZoom,
}) => {
  const { addItem } = useCart();
  const [selectedVariation, setSelectedVariation] = useState<string | undefined>(
    product.variations && product.variations.length > 0 ? product.variations[0] : undefined
  );
  const [showSpecs, setShowSpecs] = useState(false);
  const [customNote, setCustomNote] = useState('');
  const [addedAnimation, setAddedAnimation] = useState(false);

  // Determine current active variant details (for image/price switching)
  const currentVariant = product.variantDetails?.find((v) => v.name === selectedVariation);
  const displayImage = currentVariant?.image || product.image;
  const displayBackupImage = currentVariant?.backupImage || product.backupImage;
  const displayPrice = currentVariant?.price || product.price;

  const handleAddToCart = () => {
    // Add product with specific selected variant and optional custom note
    addItem(product, selectedVariation, customNote.trim() ? customNote.trim() : undefined, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div
      className={`relative rounded-2xl bg-[#0D1118] border flex flex-col justify-between transition-all duration-300 glow-border group ${
        product.popular
          ? 'border-[#1677FF]/40 shadow-[0_0_25px_rgba(22,119,255,0.12)]'
          : 'border-white/5'
      }`}
    >
      <div>
        {/* Photo Container */}
        <div className="p-4 pb-2">
          <ProductImage
            src={displayImage}
            backupSrc={displayBackupImage}
            alt={`${product.name}${selectedVariation ? ` - ${selectedVariation}` : ''}`}
            onOpenZoom={onOpenZoom}
            aspect="aspect-16/10"
            className="rounded-xl shadow-md border border-white/5 transition-all duration-300"
          />
        </div>

        <div className="p-5 pt-3">
          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {product.dimension && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                <Ruler className="w-3 h-3 text-[#1677FF]" />
                {product.dimension}
              </span>
            )}
            {product.popular && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1677FF]/20 text-[#35CFFF] font-bold uppercase tracking-wider border border-[#1677FF]/40">
                Mais Escolhido
              </span>
            )}
            {product.customizable && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#151B25] text-slate-300 font-medium border border-white/10">
                Personalizável com sua Marca
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#35CFFF] transition-colors">
            {product.name}
          </h3>

          {/* Practical Benefit */}
          <p className="text-xs font-semibold text-[#35CFFF] mb-2 leading-relaxed">
            {product.benefit}
          </p>

          {/* Commercial Description */}
          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            {product.description}
          </p>

          {/* Variation Picker if available (updates image and price!) */}
          {product.variations && product.variations.length > 0 && (
            <div className="mb-4">
              <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                Opção de modelo / cor:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.variations.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedVariation(v)}
                    className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                      selectedVariation === v
                        ? 'bg-[#1677FF] text-white border-[#35CFFF] shadow-sm'
                        : 'bg-[#151B25] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Optional Customization Note for personalized items */}
          {product.customizable && (
            <div className="mb-3">
              <input
                type="text"
                placeholder="Obs: Nome da sua empresa ou @ (opcional)"
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg bg-[#050608] border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF] transition-colors"
              />
            </div>
          )}

          {/* Expandable Technical Specs Accordion */}
          <div className="border-t border-white/5 pt-3 mb-2">
            <button
              type="button"
              onClick={() => setShowSpecs(!showSpecs)}
              aria-expanded={showSpecs}
              className="w-full flex items-center justify-between text-xs text-slate-400 hover:text-white transition-colors py-1"
            >
              <span className="font-semibold text-[11px] uppercase tracking-wider">
                Especificações Técnicas
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showSpecs ? 'rotate-180 text-[#35CFFF]' : ''
                }`}
              />
            </button>

            {showSpecs && (
              <div className="mt-3 p-3.5 rounded-xl bg-[#050608] border border-white/5 text-[11px] space-y-2 text-slate-300 animate-fade-in">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/5">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Material:</span>
                    <span className="font-medium text-white">{product.specs.material}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Impressão:</span>
                    <span className="font-medium text-white">{product.specs.printing}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/5">
                  <div>
                    <span className="text-slate-500 block text-[10px]">Acabamento:</span>
                    <span className="font-medium text-white">{product.specs.resin}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[10px]">Funcionamento:</span>
                    <span className="font-medium text-white">{product.specs.operation}</span>
                  </div>
                </div>

                {product.specs.fixing && (
                  <div>
                    <span className="text-slate-500 block text-[10px]">Fixação:</span>
                    <span className="font-medium text-white">{product.specs.fixing}</span>
                  </div>
                )}

                <div>
                  <span className="text-slate-500 block text-[10px] mb-1">Itens inclusos:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-slate-400">
                    {product.specs.includedItems.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer with Pricing and Two Clear Actions */}
      <div className="p-5 pt-0">
        {/* Pricing Block */}
        <div className="py-3 border-t border-white/5">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Preço de Venda
            </span>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-black text-white font-mono tracking-tight">
                {displayPrice}
              </span>
            </div>
          </div>

          {/* Bulk Discount Label if applicable */}
          {product.bulkPriceLabel && (
            <div className="flex items-center justify-end gap-1.5 mt-1 text-[11px] text-[#35CFFF] font-medium">
              <Sparkles className="w-3 h-3 text-[#35CFFF]" />
              <span>{product.bulkPriceLabel}</span>
            </div>
          )}

          {/* Monthly Price Label if applicable */}
          {product.monthlyPriceLabel && (
            <div className="mt-1.5 p-2 rounded-lg bg-[#151B25] border border-white/5 text-[11px] text-slate-300">
              <span className="font-bold text-[#35CFFF] block">Mensalidade separada:</span>
              <span>{product.monthlyPriceLabel}</span>
            </div>
          )}
        </div>

        {/* Action Buttons: Add to Cart & Buy via WhatsApp */}
        <div className="flex items-center gap-2 pt-2">
          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all border ${
              addedAnimation
                ? 'bg-emerald-600 text-white border-emerald-500 scale-[1.02]'
                : 'bg-[#151B25] hover:bg-[#1677FF]/20 text-white border-white/10 hover:border-[#1677FF]'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Na Sacola!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#35CFFF]" />
                <span>Adicionar</span>
              </>
            )}
          </button>

          {/* Direct WhatsApp Contact Button */}
          <button
            type="button"
            onClick={() =>
              onOpenContact(
                `${product.name}${selectedVariation ? ` (${selectedVariation})` : ''} - ${displayPrice}`
              )
            }
            title="Pedir direto no WhatsApp"
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs font-bold transition-all shadow-md active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
            <span className="hidden sm:inline">Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
