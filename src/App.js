import { useState } from 'react';
import { motion } from 'framer-motion';

const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const projects = [
  {
    number: '01',
    title: 'Merchant Dashboard',
    description:
      'A real-time analytics and operations platform for multi-store retailers. Built with React for state management, Tailwind for responsive design, and integrated with REST APIs for live data.',
    tags: ['React', 'Node.js', 'Tailwind', 'Charts'],
  },
  {
    number: '02',
    title: 'Brand Refresh Campaign',
    description:
      'Custom website showcasing a brand rebrand with an animated component library. Leveraged Framer Motion for entrance animations and built a design system in Tailwind for consistency.',
    tags: ['React', 'Framer Motion', 'Design System', 'SEO'],
  },
  {
    number: '03',
    title: 'E-Commerce Redesign',
    description:
      'Rebuilt the checkout experience from the ground up, reducing friction and improving conversion. Implemented with careful attention to accessibility and performance optimization.',
    tags: ['React', 'UX Research', 'A/B Testing', 'Node.js'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-stone-900/50 bg-stone-950/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-semibold tracking-tight text-stone-100">
            Parth
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-10 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="transition text-stone-400 hover:text-stone-100 duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 h-0.5 bg-stone-100 transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-stone-100 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-stone-100 transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>

        {/* Mobile fullscreen menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 top-16 bg-stone-950 z-30"
          >
            <ul className="flex flex-col gap-8 px-6 py-10">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-xl text-stone-400 hover:text-stone-100 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section id="home" className="border-b border-stone-900/50 py-32 md:py-48">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1
                className="text-5xl md:text-7xl leading-tight font-light tracking-tight"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >
                I build interfaces that scale. Thoughtful code, refined design, and better user experiences.
              </h1>
              <p className="mt-10 max-w-2xl text-lg text-stone-400 leading-relaxed">
                Full-stack engineer focused on React, Node.js, and modern web tooling. I work with teams to ship product with attention to both craft and user impact.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 text-sm">
                <a
                  href="#work"
                  className="inline-block px-8 py-3 border border-stone-700 text-stone-100 hover:border-stone-500 hover:bg-stone-900/30 transition duration-300"
                >
                  View work
                </a>
                <a
                  href="mailto:hello@example.com"
                  className="inline-block px-8 py-3 bg-stone-800 text-stone-100 hover:bg-stone-700 transition duration-300"
                >
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-b border-stone-900/50 py-32 md:py-48">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div variants={itemVariants}>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Selected work</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                  Recent projects
                </h2>
              </motion.div>

              <div className="mt-20 space-y-20">
                {projects.map((project, index) => (
                  <motion.article
                    key={project.number}
                    variants={itemVariants}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-stone-900/30"
                  >
                    <div className="md:col-span-2">
                      <div
                        className="text-5xl md:text-6xl font-light text-stone-700"
                        style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                      >
                        {project.number}
                      </div>
                    </div>
                    <div className="md:col-span-10">
                      <h3 className="text-2xl md:text-3xl font-light tracking-tight text-stone-100">
                        {project.title}
                      </h3>
                      <p className="mt-6 text-lg text-stone-400 leading-relaxed max-w-3xl">
                        {project.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1.5 border border-stone-700/80 text-stone-300 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-b border-stone-900/50 py-32 md:py-48">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16"
            >
              <motion.div variants={itemVariants}>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">About</p>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                  Obsessed with building the right thing.
                </h2>
                <p className="mt-8 text-lg text-stone-400 leading-relaxed">
                  I approach every project with intention. Whether it's a public-facing product or internal tool, I care about the architecture, the user flow, and the code quality underneath.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-8">
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Core Skills</p>
                  <ul className="space-y-3 text-stone-300">
                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1 h-1 bg-stone-400 rounded-full" />
                      React & modern JavaScript patterns
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1 h-1 bg-stone-400 rounded-full" />
                      Node.js backends and REST APIs
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1 h-1 bg-stone-400 rounded-full" />
                      Tailwind CSS and responsive design
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="inline-block w-1 h-1 bg-stone-400 rounded-full" />
                      Performance optimization and UX strategy
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">When I'm Not Coding</p>
                  <p className="text-stone-400">
                    I study design systems, read about product strategy, and think about how good UI becomes invisible to the user.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-32 md:py-48">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-light tracking-tight" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                  Let's build something together.
                </h2>
                <p className="mt-8 text-lg text-stone-400 leading-relaxed">
                  Looking to start a new project? Have a question? I'd love to hear from you. Drop me a line and let's explore what's possible.
                </p>
              </motion.div>

              <motion.div variants={itemVariants}>
                <a
                  href="mailto:hello@example.com"
                  className="inline-block group"
                >
                  <div className="text-3xl md:text-4xl font-light tracking-tight text-stone-100 group-hover:text-stone-300 transition">
                    hello@example.com
                  </div>
                  <div className="mt-4 h-0.5 w-0 bg-stone-400 group-hover:w-24 transition-all duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="mt-24 pt-12 border-t border-stone-900/50 text-sm text-stone-500"
            >
              <p>Designed and built by Parth Pandit. 2025.</p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

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
