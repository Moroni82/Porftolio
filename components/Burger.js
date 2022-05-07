import Image from "next/image";
import React from "react";
import styles from "styles/Home.module.css";

const Burger = ({ isOpen, toggle, controlsId }) => {
  return (
    <button
      className={styles.burger}
      onClick={toggle}
      data-open={isOpen}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      aria-label="Menu"
    >
      <Image src="/menu.png" alt="menu-icon" width={20} height={20} />
    </button>
  );
};

export default Burger;
