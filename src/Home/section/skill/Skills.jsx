import { useEffect } from "react";
import styles from "./styles/skill.module.css";

import AOS from "aos";
import "aos/dist/aos.css";

import data from "../../../utils/data/skill.json";

function Skill({ skill }) {
  const ability = skill.ability;

  return (
    <div className={styles.skill}>
      <p className={styles.skill_name}>{skill.skill}</p>
      <div className={styles.ability}>
        {ability.map((ab, index) => {
          return <p key={index}>{ab}</p>;
        })}
      </div>
    </div>
  );
}

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.skills}>
      <p className={styles.title}>SKILL</p>

      {data.map((skill, index) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-offset="230"
            data-aos-duration="500"
            key={index}
          >
            <Skill skill={skill} />
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
