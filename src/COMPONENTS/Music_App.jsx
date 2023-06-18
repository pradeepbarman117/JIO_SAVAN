import React from "react";
import Side_Bar from "./Side_Bar/Side_Bar";
import TopHeader from "./Top_Header/TopHeader";
import Search_Result from '../COMPONENTS/Search_Result/Search_Result'

const Music_App = () => {
  return (
    <>
      <TopHeader />
      <Side_Bar />
      <Search_Result/>
    </>
  );
};

export default Music_App;
