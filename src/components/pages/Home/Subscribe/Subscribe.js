import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import styles from "../../../styles/Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.Subscribe}>
      <Container fluid>
        <Row className={styles.center}>
          <Col md={2}>
            <h2 className={styles.sub_heading}>Subscribe to newsletter</h2>
          </Col>
          <Col md={7}>
            <div className={styles.input_section}>
              <input type="text" placeholder="Subscribe" />
              <button name="Subscribe">Subscribe</button>
            </div>
          </Col>
          <Col md={3}>
            <div className={styles.Social_Media}>
              <h5>Social Media</h5>
              <div className={styles.links}>
                <AiFillInstagram />
                <FaFacebookSquare />
                <FaTwitterSquare />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;
