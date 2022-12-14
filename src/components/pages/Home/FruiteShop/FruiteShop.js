import React from "react";
import styles from "../../../styles/Favoutrie.module.css";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../../../Layout/ProductCard/ProductCard";
import { FruitProducts } from "../../../json/Products";
const FruiteShop = () => {
  const data = FruitProducts.map((ele, idx) => {
    return (
      <Col sm={6} md={3} key={idx}>
        <ProductCard item={ele} />
      </Col>
    );
  });
  return (
    <>
      <div className={styles.Favoutrie} id="fruiteShop">
        <Container fluid>
          <div className={styles.header}>
            <h2>Favorite Shop</h2>
            <span>
              more
              <HiOutlineArrowSmRight />
            </span>
          </div>
          <Row>{data}</Row>
        </Container>
      </div>
    </>
  );
};

export default FruiteShop;
