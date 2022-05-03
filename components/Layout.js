import React from "react";
import Navbar from "./NavBar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className={styles.static}>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
