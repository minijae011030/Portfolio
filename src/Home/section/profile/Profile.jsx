import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./styles/profile.module.css";

import profile_img from "../../../utils/image/profile_ian.jpg";

function Profile({ isSmallScreen }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>ABOUT ME</h1>
      <div
        className={
          // isSmallScreen
          //   ?
          styles.small_screen_outer_info
          // : styles.big_screen_outer_info
        }
        data-aos="fade-up"
        data-aos-offset="230"
        data-aos-duration="500"
      >
        <div
          className={
            // isSmallScreen ?
            styles.small_screen_info
            // : styles.big_screen_info
          }
        >
          <div className={styles.profile_img_wrap}>
            <div className={styles.profile_img}>
              <img src={profile_img} alt="profile_img" />
            </div>
          </div>
          <div className={styles.text}>
            <p className={styles.name}>강민재</p>
            <p className={styles.university}>Sejong Univ.</p>
            <p className={styles.email}>{process.env.REACT_APP_EMAIL}</p>
            <p className={styles.phone}>{process.env.REACT_APP_PHONE}</p>
          </div>
        </div>
        <div
          className={
            // isSmallScreen ?
            styles.small_screen_link
            // : styles.big_screen_link
          }
        >
          <a href={process.env.REACT_APP_BLOG}>BLOG</a>
          <a href={process.env.REACT_APP_RESUME}>RESUME</a>
          <a href={process.env.REACT_APP_GITHUB}>GITHUB</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
