import { motion } from 'framer-motion';

const contactVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={contactVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A79E94]">Contact</p>
          <h2
            className="mt-5 text-4xl font-semibold tracking-tight text-[#F2EFE9] sm:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Ready to start something meaningful?
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#D2CDC6]">
            If you want a thoughtful React engineer who values design and delivery, reach out by email or connect on GitHub and LinkedIn.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="mailto:hello@example.com"
              className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm text-[#F2EFE9] transition hover:border-[#E8C547] hover:text-[#E8C547]"
            >
              hello@example.com
            </a>
            <a
              href="https://github.com/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm text-[#F2EFE9] transition hover:border-[#E8C547] hover:text-[#E8C547]"
            >
              github.com/USERNAME
            </a>
            <a
              href="https://linkedin.com/in/USERNAME"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-white/10 px-6 py-3 text-sm text-[#F2EFE9] transition hover:border-[#E8C547] hover:text-[#E8C547]"
            >
              linkedin.com/in/USERNAME
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
