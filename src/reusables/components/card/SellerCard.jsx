import React from "react";
import styles from "./SellerCard.module.css";
import { Link } from "react-router-dom";

const SellerCard = (props) => {
  const { seller_id, shop_name, seller_name, address } = props.item;
  return (
    <div className={styles.root}>
      <div className={styles.main}>{shop_name}</div>
      <div className={styles.row2}>
        <div className={styles.name}>{seller_name}</div>
        <div className={styles.add}>{address}</div>
      </div>
      <div className={styles.row3}>
        <Link
          to={`/auth/hospital/placeorder/${seller_id}`}
          className={styles.btn}
        >
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default SellerCard;
