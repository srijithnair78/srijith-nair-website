import React from 'react';
import { motion } from 'framer-motion';

const buyLinks = [
  { store: 'Amazon Paperback', url: 'https://amzn.in/d/0ajSbPQP' },
  { store: 'Amazon Kindle', url: 'https://amzn.in/d/01aUN2Gu' },
  { store: 'Notion Press', url: 'https://lnkd.in/dzRmxxs4' },
  { store: 'Flipkart', url: 'https://lnkd.in/d5Ge8YVg' },
];

export const AuthorSection: React.FC = () => {
  return (
    <section
      id="author"
      className="relative w-full bg-[#080706] text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-[36rem] h-[36rem] bg-[#9B7640]/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Book cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-start"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-[#D4AF37]/25 to-transparent blur-3xl pointer-events-none" />
            <img
              src="/images/book-cover.jpg"
              alt="Orchestrate Your Worth by Srijith Nair"
              className="relative w-64 sm:w-72 md:w-80 object-contain shadow-[0_25px_60px_rgba(0,0,0,0.7)] border border-[#8C6D4F]/30"
            />
          </div>
        </motion.div>

        {/* Text + buy buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            07 / AUTHOR
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
              ORCHESTRATE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
              YOUR WORTH
            </span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#A8988B] leading-[1.85] tracking-wide max-w-lg mb-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            A practical guide to salary negotiation and career worth — built on the WORTH Framework and the Negotiation Stack methodology. Written to help professionals value, articulate, and command what they are truly worth.
          </p>

          <p className="text-[10px] tracking-[0.28em] uppercase text-[#8C6D4F] mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Available at
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {buyLinks.map((link) => (
              <a
                key={link.store}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-5 py-3.5 border border-[#8C6D4F]/40 bg-[#120F0C]/70 hover:border-[#D4AF37] transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span className="text-[12px] tracking-[0.16em] uppercase text-[#EAD8C7] group-hover:text-[#FFF5EB]">
                  {link.store}
                </span>
                <span className="text-xs text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
