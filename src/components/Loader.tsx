import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type LoaderProps = {
  /** milliseconds before the loader completes (controls total timing roughly) */
  duration?: number;
  /** called when loader animation finishes */
  onFinish?: () => void;
};

/**
 * Loader.tsx
 * Full-screen loader using Framer Motion.
 * Behavior:
 *  - Draws an SVG circle (stroke animation) and fades in the wordmark
 *  - After the draw completes, the overlay fades out and calls onFinish
 *
 * Usage:
 *  const [loading, setLoading] = useState(true)
 *  <>{loading && <Loader onFinish={() => setLoading(false)} />}</>
 */
const Loader: React.FC<LoaderProps> = ({ duration = 1700, onFinish }) => {
  const controls = useAnimation();

  useEffect(() => {
    let mounted = true;
    async function sequence() {
      // draw svg (pathLength animation)
      await controls.start("draw");
      // small pause so the user sees the completed mark
      await controls.start("hold");
      // fade overlay out
      await controls.start("out");
      if (mounted) onFinish && onFinish();
    }
    sequence();
    return () => {
      mounted = false;
    };
  }, [controls, onFinish]);

  const logoVariants = {
    initial: { opacity: 0 },
    draw: {
      opacity: 1,
      transition: { duration: 0.01 },
    },
    hold: {
      opacity: 1,
      transition: { duration: (duration - 600) / 1000 },
    },
    out: { opacity: 0 },
  };

  const circlePath = {
    initial: { pathLength: 0, opacity: 0 },
    draw: {
      pathLength: [0, 1],
      opacity: [0.2, 1],
      transition: { duration: 0.9 },
    },
    hold: { pathLength: 1, opacity: 1, transition: { duration: (duration - 900) / 1000 } },
    out: { pathLength: 1, opacity: 0, transition: { duration: 0.45 } },
  };

  const overlayVariants = {
    initial: { opacity: 1 },
    draw: { opacity: 1 },
    hold: { opacity: 1 },
  out: { opacity: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={overlayVariants}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
      style={{ willChange: "opacity" }}
    >
      <motion.div variants={logoVariants} className="flex flex-col items-center gap-4">
        <motion.svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="60"
            cy="60"
            r="42"
            stroke="#A3E635"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={circlePath}
            initial="initial"
            animate={controls}
            style={{ rotate: -10, originX: "50%", originY: "50%" }}
          />
          {/* inner mark: simple diagonal bar that fades in */}
          <motion.rect
            x="50"
            y="30"
            width="12"
            height="60"
            rx="6"
            fill="#A3E635"
            initial={{ opacity: 0, y: 6 }}
            animate={controls}
            variants={{
              draw: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              hold: { opacity: 1 },
              out: { opacity: 0, transition: { duration: 0.35 } },
            }}
          />
        </motion.svg>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={controls}
          variants={{
            draw: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            hold: { opacity: 1 },
            out: { opacity: 0, transition: { duration: 0.35 } },
          }}
          className="text-sm text-gray-300 tracking-widest"
        >
          FESTIVAL MOTION
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
