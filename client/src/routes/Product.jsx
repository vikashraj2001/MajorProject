import React from "react";
import "../stylesheets/Product.css";
import home_icon from "../Assets/room1.jpg"
import { Link } from 'react-router-dom';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Product({pg_id, pg_address, pg_rent}) {
  return (
    <div className="products">
      <div className="product_info">
        <p>Address: {pg_address} </p>
        <p className="room_price">
          <strong>&#8377; {pg_rent}</strong>
        </p>
        <div className="product_rating">
          <Stack spacing={2}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </div>
      </div>
      <img src={home_icon} alt="" />
      <Link to={`/colleges/pg/${pg_id}`}>
      <button>Find Details</button>
      </Link>
    </div>
  );
}

export default Product;
