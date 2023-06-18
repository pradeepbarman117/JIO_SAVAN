import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import './Search_bar.css'

const SearchBar = () => {

  const searchVal = (val)=>{
    console.log(val)
  }

  return (
    <>
      <div className="header_search_bar">
        <div className="header_search_box">
          <input
            type="text"
            placeholder="Search....."
            className="header_search_field"
            onChange={(e)=>searchVal(e.target.value)}
          />
          <button className="header_search_btn">
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
