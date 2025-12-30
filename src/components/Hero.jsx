import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);

  /* =========================
     SCROLL-BASED EFFECTS
     ========================= */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // dark overlay intensity
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.65]);

  // background parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  // cursor glow effect
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <section
     ref={heroRef}
  onMouseMove={(e) => {
    const rect = heroRef.current.getBoundingClientRect();
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }}
  className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* 🌿 CINEMATIC IMAGE BACKGROUND */}
      <motion.img
        src="https://images.unsplash.com/photo-1759496607068-f2892afdaf23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Organic nursery garden background"
        className="absolute inset-0 w-full h-full object-cover z-[-3]"
        style={{ y: bgY, scale: 1.08 }}
        loading="eager"
      />

      {/* 🌑 DARK OVERLAY FOR READABILITY */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-[-2] bg-black"
      />

      {/* 🌱 BRAND GREEN DEPTH */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-emerald-950/60 via-green-900/40 to-black/70" />

      {/* 🌫️ SUBTLE FILM GRAIN */}
      <div
        className="absolute inset-0 z-0 opacity-[0.60] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1759496607068-f2892afdaf23?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      />

      

      {/* ================= CONTENT ================= */}
       {/* 🟢 CURSOR GLOW EFFECT */}
<div
  className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
  style={{
    background: `radial-gradient(
      420px at ${cursor.x}px ${cursor.y}px,
      rgba(34,197,94,0.35),
      transparent 60%
    )`,
    transition: "background 0.05s ease-out",
  }}
/>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            backdrop-blur-xl
            bg-black/40
            border border-white/15
            rounded-[2.5rem]
            p-12 md:p-16
            shadow-[0_60px_160px_rgba(0,0,0,0.7)]
          "
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-6 py-2 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-400/30">
            🌿 Nursery Organic Farming
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-8">
            Growing nature,
            <span className="block bg-gradient-to-r from-emerald-300 to-green-500 bg-clip-text text-transparent">
              naturally & sustainably
            </span>
          </h1>

          {/* Text */}
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mb-14">
            Premium organic plants, landscaping, and garden solutions crafted
            for a healthier, greener future.
          </p>

          {/* CTA Buttons */}
              <div className="flex flex-wrap gap-8">
                  <button className="px-10 py-5 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold shadow-xl hover:scale-105 transition"
                  onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                     }
                    >
                   Get a Quote
                </button>

              <button className="px-10 py-5 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
                onClick={() =>
                 document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                   }
                >
              View Portfolio
              </button>
              </div>
        </motion.div>
      </div>
    </section>
  );
}
