import React from "react";
import Marquee from "react-fast-marquee";
import { TECHNOLOGIES } from "../../lib/data";
import { SectionHead } from "../../lib/ui";

const Row = ({ items, direction = "left", speed = 28 }) => (
  <Marquee direction={direction} speed={speed} gradient gradientColor="#050505" gradientWidth={120} pauseOnHover>
    {items.map((t, i) => (
      <div
        key={`${t}-${i}`}
        data-cursor="hover"
        className="group mx-3 flex items-center gap-3 rounded-full border border-white/8 bg-white/[0.02] px-7 py-3.5 transition-colors duration-300 hover:border-[#f5b400]/50"
      >
        <span className="h-2 w-2 rounded-full bg-white/25 transition-colors duration-300 group-hover:bg-[#f5b400]" />
        <span className="font-display text-lg font-semibold text-white/60 transition-colors duration-300 group-hover:text-white">
          {t}
        </span>
      </div>
    ))}
  </Marquee>
);

const Technologies = () => {
  const half = Math.ceil(TECHNOLOGIES.length / 2);
  return (
    <section id="technologies" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          overline="Technologies"
          title="A modern, battle-tested stack"
          sub="We pick the right tool for the job — from frontier AI models to rock-solid cloud infrastructure."
          testid="tech-head"
        />
      </div>

      <div className="mt-14 flex flex-col gap-5" data-testid="tech-marquee">
        <Row items={TECHNOLOGIES.slice(0, half)} direction="left" speed={26} />
        <Row items={TECHNOLOGIES.slice(half)} direction="right" speed={26} />
      </div>
    </section>
  );
};

export default Technologies;
