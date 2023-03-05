import React from "react";

const SearchBar = () => {
  return (
    <>
      <div>
        <input type="search" value="search a song of your choice" />
        <button type="submit">
            <img src={require("../../assets/search.png")} alt=""  width="25px"/>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
