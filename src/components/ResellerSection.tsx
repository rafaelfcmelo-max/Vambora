import React, { useState } from 'react';
import { Users, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
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
      className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white relative scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-blue-600" />
            <span>Oportunidade Comercial</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Revenda e Parcerias Comerciais
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Seja um parceiro comercial da VaBora Soluções na sua cidade ou região. Leve tecnologia NFC, QR Codes inteligentes e displays de alto padrão para comércios, clínicas, hotéis e restaurantes locais.
          </p>
        </div>

        {/* 2-Column Layout: Information & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Information Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-9 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                O que você pode solicitar à nossa equipe:
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Apresentamos aos futuros parceiros todas as informações necessárias para avaliar a integração das soluções VaBora à sua cartela de clientes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-900 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{b.title}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrity Notice */}
            <div className="p-5 rounded-3xl bg-blue-50/70 border border-blue-100 text-xs text-gray-700 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <p>
                <strong className="text-gray-900 font-bold">Transparência comercial:</strong> As condições de fornecimento por volume, personalizações e logística são apresentadas e alinhadas diretamente no atendimento comercial. Não divulgamos margens hipotéticas ou promessas irreais; trabalhamos com valores claros e respeito mútuo.
              </p>
            </div>
          </div>

          {/* Form Column (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Send className="w-3.5 h-3.5 text-blue-600" />
                <span>Solicitar Contato Comercial</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quero ser Revendedor ou Parceiro
              </h3>
              <p className="text-xs text-gray-500 mb-6 font-normal">
                Preencha os campos abaixo para conversar diretamente com nosso polo de atendimento:
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Carlos Silva"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Nome da Empresa / Agência / Loja:
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ex: Agência Criativa / Papelaria Central"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      Cidade / UF *
                    </label>
                    <input
                      type="text"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Londrina / PR"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(00) 00000-0000"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Modalidade de Interesse:
                  </label>
                  <select
                    value={interestType}
                    onChange={(e) => setInterestType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-blue-600"
                  >
                    <option value="Revenda física de displays e cartões">Revenda física de displays e cartões</option>
                    <option value="Parceria de indicação comercial">Parceria de indicação comercial</option>
                    <option value="Agência / Gráfica parceira">Agência / Gráfica parceira</option>
                    <option value="Fornecimento em grande volume / Corporativo">Fornecimento em grande volume / Corporativo</option>
                    <option value="Outro formato">Outro formato</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-1">
                    Mensagem adicional (opcional):
                  </label>
                  <textarea
                    rows={2}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Conte um pouco sobre sua atuação e sua cidade..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitação de Parceria</span>
                </button>

                {submitted && (
                  <p className="text-[11px] text-emerald-600 font-semibold text-center mt-2 animate-fade-in">
                    ✓ Janela do WhatsApp aberta! Conclua o envio da mensagem para nossa equipe.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerSection;
