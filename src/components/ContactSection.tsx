// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// ============================================================
// SETUP: replace the ID below with your own Formspree form ID.
// 1. Go to https://formspree.io and sign up (free) with srijithnairdba@gmail.com
// 2. Create a new form. It gives you an endpoint like https://formspree.io/f/abcdwxyz
// 3. Paste ONLY the part after /f/ here (e.g. 'abcdwxyz').
// Until you do this, the form will not deliver mail.
const FORMSPREE_ID = 'xgaepnaw';
// ============================================================

const PHONE_KSA = '+966 533 953 928';
const PHONE_UAE = '+971 505 407 108';
const LOCATION = 'Saudi Arabia';
const LINKEDIN_URL = 'https://www.linkedin.com/in/srijith-nair-5036b812/';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/' + FORMSPREE_ID, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'New enquiry from your website',
        }),
      });
      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-24 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left column: heading + contact details */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-4 mb-5"
            >
              <span
                className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                07 / CONTACT
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                LET&apos;S
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                GET IN TOUCH
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-sm font-light text-[#A8988B] leading-relaxed max-w-md mb-10"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Exploring a board advisory role, a keynote, a leadership programme, or an AI-in-HR collaboration? Send a message and let&apos;s start the conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <a href={'tel:' + PHONE_KSA.replace(/\s/g, '')} className="group flex items-center gap-3 text-sm text-[#C4B29E] hover:text-[#F7E7C4] transition-colors">
                <span className="text-[#D4AF37]">&#9742;</span>
                {PHONE_KSA} <span className="text-[#8C6D4F] text-xs">(KSA)</span>
              </a>
              <a href={'tel:' + PHONE_UAE.replace(/\s/g, '')} className="group flex items-center gap-3 text-sm text-[#C4B29E] hover:text-[#F7E7C4] transition-colors">
                <span className="text-[#D4AF37]">&#9742;</span>
                {PHONE_UAE} <span className="text-[#8C6D4F] text-xs">(UAE)</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-[#C4B29E]">
                <span className="text-[#D4AF37]">&#9678;</span>
                {LOCATION}
              </div>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-[#C4B29E] hover:text-[#F7E7C4] transition-colors">
                <span className="text-[#D4AF37] font-semibold">in</span>
                Connect on LinkedIn
                <span className="transition-transform duration-300 group-hover:translate-x-1">&#8599;</span>
              </a>
            </motion.div>
          </div>

          {/* Right column: message form */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />

            {status === 'sent' ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg">
                  &#10003;
                </div>
                <h3 className="text-3xl text-white" style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>
                  MESSAGE SENT
                </h3>
                <p className="text-sm text-[#A8988B]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you for reaching out. You will hear back soon.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-2xl text-[#F3DBB3] mb-6"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
                >
                  Send a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] tracking-[0.16em] uppercase text-[#8C6D4F] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-sm text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] tracking-[0.16em] uppercase text-[#8C6D4F] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-sm text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.16em] uppercase text-[#8C6D4F] mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can I help?"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-sm text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send message \u2197'}
                  </button>

                  {status === 'error' && (
                    <p className="text-[12px] text-[#E0A0A0] text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      Something went wrong. Please try again, or reach out on LinkedIn.
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>

        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] tracking-widest text-[#8C6D4F] uppercase" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Srijith Nair
          </span>
          <span className="text-[10px] text-[#8C6D4F]" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            &copy; {new Date().getFullYear()} Srijith Nair. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
