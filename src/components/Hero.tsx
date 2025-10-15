import React from "react";
import { motion } from "framer-motion";
import LineaUp from "../assets/Lineaup1.jpeg";
import imageCopy from "../assets/imagecopy.png";
const Hero: React.FC = () => {
  return (
    <section 
      className="w-full pt-16 bg-black text-white relative overflow-hidden"
    >
      {/* Background image with blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-110"
        style={{ backgroundImage: `url(${imageCopy})` }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-900 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen lg:min-h-[90vh] flex flex-col lg:flex-row items-center justify-center py-12 lg:py-0 gap-8 lg:gap-12">
          
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] uppercase tracking-tight"
            >
              <span className="block text-white">¡LLEGÓ EL</span>
              <span className="block text-white">LINE UP <span className="text-white">por día!</span></span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight"
            >
              ¡PASES DIARIOS YA DISPONIBLES!
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-base sm:text-lg text-cyan-100 font-semibold"
            >
              13, 14 y 15 de Marzo 2026
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#d5a6f0] text-black font-black px-8 py-4 shadow-lg hover:bg-[#c48fe0] transition-colors uppercase text-sm sm:text-base tracking-wider"
              >
                Comprá tu Ticket
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-black px-8 py-4 hover:bg-yellow-400 hover:text-black transition-colors uppercase text-sm sm:text-base tracking-wider"
              >
                Ver Line Up
              </motion.button>
            </motion.div>

         
          </motion.div>

          {/* Right poster */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <img 
                src={LineaUp} 
                alt="Lineup poster" 
                className="max-h-[60vh] lg:max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl border-4 border-yellow-400"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent rounded-lg pointer-events-none"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>

 
    </section>
  );
};

export default Hero;