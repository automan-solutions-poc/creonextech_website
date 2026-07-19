import React from "react";
import { MANIFESTO, TIMELINE } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const ABOUT_IMG =
  "https://images.pexels.com/photos/8369249/pexels-photo-8369249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHead
          overline="About CreonexTech"
          title="We build like it's our own company on the line"
          sub="Since 2016 we have partnered with startups and enterprises to turn bold ideas into resilient, intelligent products."
          testid="about-head"
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Sticky image + timeline */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-white/8">
                <img src={ABOUT_IMG} alt="CreonexTech team at work" className="h-[360px] w-full object-cover md:h-[440px]" />
              </div>
            </Reveal>
            <div className="mt-8 space-y-4" data-testid="about-timeline">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.06}>
                  <div className="flex gap-5 border-b border-white/8 pb-4">
                    <span className="font-serif-accent text-2xl font-bold text-[#f5b400]">{t.year}</span>
                    <p className="text-sm leading-relaxed text-[#9ca3af]">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Numbered manifesto chapters */}
          <div className="space-y-10">
            {MANIFESTO.map((m, i) => (
              <Reveal key={m.no} delay={i * 0.08}>
                <div className="border-l-2 border-white/8 pl-8" data-testid={`manifesto-${i}`}>
                  <span className="font-serif-accent text-6xl italic text-white/12 md:text-7xl">{m.no}</span>
                  <h3 className="font-display -mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">{m.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-[#9ca3af] md:text-lg">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
