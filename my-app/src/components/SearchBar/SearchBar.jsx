import React from "react";
import style from "./Search.module.css"

const SearchBar = () => {
  return (
    <>
      <div className={style.wrapper}>
        <input className={style.searchbar} type="search" placeholder="search a song of your choice" />
        <button type="submit" className={style.buttonIcon}>
            <img src={require("../../assets/search.png")} alt=""  width="25px"/>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
