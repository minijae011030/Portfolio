import data from "../../utils/data/project.json";

function Archive() {
  const project_image = data[0].project_image;

  return project_image.map((project, index) => {
    return (
      <div key={index}>
        <p>{project.name}</p>
        <p>{project.description}</p>
        <img
          src={`${process.env.REACT_APP_FIREBASE}/${project.url}`}
          key={index}
          style={{ width: 300 }}
          alt=""
        />
      </div>
    );
  });
}

export default Archive;
