import React, { useState } from 'react';
import { Shield, Star, Smartphone, MessageSquare, ArrowRight, CheckCircle2, AlertCircle, Sparkles, Inbox } from 'lucide-react';

interface ReputationProtectorSectionProps {
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
      className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#0D1118] relative overflow-hidden scroll-mt-28"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1677FF]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-4">
            <Shield className="w-3.5 h-3.5 text-[#35CFFF]" />
            <span>Organização de Feedback & Escuta Ativa</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 text-balance">
            Cuide da experiência do cliente. Fortaleça a reputação da sua empresa.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-4">
            Quer ir além da placa? Conheça o Protetor de Reputação e veja como ele pode ajudar a organizar o feedback dos seus clientes e reverter experiências negativas antes delas irem para o público.
          </p>

          {/* Stars display */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
            ))}
            <span className="text-xs text-slate-400 ml-2 font-medium">
              Comunicação responsável e respeito à liberdade do consumidor
            </span>
          </div>
        </div>

        {/* 4 Steps Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl bg-[#151B25] border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#35CFFF] shadow-[0_0_25px_rgba(53,207,255,0.15)] bg-[#151B25]'
                    : 'border-white/5 hover:border-[#1677FF]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#35CFFF]">
                      ETAPA {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#0D1118] border border-white/10 flex items-center justify-center text-[#35CFFF]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#35CFFF]" />
                  <span>Fluxo de triagem ético</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Box & Google Compliance Policy */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#151B25] border border-[#1677FF]/30 glow-border">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#35CFFF] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Condições Comerciais e Conformidade</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Como o Protetor de Reputação é Contratado
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                O Protetor organiza o recebimento do feedback, direcionando notas de 1 a 3 estrelas para a gerência interna e notas de 4 a 5 estrelas diretamente para o Google.
              </p>

              {/* Strict Ethical Google Compliance Notice */}
              <div className="p-3.5 rounded-xl bg-[#0D1118] border border-white/10 flex items-start gap-2.5 text-xs text-slate-400">
                <AlertCircle className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-slate-200">Aviso de Conformidade e Transparência:</strong> A solução organiza o recebimento de feedback para a equipe comercial. Ela <strong>não bloqueia, não apaga, não esconde e não impede</strong> avaliações públicas negativas no Google. A triagem não é uma obrigação para o consumidor e preserva integralmente a liberdade de avaliar. Não há promessa de nota garantida, posição nas buscas ou faturamento.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0D1118] border border-white/10 flex flex-col justify-between min-w-[300px]">
              <div className="mb-4">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Pacotes com Protetor de Reputação
                </span>
                <div className="space-y-3">
                  {/* Option 1: Combo Placa Plana + Protetor */}
                  <div className="p-3.5 rounded-lg bg-[#151B25] border border-white/5">
                    <span className="text-[11px] font-bold text-[#35CFFF] block">
                      Placa Plana 10 × 10 cm + Protetor
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xs text-slate-300">Inicial:</span>
                      <span className="text-base font-bold text-white font-mono">R$ 149,90</span>
                    </div>
                    <span className="text-[11px] text-[#35CFFF] block mt-1 font-medium">
                      + R$ 29,90/mês obrigatórios
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      (Manutenção do servidor e envio de e-mails ao lojista)
                    </span>
                  </div>

                  {/* Option 2: Blindagem Total */}
                  <div className="p-3.5 rounded-lg bg-[#151B25] border border-white/5">
                    <span className="text-[11px] font-bold text-white block">
                      Combo Blindagem Total (Placa em L)
                    </span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-xs text-slate-300">Inicial:</span>
                      <span className="text-base font-bold text-white font-mono">R$ 189,90</span>
                    </div>
                    <span className="text-[11px] text-[#35CFFF] block mt-1 font-medium">
                      + R$ 29,90/mês obrigatórios
                    </span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      (Display em L premium resinado incluso)
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenContact('Protetor de Reputação Google (R$ 149,90 + R$ 29,90/mês)')
                }
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-95"
              >
                <span>Solicitar Protetor de Reputação</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
