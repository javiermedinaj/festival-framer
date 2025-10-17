import Banner from "../../assets/Recycle/banner.png";
import { motion } from "framer-motion";
import Wave1 from "../../assets/Recycle/wave1.svg";
import Wave2 from "../../assets/Recycle/wave2.svg";
import Wave3 from "../../assets/Recycle/wave3.svg";
import Wave4 from "../../assets/Recycle/wave4.svg";
import Wave6 from "../../assets/Recycle/wave6.svg";
import Wave7 from "../../assets/Recycle/wave7.svg";
import Wave8 from "../../assets/Recycle/wave5.svg";
import ItemsCard1 from "../../assets/Recycle/items1.svg";
import ItemsCard1Seg from "../../assets/Recycle/items2.svg";
import ItemsCard2 from "../../assets/Recycle/items3.svg";
import ItemsCard2Seg from "../../assets/Recycle/items4.svg";
import BottleRecycle from "../../assets/Recycle/BottleRecycle.svg";
import BoxRecycle from "../../assets/Recycle/BoxRecycle.svg";
import Derrame from "../../assets/Recycle/derrame.png";
// import WodRock from "../../assets/Recycle/WodRock.png"; 
import BlurImage from '../../assets/Recycle/imageBlur.png';
import Sustentabilidad from '../../assets/sustentability.png';

const Recycle = () => {
  return (
    <div className="bg-white pb-0 text-black overflow-hidden">
      <img
        src={Banner}
        alt="Recycle Banner"
        className="w-full h-full pt-20 object-cover"
      />
      <img
        src={Wave1}
        alt="Wave"
        className="w-full h-auto block bg-amber-200"
        style={{ display: "block", marginBottom: "-1px" }}
      />

      <section className="bg-amber-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight mb-6"
          >
            ECOBOTELLAS
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold uppercase mb-4"
          >
            ¡PODÉS GANAR DOS ENTRADAS PARA LOLLAPALLOZA!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base leading-relaxed space-y-4 mb-12"
          >
            <p className="text-lg">
              Las Ecobotellas permiten crear conciencia sobre la importancia de
              la educación ambiental y específicamente sobre la cantidad de
              residuos que generamos a diario. Son botellas en las que se
              introducen residuos plásticos de un solo uso, complejos de
              reciclar, para ser transformados en nuevos productos.
            </p>

            <div className="text-sm space-y-2 mt-6">
              <p className="text-xl"> La Rural Y Unicenter Shopping</p>
              <p className="text-xl"> Desde el 13/02 al 17/03</p>
              <p className="text-xl"> Lunes a Viernes de 16:00hs a 20:00hs</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-lg p-8"
            >
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-6">
                ¿QUÉ NO VA?
              </h3>
              <img
                src={ItemsCard1}
                alt="Items que no van"
                className="w-full h-auto mb-4"
              />
              <img
                src={ItemsCard1Seg}
                alt="Items que no van segunda parte"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-lg p-8"
            >
              <h3 className="text-3xl md:text-4xl font-black uppercase mb-6">
                ¿QUÉ VA?
              </h3>
              <p className="text-sm uppercase font-bold mb-4">
                ENVASES DE COMIDA
              </p>
              <img
                src={ItemsCard2}
                alt="Items que van"
                className="w-full h-auto mb-6"
              />
              <p className="text-sm uppercase font-bold mb-4">
                PRODUCTOS DE LIMPIEZA
              </p>
              <img
                src={ItemsCard2Seg}
                alt="Items que van segunda parte"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <img
        src={Wave2}
        alt="Wave"
        className="w-full h-auto block bg-amber-200"
      />

      {/* section2 */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-black uppercase leading-tight tracking-tight text-3xl sm:text-4xl md:text-6xl lg:text-7xl">
            <span className="block">¡ESTAMOS DANDO UN PASO GIGANTE</span>
            <span className="block">HACIA</span>
            <span className="block text-orange-500 mt-2">
              UN PLANETA MÁS LIMPIO Y
            </span>
            <span className="block text-orange-500">SALUDABLE!</span>
          </h1>

          <p className="mt-8 text-sm md:text-base text-gray-200 font-semibold uppercase">
            DESDE 2014, IMPULSANDO LA ECONOMÍA CIRCULAR.
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Nuestro objetivo es optimizar la separación de residuos reciclables
            en origen, reducir la huella medioambiental y superar la recolección
            de residuos año a año.
          </p>
        </div>
      </section>

      {/*Section 3 wave abajo*/}
      <img
        src={Wave3}
        alt="Wave"
        className="w-full h-auto block"
        style={{ display: "block", marginBottom: "-1px" }}
      />

    <section className="bg-white py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-4 tracking-tight">
      NÚMEROS QUE MARCAN LA
    </h2>
    <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 tracking-tight">
      DIFERENCIA
    </h3>

    <p className="text-center text-sm text-gray-500 mb-12">
      (Datos correspondientes al año 2024)
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {[
        { big: '800KG', title: 'PET TRITURADO EN BICICLETAS', small: '(45.000 botellas plásticas)' },
        { big: '860LTS', title: 'ACEITE RECOLECTADO', small: '(695Lts de materia prima para la producción de bioenergías)' },
        { big: '6U', title: 'TORRES SOLARES', small: '(evitó consumir 324lts de combustible fósil)' },
        { big: '900U', title: '"BOTELLAS DE AMOR"', small: '(587kg de plásticos)' },
        { big: '350MTS', title: 'TELA MESH UTILIZADA', small: '(1.000 totebags)' },
        { big: '100U', title: 'PRENDAS FABRICADAS REUTILIZANDO COLECCIONES ANTERIORES', small: '' },
        { big: '30.000U', title: 'COLILLAS DE CIGARRILLOS RECOLECTADAS', small: '' },
        { big: '1.460KG', title: 'COMPOST RECOLECTADOS', small: '' },
      ].map((item, idx) => (
        <div key={idx} className="text-left">
          <div className="text-6xl md:text-4xl text-orange-500 font-extrabold mb-2">
            {item.big}
          </div>
          <div className="border-t border-black pt-3">
            <div className="font-black uppercase text-2xl leading-tight">
              {item.title}
            </div>
            {item.small && (
              <div className="text-1xl text-gray-600 mt-1">{item.small}</div>
            )}
          </div>
        </div>
      ))}
    </div>

    <div className="relative max-w-3xl mx-auto mt-20 mb-12">
      <div className="absolute inset-0 bg-green-400 rounded-lg transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>
      
      <div className="relative bg-orange-500 rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
        <div className="text-center mb-8">
          <h3 className="text-white font-extrabold text-6xl md:text-7xl lg:text-8xl mb-6">
            16.150KG
          </h3>
          <div className="border-t-2 border-white/40 pt-4 inline-block">
            <div className="text-black font-black uppercase text-xl md:text-2xl">
              MATERIAL
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl">✓</span>
            <span className="font-bold text-lg md:text-xl">10.930KG</span>
            <span className="font-black uppercase text-sm md:text-base">PLÁSTICO</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl">✓</span>
            <span className="font-bold text-lg md:text-xl">2.610KG</span>
            <span className="font-black uppercase text-sm md:text-base">CARTÓN</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl">✓</span>
            <span className="font-bold text-lg md:text-xl">1.250KG</span>
            <span className="font-black uppercase text-sm md:text-base">ALUMINIO</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl">✓</span>
            <span className="font-bold text-lg md:text-xl">960KG</span>
            <span className="font-black uppercase text-sm md:text-base">PAPEL</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <span className="text-2xl">✓</span>
            <span className="font-bold text-lg md:text-xl">400KG</span>
            <span className="font-black uppercase text-sm md:text-base">VIDRIO</span>
          </div>
        </div>

       
        <img 
          src={BoxRecycle} 
          alt="caja decorativa" 
          className="absolute -top-20 -right-6 md:-top-10 md:-right-8 
                     w-28 md:w-36 lg:w-44 
                     pointer-events-none z-10"
        />
      </div>

      <img 
        src={BottleRecycle} 
        alt="botella decorativa" 
        className="absolute -bottom-10 -left-6 md:-bottom-12 md:-left-8 
                   w-24 md:w-32 lg:w-40 
                   pointer-events-none z-10"
      />
    </div>
  </div>
</section>
      <img
        src={Wave4}
        alt="Wave"
        className="w-full h-auto block"
      />
      {/* section 4 */}
      <div className="bg-black text-white text-center py-12 px-6">
        <h2 className="text-6xl text-emerald-500 font-extrabold mb-6">¿QUÉ MUNDO HACEMOS?</h2>
        <p className="text-lg mb-4">
100.000 BOTELLAS PET RECICLADAS        </p>
        
        <p className="text-2xl mb-4 text-center max-w-3xl mx-auto">
          Con una mega instalación de “arte reciclable” junto con la ONG ambiental QI Argentina y la artista Mónica Casella, nos propusimos interpelar y generar conciencia, a través de estas obras realizadas íntegramente con residuos plásticos.
        </p>
<div className="flex justify-center items-center pt-20">
  
    <img
      src={Derrame}
      alt="Derrame"
      className="max-w-4xl h-auto"
    />
</div>
      </div>
<section className="relative bg-black min-h-screen">
  {/* Wave superior - Posicionada arriba SIN GAP */}
  <img
    src={Wave6}
    alt="Wave"
    className="absolute top-0 left-0 w-full h-auto z-20 pointer-events-none block"
    style={{ marginBottom: '-1px', display: 'block' }}
  />
  
  {/* Imagen de fondo */}
  <div className="relative min-h-screen">
    <img 
      src={BlurImage} 
      alt="WodRock" 
      className="w-full h-full min-h-screen object-cover absolute inset-0 block" 
    />
    
    {/* Contenido sobre la imagen */}
    <div className="absolute inset-0 flex items-center justify-center z-10 px-4 py-20 md:py-32">
      <div className="text-center text-white max-w-5xl w-full">
        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase mb-4 md:mb-6 leading-tight">
          AMORES PLÁSTICOS
        </h2>
        
        <p className="text-lg sm:text-xl md:text-2xl font-bold mb-6 md:mb-8 px-2">
          ¡Cada botella es un paso hacia un futuro más sostenible!
        </p>
        
        <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed px-4">
          <p>
            Miles de fans se unieron a la causa, llenando botellas con plásticos de un solo
            uso y dándoles una segunda vida. Previo al festival del año 2024, los
            participantes entregaron en los puntos de retiro de entradas, Unicenter y La
            Rural, una enorme cantidad de botellas.
          </p>
          
          <p>
            Gracias a esta acción creamos una montaña de material reciclable con el
            objetivo de transformarlo en mobiliario para la próxima edición del festival.
          </p>
        </div>

        {/* Puntos de navegación */}
        <div className="flex justify-center gap-3 mt-8">
          <button className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white"></button>
          <button className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-white/50"></button>
        </div>
      </div>
    </div>
  </div>
  
  {/* Wave inferior - Posicionada abajo SIN GAP */}
  <img 
    src={Wave7}
    alt="Wave"
    className="absolute bottom-0 left-0 w-full h-auto z-20 pointer-events-none block"
    style={{ marginTop: '-1px', display: 'block' }}
  />
</section>

{/* section RR */}
<section className="bg-black text-white py-10 md:py-32 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-8xl sm:text-5xl md:text-5xl lg:text-9xl font-black uppercase leading-tight mb-8"
    >
      SUMATE A<br />R&R
    </motion.h2>
    
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-amber-200 leading-tight"
    >
      ¡Y PARTICIPÁ POR<br />INCREÍBLES BENEFICIOS!
    </motion.p>
  </div>
<img src ={Wave8} alt="Wave" className="w-full h-auto block pt-30" style={{ display: 'block', marginBottom: '-1px' }} />



</section>
<section className="bg-black py-10 md:py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="text-left">
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-tight">
          ¡CONOCÉ QUÉ HACEMOS COMO ORGANIZACIÓN
        </h2>
        <h3 className="text-emerald-400 text-4xl md:text-6xl lg:text-7xl font-black">Y <span className="text-emerald-400">SUMATE!</span></h3>
      </div>

      <div className="flex justify-center lg:justify-end">
        <div className="bg-white rounded-md shadow-lg overflow-hidden max-w-sm w-full">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
          src={Sustentabilidad} alt="Sustentabilidad" className="w-full h-auto block" />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Recycle;
