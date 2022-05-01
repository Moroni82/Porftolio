import React from 'react'
import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.myname}>
       <a>Agustin Moroni</a>
      </div>
      <div className={styles.navigation}>
        <a>About</a>
        <a>My work</a>
        <a>Stack</a>
        <a>Contact me</a>
      </div>
        
    </div>
  )
}

export default Navbar;
