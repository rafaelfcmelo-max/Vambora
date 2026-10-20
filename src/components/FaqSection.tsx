import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, Filter } from 'lucide-react';
import { FAQ_ITEMS, FaqItem } from '../data/catalog';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('Todas');

  const categories = ['Todas', 'NFC e QR Code', 'Produtos', 'Serviços digitais', 'Pedidos e atendimento'];

  const filteredFaqs =
    activeCategory === 'Todas'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#050608] scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Respostas claras e transparentes sobre tecnologia NFC, especificações de produtos, serviços digitais e condições de atendimento.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar mb-8 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                activeCategory === cat
                  ? 'bg-[#1677FF] text-white border-[#35CFFF] shadow-sm'
                  : 'bg-[#0D1118] text-slate-400 border-white/5 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0D1118] border border-white/5 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#35CFFF] transition-colors"
                >
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <div className="w-7 h-7 rounded-full bg-[#151B25] flex items-center justify-center text-slate-400 shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#35CFFF]' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 bg-[#0D1118]/60 animate-fade-in">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                      <span>Categoria:</span>
                      <span className="text-[#35CFFF]">{faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Callout */}
        <div className="mt-10 p-5 rounded-2xl bg-[#0D1118] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white mb-1">Ainda ficou com alguma dúvida?</h4>
            <p className="text-xs text-slate-400">
              Nossa equipe comercial está pronta para atender você nos polos de Curitiba ou Serra Talhada.
            </p>
          </div>
          <a
            href="#contato"
            className="px-4 py-2 rounded-xl bg-[#151B25] hover:bg-[#1677FF] text-white text-xs font-bold border border-white/10 transition-colors whitespace-nowrap"
          >
            Falar com Atendimento
          </a>
        </div>
      </div>
    </section>
  );
};
