import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section id="home" className="border-b border-white/10 py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={heroVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A79E94]">Engineering for ambitious product teams</p>
          <h1
            className="mt-6 max-w-3xl text-5xl leading-tight tracking-[-0.03em] text-[#F2EFE9] sm:text-6xl md:text-7xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Building things that live on the internet with clarity, craft, and long-term value.
          </h1>
          <div className="mt-8 max-w-2xl text-lg leading-8 text-[#D2CDC6]">
            <p>
              I design and ship user interfaces with React, reusable Tailwind systems, and animation that feels intentional. The goal is functional work that also feels precise.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm text-[#F2EFE9] transition hover:border-[#E8C547] hover:text-[#E8C547]"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-[#E8C547] bg-[#E8C547]/10 px-8 py-3 text-sm text-[#E8C547] transition hover:bg-[#E8C547]/20"
            >
              Contact
            </a>
          </div>
          {/* YOUR NAME */}
          <div className="mt-10 text-sm text-[#A79E94]">
            <span className="font-semibold text-[#F2EFE9]">Parth Pandit</span> — Senior React engineer focused on modern product experiences.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
