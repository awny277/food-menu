import React from "react";
import { Container, Row } from "react-bootstrap";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";

import styles from "../../../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <Container>
        <div className={styles.header}>
          <h2>Abouts Us</h2>
          <span>
            <HiOutlineArrowSmLeft />
            <HiOutlineArrowSmRight />
          </span>
        </div>
        {/* <Row>{data}</Row> */}
      </Container>
    </div>
  );
};

export default About;
