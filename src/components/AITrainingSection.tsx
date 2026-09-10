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

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text (left on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            05 / AI TRAINING &amp; MENTORING
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-6" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              AI TRAINING
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              &amp; MENTORING
            </span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#A8988B] leading-[1.85] tracking-wide max-w-lg mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Trains and mentors HR and business leaders on practical AI adoption &mdash; from prompt engineering fundamentals to building and deploying working AI agents. Grounded in hands-on experience architecting 10+ agents in-house, not just theory.
          </p>
          <div className="flex flex-wrap gap-3">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2.5 text-[12px] tracking-[0.1em] uppercase text-[#C4B29E] border border-[#8C6D4F]/40 bg-[#120F0C]/60"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Photo (right on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-first lg:order-none"
        >
          <div className="absolute -inset-3 bg-gradient-to-bl from-[#C99E5D]/20 to-transparent blur-2xl pointer-events-none" />
          <div className="relative overflow-hidden border border-[#8C6D4F]/40 bg-[#0C0A08]">
            <img
              src="/images/ai-training.jpg"
              alt="Srijith Nair training and mentoring on AI"
              className="w-full h-full object-contain aspect-[3/2]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AITrainingSection;
