import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Music2, Volume2 } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  artist: string;
  embedUrl: string;
  thumbnail?: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Live Performance ',
    artist: 'Viagra Boys',
    embedUrl: 'https://www.youtube.com/watch?v=8A8s9gx9pGM',
  },

];

const VideoCard = ({ video, index }: { video: Video; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity, y }}
      className="relative group"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 group-hover:border-lime-400/50 transition-all duration-500"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-lime-400/10 via-transparent to-transparent" />
        </div>

        {/* Video iframe */}
        <div className="relative w-full h-full">
          <iframe
            src={`${video.embedUrl}?controls=1&modestbranding=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Play icon overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0 transition-opacity pointer-events-none"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
        >
          <div className="w-20 h-20 rounded-full bg-lime-400/90 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-10 h-10 text-black fill-black ml-1" />
          </div>
        </motion.div>
      </motion.div>

      {/* Info section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
        viewport={{ once: true }}
        className="mt-6 px-2"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-white font-black text-lg uppercase tracking-wide mb-1 group-hover:text-lime-400 transition-colors">
              {video.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium tracking-wide flex items-center gap-2">
              <Music2 className="w-3 h-3" />
              {video.artist}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center hover:border-lime-400 hover:bg-lime-400/10 transition-all group/btn"
          >
            <Volume2 className="w-4 h-4 text-gray-400 group-hover/btn:text-lime-400 transition-colors" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VideosSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={sectionRef} className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-lime-400/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px]" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-lime-400/30 backdrop-blur-sm"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
          >
            <Play className="w-4 h-4 text-lime-400" strokeWidth={2} />
            <span className="text-lime-400 text-xs font-black uppercase tracking-widest">Video Archive</span>
          </motion.div>
          
          <motion.h2
            className="text-6xl md:text-8xl font-black text-white uppercase mb-6 tracking-tighter"
          >
            Relive The
            <span className="block text-lime-400">Moments</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Experience the energy, the passion, and the unforgettable performances that made history.
          </motion.p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-gray-500 text-sm uppercase tracking-widest">Want more?</p>
            <motion.button
              className="group relative bg-transparent border border-lime-400 text-lime-400 font-black px-16 py-5 uppercase tracking-[0.3em] text-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span 
                className="absolute inset-0 bg-lime-400"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative flex items-center justify-center gap-3 group-hover:text-black transition-colors">
                <Play className="w-4 h-4 fill-current" />
                Visit Our Channel
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative lines */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
    </section>
  );
};

export default VideosSection;
