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
  //console.log(seller_id);
  const [items, setItems] = useState(null);
  useEffect(() => {
    async function f() {
      console.log(seller_id);
      const result = await async_func_data(
        `api/item/allItems/${seller_id}`,
        null,
        "get",
        true
      );
      setItems(result?.data);
      console.log(result?.data);
    }
    f();
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
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(items);
  if (items)
    return (
      <>
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
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                />
              </div>
              <div className={styles.textOuter}>
                <TextField
                  id="outlined-basic"
                  label="Total Quantity"
                  variant="outlined"
                  value={totalQuantity}
                  onChange={(e) => setTotalQuantity(e.target.value)}
                />
              </div>
              <div className={styles.textOuter}>
                <TextField
                  id="outlined-basic"
                  label="Unit Price"
                  variant="outlined"
                  value={unitPrice}
                  onChange={(e) => setUnitPrice(e.target.value)}
                />
              </div>
              <div>
                <Button variant="contained" color="primary" onClick={add}>
                  Add Item
                </Button>
              </div>
            </Modal>
          </div>
          {items !== null ? (
            <div>
              <SellerDashboardHeader
                sr_header="S.No"
                item_header1="Item Id"
                item_header2="Item Name"
                quantity_header="Quantity"
                sub_header1="Modify Quantity"
                sub_header2="Delete Item"
              />
              {items !== null &&
                items?.map((item, index) => {
                  //console.log(index);
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
          ) : (
            <div>No Items Added Yet</div>
          )}
        </div>
      </>
    );
  else return null;
};

export default SellerDashboard;
