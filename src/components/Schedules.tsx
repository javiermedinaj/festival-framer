import { motion } from 'framer-motion';
import { Clock, MapPin, Calendar, Music } from 'lucide-react';
import SchedulePic from '../assets/Schedules.jpeg';

const Schedule = () => {
  const festivalInfo = [
    {
      icon: Clock,
      title: 'Puertas Abren',
      description: '13:00HS',
      color: 'text-yellow-400'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      description: 'Parque Sarmiento',
      color: 'text-yellow-400'
    },
    {
      icon: Calendar,
      title: 'Fechas',
      description: '22 y 23 de Noviembre',
      color: 'text-yellow-400'
    },
    {
      icon: Music,
      title: 'Escenarios',
      description: 'Vortex • Heineken • Vibe',
      color: 'text-yellow-400'
    }
  ];

  const highlights = [
    {
      time: '14:00',
      artist: 'TURF',
      stage: 'Vortex Stage'
    },
    {
      time: '16:00',
      artist: 'WOS',
      stage: 'Heineken Stage'
    },
    {
      time: '20:00',
      artist: 'ROYAL BLOOD',
      stage: 'Vortex Stage'
    },
    {
      time: '21:00',
      artist: 'THE OFFSPRING',
      stage: 'Heineken Stage'
    },
    {
      time: '22:15',
      artist: 'TAME IMPALA',
      stage: 'Vortex Stage'
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white uppercase mb-4"
          >
            Horarios
          </motion.h2>
          <motion.p
            className="text-white text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Planificá tu día en el festival
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          <div className="space-y-8">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {festivalInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-neutral-900 border-2 border-yellow-400/50 rounded-lg p-6 text-center hover:border-yellow-400 transition-colors"
                  >
                    <Icon className={`w-8 h-8 mx-auto mb-3 ${info.color}`} />
                    <h3 className="text-white font-bold text-sm uppercase mb-1">{info.title}</h3>
                    <p className={`${info.color} font-black text-lg`}>{info.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-black text-yellow-400 uppercase mb-6 text-center">
                Destacados Día 1
              </h3>
              
              <div className="space-y-3">
                {highlights.map((show, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="bg-gradient-to-r from-neutral-800 to-neutral-900 p-4 rounded-lg border-l-4 border-yellow-200 cursor-pointer hover:from-neutral-700 hover:to-neutral-800 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-400 font-black text-2xl mb-1">{show.artist}</p>
                        <p className="text-white text-sm font-bold">{show.stage}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-yellow-400 font-black text-xl">{show.time}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

         

          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <motion.img
              src={SchedulePic}
              alt="Horarios Lollapalooza 2025"
              className="w-full h-auto rounded-lg shadow-2xl border-4 border-yellow-200"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-6"
            >
              <motion.button
                className="bg-yellow-400 text-black font-black px-12 py-4 uppercase tracking-wider text-lg w-full hover:bg-amber-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Descargar Horarios
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Schedule;