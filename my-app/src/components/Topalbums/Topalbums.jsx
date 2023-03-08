import React from "react";
import Cards from "../Cards/Cards";
import styles from "./Topalbums.module.css";

const Topalbums = () => {
  return (
    <section>
      <section className={styles.titles}>
        <p>Top Albums</p>
        <p className={styles.showall}> Show All</p>
      </section>
      <section className={styles.cards}>
        <Cards />
      </section>
    </section>
  );
};

export default Topalbums;
