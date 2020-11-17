import React, { useState } from "react";
import styles from "./OrderRow.module.css";
import { Button, TextField } from "@material-ui/core";
import Modal from "react-modal";

const OrderRow = (props) => {
  const { idx, cart, setCart } = props;
  const { item_id, item_name, unit_price } = props.item;

  const [quantity, setQuantity] = useState(0);
  const [local, setLocal] = useState(0);

  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  const handleQuantityClick = () => {
    setQuantity(local);
    closeModal();

    if (local) {
      // let temp = cart;
      // let temp2;
      // temp2 = temp.filter((val) => val.item_id !== item_id);

      // console.log(temp2);
      // console.log("hello");
      setCart((prev) => [
        ...prev,
        {
          item_id,
          item_name,
          quantity: parseInt(local),
        },
      ]);
    }
  };

  return (
    <div className={styles.root}>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <TextField
          label='Enter Quantity'
          type='number'
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        />
        <Button
          onClick={handleQuantityClick}
          variant='outlined'
          style={{ margin: "20px 0px" }}
        >
          Add
        </Button>
      </Modal>
      <div className={styles.sr}>{idx + 1}</div>
      <div className={styles.itemId}>{item_id}</div>
      <div className={styles.itemName}>{item_name}</div>
      <div className={styles.modifyBtnDiv}>{unit_price}</div>
      <div className={styles.quantity}>{quantity}</div>
      <div className={styles.deleteBtnDiv}>
        <Button onClick={handleClick} variant='outlined'>
          Add
        </Button>
      </div>
      <div className={styles.deleteBtnDiv}>{quantity * unit_price}</div>
    </div>
  );
};

export default OrderRow;
