import React, { useState, useEffect } from "react";
import styles from "./HospitalDashboard.module.css";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";
import PieChart from "../../reusables/components/piechart/PieChart";

const HospitalDashboard = () => {
  const [data, setData] = useState([]);
  const [stock_items, setStockItems] = useState([]);
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  let temp = [];

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      try {
        let res;

        res = await async_func_data("api/stock", null, "get", true);
        console.log(res);
        if (res.status !== BAD_STATUS) {
          setStockItems(res.data.stock_items);
          setStock(res.data.stock);
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    f();
  }, []);

  let i, j;

  for (i = 0; i < stock.length; i++) {
    temp.push({
      id: stock[i].item_name,
      label: `${stock[i].item_name} : ${stock_items[i].quantity}`,
      value: parseFloat(stock[i].percent),
    });
  }

  return (
    <div className={styles.root}>
      <div className={styles.pieCard}>
        <PieChart data={temp} />
      </div>
    </div>
  );
};

export default HospitalDashboard;
