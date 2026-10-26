import React, { useState } from 'react';
import { Image as ImageIcon, ZoomIn, Search } from 'lucide-react';

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
    <div className={`relative overflow-hidden bg-gray-50 rounded-2xl border border-gray-100 group ${aspect} ${className}`}>
      {/* Loading placeholder skeleton */}
      {!loaded && !hasError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gray-100 text-gray-400">
          <ImageIcon className="w-8 h-8 text-blue-600 mb-2 opacity-60" />
          <p className="text-xs font-semibold text-gray-700 line-clamp-2">{alt}</p>
          <span className="text-[10px] text-gray-400 mt-1">Fotografia VãBora Soluções</span>
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
              className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <div className="w-10 h-10 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg">
                <Search className="w-5 h-5 text-gray-800" />
              </div>
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ProductImage;
