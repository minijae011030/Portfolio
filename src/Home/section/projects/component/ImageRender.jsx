import styles from "../styles/projects.module.css";

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

export default ImageRender;
