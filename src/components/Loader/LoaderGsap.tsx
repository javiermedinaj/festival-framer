import React, { useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Logo from '../../assets/Logo.png';
import babasonicos from '../../assets/bands/babasonicos.png';
import marttein from '../../assets/bands/marttein.png';
import royalblood from '../../assets/bands/royalblood.png';
import tameimpala from '../../assets/bands/tameimpala.png';
import viagraboys from '../../assets/bands/viagraboys.png';
import wos from '../../assets/bands/wos.png';
type Props = {
  onFinish?: () => void;
};

const bandImages = [
    { src: tameimpala, alt: 'Tame Impala' },
    { src: royalblood, alt: 'Royal Blood' },
    { src: babasonicos, alt: 'Babasónicos' },
    { src: wos, alt: 'WOS' },
    { src: viagraboys, alt: 'Viagra Boys' },
    { src: marttein, alt: 'Marttein' },
];


const LoaderGsap: React.FC<Props> = ({ onFinish }) => {
    useEffect(() => {
        const circleTop = document.querySelector('.loader_circle-top') as HTMLElement | null;
        const circleBottom = document.querySelector('.loader_circle-bottom') as HTMLElement | null;
        const revealBar = document.querySelector('.loader_reveal_bar') as HTMLElement | null;
        const overlay = document.querySelector('.loader_overlay') as HTMLElement | null;
        const gallery = document.querySelector('.loader_gallery') as HTMLElement | null;
        const galleryImages = document.querySelectorAll('.loader_gallery_image') as NodeListOf<HTMLImageElement> | null;

    if (!overlay || !circleTop || !circleBottom || !revealBar || !gallery) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

        const tl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power3.out' } });

        // initial state
        gsap.set([circleTop, circleBottom], { yPercent: 0 });
        gsap.set(revealBar, { width: '0%' });
        gsap.set(gallery, { scale: 0.85, opacity: 0.95 });
        if (galleryImages && galleryImages.length) gsap.set(galleryImages, { scale: 1.04 });

  
        tl.to(gallery, { scale: 1, duration: 1.0, ease: 'power2.out' }, 0)
          .to(galleryImages, { scale: 1, duration: 1.2, stagger: 0.06 }, 0)
          .to(revealBar, { width: '100%', duration: 0.9, ease: 'power2.inOut' }, 0.18)
          .to(circleTop, { yPercent: -110, duration: 1.0 }, 0.2)
          .to(circleBottom, { yPercent: 110, duration: 1.0 }, 0.2)
          .to(overlay, { autoAlpha: 0, pointerEvents: 'none', duration: 0.6 }, '+=0.1')
          .call(() => {
              document.body.style.overflow = '';
              onFinish && onFinish();
          });

        return () => {
            tl.kill();
            document.body.style.overflow = prevOverflow;
        };
    }, [onFinish]);

    return (
        <div className="loader_overlay fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden">
            <div className="loader_wrapper relative w-full h-full">
                <div className="loader_circle loader_circle-top absolute left-1/2 -translate-x-1/2 rounded-full bg-black pointer-events-none" style={{ width: '180vmax', height: '180vmax', top: '-70vmax' }} />
                <div className="loader_circle loader_circle-bottom absolute left-1/2 -translate-x-1/2 rounded-full bg-black pointer-events-none" style={{ width: '180vmax', height: '180vmax', bottom: '-70vmax' }} />

                {/* Gallery with responsive grid */}
                <div className="loader_gallery absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden px-4 pb-24">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 max-w-5xl w-full">
                        {bandImages.map((band, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1,
                                    ease: [0.6, 0.05, 0.01, 0.9]
                                }}
                                className="loader_gallery_figure w-full aspect-[3/4] flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.6)] border border-lime-400/20"
                            >
                                <motion.img
                                    src={band.src}
                                    alt={band.alt}
                                    className="loader_gallery_image w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="loader_reveal absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="loader_reveal_bar h-[1vh] max-h-[20px] bg-gradient-to-r from-lime-400 via-yellow-400 to-emerald-500 rounded-full shadow-[0_0_20px_rgba(74,222,128,0.5)] w-0" />
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="loader_brand absolute bottom-[3vh] sm:bottom-[4vh] md:bottom-[5vh] left-1/2 -translate-x-1/2 pointer-events-none z-20"
                >
                    <motion.img 
                        src={Logo} 
                        alt="Logo" 
                        className="h-10 sm:h-12 md:h-14 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                        animate={{ 
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default LoaderGsap;