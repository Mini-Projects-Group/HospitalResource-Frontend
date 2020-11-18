import React, { useState } from "react";
import styles from "./StockAvailable.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";
import OrderHeader from "../placeOrder/OrderHeader";
import StockHeader from "./StockHeader";
import StockRow from "./StockRow";
import Loader from "../../reusables/components/loader/Loader";

const StockAvailable = () => {
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  const f = async () => {
    setLoading(true);
    try {
      let res;

      res = await async_func_data("api/stock", null, "get", true);
      console.log(res);
      if (res.status !== BAD_STATUS) {
        setStock(res.data.stock_items);
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    f();
  }, []);

  console.log(stock);

  if (loading)
    return (
      <div className={styles.root}>
        <Loader />
      </div>
    );

  return (
    <div className={styles.root}>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <StockHeader />
        </div>
        <div className={styles.tableBorder}>
          {stock.map((item, idx) => (
            <StockRow key={idx} item={item} idx={idx} f={f} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockAvailable;
