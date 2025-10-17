import Logo from "../assets/Logo.png";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Lineup", href: "/lineup" },
  ];

  const sustainabilityItems = [
    { label: "Sustentabilidad", href: "/sustentabilidad" },
    { label: "Espíritu Verde", href: "/green-spirit" },
    { label: "Rock & Recycle", href: "/recycle" },
  ];

  const infoItems = [
   
    { label: "SPONSORS", href: "/sponsors" },
  ];

  const menuVariants = {
    closed: {
      x: "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black backdrop-blur-sm text-white z-50 border-b-4 border-black/50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            <div className="flex items-center md:w-1/3">
              <button
                onClick={toggleMenu}
                aria-label="Open menu"
                className="p-3 text-white hover:bg-white/10 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:flex md:justify-center md:items-center md:flex-1">
              <Link to="/">
                <img
				  src={Logo}	
alt="Festival Motion Logo"
                  className="h-10 sm:h-12 object-contain transition-transform hover:scale-105 duration-300"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center justify-end w-1/3">
              <div className="border-l-2 border-yellow-400/60 pl-5 pr-2">
                <div className="text-[11px] sm:text-xs font-medium tracking-wide text-white/80 uppercase">
                  Hipódromo de San Isidro
                </div>
                <div className="text-[11px] sm:text-xs font-semibold tracking-wider text-yellow-400 mt-0.5">
                  13, 14 y 15 de Marzo 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />

            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 h-full w-[280px] bg-black z-[70] shadow-2xl overflow-y-auto border-r-4 border-yellow-400"
              style={{
                backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" xmlns=\"http://www.w3.org/2000/svg\"/%3E')"
              }}
            >
              <div 
                className="absolute top-0 right-0 w-2 h-full"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, #facc15 0px, #facc15 10px, #ef4444 10px, #ef4444 20px, #3b82f6 20px, #3b82f6 30px, #22c55e 30px, #22c55e 40px)"
                }}
              />

              <div className="p-6 relative">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>

                <nav className="mt-12 space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.href}
                        onClick={toggleMenu}
                        className={`block py-3 text-lg font-normal transition-colors ${
                          item.label === "Home" 
                            ? "text-yellow-400 hover:text-yellow-300" 
                            : "text-white hover:text-yellow-400"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    custom={2}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="h-px bg-white/20 my-4"
                  />

                  {sustainabilityItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      custom={index + 3}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.href}
                        onClick={toggleMenu}
                        className="block py-3 text-lg font-normal text-white hover:text-yellow-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    custom={6}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="h-px bg-white/20 my-4"
                  />

             

                  <motion.div
                    custom={9}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    className="bg-white/20 my-4"
                  />

                  {infoItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      custom={index + 10}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.href}
                        onClick={toggleMenu}
                        className="block py-3 text-lg font-normal text-white hover:text-yellow-400 transition-colors"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;