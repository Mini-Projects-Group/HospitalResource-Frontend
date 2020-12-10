import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { async_func_data } from "../../redux/utils/helperfunctions";
import SellerDashboardHeader from "../../reusables/components/sellerDashboardHeader/SellerDashboardHeader";
import SellerDashboardRow from "../../reusables/components/sellerDashboardRow/SellerDashboardRow";
import styles from "./SellerDashboard.module.css";

const SellerDashboard = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const seller_id = useSelector(
    (state) => state.sReducer?.sellerData?.seller_id
  );

  async function f() {
    try {
      if (seller_id) {
        const result = await async_func_data(
          `api/item/allItems/${seller_id}`,
          null,
          "get",
          true
        );
        setItems(result?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const [items, setItems] = useState([]);
  useEffect(() => {
    f();
    return () => ({});
  }, [seller_id]);

  const [itemName, setItemName] = useState("");
  const [totalQuantity, setTotalQuantity] = useState(null);
  const [unitPrice, setUnitPrice] = useState(null);

  const add = async () => {
    try {
      const result = await async_func_data(
        "api/item/add",
        {
          item_name: itemName,
          quantity: parseInt(totalQuantity),
          unit_price: parseInt(unitPrice),
        },
        "post",
        true
      );

      closeModal();
      await f();
      setItemName("");
      setTotalQuantity(null);
      setUnitPrice(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.addBtnDiv}>
        <button className={styles.add} onClick={openModal}>
          <img src='/images/plus1.png' alt='plus' className={styles.img} />
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
              id='outlined-basic'
              label='Item Name'
              variant='outlined'
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className={styles.textOuter}>
            <TextField
              id='outlined-basic'
              label='Total Quantity'
              variant='outlined'
              value={totalQuantity}
              onChange={(e) => setTotalQuantity(e.target.value)}
            />
          </div>
          <div className={styles.textOuter}>
            <TextField
              id='outlined-basic'
              label='Unit Price'
              variant='outlined'
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            />
          </div>
          <div>
            <Button variant='contained' color='primary' onClick={add}>
              Add Item
            </Button>
          </div>
        </Modal>
      </div>

      <div>
        <SellerDashboardHeader
          sr_header='S.No'
          item_header1='Item Id'
          item_header2='Item Name'
          quantity_header='Quantity'
          sub_header1='Modify Quantity'
          sub_header2='Delete Item'
        />
        {items?.map((item, index) => (
          <SellerDashboardRow
            key={index}
            index={index}
            item_id={item.item_id}
            item_name={item.item_name}
            quantity={item.quantity}
            f={f}
          />
        ))}
      </div>
    </div>
  );
};

export default SellerDashboard;
