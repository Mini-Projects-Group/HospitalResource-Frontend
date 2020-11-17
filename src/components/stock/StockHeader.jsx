import React from "react";
import styles from "./StockHeader.module.css";

const StockHeader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.sr}>Sr.No.</div>
      <div className={styles.itemId}>Item Id</div>
      <div className={styles.itemName}>Item Name</div>
      {/* <div className={styles.modifyBtnDiv}>Unit Price(Rs.)</div> */}
      <div className={styles.quantity}>Quantity Available</div>
      {/* <div className={styles.deleteBtnDiv}></div> */}
      <div className={styles.deleteBtnDiv}></div>
    </div>
  );
};

export default StockHeader;
