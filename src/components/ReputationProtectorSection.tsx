import React, { useState } from 'react';
import { Shield, Star, Smartphone, MessageSquare, ArrowRight, CheckCircle2, AlertCircle, Sparkles, Inbox } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ReputationProtectorSectionProps {
  onOpenContact: (customItem: string) => void;
}

export const ReputationProtectorSection: React.FC<ReputationProtectorSectionProps> = ({
  onOpenContact,
}) => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: '01',
      title: 'Aproximação e Acesso',
      desc: 'O cliente aproxima o smartphone via NFC ou lê o QR Code no display inteligente no balcão ou mesa.',
      icon: Smartphone,
    },
    {
      step: '02',
      title: 'Percepção da Experiência',
      desc: 'O cliente indica de forma simples e rápida sua nota de satisfação com o atendimento recebido.',
      icon: Star,
    },
    {
      step: '03',
      title: 'Triagem Inteligente',
      desc: 'Avaliações de 1 a 3 estrelas são direcionadas para a gerência interna. Avaliações de 4 a 5 estrelas seguem diretamente para o Google.',
      icon: Inbox,
    },
    {
      step: '04',
      title: 'Resolução e Melhoria',
      desc: 'Sua equipe recebe os apontamentos de insatisfação em tempo hábil para corrigir falhas e reverter a experiência do cliente.',
      icon: MessageSquare,
    },
  ];

  return (
    <section
      id="protetor-reputacao"
      className="py-20 lg:py-28 px-4 sm:px-8 border-b border-gray-200 bg-gray-50 relative overflow-hidden scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-4 uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>Organização de Feedback & Escuta Ativa</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 text-balance">
            Cuide da experiência do cliente. <br />
            <span className="text-blue-600">Fortaleça a reputação da sua empresa.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-4 font-normal">
            Quer ir além da placa? Conheça o Protetor de Reputação e veja como ele pode ajudar a organizar o feedback dos seus clientes e reverter experiências negativas antes delas irem para o público.
          </p>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
            ))}
            <span className="text-xs text-gray-500 ml-2 font-medium">
              Comunicação responsável e respeito à liberdade do consumidor
            </span>
          </div>
        </motion.div>

        {/* 4 Steps Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-white shadow-xl ring-2 ring-blue-100 transform -translate-y-1'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600">
                      ETAPA {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>Fluxo de triagem ético</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commercial Box & Google Compliance Policy */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="p-7 sm:p-10 rounded-3xl bg-white border border-gray-200 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Condições Comerciais e Conformidade</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Como o Protetor de Reputação é Contratado
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                O Protetor organiza o recebimento do feedback, direcionando notas de 1 a 3 estrelas para a gerência interna e notas de 4 a 5 estrelas diretamente para o Google.
              </p>

              {/* Strict Ethical Google Compliance Notice */}
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-start gap-3 text-xs text-gray-600 shadow-sm">
                <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-gray-900">Aviso de Conformidade e Transparência:</strong> A solução organiza o recebimento de feedback para a equipe comercial. Ela <strong>não bloqueia, não apaga, não esconde e não impede</strong> avaliações públicas negativas no Google. A triagem não é uma obrigação para o consumidor e preserva integralmente a liberdade de avaliar. Não há promessa de nota garantida, posição nas buscas ou faturamento.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm flex flex-col justify-between min-w-[320px]">
              <div className="mb-5">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-3">
                  Investimento e Manutenção
                </span>
                <div className="space-y-3">
                  {/* Option 1: Implantação Avulsa do Protetor */}
                  <div className="p-4 rounded-2xl bg-white border border-gray-200 shadow-sm">
                    <span className="text-xs font-bold text-gray-900 block">
                      Implantação do Sistema Protetor
                    </span>
                    <div className="flex items-baseline justify-between mt-1.5">
                      <span className="text-xs text-gray-600">Taxa única de implantação:</span>
                      <span className="text-base font-extrabold text-gray-900 font-mono">R$ 50,00</span>
                    </div>
                    <span className="text-xs text-blue-600 block mt-1 font-bold">
                      + R$ 19,90/mês
                    </span>
                    <span className="text-[10px] text-gray-500 block mt-0.5">
                      (Manutenção do servidor e alertas por e-mail à gerência)
                    </span>
                  </div>

                  {/* Option 2: Combo Placa Plana + Protetor */}
                  <div className="p-4 rounded-2xl bg-white border border-blue-200 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-blue-700 block">
                        Placa Plana 10 × 10 cm + Protetor
                      </span>
                      <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                        Mais Popular
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mt-1.5">
                      <span className="text-xs text-gray-600">Adesão inicial (Placa + Sistema):</span>
                      <span className="text-base font-extrabold text-gray-900 font-mono">R$ 119,90</span>
                    </div>
                    <span className="text-xs text-blue-600 block mt-1 font-bold">
                      + R$ 19,90/mês
                    </span>
                    <span className="text-[10px] text-gray-500 block mt-0.5">
                      (Placa personalizada com seu logo + Protetor configurado)
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenContact('Protetor de Reputação Google (Taxa única R$ 50,00 + R$ 19,90/mês)')
                }
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Solicitar Protetor de Reputação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReputationProtectorSection;
