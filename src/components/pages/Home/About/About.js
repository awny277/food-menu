import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } from "react-icons/hi";
import ReactStars from "react-stars";
import { Partners } from "../../../json/Products";
// import ReactStars from 'react-stars'
import styles from "../../../styles/About.module.css";

const About = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  const dataPartners = Partners.map((ele, idx) => {
    return (
      <Col md={4} key={idx}>
        <div className={styles.Partners_content}>
          <div className={styles.content}>
            <div className={styles.image_container}>
              <img src={`./images/${ele.image}`} alt={ele.name} />
              <div className={styles.stars}>
                <ReactStars
                  count={ele.stars}
                  onChange={ratingChanged}
                  size={24}
                  color2={"#ffd700"}
                  value={ele.stars}
                />
              </div>
            </div>
            <p>{ele.info}</p>
          </div>
          <div className={styles.icons}>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Col>
    );
  });
  return (
    <div className={styles.about} id="about">
      <Container fluid>
        <div className={styles.header}>
          <h2>Abouts Us</h2>
          <span>
            <HiOutlineArrowSmLeft />
            <HiOutlineArrowSmRight />
          </span>
        </div>
        <Row className={styles.center}>{dataPartners}</Row>
      </Container>
    </div>
  );
};

export default About;
