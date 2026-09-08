import React from 'react';
import { motion } from 'framer-motion';

const degrees = [
  { title: 'Doctorate — AI & HR Strategy', org: 'ESGCI Paris Business School', year: '2027 (in progress)' },
  { title: 'PG Diploma, AI for Leaders', org: 'Texas McCombs School of Business, USA', year: '2021' },
  { title: 'MSc, Applied Psychology', org: 'Bharathiar University', year: '2018' },
  { title: 'MBA, Human Resource Management', org: 'Sikkim Manipal University', year: '2015' },
  { title: 'PG Diploma, Human Resources', org: 'Symbiosis Institute of Management Studies', year: '2014' },
  { title: 'Bachelor of Commerce', org: 'Madras University', year: '1999' },
];

const certGroups = [
  {
    group: 'AI & Digital',
    items: [
      'Claude AI Skills Certification (x2) — Anthropic',
      'Agentic AI Professional — Skill Up EdTech',
      'AI Agents with RAG & LangChain — IBM',
      'Generative AI for HR — IBM',
      'PG Diploma, AI & Machine Learning — Texas McCombs',
    ],
  },
  {
    group: 'Psychometric, Assessment & Coaching',
    items: [
      'Hogan Assessment — Hogan Institute',
      'Talent Spotting — Korn Ferry',
      'MBTI Practitioner — Myers & Briggs',
      'Certified Predictive Index Practitioner',
      'TD & Succession Management — TISS',
      'Certified Performance Coach — Inside Out',
      'Brain-Based Coaching — NeuroLeadership Institute',
      'Certified Happiness Coach — Berkeley Institute of Wellbeing',
    ],
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-black text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Doctoral researcher callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative mb-20 p-8 md:p-10 border border-[#D4AF37]/30 bg-gradient-to-br from-[#161210] to-[#0B0908] overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            06 / DOCTORAL RESEARCH
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              DOCTORAL RESEARCHER IN AI &amp; WORKFORCE STRATEGY
            </span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#A8988B] leading-[1.85] tracking-wide max-w-3xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            At ESGCI Paris Business School (2027), building an evidence-based framework for AI integration in human capital management — bridging rigorous academic research with board-level HR practice.
          </p>
        </motion.div>

        {/* Education */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Education &amp; Academic Credentials
        </motion.p>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-5 mb-20">
          {degrees.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="flex items-start justify-between gap-4 pb-5 border-b border-[#8C6D4F]/20"
            >
              <div>
                <p className="text-[15px] text-[#EAD8C7]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{d.title}</p>
                <p className="text-[12px] text-[#A8988B] mt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{d.org}</p>
              </div>
              <span className="text-[11px] tracking-[0.14em] text-[#C99E5D] whitespace-nowrap pt-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{d.year}</span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-8"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Certifications &amp; Professional Credentials
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {certGroups.map((g) => (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 border border-[#8C6D4F]/25 bg-gradient-to-br from-[#100D0B] to-[#0A0807]"
            >
              <h3 className="text-lg text-[#F3DBB3] mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
                {g.group}
              </h3>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-[13px] text-[#A8988B] leading-relaxed" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 flex-shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
