import React from "react";
import "../stylesheets/Product.css";
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
      <img src="./room1.jpg" alt="" />
      <Link to={"/colleges/pg/:id"}>
      <button>Find Details</button>
      </Link>
    </div>
  );
}

export default Product;
