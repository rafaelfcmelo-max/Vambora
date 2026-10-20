import React from 'react';
import { Star, ArrowRight, ShieldCheck, ThumbsUp, AlertCircle } from 'lucide-react';

interface GoogleReviewsOpportunitySectionProps {
  onScrollToGoogleProducts: () => void;
  onOpenContact: (customItem: string) => void;
}

export const GoogleReviewsOpportunitySection: React.FC<GoogleReviewsOpportunitySectionProps> = ({
  onScrollToGoogleProducts,
  onOpenContact,
}) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/5 bg-gradient-to-b from-[#050608] via-[#0D1118] to-[#050608]">
      <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-[#0D1118] border border-[#1677FF]/30 relative overflow-hidden glow-border">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151B25] text-amber-400 border border-amber-500/20 text-xs font-semibold mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-white ml-1">Reputação Local</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
              Facilite o caminho entre uma boa experiência e uma avaliação.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Seu cliente teve uma boa experiência? Facilite o acesso ao perfil da sua empresa no Google. Com uma placa de avaliação, ele pode aproximar o celular compatível ou ler o QR Code para chegar ao destino configurado com menos etapas.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Avaliações públicas ajudam outros consumidores a conhecer experiências de clientes reais. A constância de avaliações e boas notas podem contribuir para a relevância considerada nas buscas locais do Google.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onScrollToGoogleProducts}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Quero facilitar as avaliações da minha empresa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenContact('Placa de Avaliação Google')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#151B25] hover:bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/10 transition-colors"
              >
                Tirar dúvidas no WhatsApp
              </button>
            </div>
          </div>

          {/* Right Card / Visual Proof with honesty disclaimer */}
          <div className="w-full lg:w-80 p-5 rounded-2xl bg-[#151B25] border border-white/10 space-y-3.5 shrink-0">
            <span className="text-[11px] font-semibold text-[#35CFFF] uppercase tracking-wider block">
              Transparência Comercial
            </span>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                <span><strong>A placa remove atrito:</strong> o cliente não precisa pesquisar o nome da empresa nem soletrar endereço.</span>
              </div>
              <div className="flex items-start gap-2">
                <ThumbsUp className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                <span><strong>Mais chances de engajar:</strong> o pedido de avaliação é feito no momento mais propício, no fechamento da conta.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-[10px] text-slate-400">
              <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
              <span>
                A placa facilita o acesso ao link; a decisão de avaliar depende do consumidor e o resultado comercial depende de fatores como qualidade e atendimento.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
