import React from "react";
import styles from "./SellerCard.module.css";
import { Link } from "react-router-dom";

const SellerCard = () => {
  return (
    <div className={styles.root}>
      <div className={styles.main}>Shree Radhe Surgicals and Medicals</div>
      <div className={styles.row2}>
        <div className={styles.name}>Ramu Singh Yadav Patil</div>
        <div className={styles.add}>Powai, Mumbai</div>
      </div>
      <div className={styles.row3}>
        <Link to='/' className={styles.btn}>
          Proceed
        </Link>
      </div>
    </div>
  );
};

export default SellerCard;
