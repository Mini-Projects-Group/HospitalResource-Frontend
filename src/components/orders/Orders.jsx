import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { async_func_data } from "../../redux/utils/helperfunctions";
import OrderCard from "../../reusables/components/orderCard/OrderCard";
import styles from "./Orders.module.css";

const Orders = () => {
  const seller_id = useSelector(
    (state) => state.sReducer?.sellerData?.seller_id
  );
  const [orders, setOrders] = useState(null);

  async function f() {
    const result = await async_func_data(
      `api/orders/allOrders`,
      null,
      "get",
      true
    );
    // console.log(result.data);
    setOrders(result.data);
  }

  useEffect(() => {
    f();
  }, [seller_id]);

  const handleAcceptOrder = async (order_id) => {
    const result = await async_func_data(
      `api/stock/approve/${order_id}`,
      null,
      "get",
      true
    );
    f();
    // console.log(result);
  };
  const handleDeclineOrder = async (order_id) => {
    const result = await async_func_data(
      `api/orders/${order_id}`,
      null,
      "delete",
      true
    );
    f();
    //console.log(result);
  };

  console.log(orders);

  if (orders) {
    return (
      <div className={styles.root}>
        {orders.map((order, index) => {
          return (
            <div key={index}>
              <OrderCard
                date_order={order.date_order}
                order_id={order.order_id}
                status={order.status}
                hospital_name={order.hospital_name}
                address={order.address}
                items={order.items}
                buttonContent1='Decline'
                buttonContent2='Accept'
                buttonClick1={async () => {
                  await handleDeclineOrder(order.order_id);
                }}
                buttonClick2={async () => {
                  await handleAcceptOrder(order.order_id);
                }}
              />
            </div>
          );
        })}
      </div>
    );
  } else return null;
};

export default Orders;
