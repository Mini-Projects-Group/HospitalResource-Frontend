import React, { useState, useRef } from "react";
import styles from "./Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { BsListOl } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const selectedStyle = {
    main: {
      backgroundColor: "#1c1e36",
    },

    textColor: {
      color: "white",
    },
  };

  const myL = useRef("/dashboard");
  const selected = useRef(0);

  const dispatch = useDispatch();

  const handleLogout = () => {};

  myL.current = useLocation().pathname;

  switch (myL.current) {
    case "/dashboard":
      selected.current = 0;
      break;

    case "/orders":
      selected.current = 1;
      break;

    case "/algorithm":
      selected.current = 3;
      break;

    case "/logout":
      selected.current = 4;
      break;

    default:
      break;
  }

  return (
    <div className={styles.root}>
      <Link
        to='/dashboard'
        className={styles.main}
        style={selected.current === 0 ? selectedStyle.main : null}
      >
        <div
          className={styles.iconDiv}
          style={selected.current === 0 ? selectedStyle.textColor : null}
        >
          <AiOutlineHome size={35} />
        </div>
        <div
          className={styles.textDiv}
          style={selected.current === 0 ? selectedStyle.textColor : null}
        >
          Dashboard
        </div>
      </Link>

      <Link
        to='/orders'
        className={styles.main}
        style={selected.current === 1 ? selectedStyle.main : null}
      >
        <div
          className={styles.iconDiv}
          style={selected.current === 1 ? selectedStyle.textColor : null}
        >
          <BsListOl size={35} />
        </div>
        <div
          className={styles.textDiv}
          style={selected.current === 1 ? selectedStyle.textColor : null}
        >
          Orders
        </div>
      </Link>

      <Link
        to='/logout'
        className={`${styles.main} ${styles.logout}`}
        style={selected.current === 4 ? selectedStyle.main : null}
        onClick={handleLogout}
      >
        <div
          className={styles.iconDiv}
          style={selected.current === 4 ? selectedStyle.textColor : null}
        >
          <BiLogOutCircle size={35} />
        </div>
        <div
          className={styles.textDiv}
          style={selected.current === 4 ? selectedStyle.textColor : null}
        >
          Log Out
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
