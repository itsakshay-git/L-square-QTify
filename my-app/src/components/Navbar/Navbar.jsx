import React from 'react';
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <Logo />
        <SearchBar />
        <Button />
    </div>
  )
}

export default Navbar