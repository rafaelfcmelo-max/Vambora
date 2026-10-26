import React from 'react';
import { Utensils, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export const RestaurantJourneySection: React.FC = () => {
  const steps = [
    {
      step: '01',
      stage: 'Na Mesa do Cliente',
      title: 'Cardápio Digital, Wi-Fi e Pix',
      desc: 'O cliente senta, aproxima o celular da tag na mesa ou lê o QR Code e já acessa o cardápio atualizado e a senha do Wi-Fi.',
      color: 'text-blue-600',
      icon: Utensils,
      options: [
        'Tag NFC Anti-Metal resinada 30 mm (para mesas de metal ou madeira)',
        'Placa 8 × 8 cm resinada numerada por mesa',
        'BioSite Essencial ou Profissional com cardápio digital',
      ],
    },
    {
      step: '02',
      stage: 'No Atendimento',
      title: 'Garçom e Equipe Ágil',
      desc: 'Sua equipe apresenta opções de pratos, promoções do dia e coleta pedidos com auxílio de cartão NFC inteligente no bolso.',
      color: 'text-blue-600',
      icon: Utensils,
      options: [
        'Cartão NFC Executivo para maitre ou garçons',
        'Acesso rápido à carta de vinhos ou sobremesas',
        'Menos tempo gasto com troca de cardápios impressos',
      ],
    },
    {
      step: '03',
      stage: 'No Caixa e Saída',
      title: 'Google Avaliações e Protetor',
      desc: 'Na hora de pagar a conta no balcão, o cliente é convidado a avaliar a experiência no Google.',
      color: 'text-amber-500',
      icon: Utensils,
      options: [
        'Display em L 11 × 16 cm resinado no balcão de pagamento',
        'Placa Plana 10 × 10 cm personalizada com a marca da casa',
        'Protetor de Reputação para escutar o cliente antes de notas baixas',
      ],
    },
  ];

  const handleWhatsAppKit = () => {
    const curitiba = CONTACT_INFO.units.curitiba;
    const message =
      `Olá! Tenho um bar / restaurante / lanchonete e gostaria de saber mais sobre o kit completo de jornada:\n\n` +
      `- Tags/placas para mesas (cardápio e Wi-Fi)\n` +
      `- Cartões NFC para a equipe\n` +
      `- Display para o balcão/caixa\n\n` +
      `Poderiam me orientar com as opções e orçamento personalizado?`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${curitiba.rawPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="jornada-restaurantes" className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white relative scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800 mb-3 uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Projetos e Kits por Segmento</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            A Jornada Completa do Seu Cliente no Bar, Restaurante ou Lanchonete
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Conecte cada ponto de contato físico do seu estabelecimento: desde o pedido na mesa até a saída e a fidelização com avaliações no Google.
          </p>
        </div>

        {/* 3 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      ETAPA {st.step} · {st.stage}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                      <Icon className={`w-4 h-4 ${st.color}`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                    {st.title}
                  </h3>

                  <p className="text-xs text-gray-500 leading-relaxed mb-5 font-normal">
                    {st.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-gray-200 mb-6">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                      Opções recomendadas:
                    </span>
                    {st.options.map((opt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{opt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 text-[11px] text-gray-400 font-medium">
                  <span>Praticidade comprovada no balcão e no salão.</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Box with CTA & Compliance */}
        <div className="p-7 sm:p-9 rounded-3xl bg-gray-50 border border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Pronto para modernizar o atendimento do seu estabelecimento?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 font-normal">
              Combinamos a quantidade exata de tags para suas mesas, cartões NFC para seus garçons e displays de balcão com condições comerciais sob medida.
            </p>
            <div className="p-3.5 rounded-2xl bg-white border border-gray-200 text-[11px] text-gray-500 leading-relaxed">
              <strong className="text-gray-900">Compromisso de Ética e Transparência:</strong> As soluções facilitam o acesso aos canais e avaliações. Não condicionamos pedidos de avaliação à satisfação do cliente, não oferecemos recompensas por avaliações positivas e não prometemos multiplicação garantida de notas.
            </div>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppKit}
            className="w-full lg:w-auto px-7 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 whitespace-nowrap active:scale-95 shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Quero Montar o Kit para Meu Bar / Restaurante</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RestaurantJourneySection;
