import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { login_hospital } from "../../redux/hospital/action";
import { login_seller } from "../../redux/seller/action";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(login_seller("seller@g.com", "qwerty"));
  // }, [dispatch]);

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
            <li className={styles.navLi}>
              <Link to="/seller_dashboard" className={styles.navLinks}>
                SB
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
