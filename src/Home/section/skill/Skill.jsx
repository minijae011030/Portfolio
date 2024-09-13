import { useEffect } from "react";
import styles from "./styles/skill.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

function Skill({ isSmallScreen }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.skills}>
      <p className={styles.title}>SKILL</p>
      <div
        data-aos="fade-up"
        data-aos-offset="230"
        data-aos-duration="500"
        className={styles.skill}
      >
        contents
      </div>
    </div>
  );
}

export default Skill;
