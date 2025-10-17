import { motion } from 'framer-motion';
// import Wave from '../../assets/wave.svg';
import Wave1 from '../../assets/wave1.svg';
// import Wave2 from '../../assets/wave2.svg';
import Recycle from '../../assets/recycle.png';
import GreenSpirit from '../../assets/espiritu_vede.png';
// import Wave123 from '../../assets/wave123.svg';
import SustentabilityImage from '../../assets/sustentability.png';
import { Link } from 'react-router-dom';
const Sustainability = () => {
  return (
    <div className="bg-white pb-0 text-black overflow-hidden">
      <img src={SustentabilityImage} alt="Sustainability Banner" className="w-full h-full pt-20 object-cover" />
      {/* <section className='relative pb-0'>
        <div className="w-full -mb-1">
          <img src={Wave1} alt="Wave" className="w-full h-auto block" style={{ display: 'block', marginBottom: '-1px', transform: 'rotate(180deg)' }} />
        </div>
      </section> */}

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6"
          >
            HOY TOCA EL PLANETA TIERRA
            <br/>
            <span className="text-purple-600">¡HAGAMOS UN SHOW INCREÍBLE!</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold uppercase mb-4"
          >
            LA MÚSICA ESTÁ EN NUESTRO ADN, ¡Y LA SOSTENIBILIDAD TAMBIÉN!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base leading-relaxed space-y-4"
          >
            <p><strong className='text-3xl'>Reducir el impacto del festival sobre el ambiente es un objetivo y un compromiso que nos guía.</strong></p>
            <p className='text-2xl text-gray-900'>En nuestra próxima edición, Enchastre vuelve a ser el punto de encuentro de miles de fanáticos, donde juntos seguiremos construyendo una cultura de respeto y cuidado, disfrutando de la música en vivo y promoviendo prácticas sostenibles.</p>
          </motion.div>
        </div>
      </section>

     
<div className="w-full ">
          <img src={Wave1} alt="Wave" className="w-full h-auto block" style={{ display: 'block', marginBottom: '-1px' }} />
        </div>
      <section className="bg-black text-white py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">
                LA SOST<span className="text-yellow-400">E</span>NIBILIDAD<br/>
                ES NUESTRO <span className="text-yellow-400">FARO.</span>
              </h2>
              <p className="text-2xl leading-relaxed">
                Asumimos la responsabilidad de transformar y preservar la experiencia de la música en vivo para las generaciones futuras. Conscientes del impacto del entretenimiento en vivo en el ambiente, replanteamos estrategias a nivel energético, de gestión de residuos y reutilización de insumos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              {[
                "SEPARACIÓN DE RESIDUOS",
                "ENERGÍAS RENOVABLES",
                "INCENTIVOS A LA MOVILIDAD SOSTENIBLE",
                "ACTIVIDADES DE CONCIENTIZACIÓN CON ORGANIZACIONES SIN FINES DE LUCRO"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white text-black p-4 font-black uppercase text-2xl tracking-tight hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>
<div className="w-full -mb-1">
          <img src={Wave1} style={{ transform: 'rotate(180deg)', backgroundColor:"#00674F", display: 'block' }} alt="Wave"  />
        </div>
      <section className="text-black py-20 px-6" style={{ backgroundColor: '#00674F' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                CELEBRAMOS LA<br/>
                DIVERSIDAD
              </h2>
              <p className="text-2xl md:text-3xl font-black uppercase mb-6 text-pink-100">
                Y PROMOVEMOS UNA<br/>
                CULTURA DE INCLUSIÓN<br/>
                Y ACCESIBILIDAD.
              </p>
              <p className="text-2xl leading-relaxed mb-8">
                Creemos firmemente que las diferencias nos enriquecen y potencian. Por eso, implementamos diversas iniciativas que garantizan la accesibilidad y la comodidad de todo el público.
              </p>

              <div className="bg-white backdrop-blur-sm p-6 rounded-lg mb-6 text-2xl leading-relaxed">
                <p className="mb-4">
                  <strong>Estamos comprometidos a crear un festival donde toda la comunidad se sienta bienvenida y pueda disfrutar de una experiencia única.</strong>
                </p>
                <p>
                  Si tenés alguna sugerencia o necesitás asistencia, no dudes en contactarnos a través de{' '}
                  <p className="text-purple-600 text-xl">accesibilidad.enchastre@festival.com</p>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                "TARIMAS ACCESIBLES",
                "SERVICIOS DE ASISTENCIA",
                "CAPACITACIÓN Y CONCIENTIZACIÓN",
                "IGUALDAD DE GÉNERO"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white text-black p-4 font-black uppercase text-2xl tracking-tight hover:bg-yellow-400 transition-colors cursor-pointer"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      <div className="w-full -my-1 bg-white">
        <img src={Wave1} alt="Wave" className="w-full h-auto block" style={{ display: 'block', marginTop: '-1px', marginBottom: '-1px', backgroundColor: '#00674F' }} />
      </div>


     <section className="bg-black text-white py-20 px-6">
  <div className="max-w-5xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-16"
    >
      ¡CONOCÉ NUESTRAS INICIATIVAS!
    </motion.h2>
    
    <div className="flex flex-col items-center gap-12">
      <Link to="/recycle">
      <motion.img 
        src={Recycle} 
        alt="Reciclaje" 
        className="w-full h-2/3 rounded-2xl"
      />
      </Link>
      <Link to="/green-spirit">
        <motion.img 
        src={GreenSpirit} 
        alt="Espíritu Verde" 
        className="w-full h-2/3 rounded-2xl"  
        />   
      </Link>
    </div>
  </div>
</section>
    </div>
  );
};

export default Sustainability;
