import { React } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css'

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <div className={styles.prev} onClick={() => swiper.slidePrev()}><img src={require("../../../assets/prev.png")} alt="prev" /></div>
  );
}