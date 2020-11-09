import React, { useState, useEffect } from "react";
import styles from "./SellerDashboard.module.css";
import SellerDashboardRow from "../../reusables/components/sellerDashboardRow/SellerDashboardRow";
import SellerDashboardHeader from "../../reusables/components/sellerDashboardHeader/SellerDashboardHeader";
import Modal from "react-modal";
import { Button, TextField } from "@material-ui/core";
import { useSelector } from "react-redux";
import { async_func_data } from "../../redux/utils/helperfunctions";

const SellerDashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const seller_id = useSelector(
    (state) => state?.sReducer?.sellerData?.seller_id
  );
  console.log(seller_id);
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function f() {
      const result = await async_func_data(
        `/api/item/allItem/${seller_id}`,
        null,
        "get",
        true
      );
      console.log(result);
    }
    f();
  }, [items]);

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
      {items.length === 0 ? (
        <div>No Items Added Yet</div>
      ) : (
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
      )}
    </div>
  );
};

export default SellerDashboard;
