import { motion } from 'framer-motion';

const aboutVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="border-b border-white/10 py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={aboutVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A79E94]">About</p>
          <h2
            className="mt-5 text-4xl font-semibold tracking-tight text-[#F2EFE9] sm:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            A pragmatic front-end engineer with a product mindset.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#D2CDC6]">
            I partner with teams to turn product strategy into a polished web experience. My work focuses on maintainable React architecture, reusable UI patterns, and thoughtful user interactions.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-[#F2EFE9]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#A79E94]">Location</p>
              <p className="mt-4 text-base leading-7 text-[#D2CDC6]">Bangalore, India</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-8 text-[#F2EFE9]">
              <p className="text-xs uppercase tracking-[0.35em] text-[#A79E94]">Availability</p>
              <p className="mt-4 text-base leading-7 text-[#D2CDC6]">Open for contract work and freelance collaborations.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
