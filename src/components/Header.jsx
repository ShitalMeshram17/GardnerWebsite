import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import logo from "../assets/logo.png.jpeg";

/* ================= MAGNETIC HOVER ================= */
function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <motion.span
      ref={ref}
      style={{
        x: useSpring(x, { stiffness: 160, damping: 24 }),
        y: useSpring(y, { stiffness: 160, damping: 24 }),
      }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * strength);
        y.set((e.clientY - r.top - r.height / 2) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.span>
  );
}

/* ================= HEADER ================= */
export default function Header() {
  const [open, setOpen] = useState(false);

  /* Auto Day / Night */
  const night = (() => {
    const h = new Date().getHours();
    return h >= 18 || h < 6;
  })();

  /* Cursor glow */
  const mx = useMotionValue(50);
  const my = useMotionValue(50);

  /* Hide on scroll */
  const y = useMotionValue(0);
  const ySmooth = useSpring(y, { stiffness: 500, damping: 45 });
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 120) {
        y.set(-100);
      } else {
        y.set(0);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [y]);

  return (
    <>
      {/* CURSOR GLASS GLOW */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-[10]"
        style={{
          background: `
            radial-gradient(
              520px circle at ${mx}% ${my}%,
              rgba(16,185,129,0.16),
              transparent 70%
            )
          `,
        }}
      />

      {/* HEADER */}
      <motion.header
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          mx.set(((e.clientX - r.left) / r.width) * 100);
          my.set(((e.clientY - r.top) / r.height) * 100);
        }}
        style={{
          y: ySmooth,
          background: night
            ? "rgba(6,78,59,0.45)"
            : "rgba(255,255,255,0.30)",
        }}
        className={`
          fixed top-0 w-full z-50
          backdrop-blur-[80px]
          backdrop-saturate-200
          border-b border-white/15
          shadow-[0_30px_120px_rgba(0,0,0,0.25)]
          ${night ? "text-white" : "text-green-900"}
        `}
      >
        {/* GRAIN */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url('https://grainy-gradients.vercel.app/noise.svg')",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-30" />
              <img
                src={logo}
                alt="Logo"
                className="relative w-14 h-14 rounded-full bg-white/85 p-1"
              />
            </div>
            <div>
              <h1 className="font-extrabold text-lg">
                Nursery Organic Farming
              </h1>
              <p className="text-xs opacity-80">Based in Gadchiroli</p>
            </div>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Magnetic>
              <Link
                to="/about"
                className="relative capitalize after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-green-500
                           after:transition-all hover:after:w-full"
              >
                About Me
              </Link>
            </Magnetic>

            {["services", "portfolio", "videos"].map((item) => (
              <Magnetic key={item}>
                <a
                  href={`/#${item}`}
                  className="relative capitalize after:absolute after:left-0 after:-bottom-1
                             after:h-[2px] after:w-0 after:bg-green-500
                             after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              </Magnetic>
            ))}

            <Magnetic>
              <a
                href="/#contact"
                className="rounded-full px-5 py-2.5 bg-gradient-to-r
                           from-green-600 to-emerald-600 text-white
                           shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
              >
                Contact
              </a>
            </Magnetic>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden rounded-full p-2 border border-white/25"
          >
            ☰
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-white/75 backdrop-blur-[60px]"
          >
            <div className="p-6 flex justify-between">
              <b>Menu</b>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <nav className="px-6 py-10 space-y-6 text-lg">
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="block relative capitalize after:absolute after:left-0 after:-bottom-1
                           after:h-[2px] after:w-0 after:bg-green-500
                           after:transition-all hover:after:w-full"
              >
                About Me
              </Link>

              {["services", "portfolio", "videos", "contact"].map((item) => (
                <a
                  key={item}
                  href={`/#${item}`}
                  onClick={() => setOpen(false)}
                  className="block relative capitalize after:absolute after:left-0 after:-bottom-1
                             after:h-[2px] after:w-0 after:bg-green-500
                             after:transition-all hover:after:w-full"
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
