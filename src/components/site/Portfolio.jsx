import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const Portfolio = () => {
  return (
    <>
      {/*
    ── Portfolio Section ──
    <section id="portfolio" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            overline="Portfolio"
            title="Selected work"
            sub="A glimpse of platforms we have designed, built and scaled for our partners."
            testid="portfolio-head"
          />
          <Reveal>
            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-ghost" data-testid="portfolio-cta">
              Start your project <ArrowUpRight size={16} />
            </button>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PORTFOLIO.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <motion.div
                whileHover="hover"
                data-cursor="hover"
                data-testid={`portfolio-card-${i}`}
                className="group relative overflow-hidden rounded-3xl border border-white/8"
              >
                <div className="relative h-[340px] overflow-hidden md:h-[420px]">
                  <motion.img
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <span className="overline">{p.category}</span>
                  <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-[#c9c9c9]">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-[#f5b400] text-[#050505] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
    */}
    </>
  );
};

export default Portfolio;
