import { Outlet } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const { scrollYProgress: globalProgress } = useScroll();
  const globalScaleX = useTransform(globalProgress, [0, 1], [0, 1]);

  return (
    <div>
      <Navbar />
      <div className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          style={{ scaleX: globalScaleX, transformOrigin: "0 50%" }}
          className="h-2 bg-yellow-400 origin-left w-full"
        />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
