import React from 'react';
import { MessageCircle, Instagram, ArrowUp, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export const FinalContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-[#050608] via-[#0D1118] to-[#050608] border-t border-white/5 relative overflow-hidden scroll-mt-28">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-semibold text-[#35CFFF] uppercase tracking-wider block mb-2">
          Atendimento Direto & Personalizado
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 text-balance">
          Vamos conectar sua empresa ao próximo nível digital?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Conheça nossas soluções e encontre a opção ideal para o seu negócio. A VãBora Soluções está pronta para ajudar sua empresa a aproximar clientes, organizar seus canais digitais e aprimorar sua presença online.
        </p>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {/* Curitiba */}
          <a
            href={CONTACT_INFO.units.curitiba.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#0D1118] hover:bg-[#151B25] border border-[#1677FF]/40 hover:border-[#35CFFF] transition-all duration-200 group shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#35CFFF] group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-white block group-hover:text-[#35CFFF] transition-colors">
                  Falar com Curitiba/PR
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {CONTACT_INFO.units.curitiba.phone}
                </span>
              </div>
            </div>
            <MessageCircle className="w-5 h-5 text-[#35CFFF]" />
          </a>

          {/* Serra Talhada */}
          <a
            href={CONTACT_INFO.units.serraTalhada.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-[#0D1118] hover:bg-[#151B25] border border-[#1677FF]/40 hover:border-[#35CFFF] transition-all duration-200 group shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1677FF]/20 flex items-center justify-center text-[#35CFFF] group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-white block group-hover:text-[#35CFFF] transition-colors">
                  Falar com Serra Talhada/PE
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {CONTACT_INFO.units.serraTalhada.phone}
                </span>
              </div>
            </div>
            <MessageCircle className="w-5 h-5 text-[#35CFFF]" />
          </a>
        </div>

        {/* Instagram & Back to top */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <a
            href={CONTACT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0D1118] border border-white/10 hover:border-[#35CFFF] text-slate-300 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#35CFFF]" />
            <span>Acompanhar no Instagram</span>
          </a>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#151B25] border border-[#1677FF]/30 hover:border-[#35CFFF] text-[#35CFFF] hover:text-white transition-colors font-medium"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Voltar ao topo</span>
          </a>
        </div>
      </div>
    </section>
  );
};
