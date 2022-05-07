import React from "react";
import styles from "styles/Home.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.socialmedia}>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.github.com"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com"
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
