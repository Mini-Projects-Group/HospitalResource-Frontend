import React from "react";
import styles from "./AlertModal.module.css";
import Modal from "react-modal";
import { Button } from "@material-ui/core";

const AlertModal = ({
  modalIsOpen,
  closeModal,
  buttonContent1 = "Cancel",
  buttonContent2 = "Confirm",
  buttonClick1,
  buttonClick2,
  heading,
  content,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <div className={styles.root}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.content}>{content}</div>
        <div className={styles.btnDiv}>
          <Button variant="contained" color="secondary" onClick={buttonClick1}>
            {buttonContent1}
          </Button>
          <Button variant="contained" color="primary" onClick={buttonClick2}>
            {buttonContent2}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AlertModal;
