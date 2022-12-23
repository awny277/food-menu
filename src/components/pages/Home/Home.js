import React, { Suspense } from "react";
// import ProductCard from "../../Layout/ProductCard/ProductCard";
// import About from "./About/About";
// import Favoutrie from "./Favoutrie/Favoutrie";
// import FruiteShop from "./FruiteShop/FruiteShop";
// import Header from "./Header/Header";
// import Subscribe from "./Subscribe/Subscribe";
const ProductCard = React.lazy(() =>
  import("../../Layout/ProductCard/ProductCard")
);
const About = React.lazy(() => import("./About/About"));
const Favoutrie = React.lazy(() => import("./Favoutrie/Favoutrie"));
const FruiteShop = React.lazy(() => import("./FruiteShop/FruiteShop"));
const Header = React.lazy(() => import("./Header/Header"));
const Subscribe = React.lazy(() => import("./Subscribe/Subscribe"));
const Home = () => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Header />
        <Favoutrie />
        <ProductCard />
        <FruiteShop />
        <About />
        <Subscribe />
      </Suspense>
    </>
  );
};

export default Home;
