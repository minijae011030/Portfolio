import styles from "../styles/Home.module.css";
import projects from "../../utils/data/project.json";

function Projects() {
  return (
    <div className={styles.projects}>
      <p>projects</p>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <p>{project.project_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
