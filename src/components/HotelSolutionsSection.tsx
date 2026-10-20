import React, { useState } from 'react';
import { Building2, Wifi, Utensils, MessageSquare, ArrowRight, ShieldCheck, Bed, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

interface HotelSolutionsSectionProps {
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
    <section id="para-empresas" className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#050608] scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1118] border border-[#1677FF]/30 relative overflow-hidden glow-border">
          {/* Ambient lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Soluções para Empresas & Hotelaria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Hotelaria e Quarto Inteligente
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
              Modernize a experiência dos seus hóspedes com pontos de acesso digital distribuídos pelos quartos, recepção, restaurante e áreas comuns do seu hotel ou pousada.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Elimine folhetos de papel desgastados e facilite a solicitação de room service, acesso ao Wi-Fi e avaliações no Google na recepção. Orçamento calculado sob medida conforme as características do seu estabelecimento.
            </p>
          </div>

          {/* Applications Grid (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-[#151B25] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1118] border border-white/10 flex items-center justify-center text-[#35CFFF] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{app.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{app.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Action & Interactive Form Toggle */}
          <div className="pt-6 border-t border-white/10">
            {!showForm ? (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Condição comercial:</span>
                  <span className="text-xl font-bold text-white font-mono">Orçamento Personalizado</span>
                  <span className="text-[11px] text-slate-400 block">
                    Sem quantidade mínima prévia ou preços fixos inventados. Proposta sob medida.
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Preencher Solicitação de Orçamento</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendQuoteWhatsApp} className="p-6 rounded-2xl bg-[#050608] border border-white/10 space-y-4 animate-fade-in">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-white">
                    Solicitação de Orçamento para Hotelaria
                  </h4>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    Fechar formulário
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Tipo de Estabelecimento *
                    </label>
                    <select
                      value={establishmentType}
                      onChange={(e) => setEstablishmentType(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-[#151B25] border border-white/10 text-xs text-white"
                    >
                      <option value="Pousada">Pousada</option>
                      <option value="Hotel">Hotel</option>
                      <option value="Resort">Resort</option>
                      <option value="Hostel / Acomodação Coletiva">Hostel</option>
                      <option value="Flats / Aluguel por Temporada">Flats / Temporada</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Cidade e Estado *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Foz do Iguaçu / PR"
                      className="w-full px-3 py-2 rounded-lg bg-[#151B25] border border-white/10 text-xs text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Quantidade Aprox. de Quartos *
                    </label>
                    <input
                      type="text"
                      required
                      value={roomsCount}
                      onChange={(e) => setRoomsCount(e.target.value)}
                      placeholder="Ex: 15 quartos / 2 áreas comuns"
                      className="w-full px-3 py-2 rounded-lg bg-[#151B25] border border-white/10 text-xs text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      WhatsApp de Contato *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      placeholder="Ex: (41) 99999-9999"
                      className="w-full px-3 py-2 rounded-lg bg-[#151B25] border border-white/10 text-xs text-white placeholder-slate-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                      Necessidades Específicas
                    </label>
                    <input
                      type="text"
                      value={needs}
                      onChange={(e) => setNeeds(e.target.value)}
                      placeholder="Ex: Wi-Fi nos quartos e cardápio de room service"
                      className="w-full px-3 py-2 rounded-lg bg-[#151B25] border border-white/10 text-xs text-white placeholder-slate-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs font-bold shadow-md transition-all flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Pedido de Orçamento no WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
