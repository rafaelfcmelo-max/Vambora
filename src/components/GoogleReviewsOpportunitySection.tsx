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
    <section className="py-16 sm:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold mb-4 uppercase tracking-wider">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="ml-1">Reputação Local</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 text-balance">
              Facilite o caminho entre uma boa experiência e uma avaliação.
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-4 font-normal">
              Seu cliente teve uma boa experiência? Facilite o acesso ao perfil da sua empresa no Google. Com uma placa de avaliação, ele pode aproximar o celular compatível ou ler o QR Code para chegar ao destino configurado com menos etapas.
            </p>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mb-6 font-normal">
              Avaliações públicas ajudam outros consumidores a conhecer experiências de clientes reais. A constância de avaliações e boas notas podem contribuir para a relevância considerada nas buscas locais do Google.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={onScrollToGoogleProducts}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Quero facilitar as avaliações da minha empresa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onOpenContact('Placa de Avaliação Google')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-bold border border-gray-300 transition-colors shadow-sm active:scale-95"
              >
                Tirar dúvidas no WhatsApp
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="w-full lg:w-80 p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 shrink-0">
            <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">
              Transparência Comercial
            </span>

            <div className="space-y-3 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong className="text-gray-900">A placa remove atrito:</strong> o cliente não precisa pesquisar o nome da empresa nem soletrar endereço.</span>
              </div>
              <div className="flex items-start gap-2">
                <ThumbsUp className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span><strong className="text-gray-900">Mais chances de engajar:</strong> o pedido de avaliação é feito no momento mais propício, no fechamento da conta.</span>
              </div>
            </div>

            <div className="pt-3 border-t border-gray-100 flex items-start gap-2 text-[10px] text-gray-500">
              <AlertCircle className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
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

export default GoogleReviewsOpportunitySection;
