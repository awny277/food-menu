import React from "react";
import ProductCard from "../../Layout/ProductCard/ProductCard";
// import styles from "../../styles/Home.module.css";
import About from "./About/About";
import Favoutrie from "./Favoutrie/Favoutrie";
import FruiteShop from "./FruiteShop/FruiteShop";
import Header from "./Header/Header";
import Subscribe from "./Subscribe/Subscribe";
const Home = () => {
  return (
    <>
      <Header />
      <Favoutrie />
      <ProductCard />
      <FruiteShop />
      <About />
      <Subscribe />
    </>
  );
};

export default Home;
