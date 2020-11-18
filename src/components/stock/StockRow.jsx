import React, { useState } from "react";
import styles from "./StockHeader.module.css";
import { Button, TextField } from "@material-ui/core";
import Modal from "react-modal";
import { async_func_data } from "../../redux";

const StockRow = (props) => {
  const { idx, f } = props;
  const { item_id, item_name, quantity } = props.item;

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

  const handleUse = async () => {
    try {
      const res = await async_func_data(
        "api/stock/used",
        { items: [{ item_id, quantity: parseInt(local), item_name }] },
        "post",
        true
      );

      closeModal();
      f();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //const [quantity, setQuantity] = useState(0);
  const [local, setLocal] = useState(0);

  return (
    <div className={`${styles.root} ${styles.root2}`}>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        appElement={document.getElementById("root")}
      >
        <TextField
          label='Quantity to be used'
          type='number'
          value={local}
          onChange={(e) => setLocal(e.target.value)}
        />
        <Button
          onClick={handleUse}
          variant='outlined'
          style={{ margin: "20px 0px" }}
        >
          Use
        </Button>
      </Modal>
      <div className={styles.sr}>{idx + 1}</div>
      <div className={styles.itemId}>{item_id}</div>
      <div className={styles.itemName}>{item_name}</div>
      {/* <div className={styles.modifyBtnDiv}>Unit Price(Rs.)</div> */}
      <div className={styles.quantity}>{quantity}</div>
      {/* <div className={styles.deleteBtnDiv}></div> */}
      <div className={styles.deleteBtnDiv}>
        <Button variant='outlined' onClick={handleClick}>
          Use Item
        </Button>
      </div>
    </div>
  );
};

export default StockRow;
