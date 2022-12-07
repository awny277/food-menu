import React from "react";
import ProductCard from "../../Layout/ProductCard/ProductCard";
import styles from "../../styles/Home.module.css";
import Favoutrie from "./Favoutrie/Favoutrie";
import FruiteShop from "./FruiteShop/FruiteShop";
import Header from "./Header/Header";
const Home = () => {
  return (
    <>
      <Header />
      <Favoutrie />
      <ProductCard />
      <FruiteShop />
    </>
  );
};

export default Home;
