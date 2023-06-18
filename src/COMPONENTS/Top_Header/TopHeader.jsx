import React from "react";
import Left_Bar from "./Left_Bar/LeftBar";
import Right_Bar from "./Right_Bar/RightBar";
import Search_Bar from "./Search_Bar/SearchBar";
import './top_header.css'

const TopHeader = () => {
  return (
    <>
      <div className="header_wrpr">
        <div className="header_inner_wrpr">
          <Left_Bar />
          <Search_Bar/>
          <Right_Bar />
        </div>
      </div>
    </>
  );
};

export default TopHeader;
