import React, { useState } from 'react';
import { Calendar, MapPin, Building, Briefcase, MessageCircle, CheckCircle2, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

interface CommercialVisitsSectionProps {
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
    <section id="visitas" className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#0D1118]/70 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Atendimento Consultivo Presencial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Atendimento e Visitas Comerciais
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Realizamos visitas comerciais em Curitiba/PR e Serra Talhada/PE mediante combinação de data e disponibilidade. Para outras cidades, consulte nossa equipe previamente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Informational Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0D1118] border border-white/5 glow-border">
              <h3 className="text-lg font-bold text-white mb-4">
                O que você pode fazer na visita:
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                  <span><strong>Conhecer amostras reais:</strong> veja de perto o brilho da resina, acabamento em acrílico 3 mm e espessura dos cartões.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                  <span><strong>Entender as diferenças:</strong> saiba qual display é ideal para balcão, mesa, quarto ou equipe externa.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                  <span><strong>Definir personalizações:</strong> alinhe a aplicação correta da sua logo e paleta de cores.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                  <span><strong>Montar pacotes por atacado:</strong> condições comerciais exclusivas para múltiplas mesas, quartos ou unidades.</span>
                </li>
              </ul>
            </div>

            {/* Regional Hubs Info */}
            <div className="p-5 rounded-2xl bg-[#151B25] border border-white/5">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Polos de Atendimento Físico
              </span>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1118]">
                  <span className="font-semibold text-white">Curitiba e Região Metropolitana</span>
                  <span className="text-slate-400 font-mono">(41) 98844-2761</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#0D1118]">
                  <span className="font-semibold text-white">Serra Talhada e Sertão de PE</span>
                  <span className="text-slate-400 font-mono">(87) 99157-8326</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmitWhatsApp}
              className="p-6 sm:p-8 rounded-2xl bg-[#0D1118] border border-[#1677FF]/30 glow-border space-y-4"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                Agende uma conversa com nossa equipe
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Preencha os dados abaixo para adiantar o alinhamento no WhatsApp. A visita depende de confirmação e agenda.
              </p>

              {/* Hub Picker */}
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                  Escolha o polo mais próximo:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handlePoloChange('curitiba')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      polo === 'curitiba'
                        ? 'bg-[#1677FF] text-white border-[#35CFFF]'
                        : 'bg-[#151B25] text-slate-400 border-white/5 hover:border-white/20'
                    }`}
                  >
                    Polo Curitiba / PR
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePoloChange('serraTalhada')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all ${
                      polo === 'serraTalhada'
                        ? 'bg-[#1677FF] text-white border-[#35CFFF]'
                        : 'bg-[#151B25] text-slate-400 border-white/5 hover:border-white/20'
                    }`}
                  >
                    Polo Serra Talhada / PE
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Seu Nome:</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full text-xs p-2.5 rounded-xl bg-[#151B25] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1677FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Nome da Empresa:</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Restaurante Sabor & Arte"
                    className="w-full text-xs p-2.5 rounded-xl bg-[#151B25] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1677FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Sua Cidade / Bairro:</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Ex: Curitiba / Batel"
                    className="w-full text-xs p-2.5 rounded-xl bg-[#151B25] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1677FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Tipo de Negócio:</label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="Ex: Clínica, Restaurante, Hotel, Loja"
                    className="w-full text-xs p-2.5 rounded-xl bg-[#151B25] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1677FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Produtos de Interesse:</label>
                  <input
                    type="text"
                    value={productsOfInterest}
                    onChange={(e) => setProductsOfInterest(e.target.value)}
                    placeholder="Ex: Placas em L, Tags de Mesa, Cartões"
                    className="w-full text-xs p-2.5 rounded-xl bg-[#151B25] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#1677FF]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Melhor Período:</label>
                  <select
                    value={preferredPeriod}
                    onChange={(e) => setPreferredPeriod(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl bg-[#151B25] border border-white/10 text-white focus:outline-none focus:border-[#1677FF]"
                  >
                    <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                    <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                    <option value="Horário Comercial Flexível">Horário Comercial Flexível</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-md transition-all pt-3.5"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Quero Agendar uma Visita / Conversa</span>
              </button>

              <p className="text-[10px] text-slate-500 text-center leading-tight">
                *O envio deste formulário inicia o contato no WhatsApp oficial. A visita é combinada diretamente com a equipe conforme a agenda da sua região.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
