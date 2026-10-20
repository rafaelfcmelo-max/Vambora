import React from 'react';
import { X, ShieldCheck, Lock, FileText } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] bg-[#0D1118] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/5 flex items-center justify-between bg-[#050608]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#1677FF]/20 flex items-center justify-center text-[#35CFFF]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">
                Privacidade & Termos de Uso
              </h3>
              <span className="text-[11px] text-slate-400">VaBora Soluções</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-300 leading-relaxed no-scrollbar">
          <div>
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#35CFFF]" />
              1. Coleta e Uso de Informações
            </h4>
            <p>
              A VaBora Soluções coleta exclusivamente as informações fornecidas voluntariamente pelo visitante ao utilizar nossos formulários de contato, sacola de compras ou solicitação de visita comercial (como nome, empresa, cidade e WhatsApp).
            </p>
            <p className="mt-1.5">
              Não solicitamos dados bancários, senhas, números de cartão de crédito ou informações desnecessárias. Todas as informações fornecidas são utilizadas unicamente para responder a dúvidas comerciais, elaborar orçamentos e formalizar pedidos.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#35CFFF]" />
              2. Finalização de Pedidos e Atendimento
            </h4>
            <p>
              A finalização de pedidos deste site é realizada diretamente através do WhatsApp comercial oficial da empresa (Curitiba/PR e Serra Talhada/PE). O site não processa pagamentos automatizados diretamente na página web nem realiza cobranças sem a prévia concordância e validação do cliente.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#35CFFF]" />
              3. Conformidade com Plataformas e Serviços de Terceiros
            </h4>
            <p>
              Nossos produtos e displays direcionam para links escolhidos pelo cliente (Google Avaliações, Instagram, WhatsApp, Cardápios ou BioSites). Nenhuma de nossas soluções bloqueia, apaga ou impede avaliações públicas dos consumidores, respeitando integralmente as diretrizes do Google e o Código de Defesa do Consumidor.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#35CFFF]" />
              4. Direitos Autorais e Personalização
            </h4>
            <p>
              Para produtos personalizados, o cliente declara possuir o direito de uso dos logotipos, nomes e materiais visuais enviados para impressão. A conferência do arquivo final e a gravação de links são confirmadas previamente com o comprador antes da produção definitiva.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-[#050608] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#151B25] hover:bg-[#1677FF] text-white text-xs font-bold border border-white/10 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
