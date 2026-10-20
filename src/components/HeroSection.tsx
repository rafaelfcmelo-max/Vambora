import React from 'react';
import {
  Sparkles,
  ArrowDown,
  Layers,
  Star,
  Share2,
  Sliders,
  Cpu,
  Headphones,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Shield,
  CreditCard,
  Tag,
  Globe,
  Briefcase,
  Users,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/catalog';

interface HeroSectionProps {
  onOpenContact: (customItem?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const immediateBenefits = [
    {
      title: 'Acesso Fácil e Direto',
      desc: 'Facilite o acesso às informações da sua empresa com um simples toque ou leitura de câmera.',
      icon: Star,
    },
    {
      title: 'Canais Centralizados',
      desc: 'Reúna canais de atendimento em um só lugar, conforme a solução contratada.',
      icon: Share2,
    },
    {
      title: 'Direcionamento Inteligente',
      desc: 'Direcione clientes para avaliações no Google, cardápios, WhatsApp e redes sociais.',
      icon: Layers,
    },
    {
      title: 'Padrão ou Personalizado',
      desc: 'Escolha entre modelos padrão prontos para entrega e linhas personalizadas com a sua marca.',
      icon: Sliders,
    },
    {
      title: 'Físico + Digital',
      desc: 'Combine displays físicos em acrílico 3 mm e resina com páginas e ferramentas digitais.',
      icon: Cpu,
    },
    {
      title: 'Atendimento Próximo',
      desc: 'Conte com atendimento comercial em Curitiba e Serra Talhada para escolher a melhor opção.',
      icon: Headphones,
    },
  ];

  const quickCategories = [
    {
      title: 'Google Avaliações',
      subtitle: 'Placas e displays para coletar 5 estrelas',
      href: '#produtos-google',
      icon: Star,
      color: 'text-amber-400',
    },
    {
      title: 'Placas MultiLinks',
      subtitle: 'Centralize redes, Wi-Fi e contatos',
      href: '#placas-em-l',
      icon: Share2,
      color: 'text-[#35CFFF]',
    },
    {
      title: 'Cartões NFC',
      subtitle: 'Cartão inteligente formato bancário',
      href: '#cartoes-inteligentes-nfc',
      icon: CreditCard,
      color: 'text-[#1677FF]',
    },
    {
      title: 'Tags Antimetal',
      subtitle: 'Adesivos inteligentes para celular',
      href: '#tags-antimetal',
      icon: Tag,
      color: 'text-emerald-400',
    },
    {
      title: 'Placas 8 × 8 cm',
      subtitle: 'Resinadas para mesas e quartos',
      href: '#placas-8x8-resinadas',
      icon: Layers,
      color: 'text-purple-400',
    },
    {
      title: 'BioSite',
      subtitle: 'Página digital prática e organizada',
      href: '#biosites',
      icon: Globe,
      color: 'text-cyan-400',
    },
    {
      title: 'Protetor de Reputação',
      subtitle: 'Triagem e escuta ativa de feedback',
      href: '#protetor-reputacao',
      icon: Shield,
      color: 'text-[#35CFFF]',
    },
    {
      title: 'Serviços para Empresas',
      subtitle: 'Perfil no Google e SEO Local',
      href: '#servicos-digitais',
      icon: Briefcase,
      color: 'text-blue-400',
    },
    {
      title: 'Revenda & Parcerias',
      subtitle: 'Seja um parceiro comercial VaBora',
      href: '#revenda-parcerias',
      icon: Users,
      color: 'text-amber-300',
    },
  ];

  return (
    <section id="inicio" className="relative pt-6 pb-20 px-4 sm:px-8 bg-[#050608] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#1677FF]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto">
        {/* Top Fold: Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6 pb-16">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Logo Display with Neutral Contrast Area (Section 1.1) */}
            <div className="mb-6 inline-block bg-white p-2.5 rounded-2xl border border-slate-200 shadow-xl transition-transform hover:scale-[1.02]">
              <img
                src={CONTACT_INFO.logo.local}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = CONTACT_INFO.logo.remote;
                }}
                alt="Logotipo Oficial VaBora Soluções"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>

            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151B25] border border-[#1677FF]/40 text-xs sm:text-sm font-semibold text-[#35CFFF] mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#35CFFF]" />
              <span>Aproxime. Conecte. VãBora.</span>
            </div>

            {/* Main Title (Section 4.1) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.12] mb-5 text-balance">
              Sua empresa mais conectada.{' '}
              <span className="bg-gradient-to-r from-[#35CFFF] via-[#1677FF] to-white bg-clip-text text-transparent">
                Seu atendimento mais inteligente.
              </span>
            </h1>

            {/* Subtitle (Section 4.1) */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8">
              Soluções com NFC, QR Code e tecnologia digital para facilitar avaliações, compartilhar contatos, apresentar cardápios e aproximar sua empresa dos clientes.
            </p>

            {/* Main Action Buttons (Section 4.1) */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto mb-8">
              <a
                href="#produtos-google"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#1677FF] to-[#0D5BCC] hover:from-[#35CFFF] hover:to-[#1677FF] text-white text-sm font-bold shadow-[0_0_20px_rgba(22,119,255,0.4)] transition-all duration-200 active:scale-95"
              >
                <span>Conhecer produtos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => onOpenContact('Quero uma solução personalizada para minha empresa')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0D1118] hover:bg-[#151B25] text-white text-sm font-bold border border-[#1677FF]/40 hover:border-[#35CFFF] transition-all duration-200 shadow-md active:scale-95"
              >
                <span>Quero uma solução personalizada</span>
                <ChevronRight className="w-4 h-4 text-[#35CFFF]" />
              </button>
            </div>

            {/* Official Regional Polos Info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 font-medium">
              <span className="text-slate-500">Atendimento comercial:</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Curitiba/PR (41) 98844-2761</span>
              </div>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Serra Talhada/PE (87) 99157-8326</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Highlight Photography (Section 4.1) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden bg-[#0D1118] border border-[#1677FF]/30 shadow-2xl p-3 glow-border group">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-black/50">
                <img
                  src="/images/products/IMG-0706.jpg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://i.postimg.cc/BZCV4SVc/IMG-0706.jpg';
                  }}
                  alt="Display Premium em L VãBora Soluções - Acabamento em acrílico e resina para balcão"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-transparent to-transparent opacity-80" />

                {/* Floating Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0D1118]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#35CFFF] font-bold uppercase tracking-wider block">
                      Fotografia Real do Produto
                    </span>
                    <span className="text-xs font-bold text-white">
                      Display Premium em L 11 × 16 cm Resinada
                    </span>
                  </div>
                  <span className="text-xs font-black text-white font-mono bg-[#1677FF]/20 px-2.5 py-1 rounded-lg border border-[#1677FF]/40">
                    Acrílico 3 mm + Resina
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4.2: Benefícios Imediatos */}
        <div className="pt-8 pb-14 border-t border-white/5">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[11px] font-bold text-[#35CFFF] uppercase tracking-wider block mb-2">
              Praticidade & Resultados Comerciais
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Benefícios Imediatos para o seu Negócio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {immediateBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0D1118] border border-white/5 hover:border-[#1677FF]/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#151B25] border border-white/10 flex items-center justify-center text-[#35CFFF] shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5">{item.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 4.3: Acesso Rápido às Categorias */}
        <div className="pt-8 pb-4 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-bold text-[#35CFFF] uppercase tracking-wider block mb-1">
                Navegação Rápida
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                Acesso por Categoria
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Escolha uma categoria para ir direto aos modelos e preços
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {quickCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <a
                  key={idx}
                  href={cat.href}
                  className="p-4 rounded-xl bg-[#0D1118] hover:bg-[#151B25] border border-white/5 hover:border-[#1677FF]/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-[#151B25] border border-white/10 flex items-center justify-center group-hover:bg-[#1677FF]/20 transition-colors">
                      <Icon className={`w-4 h-4 ${cat.color}`} />
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-0.5 group-hover:text-[#35CFFF] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-tight">
                      {cat.subtitle}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
