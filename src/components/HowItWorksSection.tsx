import React from 'react';
import { Smartphone, Zap, CheckCircle, QrCode, Share2, Star, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Aproximação ou QR Code',
      desc: 'Seu cliente aproxima o smartphone compatível da placa ou cartão via NFC, ou aponta a câmera para o QR Code de alta definição.',
      icon: Smartphone,
    },
    {
      step: '02',
      title: 'Abertura Instantânea',
      desc: 'O link oficial configurado é carregado imediatamente no navegador do celular, sem precisar instalar aplicativos nem digitar endereços.',
      icon: Zap,
    },
    {
      step: '03',
      title: 'Conexão e Conversão',
      desc: 'O cliente avalia seu negócio no Google, consulta seu cardápio, envia mensagem no WhatsApp ou segue seu Instagram em segundos.',
      icon: CheckCircle,
    },
  ];

  const benefits = [
    {
      title: 'Acesso Rápido aos Links',
      desc: 'Elimine o atrito: seus clientes acessam seus canais sem precisar buscar ou digitar.',
      icon: Zap,
    },
    {
      title: 'Mais Avaliações no Google',
      desc: 'Encurte o caminho para que clientes satisfeitos deixem uma avaliação 5 estrelas antes de sair.',
      icon: Star,
    },
    {
      title: 'Apresentação Profissional',
      desc: 'Substitua papéis rasgados ou impressos improvisados por placas de acrílico 3 mm e acabamento em resina.',
      icon: ShieldCheck,
    },
    {
      title: 'Canais de Atendimento Integrados',
      desc: 'Reúna WhatsApp, Instagram, Wi-Fi e Pix em um ponto centralizado de balcão ou mesa.',
      icon: Layers,
    },
    {
      title: 'Cartões Reutilizáveis',
      desc: 'Compartilhe seus contatos profissionais com um cartão NFC nobre que nunca acaba.',
      icon: Share2,
    },
    {
      title: 'Experiência Memorável',
      desc: 'Surpreenda seus clientes com tecnologia simples, rápida e moderna desde o balcão.',
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="como-funciona" className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-gray-50 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <QrCode className="w-3.5 h-3.5 text-blue-600" />
            <span>Simplicidade em Primeiro Lugar</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Veja como funciona na prática
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Conecte seu negócio aos clientes com mais praticidade, uma apresentação profissional e acesso rápido aos seus canais digitais.
          </p>
        </div>

        {/* 3 Steps - Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-gray-200 font-mono group-hover:text-blue-200 transition-colors">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Priority Benefits Grid */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Por que sua empresa ganha com essa tecnologia?
            </h3>
            <p className="text-sm text-gray-500 font-normal">
              O visitante não precisa conhecer tecnologia para sentir o valor da solução.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, idx) => {
              const BIcon = b.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-3 rounded-2xl hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <BIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">{b.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed font-normal">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
