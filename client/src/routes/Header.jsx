import React from "react";
import "../stylesheets/Header.css";
import { Link } from 'react-router-dom';
// import Location from "./routes/Location.jsx";
import { CgSearch } from 'react-icons/cg';
const  Header =()=> {
  return (
    <div className="Headers">
      <Link to={"/"}>
      <img src="./logo2.png" alt="" className="header_logo"  />

      </Link>
      <div className="header_search">
    
        <input type="text" className="header_location" placeholder="Search Location...." />
        
        <input type="text" className="header_searchInput" placeholder="Search....." />
    
        <CgSearch className="search_icon"/>
      </div>
      <div className="header_nav">
      <Link to={"/colleges/"}>
        <div className="header_option">
          <span className="option_lineone">College</span>
          <span className="option_linetwo">List</span>
        </div>
        </Link> 
         <Link to={"/colleges/pg/add-pg"}>
        <div className="header_option">
          <span className="option_lineone">Register</span>
          <span className="option_linetwo">Your Pg</span>
        </div>
        </Link> 
        <Link to={"/Login"}>
        <div className="header_option">
          <span className="option_lineone">Hello Guest</span>
          <span className="option_linetwo">Sign In</span>
        </div>
        </Link> 
      </div>
    </div>
  );
}

export default Header;
