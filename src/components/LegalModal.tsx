import React from 'react';
import { X, Lock, FileText } from 'lucide-react';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[85vh] bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 tracking-tight">
                Privacidade & Termos de Uso
              </h3>
              <span className="text-[11px] text-gray-500 font-medium">VaBora Soluções</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-gray-600 leading-relaxed hide-scrollbar">
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-600" />
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
            <h4 className="text-sm font-bold text-gray-900 mb-2">
              2. Transparência sobre Tecnologia e Conformidade Google
            </h4>
            <p>
              Nossos produtos físicos utilizam chips NFC passivos regraváveis e QR Codes estáticos ou dinâmicos. O funcionamento depende da compatibilidade do smartphone do usuário final.
            </p>
            <p className="mt-1.5">
              O Protetor de Reputação organiza o recebimento interno de feedbacks e não impede, apaga ou manipula avaliações públicas deixadas pelos clientes diretamente no Google. Não prometemos notas garantidas ou alterações arbitrárias nos algoritmos de busca.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">
              3. Produção e Personalização
            </h4>
            <p>
              Itens personalizados entram em produção após o envio e aprovação digital da arte da logomarca pelo cliente. Os prazos de produção e entrega são combinados individualmente de acordo com a localidade e o volume de peças.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-2">
              4. Contato do Encarregado de Dados
            </h4>
            <p>
              Caso tenha dúvidas sobre como suas informações de contato são tratadas, entre em contato direto pelo WhatsApp oficial com nossa equipe em Curitiba/PR: (41) 98844-2761 ou Serra Talhada/PE: (87) 99157-8326.
            </p>
          </div>
        </div>

        {/* Footer Button */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gray-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
