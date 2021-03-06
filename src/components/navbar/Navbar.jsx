import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const token = useSelector((state) => {
    if (state.hReducer.token) return state.hReducer.token;
    else return state.sReducer.token;
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
          <div className={styles.logo}>HRM</div>
          {!token && (
            <ul className={`${open ? styles.open : ""} ${styles.navUl}`}>
              <li className={styles.navLi}>
                <Link to='/signin' className={styles.navLinks}>
                  Sign in
                </Link>
              </li>
              <li className={styles.navLi}>
                <Link to='/register' className={styles.navLinks}>
                  Get Started
                </Link>
              </li>
            </ul>
          )}
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
