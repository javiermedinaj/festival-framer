import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {ArrowLeft, Grid2x2 } from 'lucide-react'
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const product = productsData.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-4xl font-black mb-4">Producto no encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="text-lime-400 hover:text-lime-300 font-bold"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const selectedSizeStock = product.sizes.find(s => s.size === selectedSize)?.stock || 0;
  const maxQuantity = selectedSize ? selectedSizeStock : product.totalStock;

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(maxQuantity, quantity + change)));
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    const sizeStock = product.sizes.find(s => s.size === size)?.stock || 0;
    if (quantity > sizeStock) {
      setQuantity(Math.min(1, sizeStock));
    }
  };

  return (
    <div className="min-h-screen bg-black pt-30 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/')}
          className="text-white hover:text-lime-400 mb-8 flex items-center gap-2 font-bold transition-colors"
        >
            <ArrowLeft size={40} />
          Volver
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="sticky top-24">
              {product.onSale && (
                <motion.div
                  className="absolute -top-4 -right-4 z-20 bg-lime-400 rounded-full w-20 h-20 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: "spring" }}
                >
                  <span className="text-black font-black text-base uppercase">Sale</span>
                </motion.div>
              )}

              <div className="bg-neutral-900 rounded-lg overflow-hidden border-2 border-neutral-800">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.title}
                  className="w-full  object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`bg-neutral-900 rounded-lg overflow-hidden border-2 transition-all ${
                      currentImageIndex === idx 
                        ? 'border-lime-400 opacity-100' 
                        : 'border-neutral-800 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      className="w-full aspect-square object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-6">
              {product.title}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              {product.originalPrice && (
                <span className="text-neutral-400 line-through text-2xl font-bold">
                  ${product.originalPrice}
                </span>
              )}
              <span className="text-lime-400 font-black text-4xl">${product.price}</span>
              {product.onSale && (
                <span className="bg-lime-400 text-black px-3 py-1 rounded-full text-sm font-black">
                  ¡OFERTA!
                </span>
              )}
            </div>

            <div className="bg-neutral-900 border-2 border-neutral-800 rounded-lg p-4 mb-8">
              <p className="text-neutral-300 text-sm">
                Pay in 2 interest-free installments of <span className="font-bold">${(Number(product.price.toString().replace('.', '')) / 2).toLocaleString()}</span> with Shop Pay
              </p>
              <button className="text-lime-400 hover:text-lime-300 text-sm font-bold mt-2">
                Learn more
              </button>
            </div>

            <div className="mb-8">
              <p className="text-neutral-300 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-neutral-400 text-sm">
                  <span className="font-bold text-white">Material:</span> {product.material}
                </p>
                <p className="text-neutral-400 text-sm">
                  <span className="font-bold text-white">Cuidado:</span> {product.care}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-black text-lg uppercase">Talla</h3>
                <button className="text-lime-400 hover:text-lime-300 text-sm font-bold flex items-center gap-1">
                  <Grid2x2 size={16} />
                  GUÍA DE TALLAS
                </button>
              </div>

              <div className={`grid gap-3 ${product.sizes.length > 4 ? 'grid-cols-6' : 'grid-cols-3'}`}>
                {product.sizes.map((sizeObj) => {
                  const isOutOfStock = sizeObj.stock === 0;
                  const isSelected = selectedSize === sizeObj.size;
                  
                  return (
                    <button
                      key={sizeObj.size}
                      onClick={() => !isOutOfStock && handleSizeSelect(sizeObj.size)}
                      disabled={isOutOfStock}
                      className={`py-3 rounded-lg font-bold transition-all relative ${
                        isOutOfStock
                          ? 'bg-neutral-900 text-neutral-600 border-2 border-neutral-800 cursor-not-allowed'
                          : isSelected
                          ? 'bg-lime-400 text-black border-2 border-lime-400'
                          : 'bg-neutral-900 text-white border-2 border-neutral-800 hover:border-lime-400'
                      }`}
                    >
                      {sizeObj.size}
                      {!isOutOfStock && sizeObj.stock < 5 && (
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {sizeObj.stock}
                        </span>
                      )}
                      {isOutOfStock && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <span className="w-full h-0.5 bg-neutral-600 rotate-45"></span>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {selectedSize && (
                <p className="text-neutral-400 text-sm mt-3">
                  Stock disponible: <span className="font-bold text-lime-400">{selectedSizeStock} unidades</span>
                </p>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-white font-black text-lg uppercase mb-4">Cantidad</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-12 h-12 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white font-bold hover:border-lime-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  −
                </button>
                <span className="text-white font-bold text-2xl w-12 text-center">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  disabled={!selectedSize || quantity >= maxQuantity}
                  className="w-12 h-12 bg-neutral-900 border-2 border-neutral-800 rounded-lg text-white font-bold hover:border-lime-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  +
                </button>
              </div>
              {selectedSize && maxQuantity > 0 && (
                <p className="text-neutral-400 text-sm mt-2">
                  Máximo disponible: {maxQuantity}
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: selectedSize ? 1.02 : 1 }}
                whileTap={{ scale: selectedSize ? 0.98 : 1 }}
                disabled={!selectedSize || selectedSizeStock === 0}
                className={`w-full py-4 rounded-lg font-black text-lg uppercase tracking-wider transition-colors ${
                  selectedSize && selectedSizeStock > 0
                    ? 'bg-white text-black hover:bg-lime-400 cursor-pointer'
                    : 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
                }`}
              >
                {!selectedSize 
                  ? 'SELECCIONA UNA TALLA' 
                  : selectedSizeStock === 0 
                  ? 'SIN STOCK' 
                  : 'AGREGAR AL CARRITO'}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-bold hover:bg-indigo-700 transition-colors"
              >
                Buy with ShopPay
              </motion.button>

              <button className="w-full text-neutral-400 hover:text-white text-sm font-bold underline">
                More payment options
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
