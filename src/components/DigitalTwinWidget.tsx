// src/components/DigitalTwinWidget.tsx
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ============================================================
// Fully scripted Q&A. No free-text input, no API calls, no cost.
// To add / edit topics: just edit the TOPICS array below.
// Each topic can list relatedIds to suggest natural follow-ups.
// ============================================================

interface Topic {
  id: string;
  label: string; // shown as the clickable chip / "question"
  answer: string; // the twin's scripted reply
  relatedIds?: string[]; // follow-up chips shown after this answer
}

const TOPICS: Topic[] = [
  {
    id: 'who',
    label: 'Who is Srijith?',
    answer:
      "Srijith Nair is a Senior HR Leader and AI-driven Human Capital Strategist with 27+ years of experience across the GCC and India. He's currently Director, Human Capital & AI Strategy at SAL (Saudi Arabian Airlines Group), and a doctoral researcher studying AI's role in HR strategy.",
    relatedIds: ['career', 'ai-agents', 'contact'],
  },
  {
    id: 'career',
    label: 'What has his career looked like?',
    answer:
      "His path runs through SAL, Dubai Islamic Bank, Landmark Group, and Aditya Birla Sun Life \u2014 spanning succession planning, talent management, leadership development, and compensation across aviation, banking, and retail. Full details are in the Experience section below.",
    relatedIds: ['who', 'succession'],
  },
  {
    id: 'ai-agents',
    label: 'What AI agents has he built?',
    answer:
      "He's personally architected 10+ custom AI agents, built in-house at zero external cost \u2014 including a Total Rewards Consultant, a Board Simulator, a full virtual HR team, a Skill-Gap Analysis agent, and an Employee Sentiment agent. You can see live walkthroughs of each in the AI Builder section.",
    relatedIds: ['succession', 'who'],
  },
  {
    id: 'succession',
    label: 'What does he do in succession planning?',
    answer:
      "He designs enterprise-wide succession frameworks using 9-box grids, readiness analytics, and predictive bench-strength modelling \u2014 work that's delivered 100% Board, CEO, and N-1 succession compliance for organisations he's worked with.",
    relatedIds: ['ai-agents', 'facilitation'],
  },
  {
    id: 'book',
    label: 'Tell me about his book',
    answer:
      '"Orchestrate Your Worth" is his guide to salary negotiation and career worth, built on the WORTH Framework and the Negotiation Stack methodology. It\u2019s available on Amazon (paperback & Kindle), Notion Press, and Flipkart \u2014 links are in the Author section.',
    relatedIds: ['facilitation', 'contact'],
  },
  {
    id: 'facilitation',
    label: 'Does he facilitate or teach?',
    answer:
      "Yes \u2014 he's a certified executive facilitator and leadership coach who designs high-stakes learning for senior leaders and boards. He's also adjunct and visiting faculty for postgraduate students at universities across Europe and the Middle East, including UCLA and ESGCI Paris.",
    relatedIds: ['book', 'doctoral'],
  },
  {
    id: 'doctoral',
    label: 'What is his doctoral research about?',
    answer:
      "He's a doctoral researcher at ESGCI Paris Business School, building an evidence-based framework for AI integration in human capital management \u2014 bridging academic research with board-level HR practice.",
    relatedIds: ['ai-agents', 'facilitation'],
  },
  {
    id: 'contact',
    label: 'How do I get in touch?',
    answer:
      "The best way is the contact form at the bottom of this site \u2014 it goes straight to Srijith. You can also connect with him on LinkedIn, linked throughout the site.",
    relatedIds: ['who'],
  },
];

const TOPIC_MAP = Object.fromEntries(TOPICS.map((t) => [t.id, t]));

interface Message {
  id: string;
  role: 'twin' | 'user';
  text: string;
  suggestions?: string[]; // topic ids to show as chips after this message
}

const GREETING: Message = {
  id: 'greeting',
  role: 'twin',
  text:
    "Hello, I am Srijith's Digital Twin. What would you like to know more about me?",
  suggestions: TOPICS.map((t) => t.id),
};

export const DigitalTwinWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleTopicClick = (id: string) => {
    const topic = TOPIC_MAP[id];
    if (!topic) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: 'user', text: topic.label };
    const twinMsg: Message = {
      id: `t-${Date.now()}`,
      role: 'twin',
      text: topic.answer,
      suggestions: topic.relatedIds,
    };

    setMessages((prev) => [...prev, userMsg, twinMsg]);
  };

  const handleReset = () => {
    setMessages([GREETING]);
  };

  return (
    <>
      {/* Floating toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 pl-4 pr-5 py-3.5 rounded-full border border-[#D4AF37]/50 bg-gradient-to-br from-[#1A1512] to-[#0C0A08] shadow-[0_8px_30px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.15)] hover:border-[#D4AF37] transition-colors duration-300"
        aria-label="Chat with Srijith's Digital Twin"
      >
        <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] text-[11px] font-semibold text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          SN
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#4ADE80] border-2 border-[#0C0A08]" />
        </span>
        <span className="text-[11px] tracking-[0.14em] uppercase text-[#EAD8C7] hidden sm:inline" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {isOpen ? 'Close' : "Ask Srijith's Twin"}
        </span>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-[60] w-[92vw] max-w-sm h-[65vh] max-h-[560px] flex flex-col rounded-lg border border-[#8C6D4F]/40 bg-[#0A0806] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#8C6D4F]/25 bg-gradient-to-r from-[#14100D] to-[#0C0A08]">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] text-[10px] font-semibold text-black" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  SN
                </span>
                <div>
                  <p className="text-[13px] text-[#F3DBB3] leading-tight" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600 }}>
                    Srijith&apos;s Digital Twin
                  </p>
                  <p className="text-[10px] text-[#8C6D4F] leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#8C6D4F] hover:text-[#EAD8C7] text-lg leading-none px-1 transition-colors"
                aria-label="Close chat"
              >
                &times;
              </button>
            </div>

            {/* Message list */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                  <div className="flex flex-col gap-2 max-w-[85%]">
                    <div
                      className={
                        m.role === 'user'
                          ? 'px-3.5 py-2.5 rounded-lg rounded-br-sm bg-[#C99E5D]/15 border border-[#C99E5D]/30 text-[13px] text-[#F3DBB3]'
                          : 'px-3.5 py-2.5 rounded-lg rounded-bl-sm bg-[#141110] border border-[#8C6D4F]/25 text-[13px] text-[#C4B29E] leading-relaxed'
                      }
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {m.text}
                    </div>

                    {m.role === 'twin' && m.suggestions && m.suggestions.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-0.5">
                        {m.suggestions.map((sid) => {
                          const t = TOPIC_MAP[sid];
                          if (!t) return null;
                          return (
                            <button
                              key={sid}
                              onClick={() => handleTopicClick(sid)}
                              className="px-3 py-1.5 text-[11px] rounded-full border border-[#8C6D4F]/40 text-[#C4B29E] hover:border-[#D4AF37] hover:text-[#F3DBB3] transition-colors"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {t.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer: reset + disclaimer */}
            <div className="px-4 py-3 border-t border-[#8C6D4F]/25 bg-[#0C0A08]">
              <button
                onClick={handleReset}
                className="text-[10px] tracking-[0.14em] uppercase text-[#8C6D4F] hover:text-[#C4B29E] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                &#8634; Start over
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DigitalTwinWidget;
