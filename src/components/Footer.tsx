import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkle, Asterisk, Hexagon, CircleDashed, Instagram, Linkedin, Dribbble } from 'lucide-react';

const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7v10h4.5a3.5 3.5 0 0 0 0-7h-4" />
    <path d="M4 12h4.5a2.5 2.5 0 0 0 0-5H4" />
    <path d="M14 10h5" />
    <path d="M19.5 14c0-2-1.5-3-3-3s-3 1.5-3 3 1.5 3 3 3a3.5 3.5 0 0 0 2.5-1" />
    <path d="M13.5 14h6" />
  </svg>
);

const ContraIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 5.5 4.5 10 10 10-5.5 0-10 4.5-10 10C12 16.5 7.5 12 2 12c5.5 0 10-4.5 10-10z" />
  </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-6 overflow-hidden relative mt-12">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-accent)]/20 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Decorative Filler Elements */}
      <Sparkle className="absolute top-12 right-[10%] text-gray-600 opacity-40 animate-pulse" size={24} />
      <Hexagon className="absolute bottom-1/3 left-[5%] text-gray-800 opacity-30 -rotate-12" size={40} />
      <CircleDashed className="absolute top-1/3 right-[25%] text-[var(--color-accent)] opacity-20 animate-[spin_6s_linear_infinite]" size={64} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-10">
          <div className="max-w-2xl relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 leading-[1.1]">
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 cursor-default">Have</span>{' '}
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 cursor-default">an</span>{' '}
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 cursor-default">idea?</span>{' '}
              <Asterisk className="inline-block text-[var(--color-accent)] animate-[spin_4s_linear_infinite] mb-2" size={36} /><br />
              <span className="text-gray-400 italic font-serif font-light">
                <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 cursor-default">Let's</span>{' '}
                <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 cursor-default">build</span>{' '}
                <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 transition-all duration-300 cursor-default">it.</span>
              </span>
            </h2>
            <a 
              href="mailto:varunpironiya@gmail.com" 
              className="inline-flex items-center gap-3 text-lg md:text-xl border-b border-white/30 pb-2 hover:border-white transition-colors group"
            >
              varunpironiya@gmail.com
              <div className="bg-white text-black p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>

          <div className="flex flex-wrap gap-12 md:gap-20">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></div> Sitemap
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/work" className="text-gray-300 hover:text-white transition-colors">Work</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 font-semibold flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"></div> Socials
              </h4>
              <div className="flex flex-wrap gap-3 max-w-[200px]">
                <a href="https://www.instagram.com/varunxcreates/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-300" title="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://www.linkedin.com/in/varun-pironiya/" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-300" title="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://dribbble.com/varun-pironiya" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-300" title="Dribbble">
                  <Dribbble size={18} />
                </a>
                <a href="https://www.behance.net/varunpironiya1" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-300" title="Behance">
                  <BehanceIcon size={18} />
                </a>
                <a href="https://contra.com/varun_pironiya_2qyegsh0/work?r=varun_pironiya_2qyegsh0" target="_blank" rel="noopener noreferrer" className="bg-white/5 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-[var(--color-accent)] hover:scale-110 transition-all duration-300" title="Contra">
                  <ContraIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

       

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 border-t border-white/10 pt-6">
          <p>&copy; {new Date().getFullYear()} Varun Pironiya. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Based in <span className="text-gray-300">India</span>
            </p>
            <button 
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1.5 group"
            >
              Back to top 
              <span className="group-hover:-translate-y-1 transition-transform">&uarr;</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
