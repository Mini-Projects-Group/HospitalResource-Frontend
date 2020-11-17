import React, { useEffect, useState } from "react";
import styles from "./HospitalOrders.module.css";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";
import OrderCard from "../../reusables/components/orderCard/OrderCard";
import HOrderCard from "./HOrderCard";

const HospitalOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      try {
        let res;

        res = await async_func_data("api/stock", null, "get", true);

        if (res.status !== BAD_STATUS) {
          setOrders(res.data.orders.reverse());
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    f();
  }, []);

  if (loading) return <div className={styles.root}>Loading...</div>;

  console.log(orders);
  return (
    <div className={styles.root}>
      {orders.map((item, idx) => (
        <HOrderCard key={idx} {...item} />
      ))}
    </div>
  );
};

export default HospitalOrders;
