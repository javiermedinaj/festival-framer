import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TextInfo from "./components/TextInfo";
import PlayList from "./components/PlayList";
import Footer from "./components/Footer";
import Merch from "./components/Merch";
import Schedules from "./components/Schedules";
import LoaderGsap from "./components/Loader/LoaderGsap";
import { useState } from "react";

function App() {
  const textInfoRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: globalProgress } = useScroll();
  const globalScaleX = useTransform(globalProgress, [0, 1], [0, 1]);

  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && <LoaderGsap onFinish={() => setLoading(false)} />}
      <Navbar />
      <Hero />
      <div className="fixed top-0 left-0 right-0 z-50">
        <motion.div
          style={{ scaleX: globalScaleX, transformOrigin: "0 50%" }}
          className="h-2 bg-yellow-400 origin-left w-full"
        />
      </div>
      <div ref={textInfoRef as any}>
        <TextInfo />
      </div>
      <Schedules />
      <Merch />
      <PlayList />
      <Footer />
    </div>
  );
}

export default App;
