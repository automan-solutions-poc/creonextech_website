import React from "react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const Industries = () => {
  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          overline="Industries"
          title="Deep expertise across sectors"
          sub="We speak the language of your industry — shipping compliant, high-impact software wherever you operate."
          testid="industries-head"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.name} delay={(i % 5) * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  data-cursor="hover"
                  data-testid={`industry-card-${i}`}
                  className="group flex h-full flex-col items-center justify-center gap-4 rounded-2xl card-surface p-8 text-center transition-colors duration-300 hover:border-[#f5b400]/40"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-full border border-white/10 text-[#f5b400] transition-colors duration-300 group-hover:bg-[#f5b400] group-hover:text-[#050505]">
                    <Icon size={24} />
                  </div>
                  <span className="text-sm font-semibold text-white">{ind.name}</span>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
