import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.root}>
      <AiOutlineCopyrightCircle size={23} style={{ margin: "0 10px" }} />
      {"  "} HRM | Hospital Resource Management 2020.
    </div>
  );
};

export default Footer;
