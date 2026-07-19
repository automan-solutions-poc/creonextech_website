import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const Process = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          overline="How We Work"
          title="A proven delivery process"
          sub="Seven disciplined stages that de-risk delivery and keep you in control from day one."
          testid="process-head"
        />

        <div ref={ref} className="relative mt-16 pl-4">
          {/* track */}
          <div className="absolute left-[22px] top-0 h-full w-px bg-white/10 md:left-1/2" />
          <motion.div style={{ height }} className="absolute left-[22px] top-0 w-px origin-top bg-[#f5b400] md:left-1/2" />

          <div className="space-y-10">
            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              const left = i % 2 === 0;
              return (
                <Reveal key={p.title} delay={0.04}>
                  <div className={`relative flex items-center gap-6 md:w-1/2 ${left ? "md:pr-12" : "md:ml-auto md:flex-row-reverse md:pl-12"}`}>
                    <div className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#f5b400]/40 bg-[#050505] text-[#f5b400] shadow-[0_0_20px_rgba(245,180,0,.25)]">
                      <Icon size={20} />
                    </div>
                    <div className={`rounded-2xl card-surface p-6 ${left ? "md:text-right" : ""}`} data-testid={`process-step-${i}`}>
                      <span className="font-serif-accent text-sm italic text-[#f5b400]">Step 0{i + 1}</span>
                      <h3 className="font-display mt-1 text-xl font-semibold tracking-tight text-white">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">{p.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
