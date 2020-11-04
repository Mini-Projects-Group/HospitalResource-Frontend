import React from "react";
import styles from "./SellerDashboard.module.css";
import SellerDashboardRow from "../../reusables/components/sellerDashboardRow/SellerDashboardRow";
import SellerDashboardHeader from "../../reusables/components/sellerDashboardHeader/SellerDashboardHeader";

const items = [
  {
    item_id: 1,
    item_name: "N95 Mask",
    quantity: 25,
  },
  {
    item_id: 2,
    item_name: "TFX12Lo Hospital Beds",
    quantity: 125,
  },
  {
    item_id: 3,
    item_name: "SFX Surgery Kits",
    quantity: 880,
  },
  {
    item_id: 1,
    item_name: "N95 Mask",
    quantity: 25,
  },
  {
    item_id: 1,
    item_name: "N95 Mask",
    quantity: 25,
  },
];

const SellerDashboard = () => {
  return (
    <div className={styles.root}>
      <SellerDashboardHeader
        sr_header="S.No"
        item_header1="Item Id"
        item_header2="Item Name"
        quantity_header="Quantity"
        sub_header1="Modify Quantity"
        sub_header2="Delete Item"
      />
      {items.map((item, index) => {
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
  );
};

export default SellerDashboard;
