import styles from "../styles/Home.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <p>ABOUT ME</p>
      <p>강민재</p>
      <p>{process.env.REACT_APP_PHONE}</p>
      <p>{process.env.REACT_APP_EMAIL}</p>
      <a href={process.env.REACT_APP_BLOG}>블로그</a>
      <a href={process.env.REACT_APP_RESUME}>이력서</a>
      <a href={process.env.REACT_APP_GITHUB}>깃허브</a>
    </div>
  );
}

export default Profile;
