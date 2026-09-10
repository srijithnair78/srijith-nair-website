import React from 'react';
import { motion } from 'framer-motion';

interface Agent {
  name: string;
  description: string;
  url: string;
}

const agents: Agent[] = [
  {
    name: 'Total Rewards Consultant',
    description: 'An AI agent that advises on compensation structure, benchmarking, and total rewards strategy on demand.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7418238911522508800',
  },
  {
    name: 'Full HR Team on Claude',
    description: 'An orchestrated suite of specialist HR agents working together as a virtual, always-on people function.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7482457094642667520',
  },
  {
    name: 'Board Simulator',
    description: 'A simulation agent that rehearses board and NRC scenarios, pressure-testing decisions before the real room.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7483866006025842688',
  },
  {
    name: 'Skill-Gap Analysis Agent',
    description: 'Maps skills against critical-role requirements and surfaces targeted development priorities across the workforce.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7367420835831132160',
  },
  {
    name: 'Employee Sentiment Agent',
    description: 'Captures real-time engagement sentiment across the organisation and surfaces actionable people insights.',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7362807106703360001',
  },
];

export const AIBuilderSection: React.FC = () => {
  return (
    <section
      id="ai-builder"
      className="relative w-full bg-black text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-[#C99E5D]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          06 / AI BUILDER
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-4"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
            AI BUILDER &amp;
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            AGENT ARCHITECT
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-sm md:text-[15px] text-[#A8988B] leading-[1.85] tracking-wide max-w-2xl mb-12"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          10+ custom AI agents, built in-house at zero external cost, that automate, predict, and personalise the people function at scale. A selection below — each with a live walkthrough.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <motion.a
              key={agent.name}
              href={agent.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col p-6 border border-[#8C6D4F]/30 bg-gradient-to-br from-[#141110] to-[#0C0A09] hover:border-[#D4AF37]/60 transition-all duration-400 overflow-hidden min-h-[220px]"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent" />
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-11 h-11 rounded-lg border border-[#D4AF37]/40 bg-[#1a1512] text-[#D4AF37] text-lg">
                  ✦
                </span>
                <span className="text-[10px] tracking-[0.24em] uppercase text-[#8C6D4F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-xl text-[#F3DBB3] mb-3 leading-tight" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em' }}>
                {agent.name}
              </h3>
              <p className="text-[13px] text-[#A8988B] leading-relaxed flex-grow" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {agent.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#EAD8C7] group-hover:text-[#FFF5EB]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                See it in action
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIBuilderSection;
