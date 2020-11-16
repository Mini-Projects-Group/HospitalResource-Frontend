import React from "react";
import styles from "./PlaceOrder.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";
import SellerCard from "../../reusables/components/card/SellerCard";

const PlaceOrder = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  //   const hospitalData = useSelector((state) => state.hReducer);
  //   console.log(hospitalData);

  const [sellers, setSellers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const f = async () => {
      setLoading(true);

      const res = await async_func_data("api/seller/all", null, "get", true);
      if (res.status !== BAD_STATUS) {
        setSellers(res.data);
        setLoading(false);
      }
    };
    f();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className={styles.root}>
      {sellers?.map((item, idx) => (
        <SellerCard key={idx} item={item} />
      ))}
    </div>
  );
};

export default PlaceOrder;
