import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.first}>
        <div className={styles.left}>
          <div className={styles.tagline}>
            Facing problems in managing the resources?
            <p>Want to expand your business online?</p>A one stop solution for
            all your needs.
          </div>
          <div className={styles.description}>
            Hospital Resource Management ( HRM ), is a platform for managing
            hospital resources as well as ordering the resources from different
            distributors, as per their requirements. HRM provides a direct link
            between hospital and distributors, making it a lot easier for
            hospitals to manage their resources properly.
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/homepage/3.svg" className={styles.img1} />
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.right}>
          <img src="/images/homepage/1.svg" className={styles.img2} />
        </div>
        <div className={styles.left}>
          <div className={styles.tagline}>
            See all the Distributors in one go.
            <p>
              Compare prices across different distributors and choose the one
              you like
            </p>
          </div>
          <div className={styles.description}>
            Hospital can view different distributors and can view different
            items available with them as well as compare the cost of items among
            different distributors so as to get perfect deal. HRM also provides
            a platform for distributors to expand their business online.
          </div>
        </div>
      </div>

      <div className={styles.third}>
        <div className={styles.left}>
          <div className={styles.tagline}>
            Place an order at anytime and from anywhere you want.
            <p>Get notified about your order status.</p>Here we present to you a
            simple solution, HRM.
          </div>
          <div className={styles.description}>
            HRM provides flexibility in terms of placing an order. Hospital as
            well as distributors can get notified about the order and it's
            status. It provides a direct link between hospital and distributors.
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/homepage/2.svg" className={styles.img3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
