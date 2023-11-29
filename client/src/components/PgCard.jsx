import { Link } from "react-router-dom";
import "../stylesheets/pgCard.css";
import pgcard_icon from "../Assets/room1.jpg"
const PgCard = ({ pg_id, pg_address, pg_rent }) => {
  return (
    <div className="card">
      <img className="card-image"
        src={pgcard_icon}// Replace with your image URL
        alt="Card"
      />
      <div className="card-content">
        <h2>Click On Address</h2>
        <Link to={`/colleges/pg/${pg_id}`}>Address:{pg_address}</Link>
      <div>Rent:{pg_rent}</div>
      </div>
    </div>
    
  );
};

export default PgCard;
