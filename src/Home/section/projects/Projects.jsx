import { useState } from "react";
import styles from "./styles/projects.module.css";

import data from "../../../utils/data/project.json";

import ImageRender from "./component/ImageRender";
import SlideControls from "./component/SlideControls";

function Project({ project_index, max_length }) {
  const project = data[project_index];
  const project_image = project.project_image;
  const project_skill = project.skills;
  const project_main_task = project.main_tasks;
  const [imageIndex, setImageIndex] = useState(0);

  function addImageIndex() {
    setImageIndex((prev) => prev + 1);
    if (imageIndex >= max_length) {
      setImageIndex(0);
    }
  }

  function subtractImageIndex() {
    setImageIndex((prev) => prev - 1);
    if (imageIndex <= 0) {
      setImageIndex(max_length);
    }
  }

  return (
    <div className={styles.project}>
      <div className={styles.project_image}>
        <ImageRender project_image={project_image} imageIndex={imageIndex} />
        <SlideControls
          imageIndex={imageIndex}
          project_image={project_image}
          addImageIndex={addImageIndex}
          subtractImageIndex={subtractImageIndex}
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
      <Project project_index={0} max_length={4} />
      <Project project_index={1} max_length={7} />
      <Project project_index={2} max_length={4} />
      <hr />
    </div>
  );
}

export default Projects;
