import React, { useState, useEffect } from "react";
import styles from "./HospitalDashboard.module.css";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";
import PieChart from "../../reusables/components/piechart/PieChart";
import BarChart from "../../reusables/components/barchart/BarChart";

export const color_pallete = [
  // "#3E68D9",
  "#000060",
  "#41D287",
  "#05BCBC",
  "#5A60CC",
  "#045F60",
  "#43B53F",
  "#F25F5F",
  "#A60F0B",
  "#FE4F06",
  "#F25F5F",
  "#672C3F",
  "#B11F52",
  "#DB516C",
  // ********
  "#3E68D9",
  "#5A60CC",
  "#7550AE",
  "#000060",
  "#005C91",
  "#352A58",
  "#423E83",
  "#209ADB",
  "#293DAC",
];

const HospitalDashboard = () => {
  const [data, setData] = useState([]);
  const [stock_items, setStockItems] = useState([]);
  const [stock_used, setStockUsed] = useState([]);
  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  let temp = [],
    temp2 = [];

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
          setStockUsed(res.data.stock_used);
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
      value: parseInt(stock_items[i].quantity),
    });
  }

  for (i = 0; i < stock_used.length; i++) {
    temp2.push({
      id: stock_used[i].item_id,
      item_name: stock_used[i].item_name,
      quantity: stock_used[i].quantity,
      color: color_pallete[i],
    });
  }

  return (
    <div className={styles.root}>
      <div className={styles.pieCard}>
        <PieChart data={temp} />
      </div>
      <div className={styles.pieCard}>
        <BarChart data={temp2} />
      </div>
    </div>
  );
};

export default HospitalDashboard;
