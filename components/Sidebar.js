import React from 'react'
import styles from '../styles/Home.module.css'


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.socialmedia}>
      <i class="fa-brands fa-linkedin-in"></i>
      <i class="fa-brands fa-github"></i>
      <i class="fa-brands fa-instagram"></i>
      </div>  
    </div>
  )
}

export default Sidebar;
