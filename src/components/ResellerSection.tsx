import React, { useState } from 'react';
import { Users, Send, CheckCircle2, ShieldCheck, HelpCircle, ArrowRight, Package, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export const ResellerSection: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interestType, setInterestType] = useState('Revenda física de displays e cartões');
  const [messageText, setMessageText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const primaryPolo = CONTACT_INFO.units.curitiba;

    const message =
      `Olá! Tenho interesse em ser revendedor ou parceiro comercial da VaBora Soluções.\n\n` +
      `*Nome:* ${name || 'Não informado'}\n` +
      `*Empresa:* ${company || 'Não informado'}\n` +
      `*Cidade/UF:* ${city || 'Não informado'}\n` +
      `*WhatsApp:* ${whatsapp || 'Não informado'}\n` +
      `*Tipo de Interesse:* ${interestType}\n` +
      (messageText.trim() ? `*Observações:* ${messageText.trim()}\n\n` : `\n`) +
      `Gostaria de receber informações sobre catálogo, modelos disponíveis, personalização e condições comerciais de parceria.`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${primaryPolo.rawPhone}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const benefits = [
    {
      title: 'Catálogo Oficial Completo',
      desc: 'Acesso a toda a linha de displays em L resinados, placas 10 × 10 cm, cartões bancários NFC e tags antimetal.',
    },
    {
      title: 'Condições por Quantidade',
      desc: 'Condições comerciais diferenciadas conforme o volume de unidades e recorrência para parceiros.',
    },
    {
      title: 'Personalização com a Marca do Cliente',
      desc: 'Capacidade de fornecer produtos personalizados com o logotipo e identidade visual de cada um dos seus clientes.',
    },
    {
      title: 'Combos Estruturados',
      desc: 'Soluções combinadas prontas para oferta, como Kit Duplo, Balcão Express e Presença Digital.',
    },
    {
      title: 'Logística e Envio',
      desc: 'Suporte no envio seguro com conferência de links e gravação prévia de cada chip NFC.',
    },
    {
      title: 'Atendimento Comercial Direto',
      desc: 'Canal ágil e consultivo diretamente com a equipe técnica e comercial da VaBora Soluções.',
    },
  ];

  return (
    <section
      id="revenda-parcerias"
      className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#050608] relative scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-amber-500/30 text-xs font-semibold text-amber-400 mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Oportunidade Comercial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Revenda e Parcerias Comerciais
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Seja um parceiro comercial da VaBora Soluções na sua cidade ou região. Leve tecnologia NFC, QR Codes inteligentes e displays de alto padrão para comércios, clínicas, hotéis e restaurantes locais.
          </p>
        </div>

        {/* 2-Column Layout: Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0D1118] border border-white/5 glow-border">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                O que você pode solicitar à nossa equipe:
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Apresentamos aos futuros parceiros todas as informações necessárias para avaliar a integração das soluções VaBora à sua cartela de clientes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#151B25]/60 border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-bold text-white mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#35CFFF] shrink-0" />
                      <span>{b.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrity Notice (Section 14) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#151B25] border border-white/5 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#35CFFF] shrink-0 mt-0.5" />
              <p>
                <strong>Transparência comercial:</strong> As condições de fornecimento por volume, personalizações e logística são apresentadas e alinhadas diretamente no atendimento comercial. Não divulgamos margens hipotéticas ou promessas irreais; trabalhamos com valores claros e respeito mútuo.
              </p>
            </div>
          </div>

          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1118] border border-[#1677FF]/30 glow-border">
              <div className="flex items-center gap-2 text-xs font-bold text-[#35CFFF] uppercase tracking-wider mb-2">
                <Send className="w-3.5 h-3.5" />
                <span>Solicitar Contato Comercial</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Quero ser Revendedor ou Parceiro
              </h3>
              <p className="text-xs text-slate-300 mb-6">
                Preencha os campos abaixo para conversar diretamente com nosso polo de atendimento:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B25] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Nome da Empresa / Negócio *
                  </label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Agência Criativa / Loja Física"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B25] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      Cidade e Estado *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Curitiba / PR"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B25] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="Ex: (41) 99999-9999"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B25] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Tipo de Interesse
                  </label>
                  <select
                    value={interestType}
                    onChange={(e) => setInterestType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B25] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#35CFFF] transition-colors"
                  >
                    <option value="Revenda física de displays e cartões">
                      Revenda física de displays e cartões
                    </option>
                    <option value="Agência de Marketing / Prestador de Serviços">
                      Agência de Marketing / Prestador de Serviços
                    </option>
                    <option value="Representação comercial regional">
                      Representação comercial regional
                    </option>
                    <option value="Fornecimento para redes e franquias">
                      Fornecimento para redes e franquias
                    </option>
                    <option value="Outro formato de parceria">Outro formato de parceria</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider block mb-1">
                    Mensagem ou Dúvidas (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Conte um pouco sobre sua atuação ou o volume estimado..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B25] border border-white/10 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#35CFFF] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Enviar Solicitação de Parceria</span>
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  O formulário abre o WhatsApp comercial com suas informações organizadas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
