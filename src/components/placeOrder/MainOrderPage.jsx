import React, { useState } from "react";
import styles from "./MainOrderPage.module.css";
import { useEffect } from "react";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";
import OrderHeader from "./OrderHeader";
import OrderRow from "./OrderRow";
import { Button, TextField } from "@material-ui/core";
import Modal from "react-modal";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../reusables/components/loader/Loader";

const MainOrderPage = (props) => {
  const seller_id = props.match.params.sellerid;

  const [sellerItems, setSellerItems] = useState([]);

  const [loading, setLoading] = useState(false);

  const [cart, setCart] = useState([]);

  const [submit, setSubmit] = useState(false);

  const [amount, setAmount] = useState(0);
  const h_id = useSelector(
    (state) => state?.hReducer.hospitalData?.hospital_id
  );

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      try {
        const res = await async_func_data(
          `api/item/allitems/${seller_id}`,
          null,
          "get",
          true
        );

        if (res.status !== BAD_STATUS) {
          setSellerItems(res.data);

          let temp = res.data;
          let temp2 = [];

          temp.forEach((element) => {
            temp2.push({
              item_id: element.item_id,
              item_name: element.item_name,
              quantity: 0,
            });
          });

          setCart(temp2);
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    f();
  }, [seller_id]);

  useEffect(() => {
    let amt = 0;
    cart.map((item, idx) => {
      amt += item.quantity * parseInt(sellerItems[idx].unit_price);
    });

    setAmount(parseInt(amt));
  }, [cart]);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [okmodalIsOpen, setIsOpenOk] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    openModal();
  };

  const placeOrder = async () => {
    // console.log({ hospital_id: h_id, seller_id, items: cart });

    try {
      const res = await async_func_data(
        "api/orders/add",
        { hospital_id: h_id, seller_id, items: cart },
        "post",
        true
      );
    } catch (error) {}

    closeModal();
    setIsOpenOk(true);
  };

  if (submit) return <Redirect to='/auth/hospital/orders' />;

  if (loading)
    return (
      <div className={styles.root}>
        <Loader />
      </div>
    );

  console.log(cart);
  console.log(amount);

  return (
    <div className={styles.root}>
      <Modal
        onRequestClose={closeModal}
        isOpen={modalIsOpen}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        appElement={document.getElementById("root")}
      >
        <div>Please confirm</div>
        <div>Your total bill is ₹ {amount}</div>
        <div>Orders once placed cannot be cancelled.</div>
        <div>
          <Button
            variant='outlined'
            color='secondary'
            onClick={closeModal}
            className={styles.innerButton}
            style={{ margin: "20px 10px" }}
          >
            Cancel
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={placeOrder}
            className={styles.innerButton}
            style={{ margin: "20px 10px" }}
          >
            Place Order
          </Button>
        </div>
      </Modal>

      <Modal
        onRequestClose={closeModal}
        isOpen={okmodalIsOpen}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
        appElement={document.getElementById("root")}
      >
        <div>Order has been placed successfully!!</div>
        <div>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              setIsOpenOk(false);
              setSubmit(true);
            }}
            className={styles.innerButton}
            style={{ margin: "20px 10px" }}
          >
            Ok
          </Button>
        </div>
      </Modal>

      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <OrderHeader />
        </div>
        <div className={styles.tableBody}>
          {sellerItems.map((item, idx) => (
            <OrderRow
              key={idx}
              idx={idx}
              item={item}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
        <div className={styles.price}> ₹ {amount}</div>
      </div>
      <div className={styles.btnDiv}>
        <Button
          className={styles.btn}
          onClick={openModal}
          // color='default'
          variant='contained'
          disabled={amount ? false : true}
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default MainOrderPage;
