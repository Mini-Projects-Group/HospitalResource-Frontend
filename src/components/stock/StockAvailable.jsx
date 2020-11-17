import React, { useState } from "react";
import styles from "./StockAvailable.module.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";

const StockAvailable = () => {
  const type = localStorage.getItem("type");
  let id;

  const [stock, setStock] = useState([]);
  const [loading, setLoading] = useState(false);

  id = useSelector((state) => {
    if (state.hReducer) return state?.hReducer?.hospitalData?.hospital_id;
    //else return state.sReducer.sellerData.seller_id;
  });

  useEffect(() => {
    const f = async () => {
      setLoading(true);
      try {
        let res;
        if (type === "hospital") {
          res = await async_func_data("api/stock", null, "get", true);

          console.log(res);
        } else {
        }

        if (res.status !== BAD_STATUS) {
          setStock(res.data.stock_items);
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    f();
  }, [id, type]);

  return <div className={styles.root}>StockAvailable</div>;
};

export default StockAvailable;
