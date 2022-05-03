import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import useMenu from "../hooks/useMenu";

const Navbar = () => {
  const { toggle, isOpen } = useMenu();

  return (
    <div className={styles.navbar}>
      <div className={styles.myname}>
        <a>Agustin Moroni</a>
      </div>
      <div className={styles.navContainer}>
        <input
          type="checkbox"
          id="check"
          className={styles.check}
          checked={isOpen}
          onChange={toggle}
        />
        <label htmlFor="check" className={styles.checkBtn} aria-label="Menu">
          <div className={styles.menuIcon}>
            <Image src="/menu.png" alt="menu-icon" width={20} height={20} />
          </div>
        </label>
        <ul className={styles.navigation}>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>My work</a>
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
  );
};

export default Navbar;
