import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

import Cover from "./section/cover/Cover";
import Profile from "./section/profile/Profile";
import Projects from "./section/projects/Projects";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const { scrollYProgress } = useScroll();

  function handleResize() {
    setIsSmallScreen(window.innerWidth <= 770);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          height: 3,
          backgroundColor: "#95FF00",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          transformOrigin: "left",
          zIndex: 1000,
        }}
      />

      <Cover />
      <Profile isSmallScreen={isSmallScreen} />
      <Projects isSmallScreen={isSmallScreen} />
    </>
  );
}

export default Home;
