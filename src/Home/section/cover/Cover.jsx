import React from "react";
import { ParallaxText } from "./ParallaxText";
import styles from "./styles/cover.module.css";

function Cover() {
  return (
    <div className={styles.cover}>
      <div className={styles.parallaxWrapper}>
        <ParallaxText baseVelocity={-3}>FRONTEND DEV</ParallaxText>
      </div>

      <div className={styles.parallaxWrapper}>
        <ParallaxText baseVelocity={3}>KANG MINJAE</ParallaxText>
      </div>
    </div>
  );
}

export default Cover;
