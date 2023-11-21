import React from "react";
import  "./Header.css";
import Location from "./Location";
import { CgSearch } from 'react-icons/cg';
const  Header =()=> {
  return (
    <div className="Headers">
      <img src="./logo2.png" alt="" className="header_logo"  />

     
      <div className="header_search">
    
        <input type="text" className="header_location" placeholder="Search Location...." />
        <input type="text" className="header_searchInput" placeholder="Search....." />
    
        <CgSearch className="search_icon"/>
      </div>
      <div className="header_nav">
           
        <div className="header_option">
          <span className="option_lineone">Register</span>
          <span className="option_linetwo">Your Pg</span>
        </div>
        <div className="header_option">
          <span className="option_lineone">Hello Guest</span>
          <span className="option_linetwo">Sign In</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
