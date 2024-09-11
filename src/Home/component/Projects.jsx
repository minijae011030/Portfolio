import styles from "../styles/Home.module.css";
import Antiheimer from "./Antiheimer";
import Archive from "./Archive";
import Petfinity from "./Petfinity";

function Projects() {
  return (
    <div className={styles.projects}>
      <p>projects</p>
      <Archive />
      <Petfinity />
      <Antiheimer />
      <hr />
    </div>
  );
}

export default Projects;
