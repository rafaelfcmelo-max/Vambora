import React from 'react';
import { Layers, CreditCard, Globe, Star, ArrowUpRight } from 'lucide-react';

export const SolutionsIntro: React.FC = () => {
  const areas = [
    {
      title: 'Placas e displays inteligentes',
      description:
        'Modelos em L para balcão e placas planas 10 × 10 cm com fita 3M para balcões, mesas e consultórios.',
      icon: Layers,
      href: '#placas-em-l',
      badge: 'Balcão & Recepção',
    },
    {
      title: 'Cartões e tags NFC',
      description:
        'Cartões executivos em acabamento premium, tags antimetal adesivas e tags resinadas 8 × 8 cm.',
      icon: CreditCard,
      href: '#cartoes-inteligentes-nfc',
      badge: 'Portabilidade & Mesas',
    },
    {
      title: 'BioSites e presença digital',
      description:
        'Mini-sites estruturados, páginas dinâmicas e otimização completa de ficha no Google Meu Negócio.',
      icon: Globe,
      href: '#servicos-digitais',
      badge: 'Presença Online',
    },
    {
      title: 'Gestão de reputação e feedbacks',
      description:
        'Solução de escuta ativa do cliente, incentivo a avaliações no Google e canal privado complementar.',
      icon: Star,
      href: '#protetor-reputacao',
      badge: 'Excelência & Confiança',
    },
  ];

  return (
    <section id="solucoes" className="py-20 px-4 sm:px-8 bg-[#0B0F14]/50 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#35CFFF] uppercase tracking-wider block mb-2">
            Ecossistema VãBora Soluções
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tecnologia para aproximar sua empresa dos clientes.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Descubra soluções que facilitam o acesso às suas avaliações, aos seus canais digitais e às informações do seu negócio. Escolha o formato ideal para o balcão, a mesa, o quarto, o consultório ou a equipe comercial.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {areas.map((area, idx) => {
            const Icon = area.icon;
            return (
              <a
                key={idx}
                href={area.href}
                className="group relative p-6 rounded-2xl bg-[#0B0F14] hover:bg-[#101B32]/70 border border-white/5 hover:border-[#1677FF]/50 transition-all duration-300 flex flex-col justify-between glow-border"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1677FF]/15 border border-[#1677FF]/30 flex items-center justify-center text-[#35CFFF] group-hover:scale-110 group-hover:bg-[#1677FF] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-[#35CFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                    {area.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#35CFFF] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-[#1677FF] group-hover:text-[#35CFFF]">
                  <span>Ver produtos da categoria</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
