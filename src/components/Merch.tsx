import { useState } from 'react';
import { motion } from 'framer-motion';
import {  Star, Package, Award } from 'lucide-react';
import Shirt from '../assets/Shirts.jpeg';
import ToteBag from '../assets/ToteBag.jpeg';

const MerchItem = ({ image, title, price, index }: { image: string; title: string; price: string | number; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 border border-neutral-800 group-hover:border-yellow-400/50 transition-all duration-500"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(132, 204, 22, 0.06), transparent 40%)'
          }}
        />

        <div className="aspect-square relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-700"
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          />
          
          {/* Gradient overlay always visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
          
          {/* Hover overlay with actions */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 flex flex-col justify-end p-6 gap-3"
              initial={{ y: 20, opacity: 0 }}
              animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
        
              
              <button className="border border-white/30 text-white font-bold py-3 uppercase tracking-widest text-xs backdrop-blur-sm hover:bg-white/10 transition-colors">
                Quick View
              </button>
            </motion.div>
          </motion.div>
          
          {/* Limited Edition Badge */}
          <div className="absolute top-4 right-4 backdrop-blur-md bg-black/40 border border-lime-400/50 px-3 py-1.5 flex items-center gap-1.5">
            <Star className="w-3 h-3 text-lime-400 fill-lime-400" strokeWidth={2} />
            <span className="text-white text-[10px] font-black uppercase tracking-wider">Limited</span>
          </div>

          {/* Size indicator */}
          <div className="absolute top-4 left-4 flex gap-1">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <div 
                key={size} 
                className="w-6 h-6 bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white text-[9px] font-bold"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="p-5 relative">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-white font-black text-base uppercase tracking-wide leading-tight mb-1">
                {title}
              </h3>
              <p className="text-gray-500 text-xs font-medium tracking-wide">Festival Collection 2026</p>
            </div>
          </div>
          
          <div className="flex items-end justify-between">
            <div>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">Price</p>
              <p className="text-lime-400 font-black text-2xl tracking-tight">${price}</p>
            </div>
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400" strokeWidth={0} />
              ))}
            </div>
          </div>

          {/* Stock indicator */}
          <div className="mt-4 pt-4 border-t border-neutral-800">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500 uppercase tracking-wider">Stock</span>
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-yellow-400"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '67%' }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Merch = () => {
  const merchItems: { image: string; title: string; price: string }[] = [
    {
      image: Shirt,
      title: 'Remera Festival 2025',
      price: '15.000'
    },
    {
      image: ToteBag,
      title: 'Tote Bag Oficial',
      price: '15.000'
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
          className="text-center mb-20"
        >
          
          
          <motion.h2
            className="text-6xl md:text-8xl font-black text-white uppercase mb-6 tracking-tighter"
          >
            Exclusive
            <span className="block text-yellow-400">Collection</span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Premium festival wear crafted for true music lovers. Limited edition pieces you won't find anywhere else.
          </motion.p>
        </motion.div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {merchItems.map((item, index) => (
            <MerchItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              index={index}
            />
          ))}
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-800 mt-20 max-w-5xl mx-auto overflow-hidden"
        >
          <div className="bg-black p-8 text-center group hover:bg-neutral-900 transition-colors">
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Package className="w-10 h-10 text-lime-400" strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Free Shipping</h4>
            <p className="text-gray-500 text-xs font-light">On orders over $20.000</p>
          </div>
          
          <div className="bg-black p-8 text-center group hover:bg-neutral-900 transition-colors">
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-10 h-10 text-yellow-400" strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Limited Edition</h4>
            <p className="text-gray-500 text-xs font-light">Exclusive festival collection</p>
          </div>
          
          <div className="bg-black p-8 text-center group hover:bg-neutral-900 transition-colors">
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Award className="w-10 h-10 text-lime-400" strokeWidth={1.5} />
            </motion.div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-2">Premium Quality</h4>
            <p className="text-gray-500 text-xs font-light">100% organic certified cotton</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >

        </motion.div>
      </div>
    </section>
  );
};

export default Merch;