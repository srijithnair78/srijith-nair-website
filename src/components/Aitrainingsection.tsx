import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  'Agentic AI for HR Teams',
  'Prompt Engineering',
  'AI Adoption Coaching',
  'Executive AI Literacy',
  'Hands-On Agent Building',
];

export const AITrainingSection: React.FC = () => {
  return (
    <section
      id="ai-training"
      className="relative w-full bg-black text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[36rem] h-[36rem] bg-[#9B7640]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          05 / AI TRAINING &amp; MENTORING
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
            AI TRAINING
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            &amp; MENTORING
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
          Trains and mentors HR and business leaders on practical AI adoption &mdash; from prompt engineering fundamentals to building and deploying working AI agents. Grounded in hands-on experience architecting 10+ agents in-house, not just theory.
        </motion.p>

        <div className="flex flex-wrap gap-3">
          {focusAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="px-4 py-2.5 text-[12px] tracking-[0.1em] uppercase text-[#C4B29E] border border-[#8C6D4F]/40 bg-[#120F0C]/60"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AITrainingSection;
