import React from 'react';
import { MessageCircle, Check, Search, Globe, Shield, ArrowRight } from 'lucide-react';
import { DIGITAL_SERVICES } from '../data/catalog';

interface ServicesSectionProps {
  onOpenContact: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact }) => {
  // Only Google Profile and SEO services here (BioSites have their dedicated section in sequence)
  const profileServices = DIGITAL_SERVICES.filter((s) => !s.id.startsWith('biosite'));

  return (
    <section id="servicos-digitais" className="py-20 px-4 sm:px-8 bg-[#0D1118]/70 border-t border-white/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <Search className="w-3.5 h-3.5" />
            <span>Presença Digital no Google</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Serviços Especializados de Perfil Google & SEO Local
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Facilite que clientes encontrem sua empresa no Google Maps e nas buscas da sua cidade com informações comerciais padronizadas e verificadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileServices.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#0D1118] border border-white/5 flex flex-col justify-between transition-all duration-300 glow-border group"
            >
              <div>
                <span className="text-[11px] font-bold text-[#35CFFF] uppercase tracking-wider block mb-2">
                  {service.tagline}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Escopo incluído:
                  </span>
                  {service.includes.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#35CFFF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {service.scopeNote && (
                  <div className="p-3 rounded-xl bg-[#151B25] border border-white/5 text-[10px] text-slate-400 mb-5 leading-normal">
                    {service.scopeNote}
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-white/5 mb-4 flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Investimento:</span>
                  <span className="text-xl font-extrabold text-white font-mono tracking-tight">
                    {service.price}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContact(service.title)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#151B25] hover:bg-[#1677FF] text-white text-xs font-bold transition-all border border-white/10 hover:border-transparent shadow-sm group-hover:shadow-[0_0_15px_rgba(22,119,255,0.25)]"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
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
