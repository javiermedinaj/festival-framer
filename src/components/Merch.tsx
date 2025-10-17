import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

// Importar imágenes
import ShirtsImage from '../assets/Shirts.jpeg';
import ShirtWhiteImage from '../assets/ShirtWhite.png';
import ToteBagImage from '../assets/ToteBag.jpeg';
import ToteBagExampleImage from '../assets/totebagExample.png';
import ToteBagNegraImage from '../assets/ToteBagNegra.png';

// Mapeo de imágenes por producto
const productImages: Record<number, string[]> = {
  1: [ShirtsImage, ShirtWhiteImage],
  2: [ToteBagImage, ToteBagExampleImage, ToteBagNegraImage],
};

const MerchItem = ({
  id,
  images,
  title,
  price,
  originalPrice,
  onSale,
  totalStock,
  index,
}: {
  id: number;
  images: string[];
  title: string;
  price: string | number;
  originalPrice?: string | number | null;
  onSale?: boolean;
  totalStock: number;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link to={`/producto/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="relative group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <div className="relative">
        {onSale && (
          <motion.div
            className="absolute -top-3 -right-3 z-20 bg-amber-400 rounded-full w-16 h-16 flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1 + 0.3,
              type: "spring",
            }}
            viewport={{ once: true }}
          >
            <span className="text-black font-black text-sm uppercase">
              Sale
            </span>
          </motion.div>
        )}

        <motion.div
          className="relative overflow-hidden bg-neutral-200"
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <motion.img
            src={productImages[id]?.[0] || images[0]}
            alt={title}
            className="w-full aspect-square object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        <div className="mt-4">
          <h3 className="text-white font-black text-xl md:text-2xl uppercase tracking-tight leading-tight mb-2">
            {title}
          </h3>

          <div className="flex items-center gap-3">
            {originalPrice && (
              <span className="text-neutral-400 line-through text-base font-bold">
                ${originalPrice}
              </span>
            )}
            <span className="text-stone-400 font-black text-xl">${price}</span>
          </div>

          {/* Stock indicator */}
          {totalStock > 0 && totalStock < 10 && (
            <p className="text-orange-400 text-sm font-bold mt-2">
              ¡Solo quedan {totalStock}!
            </p>
          )}
          {totalStock === 0 && (
            <p className="text-red-400 text-sm font-bold mt-2">
              Agotado
            </p>
          )}
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

const Merch = () => {
  return (
    <section className="bg-black py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30, }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-4">
            FRESH INK,
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-20">
          {productsData.map((item, index) => (
            <MerchItem
              key={item.id}
              id={item.id}
              images={item.images}
              title={item.title}
              price={item.price}
              originalPrice={item.originalPrice}
              onSale={item.onSale}
              totalStock={item.totalStock}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-right"
        >
          <h3 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85]">
            FRESH LOOKS.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default Merch;
