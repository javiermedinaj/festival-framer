import React, { useMemo } from "react";
import { motion } from "framer-motion";

const letterVariant: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

const containerVariant: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.01 } },
};

const AnimatedLine: React.FC<{ text: string; className?: string }> = ({ text, className = "" }) => {
  const chars = useMemo(() => text.split("").map((c, i) => ({ c, i })), [text]);

  return (
    <motion.div variants={containerVariant} initial="hidden" whileInView="visible" viewport={{ once: false }} className={className}>
      {chars.map(({ c, i }) => (
        <motion.span key={i} variants={letterVariant} className={`inline-block ${c === " " ? "mx-1" : ""}`}>
          {c}
        </motion.span>
      ))}
    </motion.div>
  );
};

const TextInfo: React.FC = () => {

  return (
    <section className="w-full bg-black text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center md:text-left">
          <h3 className="text-sm tracking-widest mb-6 uppercase">LA MÚSICA ESTÁ EN NUESTRO ADN</h3>
          <h2 className="font-extrabold text-4xl md:text-6xl leading-tight uppercase mb-6">
            <AnimatedLine text={"EL FESTIVAL MÁS ESPERADO POR LOS AMANTES"} />
            <AnimatedLine text={"DE LA MÚSICA EN VIVO."} />
          </h2>
          <p className="text-gray-300 max-w-3xl">Disfrutá de los mejores shows, los grandes headliners y la energía de miles de personas en el Hipódromo de San Isidro.</p>
        </div>
      </div>
    </section>
  );
};

export default TextInfo;
