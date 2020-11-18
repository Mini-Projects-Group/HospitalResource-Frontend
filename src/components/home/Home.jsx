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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className={styles.right}>
          <img src='/images/homepage/3.svg' className={styles.img1} />
        </div>
      </div>

      <div className={styles.second}>
        <div className={styles.right}>
          <img src='/images/homepage/1.svg' className={styles.img2} />
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
        </div>
        <div className={styles.right}>
          <img src='/images/homepage/2.svg' className={styles.img3} />
        </div>
      </div>
    </div>
  );
};

export default Home;
