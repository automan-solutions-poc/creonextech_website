import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Reusable scroll-reveal wrapper
export const Reveal = ({ children, delay = 0, y = 40, className = "", ...rest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

// Animated counter that runs when it enters the viewport
export const Counter = ({ value, suffix = "", duration = 1600 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

// Section heading block
export const SectionHead = ({ overline, title, sub, align = "left", testid }) => (
  <div
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    data-testid={testid}
  >
    {overline && (
      <Reveal>
        <span className="overline">
          <span className="h-px w-8 bg-[#f5b400]" /> {overline}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.05}>
      <h2 className="font-display mt-5 text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.1}>
        <p className="mt-5 text-base leading-relaxed text-[#9ca3af] md:text-lg">{sub}</p>
      </Reveal>
    )}
  </div>
);
