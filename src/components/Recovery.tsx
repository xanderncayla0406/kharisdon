"use client";

import { motion } from "framer-motion";

export default function Recovery() {
  return (
    <section id="recovery" className="relative py-28 md:py-36 overflow-hidden">
      {/* Deep atmospheric background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #0047AB 0%, #002255 40%, #1a1a2e 70%, #333333 100%)",
        }}
      />

      {/* Subtle cross pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M18 0h4v40h-4zM0 18h40v4H0z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Light rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-full opacity-[0.06]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white via-white/50 to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-3/4 bg-gradient-to-b from-white/50 to-transparent rotate-3" />
        <div className="absolute top-0 right-1/3 w-px h-3/4 bg-gradient-to-b from-white/50 to-transparent -rotate-3" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-gold/80 mb-4 block">
            A Greater Purpose
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
            Healing Beyond
            <br />
            <span className="italic text-gold-light">Skin</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-6 mb-10">
            <div className="w-16 h-px bg-gold/40" />
            <svg width="16" height="20" viewBox="0 0 16 20" className="text-gold/60">
              <rect x="6" y="0" width="4" height="20" rx="2" fill="currentColor" />
              <rect x="0" y="6" width="16" height="4" rx="2" fill="currentColor" />
            </svg>
            <div className="w-16 h-px bg-gold/40" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Kharisdon is more than skincare — it&apos;s a ministry. Every product sold
            brings us one step closer to the healing fund — supporting those who
            need a second chance at life.
          </p>

          <p className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-3xl mx-auto">
            Karissa&apos;s vision extends beyond the jar. She believes that the same
            God who placed healing in nature also placed healing in community —
            and that no one should have to walk the road to recovery alone.
          </p>

          <p className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-white/70 leading-relaxed mb-14 max-w-3xl mx-auto">
            When you choose Kharisdon, you&apos;re not just choosing better
            skincare. You&apos;re choosing to be part of something bigger — a
            movement of grace, restoration, and hope.
          </p>
        </motion.div>

        {/* Featured scripture */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-2xl mx-auto mb-14"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-[family-name:var(--font-serif)] text-6xl text-white/10">
            &ldquo;
          </div>
          <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl italic text-white/90 leading-relaxed">
            &ldquo;He heals the brokenhearted and binds up their wounds.&rdquo;
          </p>
          <cite className="block mt-4 font-[family-name:var(--font-sans)] text-sm tracking-widest uppercase text-gold not-italic">
            Psalm 147:3
          </cite>
        </motion.blockquote>

        {/* Impact callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="inline-block"
        >
          <div className="border border-gold/30 rounded-2xl px-12 py-10 backdrop-blur-sm bg-white/[0.03]">
            <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-gold-light italic mb-3">
              Every purchase plants a seed of hope
            </p>
            <p className="font-[family-name:var(--font-serif)] text-lg md:text-xl text-white/60 tracking-wide mb-6">
              Proceeds go towards recovery and mental health programs
            </p>
            <div className="border-t border-white/10 pt-6">
              <p className="font-[family-name:var(--font-serif)] text-lg md:text-xl text-white/80 mb-3 leading-relaxed">
                If you or someone you know is struggling with addiction or mental health, please reach out.
              </p>
              <p className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl font-bold text-gold-light tracking-wide">
                Call or text{" "}
                <a href="tel:988" className="underline decoration-gold/40 hover:decoration-gold transition-colors">
                  988
                </a>
              </p>
              <p className="font-[family-name:var(--font-serif)] text-base md:text-lg text-white/50 mt-2 tracking-wide">
                Suicide &amp; Crisis Lifeline — Available 24/7
              </p>
              <p className="font-[family-name:var(--font-serif)] text-base md:text-lg text-white/60 mt-4">
                <a
                  href="https://www.samhsa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-gold/40 hover:decoration-gold hover:text-gold-light transition-colors"
                >
                  samhsa.gov
                </a>
                {" "}— Substance Abuse &amp; Mental Health Services
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
