import React from "react";
import styles from "../styles/Home.module.css";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.footerDivisor}></div>
      <div className={styles.FooterBox}>
        <div className={styles.footerCopy}>
          <h4>Chuleta</h4>
          <p> © - Agustin Moroni</p>
          <p> Built with Next.js and Css </p>
        </div>
        <div className={styles.footerContact}>
          <div className={styles.footerConnect}>
            <h4>Connect</h4>
            <div className={styles.futdiv}></div>
            <ul>
              <li>
                <a>instagram</a>
              </li>
              <li>
                <a>linkedin</a>
              </li>
              <li>
                <a>github</a>
              </li>
            </ul>
          </div>
          <div className={styles.footerPages}>
            <h4>Pages</h4>
            <div className={styles.futdiv}></div>
            <ul>
              <li>
                <a>About me</a>
              </li>
              <li>
                <a>My Work</a>
              </li>
              <li>
                <a>Stack</a>
              </li>
              <li>
                <a>Contact me</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
