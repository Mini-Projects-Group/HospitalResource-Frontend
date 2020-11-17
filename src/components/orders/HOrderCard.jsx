import React from "react";
import moment from "moment";
import { Button } from "@material-ui/core";
import styles from "./HOrderCard.module.css";

const HOrderCard = (props) => {
  const { date_order, order_id, status } = props;

  return (
    <div
      className={`${styles.root} ${
        status === "delivered" ? styles.noEdit : ""
      } ${status === "pending" ? styles.noEditP : ""}  `}
    >
      <div className={styles.header}>
        <div className={styles.orderId}>Order ID: {order_id}</div>
        <div className={styles.orderDate}>
          {moment(date_order).format("Do MMM YYYY")}
        </div>
      </div>
      <div className={styles.details}></div>
      <div className={styles.footer}>
        <div className={styles.decline}></div>
        <div className={styles.accept}></div>
      </div>
    </div>
  );
};

export default HOrderCard;
