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
    <section id="calculadora" className="py-20 px-4 sm:px-8 border-t border-white/5 bg-[#0D1118]/60 scroll-mt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/30 text-xs font-semibold text-[#35CFFF] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulação Matemática de Viabilidade</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Calculadora de Retorno Potencial
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Estime quantos clientes, com base no seu lucro de contribuição individual, seriam necessários para cobrir o investimento inicial em sua solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 rounded-2xl bg-[#0D1118] border border-white/10 glow-border">
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <label className="text-xs font-bold text-white block mb-2">
                1. Selecione ou informe o investimento inicial:
              </label>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {presets.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setInvestment(p.value)}
                    className={`px-2.5 py-1.5 text-[11px] rounded-lg border transition-all ${
                      Math.abs(investment - p.value) < 0.1
                        ? 'bg-[#1677FF] text-white border-[#35CFFF]'
                        : 'bg-[#151B25] text-slate-300 border-white/5 hover:border-white/20'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">R$</span>
                <input
                  type="number"
                  min="1"
                  step="0.1"
                  value={investment}
                  onChange={(e) => setInvestment(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono rounded-xl bg-[#151B25] border border-white/10 text-white focus:outline-none focus:border-[#1677FF]"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-white block mb-1">
                2. Lucro de contribuição estimado por cliente (R$):
              </label>
              <span className="text-[11px] text-slate-400 block mb-2">
                Margem líquida que cada cliente deixa após os custos variáveis da venda.
              </span>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-mono">R$</span>
                <input
                  type="number"
                  min="0.01"
                  step="1"
                  value={profitPerClient}
                  onChange={(e) => setProfitPerClient(parseFloat(e.target.value) || 0)}
                  className="w-full pl-9 pr-3 py-2 text-sm font-mono rounded-xl bg-[#151B25] border border-white/10 text-white focus:outline-none focus:border-[#1677FF]"
                />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#151B25] border border-white/5 text-[11px] text-slate-400">
              <strong className="text-slate-200 block mb-0.5">Fórmula matemática:</strong>
              Quantidade necessária = Investimento ({formatBRL(investment)}) ÷ Lucro por cliente ({formatBRL(profitPerClient)}), arredondado para cima.
            </div>
          </div>

          {/* Results display */}
          <div className="flex flex-col justify-between p-6 rounded-xl bg-[#151B25] border border-[#1677FF]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1677FF]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <span className="text-xs font-semibold text-[#35CFFF] uppercase tracking-wider block mb-2">
                Resultado da Simulação
              </span>

              {isProfitValid && clientsNeeded !== null ? (
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-black text-white font-mono">
                      {clientsNeeded}
                    </span>
                    <span className="text-sm font-semibold text-slate-300">
                      {clientsNeeded === 1 ? 'novo cliente' : 'novos clientes'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Com apenas <strong>{clientsNeeded} {clientsNeeded === 1 ? 'cliente' : 'clientes'}</strong> gerando uma contribuição de <strong>{formatBRL(profitPerClient)}</strong> cada, sua empresa cobre integralmente o investimento inicial de <strong>{formatBRL(investment)}</strong>.
                  </p>

                  <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span>Investimento simulado:</span>
                      <span className="font-mono text-white">{formatBRL(investment)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retorno gerado ({clientsNeeded} un):</span>
                      <span className="font-mono text-emerald-400 font-semibold">{formatBRL(totalReturn)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-amber-300 text-xs">
                  Informe um lucro de contribuição maior que zero para calcular a quantidade necessária.
                </div>
              )}
            </div>

            {/* Legal compliance notice */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-start gap-2 text-[11px] text-slate-400">
              <AlertCircle className="w-4 h-4 text-[#35CFFF] shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-300">Aviso legal:</strong> Esta é uma simulação puramente matemática, não uma previsão de vendas. O produto não garante a conquista de novos clientes. O resultado prático depende da demanda, da qualidade do atendimento e de fatores comerciais do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
