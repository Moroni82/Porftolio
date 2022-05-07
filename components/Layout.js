import Footer from "components/Footer";
import Navbar from "components/NavBar";
import Sidebar from "components/Sidebar";
import React from "react";
import styles from "styles/Layout.module.css";

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
