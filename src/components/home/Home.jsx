import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.root}>
      <div className={styles.first}>
      <div className={styles.leftFirst}>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi dolorum at quas illo eos, quo recusandae, magnam ex odio, adipisci sequi quos quam et ipsum eum odit. Fuga, perspiciatis quas. </h1>
          
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veritatis neque commodi eligendi voluptatem, quos corporis voluptatibus incidunt repellat, veniam quia dolor ea tempora nobis vero velit esse in eum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut cum qui, pariatur quisquam veniam excepturi ducimus nostrum est magnam atque repellat suscipit reprehenderit, eaque fugit deleniti perferendis eveniet, iure molestias. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa corrupti dignissimos ipsa molestias impedit, cumque temporibus dolores architecto amet quae laboriosam asperiores corporis mollitia voluptates eius aspernatur repellat soluta! Perspiciatis?</div>
      <div className={styles.rightFirst}>
        <img src="/images/landing.png" className={styles.img}/>
      </div>
      </div>
     
    </div>
  );
};

export default Home;
