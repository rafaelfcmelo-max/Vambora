import React from 'react';
import { Info, Smartphone, ShieldCheck, HeartHandshake } from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="sobre-vabora"
      className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-white relative scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Info className="w-3.5 h-3.5 text-blue-600" />
            <span>Institucional</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Sobre a VaBora Soluções
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Conectamos o ambiente físico ao digital por meio de produtos inteligentes, tecnologia sem atrito e soluções práticas para o dia a dia das empresas.
          </p>
        </div>

        {/* Narrative & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Brand Presentation Card */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-3xl bg-gray-50 border border-gray-200 shadow-sm">
            <div className="mb-6 inline-block bg-white p-3 rounded-2xl border border-gray-200 shadow-sm">
              <img
                src={CONTACT_INFO.logo.local}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CONTACT_INFO.logo.remote;
                }}
                alt="Logotipo VaBora Soluções"
                className="h-10 w-auto object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Aproxime. Conecte. VãBora.
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-4 font-normal">
              A VaBora Soluções desenvolve e comercializa soluções para conectar empresas e clientes por meio de produtos físicos, tecnologia NFC, QR Codes inteligentes e ferramentas digitais.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              Nossa proposta central é facilitar o acesso a informações essenciais, contatos comerciais, cardápios, avaliações públicas no Google e páginas de apresentação digital. Criamos pontos de contato que eliminam a digitação manual de links e proporcionam uma experiência ágil e profissional.
            </p>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Tecnologia sem Atrito</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  Sem necessidade de baixar aplicativos. Basta aproximar um smartphone compatível com NFC ou apontar a câmera para o QR Code dinâmico.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Acabamento Nobre e Duradouro</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
                  Produzidos com acrílico cristal de 3 mm cortado a laser e resina epóxi brilhante que protege a impressão e valoriza o balcão da sua empresa.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Atendimento Regional Próximo</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">
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

export default AboutSection;
