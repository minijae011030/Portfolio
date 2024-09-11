import { useState } from "react";
import styles from "../styles/Home.module.css";

import data from "../../utils/data/project.json";

function Project({ project_index, max_length }) {
  const project_image = data[project_index].project_image;
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
    <div>
      {project_image.map((project, index) => {
        return (
          <div
            key={index}
            className={index === imageIndex ? styles.image : styles.hidden}
          >
            <img
              src={`${process.env.REACT_APP_FIREBASE}/${project.url}`}
              key={index}
              style={{ width: 300 }}
              alt=""
            />
            <p>{project.name}</p>
            <p>{project.description}</p>
          </div>
        );
      })}
      <div className={styles.slide_button}>
        <button onClick={() => subtractImageIndex()}>{"<"}</button>
        <div className={styles.dots}>
          {project_image.map((_, index) => {
            return (
              <div
                className={
                  index === imageIndex ? styles.chosen : styles.not_chosen
                }
                key={index}
              />
            );
          })}
        </div>
        <button onClick={() => addImageIndex()}>{">"}</button>
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
