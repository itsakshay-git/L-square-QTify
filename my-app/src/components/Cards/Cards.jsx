import React from "react";
import styles from './Cards.module.css';
import Tooltip from '@mui/material/Tooltip';

const Cards = ({cardData}) => {
  const {id, title, image, follows} = cardData;
  
  
  return (
    <>
    <Tooltip title={title} arrow>
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
    </Tooltip>
    </>
  );
};

export default Cards;
