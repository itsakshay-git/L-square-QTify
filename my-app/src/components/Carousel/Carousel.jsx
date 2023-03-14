import React from 'react';
// import styles from './Carousel.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlidePrevButton from './CarouselLeftNav/CarouselLeftNav';
import SlideNextButton from './CarouselRightNav/CarouselRightNav';


const Carousel = ({cardData, coolLearningByCrio}) => {
  return (
    <Swiper
    spaceBetween={40}
    slidesPerView={"auto"}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SlidePrevButton />
    {cardData.map((ele) => (
    <SwiperSlide>{coolLearningByCrio(ele)}</SwiperSlide>
    ))}
    <SlideNextButton />
  </Swiper>
  )
}

export default Carousel