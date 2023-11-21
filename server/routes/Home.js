import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
      <img src="./home.jpg" alt="" className="home_image" />
        <div className="home_row">
          <Product title="Find perfect pg near chandigarh university" image="./home.jpg" price="5000"/>
          <Product />
          <Product />
        </div>
        <div className="home_row">
        <Product />
        <Product />
        </div>
        <div className="home_row">{
            <Product />
        }</div>
      </div>
    </div>
  );
};

export default Home;
