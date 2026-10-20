import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn } from 'lucide-react';

interface ProductImageProps {
  src: string;
  backupSrc?: string;
  alt: string;
  className?: string;
  onOpenZoom?: (src: string, alt: string) => void;
  aspect?: string;
}

export const ProductImage: React.FC<ProductImageProps> = ({
  src,
  backupSrc,
  alt,
  className = '',
  onOpenZoom,
  aspect = 'aspect-4/3',
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const handleError = () => {
    if (backupSrc && currentSrc !== backupSrc) {
      setCurrentSrc(backupSrc);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#0B0F14] rounded-xl border border-white/5 group ${aspect} ${className}`}>
      {/* Loading placeholder skeleton */}
      {!loaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#0B0F14] text-slate-400">
          <ImageIcon className="w-8 h-8 text-[#1677FF] mb-2 opacity-60" />
          <p className="text-xs font-medium text-slate-300 line-clamp-2">{alt}</p>
          <span className="text-[10px] text-slate-500 mt-1">Fotografia VãBora Soluções</span>
        </div>
      ) : (
        <>
          <img
            src={currentSrc}
            alt={alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={handleError}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {onOpenZoom && loaded && (
            <button
              type="button"
              onClick={() => onOpenZoom(currentSrc, alt)}
              aria-label={`Ampliar foto: ${alt}`}
              className="absolute bottom-2 right-2 p-2 bg-[#050608]/80 hover:bg-[#1677FF] text-white rounded-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 backdrop-blur-sm shadow-md"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
          )}
        </>
      )}
    </div>
  );
};
