import React from 'react';
import { motion } from 'framer-motion';

const YOUTUBE_URL = 'https://www.youtube.com/channel/UCtqYbp4mew8RiAIJgpmhyVw';
const LINKEDIN_URL = 'https://www.linkedin.com/in/srijith-nair-5036b812/';

export const MediaSection: React.FC = () => {
  return (
    <section
      id="media"
      className="relative w-full bg-[#080706] text-[#E8DFD8] py-24 md:py-32 px-6 sm:px-12 lg:px-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-[#C99E5D]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#8C6D4F] mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          01 / MEDIA & VOICE
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.9] tracking-tight mb-14"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448]">
            CREATOR &amp; COMMENTATOR
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A]">
            ON THE FUTURE OF WORK
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* YouTube card */}
          <motion.a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col border border-[#8C6D4F]/30 bg-gradient-to-br from-[#141110] to-[#0C0A09] hover:border-[#D4AF37]/60 transition-all duration-400 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent z-10" />

            {/* Photo */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0C0A08]">
              <img
                src="/images/youtube.jpg"
                alt="TheSNStudioLive YouTube channel"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-transparent" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#FF0000]/90 shadow-[0_0_25px_rgba(255,0,0,0.35)]">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8zM9.5 15.5v-7l6.3 3.5-6.3 3.5z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-[#8C6D4F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    YouTube
                  </p>
                  <p className="text-lg text-[#F3DBB3]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
                    TheSNStudioLive
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#A8988B] leading-relaxed max-w-md flex-grow" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Candid conversations and sharp commentary on AI in HR, leadership, careers, and the changing shape of work. New thinking, published regularly.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#EAD8C7] group-hover:text-[#FFF5EB]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Watch the channel
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </div>
          </motion.a>

          {/* LinkedIn card */}
          <motion.a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col border border-[#8C6D4F]/30 bg-gradient-to-br from-[#141110] to-[#0C0A09] hover:border-[#D4AF37]/60 transition-all duration-400 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent z-10" />

            {/* Photo */}
            <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0C0A08]">
              <img
                src="/images/linkedin.jpg"
                alt="Srijith Nair on LinkedIn"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-transparent to-transparent" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#0A66C2] shadow-[0_0_25px_rgba(10,102,194,0.35)]">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[10px] tracking-[0.28em] uppercase text-[#8C6D4F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    LinkedIn
                  </p>
                  <p className="text-lg text-[#F3DBB3]" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
                    Srijith Nair
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#A8988B] leading-relaxed max-w-md flex-grow" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Thought leadership on AI-powered HR, succession, and GCC talent strategy — including live demonstrations of the AI agents built in-house.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase text-[#EAD8C7] group-hover:text-[#FFF5EB]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Connect on LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
