import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PLACAS_EM_L } from '../data/catalog';

export interface HeroSectionProps {
  onOpenContact: (item?: string) => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const { addItem, setIsCartOpen } = useCart();

  const handleAddHeroProduct = () => {
    const heroProduct = PLACAS_EM_L.products.find(
      (item) => item.name.toLowerCase().includes('google') && item.name.toLowerCase().includes('personalizada')
    ) || PLACAS_EM_L.products[0];

    if (heroProduct) {
      addItem(heroProduct, undefined, undefined, 1);
      setIsCartOpen(true);
    } else {
      onOpenContact('Placa Premium em L - Google Personalizada');
    }
  };

  return (
    <section className="bg-gray-50 border-b border-gray-200 overflow-hidden relative" id="inicio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Textos da Esquerda */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold tracking-wide uppercase border border-blue-100/80">
            Aproxime. Conecte. VãBora.
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Conectando o balcão da sua empresa ao <br />
            <span className="text-blue-600">mundo digital</span>
          </h1>
          
          <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Nós não vendemos apenas suportes físicos: ajudamos sua empresa a ser encontrada, bem avaliada e escolhida pelos clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a 
              href="#produtos" 
              className="bg-gray-900 hover:bg-black text-white px-8 py-3.5 rounded-full font-bold transition flex items-center justify-center shadow-md hover:shadow-lg active:scale-95"
            >
              Conhecer produtos <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <button 
              type="button"
              onClick={() => onOpenContact('Solução Personalizada')}
              className="bg-white border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3.5 rounded-full font-medium transition flex items-center justify-center shadow-sm active:scale-95"
            >
              <MessageCircle className="mr-2 w-4 h-4 text-blue-600" />
              Falar com consultor
            </button>
          </div>
        </div>

        {/* Card Destaque Flutuante (Branco) */}
        <div className="relative flex justify-center">
          {/* Efeito visual no fundo (Blob Wistag) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10 pointer-events-none" />

          {/* Card Flutuante */}
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border border-gray-100 transform hover:-translate-y-2 transition duration-500 shadow-xl">
            <div className="overflow-hidden rounded-2xl mb-6 bg-gray-50 border border-gray-100">
              <img 
                src="https://i.postimg.cc/MZYFq6Fm/IMG-0705.jpg" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/products/IMG_0705.jpg';
                }}
                alt="Placa Premium em L - Google Personalizada" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="px-2 pb-2">
              <div className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-wider">
                Premium em L (11 × 16 cm)
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Google Personalizada
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Acabamento brilhante resinado com a personalização 100% da sua marca.
              </p>

              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <span className="text-2xl font-extrabold text-gray-900 font-mono">
                  R$ 179,00
                </span>
                <button 
                  type="button"
                  onClick={handleAddHeroProduct}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-bold transition shadow-sm active:scale-95"
                >
                  Adicionar
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
