import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { User, Heart, Star, Coffee, Sparkles, Target, Zap, PenTool, Layout, Layers, MonitorPlay, Image, Type, Palette, Figma } from 'lucide-react';

const skills = [
  { name: 'Adobe Photoshop', icon: <Image size={18} />, color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-600 hover:text-white hover:border-blue-600' },
  { name: 'Adobe Illustrator', icon: <PenTool size={18} />, color: 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-600 hover:text-white hover:border-orange-600' },
  { name: 'Figma', icon: <Figma size={18} />, color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-600 hover:text-white hover:border-purple-600' },
  { name: 'UI & UX Design', icon: <Layout size={18} />, color: 'bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-600 hover:text-white hover:border-pink-600' },
  { name: 'Social Media Design', icon: <MonitorPlay size={18} />, color: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600' },
  { name: 'Branding & Identity', icon: <Sparkles size={18} />, color: 'bg-yellow-50 text-yellow-700 border-yellow-200 hover:bg-yellow-500 hover:text-white hover:border-yellow-500' },
  { name: 'Visual Design', icon: <Zap size={18} />, color: 'bg-red-50 text-red-700 border-red-200 hover:bg-red-600 hover:text-white hover:border-red-600' },
  { name: 'Typography', icon: <Type size={18} />, color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-600 hover:text-white hover:border-emerald-600' },
  { name: 'Layout Design', icon: <Layout size={18} />, color: 'bg-cyan-50 text-cyan-700 border-cyan-200 hover:bg-cyan-600 hover:text-white hover:border-cyan-600' },
  { name: 'Color Theory', icon: <Palette size={18} />, color: 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-600 hover:text-white hover:border-rose-600' }
];

export default function About() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);
  const y4 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-24 px-6 md:px-12 bg-gray-50 min-h-[50vh] flex flex-col justify-center items-center relative overflow-hidden">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#dcfce7_0%,transparent_40%)] opacity-50 origin-center" 
        />
        <motion.div 
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#fef08a_0%,transparent_40%)] opacity-50 origin-center" 
        />
        
        {/* Floating Icons */}
        <motion.div style={{ y: y1 }} className="absolute top-20 right-[20%] text-green-200 hidden md:block">
          <User size={64} />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[15%] text-yellow-200 hidden md:block">
          <Heart size={80} />
        </motion.div>
        <motion.div style={{ y: y3 }} className="absolute top-40 left-[10%] text-teal-200 hidden md:block">
          <Star size={48} />
        </motion.div>
        <motion.div style={{ y: y4 }} className="absolute bottom-32 right-[15%] text-orange-200 hidden md:block">
          <Coffee size={56} />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium tracking-wide uppercase"
          >
            Get To Know About Me
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 flex flex-wrap justify-center gap-x-4"
          >
            {['Varun', 'Pironiya'].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={i === 1 ? "text-gray-400 italic font-serif" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            A visual designer passionate about creating impactful visual communication that drives results.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left: Sticky Image Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-5/12 sticky top-32"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
            >
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 relative z-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                <img 
                  src="/IMG_20260102_223400_409.jpg.jpeg" 
                  alt="Varun Pironiya" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-medium tracking-widest uppercase mb-2 text-white/80">Based in</p>
                  <p className="text-2xl font-serif italic">India</p>
                </div>
              </div>
              
              {/* Decorative background blob */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-yellow-100 rounded-[3rem] z-0 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" 
              />
              
              {/* Rotating Badge */}
              <div className="absolute -top-6 -right-6 z-20 w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-50">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative w-full h-full"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full p-2">
                    <path id="textPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                    <text className="text-[10.5px] font-bold uppercase tracking-[0.15em] fill-black">
                      <textPath href="#textPath" startOffset="0%">
                        - VISUAL DESIGNER - ✦ VARUN ✦ 
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <Sparkles className="absolute text-yellow-500" size={24} />
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right: Bento Content Column */}
          <div className="lg:w-7/12 space-y-8">
            
            {/* Card 1: My Story */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <User size={120} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 relative z-10">The Story</h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light relative z-10">
                <p className="text-2xl md:text-3xl text-black font-medium leading-snug">
                  Hello! I'm Varun, a creative visual designer dedicated to helping brands tell their stories through <span className="italic font-serif text-gray-500">compelling digital visuals.</span>
                </p>
                <p>
                  My journey in design started with a fascination for how colors, typography, and imagery can evoke emotions and drive action. Over the years, I've honed my skills to specialize in creating scroll-stopping YouTube thumbnails, engaging social media creatives, and cohesive brand identities.
                </p>
                <p>
                  I believe that good design is not just about making things look pretty—it's about solving problems, communicating clearly, and creating memorable experiences for the audience.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Design Approach (Dark Mode) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-black text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group shadow-sm hover:shadow-2xl hover:shadow-black/50 transition-all"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#333_0%,transparent_50%)] opacity-50" />
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={120} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 relative z-10">Design Approach</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light relative z-10">
                Every project begins with understanding the core message and the target audience. 
                I approach design as a strategic tool, combining <span className="text-white font-medium">aesthetic intuition</span> with <span className="text-white font-medium">data-driven insights</span> to create visuals that not only look great but also perform exceptionally well.
              </p>
            </motion.div>

            {/* Card 3: Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 p-8 md:p-12 rounded-[2.5rem] border border-indigo-100 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 text-indigo-500">
                <Zap size={120} />
              </div>
              
              {/* Colorful decorative blobs */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" />
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '4s' }} />

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Capabilities</h2>
              <div className="flex flex-wrap gap-3 relative z-10">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 px-5 py-3 border rounded-full text-base font-medium transition-all duration-300 cursor-default group shadow-sm ${skill.color}`}
                  >
                    <span className="transition-colors duration-300">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
