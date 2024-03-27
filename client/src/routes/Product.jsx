import React from "react";
import "../stylesheets/Product.css";
import home_icon from "../Assets/room1.jpg"
import { Link } from 'react-router-dom';
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Product(title, image, price) {
  return (
    <div className="products">
      <div className="product_info">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus </p>
        <p className="room_price">
          <strong>&#8377; 5000</strong>
        </p>
        <div className="product_rating">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </div>
      </div>
      <img src={home_icon} alt="" />
      <Link to={"/colleges/pg/8"}>
      <button>Find Details</button>
      </Link>
    </div>
  );
}

export default Product;
