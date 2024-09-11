import { useState } from "react";
import styles from "../styles/Home.module.css";

import data from "../../utils/data/project.json";

function ImageRender({ project_image, imageIndex }) {
  return (
    <div>
      {project_image.map((project, index) => (
        <div
          key={index}
          className={index === imageIndex ? styles.image : styles.hidden}
        >
          <img
            src={`${process.env.REACT_APP_FIREBASE}/${project.url}`}
            style={{ width: 300 }}
            alt={project.name}
          />
          <p>{project.name}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

function SlideControls({
  imageIndex,
  project_image,
  addImageIndex,
  subtractImageIndex,
}) {
  return (
    <div className={styles.slide_button}>
      <button onClick={subtractImageIndex}>{"<"}</button>
      <div className={styles.dots}>
        {project_image.map((_, index) => (
          <div
            key={index}
            className={index === imageIndex ? styles.chosen : styles.not_chosen}
          />
        ))}
      </div>
      <button onClick={addImageIndex}>{">"}</button>
    </div>
  );
}

function Project({ project_index, max_length }) {
  const project = data[project_index];
  const project_image = project.project_image;
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
