import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, CLIENT_LOGOS } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const Services = () => {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Client logos strip */}
      <div className="container-x mb-20">
        {/* <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
            Trusted by forward-thinking teams worldwide
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {CLIENT_LOGOS.map((c) => (
              <span key={c} className="font-display text-lg font-bold tracking-widest text-white/25 transition-colors duration-300 hover:text-white/60">
                {c}
              </span>
            ))}
          </div>
        </Reveal> */}
      </div>

      <div className="container-x">
        <SectionHead
          overline="What We Do"
          title="Services engineered for scale"
          sub="A full-spectrum digital partner — from first prototype to enterprise-grade platforms trusted by millions."
          testid="services-head"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  data-testid={`service-card-${i}`}
                  data-cursor="hover"
                  className="group relative h-full overflow-hidden rounded-2xl card-surface p-7 transition-colors duration-300 hover:border-[#f5b400]/40"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#f5b400]/0 blur-3xl transition-all duration-500 group-hover:bg-[#f5b400]/15" />
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl border border-white/10 bg-white/5 text-[#f5b400] transition-colors duration-300 group-hover:bg-[#f5b400] group-hover:text-[#050505]">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#9ca3af]">{s.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f5b400] opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn More <ArrowUpRight size={16} />
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
