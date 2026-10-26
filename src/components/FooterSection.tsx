import React, { useState } from 'react';
import { CONTACT_INFO } from '../data/catalog';
import { LegalModal } from './LegalModal';

export const FooterSection: React.FC = () => {
  const [legalOpen, setLegalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-100 border-t border-gray-200 py-12 px-4 sm:px-8 text-gray-500 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand Lockup */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center shrink-0">
              <img
                src={CONTACT_INFO.logo.local}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CONTACT_INFO.logo.remote;
                }}
                alt="VãBora Soluções"
                className="h-8 w-auto object-contain"
              />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900 tracking-tight">
                {CONTACT_INFO.name} — <span className="text-blue-600 font-medium">{CONTACT_INFO.slogan}</span>
              </div>
              <p className="text-[11px] text-gray-500 mt-0.5">
                {CONTACT_INFO.positioning}
              </p>
            </div>
          </div>

          {/* Polos, Legal Links & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-[11px] text-gray-500">
            <div className="flex items-center gap-2">
              <span>Polo Curitiba/PR: (41) 98844-2761</span>
              <span>·</span>
              <span>Polo Serra Talhada/PE: (87) 99157-8326</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <button
              type="button"
              onClick={() => setLegalOpen(true)}
              className="text-gray-600 hover:text-blue-600 underline underline-offset-2 transition-colors font-medium"
            >
              Privacidade e Termos
            </button>
            <span className="hidden sm:inline">|</span>
            <span>© {new Date().getFullYear()} VaBora Soluções. Todos os direitos reservados.</span>
          </div>
        </div>
      </footer>

      <LegalModal isOpen={legalOpen} onClose={() => setLegalOpen(false)} />
    </>
  );
};

export default FooterSection;
