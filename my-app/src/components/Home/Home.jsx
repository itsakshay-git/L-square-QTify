import React from 'react';
import styles from './Home.module.css';
import Hero from '../Hero/Hero';
import Albums from '../Albums/Albums';
import { getTopAlbum, getNewAlbum }from "../../ApiServices/albumsApi";

const Home = () => {
  return (
    <div className={styles.homestyle}>
        <Hero />
        <Albums albums="Top Albums" albumData={getTopAlbum}/>
        <Albums albums="New Albums" albumData={getNewAlbum}/>
    </div>
  )
}

export default Home