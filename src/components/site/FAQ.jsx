import React from "react";
import { FAQS } from "../../lib/data";
import { Reveal, SectionHead } from "../../lib/ui";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "../ui/accordion";

const FAQ = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHead
            overline="FAQ"
            title="Answers, upfront"
            sub="Everything you need to know before we start. Still curious? Just reach out."
            testid="faq-head"
          />
        </div>

        <Reveal>
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-white/8">
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="py-6 text-left font-display text-lg font-semibold text-white hover:text-[#f5b400] hover:no-underline [&[data-state=open]]:text-[#f5b400]"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-[#9ca3af]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};

export default FAQ;
