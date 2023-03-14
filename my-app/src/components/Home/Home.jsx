import React from 'react';
import styles from './Home.module.css';
import Hero from '../Hero/Hero';
import Topalbums from '../Topalbums/Topalbums';
import {getTopAlbum, getNewAlbum}from "../../ApiServices/albumsApi";

const Home = () => {
  return (
    <div className={styles.homestyle}>
        <Hero />
        <Topalbums albums="Top Albums" albumData={getTopAlbum}/>
        <Topalbums albums="New Albums" albumData={getNewAlbum}/>
    </div>
  )
}

export default Home