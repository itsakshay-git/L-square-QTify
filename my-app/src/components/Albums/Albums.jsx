import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import styles from "./Albums.module.css";
import Carousel from "../Carousel/Carousel";

const Topalbums = ({ albums, albumData }) => {
  const [showallbum, setshowalbum] = useState(true);
  const [card, setcard] = useState([]);

  useEffect(() => { 
      albumData().then((data) => {
        setcard(data)
      })
 
  }, [])

  
  return (
    <section className={styles.albumcontainer}>
      <section className={styles.titles}>
        <p>{albums}</p>
        <p className={styles.showall} onClick={() => setshowalbum(!showallbum)}>{showallbum ? "Show All" : "Collapse"}</p>
      </section>
      {showallbum ? (
        // <Carousel  cardData={card} coolLearningByCrio={({title, image}) => <Cards title={title} image={image} type="album"/>}/>
        // aware about namming will change it later :D
        <div className={styles.carouselstyle}>
          <Carousel  cardData={card} coolLearningByCrio={(data) => <Cards cardData={data} type="album"/>}/>
        </div>
      ): (
        <section className={styles.cards}>
          {card.map((cardele) => (
            <Cards cardData={{
              id: cardele.id,
              title: cardele.title,
              image: cardele.image,
              follows: cardele.follows,
            }} />
          )
          )}
        </section>
      )}
    </section>
  );
};

export default Topalbums;
