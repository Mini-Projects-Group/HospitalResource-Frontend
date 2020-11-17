import { Button, TextField } from "@material-ui/core";
import React from "react";
import { async_func_data } from "../../../redux/utils/helperfunctions";
import { BACKGROUND } from "../../../utils/constants";
import AlertModal from "../alertModal/AlertModal";
import styles from "./SellerDashboardRow.module.css";
import Modal from "react-modal";
import { useState } from "react";

const SellerDashboardRow = ({ index, item_id, item_name, quantity }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [quan, setQuan] = useState("");

  const [modifymodalIsOpen, modifysetIsOpen] = React.useState(false);
  function modifyopenModal() {
    modifysetIsOpen(true);
  }
  function modifycloseModal() {
    modifysetIsOpen(false);
  }

  const handleModify = async () => {
    const response = await async_func_data(
      `api/item/modify/${item_id}`,
      {
        addQuantity: parseInt(quan),
      },
      "post",
      true
    );
    console.log(response);
  };

  const handleDelete = async () => {
    const response = await async_func_data(
      `api/item/delete/${item_id}`,
      null,
      "delete",
      true
    );
    console.log(response);
  };

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
        <Button variant='contained' color='primary' onClick={modifyopenModal}>
          Modify Quantity
        </Button>
        <Modal
          onRequestClose={modifycloseModal}
          isOpen={modifymodalIsOpen}
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <TextField
            id='outlined-basic'
            label='Add Quantity'
            variant='outlined'
            value={quan}
            onChange={(e) => setQuan(e.target.value)}
          />
          <div style={{ marginTop: "25px" }}>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                handleModify();
                modifycloseModal();
              }}
            >
              Add Quantity
            </Button>
          </div>
        </Modal>
      </div>
      <div className={styles.deleteBtnDiv}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => openModal()}
        >
          Delete
        </Button>
        <AlertModal
          buttonContent1='Cancel'
          buttonContent2='Confirm'
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          heading='Are you sure about deleting this ?'
          content='Click confirm to Delete or click cancel to revoke your decision '
          buttonClick1={closeModal}
          buttonClick2={() => {
            handleDelete();
            closeModal();
          }}
        />
      </div>
    </div>
  );
};

export default SellerDashboardRow;
