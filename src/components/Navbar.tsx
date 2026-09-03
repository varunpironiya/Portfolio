import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const location = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'My Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-150%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <div 
        className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between relative ${
          scrolled 
            ? 'w-[95%] md:w-[85%] max-w-5xl bg-white/70 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] border border-white/80 rounded-full px-6 md:px-8 py-3' 
            : 'w-full max-w-7xl bg-transparent px-6 md:px-12 py-4 border border-transparent shadow-none'
        }`}
      >
        {/* Glow effect behind the pill when scrolled */}
        {scrolled && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--color-accent)] via-purple-300 to-orange-300 opacity-20 blur-xl rounded-full" />
        )}

        <Link to="/" className="text-2xl font-bold tracking-tighter z-50 relative group flex items-center gap-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-800 group-hover:from-[var(--color-accent)] group-hover:to-purple-600 transition-all duration-500 group-hover:tracking-wider">VARUN</span>
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] group-hover:scale-150 transition-transform duration-500"></span>
        </Link>

        {/* Desktop Nav - Floating Pill */}
        <nav 
          className="hidden md:flex items-center gap-1 bg-white/40 backdrop-blur-md p-1.5 rounded-full border border-white/60 shadow-[inset_0_1px_4px_rgba(255,255,255,0.6)]"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onMouseEnter={() => setHoveredIndex(i)}
                className={`relative px-5 py-2 text-sm font-medium transition-colors rounded-full z-10 ${
                  isActive ? 'text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-black rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {hoveredIndex === i && !isActive && (
                  <motion.div
                    layoutId="hoverNavIndicator"
                    className="absolute inset-0 bg-black/5 rounded-full -z-20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full overflow-hidden border border-black/20 hover:border-white/40 transition-all shadow-md hover:shadow-[0_0_20px_rgba(255,100,50,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-accent)] to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
            
            <span className="relative z-10 flex items-center gap-2">
              <Sparkles size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
              Let's Talk
              <motion.span
                className="inline-block transition-transform duration-300 group-hover:rotate-45"
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative p-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors shadow-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </button>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-full left-0 right-0 mt-4 p-6 bg-white/95 backdrop-blur-3xl rounded-3xl shadow-2xl border border-white/50 flex flex-col gap-4 md:hidden origin-top overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[var(--color-accent)] opacity-10 rounded-full blur-3xl"></div>
              
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <Link
                      to={link.path}
                      className={`block text-2xl font-bold tracking-tight transition-all p-3 rounded-2xl relative overflow-hidden group ${
                        isActive ? 'text-[var(--color-accent)]' : 'text-gray-800 hover:text-black hover:pl-6'
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[var(--color-accent)] rounded-r-full"></div>
                      )}
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <div className="absolute inset-0 bg-[var(--color-accent)] opacity-5 rounded-2xl"></div>
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-4 pt-6 border-t border-gray-100"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-black to-gray-800 text-white text-lg font-medium rounded-2xl hover:shadow-lg hover:shadow-[var(--color-accent)]/20 transition-all active:scale-95"
                >
                  <Sparkles size={18} />
                  Start a Project
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
