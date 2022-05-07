import React from "react";
import styles from "styles/Home.module.css";

const FrontPage = () => {
  return (
    <div className={styles.frontContainer}>
      <div className={styles.intro}>
        <p>/ Intro </p>
        <h1 className={styles.invi}>Agustin Moroni</h1>
        <h1>
          Junior Full-stack web developer, currently searching for my first IT
          job.
        </h1>
      </div>
    </div>
  );
};

export default FrontPage;
