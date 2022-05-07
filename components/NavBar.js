import clsx from "clsx";
import Burger from "components/Burger";
import useMenu from "hooks/useMenu";
import Link from "next/link";
import React from "react";
import styles from "styles/Home.module.css";

const Navbar = () => {
  const { toggle, isOpen, isDesktop } = useMenu();

  const NavListClassNames = clsx(styles.navigation, {
    [styles.hidden]: !isOpen && !isDesktop,
  });

  return (
    <header className={styles.navbar}>
      <div className={styles.myname}>
        <Link href="/">
          <a>Agustin Moroni</a>
        </Link>
      </div>
      <nav className={styles.navContainer}>
        {!isDesktop && (
          <Burger
            id="navbutton"
            isOpen={isOpen}
            toggle={toggle}
            controlsId="navlist"
          />
        )}
        <ul className={NavListClassNames} id="navlist">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#my-work">My work</a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
