import { Button } from "@material-ui/core";
import React from "react";
import { BACKGROUND } from "../../../utils/constants";
import SellerDashboardHeader from "../sellerDashboardHeader/SellerDashboardHeader";
import styles from "./SellerDashboardRow.module.css";

const SellerDashboardRow = ({ index, item_id, item_name, quantity }) => {
  return (
    <div
      className={styles.container}
      style={index % 2 ? { backgroundColor: BACKGROUND } : {}}
    >
      <div className={styles.sr}>{index + 1}.</div>
      <div className={styles.itemId}>{item_id}</div>
      <div className={styles.itemName}>{item_name}</div>
      <div className={styles.quantity}>{quantity}</div>
      <div className={styles.modifyBtnDiv}>
        <Button variant="contained" color="primary">
          Modify Quantity
        </Button>
      </div>
      <div className={styles.deleteBtnDiv}>
        <Button variant="contained" color="secondary">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default SellerDashboardRow;
