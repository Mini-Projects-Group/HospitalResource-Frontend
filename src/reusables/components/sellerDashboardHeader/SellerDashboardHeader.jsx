import React from "react";
import styles from "./SellerDashboardHeader.module.css";

const SellerDashboardHeader = ({
  sr_header,
  item_header1,
  item_header2,
  quantity_header,
  sub_header1,
  sub_header2,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sr}>{sr_header}</div>
      <div className={styles.itemId}>{item_header1}</div>
      <div className={styles.itemName}>{item_header2}</div>
      <div className={styles.quantity}>{quantity_header}</div>
      <div className={styles.modifyBtnDiv}>{sub_header1}</div>
      <div className={styles.deleteBtnDiv}>{sub_header2}</div>
    </div>
  );
};

export default SellerDashboardHeader;
