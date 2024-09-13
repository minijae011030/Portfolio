import styles from "./styles/skill.module.css";

import data from "../../../utils/data/skill.json";

function Skill({ skill }) {
  const ability = skill.ability;

  return (
    <div className={styles.skill}>
      <div className={styles.skill_name}>
        <img
          alt="logo"
          src={`${process.env.REACT_APP_FIREBASE}/${skill.logo}`}
        />
        <p>{skill.skill}</p>
      </div>
      <div className={styles.ability}>
        {ability.map((ab, index) => {
          return <p key={index}>{ab}</p>;
        })}
      </div>
    </div>
  );
}

function Skills() {
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
