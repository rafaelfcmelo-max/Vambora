import React, { useState } from 'react';
import { Calendar, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export interface CommercialVisitsSectionProps {
  preferredPolo: 'curitiba' | 'serraTalhada' | null;
  onSelectPolo: (polo: 'curitiba' | 'serraTalhada') => void;
}

export const CommercialVisitsSection: React.FC<CommercialVisitsSectionProps> = ({
  preferredPolo,
  onSelectPolo,
}) => {
  const [polo, setPolo] = useState<'curitiba' | 'serraTalhada'>(preferredPolo || 'curitiba');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState(preferredPolo === 'serraTalhada' ? 'Serra Talhada' : 'Curitiba');
  const [businessType, setBusinessType] = useState('');
  const [productsOfInterest, setProductsOfInterest] = useState('');
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã');

  const handlePoloChange = (newPolo: 'curitiba' | 'serraTalhada') => {
    setPolo(newPolo);
    onSelectPolo(newPolo);
    if (!city || city === 'Curitiba' || city === 'Serra Talhada') {
      setCity(newPolo === 'curitiba' ? 'Curitiba' : 'Serra Talhada');
    }
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const poloData = CONTACT_INFO.units[polo];

    const message = `Olá, equipe VãBora! Gostaria de conversar sobre soluções para minha empresa e verificar a possibilidade de uma visita comercial.\n\n` +
      `*Nome:* ${name || 'Não informado'}\n` +
      `*Empresa:* ${company || 'Não informado'}\n` +
      `*Cidade:* ${city || poloData.name}\n` +
      `*Tipo de Negócio:* ${businessType || 'Geral'}\n` +
      `*Produtos de Interesse:* ${productsOfInterest || 'Conhecer mostruário completo'}\n` +
      `*Melhor Período:* ${preferredPeriod}\n\n` +
      `Poderiam confirmar a disponibilidade de agenda?`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${poloData.rawPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="visitas" className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-gray-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Atendimento Consultivo Presencial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Atendimento e Visitas Comerciais
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Realizamos visitas comerciais em Curitiba/PR e Serra Talhada/PE mediante combinação de data e disponibilidade. Para outras cidades, consulte nossa equipe previamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Informational Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                O que você pode fazer na visita:
              </h3>
              <ul className="space-y-3.5 text-xs text-gray-600 leading-relaxed font-normal">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-gray-900 font-semibold">Conhecer amostras reais:</strong> veja de perto o brilho da resina, acabamento em acrílico 3 mm e espessura dos cartões.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-gray-900 font-semibold">Entender as diferenças:</strong> saiba qual display é ideal para balcão, mesa, quarto ou equipe externa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-gray-900 font-semibold">Definir personalizações:</strong> alinhe a aplicação correta da sua logo e paleta de cores.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong className="text-gray-900 font-semibold">Montar pacotes por atacado:</strong> condições comerciais exclusivas para múltiplas mesas, quartos ou unidades.</span>
                </li>
              </ul>
            </div>

            {/* Regional Hubs Info */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                Polos de Atendimento Físico
              </span>
              <div className="space-y-2 text-xs text-gray-700">
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-200">
                  <span className="font-bold text-gray-900">Curitiba e Região Metropolitana</span>
                  <span className="text-gray-600 font-mono font-medium">(41) 98844-2761</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 border border-gray-200">
                  <span className="font-bold text-gray-900">Serra Talhada e Sertão de PE</span>
                  <span className="text-gray-600 font-mono font-medium">(87) 99157-8326</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmitWhatsApp}
              className="p-7 sm:p-9 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                Agende uma conversa com nossa equipe
              </h3>
              <p className="text-xs text-gray-500 mb-4 font-normal">
                Preencha os dados abaixo para adiantar o alinhamento no WhatsApp. A visita depende de confirmação e agenda.
              </p>

              {/* Hub Picker */}
              <div>
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1.5">
                  Escolha o polo mais próximo:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handlePoloChange('curitiba')}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold border transition-all ${
                      polo === 'curitiba'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Polo Curitiba / PR
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePoloChange('serraTalhada')}
                    className={`py-2.5 px-3 rounded-2xl text-xs font-bold border transition-all ${
                      polo === 'serraTalhada'
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    Polo Serra Talhada / PE
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Seu Nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Carlos Silva"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Nome da Empresa / Loja:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Restaurante Bom Sabor"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Cidade:
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Ramo / Segmento:
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Clínica, Barbearia, Hotel"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                  Soluções ou produtos de maior interesse:
                </label>
                <input
                  type="text"
                  placeholder="Ex: Placas Google de balcão, cartões NFC para equipe"
                  value={productsOfInterest}
                  onChange={(e) => setProductsOfInterest(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Agendamento no WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialVisitsSection;
