import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  src: string | null;
  alt: string;
  onClose: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({ isOpen, src, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-center justify-between pb-3 text-slate-300 text-sm">
          <span className="font-medium truncate pr-4 text-white">{alt}</span>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              title="Abrir imagem original"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Fechar visualizador"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0F14] max-h-[80vh] flex items-center justify-center">
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            className="max-h-[80vh] w-auto max-w-full object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};
