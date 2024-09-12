import styles from "../styles/projects.module.css";

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

export default SlideControls;
