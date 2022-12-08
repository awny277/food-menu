import React from "react";
import styles from "../../../styles/Favoutrie.module.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../../Layout/ProductCard/ProductCard";
import { FavoutiteProducts } from "../../../json/Products";

const Favoutrie = () => {
  const data = FavoutiteProducts.map((ele, idx) => {
    return (
      <Col md={3} key={idx}>
        <ProductCard item={ele} />
      </Col>
    );
  });
  return (
    <div className={styles.Favoutrie} id="favorite">
      <Container fluid>
        <div className={styles.header}>
          <h2>Favorite Fruits</h2>
          <span>
            more
            <HiOutlineArrowSmRight />
          </span>
        </div>
        <Row>{data}</Row>
      </Container>
    </div>
  );
};

export default Favoutrie;
