import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
import {
  login_hospital,
  signup_hospital,
  signup_seller,
  login_seller,
} from "../../redux";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login_seller("abc@g.com", "qwerty123"));
    // dispatch(
    //   signup_seller(
    //     "My Shop",
    //     "Abcd",
    //     "ab@g.com",
    //     "qwerty",
    //     "Powai,Mumbai",
    //     898788888
    //   )
    // );
  });

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <header className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src="/images/logo.png" className={styles.logoImg} />
          </div>
          <ul className={`${open ? styles.open : ""} ${styles.navUl}`}>
            <li className={styles.navLi}>
              <Link to="/signin" className={styles.navLinks}>
                Sign in
              </Link>
            </li>
            <li className={styles.navLi}>
              <Link to="/register" className={styles.navLinks}>
                Get Started
              </Link>
            </li>
          </ul>
          <div
            className={styles.hamContainer}
            onClick={() => {
              setOpen((prevState) => !prevState);
            }}
          >
            <div
              className={`${open ? styles.openHamburger : ""} ${
                styles.hamburger
              }`}
            ></div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
