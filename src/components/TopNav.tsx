import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

export interface TopNavProps {
  onOpenContact: () => void;
  preferredPolo: 'curitiba' | 'serraTalhada' | null;
  onSelectPolo: (polo: 'curitiba' | 'serraTalhada') => void;
}

export function TopNav({ onOpenContact, preferredPolo, onSelectPolo }: TopNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logotipo VãBora */}
        <a href="#inicio" className="flex-shrink-0 flex items-center cursor-pointer group">
          <img 
            src="https://i.postimg.cc/PqF7G23b/IMG-0891.png" 
            alt="VãBora Soluções" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-200"
          />
        </a>
        
        {/* Navegação Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a 
            href="#produtos" 
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Produtos
          </a>
          <a 
            href="#servicos" 
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Serviços Digitais
          </a>
          <a 
            href="#combos" 
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Combos e Ofertas
          </a>
          <a 
            href="#protetor-reputacao" 
            className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Protetor de Reputação
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Seletor de Polos de Atendimento */}
          <div className="hidden lg:flex items-center text-xs text-gray-500 mr-2 bg-gray-50 px-3.5 py-1.5 rounded-full border border-gray-200">
            <MapPin className="w-3.5 h-3.5 mr-1.5 text-blue-600 shrink-0" />
            <button 
              type="button"
              onClick={() => onSelectPolo('curitiba')}
              className={`hover:text-gray-900 transition ${preferredPolo === 'curitiba' ? 'text-blue-600 font-bold' : ''}`}
            >
              Curitiba
            </button>
            <span className="mx-1.5 text-gray-300">•</span>
            <button 
              type="button"
              onClick={() => onSelectPolo('serraTalhada')}
              className={`hover:text-gray-900 transition ${preferredPolo === 'serraTalhada' ? 'text-blue-600 font-bold' : ''}`}
            >
              Serra Talhada
            </button>
          </div>

          <button 
            type="button"
            onClick={onOpenContact}
            className="hidden md:block text-sm font-medium text-gray-700 hover:text-gray-900 transition"
          >
            Falar com consultor
          </button>

          {/* Botão de Sacola (Pill shape com Side Cart trigger) */}
          <button 
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Abrir sacola de compras com ${totalItemsCount} itens`}
            className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 border border-gray-200 px-5 py-2.5 rounded-full transition text-sm font-semibold text-gray-900 shadow-sm active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-gray-700" />
            <span className="hidden sm:inline">Sacola</span>
            <span className="bg-blue-600 text-white rounded-full min-w-5 h-5 px-1.5 flex items-center justify-center text-xs font-bold shadow-sm">
              {totalItemsCount}
            </span>
          </button>
          
          {/* Botão Hambúrguer Mobile */}
          <button 
            type="button"
            className="md:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu de navegação"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile com Animação Fluida */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              <a 
                href="#produtos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-100"
              >
                Produtos
              </a>
              <a 
                href="#servicos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-100"
              >
                Serviços Digitais
              </a>
              <a 
                href="#combos" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-100"
              >
                Combos e Ofertas
              </a>
              <a 
                href="#protetor-reputacao" 
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-gray-800 hover:text-blue-600 py-2 border-b border-gray-100"
              >
                Protetor de Reputação
              </a>

              {/* Seletor de Polo no Mobile */}
              <div className="pt-2 flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-3 rounded-xl border border-gray-200">
                <span className="font-semibold flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-blue-600" /> Polo:
                </span>
                <div className="space-x-2">
                  <button 
                    type="button"
                    onClick={() => onSelectPolo('curitiba')}
                    className={`px-3 py-1 rounded-full text-xs transition ${preferredPolo === 'curitiba' ? 'bg-blue-600 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Curitiba
                  </button>
                  <button 
                    type="button"
                    onClick={() => onSelectPolo('serraTalhada')}
                    className={`px-3 py-1 rounded-full text-xs transition ${preferredPolo === 'serraTalhada' ? 'bg-blue-600 text-white font-bold' : 'bg-gray-200 text-gray-700'}`}
                  >
                    Serra Talhada
                  </button>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => {
                  setIsMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full mt-2 bg-gray-900 hover:bg-black text-white py-3 rounded-full text-sm font-bold shadow-md transition text-center"
              >
                Falar com consultor
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default TopNav;
