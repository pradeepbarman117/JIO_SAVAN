import React from "react";
import data, { LibraryData } from "./data";
import './Side_bar.css'

const Side_Bar = () => {
  return (
    <>
      <div className="sidebar_wpr">
        <div className="sidebar_manu">
          <h3 className="sidebar_manu_heading">BROWSE</h3>
          <ul className="sidebar_manu_ul">
            {data.map((items, i) => (
              <li className="sidebar_manu_list" key={items.id}>
                <a href={items.link} className="sidebar_manu_links">
                  {items.text}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="sidebar_manu_heading">LIBRARY</h3>
          <ul className="sidebar_manu_ul">
            {LibraryData.map((items, i) => (
              <li className="sidebar_manu_list" key={items.id}>
                <a href={items.link} className="sidebar_manu_links">
                  <span className="sidebar_manu_list_icon">{items.icon}</span>
                  <span>{items.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Side_Bar;
