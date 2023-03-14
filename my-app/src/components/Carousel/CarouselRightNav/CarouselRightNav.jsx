import { React } from 'react';
import { useSwiper } from 'swiper/react';
import styles from '../Carousel.module.css'

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <div className={styles.next} onClick={() => swiper.slideNext()}><img src={require("../../../assets/next.png")} alt="next" /></div>
  );
}