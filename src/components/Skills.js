import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Accessible interfaces', 'Responsive layouts'],
  },
  {
    title: 'Systems',
    skills: ['Component libraries', 'Design tokens', 'Reusable patterns', 'State management'],
  },
  {
    title: 'Engineering',
    skills: ['Node.js', 'REST APIs', 'Testing', 'Performance'],
  },
  {
    title: 'Workflow',
    skills: ['Git', 'CI/CD', 'Figma collaboration', 'Documentation'],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="border-b border-white/10 py-[120px]">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
          <p className="text-sm uppercase tracking-[0.35em] text-[#A79E94]">Skills</p>
          <h2
            className="mt-5 text-4xl font-semibold tracking-tight text-[#F2EFE9] sm:text-5xl"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            What I rely on to ship polished products.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="rounded-[24px] border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold text-[#F2EFE9]">{group.title}</h3>
              <ul className="mt-6 space-y-3 text-[#D2CDC6]">
                {group.skills.map((skill) => (
                  <li key={skill} className="leading-7">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
