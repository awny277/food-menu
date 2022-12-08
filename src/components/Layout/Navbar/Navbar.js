import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { BsBagDash } from "react-icons/bs";
import { RiMenu4Line } from "react-icons/ri";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../../styles/NavBar.module.css";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const navLinkStyles = ({ isActive }) => {
  //   return {
  //     fontWeight: isActive ? "bold" : "500",
  //     color: isActive ? "#274160" : "#000",
  //     fontSize: isActive ? "22px" : "21px",
  //   };
  // };
  return (
    <>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <h2 className={styles.heading}>
              Food <br /> <span>Empire</span>
            </h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className={styles.Offcontent}>
            <div className={styles.OffLinks}>
              <a href="/#favorite">Favorite Fruits</a>
              <a href="/#fruiteShop">Fruit Shoop</a>
              <a href="/#about">About Us</a>
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
        </Offcanvas.Body>
      </Offcanvas>
      <div className={styles.navber}>
        <Container>
          <div className={styles.content}>
            <h2>
              Food <br /> <span>Empire</span>
            </h2>
            <button name="menu" className={styles.menu} onClick={handleShow}>
              <RiMenu4Line />
            </button>
            <div className={styles.Links}>
              <a href="/#favorite">Favorite Fruits</a>
              <a href="/#fruiteShop">Fruit Shoop</a>
              <a href="/#about">About Us</a>
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
    </>
  );
};

export default Navbar;
