import React from 'react';
import { MessageCircle, Instagram, ArrowUp, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export const FinalContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-16 lg:py-20 px-4 sm:px-8 bg-white border-t border-gray-200 relative overflow-hidden scroll-mt-28">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
          Atendimento Direto & Personalizado
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-5 text-balance">
          Vamos conectar sua empresa ao próximo nível digital?
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Conheça nossas soluções e encontre a opção ideal para o seu negócio. A VãBora Soluções está pronta para ajudar sua empresa a aproximar clientes, organizar seus canais digitais e aprimorar sua presença online.
        </p>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {/* Curitiba */}
          <a
            href={CONTACT_INFO.units.curitiba.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-3xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-600 transition-all duration-200 group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-gray-900 block group-hover:text-blue-600 transition-colors">
                  Falar com Curitiba/PR
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {CONTACT_INFO.units.curitiba.phone}
                </span>
              </div>
            </div>
            <MessageCircle className="w-5 h-5 text-blue-600" />
          </a>

          {/* Serra Talhada */}
          <a
            href={CONTACT_INFO.units.serraTalhada.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 rounded-3xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-600 transition-all duration-200 group shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-sm font-bold text-gray-900 block group-hover:text-blue-600 transition-colors">
                  Falar com Serra Talhada/PE
                </span>
                <span className="text-xs text-gray-500 font-mono">
                  {CONTACT_INFO.units.serraTalhada.phone}
                </span>
              </div>
            </div>
            <MessageCircle className="w-5 h-5 text-blue-600" />
          </a>
        </div>

        {/* Instagram & Back to top (Pill Buttons) */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
          <a
            href={CONTACT_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold transition-all border border-gray-200 shadow-sm"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Acompanhar no Instagram</span>
          </a>

          <a
            href="#inicio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold border border-blue-100 transition-all shadow-sm"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Voltar ao topo</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalContactSection;
