import React from "react";
import "../stylesheets/Home.css";
import Product from "../routes/Product.jsx";
import { useLoaderData } from "react-router-dom";
import Footer from "./Footer.jsx";


export const get_pu_pg_list = async () => {
  const response = await fetch(`https://pglocator.onrender.com/colleges/1`, {
    method: "GET",
  });

  return response;
}
const Home = () => {

  const pg_list = useLoaderData();
  console.log(pg_list);
  return (

    <div className="home">
      <img src="./home1.jpg" alt="" className="home_image" />
      <div className="home_container">
        {/* <div className="home_row">
          <Product title="Find perfect pg near chandigarh university" image="./home.jpg" price="5000"/>
          <Product />
          <Product />
          <Product />
         
        </div> */}
         <div className="home_row">
        {pg_list.map((pg) => (
          <Product
            key={pg.pg_id}
            pg_id={pg.pg_id}
            pg_address={pg.pg_address}
            pg_rent={pg.pg_rent}
          />
        ))}
        </div>
        {/* <div className="home_row">
        <Product />
        <Product />
        <Product />
        </div>
        <div className="home_row">
            <Product />
            <Product />
        </div> */}
      </div>
      <Footer/>
    </div>
   
  );
};

export default Home;
