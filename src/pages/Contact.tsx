import { motion, useScroll, useTransform } from 'motion/react';
import { Instagram, Linkedin, Mail, MapPin, ArrowRight, Sparkles, Send } from 'lucide-react';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <section className="pt-40 pb-12 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="w-12 h-[2px] bg-black"></span>
            <span className="font-mono uppercase tracking-widest text-sm font-semibold">Contact</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase text-black relative z-10"
          >
            Let's Make <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-indigo-600 italic font-serif font-light pr-8">Magic</span> Happen
          </motion.h1>
        </div>

        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, -100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-gradient-to-br from-orange-300/40 to-pink-300/40 rounded-full mix-blend-multiply filter blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.5, 1],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-10%] right-[20%] w-[30vw] h-[30vw] bg-gradient-to-bl from-indigo-300/40 to-purple-300/40 rounded-full mix-blend-multiply filter blur-[100px]"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left: Contact Info Bento */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-[2.5rem] p-10 relative overflow-hidden group shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-700" />
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-12 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Mail size={28} className="text-white" />
              </div>
              <h3 className="text-gray-400 text-lg mb-2">Email me at</h3>
              <a href="mailto:varunpironiya@gmail.com" className="text-2xl md:text-3xl font-bold hover:text-[var(--color-accent)] transition-colors break-all">
                varunpironiya<br/>@gmail.com
              </a>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <motion.a 
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 hover:bg-indigo-50 hover:scale-105 transition-all duration-300 group border border-gray-100 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:text-indigo-600 transition-colors">
                  <Linkedin size={24} />
                </div>
                <span className="font-medium text-gray-600 group-hover:text-indigo-600">LinkedIn</span>
              </motion.a>

              <motion.a 
                href="#"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 hover:bg-pink-50 hover:scale-105 transition-all duration-300 group border border-gray-100 shadow-sm hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:text-pink-600 transition-colors">
                  <Instagram size={24} />
                </div>
                <span className="font-medium text-gray-600 group-hover:text-pink-600">Instagram</span>
              </motion.a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-[2.5rem] p-10 flex items-center gap-6 border border-gray-100 shadow-sm"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                <MapPin size={28} className="text-gray-900" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-1">Location</h3>
                <p className="text-xl font-bold text-gray-900">Available Worldwide</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Mad Libs Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-2/3 bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,#f8fafc_0%,transparent_50%)] -z-10" />
            
            <div className="flex items-center gap-4 mb-12">
              <Sparkles className="text-[var(--color-accent)]" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Project Inquiry</h2>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-800 p-12 rounded-[2rem] text-center flex-grow flex flex-col items-center justify-center border border-green-100"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10 text-green-600 ml-1" />
                </div>
                <h4 className="text-4xl font-bold mb-4 tracking-tight">Message Sent!</h4>
                <p className="text-xl text-green-700/80 max-w-md">Thank you for reaching out. I'll review your details and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12 flex-grow flex flex-col justify-between">
                <div className="text-2xl md:text-4xl leading-[2] md:leading-[2.2] font-light text-gray-400">
                  Hello! My name is{' '}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="bg-transparent border-b-2 border-gray-200 focus:border-[var(--color-accent)] text-black outline-none w-48 md:w-72 text-center placeholder-gray-200 transition-colors font-medium pb-1"
                  />
                  {' '}and I'm looking for help with a project. You can reach me at{' '}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="bg-transparent border-b-2 border-gray-200 focus:border-[var(--color-accent)] text-black outline-none w-full md:w-96 text-center placeholder-gray-200 transition-colors font-medium pb-1 mt-4 md:mt-0"
                  />
                  . Here are some details about what I have in mind:{' '}
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your vision..."
                    className="bg-transparent border-b-2 border-gray-200 focus:border-[var(--color-accent)] text-black outline-none w-full mt-8 resize-none placeholder-gray-200 transition-colors font-medium align-bottom"
                    rows={3}
                  ></textarea>
                </div>
                
                <div className="pt-8 flex justify-end mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="py-5 px-10 bg-black text-white rounded-full font-bold text-lg hover:bg-[var(--color-accent)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-4 group shadow-xl hover:shadow-2xl"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                    {!isSubmitting && <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />}
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
