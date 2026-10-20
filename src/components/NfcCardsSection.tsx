import React from 'react';
import { CreditCard, CheckCircle2, RefreshCw, Smartphone, ArrowRight, ShieldCheck } from 'lucide-react';
import { CARTOES_NFC } from '../data/catalog';
import { ProductItemCard } from './ProductItemCard';

interface NfcCardsSectionProps {
  onOpenContact: (productName: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export const NfcCardsSection: React.FC<NfcCardsSectionProps> = ({
  onOpenContact,
  onOpenZoom,
}) => {
  return (
    <section id="cartoes-inteligentes-nfc" className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#050608] scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Intro Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Portabilidade & Contatos Executivos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Seu contato profissional, pronto para compartilhar.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
            Em vez de depender apenas de um cartão de papel, compartilhe seus dados profissionais de forma prática. Com o cartão NFC compatível, a pessoa aproxima o celular ou lê o QR Code para acessar o link configurado.
          </p>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Compartilhamento prático de WhatsApp, Instagram, portfólio, site oficial ou vCard para salvar seus dados na agenda do cliente. Reutilizável, resistente à água e com acabamento refinado.
          </p>
        </div>

        {/* Honest Comparison: Paper vs NFC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14 p-6 sm:p-8 rounded-2xl bg-[#0D1118] border border-white/5">
          <div className="p-4 rounded-xl bg-[#151B25]/50 border border-white/5">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Cartões de Papel Tradicionais
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Possuem baixo custo unitário quando impressos em milhares para distribuição em massa. No entanto, costumam ser descartados rapidamente, amassam na carteira e exigem reimpressão completa sempre que um telefone ou cargo é alterado.
            </p>
            <span className="text-[11px] text-slate-500 block">Útil para panfletagem e distribuição volumosa rápida.</span>
          </div>

          <div className="p-4 rounded-xl bg-[#1677FF]/10 border border-[#1677FF]/30">
            <h4 className="text-xs font-bold text-[#35CFFF] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5" />
              Cartão NFC Inteligente VãBora
            </h4>
            <p className="text-xs text-slate-200 leading-relaxed mb-3">
              Um único cartão rígido em PVC nobre que dura anos. Você aproxima do celular do cliente e entrega seus contatos e links em milissegundos. Permite atualizar o destino digital sempre que precisar, sem reimprimir nada.
            </p>
            <span className="text-[11px] text-[#35CFFF] font-semibold block">Ideal para reuniões, eventos, feiras e networking de alto nível.</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARTOES_NFC.products.map((product) => (
            <ProductItemCard
              key={product.id}
              product={product}
              onOpenContact={onOpenContact}
              onOpenZoom={onOpenZoom}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
