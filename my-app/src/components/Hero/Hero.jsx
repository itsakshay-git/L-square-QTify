import React from 'react';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
    <section className={styles.herosection}>
        <div className={styles.herocontent}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <img src={require("../../assets/vibrating-headphone 1.png")} alt='heroimage'/>
    </section>
    </>
  )
}

export default Hero