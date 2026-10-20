import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';
import { useCart } from '../context/CartContext';

interface TopNavProps {
  onOpenContact: (customItem?: string) => void;
  preferredPolo: 'curitiba' | 'serraTalhada' | null;
  onSelectPolo: (polo: 'curitiba' | 'serraTalhada') => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  onOpenContact,
  preferredPolo,
  onSelectPolo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItemsCount, setIsCartOpen } = useCart();

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Produtos', href: '#produtos-google' },
    { label: 'Soluções digitais', href: '#servicos-digitais' },
    { label: 'Para empresas', href: '#para-empresas' },
    { label: 'Revenda', href: '#revenda-parcerias' },
    { label: 'Sobre a VaBora', href: '#sobre-vabora' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#050608]/95 backdrop-blur-md border-b border-white/5 transition-all">
      {/* Top Polos Strip */}
      <div className="bg-[#0D1118] border-b border-white/5 text-[11px] text-slate-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-slate-500 whitespace-nowrap">Polos oficiais:</span>
            <span className="text-white font-medium whitespace-nowrap">Curitiba/PR (Principal)</span>
            <span className="text-slate-600">·</span>
            <span className="text-white font-medium whitespace-nowrap">Serra Talhada/PE</span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href={CONTACT_INFO.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#35CFFF] transition-colors"
              title="Instagram Oficial VaBora Soluções"
            >
              <Instagram className="w-3.5 h-3.5 text-[#35CFFF]" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Logo with Neutral High-Contrast Area for perfect legibility (Section 1.1) */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="bg-white p-1 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center shrink-0">
            <img
              src={CONTACT_INFO.logo.local}
              onError={(e) => {
                (e.target as HTMLImageElement).src = CONTACT_INFO.logo.remote;
              }}
              alt="Logo VaBora Soluções"
              className="h-6 w-auto object-contain"
            />
          </div>
          <span className="font-extrabold text-white tracking-tight group-hover:text-[#35CFFF] transition-colors">
            VaBora Soluções
          </span>
        </a>

        {/* Zone 2: Navigation Links (Section 3) */}
        <nav
          aria-label="Navegação principal"
          className="hidden xl:flex items-center gap-6 text-xs xl:text-sm font-semibold text-slate-300"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#35CFFF] transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions - Shopping Bag Trigger with Live Counter + Direct Contact */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Sacola de Compras with Counter Badge (Section 3) */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Ver sacola de compras (${totalItemsCount} itens)`}
            className="relative flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#151B25] hover:bg-[#1677FF]/20 text-white text-xs font-bold border border-white/10 hover:border-[#1677FF] transition-all"
          >
            <ShoppingBag className="w-4 h-4 text-[#35CFFF]" />
            <span className="hidden sm:inline">Sacola</span>
            {totalItemsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#1677FF] text-white text-[11px] font-black flex items-center justify-center shadow-md animate-scale-in">
                {totalItemsCount}
              </span>
            )}
          </button>

          {/* WhatsApp Action */}
          <button
            type="button"
            onClick={() => onOpenContact()}
            className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] rounded-xl transition-all shadow-[0_0_15px_rgba(22,119,255,0.3)] whitespace-nowrap active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
            <span className="hidden md:inline">Atendimento</span>
            <span className="md:hidden">Contato</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu de navegação"
            aria-expanded={mobileMenuOpen}
            className="xl:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Section 3: O menu deve funcionar de verdade, inclusive no celular) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D1118] border-b border-white/10 px-4 py-5 animate-fade-in shadow-2xl">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider px-2 mb-1">
              Navegação
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:text-white hover:bg-[#151B25] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-white/5 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#151B25] text-white text-xs font-bold border border-white/10"
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-[#35CFFF]" />
                  <span>Ver Sacola de Compras</span>
                </div>
                <span className="w-5 h-5 rounded-full bg-[#1677FF] text-white text-[11px] font-bold flex items-center justify-center">
                  {totalItemsCount}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] text-white text-xs font-bold shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Falar no WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
