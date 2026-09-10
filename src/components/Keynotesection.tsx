import React from 'react';
import { motion } from 'framer-motion';

const themes = [
  'AI-Driven HR Transformation',
  'The Future of Work',
  'GCC Talent Strategy',
  'Leadership in the AI Era',
  'Succession & Board Readiness',
];

export const KeynoteSection: React.FC = () => {
  return (
    <section
      id="keynote"
      className="relative w-full bg-[#080706] text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-1/3 right-0 w-[36rem] h-[36rem] bg-[#C99E5D]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          04 / KEYNOTE SPEAKING
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
            KEYNOTE
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            SPEAKER
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-sm md:text-[15px] text-[#A8988B] leading-[1.85] tracking-wide max-w-2xl mb-10"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          A sought-after speaker and keynote presenter at international forums and leadership conferences, bringing board-level practice and 27+ years of Human Capital leadership to conversations on AI-driven HR transformation, the future of work, and GCC talent strategy.
        </motion.p>

        <div className="flex flex-wrap gap-3">
          {themes.map((theme, i) => (
            <motion.span
              key={theme}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="px-4 py-2.5 text-[12px] tracking-[0.1em] uppercase text-[#C4B29E] border border-[#8C6D4F]/40 bg-[#120F0C]/60"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {theme}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeynoteSection;
