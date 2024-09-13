import { useEffect, useState } from "react";

import Cover from "./section/cover/Cover";
import Profile from "./section/profile/Profile";
import Projects from "./section/projects/Projects";

function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResize() {
    setIsSmallScreen(window.innerWidth <= 770);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Cover />
      <Profile isSmallScreen={isSmallScreen} />
      <Projects isSmallScreen={isSmallScreen} />
    </div>
  );
}

export default Home;
