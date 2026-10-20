import React from 'react';
import { Info, Sparkles, CheckCircle2, ShieldCheck, Cpu, Smartphone, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-vabora"
      className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#0D1118] relative scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Institucional</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Sobre a VaBora Soluções
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Conectamos o ambiente físico ao digital por meio de produtos inteligentes, tecnologia sem atrito e soluções práticas para o dia a dia das empresas.
          </p>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Brand Presentation Card */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-[#151B25] border border-white/5 glow-border">
            <div className="mb-6 inline-block bg-white p-2.5 rounded-xl border border-slate-200">
              <img
                src={CONTACT_INFO.logo.local}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CONTACT_INFO.logo.remote;
                }}
                alt="Logotipo VaBora Soluções"
                className="h-9 w-auto object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-3">
              Aproxime. Conecte. VãBora.
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              A VaBora Soluções desenvolve e comercializa soluções para conectar empresas e clientes por meio de produtos físicos, tecnologia NFC, QR Codes inteligentes e ferramentas digitais.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nossa proposta central é facilitar o acesso a informações essenciais, contatos comerciais, cardápios, avaliações públicas no Google e páginas de apresentação digital. Criamos pontos de contato que eliminam a digitação manual de links e proporcionam uma experiência ágil e profissional.
            </p>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-2xl bg-[#050608] border border-white/5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#151B25] border border-white/10 flex items-center justify-center text-[#35CFFF] shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Tecnologia sem Atrito</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Sem necessidade de baixar aplicativos. Basta aproximar um smartphone compatível com NFC ou apontar a câmera para o QR Code dinâmico.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#050608] border border-white/5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#151B25] border border-white/10 flex items-center justify-center text-[#1677FF] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Acabamento Nobre e Duradouro</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Produzidos com acrílico cristal de 3 mm cortado a laser e resina epóxi brilhante que protege a impressão e valoriza o balcão da sua empresa.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#050608] border border-white/5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#151B25] border border-white/10 flex items-center justify-center text-emerald-400 shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Atendimento Regional Próximo</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Polos de atendimento em Curitiba/PR e Serra Talhada/PE, com consultoria personalizada e envios para todo o território nacional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
