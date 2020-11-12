import React from "react";
import styles from "./Orders.module.css";

const Orders = () => {
  console.log("orders");

  return (
    <div
      className={styles.root}
      style={{ background: "pink", height: "70vh", width: "100%" }}
    >
      This is the page to view the orders
    </div>
  );
};

export default Orders;
