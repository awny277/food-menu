import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Header.module.css";
import Rectangle3 from "../../../../images/Rectangle 3.webp";
import Rectangle4 from "../../../../images/Rectangle 4.delete my project";
import image2 from "../../../../images/pngwing 1.delete my project";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Header = () => {
  return (
    <div className={styles.Home_Header}>
      <div className={styles.rightLinks}>
        <AiFillInstagram />
        <FaFacebookSquare />
        <FaTwitterSquare />
      </div>
      <Container>
        <Row className={styles.center}>
          <Col md={3}>
            <div className={styles.section_1}>
              <h3>
                <span>01</span>/02
              </h3>
              <h3>Ananas</h3>
              <p className={styles.P_opcity}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </Col>
          <Col md={5}>
            <div className={styles.image_container}>
              <img src={image2} alt="pngwing" />
            </div>
          </Col>
          <Col md={4}>
            <div className={styles.section_2}>
              <h1>
                Fruit <span>Fruit Mania</span> Delivery
              </h1>
              <p className={styles.P_opcity}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.Header_slick}>
        <Container fluid>
          <Row className={styles.center}>
            <Col md={6}>
              <div className={styles.Slick}>
                <div className={styles.image_container}>
                  <img src={Rectangle3} alt="slick1" />
                </div>
                <div className={styles.info}>
                  <div className={styles.content}>
                    <div className={styles.slick_name}>
                      <h5>Orange</h5>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.discount}>
                        <h4>39$</h4>
                        <del>59$</del>
                      </div>
                      <button name="buy" className={styles.ByBtn}>
                        {" "}
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <p>Amet minim mollit non deserunt ullamco </p>
                  <div className={styles.slickDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className={styles.Slick}>
                <div className={styles.image_container}>
                  <img src={Rectangle4} alt="slick1" />
                </div>
                <div className={styles.info}>
                  <div className={styles.content}>
                    <div className={styles.slick_name}>
                      <h5>Melons</h5>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint.
                      </p>
                    </div>
                    <div className={styles.price}>
                      <div className={styles.discount}>
                        <h4>39$</h4>
                        <del>59$</del>
                      </div>
                      <button name="buy" className={styles.ByBtn}>
                        {" "}
                        BUY NOW
                      </button>
                    </div>
                  </div>
                  <p>Amet minim mollit non deserunt ullamco </p>
                  <div className={styles.slickDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Header;
