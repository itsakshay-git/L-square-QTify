import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import styles from "./Topalbums.module.css";
import getTopAlbum from "../../ApiServices/albumsApi";

const Topalbums = () => {
  const [card, setcard] = useState([])
  useEffect(() => {
    getTopAlbum().then((data) => {
      setcard(data)
    })
  }, [])
  

  return (
    <section className={styles.albumcontainer}>
      <section className={styles.titles}>
        <p>Top Albums</p>
        <p className={styles.showall}> Show All</p>
      </section>
      <section className={styles.cards}>
        {card.map((cardele) => (
          <Cards cardData={{
            title: cardele.title,
            image: cardele.image,
            follows: cardele.follows,
          }} />
        )
        )}
      </section>
    </section>
  );
};

export default Topalbums;
