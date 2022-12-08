import React from "react";
import styles from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>
        Food <br /> <span>Empire</span>
      </h2>
      <span className={styles.link}>Best Fruits</span>
      <span className={styles.link}>Social Media</span>
      <span className={styles.link}>More for You</span>
      <span className={styles.link}>YourShoop</span>
      <span className={styles.link}>
        The Copyright 2022 guide covers 14 jurisdictions.{" "}
      </span>
    </footer>
  );
};

export default Footer;
