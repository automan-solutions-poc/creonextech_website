import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp, CalendarClock } from "lucide-react";

// Thin gold scroll-progress bar fixed to the top
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-[#f5b400]"
      data-testid="scroll-progress"
    />
  );
};

// Difference-blend custom cursor (dot + ring), hidden on touch devices
export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = e.target;
      setHover(!!(el.closest && el.closest("a,button,[data-cursor='hover'],input,textarea")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        className="cursor-dot pointer-events-none fixed z-[9999] h-2 w-2 rounded-full bg-[#f5b400]"
        style={{ mixBlendMode: "difference" }}
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 0 : 1 }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      <motion.div
        className="cursor-ring pointer-events-none fixed z-[9998] rounded-full border border-[#f5b400]"
        style={{ mixBlendMode: "difference" }}
        animate={{
          x: pos.x - (hover ? 26 : 16),
          y: pos.y - (hover ? 26 : 16),
          width: hover ? 52 : 32,
          height: hover ? 52 : 32,
          opacity: hover ? 1 : 0.5,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 30, mass: 0.4 }}
      />
    </>
  );
};

// Floating "Book Meeting" pill (bottom-left) + Back-to-top (bottom-right)
export const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.button
        onClick={scrollToContact}
        data-testid="floating-book-btn"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="animate-pulse-ring fixed bottom-6 left-6 z-50 hidden items-center gap-2 rounded-full bg-[#f5b400] px-5 py-3 text-sm font-semibold text-[#050505] shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:flex"
      >
        <CalendarClock size={18} /> Book a Meeting
      </motion.button>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            data-testid="back-to-top-btn"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="glass fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full text-white transition-colors duration-300 hover:text-[#f5b400]"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

// One-time on-load brand preloader
export const Preloader = () => {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9990] grid place-items-center bg-[#050505]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          data-testid="preloader"
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl font-black tracking-tight md:text-5xl"
            >
              CREONEX<span className="gold-text">TECH</span>
            </motion.div>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="mt-5 h-[2px] w-40 origin-left bg-[#f5b400]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
