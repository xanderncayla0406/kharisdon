"use client";

import { motion } from "framer-motion";

export default function CustomGifts() {
  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-cobalt/[0.03] rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-gold/[0.05] rounded-full translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-px bg-gold/40" />
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-gold/60">
              <rect x="6" y="0" width="4" height="20" rx="2" fill="currentColor" />
              <rect x="0" y="6" width="16" height="4" rx="2" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-6">
            Custom Made
            <br />
            <span className="italic text-cobalt">for Your Blessed Events</span>
          </h2>

          <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl text-charcoal-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Weddings, baby showers, baptisms, birthdays, or any celebration of
            God&apos;s blessings — we craft personalized gifts made with the same
            love and care as everything we do.
          </p>

          {/* Gift icons */}
          <div className="flex items-center justify-center gap-8 md:gap-14 mb-10">
            {/* Gift box icon */}
            <motion.div
              whileHover={{ scale: 1.1, y: -4 }}
              className="text-cobalt"
            >
              <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-18 md:h-18">
                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <rect x="14" y="28" width="36" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="10" y="22" width="44" height="8" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <line x1="32" y1="22" x2="32" y2="50" stroke="currentColor" strokeWidth="1.5" />
                <path d="M32 22 C32 22 26 14 22 14 C18 14 18 18 20 20 C22 22 32 22 32 22Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M32 22 C32 22 38 14 42 14 C46 14 46 18 44 20 C42 22 32 22 32 22Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Heart icon */}
            <motion.div
              whileHover={{ scale: 1.1, y: -4 }}
              className="text-gold"
            >
              <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-18 md:h-18">
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
            </motion.div>

            {/* Cross icon */}
            <motion.div
              whileHover={{ scale: 1.1, y: -4 }}
              className="text-cobalt"
            >
              <svg viewBox="0 0 64 64" className="w-14 h-14 md:w-18 md:h-18">
                <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <rect x="28" y="14" width="8" height="36" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <rect x="18" y="22" width="28" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:contact@kharisdon.com"
              className="inline-block px-10 py-4 bg-cobalt text-white font-[family-name:var(--font-sans)] text-sm md:text-base tracking-widest uppercase rounded-full hover:bg-cobalt-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Inquire About Custom Gifts
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
