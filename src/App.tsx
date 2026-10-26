import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { TopNav } from './components/TopNav';
import { CategoryAnchorBar } from './components/CategoryAnchorBar';
import { HeroSection } from './components/HeroSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { GooglePlatesSection } from './components/GooglePlatesSection';
import { ReputationProtectorSection } from './components/ReputationProtectorSection';
import { GallerySectionView } from './components/GallerySectionView';
import { NfcCardsSection } from './components/NfcCardsSection';
import { CombosSection } from './components/CombosSection';
import { BioSiteShowcaseSection } from './components/BioSiteShowcaseSection';
import { ServicesSection } from './components/ServicesSection';
import { HotelSolutionsSection } from './components/HotelSolutionsSection';
import { CommercialVisitsSection } from './components/CommercialVisitsSection';
import { ResellerSection } from './components/ResellerSection';
import { AboutSection } from './components/AboutSection';
import { ReturnCalculator } from './components/ReturnCalculator';
import { FaqSection } from './components/FaqSection';
import { FinalContactSection } from './components/FinalContactSection';
import { FooterSection } from './components/FooterSection';
import { CartDrawer } from './components/CartDrawer';
import { PoloSelectorModal, WhatsAppTarget } from './components/PoloSelectorModal';
import { ImageLightbox } from './components/ImageLightbox';
import {
  PLACAS_EM_L,
  PLACAS_PLANAS_PADRAO,
  PLACAS_PLANAS_PERSONALIZADAS,
  PLACAS_8X8_RESINADAS,
  TAGS_ANTIMETAL,
} from './data/catalog';

export function App() {
  const [preferredPolo, setPreferredPolo] = useState<'curitiba' | 'serraTalhada' | null>(null);
  const [modalTarget, setModalTarget] = useState<WhatsAppTarget | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lightbox state for high-res photo inspection
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>('');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenContact = (
    itemName?: string,
    itemType: 'product' | 'service' | 'combo' | 'general' = 'product'
  ) => {
    setModalTarget({ itemName, itemType });
    setIsModalOpen(true);
  };

  const handleOpenZoom = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setIsLightboxOpen(true);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#FAFAFA] text-[#1F2937] flex flex-col font-sans selection:bg-blue-600/20 selection:text-blue-700">
        {/* 1. Cabeçalho com Logo, Navegação e Sacola */}
        <TopNav
          onOpenContact={() => handleOpenContact(undefined, 'general')}
          preferredPolo={preferredPolo}
          onSelectPolo={(polo) => setPreferredPolo(polo)}
        />

        {/* Barra de Acesso Rápido às Categorias */}
        <CategoryAnchorBar />

        <main className="flex-1">
          {/* 2. Página Inicial: Primeira Dobra, Benefícios Imediatos & Acesso por Categoria */}
          <HeroSection
            onOpenContact={(item) => handleOpenContact(item, 'general')}
          />

          {/* 3. Como Funciona a Tecnologia NFC & QR Code */}
          <HowItWorksSection />

          {/* 4. Displays de Google Avaliações em Destaque */}
          <GooglePlatesSection
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 5. Protetor de Reputação (Logo abaixo dos produtos Google, conforme Seções 4.5 e 8) */}
          <ReputationProtectorSection
            onOpenContact={(customItem) => handleOpenContact(customItem, 'service')}
          />

          {/* 6. Catálogo: Placas Planas 10 × 10 cm Padrão */}
          <GallerySectionView
            gallery={PLACAS_PLANAS_PADRAO}
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 7. Catálogo: Placas Planas 10 × 10 cm Personalizadas */}
          <GallerySectionView
            gallery={PLACAS_PLANAS_PERSONALIZADAS}
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 8. Catálogo: Placas em L (11 × 16 cm - Todas Resinadas) */}
          <GallerySectionView
            gallery={PLACAS_EM_L}
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 9. Catálogo: Cartões Inteligentes NFC (Formato Bancário) */}
          <NfcCardsSection
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 10. Catálogo: Placas 8 × 8 cm Resinadas (Desconto a partir de 10 un.) */}
          <GallerySectionView
            gallery={PLACAS_8X8_RESINADAS}
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 11. Catálogo: Tags Antimetal para Celular com NFC */}
          <GallerySectionView
            gallery={TAGS_ANTIMETAL}
            onOpenContact={(name) => handleOpenContact(name, 'product')}
            onOpenZoom={handleOpenZoom}
          />

          {/* 12. Combos e Ofertas Comerciais Oficiais */}
          <CombosSection
            onOpenContact={(comboName) => handleOpenContact(comboName, 'combo')}
          />

          {/* 13. BioSite: Presença Digital no Smartphone */}
          <BioSiteShowcaseSection
            onOpenContact={(planName) => handleOpenContact(planName, 'service')}
          />

          {/* 14. Serviços Digitais: Perfil da Empresa no Google & SEO Local */}
          <ServicesSection
            onOpenContact={(serviceName) => handleOpenContact(serviceName, 'service')}
          />

          {/* 15. Soluções para Empresas & Hotelaria e Quarto Inteligente */}
          <HotelSolutionsSection
            onOpenContact={(customItem) => handleOpenContact(customItem, 'service')}
          />

          {/* 16. Atendimento Consultivo e Visitas Comerciais (Curitiba e Serra Talhada) */}
          <CommercialVisitsSection
            preferredPolo={preferredPolo}
            onSelectPolo={(polo) => setPreferredPolo(polo)}
          />

          {/* 17. Revenda e Parcerias Comerciais com Formulário Dedicado */}
          <ResellerSection />

          {/* 18. Sobre a VaBora Soluções (Institucional) */}
          <AboutSection />

          {/* 19. Calculadora de Retorno Potencial (Ilustrativa com dados do usuário) */}
          <ReturnCalculator />

          {/* 20. Perguntas Frequentes (4 Categorias com Tabs e Accordion) */}
          <FaqSection />

          {/* 21. Contato Final & WhatsApp Comercial */}
          <FinalContactSection />
        </main>

        {/* Rodapé Institucional com Link de Privacidade e Termos */}
        <FooterSection />

        {/* Global Cart Drawer (Sacola de Compras Funcional) */}
        <CartDrawer
          preferredPolo={preferredPolo}
          onSelectPolo={(polo) => setPreferredPolo(polo)}
        />

        {/* Global Contact Modal */}
        <PoloSelectorModal
          isOpen={isModalOpen}
          target={modalTarget}
          preferredPolo={preferredPolo}
          onSelectPolo={(polo) => setPreferredPolo(polo)}
          onClose={() => setIsModalOpen(false)}
        />

        {/* Global Lightbox Zoom */}
        <ImageLightbox
          isOpen={isLightboxOpen}
          src={lightboxSrc}
          alt={lightboxAlt}
          onClose={() => setIsLightboxOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;
