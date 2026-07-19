import React from "react";
import { STATS, VALUES } from "../../lib/data";
import { Reveal, Counter, SectionHead } from "../../lib/ui";

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        {/* Stats band */}
        {/* <div className="grid grid-cols-2 gap-6 rounded-3xl card-surface p-8 md:grid-cols-4 md:p-12" data-testid="stats-band">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="text-center md:text-left">
              <div className="font-serif-accent text-5xl font-bold text-white md:text-6xl">
                <span className="gold-text">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
              </div>
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-[#9ca3af]">{s.label}</p>
            </Reveal>
          ))}
        </div> */}

        <div className="mt-24">
          <SectionHead
            overline="Why Choose Us"
            title="A partner obsessed with your outcomes"
            sub="We combine senior craft, transparent process and a relentless bar for quality — the reasons enterprises keep coming back."
            testid="why-head"
          />

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl card-surface p-7 transition-colors duration-300 hover:border-[#f5b400]/40" data-testid={`value-card-${i}`}>
                  <span className="font-serif-accent text-3xl italic text-[#f5b400]/60">0{i + 1}</span>
                  <h3 className="font-display mt-4 text-xl font-semibold tracking-tight text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9ca3af]">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
