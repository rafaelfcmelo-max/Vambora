import React, { useState } from 'react';
import { Building2, Wifi, Utensils, MessageSquare, ArrowRight, ShieldCheck, Bed, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export interface HotelSolutionsSectionProps {
  onOpenContact: (customItem: string) => void;
}

export const HotelSolutionsSection: React.FC<HotelSolutionsSectionProps> = ({ onOpenContact }) => {
  const [establishmentType, setEstablishmentType] = useState('Pousada');
  const [city, setCity] = useState('');
  const [roomsCount, setRoomsCount] = useState('');
  const [needs, setNeeds] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [showForm, setShowForm] = useState(false);

  const applications = [
    {
      title: 'Placas para Wi-Fi',
      desc: 'Hóspede conecta à rede Wi-Fi do quarto ou áreas comuns por aproximação, sem precisar digitar senhas.',
      icon: Wifi,
    },
    {
      title: 'Cardápios e Room Service',
      desc: 'Cardápio digital de restaurante, frigobar ou café da manhã acessível diretamente no celular.',
      icon: Utensils,
    },
    {
      title: 'Informações Úteis para Hóspedes',
      desc: 'Regulamento interno, horários de café, telefones úteis, passeios e dicas turísticas locais.',
      icon: Bed,
    },
    {
      title: 'Links de Serviços e Atendimento',
      desc: 'Canal direto com a recepção, governança e pedidos via WhatsApp com facilidade.',
      icon: MessageSquare,
    },
    {
      title: 'Placas para Recepção',
      desc: 'Display em L na recepção principal para check-in, check-out e avaliações no Google.',
      icon: Building2,
    },
    {
      title: 'Quartos, Mesas e Áreas Comuns',
      desc: 'Identificação numerada por quarto ou mesa em acrílico 3 mm resinado com alta durabilidade.',
      icon: ShieldCheck,
    },
  ];

  const handleSendQuoteWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const primaryPolo = CONTACT_INFO.units.curitiba;

    const message =
      `Olá! Gostaria de solicitar um orçamento personalizado para Hotelaria e Quarto Inteligente da VaBora Soluções.\n\n` +
      `*Tipo de Estabelecimento:* ${establishmentType}\n` +
      `*Cidade/UF:* ${city || 'Não informado'}\n` +
      `*Quantidade aproximada de quartos/ambientes:* ${roomsCount || 'A definir'}\n` +
      `*WhatsApp de Contato:* ${contactPhone || 'Não informado'}\n` +
      (needs.trim() ? `*Necessidades específicas:* ${needs.trim()}\n\n` : `\n`) +
      `Poderiam me enviar uma proposta comercial sob medida?`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${primaryPolo.rawPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="para-empresas" className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Soluções para Empresas & Hotelaria</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Hotelaria e Quarto Inteligente
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-4 font-normal">
              Modernize a experiência dos seus hóspedes com pontos de acesso digital distribuídos pelos quartos, recepção, restaurante e áreas comuns do seu hotel ou pousada.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed font-normal">
              Elimine folhetos de papel desgastados e facilite a solicitação de room service, acesso ao Wi-Fi e avaliações no Google na recepção. Orçamento calculado sob medida conforme as características do seu estabelecimento.
            </p>
          </div>

          {/* Applications Grid (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div key={idx} className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-3 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{app.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-normal">{app.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Action & Interactive Form Toggle */}
          <div className="pt-6 border-t border-gray-200">
            {!showForm ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-gray-400 block mb-0.5">Condição comercial:</span>
                  <span className="text-xl font-extrabold text-gray-900 font-mono">Orçamento Personalizado</span>
                  <span className="text-[11px] text-gray-500 block font-normal">
                    Sem quantidade mínima prévia ou preços fixos inventados. Proposta sob medida.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Preencher Solicitação de Orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendQuoteWhatsApp} className="p-6 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-gray-900">
                    Solicitação de Orçamento para Hotelaria
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs text-gray-500 hover:text-gray-900 font-semibold"
                  >
                    Fechar formulário
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      Tipo de Estabelecimento:
                    </label>
                    <select
                      value={establishmentType}
                      onChange={(e) => setEstablishmentType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                    >
                      <option value="Hotel">Hotel</option>
                      <option value="Pousada">Pousada</option>
                      <option value="Resort">Resort</option>
                      <option value="Hostel">Hostel</option>
                      <option value="Restaurante / Bar">Restaurante / Bar</option>
                      <option value="Outro Negócio">Outro Negócio</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      Cidade / UF:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Curitiba / PR"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      Quantidade aproximada de quartos ou mesas:
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 25 quartos / 10 mesas"
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      WhatsApp para contato:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(DD) 99999-9999"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Necessidades específicas (opcional):
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Queremos placas de Wi-Fi para quartos e cardápio de restaurante..."
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelSolutionsSection;
