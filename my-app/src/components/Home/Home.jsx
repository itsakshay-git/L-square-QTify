import React from 'react';
import styles from './Home.module.css';
import Hero from '../Hero/Hero';
import Albums from '../Albums/Albums';
import { getTopAlbum, getNewAlbum, getSongs }from "../../ApiServices/albumsApi";
import FilterAlubm from '../FilterAlbum/FilterAlbum'
import QTifyAccordion from '../QTifyAccordion/QTifyAccordion';

const Home = () => {
  return (
    <div className={styles.homestyle}>
        <Hero />
        <Albums albums="Top Albums" albumData={getTopAlbum}/>
        <Albums albums="New Albums" albumData={getNewAlbum}/>
        <FilterAlubm albums="Songs" albumData={getSongs} />
        <QTifyAccordion />
    </div>
  )
}

export default Home