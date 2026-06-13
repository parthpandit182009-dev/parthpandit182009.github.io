import { motion } from 'framer-motion';

const projects = [
  {
    number: '01',
    title: 'Merchant dashboard',
    description:
      'A production-ready analytics interface built to surface operations metrics and simplify team workflows without sacrificing clarity.',
    tags: ['React', 'Tailwind CSS', 'Accessibility', 'API integration'],
  },
  {
    number: '02',
    title: 'Brand campaign site',
    description:
      'A launch experience designed around strong typography and momentum. The site uses motion only where it supports reading flow and transitions.',
    tags: ['React', 'Framer Motion', 'Design system', 'SEO'],
  },
  {
    number: '03',
    title: 'Checkout flow redesign',
    description:
      'Reimagined the purchase funnel to reduce friction and improve conversion. The interface is intentionally restrained and optimized for clarity.',
    tags: ['UX', 'Performance', 'React', 'Testing'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="work" className="border-b border-white/10 py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={cardVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A79E94]">Work</p>
          <h2
            className="mt-5 text-4xl font-semibold tracking-tight text-[#F2EFE9] sm:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Projects built for clarity and durability.
          </h2>
        </motion.div>

        <div className="mt-16 space-y-10">
          {projects.map((project) => (
            <motion.article
              key={project.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="grid gap-6 rounded-[24px] border border-white/10 bg-white/5 p-8 lg:grid-cols-[80px_minmax(0,1fr)]"
            >
              <div>
                <span className="text-5xl font-semibold tracking-tight text-[#E8C547]" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {project.number}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[#F2EFE9]">
                  {project.title}
                </h3>
                <p className="mt-5 text-base leading-8 text-[#D2CDC6]">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#D2CDC6]">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
