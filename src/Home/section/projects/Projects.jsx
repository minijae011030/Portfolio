import styles from "./styles/projects.module.css";

import data from "../../../utils/data/project.json";

import ImageRender from "./component/ImageRender";

function Project({ project_index, SlidesToShow }) {
  const project = data[project_index];

  const project_image = project.project_image;
  const project_skill = project.skills;
  const project_main_task = project.main_tasks;

  return (
    <div className={styles.project}>
      <div className={styles.project_image_box}>
        <ImageRender
          project_image={project_image}
          SlidesToShow={SlidesToShow}
        />
      </div>
      <div className={styles.project_description}>
        <p>{project.project_name}</p>
        <p>{project.project_description}</p>
        <p>{project.project_duration}</p>
        <p>{project.project_composition}</p>
        <p>{project.github_url}</p>
        {project_skill.map((skill, index) => {
          return (
            <div key={index}>
              <p>{skill}</p>
            </div>
          );
        })}
        {project_main_task.map((task, index) => {
          return (
            <div key={index}>
              <p>{task}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className={styles.projects}>
      <p>projects</p>
      <Project project_index={0} SlidesToShow={1} />
      <Project project_index={1} SlidesToShow={3} />
      <Project project_index={2} SlidesToShow={3} />
      <hr />
    </div>
  );
}

export default Projects;
