import React, { useState, useRef } from "react";
import styles from "./Sidebar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { BsListOl } from "react-icons/bs";
import { useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { H_LOGOUT_SUCCESS } from "../../redux/hospital/types";
import { S_LOGOUT_SUCCESS } from "../../redux/seller/types";

const Sidebar = () => {
  const selectedStyle = {
    main: {
      backgroundColor: "#1c1e36",
    },

    textColor: {
      color: "white",
    },
  };

  const urlPrefix =
    localStorage.getItem("type") === "seller"
      ? "/auth/seller_"
      : "/auth/hospital_";

  const userType = localStorage.getItem("type");

  const myL = useRef("/dashboard");
  const selected = useRef(0);

  const dispatch = useDispatch();

  const handleLogout = async () => {
    if (userType === "hospital") await dispatch({ type: H_LOGOUT_SUCCESS });
    else await dispatch({ type: S_LOGOUT_SUCCESS });
  };

  myL.current = useLocation().pathname;

  console.log(myL);

  switch (myL.current) {
    case `${urlPrefix}dashboard`:
      selected.current = 0;
      break;

    case `${urlPrefix}orders`:
      selected.current = 1;
      break;

    case `${urlPrefix}stock`:
      selected.current = 2;
      break;

    case `${urlPrefix}placeorder`:
      selected.current = 3;
      break;

    case `${urlPrefix}/logout`:
      selected.current = 4;
      break;

    default:
      break;
  }

  console.log(selected.current);

  return (
    <div className={styles.root}>
      <Link
        to={`${urlPrefix}dashboard`}
        className={styles.main}
        style={selected.current === 0 ? selectedStyle.main : null}
        onClick={() => (selected.current = 0)}
        //onClick={() => console.log("ahh")}
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
        to={`${urlPrefix}orders`}
        className={styles.main}
        style={selected.current === 1 ? selectedStyle.main : null}
        onClick={() => (selected.current = 1)}
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
        to={`${urlPrefix}stock`}
        className={styles.main}
        style={selected.current === 2 ? selectedStyle.main : null}
        onClick={() => (selected.current = 2)}
      >
        <div
          className={styles.iconDiv}
          style={selected.current === 2 ? selectedStyle.textColor : null}
        >
          <BsListOl size={35} />
          {/* <img
            src='/images/available_stock.png'
            width={35}
            height={35}
            color='white'
          /> */}
        </div>
        <div
          className={styles.textDiv}
          style={selected.current === 2 ? selectedStyle.textColor : null}
        >
          Available Stock
        </div>
      </Link>

      {userType === "hospital" ? (
        <Link
          to={`${urlPrefix}placeorder`}
          className={styles.main}
          style={selected.current === 3 ? selectedStyle.main : null}
          onClick={() => (selected.current = 3)}
        >
          <div
            className={styles.iconDiv}
            style={selected.current === 3 ? selectedStyle.textColor : null}
          >
            <BsListOl size={35} />
          </div>
          <div
            className={styles.textDiv}
            style={selected.current === 3 ? selectedStyle.textColor : null}
          >
            Place Order
          </div>
        </Link>
      ) : null}

      <Link
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
