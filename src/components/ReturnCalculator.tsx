import React, { useState } from 'react';
import { Calculator, AlertCircle, TrendingUp, DollarSign, Users } from 'lucide-react';

export const ReturnCalculator: React.FC = () => {
  const [investment, setInvestment] = useState<number>(79.9);
  const [profitPerClient, setProfitPerClient] = useState<number>(40);

  const presets = [
    { label: 'Placa 10x10 (R$ 79,90)', value: 79.9 },
    { label: 'Placa L Google (R$ 119,90)', value: 119.9 },
    { label: 'Kit Duplo (R$ 149,90)', value: 149.9 },
    { label: 'Blindagem Total (R$ 189,90)', value: 189.9 },
    { label: 'Presença Completa (R$ 379,90)', value: 379.9 },
  ];

  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const isProfitValid = profitPerClient > 0;
  const clientsNeeded = isProfitValid ? Math.ceil(investment / profitPerClient) : null;
  const totalReturn = clientsNeeded && isProfitValid ? clientsNeeded * profitPerClient : 0;

  return (
    <section id="calculadora" className="py-16 lg:py-20 px-4 sm:px-8 border-b border-gray-200 bg-gray-50 scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold text-blue-700 mb-3 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-blue-600" />
            <span>Simulação Matemática de Viabilidade</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Calculadora de Retorno Potencial
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-normal">
            Estime quantos clientes, com base no seu lucro de contribuição individual, seriam necessários para cobrir o investimento inicial em sua solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-7 sm:p-9 rounded-3xl bg-white border border-gray-200 shadow-sm">
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <label className="text-xs font-bold text-gray-900 block mb-2">
                1. Selecione ou informe o investimento inicial:
              </label>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {presets.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setInvestment(p.value)}
                    className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                      Math.abs(investment - p.value) < 0.1
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm font-bold'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-mono text-gray-400">R$</span>
                <input
                  type="number"
                  step="0.10"
                  min="1"
                  value={investment}
                  onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-900 block mb-2">
                2. Lucro médio estimado por cliente atendido:
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-mono text-gray-400">R$</span>
                <input
                  type="number"
                  step="1"
                  min="1"
                  value={profitPerClient}
                  onChange={(e) => setProfitPerClient(parseFloat(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
              <span className="text-[10px] text-gray-400 block mt-1 font-medium">
                Insira o lucro líquido aproximado que cada cliente novo deixa no seu negócio.
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 text-[11px] text-gray-500 font-normal">
              Apenas <strong>{clientsNeeded || 0} novos clientes</strong> já cobrem 100% do valor da sua placa ou combo.
            </div>
          </div>

          {/* Result Card */}
          <div className="flex flex-col justify-between p-7 rounded-3xl bg-blue-50/70 border border-blue-200/90 relative overflow-hidden shadow-sm">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-2">
                Resultado da Simulação
              </span>
              <h3 className="text-base font-bold text-gray-900 mb-6">
                Ponto de Equilíbrio (Break-Even)
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <span className="text-xs text-gray-500 block mb-1">
                    Novos clientes necessários:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-gray-900 font-mono tracking-tight">
                      {isProfitValid ? clientsNeeded : '—'}
                    </span>
                    <span className="text-sm font-bold text-blue-700">
                      {clientsNeeded === 1 ? 'cliente' : 'clientes'}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-blue-200/60">
                  <span className="text-xs text-gray-500 block">Faturamento gerado nesses clientes:</span>
                  <span className="text-lg font-bold text-gray-900 font-mono">
                    {formatBRL(totalReturn)}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-200/60 text-[10px] text-gray-500 leading-relaxed font-normal">
              Simulação de caráter puramente ilustrativo para apoio na tomada de decisão. O retorno efetivo depende do fluxo de público, da qualidade do atendimento e das características de cada estabelecimento.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnCalculator;
