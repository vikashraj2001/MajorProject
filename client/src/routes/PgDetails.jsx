import { useLoaderData } from "react-router-dom";
import "../stylesheets/pgdetails.css";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const get_pg_details = async ({ params }) => {
  const response = await fetch(`https://pglocator.onrender.com/colleges/pg/${params.id}`, {
    method: "GET",
  });
  return response;
};

const PgDetails = () => {
  const { pg_address, owner_contact, pg_rent, gender_requirement } =
    useLoaderData()[0];
  console.log(useLoaderData());
  return (
  
      <div className="products_details">
      <div className="product_detailsinfo">
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum possimus </p>
        <p className="room_price">
          <strong>&#8377; 5000</strong>
        </p>
        <div className="product_rating">
          <Stack spacing={1}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </Stack>
        </div>
        
      
      <img src="./room1.jpg" alt="" />
     
      <div className="detials">Address: {pg_address}</div>

      <div className="detials">Contact: {owner_contact}</div>
      <div className="detials">Rent: {pg_rent} </div>
      <div className="detials">Gender Requirement: {gender_requirement} </div>
      
    </div>
    </div>
  );
};

export default PgDetails;
