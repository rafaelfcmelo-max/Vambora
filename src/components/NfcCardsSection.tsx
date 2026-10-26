import React from 'react';
import { CreditCard, RefreshCw } from 'lucide-react';
import { CARTOES_NFC } from '../data/catalog';
import { ProductItemCard } from './ProductItemCard';

export interface NfcCardsSectionProps {
  onOpenContact: (productName: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export const NfcCardsSection: React.FC<NfcCardsSectionProps> = ({
  onOpenContact,
  onOpenZoom,
}) => {
  return (
    <section 
      id="cartoes-inteligentes-nfc" 
      className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Intro Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" />
            <span>Portabilidade & Contatos Executivos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Seu contato profissional, pronto para compartilhar.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Em vez de depender apenas de um cartão de papel, compartilhe seus dados profissionais de forma prática. Com o cartão NFC compatível, a pessoa aproxima o celular ou lê o QR Code para acessar o link configurado.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Compartilhamento prático de WhatsApp, Instagram, portfólio, site oficial ou vCard para salvar seus dados na agenda do cliente. Reutilizável, resistente à água e com acabamento refinado.
          </p>
        </div>

        {/* Honest Comparison: Paper vs NFC (Clean Wistag Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14 p-6 sm:p-8 rounded-3xl bg-gray-50 border border-gray-200">
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Cartões de Papel Tradicionais
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed mb-3">
              Possuem baixo custo unitário quando impressos em milhares para distribuição em massa. No entanto, costumam ser descartados rapidamente, amassam na carteira e exigem reimpressão completa sempre que um telefone ou cargo é alterado.
            </p>
            <span className="text-[11px] text-gray-400 block font-medium">
              Útil para panfletagem e distribuição volumosa rápida.
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/90 shadow-sm">
            <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-blue-600" />
              Cartão NFC Inteligente VãBora
            </h4>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              Um único cartão rígido em PVC nobre que dura anos. Você aproxima do celular do cliente e entrega seus contatos e links em milissegundos. Permite atualizar o destino digital sempre que precisar, sem reimprimir nada.
            </p>
            <span className="text-[11px] text-blue-700 font-semibold block">
              Ideal para reuniões, eventos, feiras e networking de alto nível.
            </span>
          </div>
        </div>

        {/* Product Cards Mobile Snap Carousel, Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible">
          {CARTOES_NFC.products.map((product) => (
            <div 
              key={product.id} 
              className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 flex flex-col"
            >
              <ProductItemCard
                product={product}
                onOpenContact={onOpenContact}
                onOpenZoom={onOpenZoom}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NfcCardsSection;
