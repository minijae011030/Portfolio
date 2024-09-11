import data from "../../utils/data/project.json";

function Antiheimer() {
  const project_image = data[2].project_image;

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

export default Antiheimer;
