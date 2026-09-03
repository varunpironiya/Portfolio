import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Sparkles, Mail, ArrowUpRight, PenTool, Layout, MonitorPlay, Layers } from 'lucide-react';

const services = [
  {
    id: 'thumbnails',
    title: 'Thumbnail Design',
    description: 'Custom, high-converting thumbnails designed to grab attention in crowded feeds. Maximizing your click-through rates.'
  },
  {
    id: 'social',
    title: 'Social Media',
    description: 'Cohesive and engaging graphics for Instagram, Twitter, LinkedIn, and Facebook that align with your brand identity.'
  },
  {
    id: 'posters',
    title: 'Campaign Graphics',
    description: 'Striking promotional materials for events, product launches, and marketing campaigns with maximum impact.'
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Comprehensive visual identity systems including logo design, color palettes, and typography selection.'
  },
  {
    id: 'marketing',
    title: 'Marketing Assets',
    description: 'Versatile design assets for digital advertising, email newsletters, and promotional campaigns tailored to convert.'
  },
  {
    id: 'ui-ux',
    title: 'UI & UX Design',
    description: 'Intuitive, user-centered interfaces that delight and convert. Seamless digital experiences and prototyping.'
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-performance landing pages designed to maximize your conversions with persuasive design and clear CTAs.'
  }
];

export default function Services() {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Header */}
      <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto relative min-h-[60vh] flex items-center justify-center">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#f3f4f6_0%,transparent_50%)] -z-10" />
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-10 left-[10%] w-48 h-48 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
        
        {/* Dotted grid background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10 opacity-60" />

        {/* Floating Icons */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-[10%] hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg border border-gray-100 text-indigo-500"
        >
          <PenTool size={28} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-24 right-[15%] hidden lg:flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-xl border border-gray-100 text-orange-500"
        >
          <Layout size={32} />
        </motion.div>

        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-[20%] hidden md:block text-yellow-400 opacity-50"
        >
          <Sparkles size={40} />
        </motion.div>

        <motion.div 
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }} 
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-24 right-[10%] hidden xl:flex items-center justify-center w-24 h-24 bg-white/50 backdrop-blur-md rounded-3xl shadow-sm border border-white text-pink-500 rotate-12"
        >
          <MonitorPlay size={40} />
        </motion.div>
        
        {/* Decorative dashed circle */}
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-10 w-64 h-64 rounded-full border-2 border-dashed border-gray-200 -z-10 hidden md:block"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-[2px] bg-black"></span>
            <span className="font-mono uppercase tracking-widest text-sm font-semibold">Expertise</span>
            <span className="px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available
            </span>
            <span className="w-8 h-[2px] bg-black"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
            Design <span className="text-gray-400 italic font-serif font-light">Capabilities</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I offer a focused range of visual design services tailored to help brands, 
            creators, and businesses communicate effectively and stand out.
          </p>
        </motion.div>
      </section>

      {/* Interactive List Section */}
      <section className="pb-32 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto border-t border-gray-200 relative z-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link 
                to="/work"
                className="group flex flex-col lg:flex-row items-start lg:items-center justify-between py-10 border-b border-gray-200 relative overflow-hidden transition-colors"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 lg:gap-12 w-full lg:w-1/2 mb-6 lg:mb-0">
                  <span className="text-lg font-mono text-gray-400 group-hover:text-white/50 transition-colors duration-300">
                    0{index + 1}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tighter transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-purple-400 group-hover:to-indigo-400">
                    {service.title}
                  </h3>
                </div>

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full lg:w-1/2 gap-6 lg:gap-12 pl-0 lg:pl-12">
                  <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 max-w-md text-lg">
                    {service.description}
                  </p>
                  <div className="w-14 h-14 rounded-full border border-gray-200 group-hover:border-white/30 flex items-center justify-center group-hover:text-white transition-all duration-300 group-hover:scale-110 shrink-0 bg-white group-hover:bg-transparent">
                    <ArrowRight className="group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] text-white text-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,#3b0764_0%,transparent_60%)] opacity-40 blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,#9d174d_0%,transparent_60%)] opacity-30 blur-[80px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay" />
        </div>

        {/* Marquee Background Text */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none z-0">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-8 items-center"
          >
            <h2 className="text-[15vw] font-black">LET'S WORK TOGETHER — </h2>
            <h2 className="text-[15vw] font-black">LET'S WORK TOGETHER — </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <Sparkles size={32} className="text-orange-200" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-tight cursor-default"
          >
            <span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-purple-400 hover:to-indigo-400">Have</span>{' '}
            <span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-purple-400 hover:to-indigo-400">a</span>{' '}
            <span className="inline-block transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-orange-400 hover:via-purple-400 hover:to-indigo-400">project</span> <br className="hidden md:block" />
            <span className="inline-block italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-indigo-200 hover:from-orange-400 hover:via-purple-400 hover:to-indigo-400 transition-all duration-300">in</span>{' '}
            <span className="inline-block italic font-serif font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-indigo-200 hover:from-orange-400 hover:via-purple-400 hover:to-indigo-400 transition-all duration-300">mind?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mb-12"
          >
            Whether it's a complete rebrand or a single thumbnail, let's create something that truly stands out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link to="/contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Let's Talk
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
