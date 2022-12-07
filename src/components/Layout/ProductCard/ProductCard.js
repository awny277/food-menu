import React, { useEffect, useState } from "react";
import styles from "../../styles/ProductCard.module.css";
// import image from "../../../images/Rectangle 19.svg";
const ProductCard = ({ item }) => {
  // const testImage = import(`../../../images/Rectangle 19.svg`).then(
  //   (data) => data
  // );
  // const [image, setImage] = useState(null);
  // useEffect(() => {
  //   if (!image) {
  //     item &&
  //       import(`../../../images/${item.image}`).then((img) => {
  //         setImage(img);
  //         console.log(img);
  //       });
  //   }
  // }, [image, item]);

  const [count, setCount] = useState(1);
  const Product = item && (
    <div className={styles.product_Card}>
      <div className={styles.Image_container}>
        <img src={`./images/${item.image}`} alt={item.name} />
      </div>
      <div className={styles.content}>
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        <div className={styles.price}>
          <h6>{item.priceAfter}$</h6>
          <del>{item.pricePefor}$</del>
        </div>
        <div className={styles.buySection}>
          <div className={styles.counter}>
            <button
              name="decress"
              onClick={() => {
                if (count > 1) {
                  setCount((state) => state - 1);
                }
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              name="incress"
              onClick={() => {
                setCount((state) => state + 1);
              }}
            >
              +
            </button>
          </div>
          <button name="bynow" className={styles.buyBtn}>
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
  return <>{Product}</>;
};

export default ProductCard;
