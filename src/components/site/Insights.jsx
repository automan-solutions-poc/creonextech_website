import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { INSIGHTS, AWARDS } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";

const Insights = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        {/* Awards band */}
        {/* <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-3xl card-surface px-8 py-6" data-testid="awards-band"> */}
          {/* {AWARDS.map((a) => (
            <div key={a} className="flex items-center gap-2 text-sm font-medium text-[#c9c9c9]">
              <Award size={16} className="text-[#f5b400]" /> {a}
            </div>
          ))}
        </div> */}

        <div className="mt-24">
          <SectionHead
            overline="Latest Insights"
            title="From our engineering desk"
            sub="Ideas, playbooks and case studies from the teams building at the frontier."
            testid="insights-head"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {INSIGHTS.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  data-cursor="hover"
                  data-testid={`insight-card-${i}`}
                  className="group flex h-full flex-col rounded-2xl card-surface p-7 transition-colors duration-300 hover:border-[#f5b400]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="overline">{post.tag}</span>
                    <span className="text-xs text-[#6b7280]">{post.date}</span>
                  </div>
                  <h3 className="font-display mt-5 flex-1 text-xl font-semibold leading-snug tracking-tight text-white">
                    {post.title}
                  </h3>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#f5b400]">
                    Read article <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;
