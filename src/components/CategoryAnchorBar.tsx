import React, { useState, useEffect } from 'react';

export const CategoryAnchorBar: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('produtos-google');

  const categories = [
    { id: 'produtos-google', label: 'Google Avaliações' },
    { id: 'protetor-reputacao', label: 'Protetor de Reputação' },
    { id: 'placas-planas-padrao', label: 'Placas 10 × 10 cm' },
    { id: 'placas-em-l', label: 'Placas em L' },
    { id: 'cartoes-inteligentes-nfc', label: 'Cartões NFC' },
    { id: 'placas-8x8-resinadas', label: 'Placas 8 × 8 cm' },
    { id: 'tags-antimetal', label: 'Tags Antimetal' },
    { id: 'combos-comerciais', label: 'Combos & Ofertas' },
    { id: 'biosites', label: 'BioSites' },
    { id: 'servicos-digitais', label: 'Serviços Digitais' },
    { id: 'para-empresas', label: 'Para Empresas / Hotelaria' },
    { id: 'visitas', label: 'Visitas Comerciais' },
    { id: 'revenda-parcerias', label: 'Revenda' },
    { id: 'sobre-vabora', label: 'Sobre a VaBora' },
    { id: 'calculadora', label: 'Calculadora' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contato', label: 'Contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const cat of categories) {
        const el = document.getElementById(cat.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveId(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      aria-label="Navegação rápida por categorias"
      className="sticky top-20 z-30 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 py-2.5 px-4 sm:px-8 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto hide-scrollbar scroll-smooth">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider shrink-0 pr-2 hidden md:inline">
          Categorias:
        </span>
        {categories.map((cat) => {
          const isActive = activeId === cat.id;
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-700 hover:text-blue-600 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};
