import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { JOBS, BENEFITS } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const CAREERS_IMG =
  "https://images.unsplash.com/photo-1539630417222-d685b659ffcc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYnVzaW5lc3MlMjB0ZWFtJTIwbWVldGluZyUyMGRhcmt8ZW58MHx8fHwxNzg0NDYwMTk3fDA&ixlib=rb-4.1.0&q=85";

const Careers = () => {
  return (
    <>
      {/*
    ── Careers Section ──
    <section id="careers" className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <SectionHead
              overline="Careers"
              title="Build the future with us"
              sub="We are a remote-first team of senior builders who care deeply about craft, ownership and impact."
              testid="careers-head"
            />
            <div className="mt-8 flex flex-wrap gap-3" data-testid="benefits-list">
              {BENEFITS.map((b) => (
                <span key={b} className="rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-sm text-[#c9c9c9]">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/8">
              <img src={CAREERS_IMG} alt="Life at CreonexTech" className="h-[300px] w-full object-cover md:h-[360px]" />
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Open positions</h3>
          <div className="mt-6 divide-y divide-white/8 border-y border-white/8">
            {JOBS.map((job, i) => (
              <Reveal key={job.role} delay={i * 0.05}>
                <motion.a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  data-cursor="hover"
                  data-testid={`job-${i}`}
                  className="group flex flex-col gap-2 py-6 transition-colors duration-300 hover:bg-white/[0.015] md:flex-row md:items-center md:justify-between md:px-4"
                >
                  <div>
                    <p className="font-display text-lg font-semibold text-white transition-colors group-hover:text-[#f5b400]">{job.role}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-[#9ca3af]">
                      <MapPin size={14} /> {job.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#c9c9c9]">{job.dept}</span>
                    <span className="text-sm text-[#9ca3af]">{job.type}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white transition-colors duration-300 group-hover:bg-[#f5b400] group-hover:text-[#050505]">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </motion.a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
    */}
    </>
  );
};

export default Careers;
