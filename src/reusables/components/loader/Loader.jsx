import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.main}>
      <div className={styles.root}>
        <div className=''></div>
        <div className=''></div>
      </div>
    </div>
  );
};

export default Loader;
