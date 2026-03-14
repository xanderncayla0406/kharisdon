"use client";

import { motion } from "framer-motion";

interface Product {
  name: string;
  scripture: string;
  verse: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    name: "Job\u2019s Renewal",
    scripture: "Job 33:25",
    verse: "Let his flesh be renewed like a child\u2019s; let him be restored as in the days of his youth.",
    subtitle: "Whipped Tallow Face Balm for Mature Skin",
    description:
      "Crafted for mature skin from pasture-raised leaf fat \u2014 the most nutrient-dense part of the beef tallow. Cold-processed and whipped to perfection, stored in eco-friendly cobalt blue glass.",
    icon: (
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id="jar0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="50%" stopColor="#003580" />
            <stop offset="100%" stopColor="#002255" />
          </linearGradient>
          <linearGradient id="shine0" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="40%" stopColor="white" stopOpacity="0.15" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="18" y="8" width="44" height="14" rx="4" fill="#1a1a1a" opacity="0.85" />
        <rect x="18" y="8" width="44" height="14" rx="4" fill="url(#shine0)" />
        <rect x="12" y="22" width="56" height="68" rx="8" fill="url(#jar0)" />
        <rect x="12" y="22" width="56" height="68" rx="8" fill="url(#shine0)" />
        <rect x="20" y="40" width="40" height="30" rx="3" fill="white" opacity="0.9" />
        <rect x="26" y="48" width="28" height="2" rx="1" fill="#0047AB" opacity="0.4" />
        <rect x="30" y="54" width="20" height="2" rx="1" fill="#0047AB" opacity="0.3" />
        <rect x="28" y="60" width="24" height="2" rx="1" fill="#0047AB" opacity="0.2" />
        <ellipse cx="55" cy="45" rx="3" ry="12" fill="white" opacity="0.08" />
      </svg>
    ),
  },
  {
    name: "Psalms\u2019 Radiance",
    scripture: "Psalm 34:5",
    verse: "Those who look to Him are radiant; their faces are never covered with shame.",
    subtitle: "Whipped Tallow Face Balm for All",
    description:
      "Made from pasture-raised leaf fat \u2014 the most nutrient-dense part of the beef tallow. Cold-processed and whipped to perfection, stored in eco-friendly cobalt blue glass.",
    icon: (
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id="jar1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="50%" stopColor="#003580" />
            <stop offset="100%" stopColor="#002255" />
          </linearGradient>
          <linearGradient id="shine1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="40%" stopColor="white" stopOpacity="0.15" />
            <stop offset="60%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="18" y="8" width="44" height="14" rx="4" fill="#1a1a1a" opacity="0.85" />
        <rect x="18" y="8" width="44" height="14" rx="4" fill="url(#shine1)" />
        <rect x="12" y="22" width="56" height="68" rx="8" fill="url(#jar1)" />
        <rect x="12" y="22" width="56" height="68" rx="8" fill="url(#shine1)" />
        <rect x="20" y="40" width="40" height="30" rx="3" fill="white" opacity="0.9" />
        <rect x="26" y="48" width="28" height="2" rx="1" fill="#0047AB" opacity="0.4" />
        <rect x="30" y="54" width="20" height="2" rx="1" fill="#0047AB" opacity="0.3" />
        <rect x="28" y="60" width="24" height="2" rx="1" fill="#0047AB" opacity="0.2" />
        <ellipse cx="55" cy="45" rx="3" ry="12" fill="white" opacity="0.08" />
      </svg>
    ),
  },
  {
    name: "Proverbs\u2019 Lips",
    scripture: "Proverbs 16:24",
    verse: "Gracious words are a honeycomb, sweet to the soul and healing to the bones.",
    subtitle: "Honey Vanilla Lip Balm",
    description:
      "Local raw beeswax and honey blended with coconut oil and Madagascar vanilla infused jojoba oil.",
    icon: (
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id="tube1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="100%" stopColor="#002255" />
          </linearGradient>
        </defs>
        <rect x="24" y="6" width="32" height="12" rx="4" fill="#1a1a1a" opacity="0.85" />
        <rect x="22" y="18" width="36" height="72" rx="6" fill="url(#tube1)" />
        <rect x="22" y="18" width="36" height="72" rx="6" fill="url(#shine1)" />
        <rect x="28" y="35" width="24" height="38" rx="3" fill="white" opacity="0.9" />
        <rect x="32" y="43" width="16" height="2" rx="1" fill="#0047AB" opacity="0.4" />
        <rect x="34" y="49" width="12" height="2" rx="1" fill="#0047AB" opacity="0.3" />
        <rect x="33" y="55" width="14" height="2" rx="1" fill="#0047AB" opacity="0.2" />
        <rect x="34" y="61" width="12" height="2" rx="1" fill="#0047AB" opacity="0.15" />
      </svg>
    ),
  },
  {
    name: "Isaiah\u2019s Joy",
    scripture: "Isaiah 61:3",
    verse: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning.",
    subtitle: "Solid Face Oil",
    description:
      "A rich, solid face oil crafted from local beeswax and nourishing oils for mature skin. Melts into your skin, bringing deep restoration and radiant joy.",
    icon: (
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id="tin1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="60%" stopColor="#003580" />
            <stop offset="100%" stopColor="#001a44" />
          </linearGradient>
        </defs>
        <ellipse cx="40" cy="30" rx="30" ry="10" fill="#1a1a1a" opacity="0.7" />
        <rect x="10" y="30" width="60" height="40" fill="url(#tin1)" />
        <ellipse cx="40" cy="70" rx="30" ry="10" fill="url(#tin1)" />
        <ellipse cx="40" cy="30" rx="30" ry="10" fill="url(#tin1)" />
        <ellipse cx="40" cy="30" rx="30" ry="10" fill="white" opacity="0.08" />
        <rect x="20" y="38" width="40" height="24" rx="3" fill="white" opacity="0.9" />
        <rect x="26" y="45" width="28" height="2" rx="1" fill="#0047AB" opacity="0.4" />
        <rect x="30" y="51" width="20" height="2" rx="1" fill="#0047AB" opacity="0.3" />
        <ellipse cx="55" cy="40" rx="4" ry="15" fill="white" opacity="0.06" />
      </svg>
    ),
  },
  {
    name: "Matthew\u2019s Cleanse",
    scripture: "Matthew 6:17",
    verse: "But when you fast, put oil on your head and wash your face.",
    subtitle: "Facial Oil Cleanser",
    description:
      "A gentle tallow, beeswax and oil balm that cleanses without stripping. Leaving an uplifting sweet orange scent.",
    icon: (
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id="bottle1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="100%" stopColor="#002255" />
          </linearGradient>
        </defs>
        <rect x="32" y="4" width="16" height="16" rx="3" fill="#1a1a1a" opacity="0.85" />
        <rect x="36" y="0" width="8" height="8" rx="4" fill="#333" opacity="0.6" />
        <path d="M28 20 L52 20 L54 30 L54 88 Q54 94 48 94 L32 94 Q26 94 26 88 L26 30 Z" fill="url(#bottle1)" />
        <path d="M28 20 L52 20 L54 30 L54 88 Q54 94 48 94 L32 94 Q26 94 26 88 L26 30 Z" fill="url(#shine1)" />
        <rect x="30" y="45" width="20" height="30" rx="3" fill="white" opacity="0.9" />
        <rect x="34" y="52" width="12" height="2" rx="1" fill="#0047AB" opacity="0.4" />
        <rect x="35" y="58" width="10" height="2" rx="1" fill="#0047AB" opacity="0.3" />
        <rect x="34" y="64" width="12" height="2" rx="1" fill="#0047AB" opacity="0.2" />
      </svg>
    ),
  },
  {
    name: "Moses\u2019 Mist",
    scripture: "Deuteronomy 32:2",
    verse: "Let my teaching fall like rain and my words descend like dew, like showers on new grass.",
    subtitle: "Freshener / Toner",
    description:
      "A refreshing mist that settles like morning dew. Made with natural botanicals to tone, balance, and revive your skin.",
    icon: (
      <svg viewBox="0 0 80 100" className="w-full h-full">
        <defs>
          <linearGradient id="spray1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0047AB" />
            <stop offset="100%" stopColor="#002255" />
          </linearGradient>
        </defs>
        <rect x="30" y="2" width="20" height="10" rx="3" fill="#1a1a1a" opacity="0.85" />
        <rect x="44" y="0" width="14" height="8" rx="2" fill="#333" opacity="0.6" />
        <path d="M26 12 L54 12 L56 24 L56 88 Q56 94 50 94 L30 94 Q24 94 24 88 L24 24 Z" fill="url(#spray1)" />
        <path d="M26 12 L54 12 L56 24 L56 88 Q56 94 50 94 L30 94 Q24 94 24 88 L24 24 Z" fill="url(#shine1)" />
        <rect x="30" y="40" width="20" height="35" rx="3" fill="white" opacity="0.9" />
        <rect x="33" y="48" width="14" height="2" rx="1" fill="#0047AB" opacity="0.4" />
        <rect x="35" y="54" width="10" height="2" rx="1" fill="#0047AB" opacity="0.3" />
        <rect x="34" y="60" width="12" height="2" rx="1" fill="#0047AB" opacity="0.2" />
        <circle cx="60" cy="6" r="1.5" fill="#0047AB" opacity="0.3" />
        <circle cx="64" cy="10" r="1" fill="#0047AB" opacity="0.2" />
        <circle cx="62" cy="14" r="1.5" fill="#0047AB" opacity="0.25" />
      </svg>
    ),
  },
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
    >
      {/* Product visual */}
      <div className="relative h-64 bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center p-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="w-24 h-32 relative z-10 transition-transform duration-500 group-hover:scale-110" style={{ animation: `float ${6 + index}s ease-in-out infinite` }}>
          {product.icon}
        </div>
        {/* Soft glow behind product */}
        <div className="absolute w-32 h-32 bg-cobalt/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-semibold text-charcoal">
            {product.name}
          </h3>
        </div>
        <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase text-cobalt mb-4">
          {product.subtitle}
        </p>
        <p className="font-[family-name:var(--font-sans)] text-charcoal-light leading-relaxed mb-6">
          {product.description}
        </p>

        {/* Scripture */}
        <div className="border-t border-cream-dark pt-4">
          <p className="font-[family-name:var(--font-serif)] text-sm italic text-charcoal-light leading-relaxed">
            &ldquo;{product.verse}&rdquo;
          </p>
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-widest uppercase text-gold mt-2">
            {product.scripture}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  return (
    <section id="products" className="relative py-28 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-cobalt/70 mb-4 block">
            Our Collection
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4">
            Crafted by Hand,
            <br />
            <span className="italic text-cobalt">Named by Scripture</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-16 h-px bg-gold/40" />
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-gold/60">
              <rect x="6" y="0" width="4" height="20" rx="2" fill="currentColor" />
              <rect x="0" y="6" width="16" height="4" rx="2" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
          <p className="font-[family-name:var(--font-sans)] text-lg text-charcoal-light mt-6 max-w-2xl mx-auto">
            Each product is named after a scripture that reflects its purpose —
            because true beauty is a gift from above.
          </p>
        </motion.div>

        {/* Top row - 3 products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>

        {/* Bottom row - 3 products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(3).map((product, index) => (
            <ProductCard
              key={product.name}
              product={product}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
