export interface TechnicalSpecs {
  dimension?: string;
  material: string;
  printing: string;
  resin: string;
  fixing?: string;
  operation: string;
  customization: string;
  includedItems: string[];
  notes?: string;
}

export interface ProductVariation {
  name: string;
  image?: string;
  backupImage?: string;
  price?: string;
  numericPrice?: number;
}

export interface ProductItem {
  id: string;
  name: string;
  subtitle?: string;
  dimension?: string;
  numericPrice: number;
  price: string;
  bulkThreshold?: number;
  bulkNumericPrice?: number;
  bulkPriceLabel?: string;
  monthlyNumericPrice?: number;
  monthlyPriceLabel?: string;
  description: string;
  benefit: string;
  application: string;
  image: string;
  backupImage: string;
  category: string;
  popular?: boolean;
  variations?: string[];
  variantDetails?: ProductVariation[];
  customizable?: boolean;
  specs: TechnicalSpecs;
  crossSellIds?: string[];
}

export interface GallerySection {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  dimension?: string;
  description: string;
  photos: {
    url: string;
    backupUrl: string;
    alt: string;
  }[];
  products: ProductItem[];
}

export interface DigitalService {
  id: string;
  title: string;
  tagline: string;
  numericPrice: number;
  price: string;
  period?: string;
  description: string;
  includes: string[];
  scopeNote?: string;
}

export interface CommercialCombo {
  id: string;
  name: string;
  badge?: string;
  numericPrice: number;
  price: string;
  monthlyNumericPrice?: number;
  monthlyPriceLabel?: string;
  description: string;
  includes: string[];
  ctaText?: string;
  highlight?: boolean;
  notes?: string;
}

export interface FaqItem {
  category: 'NFC e QR Code' | 'Produtos' | 'Serviços digitais' | 'Pedidos e atendimento';
  question: string;
  answer: string;
}

export const CONTACT_INFO = {
  name: 'VaBora Soluções',
  slogan: 'Aproxime. Conecte. VãBora.',
  positioning: 'Soluções que conectam o ambiente físico ao digital.',
  description:
    'A VaBora Soluções conecta empresas e clientes por meio de produtos físicos, tecnologia NFC, QR Codes inteligentes, displays personalizados e soluções digitais para fortalecer a presença online e facilitar contatos, cardápios e avaliações.',
  units: {
    curitiba: {
      name: 'Curitiba / PR (Principal)',
      phone: '(41) 98844-2761',
      rawPhone: '5541988442761',
      link: 'https://wa.me/5541988442761',
    },
    serraTalhada: {
      name: 'Serra Talhada / PE',
      phone: '(87) 99157-8326',
      rawPhone: '5587991578326',
      link: 'https://wa.me/5587991578326',
    },
  },
  instagram: {
    handle: '@vamboraserratalhada',
    url: 'https://www.instagram.com/vamboraserratalhada?xtok=anU1dDJ0d2V2NHRt&utm_source=qr',
  },
  logo: {
    local: '/images/products/logo.png',
    remote: 'https://i.postimg.cc/PqF7G23b/IMG-0891.png',
  },
};

// 1. PLACAS EM L RESINADAS — 11 × 16 cm (Todas são resinadas)
export const PLACAS_EM_L: GallerySection = {
  id: 'placas-em-l',
  number: 1,
  title: 'Displays Premium em L (11 × 16 cm)',
  subtitle: 'Destaque e ergonomia no balcão de atendimento e recepção.',
  dimension: '11 × 16 cm',
  description:
    'Displays em formato L com base inclinada para balcões e recepções. Produzidos em acrílico 3 mm de alta rigidez com camada protetora de resina cristal de alto brilho. Todas as placas desta linha são resinadas; a diferenciação entre os modelos ocorre por personalização, finalidade e serviços digitais inclusos.',
  photos: [
    {
      url: '/images/products/IMG-0904.jpg',
      backupUrl: 'https://i.postimg.cc/7hzFmQzG/IMG-0904.jpg',
      alt: 'Display Premium em L Google Avaliações padrão preta resinada',
    },
    {
      url: '/images/products/IMG-0903.jpg',
      backupUrl: 'https://i.postimg.cc/DzYRFKd5/IMG-0903.jpg',
      alt: 'Display Premium em L Google Avaliações padrão branca resinada',
    },
    {
      url: '/images/products/IMG-0662.jpg',
      backupUrl: 'https://i.postimg.cc/44t488sb/IMG-0662.jpg',
      alt: 'Display Premium em L MultiLinks padrão resinada',
    },
    {
      url: '/images/products/IMG-0705.jpg',
      backupUrl: 'https://i.postimg.cc/MZYFq6Fm/IMG-0705.jpg',
      alt: 'Display Premium em L Google Avaliações personalizada resinada',
    },
    {
      url: '/images/products/IMG-0649.jpg',
      backupUrl: 'https://i.postimg.cc/2jxKrkKQ/IMG-0649.jpg',
      alt: 'Display Premium em L MultiLinks personalizada resinada',
    },
    {
      url: '/images/products/IMG-0706.jpg',
      backupUrl: 'https://i.postimg.cc/BZCV4SVc/IMG-0706.jpg',
      alt: 'Display Premium em L MultiLinks personalizada acabamento brilhante',
    },
    {
      url: '/images/products/IMG-0703.jpg',
      backupUrl: 'https://i.postimg.cc/BZCV4SV5/IMG-0703.jpg',
      alt: 'Display Premium em L MultiLinks perspectiva detalhada',
    },
  ],
  products: [
    {
      id: 'l-google-padrao',
      name: 'Google Avaliações Padrão (Preta / Branca)',
      dimension: '11 × 16 cm',
      numericPrice: 139.9,
      price: 'R$ 139,90',
      description:
        'Display em L resinado com chip NFC e QR Code dinâmico direcionando direto para a página oficial de avaliações da sua empresa no Google.',
      benefit: 'Acesso rápido para coletar avaliações de 5 estrelas no balcão.',
      application: 'Balcões de atendimento, recepções de clínicas, hotéis, lojas e restaurantes.',
      category: 'Placas em L Resinadas',
      image: '/images/products/IMG-0904.jpg',
      backupImage: 'https://i.postimg.cc/7hzFmQzG/IMG-0904.jpg',
      popular: true,
      variations: ['Preta', 'Branca'],
      variantDetails: [
        {
          name: 'Preta',
          image: '/images/products/IMG-0904.jpg',
          backupImage: 'https://i.postimg.cc/7hzFmQzG/IMG-0904.jpg',
          price: 'R$ 139,90',
          numericPrice: 139.9,
        },
        {
          name: 'Branca',
          image: '/images/products/IMG-0903.jpg',
          backupImage: 'https://i.postimg.cc/DzYRFKd5/IMG-0903.jpg',
          price: 'R$ 139,90',
          numericPrice: 139.9,
        },
      ],
      specs: {
        dimension: '11 × 16 cm',
        material: 'Acrílico cristal 3 mm de alta rigidez',
        printing: 'Impressão UV de alta resolução com ícones oficiais',
        resin: 'Camada de resina cristal epóxi de alto brilho',
        operation: 'Chip NFC de resposta instantânea + QR Code impresso',
        customization: 'Design padrão Google Avaliações (opção Preto ou Branco)',
        includedItems: ['1 Display em L 11 × 16 cm resinado', 'Configuração do link oficial Google'],
        notes: 'Todas as placas em L são resinadas.',
      },
    },
    {
      id: 'l-google-personalizada',
      name: 'Google Avaliações Personalizada',
      dimension: '11 × 16 cm',
      numericPrice: 169.9,
      price: 'R$ 169,90',
      description:
        'Display em L resinado personalizado com a logomarca e identidade visual da sua empresa, integrando o link de avaliações do Google.',
      benefit: 'Identidade de marca e sofisticação no balcão que estimula a confiança dos clientes.',
      application: 'Empresas, consultórios, lojas e restaurantes que valorizam padrão visual exclusivo.',
      category: 'Placas em L Resinadas',
      image: '/images/products/IMG-0705.jpg',
      backupImage: 'https://i.postimg.cc/MZYFq6Fm/IMG-0705.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '11 × 16 cm',
        material: 'Acrílico cristal 3 mm corte a laser',
        printing: 'Impressão UV personalizada com a arte e logotipo do cliente',
        resin: 'Camada protetora em resina cristal de alto brilho',
        operation: 'NFC + QR Code dinâmico com link da sua empresa',
        customization: 'Logomarca da sua empresa, paleta visual e links',
        includedItems: ['1 Display em L personalizado 11 × 16 cm resinado', 'Ajuste de arte e gravação NFC'],
        notes: 'Todas as placas em L são resinadas.',
      },
    },
    {
      id: 'l-multilinks-padrao',
      name: 'MultiLinks Padrão',
      dimension: '11 × 16 cm',
      numericPrice: 139.9,
      price: 'R$ 139,90',
      description:
        'Display em L resinado configurado para centralizar múltiplos canais (redes sociais, Wi-Fi, WhatsApp e cardápio) em um só ponto.',
      benefit: 'Permite ao cliente escolher qual canal deseja acessar com uma única aproximação.',
      application: 'Recepções e balcões multicanal.',
      category: 'Placas em L Resinadas',
      image: '/images/products/IMG-0662.jpg',
      backupImage: 'https://i.postimg.cc/44t488sb/IMG-0662.jpg',
      specs: {
        dimension: '11 × 16 cm',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV padrão MultiLinks',
        resin: 'Resinada com acabamento cristal',
        operation: 'Aproximação NFC + QR Code para central de links',
        customization: 'Layout padrão MultiLinks',
        includedItems: ['1 Display em L 11 × 16 cm resinado', 'Configuração dos links solicitados'],
        notes: 'Esta versão padrão não inclui desenvolvimento de BioSite.',
      },
    },
    {
      id: 'l-multilinks-biosite',
      name: 'MultiLinks Padrão + BioSite Essencial',
      dimension: '11 × 16 cm + Página Web',
      numericPrice: 219.9,
      price: 'R$ 219,90',
      description:
        'Display em L resinado padrão integrado ao desenvolvimento do BioSite Essencial com até 6 botões interativos (WhatsApp, Instagram, Wi-Fi, Cardápio, Avaliação e Pix).',
      benefit: 'Apresentação física premium combinada com uma página digital ágil e organizada.',
      application: 'Negócios que buscam unificar canais físicos e digitais de forma profissional.',
      category: 'Placas em L Resinadas',
      image: '/images/products/IMG-0662.jpg',
      backupImage: 'https://i.postimg.cc/44t488sb/IMG-0662.jpg',
      popular: true,
      specs: {
        dimension: '11 × 16 cm + Página responsiva',
        material: 'Acrílico 3 mm resinado',
        printing: 'Impressão UV padrão MultiLinks',
        resin: 'Acabamento em resina cristal',
        operation: 'Direcionamento NFC e QR Code direto para o BioSite',
        customization: 'BioSite personalizado com logotipo e até 6 botões interativos',
        includedItems: ['1 Display em L 11 × 16 cm resinado padrão', 'Desenvolvimento do BioSite Essencial'],
        notes: 'Todas as placas em L são resinadas.',
      },
    },
    {
      id: 'l-multilinks-resina-completo',
      name: 'MultiLinks 100% Personalizada + BioSite Essencial',
      dimension: '11 × 16 cm + BioSite',
      numericPrice: 249.9,
      price: 'R$ 249,90',
      description:
        'Display em L topo de linha: personalização integral com a logomarca e identidade visual da sua marca, acabamento nobre em resina cristal e desenvolvimento do BioSite Essencial incluso no valor.',
      benefit: 'Máxima exclusividade visual no balcão aliada a uma presença digital rápida e completa.',
      application: 'Clínicas médicas e estéticas, escritórios jurídicos, hotéis boutique e lojas premium.',
      category: 'Placas em L Resinadas',
      image: '/images/products/IMG-0649.jpg',
      backupImage: 'https://i.postimg.cc/2jxKrkKQ/IMG-0649.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '11 × 16 cm',
        material: 'Acrílico cristal 3 mm corte a laser',
        printing: 'Impressão UV fotográfica personalizada total',
        resin: 'Camada nobre de resina cristal de alto brilho',
        operation: 'NFC + QR Code dinâmico gravado direto para o BioSite',
        customization: 'Arte 100% personalizada + BioSite Essencial incluso',
        includedItems: [
          '1 Display em L 100% personalizado resinado',
          'Desenvolvimento do BioSite Essencial incluso',
          'Programação de links e suporte',
        ],
        notes: 'Todas as placas em L são resinadas.',
      },
    },
  ],
};

// 2. PLACAS PLANAS 10 × 10 cm — PADRÃO SEM PERSONALIZAÇÃO
export const PLACAS_PLANAS_PADRAO: GallerySection = {
  id: 'placas-planas-padrao',
  number: 2,
  title: 'Placas Planas 10 × 10 cm — Padrão',
  subtitle: 'Praticidade compacta com fita 3M para mesas, balcões e caixas.',
  dimension: '10 × 10 cm',
  description:
    'Placas planas em acrílico 3 mm resistente com impressão UV direta de alta durabilidade. Modelos padrão prontos para uso em mesas, caixas ou balcões, acompanhando fita dupla face 3M de alta aderência.',
  photos: [
    {
      url: '/images/products/IMG-0656.jpg',
      backupUrl: 'https://i.postimg.cc/J0WWyRw1/IMG-0656.jpg',
      alt: 'Placa Plana 10 × 10 cm Google Avaliações Padrão Preta',
    },
    {
      url: '/images/products/IMG-0657.jpg',
      backupUrl: 'https://i.postimg.cc/HnCCJTGg/IMG-0657.jpg',
      alt: 'Placa Plana 10 × 10 cm Google Avaliações Padrão Azul',
    },
    {
      url: '/images/products/IMG-0654.jpg',
      backupUrl: 'https://i.postimg.cc/HnCCJTGm/IMG-0654.jpg',
      alt: 'Placa Plana 10 × 10 cm WhatsApp Padrão',
    },
    {
      url: '/images/products/IMG-0655.jpg',
      backupUrl: 'https://i.postimg.cc/L5MMqmd2/IMG-0655.jpg',
      alt: 'Placa Plana 10 × 10 cm Instagram Padrão',
    },
    {
      url: '/images/products/IMG-0653.jpg',
      backupUrl: 'https://i.postimg.cc/yxzzJ7qC/IMG-0653.jpg',
      alt: 'Placa Plana 10 × 10 cm Cardápio Padrão',
    },
  ],
  products: [
    {
      id: 'plano-google-padrao',
      name: 'Google Avaliações Padrão (Preta / Azul)',
      dimension: '10 × 10 cm',
      numericPrice: 79.9,
      price: 'R$ 79,90',
      description:
        'Placa plana padrão com ícone oficial Google, 5 estrelas e indicação clara de aproximação NFC e QR Code dinâmico.',
      benefit: 'Acesso simples e direto para os clientes avaliarem sua empresa no Google.',
      application: 'Mesas de restaurantes, caixas, balcões de atendimento e recepções.',
      category: 'Placas Planas 10 × 10 cm',
      image: '/images/products/IMG-0656.jpg',
      backupImage: 'https://i.postimg.cc/J0WWyRw1/IMG-0656.jpg',
      popular: true,
      variations: ['Google Preto', 'Google Azul'],
      variantDetails: [
        {
          name: 'Google Preto',
          image: '/images/products/IMG-0656.jpg',
          backupImage: 'https://i.postimg.cc/J0WWyRw1/IMG-0656.jpg',
          price: 'R$ 79,90',
          numericPrice: 79.9,
        },
        {
          name: 'Google Azul',
          image: '/images/products/IMG-0657.jpg',
          backupImage: 'https://i.postimg.cc/HnCCJTGg/IMG-0657.jpg',
          price: 'R$ 79,90',
          numericPrice: 79.9,
        },
      ],
      specs: {
        dimension: '10 × 10 cm',
        material: 'Acrílico resistente 3 mm',
        printing: 'Impressão UV de alta definição',
        resin: 'Superfície lisa com bordas polidas',
        fixing: 'Fita dupla face 3M inclusa e aplicada no verso',
        operation: 'Aproximação NFC + QR Code dinâmico impresso',
        customization: 'Design padrão Google Avaliações',
        includedItems: ['1 Placa plana 10 × 10 cm', 'Fita 3M aplicada', 'Configuração do link Google'],
      },
    },
    {
      id: 'plano-whatsapp-padrao',
      name: 'WhatsApp Padrão',
      dimension: '10 × 10 cm',
      numericPrice: 79.9,
      price: 'R$ 79,90',
      description:
        'Placa plana padrão verde WhatsApp com QR Code dinâmico e chip NFC para iniciar conversa com um toque.',
      benefit: 'Conexão direta no WhatsApp da empresa sem necessidade de digitar o número.',
      application: 'Balcões de pedidos, atendimento e suporte.',
      category: 'Placas Planas 10 × 10 cm',
      image: '/images/products/IMG-0654.jpg',
      backupImage: 'https://i.postimg.cc/HnCCJTGm/IMG-0654.jpg',
      specs: {
        dimension: '10 × 10 cm',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV com ícone oficial WhatsApp',
        resin: 'Acrílico plano',
        fixing: 'Fita 3M inclusa',
        operation: 'Aproximação NFC + QR Code para conversa direta',
        customization: 'Design padrão WhatsApp',
        includedItems: ['1 Placa 10 × 10 cm WhatsApp', 'Fita 3M', 'Configuração do número'],
      },
    },
    {
      id: 'plano-instagram-padrao',
      name: 'Instagram Padrão',
      dimension: '10 × 10 cm',
      numericPrice: 79.9,
      price: 'R$ 79,90',
      description:
        'Placa plana com gradiente oficial do Instagram para direcionar clientes diretamente para o seu perfil e novos seguidores.',
      benefit: 'Aumente o engajamento e seguidores da sua empresa de forma orgânica no local físico.',
      application: 'Mesas de cafeterias, provadores de roupas, salões de beleza e recepções.',
      category: 'Placas Planas 10 × 10 cm',
      image: '/images/products/IMG-0655.jpg',
      backupImage: 'https://i.postimg.cc/L5MMqmd2/IMG-0655.jpg',
      specs: {
        dimension: '10 × 10 cm',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV colorida',
        resin: 'Acrílico plano',
        fixing: 'Fita 3M inclusa',
        operation: 'NFC + QR Code para perfil do Instagram',
        customization: 'Design padrão Instagram',
        includedItems: ['1 Placa 10 × 10 cm Instagram', 'Fita 3M', 'Configuração do @'],
      },
    },
    {
      id: 'plano-cardapio-padrao',
      name: 'Cardápio Padrão',
      dimension: '10 × 10 cm',
      numericPrice: 79.9,
      price: 'R$ 79,90',
      description:
        'Placa plana desenvolvida para mesas de restaurantes, bares e lanchonetes com link direto para o cardápio digital em PDF ou web.',
      benefit: 'Elimina cardápios desgastados e agiliza os pedidos dos clientes na mesa.',
      application: 'Mesas de bares, lanchonetes, restaurantes e praças de alimentação.',
      category: 'Placas Planas 10 × 10 cm',
      image: '/images/products/IMG-0653.jpg',
      backupImage: 'https://i.postimg.cc/yxzzJ7qC/IMG-0653.jpg',
      specs: {
        dimension: '10 × 10 cm',
        material: 'Acrílico 3 mm lavável',
        printing: 'Impressão UV resistente a álcool e limpeza',
        resin: 'Acrílico plano de fácil higienização',
        fixing: 'Fita 3M aplicada',
        operation: 'NFC + QR Code para cardápio',
        customization: 'Design padrão Cardápio',
        includedItems: ['1 Placa 10 × 10 cm Cardápio', 'Fita 3M', 'Configuração de link'],
      },
    },
  ],
};

// 3. PLACAS PLANAS 10 × 10 cm — PERSONALIZADAS
export const PLACAS_PLANAS_PERSONALIZADAS: GallerySection = {
  id: 'placas-planas-personalizadas',
  number: 3,
  title: 'Placas Planas 10 × 10 cm — Personalizadas',
  subtitle: 'A identidade visual da sua marca em placas compactas de alta durabilidade.',
  dimension: '10 × 10 cm',
  description:
    'Placas planas de 10 × 10 cm produzidas em acrílico resistente de 3 mm com impressão UV personalizada com a logomarca da sua empresa, cores e informações comerciais. Acompanha fita 3M de fixação duradoura.',
  photos: [
    {
      url: '/images/products/IMG-0646.jpg',
      backupUrl: 'https://i.postimg.cc/Qx0RDQMk/IMG-0646.jpg',
      alt: 'Placa Plana 10 × 10 cm Google Avaliações Personalizada com logo',
    },
    {
      url: '/images/products/IMG-0642.jpg',
      backupUrl: 'https://i.postimg.cc/ZKV1m8q8/IMG-0642.jpg',
      alt: 'Placa Plana 10 × 10 cm Google Avaliações Personalizada detalhe',
    },
    {
      url: '/images/products/IMG-0893.jpg',
      backupUrl: 'https://i.postimg.cc/YqbJ76SN/IMG-0893.jpg',
      alt: 'Placa Plana 10 × 10 cm MultiLinks Personalizada',
    },
    {
      url: '/images/products/IMG-0707.jpg',
      backupUrl: 'https://i.postimg.cc/15JLSGzH/IMG-0707.jpg',
      alt: 'Placa Plana 10 × 10 cm MultiLinks Personalizada perspectiva',
    },
    {
      url: '/images/products/IMG-0711.jpg',
      backupUrl: 'https://i.postimg.cc/KvJdbPYD/IMG-0711.jpg',
      alt: 'Placa Plana 10 × 10 cm MultiLinks Personalizada acabamento',
    },
  ],
  products: [
    {
      id: 'plano-personalizado-google',
      name: 'Personalizada Google Avaliações',
      dimension: '10 × 10 cm',
      numericPrice: 119.9,
      price: 'R$ 119,90',
      description:
        'Placa plana de 10 × 10 cm com impressão do logotipo da sua empresa e direcionamento direto para avaliações no Google.',
      benefit: 'Apresentação exclusiva que reforça sua marca e gera credibilidade no ponto de venda.',
      application: 'Balcões, mesas e estações de atendimento.',
      category: 'Placas Planas Personalizadas',
      image: '/images/products/IMG-0646.jpg',
      backupImage: 'https://i.postimg.cc/Qx0RDQMk/IMG-0646.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '10 × 10 cm',
        material: 'Acrílico resistente 3 mm',
        printing: 'Impressão UV personalizada com a marca do cliente',
        resin: 'Superfície em acrílico plano cortado a laser',
        fixing: 'Fita dupla face 3M inclusa',
        operation: 'Aproximação NFC + QR Code dinâmico',
        customization: 'Logomarca do cliente, cores e link oficial Google',
        includedItems: ['1 Placa 10 × 10 cm personalizada', 'Fita 3M', 'Configuração de link'],
      },
    },
    {
      id: 'plano-personalizado-multilinks',
      name: 'MultiLinks Personalizada (10 × 10 cm)',
      dimension: '10 × 10 cm',
      numericPrice: 99.9,
      price: 'R$ 99,90',
      description:
        'Placa plana de 10 × 10 cm personalizada com o logotipo da sua marca para direcionar clientes a múltiplos canais digitais.',
      benefit: 'Centralize contatos e redes sociais com a marca da sua empresa em destaque.',
      application: 'Recepções, mesas e caixas.',
      category: 'Placas Planas Personalizadas',
      image: '/images/products/IMG-0893.jpg',
      backupImage: 'https://i.postimg.cc/YqbJ76SN/IMG-0893.jpg',
      customizable: true,
      specs: {
        dimension: '10 × 10 cm',
        material: 'Acrílico 3 mm corte a laser',
        printing: 'Impressão UV com logotipo',
        resin: 'Acrílico plano',
        fixing: 'Fita 3M inclusa',
        operation: 'NFC + QR Code dinâmico',
        customization: 'Logotipo e links comerciais',
        includedItems: ['1 Placa MultiLinks personalizada', 'Fita 3M'],
        notes: 'A placa MultiLinks personalizada de R$ 99,90 não inclui BioSite automaticamente.',
      },
    },
    {
      id: 'combo-2-placas-padrao',
      name: 'Combo de Duas Placas Padrão',
      dimension: '2 unidades 10 × 10 cm',
      numericPrice: 149.9,
      price: 'R$ 149,90',
      description:
        'Kit com 2 placas planas padrão de 10 × 10 cm à sua escolha (ex: 1 Google + 1 Instagram ou 1 Google + 1 WhatsApp).',
      benefit: 'Economia e cobertura de dois pontos essenciais de atendimento no seu espaço.',
      application: 'Empresas que precisam de dois canais de contato ou dois ambientes.',
      category: 'Combos de Placas Planas',
      image: '/images/products/IMG-0656.jpg',
      backupImage: 'https://i.postimg.cc/J0WWyRw1/IMG-0656.jpg',
      specs: {
        dimension: '10 × 10 cm cada',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV padrão',
        resin: 'Acrílico plano',
        fixing: 'Fita 3M aplicada nas duas placas',
        operation: 'NFC + QR Code em ambas',
        customization: 'Escolha de 2 modelos padrão disponíveis',
        includedItems: ['2 Placas 10 × 10 cm padrão', 'Fita 3M aplicada', 'Configuração dos links'],
      },
    },
    {
      id: 'combo-2-placas-personalizadas',
      name: 'Combo de Duas Placas Personalizadas',
      dimension: '2 unidades 10 × 10 cm',
      numericPrice: 199.9,
      price: 'R$ 199,90',
      description:
        'Kit com 2 placas planas de 10 × 10 cm 100% personalizadas com a logomarca e cores da sua empresa.',
      benefit: 'Padronização visual e presença de marca em balcão, caixa ou múltiplos ambientes.',
      application: 'Lojas, clínicas e restaurantes com mais de um ponto de contato.',
      category: 'Combos de Placas Planas',
      image: '/images/products/IMG-0646.jpg',
      backupImage: 'https://i.postimg.cc/Qx0RDQMk/IMG-0646.jpg',
      customizable: true,
      specs: {
        dimension: '10 × 10 cm cada',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV personalizada',
        resin: 'Acrílico plano',
        fixing: 'Fita 3M aplicada em ambas',
        operation: 'NFC + QR Code personalizados',
        customization: 'Logomarca da sua empresa em ambas as placas',
        includedItems: ['2 Placas 10 × 10 cm personalizadas', 'Fita 3M', 'Configurações de links'],
      },
    },
    {
      id: 'placa-google-protetor',
      name: 'Placa Personalizada Google + Protetor de Reputação',
      dimension: '10 × 10 cm + Sistema Digital',
      numericPrice: 119.9,
      price: 'R$ 119,90',
      monthlyNumericPrice: 19.9,
      monthlyPriceLabel: '+ R$ 19,90/mês (manutenção do servidor e suporte aos envios de e-mail ao lojista)',
      description:
        'Placa plana de 10 × 10 cm personalizada com seu logotipo combinada ao sistema Protetor de Reputação para triagem e organização do feedback dos clientes.',
      benefit:
        'Organiza o feedback: notas de 1 a 3 estrelas vão para a gerência interna; notas de 4 a 5 estrelas seguem direto para o Google.',
      application: 'Empresas que desejam escutar ativamente os clientes e proteger sua reputação.',
      category: 'Placas Planas Personalizadas',
      image: '/images/products/IMG-0642.jpg',
      backupImage: 'https://i.postimg.cc/ZKV1m8q8/IMG-0642.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '10 × 10 cm + Fluxo web de triagem',
        material: 'Acrílico 3 mm personalizado',
        printing: 'Impressão UV com logotipo',
        resin: 'Acrílico plano resistente',
        fixing: 'Fita 3M inclusa',
        operation: 'Aproximação abre fluxo ético de feedback e direcionamento',
        customization: 'Placa personalizada com sua marca + tela de avaliação',
        includedItems: ['1 Placa 10 × 10 cm personalizada', 'Implantação do Protetor de Reputação'],
        notes:
          'Adesão inicial de R$ 119,90 e mensalidade obrigatória de R$ 19,90/mês para manutenção do servidor apresentadas separadamente.',
      },
    },
  ],
};

// 4. CARTÕES NFC — FORMATO BANCÁRIO (CR80)
export const CARTOES_NFC: GallerySection = {
  id: 'cartoes-nfc',
  number: 4,
  title: 'Cartões Inteligentes NFC (Formato Bancário)',
  subtitle: 'Substitua centenas de cartões de papel por um único cartão inteligente reutilizável.',
  dimension: '8.5 × 5.4 cm (CR80)',
  description:
    'Cartões em PVC de alta durabilidade com tecnologia NFC embutida e QR Code impresso no verso. Compartilhe contatos, vCard, redes sociais ou perfil do Google com uma aproximação no celular do seu cliente.',
  photos: [
    {
      url: '/images/products/IMG-0902.jpg',
      backupUrl: 'https://i.postimg.cc/8cLYhf8c/IMG-0902.jpg',
      alt: 'Cartão Inteligente NFC Google padrão',
    },
    {
      url: '/images/products/IMG-0697.jpg',
      backupUrl: 'https://i.postimg.cc/KzD0NbkF/IMG-0697.jpg',
      alt: 'Cartão Inteligente NFC Black Executivo acabamento fosco',
    },
    {
      url: '/images/products/IMG-0648.jpg',
      backupUrl: 'https://i.postimg.cc/Y9zd37Gq/IMG-0648.jpg',
      alt: 'Cartão Inteligente NFC Google personalizado com logotipo',
    },
    {
      url: '/images/products/IMG-0692.jpg',
      backupUrl: 'https://i.postimg.cc/wvQwVzyq/IMG-0692.jpg',
      alt: 'Cartão Inteligente NFC Google personalizado detalhe frontal',
    },
    {
      url: '/images/products/IMG-0691.jpg',
      backupUrl: 'https://i.postimg.cc/nzG3kxjH/IMG-0691.jpg',
      alt: 'Cartão Inteligente NFC Google personalizado perspectiva executiva',
    },
    {
      url: '/images/products/IMG-0690.jpg',
      backupUrl: 'https://i.postimg.cc/3RFtBh43/IMG-0690.jpg',
      alt: 'Cartão Inteligente NFC MultiLinks 100% personalizado',
    },
    {
      url: '/images/products/IMG-0612.jpg',
      backupUrl: 'https://i.postimg.cc/rmNfJT0p/IMG-0612.jpg',
      alt: 'Cartão Inteligente NFC MultiLinks personalizado frente e verso',
    },
  ],
  products: [
    {
      id: 'cartao-google-padrao',
      name: 'Cartão Google Padrão',
      dimension: 'Formato Bancário (8.5 × 5.4 cm)',
      numericPrice: 49.9,
      price: 'R$ 49,90',
      description:
        'Cartão em PVC resistente com design padrão Google Avaliações, chip NFC e QR Code dinâmico para coletar avaliações onde você for.',
      benefit: 'Portabilidade total para solicitar avaliações em visitas externas, eventos ou entregas.',
      application: 'Vendedores, prestadores de serviços, motoristas e representantes.',
      category: 'Cartões NFC',
      image: '/images/products/IMG-0902.jpg',
      backupImage: 'https://i.postimg.cc/8cLYhf8c/IMG-0902.jpg',
      popular: true,
      specs: {
        dimension: '8.5 × 5.4 cm (espessura 0.76 mm padrão cartão bancário)',
        material: 'PVC durável à prova d’água',
        printing: 'Impressão digital padrão Google',
        resin: 'Acabamento laminado de alta durabilidade',
        operation: 'Aproximação NFC + QR Code dinâmico',
        customization: 'Design padrão Google',
        includedItems: ['1 Cartão Google padrão configurado'],
      },
    },
    {
      id: 'cartao-google-personalizado',
      name: 'Cartão Google Personalizado',
      dimension: 'Formato Bancário (8.5 × 5.4 cm)',
      numericPrice: 79.9,
      price: 'R$ 79,90',
      description:
        'Cartão em PVC personalizado com a marca da sua empresa e direcionado para sua página de avaliações no Google.',
      benefit: 'Associe a autoridade da sua marca ao incentivo direto para avaliações dos clientes.',
      application: 'Consultores, clínicas, arquitetos e equipes comerciais externas.',
      category: 'Cartões NFC',
      image: '/images/products/IMG-0648.jpg',
      backupImage: 'https://i.postimg.cc/Y9zd37Gq/IMG-0648.jpg',
      customizable: true,
      specs: {
        dimension: '8.5 × 5.4 cm',
        material: 'PVC rígido de alta durabilidade',
        printing: 'Impressão personalizada com sua logomarca',
        resin: 'Laminação protetora brilhante ou fosca',
        operation: 'NFC + QR Code dinâmico',
        customization: 'Logomarca e link Google da sua empresa',
        includedItems: ['1 Cartão Google personalizado configurado'],
      },
    },
    {
      id: 'cartao-black-executivo',
      name: 'Black Executivo',
      dimension: 'Formato Bancário (8.5 × 5.4 cm)',
      numericPrice: 119.9,
      price: 'R$ 119,90',
      description:
        'Cartão executivo em acabamento preto fosco texturizado com linhas aerodinâmicas minimalistas para compartilhar seus dados profissionais.',
      benefit: 'Autoridade e elegância impecável ao compartilhar contatos comerciais.',
      application: 'Diretores, advogados, médicos, corretores de imóveis e executivos.',
      category: 'Cartões NFC',
      image: '/images/products/IMG-0697.jpg',
      backupImage: 'https://i.postimg.cc/KzD0NbkF/IMG-0697.jpg',
      popular: true,
      specs: {
        dimension: '8.5 × 5.4 cm',
        material: 'PVC premium Black Matte com acabamento nobre',
        printing: 'Monocromático discreto de alto padrão',
        resin: 'Toque aveludado resistente a riscos',
        operation: 'Chip NFC de alta sensibilidade + QR Code discreto',
        customization: 'Acabamento executivo minimalista com link vCard/contato',
        includedItems: ['1 Cartão Black Executivo configurado'],
        notes: 'O cartão Black Executivo de R$ 119,90 não inclui BioSite.',
      },
    },
    {
      id: 'cartao-black-biosite',
      name: 'Black Executivo + BioSite',
      dimension: 'Formato Bancário + BioSite',
      numericPrice: 169.9,
      price: 'R$ 169,90',
      description:
        'Cartão Black Executivo integrado ao desenvolvimento de BioSite profissional para apresentar biografia, contatos, horários e serviços.',
      benefit: 'Conjunto completo de presença executiva física e digital.',
      application: 'Profissionais liberais, consultores e empresários.',
      category: 'Cartões NFC',
      image: '/images/products/IMG-0697.jpg',
      backupImage: 'https://i.postimg.cc/KzD0NbkF/IMG-0697.jpg',
      popular: true,
      specs: {
        dimension: '8.5 × 5.4 cm + Página web responsiva',
        material: 'PVC Black Matte',
        printing: 'Impressão executiva de precisão',
        resin: 'Acabamento nobre',
        operation: 'Aproximação abre BioSite com vCard para salvar contato',
        customization: 'BioSite com foto, bio, horários e botões de contato',
        includedItems: ['1 Cartão Black Executivo', 'Desenvolvimento de BioSite integrado'],
      },
    },
    {
      id: 'cartao-personalizado-fv',
      name: 'Personalizado Frente e Verso',
      dimension: 'Formato Bancário (8.5 × 5.4 cm)',
      numericPrice: 119.9,
      price: 'R$ 119,90',
      description:
        'Impressão colorida total na frente e no verso com a identidade visual completa da sua empresa.',
      benefit: 'Substitui cartões de papel com um único cartão reutilizável de alta durabilidade.',
      application: 'Equipes comerciais, representantes de vendas e marcas corporativas.',
      category: 'Cartões NFC',
      image: '/images/products/IMG-0690.jpg',
      backupImage: 'https://i.postimg.cc/3RFtBh43/IMG-0690.jpg',
      customizable: true,
      specs: {
        dimension: '8.5 × 5.4 cm',
        material: 'PVC 0.76 mm padrão cartão de crédito',
        printing: 'Impressão digital 4x4 cores frente e verso total',
        resin: 'Laminação protetora',
        operation: 'NFC + QR Code dinâmico no verso',
        customization: '100% customizado com a arte do cliente',
        includedItems: ['1 Cartão Frente e Verso personalizado configurado'],
        notes: 'Esta variante não inclui BioSite.',
      },
    },
    {
      id: 'cartao-personalizado-fv-biosite',
      name: 'Personalizado Frente e Verso + BioSite',
      dimension: 'Formato Bancário + BioSite',
      numericPrice: 199.9,
      price: 'R$ 199,90',
      description:
        'Cartão 100% personalizado em ambos os lados e mini-site BioSite completo para apresentação corporativa impecável.',
      benefit: 'Apresentação comercial completa para fechar negócios com alto impacto visual.',
      application: 'Empresários e marcas que demandam solução integrada de apresentação física e digital.',
      category: 'Cartões NFC',
      image: '/images/products/IMG-0612.jpg',
      backupImage: 'https://i.postimg.cc/rmNfJT0p/IMG-0612.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '8.5 × 5.4 cm + Página web',
        material: 'PVC premium laminado',
        printing: 'Impressão colorida frente e verso',
        resin: 'Acabamento protetor',
        operation: 'Aproximação abre BioSite com vCard e canais integrados',
        customization: 'Arte do cartão + página digital personalizada',
        includedItems: ['1 Cartão personalizado frente e verso', 'Desenvolvimento de BioSite'],
      },
    },
  ],
};

// 5. PLACAS 8 × 8 cm RESINADAS (Todas Resinadas - Desconto a partir de 10 unidades)
export const PLACAS_8X8_RESINADAS: GallerySection = {
  id: 'placas-8x8-resinadas',
  number: 5,
  title: 'Placas 8 × 8 cm Resinadas',
  subtitle: 'Acabamento em resina cristal de alto brilho com fita 3M para mesas e quartos.',
  dimension: '8 × 8 cm',
  description:
    'Placas compactas de 8 × 8 cm em acrílico 3 mm resinadas com resina cristal espessa e brilhante. Resistentes à água e fácil limpeza, ideais para mesas de restaurantes, bares, quartos de hotel e consultórios. Todas as placas desta categoria são resinadas. Preço especial por quantidade a partir de 10 unidades elegíveis.',
  photos: [
    {
      url: '/images/products/IMG-0679.jpg',
      backupUrl: 'https://i.postimg.cc/Bbt2Kf2V/IMG-0679.jpg',
      alt: 'Placa 8 × 8 cm resinada personalizada com logo + Google Avaliações',
    },
    {
      url: '/images/products/IMG-0682.jpg',
      backupUrl: 'https://i.postimg.cc/PJN1wn17/IMG-0682.jpg',
      alt: 'Placa 8 × 8 cm resinada detalhe de acabamento em resina cristal espessa',
    },
    {
      url: '/images/products/IMG-0644.jpg',
      backupUrl: 'https://i.postimg.cc/nrMqDfqw/IMG-0644.jpg',
      alt: 'Placa 8 × 8 cm resinada Google Avaliações em perspectiva com brilho',
    },
    {
      url: '/images/products/IMG-0643.jpg',
      backupUrl: 'https://i.postimg.cc/4ynp9Rp2/IMG-0643.jpg',
      alt: 'Placa 8 × 8 cm resinada MultiLinks personalizada por mesa',
    },
    {
      url: '/images/products/IMG-0645.jpg',
      backupUrl: 'https://i.postimg.cc/RhqwHxw8/IMG-0645.jpg',
      alt: 'Placa 8 × 8 cm resinada MultiLinks aplicada em ambiente',
    },
    {
      url: '/images/products/IMG-0639.jpg',
      backupUrl: 'https://i.postimg.cc/j2GnnwxQ/IMG-0639.jpg',
      alt: 'Placa 8 × 8 cm resinada Padrão sem personalização',
    },
    {
      url: '/images/products/IMG-0614.jpg',
      backupUrl: 'https://i.postimg.cc/Pq3Wrqwc/IMG-0614.jpg',
      alt: 'Placa 8 × 8 cm resinada Google padrão preta',
    },
    {
      url: '/images/products/IMG-0615.jpg',
      backupUrl: 'https://i.postimg.cc/5t7BNtCT/IMG-0615.jpg',
      alt: 'Placa 8 × 8 cm resinada Google padrão branca',
    },
  ],
  products: [
    {
      id: 'tag8-link-direto',
      name: 'Link Direto (Padrão sem personalização)',
      dimension: '8 × 8 cm',
      numericPrice: 48.9,
      price: 'R$ 48,90',
      bulkThreshold: 10,
      bulkNumericPrice: 38.9,
      bulkPriceLabel: 'R$ 38,90/un. a partir de 10 unidades',
      description:
        'Placa resinada padrão 8 × 8 cm com 1 link direto à escolha: Google Avaliações (Preta ou Branca), Wi-Fi ou Cardápio.',
      benefit: 'Acesso simples e direto sem complicação para os clientes na mesa.',
      application: 'Mesas de bar, restaurantes, lanchonetes e balcões.',
      category: 'Placas 8 × 8 cm Resinadas',
      image: '/images/products/IMG-0639.jpg',
      backupImage: 'https://i.postimg.cc/j2GnnwxQ/IMG-0639.jpg',
      variations: ['Google Preto', 'Google Branco', 'Cardápio / Wi-Fi'],
      variantDetails: [
        {
          name: 'Google Preto',
          image: '/images/products/IMG-0614.jpg',
          backupImage: 'https://i.postimg.cc/Pq3Wrqwc/IMG-0614.jpg',
          price: 'R$ 48,90',
          numericPrice: 48.9,
        },
        {
          name: 'Google Branco',
          image: '/images/products/IMG-0615.jpg',
          backupImage: 'https://i.postimg.cc/5t7BNtCT/IMG-0615.jpg',
          price: 'R$ 48,90',
          numericPrice: 48.9,
        },
        {
          name: 'Cardápio / Wi-Fi',
          image: '/images/products/IMG-0639.jpg',
          backupImage: 'https://i.postimg.cc/j2GnnwxQ/IMG-0639.jpg',
          price: 'R$ 48,90',
          numericPrice: 48.9,
        },
      ],
      specs: {
        dimension: '8 × 8 cm',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV de alta resolução',
        resin: 'Camada de resina cristal protetora com relevo suave e brilho espelhado',
        fixing: 'Fita dupla face 3M de fixação duradoura inclusa',
        operation: 'NFC + QR Code dinâmico',
        customization: 'Design padrão (Google preta, Google branca ou Cardápio)',
        includedItems: ['1 Placa resinada 8 × 8 cm', 'Fita 3M aplicada', 'Configuração do link'],
        notes: 'Todas as placas de 8 × 8 cm são resinadas.',
      },
    },
    {
      id: 'tag8-personalizada-logo',
      name: 'Personalizada com Logo + Google',
      dimension: '8 × 8 cm',
      numericPrice: 58.9,
      price: 'R$ 58,90',
      bulkThreshold: 10,
      bulkNumericPrice: 48.9,
      bulkPriceLabel: 'R$ 48,90/un. a partir de 10 unidades',
      description:
        'Placa resinada 8 × 8 cm personalizada com o logotipo da sua empresa e direcionada para a avaliação no Google.',
      benefit: 'Elegância e identidade própria em cada mesa com incentivo direto às avaliações.',
      application: 'Restaurantes, cafeterias, clínicas e consultórios.',
      category: 'Placas 8 × 8 cm Resinadas',
      image: '/images/products/IMG-0679.jpg',
      backupImage: 'https://i.postimg.cc/Bbt2Kf2V/IMG-0679.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '8 × 8 cm',
        material: 'Acrílico 3 mm',
        printing: 'Impressão UV com logotipo da empresa',
        resin: 'Resina cristal líquida curada com acabamento brilhante',
        fixing: 'Fita 3M inclusa',
        operation: 'Aproximação NFC + QR Code',
        customization: 'Logomarca e cores da empresa',
        includedItems: ['1 Placa resinada 8 × 8 cm personalizada', 'Fita 3M aplicada'],
        notes: 'Todas as placas de 8 × 8 cm são resinadas.',
      },
    },
    {
      id: 'tag8-multilinks-mesa',
      name: 'MultiLinks por Mesa ou Quarto',
      dimension: '8 × 8 cm',
      numericPrice: 68.9,
      price: 'R$ 68,90',
      bulkThreshold: 10,
      bulkNumericPrice: 54.9,
      bulkPriceLabel: 'R$ 54,90/un. a partir de 10 unidades',
      description:
        'Identificação numerada por mesa ou quarto com acesso a múltiplos links (Wi-Fi, cardápio, pedidos e atendimento).',
      benefit: 'Autonomia para o cliente consultar informações sem sobrecarregar a equipe.',
      application: 'Restaurantes com atendimento numerado, hotéis, motéis e pousadas.',
      category: 'Placas 8 × 8 cm Resinadas',
      image: '/images/products/IMG-0643.jpg',
      backupImage: 'https://i.postimg.cc/4ynp9Rp2/IMG-0643.jpg',
      popular: true,
      customizable: true,
      specs: {
        dimension: '8 × 8 cm',
        material: 'Acrílico 3 mm resinado',
        printing: 'Impressão UV com identificação da mesa/quarto',
        resin: 'Resina cristal nobre',
        fixing: 'Fita 3M aplicada',
        operation: 'NFC + QR Code dinâmico',
        customization: 'Numeração e links personalizados',
        includedItems: ['1 Placa resinada 8 × 8 cm numerada', 'Fita 3M aplicada'],
        notes: 'Todas as placas de 8 × 8 cm são resinadas.',
      },
    },
  ],
};

// 6. TAGS ANTIMETAL PARA CELULAR COM NFC
export const TAGS_ANTIMETAL: GallerySection = {
  id: 'tags-antimetal',
  number: 6,
  title: 'Tags Antimetal para Celular com NFC',
  subtitle: 'Adesivos inteligentes ultrafinos com camada de ferrite para qualquer superfície.',
  dimension: 'Adesivo circular compacto (aprox. 3 cm)',
  description:
    'Tags adesivas ultrafinas com tecnologia Anti-Metal (camada interna de ferrite que bloqueia as interferências eletromagnéticas emitidas pelas baterias e carcaças metálicas dos smartphones e máquinas de cartão). Podem ser coladas na traseira de smartphones, tablets ou superfícies metálicas sem anular o sinal NFC do chip. Requer smartphone compatível com leitor NFC ativado.',
  photos: [
    {
      url: '/images/products/IMG-0673.jpg',
      backupUrl: 'https://i.postimg.cc/G2D4w3PW/IMG-0673.jpg',
      alt: 'Tag NFC Antimetal sem personalização',
    },
    {
      url: '/images/products/IMG-0665.jpg',
      backupUrl: 'https://i.postimg.cc/NMRjCJB0/IMG-0665.jpg',
      alt: 'Tag NFC Antimetal sem personalização detalhe',
    },
    {
      url: '/images/products/IMG-0683.jpg',
      backupUrl: 'https://i.postimg.cc/tgT6fHMk/IMG-0683.jpg',
      alt: 'Tag NFC Antimetal personalizada com acabamento UV/adesivo',
    },
    {
      url: '/images/products/IMG-0650.jpg',
      backupUrl: 'https://i.postimg.cc/D0q4sf89/IMG-0650.jpg',
      alt: 'Tag NFC Antimetal personalizada aplicação prática',
    },
  ],
  products: [
    {
      id: 'tag-antimetal-padrao',
      name: 'Tag Padrão',
      dimension: 'Adesivo circular (aprox. 3 cm)',
      numericPrice: 59.9,
      price: 'R$ 59,90',
      description:
        'Tag adesiva NFC com blindagem antimetal e acabamento monocromático discreto. Pronta para colar na capinha ou no celular.',
      benefit: 'Tenha seu link de contato, cardápio ou Pix sempre colado no seu próprio celular.',
      application: 'Vendedores, autônomos, entregadores e prestadores de serviços.',
      category: 'Tags Antimetal',
      image: '/images/products/IMG-0673.jpg',
      backupImage: 'https://i.postimg.cc/G2D4w3PW/IMG-0673.jpg',
      specs: {
        dimension: 'Diâmetro circular aproximado de 3 cm',
        material: 'Película vinílica com camada de ferrite antimetal',
        printing: 'Monocromática discreta',
        resin: 'Sem resina (perfil slim adesivo)',
        fixing: 'Adesivo de alta aderência no verso',
        operation: 'Aproximação NFC com blindagem contra metais',
        customization: 'Padrão com link configurado',
        includedItems: ['1 Tag adesiva antimetal configurada'],
      },
    },
    {
      id: 'tag-antimetal-uv',
      name: 'Tag Personalizada com Acabamento UV/Adesivo',
      dimension: 'Adesivo circular (aprox. 3 cm)',
      numericPrice: 69.9,
      price: 'R$ 69,90',
      description:
        'Tag adesiva antimetal com personalização duradoura do seu logotipo ou ícone sobre a camada de ferrite.',
      benefit: 'Apresentação exclusiva da sua marca na traseira do smartphone ou equipamento corporativo.',
      application: 'Equipes comerciais corporativas, consultores e executivos.',
      category: 'Tags Antimetal',
      image: '/images/products/IMG-0683.jpg',
      backupImage: 'https://i.postimg.cc/tgT6fHMk/IMG-0683.jpg',
      customizable: true,
      specs: {
        dimension: 'Diâmetro circular de 3 cm',
        material: 'Camada de ferrite com cobertura vinílica fosca',
        printing: 'Impressão personalizada UV/adesivo resistente',
        resin: 'Superfície fosca slim',
        fixing: 'Autoadesivo forte',
        operation: 'NFC para celulares compatíveis',
        customization: 'Logomarca do cliente',
        includedItems: ['1 Tag adesiva antimetal personalizada'],
      },
    },
    {
      id: 'tag-antimetal-biosite',
      name: 'Tag Padrão + BioSite Essencial',
      dimension: 'Adesivo + BioSite',
      numericPrice: 139.9,
      price: 'R$ 139,90',
      description:
        'Tag antimetal colável combinada à criação do BioSite Essencial com até 6 botões interativos para reunir todos os seus canais.',
      benefit: 'Solução portátil completa: adesivo no celular + página com todos os seus contatos e redes sociais.',
      application: 'Profissionais dinâmicos que atendem fora do escritório e participam de eventos.',
      category: 'Tags Antimetal',
      image: '/images/products/IMG-0650.jpg',
      backupImage: 'https://i.postimg.cc/D0q4sf89/IMG-0650.jpg',
      popular: true,
      specs: {
        dimension: 'Adesivo circular + página responsiva',
        material: 'Adesivo antimetal com ferrite',
        printing: 'Impressão padrão',
        resin: 'Slim fosco',
        fixing: 'Autoadesivo',
        operation: 'NFC direto para o BioSite',
        customization: 'BioSite com até 6 botões interativos e contatos',
        includedItems: ['1 Tag antimetal', 'Criação do BioSite Essencial'],
      },
    },
  ],
};

// 7. SERVIÇOS DIGITAIS — Google Meu Negócio & BioSites
export const DIGITAL_SERVICES: DigitalService[] = [
  {
    id: 'perfil-google-simples',
    title: 'Criação ou Recuperação Simples de Perfil Google',
    tagline: 'Presença inicial para ser encontrado nas buscas locais',
    numericPrice: 99.9,
    price: 'A partir de R$ 99,90',
    description:
      'Criação do Perfil da Empresa no Google do zero ou recuperação simples para empresas sem conflito de propriedade ou suspensões graves.',
    includes: [
      'Criação cadastral com endereço, horário e contatos',
      'Configuração da categoria primária e secundária',
      'Configuração do link oficial para avaliações',
      'Suporte para verificação cadastral',
    ],
    scopeNote:
      'O preço de criação ou recuperação simples depende da complexidade real. Não há promessa de aprovação ou posicionamento garantido.',
  },
  {
    id: 'perfil-google-complexo',
    title: 'Otimização / Recuperação Complexa de Ficha Suspensa',
    tagline: 'Fichas suspensas, contestação formal ou otimização avançada',
    numericPrice: 149.9,
    price: 'R$ 149,90 a R$ 199,90',
    description:
      'Trabalho especializado de recurso formal, auditoria de diretrizes e contestação documental para reativação de fichas legítimas suspensas ou otimização profunda de relevância.',
    includes: [
      'Auditoria de violações das diretrizes do Google',
      'Montagem do dossiê comprobatório do estabelecimento físico',
      'Abertura de ticket e contestação técnica formal',
      'Otimização de categorias, palavras-chave locais e produtos',
    ],
    scopeNote:
      'A recuperação de ficha suspensa deve ser avaliada individualmente. Não garantimos aprovação sumária ou resultados comerciais garantidos.',
  },
  {
    id: 'biosite-essencial',
    title: 'BioSite Essencial',
    tagline: 'Página digital que reúne links e informações importantes',
    numericPrice: 99.9,
    price: 'R$ 99,90',
    description:
      'Página digital desenvolvida prioritariamente para celulares que reúne contatos e canais em um só lugar. Contempla até 6 botões interativos configuráveis.',
    includes: [
      'Até 6 botões interativos (ex: Wi-Fi, Pix, Instagram, WhatsApp, Google Avaliações, Cardápio)',
      'Identidade visual com logotipo e paleta da sua empresa',
      'Carregamento instantâneo em qualquer smartphone',
      'Link curto e QR Code digital incluso',
    ],
    scopeNote: 'Os 6 botões são apresentados como possibilidades de configuração conforme os canais efetivamente utilizados.',
  },
  {
    id: 'biosite-profissional',
    title: 'BioSite Profissional',
    tagline: 'Para empresas que precisam de uma presença digital mais completa',
    numericPrice: 189.9,
    price: 'R$ 189,90',
    description:
      'Opção para empresas que precisam de uma presença digital mais completa, com informações comerciais organizadas, horários e canais de atendimento.',
    includes: [
      'Presença digital estruturada para celular',
      'Seções comerciais com apresentação de serviços',
      'Tabela de horários de funcionamento',
      'Integração com WhatsApp comercial e redes sociais',
    ],
    scopeNote: 'Escopo delimitado às funcionalidades comerciais efetivamente confirmadas no fechamento.',
  },
  {
    id: 'biosite-completo',
    title: 'BioSite Completo',
    tagline: 'A opção mais abrangente do portfólio BioSite',
    numericPrice: 299.9,
    price: 'R$ 299,90',
    description:
      'A opção mais abrangente do portfólio BioSite da VãBora Soluções para apresentar seu negócio com estrutura profunda e acabamento premium.',
    includes: [
      'Estrutura expandida para múltiplos serviços e canais',
      'Apresentação completa de equipe e diferenciais',
      'Botões de ação direta para vendas e suporte',
      'Otimização de carregamento em mobile',
    ],
    scopeNote: 'Funcionalidades delimitadas ao escopo contratado sem promessas não confirmadas.',
  },
];

// 8. COMBOS E OFERTAS OFICIAIS (Section 7)
export const COMMERCIAL_COMBOS: CommercialCombo[] = [
  {
    id: 'combo-balcao-express',
    name: 'Balcão Express',
    badge: 'Início Imediato',
    numericPrice: 79.9,
    price: 'R$ 79,90',
    description:
      'Inclui uma placa plana padrão de 10 × 10 cm com configuração para Google ou redirecionamento, conforme a versão contratada.',
    includes: [
      '1 Placa plana padrão 10 × 10 cm em acrílico 3 mm resistente',
      'Configuração para Google Avaliações ou canal escolhido',
      'Fita adesiva dupla face 3M inclusa para fixação imediata',
    ],
    ctaText: 'Comprar Balcão Express',
  },
  {
    id: 'combo-kit-duplo-padrao',
    name: 'Kit Duplo Padrão',
    badge: 'Economia Prática',
    numericPrice: 149.9,
    price: 'R$ 149,90',
    description:
      'Inclui duas placas padrão de 10 × 10 cm sem logomarca personalizada, com escolha entre os modelos disponíveis (ex: Google, Instagram, WhatsApp ou Wi-Fi).',
    includes: [
      '2 Placas planas padrão 10 × 10 cm em acrílico 3 mm',
      'Escolha de 2 modelos entre as opções confirmadas',
      'Fita 3M aplicada em ambas as placas',
    ],
    ctaText: 'Comprar Kit Duplo Padrão',
  },
  {
    id: 'combo-kit-duplo-personalizado',
    name: 'Kit Duplo Personalizado',
    badge: 'Identidade Própria',
    numericPrice: 199.9,
    price: 'R$ 199,90',
    description:
      'Inclui duas placas planas de 10 × 10 cm personalizadas com a logomarca da sua empresa.',
    includes: [
      '2 Placas planas 10 × 10 cm personalizadas com sua logomarca',
      'Escolha dos canais digitais para cada placa',
      'Fita 3M aplicada em ambas as placas para pronta instalação',
    ],
    ctaText: 'Comprar Kit Duplo Personalizado',
  },
  {
    id: 'combo-blindagem-total',
    name: 'Blindagem Total',
    badge: 'Destaque & Proteção',
    numericPrice: 189.9,
    price: 'R$ 189,90',
    monthlyNumericPrice: 19.9,
    monthlyPriceLabel: '+ R$ 19,90/mês (manutenção do servidor e suporte aos envios de e-mail ao lojista)',
    description:
      'Uma placa em L premium resinada (preta ou branca) combinada à implantação do Protetor de Reputação com mensalidade de suporte.',
    includes: [
      '1 Placa em L premium resinada (11 × 16 cm), preta ou branca',
      'Implantação do sistema Protetor de Reputação',
      'Mensalidade obrigatória de R$ 19,90/mês para manutenção de servidor e envio de e-mails ao lojista',
    ],
    ctaText: 'Quero Blindagem Total',
    highlight: true,
    notes: 'Valor inicial de R$ 189,90 e mensalidade de R$ 19,90/mês apresentados separadamente.',
  },
  {
    id: 'combo-presenca-digital-completa',
    name: 'Presença Digital Completa',
    badge: 'Pacote Integrado',
    numericPrice: 379.9,
    price: 'R$ 379,90',
    description:
      'Pacote integrado com placa personalizada, BioSite Profissional e otimização do Perfil da Empresa no Google.',
    includes: [
      '1 Placa personalizada com a logomarca da sua empresa',
      'BioSite Profissional para apresentar informações comerciais e contatos',
      'Otimização do Perfil da Empresa no Google (SEO Local)',
    ],
    ctaText: 'Quero Presença Completa',
    highlight: true,
  },
  {
    id: 'combo-hotelaria',
    name: 'Hotelaria e Quarto Inteligente',
    badge: 'Orçamento Personalizado',
    numericPrice: 0,
    price: 'Orçamento Personalizado',
    description:
      'Soluções com NFC e QR Code para hotéis, pousadas e hospedagens: Wi-Fi, cardápios, informações úteis aos hóspedes, recepção e áreas comuns.',
    includes: [
      'Placas para Wi-Fi e informações úteis dos quartos',
      'Cardápios digitais para room service ou restaurante',
      'Display em L para a recepção principal',
      'Links de serviços, passeios e atendimento direto',
    ],
    ctaText: 'Solicitar Orçamento para Hotelaria',
    notes: 'Proposta elaborada sob medida conforme a quantidade de quartos e ambientes.',
  },
];

// 9. PERGUNTAS FREQUENTES (FAQ) — 4 CATEGORIAS OFICIAIS (Section 16)
export const FAQ_ITEMS: FaqItem[] = [
  // NFC e QR Code
  {
    category: 'NFC e QR Code',
    question: 'Preciso instalar um aplicativo para utilizar NFC?',
    answer:
      'Não. Nem a sua empresa nem os seus clientes precisam instalar qualquer aplicativo. O leitor NFC já vem integrado no sistema operacional dos celulares modernos compatíveis, realizando a leitura de forma automática e imediata ao aproximar o aparelho.',
  },
  {
    category: 'NFC e QR Code',
    question: 'E se o celular do cliente não tiver NFC?',
    answer:
      'Todas as placas, displays e tags da VãBora Soluções acompanham QR Code dinâmico impresso em alta resolução. Caso o aparelho não possua leitor NFC ativado, o cliente pode simplesmente apontar a câmera do celular para ler o QR Code.',
  },
  {
    category: 'NFC e QR Code',
    question: 'Como funciona a leitura do QR Code?',
    answer:
      'O cliente abre a câmera padrão do smartphone e aponta para o QR Code impresso no display. Uma notificação com o link aparece na tela para toque imediato, abrindo a página de avaliações, cardápio ou contatos sem etapas extras.',
  },
  {
    category: 'NFC e QR Code',
    question: 'Todos os produtos permitem alterar o link depois da compra?',
    answer:
      'Depende da solução contratada. Nos modelos que utilizam links gerenciados ou BioSite, as informações e botões podem ser atualizados pela equipe. Em produtos gravados com links diretos estáticos (sem plataforma intermediária), a reprogramação do chip NFC pode requerer um aplicativo leitor/gravador compatível ou assistência do nosso suporte.',
  },

  // Produtos
  {
    category: 'Produtos',
    question: 'Qual é a diferença entre uma placa padrão e uma personalizada?',
    answer:
      'A placa padrão vem com layout pré-definido e ícones oficiais dos serviços (como Google Avaliações, WhatsApp ou Instagram), pronta para entrega rápida. Já a placa personalizada é produzida com a sua logomarca, paleta de cores e identidade visual da sua empresa.',
  },
  {
    category: 'Produtos',
    question: 'Qual é a diferença entre a placa plana e a placa em L?',
    answer:
      'A placa plana de 10 × 10 cm é reta e compacta em acrílico 3 mm, desenhada para ser colada sobre mesas ou balcões com fita 3M. A placa em L de 11 × 16 cm possui base inclinada ergonômica para ficar em pé sozinha em balcões de atendimento e recepções, e conta com acabamento integral em resina cristal.',
  },
  {
    category: 'Produtos',
    question: 'Quais são as opções de placas 8 × 8 cm?',
    answer:
      'Temos três opções principais, todas com acabamento em resina cristal e fita 3M inclusa: Link Direto (padrão com Google, Wi-Fi ou Cardápio por R$ 48,90), Personalizada com Logo + Google (R$ 58,90) e MultiLinks por Mesa ou Quarto (R$ 68,90).',
  },
  {
    category: 'Produtos',
    question: 'Como funciona a personalização?',
    answer:
      'Ao escolher uma opção personalizada, você nos envia o arquivo do seu logotipo em vetor ou alta definição e o link que deseja configurar. Nossa equipe prepara o arquivo para impressão UV e grava o chip NFC antes do envio.',
  },
  {
    category: 'Produtos',
    question: 'Como escolho os modelos de um combo?',
    answer:
      'No Kit Duplo (padrão ou personalizado), você pode escolher os modelos entre as opções confirmadas do catálogo (por exemplo, 1 Google + 1 Instagram, ou 1 Google + 1 WhatsApp). Basta indicar sua preferência na sacola ou no atendimento comercial.',
  },
  {
    category: 'Produtos',
    question: 'Como funciona o preço para 10 unidades nas placas 8 × 8 cm?',
    answer:
      'O desconto por quantidade é aplicado automaticamente quando forem atingidas 10 unidades elegíveis do modelo: o Link Direto passa de R$ 48,90 para R$ 38,90/un., a Personalizada de R$ 58,90 para R$ 48,90/un., e a MultiLinks de R$ 68,90 para R$ 54,90/un.',
  },

  // Serviços digitais
  {
    category: 'Serviços digitais',
    question: 'O que é o BioSite?',
    answer:
      'O BioSite é uma página digital prática desenvolvida prioritariamente para celulares que reúne os principais links e canais da sua empresa (como WhatsApp, Instagram, cardápio, avaliações no Google, Wi-Fi e Pix) em um endereço fácil de compartilhar.',
  },
  {
    category: 'Serviços digitais',
    question: 'O que está incluído no BioSite Essencial?',
    answer:
      'O BioSite Essencial (R$ 99,90) contempla até 6 botões interativos configurados conforme as necessidades do seu negócio, além da inserção do seu logotipo e identidade visual com carregamento rápido em qualquer smartphone.',
  },
  {
    category: 'Serviços digitais',
    question: 'Como funciona o Protetor de Reputação?',
    answer:
      'O Protetor de Reputação organiza o feedback dos clientes: notas de 1 a 3 estrelas são direcionadas para um canal interno da gerência para resolução amigável, enquanto notas de 4 a 5 estrelas seguem diretamente para a página de avaliação do Google. A solução organiza o recebimento e não bloqueia nem impede avaliações públicas.',
  },
  {
    category: 'Serviços digitais',
    question: 'O Protetor de Reputação tem mensalidade?',
    answer:
      'Sim. O Protetor de Reputação possui mensalidade de R$ 19,90/mês para cobrir a manutenção contínua do servidor e o suporte aos envios de e-mail ao lojista, apresentada separadamente do valor inicial de implantação.',
  },
  {
    category: 'Serviços digitais',
    question: 'É possível recuperar uma ficha suspensa no Google?',
    answer:
      'Sim, oferecemos o serviço de otimização e recuperação complexa (R$ 149,90 a R$ 199,90). Realizamos uma auditoria das diretrizes e elaboramos o dossiê formal de contestação. Cada caso é avaliado individualmente e a decisão final cabe ao Google com base nas evidências apresentadas.',
  },

  // Pedidos e atendimento
  {
    category: 'Pedidos e atendimento',
    question: 'Como faço um pedido com vários produtos?',
    answer:
      'Você pode adicionar os produtos desejados à sua Sacola de Compras navegando pelo catálogo. Na sacola, ajuste quantidades, adicione observações de personalização e clique em "Finalizar pelo WhatsApp" para enviar o resumo completo à nossa equipe comercial.',
  },
  {
    category: 'Pedidos e atendimento',
    question: 'Como funciona a compra para revenda?',
    answer:
      'Possuímos uma área exclusiva para revendedores e parceiros comerciais. Preencha o formulário na seção de Revenda ou fale diretamente com nosso polo comercial para consultar modelos disponíveis, personalizações e condições de fornecimento.',
  },
  {
    category: 'Pedidos e atendimento',
    question: 'Como solicito uma visita comercial?',
    answer:
      'Realizamos visitas comerciais em Curitiba/PR e Serra Talhada/PE mediante combinação prévia de data e disponibilidade. Basta preencher o formulário de visita comercial com seus dados e o período de preferência.',
  },
  {
    category: 'Pedidos e atendimento',
    question: 'Qual é o prazo de produção e entrega?',
    answer:
      'Para produtos padrão em estoque, o envio ou entrega é ágil. Para itens personalizados com logotipo ou desenvolvimento de BioSite, o prazo varia conforme o volume e aprovação da arte. Nossa equipe informa o prazo exato antes de fechar o pedido.',
  },
  {
    category: 'Pedidos e atendimento',
    question: 'Como funcionam frete, garantia e suporte?',
    answer:
      'O valor de frete é cotado com base no CEP do destinatário e volume do pacote. Todos os produtos contam com suporte para conferência e gravação dos chips NFC. Consulte nossa equipe comercial para tirar qualquer dúvida antes da finalização.',
  },
];
