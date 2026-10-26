import React from 'react';
import { ShoppingBag, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { ProductItem } from '../data/catalog';

export interface GallerySectionViewProps {
  gallery: {
    id?: string;
    title: string;
    subtitle: string;
    description?: string;
    dimension?: string;
    products?: ProductItem[];
    items?: ProductItem[];
  };
  onOpenContact: (name: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export function GallerySectionView({ gallery, onOpenContact, onOpenZoom }: GallerySectionViewProps) {
  const { addItem, setIsCartOpen } = useCart();
  const productList = gallery.products || gallery.items || [];

  const handleBuy = (item: any) => {
    addItem(item, undefined, undefined, 1);
    setIsCartOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200" id={gallery.id || 'produtos'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção com Animação Scroll */}
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            {gallery.title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {gallery.subtitle}
          </p>
        </motion.div>

        {/* Scroll Horizontal no Mobile, Grid no Desktop com Efeito Cascata (Stagger) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible">
          {productList.map((item: any, index: number) => {
            const imgSrc = item.image || item.imageUrl || '/images/products/IMG_0705.jpg';
            const backupSrc = item.backupImage || item.backupImageUrl;

            // Formatação do Preço
            let formattedPrice = '';
            if (typeof item.price === 'string') {
              formattedPrice = item.price;
            } else if (typeof item.price === 'number') {
              formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price);
            } else if (typeof item.numericPrice === 'number') {
              formattedPrice = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.numericPrice);
            } else {
              formattedPrice = 'Consulte';
            }

            return (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[85%] md:w-auto bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transform hover:-translate-y-2 transition duration-300 mr-4 md:mr-0 flex flex-col"
              >
                {/* Imagem com Hover de Lupa */}
                <div 
                  className="relative group cursor-pointer mb-5 overflow-hidden rounded-2xl bg-gray-50 border border-gray-100" 
                  onClick={() => onOpenZoom(imgSrc, item.name)}
                >
                  <img 
                    src={imgSrc} 
                    alt={item.name} 
                    onError={(e) => {
                      if (backupSrc) {
                        (e.target as HTMLImageElement).src = backupSrc;
                      }
                    }}
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Search className="text-gray-900 w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Informações e Preço */}
                <div className="flex-1 flex flex-col px-2">
                  <h3 className="text-xl font-bold text-gray-900 leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6 mt-2 flex-1 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-extrabold text-gray-900 font-mono tracking-tight">
                        {formattedPrice}
                      </span>
                      {item.monthlyPriceLabel && (
                        <span className="text-[11px] text-blue-600 font-semibold mt-0.5">
                          {item.monthlyPriceLabel}
                        </span>
                      )}
                    </div>

                    <button 
                      type="button"
                      onClick={() => handleBuy(item)} 
                      className="bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-900 px-5 py-2.5 rounded-full text-sm font-bold transition flex items-center shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4 mr-2" /> Comprar
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default GallerySectionView;
