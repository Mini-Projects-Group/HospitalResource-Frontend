import React, { useState } from "react";
import styles from "./MainOrderPage.module.css";
import { useEffect } from "react";
import { async_func_data } from "../../redux";
import { BAD_STATUS } from "../../redux/utils/constants";

const MainOrderPage = (props) => {
  const seller_id = props.match.params.sellerid;

  const [sellerItems, setSellerItems] = useState(0);

  const [loading, setLoading] = useState(false);

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
        }
      } catch (err) {
        console.log(err);
      }

      setLoading(false);
    };
    f();
  }, [seller_id]);

  console.log(sellerItems);

  if (loading) return <div className={styles.root}>Loading...</div>;

  return <div className={styles.root}></div>;
};

export default MainOrderPage;
