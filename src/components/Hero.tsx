"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Pre-computed particle values to avoid hydration mismatch from Math.random()
const particleData = [
  { w: 3.2, l: 5, dur: 12, delay: 1 },
  { w: 4.8, l: 15, dur: 10, delay: 3 },
  { w: 2.5, l: 25, dur: 14, delay: 0.5 },
  { w: 5.1, l: 35, dur: 9, delay: 5 },
  { w: 3.8, l: 42, dur: 11, delay: 2 },
  { w: 2.2, l: 50, dur: 15, delay: 7 },
  { w: 4.5, l: 58, dur: 8.5, delay: 4 },
  { w: 3.0, l: 65, dur: 13, delay: 6 },
  { w: 5.5, l: 72, dur: 10.5, delay: 1.5 },
  { w: 2.8, l: 78, dur: 14.5, delay: 3.5 },
  { w: 4.2, l: 85, dur: 9.5, delay: 0 },
  { w: 3.5, l: 92, dur: 12.5, delay: 5.5 },
  { w: 2.0, l: 10, dur: 11.5, delay: 7.5 },
  { w: 4.0, l: 20, dur: 8, delay: 2.5 },
  { w: 3.3, l: 30, dur: 16, delay: 4.5 },
  { w: 5.0, l: 48, dur: 10, delay: 6.5 },
  { w: 2.6, l: 55, dur: 13.5, delay: 1.2 },
  { w: 4.7, l: 68, dur: 9, delay: 3.8 },
  { w: 3.1, l: 82, dur: 15.5, delay: 0.8 },
  { w: 2.4, l: 95, dur: 11, delay: 5.2 },
];

function Particles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particleData.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            width: p.w + "px",
            height: p.w + "px",
            left: p.l + "%",
            bottom: "-10px",
            animation: `particleFloat ${p.dur}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function CrossWatermark() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <svg
        width="400"
        height="500"
        viewBox="0 0 400 500"
        className="opacity-[0.04] text-white"
      >
        <rect x="170" y="40" width="60" height="420" rx="8" fill="currentColor" />
        <rect x="80" y="140" width="240" height="60" rx="8" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0047AB 0%, #003580 25%, #1a3a5c 50%, #2a4a3a 75%, #0047AB 100%)",
          backgroundSize: "400% 400%",
          animation: "gradientShift 15s ease infinite",
        }}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      <CrossWatermark />
      <Particles />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold/60" />
            <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.3em] uppercase text-gold/80">
              Hand-Crafted with Purpose
            </span>
            <div className="w-12 h-px bg-gold/60" />
          </div>

          <h1 className="font-[family-name:var(--font-serif)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            Where Earth
            <span className="italic font-light text-gold-light"> &amp; Heart </span>
            Meet
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="font-[family-name:var(--font-sans)] text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Natural, handcrafted skincare rooted in faith and made with
          locally sourced ingredients. Pure goodness for every soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="px-8 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-[family-name:var(--font-sans)] text-sm tracking-widest uppercase rounded-full hover:bg-white/20 transition-all duration-300"
          >
            Explore Our Products
          </a>
          <a
            href="#mission"
            className="px-8 py-3.5 text-white/70 font-[family-name:var(--font-sans)] text-sm tracking-widest uppercase hover:text-white transition-all duration-300"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[family-name:var(--font-sans)] text-xs tracking-widest uppercase text-white/50">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full bg-gold"
            style={{
              height: "50%",
              animation: "scrollDown 2s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
