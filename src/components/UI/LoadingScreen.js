import styles from "./LoadingScreen.module.css";
import React from "react";

const LoadingScreen = () => {
  console.log("loading screen should work");
  return (
    <div className={styles.ldsFacebook}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingScreen;
