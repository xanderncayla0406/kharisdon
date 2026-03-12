"use client";

import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      <div className="w-16 h-px bg-gold/40" />
      <svg width="16" height="20" viewBox="0 0 16 20" className="text-gold/60">
        <rect x="6" y="0" width="4" height="20" rx="2" fill="currentColor" />
        <rect x="0" y="6" width="16" height="4" rx="2" fill="currentColor" />
      </svg>
      <div className="w-16 h-px bg-gold/40" />
    </div>
  );
}

export default function Mission() {
  return (
    <section id="mission" className="relative py-28 md:py-36 bg-cream">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23333333' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-cobalt/70 mb-4 block">
            Our Mission
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-4">
            Rooted in Faith,
            <br />
            <span className="italic text-cobalt">Made with Purpose</span>
          </h2>

          <SectionDivider />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-charcoal-light leading-relaxed mb-8">
            Kharisdon was born from a simple conviction: that the healing power
            of God&apos;s creation should be accessible to everyone. Every jar,
            every balm, every drop is handcrafted by Karissa with ingredients she
            personally sources from local farms and trusted producers.
          </p>

          <p className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-charcoal-light leading-relaxed mb-8">
            We believe that what you put on your body matters just as much as
            what you put in it. That&apos;s why every product is crafted in the
            spirit of Kharis — preserving the God-given nutrients that your skin
            was designed to receive.
          </p>

          <p className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-charcoal-light leading-relaxed mb-12">
            Our mission is simple:{" "}
            <strong className="text-charcoal">
              keep natural healing products affordable for all ages and genders
            </strong>
            . No synthetic shortcuts, no hidden chemicals — just pure, honest
            goodness from the earth to your skin.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-2xl mx-auto bg-cream-dark/50 rounded-2xl px-8 py-10"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 font-[family-name:var(--font-serif)] text-6xl text-cobalt/10">
            &ldquo;
          </div>
          <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl italic text-cobalt leading-relaxed mb-6">
            Kharisdon exists to celebrate the gift of grace through handmade
            care. Just as we have freely received the life-giving love of John
            3:16, we freely give to others — funding recovery programs that offer
            the restoration promised in 1 Peter 5:10.
          </p>
          <p className="font-[family-name:var(--font-serif)] text-xl md:text-2xl italic text-cobalt leading-relaxed">
            Every product is a handcrafted testament that grace is a gift
            (Ephesians 2:8) meant to be shared for the healing of our community.
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
