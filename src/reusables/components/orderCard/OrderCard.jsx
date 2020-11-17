import React, { useState } from "react";
import styles from "./OrderCard.module.css";
import moment from "moment";
import { Button } from "@material-ui/core";
import Modal from "react-modal";
const OrderCard = ({
  date_order,
  order_id,
  buttonClick1,
  buttonClick2,
  buttonContent1,
  buttonContent2,
  status,
  hospital_name,
  address,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.root} ${
        status === "delivered" ? styles.noEdit : ""
      }  `}
    >
      <div className={styles.header}>
        <div className={styles.orderId}>Order ID: {order_id}</div>
        <div className={styles.orderDate}>
          {moment(date_order).format("Do MMM YYYY")}
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.hname}>
          Ordered by <strong>{hospital_name}</strong>, {address}
        </div>
        <div className={styles.det}>
          <Button
            variant="contained"
            color="default"
            onClick={() => {
              openModal();
            }}
          >
            Details
          </Button>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={styles.Modal}
            overlayClassName={styles.Overlay}
          >
            {items}
          </Modal>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.decline}>
          <Button variant="contained" color="secondary" onClick={buttonClick1}>
            {buttonContent1}
          </Button>
        </div>
        <div className={styles.accept}>
          <Button variant="contained" color="primary" onClick={buttonClick2}>
            {buttonContent2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
