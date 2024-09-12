import { useEffect, useState } from "react";

import styles from "./styles/profile.module.css";

import profile_img from "../../../utils/image/profile_ian.jpg";

function Profile() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  function handleResize() {
    setIsSmallScreen(window.innerWidth <= 770);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.profile}>
      <h1 className={styles.title}>ABOUT ME</h1>
      <div
        className={
          isSmallScreen
            ? styles.small_screen_outer_info
            : styles.big_screen_outer_info
        }
      >
        <div
          className={
            isSmallScreen ? styles.small_screen_info : styles.big_screen_info
          }
        >
          <div className={styles.profile_img}>
            <img src={profile_img} alt="profile_img" />
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
            isSmallScreen ? styles.small_screen_link : styles.big_screen_link
          }
        >
          <a href={process.env.REACT_APP_BLOG}>블로그</a>
          <a href={process.env.REACT_APP_RESUME}>이력서</a>
          <a href={process.env.REACT_APP_GITHUB}>깃허브</a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
