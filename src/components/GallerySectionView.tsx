import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Ruler } from 'lucide-react';
import { GallerySection } from '../data/catalog';
import { ProductImage } from './ProductImage';
import { ProductItemCard } from './ProductItemCard';

interface GallerySectionViewProps {
  gallery: GallerySection;
  onOpenContact: (productName: string) => void;
  onOpenZoom: (src: string, alt: string) => void;
}

export const GallerySectionView: React.FC<GallerySectionViewProps> = ({
  gallery,
  onOpenContact,
  onOpenZoom,
}) => {
  const photoCarouselRef = useRef<HTMLDivElement>(null);
  const [photoIndex, setPhotoIndex] = useState(0);

  const scrollPhotos = (direction: 'left' | 'right') => {
    if (!photoCarouselRef.current) return;
    const container = photoCarouselRef.current;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 300;
    const newScroll =
      direction === 'left' ? container.scrollLeft - cardWidth : container.scrollLeft + cardWidth;
    container.scrollTo({ left: newScroll, behavior: 'smooth' });
  };

  const handleScrollUpdate = () => {
    if (!photoCarouselRef.current) return;
    const container = photoCarouselRef.current;
    const itemWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 16
      : 300;
    const index = Math.round(container.scrollLeft / itemWidth);
    setPhotoIndex(Math.min(Math.max(index, 0), gallery.photos.length - 1));
  };

  return (
    <section id={gallery.id} className="py-16 sm:py-20 px-4 sm:px-8 border-t border-white/5 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/5">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#35CFFF] uppercase tracking-wider mb-2">
              <span>Linha de Produtos</span>
              {gallery.dimension && (
                <>
                  <span className="text-slate-600">·</span>
                  <span className="inline-flex items-center gap-1 text-slate-300">
                    <Ruler className="w-3 h-3 text-[#1677FF]" />
                    {gallery.dimension}
                  </span>
                </>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {gallery.title}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-[#35CFFF] mb-3">
              {gallery.subtitle}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {gallery.description}
            </p>
          </div>

          {/* Carousel controls for desktop */}
          {gallery.photos.length > 1 && (
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollPhotos('left')}
                aria-label={`Foto anterior de ${gallery.title}`}
                className="p-2.5 rounded-xl bg-[#0D1118] hover:bg-[#151B25] border border-white/10 hover:border-[#1677FF] text-slate-300 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollPhotos('right')}
                aria-label={`Próxima foto de ${gallery.title}`}
                className="p-2.5 rounded-xl bg-[#0D1118] hover:bg-[#151B25] border border-white/10 hover:border-[#1677FF] text-slate-300 hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Real Photos Carousel */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
            <span className="font-semibold text-slate-300">Fotos reais do produto</span>
            <span className="text-slate-500 text-[11px]">
              {gallery.photos.length > 1 ? 'Deslize horizontalmente para navegar' : 'Clique para ampliar'}
            </span>
          </div>

          <div
            ref={photoCarouselRef}
            onScroll={handleScrollUpdate}
            tabIndex={0}
            role="region"
            aria-label={`Galeria de fotos: ${gallery.title}`}
            className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth pb-2 snap-x snap-mandatory focus:outline-none focus:ring-1 focus:ring-[#1677FF]/40 rounded-xl"
          >
            {gallery.photos.map((photo, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 snap-start"
              >
                <ProductImage
                  src={photo.url}
                  backupSrc={photo.backupUrl}
                  alt={photo.alt}
                  onOpenZoom={onOpenZoom}
                  aspect="aspect-4/3"
                  className="rounded-2xl border border-white/10 shadow-md hover:border-[#1677FF]/50 transition-colors"
                />
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {gallery.photos.length > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-3">
              {gallery.photos.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (photoCarouselRef.current) {
                      const container = photoCarouselRef.current;
                      const itemWidth = container.firstElementChild
                        ? (container.firstElementChild as HTMLElement).offsetWidth + 16
                        : 300;
                      container.scrollTo({ left: idx * itemWidth, behavior: 'smooth' });
                    }
                  }}
                  aria-label={`Ir para a foto ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    photoIndex === idx ? 'w-6 bg-[#35CFFF]' : 'w-1.5 bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Cards Grid with ProductItemCard */}
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Modelos e Variações Disponíveis
            </h3>
            <span className="text-xs text-slate-500">
              {gallery.products.length} {gallery.products.length === 1 ? 'modelo' : 'modelos'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.products.map((product) => (
              <ProductItemCard
                key={product.id}
                product={product}
                onOpenContact={onOpenContact}
                onOpenZoom={onOpenZoom}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
