import React from "react";
import styles from "./SellerDashboard.module.css";
import SellerDashboardRow from "../../reusables/components/sellerDashboardRow/SellerDashboardRow";
import SellerDashboardHeader from "../../reusables/components/sellerDashboardHeader/SellerDashboardHeader";
import Modal from "react-modal";
import { Button, TextField } from "@material-ui/core";

const items = [
  {
    item_id: 1,
    item_name: "N95 Mask",
    quantity: 25,
  },
  {
    item_id: 2,
    item_name: "TFX12Lo Hospital Beds",
    quantity: 125,
  },
  {
    item_id: 3,
    item_name: "SFX Surgery Kits",
    quantity: 880,
  },
  {
    item_id: 1,
    item_name: "N95 Mask",
    quantity: 25,
  },
  {
    item_id: 1,
    item_name: "N95 Mask",
    quantity: 25,
  },
];

const SellerDashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.root}>
      <div className={styles.addBtnDiv}>
        <button className={styles.add} onClick={openModal}>
          <img src="/images/plus1.png" alt="plus" className={styles.img} />
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className={styles.Modal}
          overlayClassName={styles.Overlay}
        >
          <h1 className={styles.heading}>Enter the Details</h1>
          <div className={styles.textOuter}>
            <TextField
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
            />
          </div>
          <div className={styles.textOuter}>
            <TextField
              id="outlined-basic"
              label="Total Quantity"
              variant="outlined"
            />
          </div>
          <div className={styles.textOuter}>
            <TextField
              id="outlined-basic"
              label="Unit Price"
              variant="outlined"
            />
          </div>
          <div>
            <Button variant="contained" color="primary">
              Add Item
            </Button>
          </div>
        </Modal>
      </div>
      <div>
        <SellerDashboardHeader
          sr_header="S.No"
          item_header1="Item Id"
          item_header2="Item Name"
          quantity_header="Quantity"
          sub_header1="Modify Quantity"
          sub_header2="Delete Item"
        />
        {items.map((item, index) => {
          return (
            <SellerDashboardRow
              index={index}
              item_id={item.item_id}
              item_name={item.item_name}
              quantity={item.quantity}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SellerDashboard;