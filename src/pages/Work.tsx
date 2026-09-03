import { motion, useScroll, useTransform } from 'motion/react';
import { Palette, MonitorPlay, ImageIcon, Layout } from 'lucide-react';

const workCategories = [
  {
    id: 'thumbnails',
    title: 'YouTube Thumbnails',
    description: 'High-converting, scroll-stopping thumbnails designed to maximize click-through rates.',
    items: [
      { id: 1, image: '/All Thumbnails/1.jpg', title: '1' },
      { id: 2, image: '/All Thumbnails/2 new.png', title: '2 new' },
      { id: 3, image: '/All Thumbnails/F1 16.jpg', title: 'F1 16' },
      { id: 4, image: '/All Thumbnails/F1 8.jpg', title: 'F1 8' },
      { id: 5, image: '/All Thumbnails/Layer 7.jpg', title: 'Layer 7' },
      { id: 6, image: '/All Thumbnails/UniversalUpscaler_f68f839d-2fb5-4580-814c-e6e1255d27b7.jpg', title: 'Thumbnail' },
      { id: 7, image: '/All Thumbnails/f1 10.jpg', title: 'f1 10' },
      { id: 8, image: '/All Thumbnails/f1 11.jpg', title: 'f1 11' },
      { id: 9, image: '/All Thumbnails/f1 12.jpg', title: 'f1 12' },
      { id: 10, image: '/All Thumbnails/f1 13.jpg', title: 'f1 13' },
      { id: 11, image: '/All Thumbnails/f1 14.jpg', title: 'f1 14' },
      { id: 12, image: '/All Thumbnails/f1 15.jpg', title: 'f1 15' },
      { id: 13, image: '/All Thumbnails/f1 17.jpg', title: 'f1 17' },
      { id: 14, image: '/All Thumbnails/f1 2.jpg', title: 'f1 2' },
      { id: 15, image: '/All Thumbnails/f1 3.jpg', title: 'f1 3' },
      { id: 16, image: '/All Thumbnails/f1 4.jpg', title: 'f1 4' },
      { id: 17, image: '/All Thumbnails/f1 5.jpg', title: 'f1 5' },
      { id: 18, image: '/All Thumbnails/f1 6.jpg', title: 'f1 6' },
      { id: 19, image: '/All Thumbnails/f1 7.jpg', title: 'f1 7' },
      { id: 20, image: '/All Thumbnails/f1 9.jpg', title: 'f1 9' },
      { id: 21, image: '/All Thumbnails/f1 jpg t.jpg', title: 'f1 jpg t' },
      { id: 22, image: '/All Thumbnails/f1.1.jpg', title: 'f1.1' },
      { id: 23, image: '/All Thumbnails/f1.jpg', title: 'f1' },
      { id: 24, image: '/All Thumbnails/f2 2.jpg', title: 'f2 2' },
      { id: 25, image: '/All Thumbnails/f2 3.jpg', title: 'f2 3' },
      { id: 26, image: '/All Thumbnails/f2 4.jpg', title: 'f2 4' },
      { id: 27, image: '/All Thumbnails/f2.jpg', title: 'f2' },
      { id: 28, image: '/All Thumbnails/f3 2.jpg', title: 'f3 2' },
      { id: 29, image: '/All Thumbnails/f3.jpg', title: 'f3' },
      { id: 30, image: '/All Thumbnails/ff.jpg', title: 'ff' },
      { id: 31, image: '/All Thumbnails/new.jpg', title: 'new' },
      { id: 32, image: '/All Thumbnails/saksham.jpg', title: 'saksham' },
      { id: 33, image: '/All Thumbnails/th1_.jpg', title: 'th1' },
      { id: 34, image: '/All Thumbnails/th2.jpg', title: 'th2' },
      { id: 35, image: '/All Thumbnails/th2.new 1.jpg', title: 'th2 new' },
      { id: 36, image: '/images/2 agin.jpg', title: '2 agin' },
      { id: 37, image: '/images/3... 1.jpg', title: '3... 1' },
      { id: 38, image: '/images/4.jpg', title: '4' },
      { id: 39, image: '/images/6 agin.jpg', title: '6 agin' },
    ]
  },
  {
    id: 'social',
    title: 'Social Media Posts',
    description: 'Engaging content tailored for platforms like Instagram, Twitter, and LinkedIn.',
    items: [
      { id: 40, image: '/images/2.0.jpg', title: '2.0' },
      { id: 41, image: '/images/1.jpg', title: '1' },
      { id: 42, image: '/images/111.1.jpg', title: '111.1' },
      { id: 43, image: '/images/111.2.jpg', title: '111.2' },
      { id: 44, image: '/images/111.3.jpg', title: '111.3' },
      { id: 45, image: '/images/again 1.jpg', title: 'again 1' },
      { id: 46, image: '/images/burger 1.1.jpg', title: 'burger 1.1' },
      { id: 47, image: '/images/burger 3.jpg', title: 'burger 3' },
      { id: 48, image: '/images/burger 3 new.jpg', title: 'burger 3 new' },
      { id: 49, image: '/images/key1.jpg', title: 'key1' },
      { id: 50, image: '/images/milk 01 display.jpg', title: 'milk 01 display' },
      { id: 51, image: '/images/milk 01.1.jpg', title: 'milk 01.1' },
      { id: 52, image: '/images/oreo ice cream updated 1.jpg', title: 'oreo ice cream updated 1' },
      { id: 53, image: '/images/sunday bruch.png', title: 'sunday bruch' },
      { id: 54, image: '/images/cabinet post1.2-1.jpg', title: 'Crystal Mini Tower' },
    ]
  },
  {
    id: 'posters',
    title: 'Posters',
    description: 'High-impact visuals and campaign posters for events, brands, and promotions.',
    items: [
      { id: 101, image: '/images/Fashion new poster.png', title: 'Fashion new poster' },
      { id: 102, image: '/images/MUSIC POSTER 2.jpg', title: 'MUSIC POSTER 2' },
      { id: 103, image: '/images/aniom poster.jpg', title: 'aniom poster' },
      { id: 104, image: '/images/basket ball poster.jpg', title: 'basket ball poster' },
      { id: 105, image: '/images/giannis poster sports.jpg', title: 'giannis poster sports' },
      { id: 106, image: '/images/minimal poster.png', title: 'minimal poster' },
      { id: 107, image: '/images/party new poster neon.jpg', title: 'party new poster neon' },
      { id: 108, image: '/images/poster 2.png', title: 'poster 2' },
      { id: 109, image: '/images/poster music fest.png', title: 'poster music fest' },
      { id: 110, image: '/images/shoe poster.png', title: 'shoe poster' },
      { id: 111, image: '/images/typography poster 1.jpg', title: 'typography poster 1' },
      { id: 112, image: '/images/RONALDO MULTI PICTURE.png', title: 'RONALDO MULTI PICTURE' },
      { id: 113, image: '/images/messi and christiano edited.jpg', title: 'messi and christiano edited' },
      { id: 114, image: '/images/robert football.jpg', title: 'robert football' },
      { id: 115, image: '/images/neymar new.jpg', title: 'neymar new' },
      { id: 116, image: '/images/blackpink.jpg', title: 'blackpink' },
      { id: 117, image: '/images/charlie puth.png', title: 'charlie puth' },
      { id: 118, image: '/images/vogue 1.jpg', title: 'vogue 1' },
      { id: 119, image: '/images/retroism.jpg', title: 'retroism' },
      { id: 120, image: '/images/being colurful.png', title: 'being colurful' },
      { id: 121, image: '/images/business growth.png', title: 'business growth' },
      { id: 122, image: '/images/hard but possible.jpg', title: 'hard but possible' },
      { id: 123, image: '/images/tempo.jpg', title: 'tempo' },
      { id: 124, image: '/images/traditional japan.jpg', title: 'traditional japan' },
    ]
  }
];

export default function Work() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);
  const y4 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="pt-32 pb-24 px-6 md:px-12 bg-gray-50 min-h-[50vh] flex flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffedd5_0%,transparent_40%)] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#e0e7ff_0%,transparent_40%)] opacity-50" />
        
        {/* Floating Icons */}
        <motion.div style={{ y: y1 }} className="absolute top-20 left-[10%] text-orange-200 hidden md:block">
          <Palette size={64} />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute bottom-20 right-[15%] text-indigo-200 hidden md:block">
          <MonitorPlay size={80} />
        </motion.div>
        <motion.div style={{ y: y3 }} className="absolute top-40 right-[10%] text-purple-200 hidden md:block">
          <ImageIcon size={48} />
        </motion.div>
        <motion.div style={{ y: y4 }} className="absolute bottom-32 left-[15%] text-pink-200 hidden md:block">
          <Layout size={56} />
        </motion.div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gray-200 bg-white text-sm font-medium tracking-wide uppercase"
          >
            Portfolio
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
          >
            Selected <span className="text-gray-400 italic font-serif">Works</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            A curated collection of my design projects across various disciplines.
          </motion.p>
        </div>
      </section>

      {/* Categories Gallery */}
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 mt-24 space-y-32">
        {workCategories.map((category, categoryIndex) => (
          <section key={category.id}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-6"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{category.title}</h2>
                <p className="text-xl text-gray-500 max-w-2xl">{category.description}</p>
              </div>
              <span className="text-gray-300 font-mono text-2xl">0{categoryIndex + 1}</span>
            </motion.div>
            
            {/* Masonry-style Gallery */}
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {category.items.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="group relative cursor-pointer break-inside-avoid overflow-hidden rounded-2xl bg-gray-100 shadow-sm hover:shadow-xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}