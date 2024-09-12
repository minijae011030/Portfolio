import Slider from "react-slick";
import styles from "../styles/projects.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageRender({ project_image, SlidesToShow }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: SlidesToShow,
    slidesToScroll: SlidesToShow,
  };

  if (project_image) {
    return (
      <Slider {...settings}>
        {project_image.map((img, index) => {
          return (
            <div key={index}>
              <img
                src={`${process.env.REACT_APP_FIREBASE}/${img.url}`}
                className={styles.image}
                alt={index}
              />
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default ImageRender;
