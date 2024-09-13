import styles from "./styles/projects.module.css";

import data from "../../../utils/data/project.json";

import ImageRender from "./component/ImageRender";

function Project({ project_index, SlidesToShow, isSmallScreen }) {
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
      <div
        className={
          isSmallScreen
            ? styles.small_screen_project_description
            : styles.project_description
        }
      >
        <div className={styles.left_description}>
          <p className={styles.project_name}>{project.project_name}</p>
          <p className={styles.project_simple_description}>
            {project.project_description}
          </p>
          <p className={styles.project_duration}>{project.project_duration}</p>
          <p className={styles.project_composition}>
            {project.project_composition}
          </p>
          <a href={project.github_url} className={styles.github_url}>
            GitHub 링크
          </a>
          <div className={styles.skills}>
            {project_skill.map((skill, index) => {
              return (
                <div key={index}>
                  <p>{skill}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.right_description}>
          {project_main_task.map((task, index) => {
            return (
              <div className={styles.project_main_task} key={index}>
                <p>{task}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Projects({ isSmallScreen }) {
  return (
    <div className={styles.projects}>
      <p className={styles.title}>PROJECT</p>
      <Project
        project_index={0}
        SlidesToShow={1}
        isSmallScreen={isSmallScreen}
      />
      <Project
        project_index={1}
        SlidesToShow={3}
        isSmallScreen={isSmallScreen}
      />
      <Project
        project_index={2}
        SlidesToShow={3}
        isSmallScreen={isSmallScreen}
      />
      <hr />
    </div>
  );
}

export default Projects;
