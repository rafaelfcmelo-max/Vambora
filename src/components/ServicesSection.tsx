import React from 'react';
import { MessageCircle, Check, Search } from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/catalog';

export interface ServicesSectionProps {
  onOpenContact: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  const profileServices = DIGITAL_SERVICES.filter((s) => !s.id.startsWith('biosite'));

  return (
    <section id="servicos" className="py-16 lg:py-20 px-4 sm:px-8 bg-gray-50 border-b border-gray-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Search className="w-3.5 h-3.5 text-blue-600" />
            <span>Presença Digital no Google</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Serviços Especializados de Perfil Google & SEO Local
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Facilite que clientes encontrem sua empresa no Google Maps e nas buscas da sua cidade com informações comerciais padronizadas e verificadas.
          </p>
        </div>

        {/* Services Mobile Snap Carousel, Desktop Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:overflow-visible">
          {profileServices.map((service) => (
            <div
              key={service.id}
              className="snap-center shrink-0 w-[85%] sm:w-[70%] md:w-auto mr-4 md:mr-0 p-6 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-2 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100 w-fit">
                  {service.tagline}
                </span>

                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed mb-5 font-normal">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Escopo incluído:
                  </span>
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {service.scopeNote && (
                  <div className="p-3 rounded-2xl bg-gray-50 border border-gray-200 text-[10px] text-gray-500 mb-5 leading-normal font-medium">
                    {service.scopeNote}
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-gray-100 mb-4 flex items-baseline justify-between">
                  <span className="text-xs text-gray-400">Investimento:</span>
                  <span className="text-xl font-extrabold text-gray-900 font-mono tracking-tight">
                    {service.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContact(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Contratar no WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
