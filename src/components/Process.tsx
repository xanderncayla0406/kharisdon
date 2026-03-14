"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Locally Sourced",
    description:
      "Karissa personally sources ingredients from local farms and trusted producers.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path
          d="M32 14 C28 20 18 24 18 34 C18 42 24 48 32 48 C40 48 46 42 46 34 C46 24 36 20 32 14Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M32 48 L32 30 M32 30 C28 34 26 32 24 28 M32 30 C36 34 38 32 40 28"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Pasture-Raised Leaf Fat",
    description:
      "Our beef tallow comes exclusively from pasture-raised leaf fat \u2014 the most nutrient-dense part, rich in ADEK vitamins and fatty acids.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path
          d="M20 40 Q22 24 32 16 Q42 24 44 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M32 16 L32 44 M26 28 L32 32 M38 28 L32 32 M24 36 L32 38 M40 36 L32 38"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line x1="18" y1="44" x2="46" y2="44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cold Processed",
    description:
      "Select products are made through a cold process, preserving the natural nutrients, enzymes, and healing properties that heat would destroy.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <circle cx="32" cy="32" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <line x1="32" y1="14" x2="32" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="32" y1="36" x2="32" y2="50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14" y1="32" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="36" y1="32" x2="50" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="19" y1="19" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="38" y1="38" x2="45" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="45" y1="19" x2="38" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="26" y1="38" x2="19" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="32" cy="13" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="32" cy="51" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="13" cy="32" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="51" cy="32" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Handcrafted with Love",
    description:
      "Every batch is made by hand with extreme attention to quality. Each product is a labor of love \u2014 never mass-produced, always personal.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path
          d="M32 46 C32 46 16 36 16 26 C16 20 20 16 26 16 C29 16 31 18 32 20 C33 18 35 16 38 16 C44 16 48 20 48 26 C48 36 32 46 32 46Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Eco-Friendly Packaging",
    description:
      "Stored in cobalt blue glass to protect potency and minimize environmental impact. Beautiful, reusable, and kind to the earth.",
    icon: (
      <svg viewBox="0 0 64 64" className="w-16 h-16">
        <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
        <path
          d="M22 48 L22 22 Q22 16 32 16 Q42 16 42 22 L42 48 Q42 52 32 52 Q22 52 22 48Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <ellipse cx="32" cy="22" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M28 36 L32 32 L36 36 M32 32 L32 44"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.6"
        />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 bg-cream overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cobalt/[0.03] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/[0.05] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-cobalt/70 mb-4 block">
            The Process
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4">
            Hand-Crafted,
            <br />
            <span className="italic text-cobalt">Locally Sourced</span>
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
            From earth to skin — every step is intentional, every ingredient is purposeful.
          </p>
        </motion.div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {steps.slice(0, 3).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center group"
            >
              <div className="text-cobalt mb-6 flex justify-center transition-transform duration-500 group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-charcoal-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row - 2 centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-3xl mx-auto mt-12 lg:mt-16">
          {steps.slice(3).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.15, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center group"
            >
              <div className="text-cobalt mb-6 flex justify-center transition-transform duration-500 group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-sans)] text-charcoal-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
