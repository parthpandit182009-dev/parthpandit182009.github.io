import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const navVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'bg-[#080808]/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-lg font-semibold tracking-tight text-[#F2EFE9]">
          PP
        </a>

        <ul className="hidden items-center gap-10 text-sm text-[#D2CDC6] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-[#E8C547] duration-300">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#F2EFE9] transition-all duration-300 ${
              menuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          />
          <span className={`block h-0.5 w-6 rounded-full bg-[#F2EFE9] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span
            className={`block h-0.5 w-6 rounded-full bg-[#F2EFE9] transition-all duration-300 ${
              menuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-40 bg-[#080808] px-6 pt-24 pb-10 md:hidden"
        >
          <div className="flex min-h-full flex-col justify-start gap-8 text-lg text-[#D2CDC6]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block border-b border-white/10 pb-4 transition hover:text-[#E8C547]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
