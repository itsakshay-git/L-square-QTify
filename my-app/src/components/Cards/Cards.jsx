import React from "react";
import styles from './Cards.module.css'

const Cards = ({cardData}) => {
  const {id, title, image, follows} = cardData;
  
  
  return (
    <>
        <section style={{ width: "190px" }} key={id} >
          <div className={styles.maincard}>
            <div>
              <img
                className={styles.imgstyle}
                src={image}
                alt="albumimage"
              />
            </div>
            <div className={styles.cardfooter}>
              <button className={styles.cardbutton}>{follows} Follows</button>
            </div>
          </div>
          <section style={{ color: "white", marginTop: '5px'}}>
            <p>{title}</p>
          </section>
        </section>
    </>
  );
};

export default Cards;
