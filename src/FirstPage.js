import React from "react";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.logo}><img src="https://png.pngtree.com/template/20190313/ourmid/pngtree-hospital-logo-image_67149.jpg"></img></div>
        <nav className={styles.nav}>
          <ul>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Contact</li>
          </ul>
        </nav>
        <div className={styles.menu}>
          <i className="fa fa-bars"></i>
        </div>
      </header>
      <div className={styles.hero}>
        <div className={styles.heroImg}>
          <img
            src="https://img.freepik.com/free-vector/hospital-building-concept-illustration_114360-8440.jpg?w=740&t=st=1683561483~exp=1683562083~hmac=cc21899be5d713e8cc284f35497b2bb303755f7468caaa67760f091330db4185"
            alt="Hero Image"
          />
        </div>
        <div className={styles.heroData}>
          <h1>Health Care Centrenp</h1>
          <p></p>
          
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
