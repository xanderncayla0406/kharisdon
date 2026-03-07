"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-charcoal py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Wordmark */}
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-light text-white mb-2">
            Kharisdon
          </h2>
          <p className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-white/40 mb-8">
            Where Earth &amp; Heart Meet
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-white/10" />
            <svg width="12" height="16" viewBox="0 0 16 20" className="text-gold/40">
              <rect x="6" y="0" width="4" height="20" rx="2" fill="currentColor" />
              <rect x="0" y="6" width="16" height="4" rx="2" fill="currentColor" />
            </svg>
            <div className="w-12 h-px bg-white/10" />
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-10">
            {[
              { href: "#mission", label: "Our Mission" },
              { href: "#products", label: "Products" },
              { href: "#process", label: "The Process" },
              { href: "#recovery", label: "Giving Back" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-sans)] text-sm tracking-wider text-white/50 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social placeholder */}
          <div className="flex items-center justify-center gap-6 mb-12">
            {["Instagram", "Facebook"].map((platform) => (
              <span
                key={platform}
                className="font-[family-name:var(--font-sans)] text-xs tracking-widest uppercase text-white/30 hover:text-gold/60 cursor-pointer transition-colors duration-300"
              >
                {platform}
              </span>
            ))}
          </div>

          {/* Scripture */}
          <blockquote className="max-w-lg mx-auto mb-10">
            <p className="font-[family-name:var(--font-serif)] text-lg italic text-white/30 leading-relaxed">
              &ldquo;And God said, &lsquo;Behold, I have given you every plant
              yielding seed that is on the face of all the earth.&rsquo;&rdquo;
            </p>
            <cite className="block mt-3 font-[family-name:var(--font-sans)] text-xs tracking-widest uppercase text-gold/30 not-italic">
              Genesis 1:29
            </cite>
          </blockquote>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8">
            <p className="font-[family-name:var(--font-sans)] text-xs text-white/20 tracking-wide">
              &copy; {new Date().getFullYear()} Kharisdon. All rights reserved.
              Handcrafted with love and faith.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
