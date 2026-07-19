import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../../lib/data";
import { SectionHead } from "../../lib/ui";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next, index]);

  const item = TESTIMONIALS[index];

  return (
    <>
      {/*
    ── Testimonials Section ──
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHead overline="Testimonials" title="What our clients say" align="center" testid="testimonials-head" />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote className="mx-auto mb-6 text-[#f5b400]" size={44} />
          <div className="min-h-[220px] text-center" data-testid="testimonial-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-serif-accent text-2xl font-medium italic leading-relaxed text-white md:text-3xl">
                  “{item.quote}”
                </p>
                <div className="mt-8">
                  <p className="font-display text-lg font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-[#9ca3af]">{item.company}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button onClick={prev} data-testid="testimonial-prev" className="glass grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:text-[#f5b400]">
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-7 bg-[#f5b400]" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
            <button onClick={next} data-testid="testimonial-next" className="glass grid h-11 w-11 place-items-center rounded-full text-white transition-colors hover:text-[#f5b400]">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
    */}
    </>
  );
};

export default Testimonials;
