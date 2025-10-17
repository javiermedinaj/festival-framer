import { useRef, useState, useEffect } from "react";
import Hero from "../components/Hero";
import TextInfo from "../components/TextInfo";
import PlayList from "../components/PlayList";
import Merch from "../components/Merch";
import Schedules from "../components/Schedules";
import LoaderGsap from "../components/Loader/LoaderGsap";

const Home = () => {
  const textInfoRef = useRef<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (!hasSeenLoader) {
      setLoading(true);
    }
  }, []);

  const handleLoaderFinish = () => {
    setLoading(false);
    sessionStorage.setItem('hasSeenLoader', 'true');
  };

  return (
    <>
      {loading && <LoaderGsap onFinish={handleLoaderFinish} />}
      <Hero />
      <div ref={textInfoRef as any}>
      <TextInfo />
      </div>
      <Schedules />
      <Merch />
      <PlayList />
    </>
  );
};

export default Home;
