import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  'Executive workshop design & delivery',
  'Cohort-based leadership programmes',
  'Board & C-suite facilitation',
  'Experiential and simulation-led learning',
];

export const FacilitatorSection: React.FC = () => {
  return (
    <section
      id="facilitator"
      className="relative w-full bg-black text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-1 lg:order-none"
        >
          <div className="absolute -inset-3 bg-gradient-to-br from-[#C99E5D]/20 to-transparent blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden border border-[#8C6D4F]/40">
            <img
              src="/images/facilitator.jpg"
              alt="Srijith Nair facilitating an executive session"
              className="w-full h-full object-cover aspect-[4/5]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            02 / FACILITATION
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              EXECUTIVE FACILITATOR
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              &amp; LEADERSHIP COACH
            </span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#A8988B] leading-[1.85] tracking-wide max-w-lg mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            An internationally certified facilitator and trainer who designs and leads high-stakes learning for senior leaders, boards, and high-potential cohorts. Blending psychometric depth, coaching craft, and real business context to move rooms from insight to commitment.
          </p>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-sm text-[#C4B29E]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitatorSection;
