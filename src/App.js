import { motion } from 'framer-motion';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  'React',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'REST APIs',
  'Responsive layouts',
];

const projects = [
  {
    title: 'Marketing site redesign',
    details: [
      'Custom React components for reusable sections',
      'Tailwind-powered responsive layout',
      'Performance optimizations for fast loading',
    ],
  },
  {
    title: 'Internal dashboard',
    details: [
      'Interactive charts and data tables',
      'Accessible keyboard navigation',
      'Micro-animations with Framer Motion',
    ],
  },
  {
    title: 'E-commerce prototype',
    details: [
      'Cart flow built with React state management',
      'Mobile-first design system',
      'Smooth transitions and hover states',
    ],
  },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm md:text-base">
          <div className="font-semibold tracking-[0.15em] text-slate-100">Parth Pandit</div>
          <ul className="flex flex-wrap items-center gap-5 text-slate-400">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-slate-100" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-10">
        <section id="home" className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-800 bg-slate-900/85 p-10 shadow-xl shadow-slate-950/40"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Front-end engineering</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Building dependable UI with React, Tailwind, and thoughtful motion.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I help teams ship professional portfolio and product experiences using maintainable code, accessible layouts, and clean visual systems.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Email me
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
              >
                See my work
              </a>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/85 p-10 shadow-xl shadow-slate-950/30"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">A practical approach to product-facing interfaces.</h2>
            <p className="mt-6 text-slate-300 leading-8">
              I focus on building user interfaces that are easy to maintain, accessible, and polished without unnecessary complexity. When I work on a project, I prioritize clarity, performance, and a strong visual hierarchy.
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              My projects typically include React architecture, Tailwind utility styling, API integrations, and motion that supports the experience rather than distracting from it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/85 p-8 shadow-xl shadow-slate-950/20"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Core skills</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div key={skill} className="rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-4 text-slate-200">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="work" className="mt-16 space-y-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">Recent projects</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-3xl border border-slate-800 bg-slate-900/85 p-8 shadow-xl shadow-slate-950/20"
              >
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/85 p-10 shadow-xl shadow-slate-950/20">
          <div className="md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Contact</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Let&apos;s talk about your next project.</h2>
              <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                Whether you need a landing page, portfolio site, or front-end component library, I can help deliver a solution that is well-structured and easy to maintain.
              </p>
            </div>
            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 md:mt-0"
            >
              hello@example.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
