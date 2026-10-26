import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, ChevronDown, Ruler, Check, Sparkles, Search } from 'lucide-react';
import { ProductItem } from '../data/catalog';
import { useCart } from '../context/CartContext';

export interface ProductItemCardProps {
  product: ProductItem;
  onOpenContact: (productName: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export const ProductItemCard: React.FC<ProductItemCardProps> = ({
  product,
  onOpenContact,
  onOpenZoom,
}) => {
  const { addItem, setIsCartOpen } = useCart();
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
    addItem(product, selectedVariation, customNote.trim() ? customNote.trim() : undefined, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
    setIsCartOpen(true);
  };

  return (
    <div
      className={`relative rounded-3xl bg-white border flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 group ${
        product.popular
          ? 'border-blue-300 shadow-md ring-1 ring-blue-100'
          : 'border-gray-200/80'
      }`}
    >
      <div>
        {/* Photo Container com Hover de Lupa (Wistag Style) */}
        <div className="p-4 pb-2">
          <div 
            className="relative group/img cursor-pointer overflow-hidden rounded-2xl bg-gray-50 border border-gray-100 aspect-16/10 flex items-center justify-center"
            onClick={() => onOpenZoom(displayImage, `${product.name}${selectedVariation ? ` - ${selectedVariation}` : ''}`)}
          >
            <img
              src={displayImage}
              onError={(e) => {
                if (displayBackupImage) {
                  (e.target as HTMLImageElement).src = displayBackupImage;
                }
              }}
              alt={`${product.name}${selectedVariation ? ` - ${selectedVariation}` : ''}`}
              className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg">
                <Search className="w-5 h-5 text-gray-800" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 pt-3">
          {/* Metadata row */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            {product.dimension && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                <Ruler className="w-3 h-3 text-blue-600" />
                {product.dimension}
              </span>
            )}
            {product.popular && (
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold uppercase tracking-wider border border-blue-100">
                Mais Escolhido
              </span>
            )}
            {product.customizable && (
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium border border-gray-200">
                Personalizável com sua Marca
              </span>
            )}
          </div>

          {/* Product Name */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Practical Benefit */}
          {product.benefit && (
            <p className="text-xs font-semibold text-blue-600 mb-2 leading-relaxed">
              {product.benefit}
            </p>
          )}

          {/* Commercial Description */}
          <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
            {product.description}
          </p>

          {/* Variation Picker if available (updates image and price!) */}
          {product.variations && product.variations.length > 0 && (
            <div className="mb-4">
              <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                Opção de modelo / cor:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {product.variations.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedVariation(v)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                      selectedVariation === v
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-300 hover:bg-gray-200'
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
                className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white transition-colors"
              />
            </div>
          )}

          {/* Expandable Technical Specs Accordion */}
          <div className="border-t border-gray-100 pt-3 mb-2">
            <button
              type="button"
              onClick={() => setShowSpecs(!showSpecs)}
              aria-expanded={showSpecs}
              className="w-full flex items-center justify-between text-xs text-gray-500 hover:text-gray-900 transition-colors py-1"
            >
              <span className="font-bold text-[11px] uppercase tracking-wider">
                Especificações Técnicas
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  showSpecs ? 'rotate-180 text-blue-600' : ''
                }`}
              />
            </button>

            {showSpecs && (
              <div className="mt-2.5 p-3.5 rounded-2xl bg-gray-50 border border-gray-200 text-[11px] space-y-2 text-gray-700 animate-fade-in">
                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-gray-200">
                  <div>
                    <span className="text-gray-400 block text-[10px]">Material:</span>
                    <span className="font-semibold text-gray-900">{product.specs.material}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">Impressão:</span>
                    <span className="font-semibold text-gray-900">{product.specs.printing}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pb-2 border-b border-gray-200">
                  <div>
                    <span className="text-gray-400 block text-[10px]">Acabamento:</span>
                    <span className="font-semibold text-gray-900">{product.specs.resin}</span>
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[10px]">Funcionamento:</span>
                    <span className="font-semibold text-gray-900">{product.specs.operation}</span>
                  </div>
                </div>

                {product.specs.fixing && (
                  <div className="pb-2 border-b border-gray-200">
                    <span className="text-gray-400 block text-[10px]">Fixação:</span>
                    <span className="font-semibold text-gray-900">{product.specs.fixing}</span>
                  </div>
                )}

                <div>
                  <span className="text-gray-400 block text-[10px] mb-1">Itens inclusos:</span>
                  <ul className="list-disc list-inside space-y-0.5 text-gray-600">
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
        <div className="py-3 border-t border-gray-100">
          <div className="flex items-baseline justify-between">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              Preço de Venda
            </span>
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-extrabold text-gray-900 font-mono tracking-tight">
                {displayPrice}
              </span>
            </div>
          </div>

          {/* Bulk Discount Label if applicable */}
          {product.bulkPriceLabel && (
            <div className="flex items-center justify-end gap-1.5 mt-1 text-[11px] text-blue-600 font-semibold">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>{product.bulkPriceLabel}</span>
            </div>
          )}

          {/* Monthly Price Label if applicable */}
          {product.monthlyPriceLabel && (
            <div className="mt-1.5 p-2 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-gray-700">
              <span className="font-bold text-blue-700 block">Mensalidade separada:</span>
              <span>{product.monthlyPriceLabel}</span>
            </div>
          )}
        </div>

        {/* Action Buttons: Add to Cart & Buy via WhatsApp (Pill Shape Wistag) */}
        <div className="flex items-center gap-2 pt-2">
          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full text-xs font-bold transition-all border ${
              addedAnimation
                ? 'bg-emerald-600 text-white border-emerald-600 scale-[1.02]'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-200'
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Na Sacola!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-gray-700" />
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
            className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Comprar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemCard;
