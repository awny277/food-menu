import React from "react";
import { Container } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { BsBagDash } from "react-icons/bs";
import styles from "../../styles/NavBar.module.css";
const Navbar = () => {
  return (
    <div className={styles.navber}>
      <Container>
        <div className={styles.content}>
          <h2>
            Food <br /> <span>Empire</span>
          </h2>
          <div className={styles.Links}>
            <span>Favorite Fruits</span>
            <span>Fruit Shoop</span>
            <span>About Us</span>
            <div className={styles.icons}>
              <span>
                <BiLogIn />
              </span>
              <span>
                <BsBagDash />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
