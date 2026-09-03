import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, PenTool, MonitorPlay, CheckCircle2, Layers, LayoutTemplate } from 'lucide-react';

const featuredWork = [
  { id: 1, title: 'Gaming Highlights Thumbnail', category: 'youtube thumbnails', image: '/All Thumbnails/f1 3.jpg' },
  { id: 2, title: 'Tech Review Thumbnail', category: 'youtube thumbnails', image: '/All Thumbnails/f1 jpg t.jpg' },
  { id: 3, title: 'Vlog Thumbnail', category: 'youtube thumbnails', image: '/All Thumbnails/F1 16.jpg' },
  { id: 4, title: 'Finance Thumbnail', category: 'youtube thumbnails', image: '/All Thumbnails/F1 8.jpg' },
  { id: 5, title: 'Podcast Thumbnail', category: 'youtube thumbnails', image: '/All Thumbnails/new.jpg' },
  { id: 6, title: 'Educational Thumbnail', category: 'youtube thumbnails', image: '/All Thumbnails/saksham.jpg' },
];

const services = [
  'YouTube Thumbnail Design',
  'Social Media Design',
  'Poster & Campaign Graphics',
  'Marketing Creatives',
  'Landing Pages',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)', scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)', 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 1
    }
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  
  // Parallax transforms
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 350]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

        {/* Huge Background Text */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 1000], [0, 400]) }}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.03] z-0 select-none"
        >
          <h1 className="text-[20vw] font-black whitespace-nowrap tracking-tighter leading-none">CREATIVE</h1>
        </motion.div>

        {/* Abstract Background Elements */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[10%] left-[10%] w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-[20%] right-[10%] w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute -bottom-[10%] left-[30%] w-80 h-80 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0 pointer-events-none"
        />
        
        {/* Abstract Shapes */}
        <motion.div
          style={{ y: y2, rotate: useTransform(scrollY, [0, 1000], [0, 90]) }}
          className="absolute top-[15%] right-[10%] lg:right-[15%] w-16 h-16 border-4 border-[var(--color-accent)]/20 rounded-xl z-0 pointer-events-none hidden md:block"
        />
        <motion.div
          style={{ y: y3, rotate: useTransform(scrollY, [0, 1000], [45, -45]) }}
          className="absolute bottom-[25%] left-[10%] lg:left-[15%] w-24 h-24 border-2 border-indigo-300/30 rounded-full z-0 pointer-events-none hidden md:block"
        />
        <motion.div
          style={{ y: y1, rotate: useTransform(scrollY, [0, 1000], [0, 180]) }}
          className="absolute top-[40%] left-[5%] w-12 h-12 bg-gradient-to-br from-orange-400/20 to-purple-500/20 rounded-lg z-0 pointer-events-none hidden lg:block backdrop-blur-sm"
        />
        <motion.div
          style={{ y: y2, rotate: useTransform(scrollY, [0, 1000], [0, -180]) }}
          className="absolute bottom-[30%] right-[20%] w-8 h-8 bg-indigo-500/20 rounded-full z-0 pointer-events-none hidden lg:block backdrop-blur-sm"
        />

        {/* Floating Info Cards */}
        <motion.div
          style={{ y: y2 }}
          className="absolute top-[15%] left-[2%] lg:left-[5%] xl:left-[8%] hidden md:block z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                <PenTool size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Brand Identity</p>
                <p className="text-xs text-gray-500">Creative Concepts</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: y3 }}
          className="absolute bottom-[15%] right-[2%] lg:right-[5%] xl:right-[8%] hidden md:block z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 px-6 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500">
                <MonitorPlay size={20} />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold">Thumbnails</p>
                <p className="text-xs text-gray-500">High CTR Designs</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          style={{ y: y1, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center relative z-10 mt-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for freelance projects
          </motion.div>

          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold tracking-tighter mb-6 leading-[1.1] cursor-default">
              <span className="block text-gray-400 text-3xl md:text-4xl lg:text-5xl font-light mb-2 tracking-normal">Hello, I'm</span>
              <span className="inline-block transition-all duration-500 hover:scale-105 origin-left">
                Varun Pironiya
              </span>
              <br />
              <span className="text-[var(--color-accent)] inline-block transition-all duration-500 hover:bg-gradient-to-r hover:from-orange-500 hover:via-purple-500 hover:to-indigo-600 hover:text-transparent hover:bg-clip-text relative">
                Visual Designer
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I create modern and impactful visual designs for brands, creators, and businesses. 
            My work includes thumbnails, social media creatives, posters, and promotional graphics 
            designed to capture attention.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/work"
              className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white border border-gray-200 text-black font-medium rounded-full hover:bg-gray-50 transition-colors w-full sm:w-auto shadow-sm hover:shadow hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

      </section>

      {/* Creative Marquee Section */}
      <div className="w-full overflow-hidden bg-[#050505] py-8 z-20 relative border-y border-white/10">
        {/* Subtle gradient overlays for smooth fade on edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />
        
        <div className="flex w-max whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 px-6">
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-orange-500 hover:to-purple-500 transition-all duration-500 cursor-default">YouTube Thumbnails</span>
              <span className="text-orange-500 text-3xl">✦</span>
              
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-purple-500 hover:to-indigo-500 transition-all duration-500 cursor-default">Brand Identity</span>
              <span className="text-purple-500 text-3xl">✦</span>
              
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-indigo-500 hover:to-orange-500 transition-all duration-500 cursor-default">UI/UX Design</span>
              <span className="text-indigo-500 text-3xl">✦</span>
              
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-orange-500 hover:to-purple-500 transition-all duration-500 cursor-default">Social Media</span>
              <span className="text-orange-500 text-3xl">✦</span>
              
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-purple-500 hover:to-indigo-500 transition-all duration-500 cursor-default">Landing Pages</span>
              <span className="text-purple-500 text-3xl">✦</span>
              
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 hover:from-indigo-500 hover:to-orange-500 transition-all duration-500 cursor-default">Campaign Posters</span>
              <span className="text-indigo-500 text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Work Section */}
      <section className="py-32 bg-gray-50 text-black px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#00000010_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none -z-10" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-orange-600/10 rounded-full mix-blend-multiply filter blur-[120px] -z-10" />
        
        <div className="max-w-[90rem] mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-center gap-4 mb-6"
              >
                <span className="w-8 h-[2px] bg-[var(--color-accent)]"></span>
                <span className="text-[var(--color-accent)] font-mono uppercase tracking-widest text-sm">Selected Projects</span>
                <span className="w-8 h-[2px] bg-[var(--color-accent)]"></span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6"
              >
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 italic font-light">Work</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/work" className="group flex items-center gap-3 font-medium text-gray-600 hover:text-black transition-colors">
                <span className="uppercase tracking-widest text-sm">Explore Archive</span>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {featuredWork.map((work, index) => {
              return (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl break-inside-avoid"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto block transition-all duration-1000 group-hover:scale-110 group-hover:opacity-60"
                  />
                  
                  {/* Overlay (Kept for hover button contrast if needed, simplified) */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                  {/* View Project Button (Floating) */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-white hover:text-black">
                    <ArrowRight size={20} className="-rotate-45" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center md:hidden">
            <Link to="/work" className="inline-flex items-center justify-center w-full py-4 rounded-full border border-gray-300 text-black font-medium hover:bg-black hover:text-white transition-colors">
              Explore Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        {/* Animated Background Gradient Overlay */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -z-20 opacity-40"
          style={{
            backgroundImage: "linear-gradient(-45deg, #ffedd5, #f3e8ff, #e0e7ff, #ffedd5)",
            backgroundSize: "400% 400%",
          }}
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10 opacity-50" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 italic font-light">Expertise</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            >
              I specialize in creating scroll-stopping visuals that communicate your brand's message effectively and beautifully.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            {/* Large Card - Thumbnails */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
            >
               <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3" />
               <div className="relative z-10 h-full flex flex-col justify-between">
                 <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-sm">
                   <MonitorPlay size={32} />
                 </div>
                 <div className="max-w-md">
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight group-hover:text-orange-600 transition-colors duration-300">YouTube Thumbnails</h3>
                   <p className="text-gray-600 text-lg leading-relaxed">High-converting, click-worthy thumbnails designed to drastically boost your CTR and accelerate channel growth.</p>
                 </div>
               </div>
               {/* Decorative Element */}
               <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-0 group-hover:opacity-10 transition-all duration-700 group-hover:-translate-y-4">
                 <MonitorPlay size={200} />
               </div>
            </motion.div>

            {/* Tall Card - Brand Identity */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:row-span-2 bg-[#050505] text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(120,0,255,0.15),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               
               <div className="relative z-10 h-full flex flex-col justify-between">
                 <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 border border-white/10">
                   <PenTool size={32} />
                 </div>
                 <div>
                   <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 group-hover:to-white transition-all duration-300">Brand Identity</h3>
                   <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">Cohesive visual systems and guidelines that make your brand unforgettable across all digital touchpoints.</p>
                 </div>
               </div>
            </motion.div>

            {/* Small Card 1 - UI/UX Design */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
               <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-100 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3" />
               <div className="relative z-10 flex flex-col h-full justify-end">
                 <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-blue-600 transition-colors duration-300">UI/UX Design</h3>
                 <p className="text-gray-600">Intuitive, user-centered interfaces that delight and convert.</p>
               </div>
               <div className="absolute top-8 right-8 text-gray-200 group-hover:text-blue-100 transition-colors duration-500">
                 <Layers size={48} />
               </div>
            </motion.div>

            {/* Small Card 2 - Landing Pages */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
               <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-emerald-100 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3" />
               <div className="relative z-10 flex flex-col h-full justify-end">
                 <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-emerald-600 transition-colors duration-300">Landing Pages</h3>
                 <p className="text-gray-600">High-performance pages designed to maximize your conversions.</p>
               </div>
               <div className="absolute top-8 right-8 text-gray-200 group-hover:text-emerald-100 transition-colors duration-500">
                 <LayoutTemplate size={48} />
               </div>
            </motion.div>

            {/* Small Card 3 - Social Media */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
               <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-100 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3" />
               <div className="relative z-10 flex flex-col h-full justify-end">
                 <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">Social Media</h3>
                 <p className="text-gray-600">Engaging posts, stories, and banners tailored for every platform.</p>
               </div>
               <div className="absolute top-8 right-8 text-gray-200 group-hover:text-indigo-100 transition-colors duration-500">
                 <CheckCircle2 size={48} />
               </div>
            </motion.div>

            {/* Wide Card - Campaigns */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-xl transition-all duration-500"
            >
               <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100 to-transparent rounded-full mix-blend-multiply filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3" />
               <div className="relative z-10 flex flex-col h-full justify-end">
                 <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-purple-600 transition-colors duration-300">Campaigns & Posters</h3>
                 <p className="text-gray-600 max-w-md">Striking poster graphics and marketing creatives that convert and leave a lasting impression.</p>
               </div>
               <div className="absolute top-8 right-8 text-gray-200 group-hover:text-purple-100 transition-colors duration-500">
                 <ArrowRight size={48} className="-rotate-45" />
               </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-[var(--color-accent)] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group"
            >
              View All Services 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-32 bg-[#050505] text-white px-6 md:px-12 relative overflow-hidden flex items-center min-h-[80vh]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none -z-10" />
        
        {/* Huge Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-hidden flex justify-center pointer-events-none opacity-[0.02] z-0 select-none">
          <h2 className="text-[15vw] font-bold whitespace-nowrap tracking-tighter">VISIONARY</h2>
        </div>

        {/* Animated Moving Gradient Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-indigo-600/30 rounded-full mix-blend-screen filter blur-[120px] -z-10 pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-orange-600/20 rounded-full mix-blend-screen filter blur-[100px] -z-10 pointer-events-none" 
        />
        <motion.div 
          animate={{ 
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-purple-600/20 rounded-full mix-blend-screen filter blur-[150px] -z-10 pointer-events-none" 
        />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
                Design <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-orange-400 italic font-light">with</span> <br/>
                Purpose.
              </h2>
              <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg font-light">
                Every pixel, color, and layout choice is made with intention to create 
                impactful designs that resonate with audiences and elevate your brand.
              </p>
              
              <div className="flex items-center gap-6">
                <Link
                  to="/about"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white transition-all duration-300 ease-in-out bg-transparent border border-white/30 rounded-full hover:bg-white hover:text-black overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Discover My Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="relative h-full min-h-[400px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="absolute top-10 right-10 w-64 h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20"
            >
              <img src="/images/Fashion new poster.png" alt="Design process" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white/70 uppercase tracking-widest font-mono">01 // Visuals</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="absolute bottom-10 left-10 w-72 h-64 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10"
            >
              <img src="/images/minimal poster.png" alt="Creative work" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs text-white/70 uppercase tracking-widest font-mono">02 // Strategy</p>
              </div>
            </motion.div>
            
            {/* Abstract floating element */}
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 10, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-orange-500/30 rounded-full backdrop-blur-md z-30 flex items-center justify-center bg-black/20"
            >
              <div className="w-16 h-16 border border-indigo-500/50 rounded-full animate-ping" />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="absolute top-1/4 -left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl shadow-2xl z-30 hidden xl:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xs">VP</span>
                </div>
                <div className="pr-2">
                  <p className="text-sm font-bold text-white">Top Rated</p>
                  <p className="text-xs text-gray-300">Visual Designer</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 px-6 md:px-12 text-center relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#f0f0f0_0%,transparent_100%)] pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden md:block">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-[700px] h-[700px] border-[2px] border-gray-100 rounded-[30%_70%_70%_30%/30%_30%_70%_70%]"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden md:block">
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="w-[600px] h-[600px] border-[2px] border-gray-100 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none hidden md:block">
          <motion.div 
            animate={{ rotate: 180 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-[500px] h-[500px] border-[2px] border-orange-100/50 rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
          />
        </div>
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            x: [0, 300, -100, 0],
            y: [0, -200, 100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-200/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 -translate-y-1/2" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1.4, 1],
            x: [0, -300, 200, 0],
            y: [0, 150, -150, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-200/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 -translate-y-1/2" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1.1, 1],
            x: [0, 200, -300, 0],
            y: [0, 200, -100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-200/60 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 -z-10 -translate-x-1/2" 
        />
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-8 xl:left-[10%] hidden xl:block z-20"
        >
          <div className="bg-white p-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/user1/100/100" alt="User" referrerPolicy="no-referrer" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/user2/100/100" alt="User" referrerPolicy="no-referrer" />
              <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/seed/user3/100/100" alt="User" referrerPolicy="no-referrer" />
            </div>
            <div className="text-left pr-2">
              <p className="text-xs font-bold text-gray-900">100+ Happy</p>
              <p className="text-xs text-gray-500">Clients Worldwide</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-8 xl:right-[10%] hidden xl:block z-20"
        >
          <div className="bg-white p-4 rounded-full shadow-xl border border-gray-100 flex items-center justify-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-sm font-bold text-gray-900">Available for work</p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-10">
            Have a project in mind? I'm currently available for freelance opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-5 bg-[var(--color-accent)] text-white text-lg font-medium rounded-full hover:bg-black transition-colors shadow-lg shadow-[var(--color-accent)]/30"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}