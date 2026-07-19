import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1782015960141-6b94d1c118ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwzfHxmdXR1cmlzdGljJTIwYWJzdHJhY3QlMjB0ZWNoJTIwZGFyayUyMGdvbGR8ZW58MHx8fHwxNzg0NDYwMTk3fDA&ixlib=rb-4.1.0&q=85";

const LINES = ["Building Intelligent", "Digital Solutions", "That Scale."];

const lineWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 1.75 } },
};
const lineItem = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" ref={ref} className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20 scale-110">
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[#050505]/72" />
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* Floating glow blobs */}
      <div className="animate-floaty absolute right-[8%] top-[22%] -z-10 h-72 w-72 rounded-full bg-[#f5b400]/20 blur-[120px]" />
      <div className="animate-floaty absolute left-[10%] bottom-[18%] -z-10 h-64 w-64 rounded-full bg-[#f5b400]/10 blur-[120px]" style={{ animationDelay: "2s" }} />

      <motion.div style={{ y: contentY, opacity: fade }} className="container-x flex min-h-[100svh] flex-col justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="glass mb-8 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-[#e6e6e6]"
        >
          <Sparkles size={14} className="text-[#f5b400]" />
          AI · Automation · Cloud · Modern Software
        </motion.div>

        <motion.h1
          variants={lineWrap}
          initial="hidden"
          animate="show"
          className="font-display max-w-5xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.4rem]"
        >
          {LINES.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={lineItem} className="block">
                {i === 1 ? <span className="gold-text">{line}</span> : line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-[#b9b9b9] md:text-lg"
        >
          CreonexTech delivers cutting-edge software, AI solutions, cloud infrastructure and
          digital transformation for ambitious enterprises worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button onClick={() => scrollTo("#contact")} className="btn-gold" data-testid="hero-get-started-btn">
            Get Started <ArrowRight size={18} />
          </button>
          <button onClick={() => scrollTo("#contact")} className="btn-ghost" data-testid="hero-consult-btn">
            <Play size={16} className="text-[#f5b400]" /> Book Consultation
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40"
      >
        <div className="mx-auto mb-2 h-9 w-px bg-gradient-to-b from-[#f5b400] to-transparent" />
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
