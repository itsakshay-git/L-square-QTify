import React from "react";
import styles from './Cards.module.css'

const Cards = () => {
  return (
    <>
        <section style={{ width: "200px" }}>
          <section className={styles.maincard}>
            <div>
              <img
                style={{ width: "200px", height: "30vh" }}
                src={require("../../assets/Rectangle 2138 (1).png")}
                alt="albumimage"
              />
            </div>
            <div className={styles.cardfooter}>
              <button className={styles.cardbutton}>100M Follows</button>
            </div>
          </section>
          <section style={{ color: "white", marginTop: '5px'}}>
            <p>New Bollywood</p>
          </section>
        </section>
    </>
  );
};

export default Cards;
