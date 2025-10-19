import Banner from "../../assets/Green-spirit/banner.png";
import Wave6 from "../../assets/Recycle/Wave6.svg";
import Wave3 from "../../assets/Green-spirit/Greenspirit3.svg";
import Bottle from "../../assets/Green-spirit/Bottle.svg";
import Box from "../../assets/Green-spirit/Box.svg";
import Food from "../../assets/Green-spirit/Food.svg";
import Sustentabilidad from "../../assets/sustentability.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Recital from "../../assets/Green-spirit/Recital.png";

const GreenSpirit = () => {
  return (
    <div className="bg-white pb-0 text-black overflow-hidden">
      <img
        src={Banner}
        alt="Green Spirit Banner"
        className="w-full h-full pt-20 object-cover"
      />
      {/* section 1 */}
      <section className="bg-black py-20  px-6 justify-center text-center">
        <h2 className="text-5xl md:text-7xl text-white uppercase tracking-tighter leading-tight mb-6">
          LA MÚSICA ESTÁ EN NUESTRO ADN
        </h2>
        <motion.h2
          className="text-4xl text-amber-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ¡Y LA SOSTENIBILIDAD TAMBIÉN!
        </motion.h2>
        <motion.h3
          className="text-3xl text-white pt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          PRESENTE DESDE LA PRIMERA EDICIÓN EN 2014
        </motion.h3>
        <motion.p
          className="text-2xl text-white pt-10"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Un espacio donde se comparte un estilo de vida saludable y sostenible,
          a través de distintas actividades transformadoras como la
          alimentación, el bienestar físico y emocional.
        </motion.p>
      </section>

      {/* section 2 */}
      <section className="relative pb-20 bg-black min-h-screen">
        <img
          src={Wave6}
          alt="Wave"
          className="absolute top-0 left-0 w-full h-auto z-20 pointer-events-none block"
          style={{ marginBottom: "-1px", display: "block" }}
        />

        <div className="relative min-h-screen">
          <img
            src={Recital}
            alt="WodRock"
            className="w-full h-full min-h-screen object-cover absolute inset-0 block"
            style={{ backgroundColor: "#000000" }}
          />

          {/* Contenido sobre la imagen */}
          <div className="absolute inset-0 flex items-center justify-center z-10 px-4 py-20 md:py-32">
            <div className="text-center text-white max-w-5xl w-full">
              <motion.h2
                className="text-7xl pt-30 sm:text-3xl md:text-4xl lg:text-9xl font-black uppercase mb-4 md:mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                ALIANZAS QUE INSPIRAN
              </motion.h2>
              <div className="space-y-6 py-10 sm:text-base md:text-lg leading-relaxed px-4">
                <motion.p
                  className="text-1xl  text-white"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Trabajamos en estrecha colaboración con reconocidos referentes
                  del yoga y el natural training. Sesiones de meditación guiada,
                  danza, camas armónicas, masajes tailandeses, canto de mantras,
                  intención en movimiento, charlas y talleres de
                  concientización, son algunas de las actividades que encuentran
                  quienes se acercan a ESPIRITU VERDE.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={Wave3}
          alt="Wave"
          className="absolute bottom-20 left-0 w-full h-auto z-20 pointer-events-none block"
          style={{ marginTop: "-10px", display: "block" }}
        />
      </section>

      {/* section 3 - Alimentando Conciencias */}
      <section className="bg-black py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-6xl md:text-8xl font-black text-green-500 text-center mb-8 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            ALIMENTANDO CONCIENCIAS
          </motion.h2>

          <motion.p
            className="text-3xl text-white text-center mx-auto mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            En el Lolla Food, existe una gran propuesta de plant-based,
            promoviendo una alimentación consciente y saludable, sin productos
            de origen animal y contemplando opciones gluten free.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-green-500 rounded-lg py-20 text-center text-black h-100 flex flex-col justify-between">
              <div className="flex justify-center">
                <img src={Food} alt="Aceite" className="w-40 h-20" />
              </div>
              <div>
                <motion.p
                  className="text-2xl pb-10 font-bold leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Recolectamos y reciclamos el aceite sobrante de las
                  preparaciones de los puestos gastronómicos del festival.
                </motion.p>
              </div>
            </div>

            <div className="bg-green-500 rounded-lg py-20 text-center text-black h-100 flex flex-col justify-between">
              <div className="flex justify-center mb-6">
                <img src={Box} alt="Separación" className="w-40 h-20" />
              </div>
              <div>
                <motion.p
                  className="text-2xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Reforzamos nuestro trabajo de concientización sobre la
                  correcta separación de residuos en origen. Tenemos a
                  disposición recipientes para reciclables y recipientes para
                  residuos húmedos.
                </motion.p>
              </div>
            </div>

            <div className="bg-green-500 rounded-lg py-20 text-center text-black h-100 flex flex-col justify-between">
              <div className="flex justify-center mb-6">
                <img src={Bottle} alt="Botella" className="w-40 h-20" />
              </div>
              <div>
                <motion.p
                  className="text-2xl pb-20 font-bold leading-tight"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  El público puede llevar su botella de agua y recargar en
                  cualquier punto de hidratación.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={Wave3}
          alt="Wave"
          className="w-full h-auto pb-52"
          style={{ marginTop: "-1px", display: "block", rotate: "180deg" }}
        />
      </section>
      <section className="bg-black py-10 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <motion.h2
                className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                ¡CONOCÉ QUÉ HACEMOS COMO ORGANIZACIÓN
              </motion.h2>
              <motion.h3
                className="text-emerald-400 text-4xl md:text-6xl lg:text-7xl font-black"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                Y <span className="text-emerald-400">SUMATE!</span>
              </motion.h3>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-md shadow-lg overflow-hidden max-w-sm w-full">
                <Link to="/sustentabilidad">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    src={Sustentabilidad}
                    alt="Sustentabilidad"
                    className="w-full h-auto block"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t border-gray-300 my-0" />
    </div>
  );
};

export default GreenSpirit;
