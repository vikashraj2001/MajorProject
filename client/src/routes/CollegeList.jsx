import { useLoaderData } from "react-router-dom";
import CollegeCard from "../components/CollegeCard.jsx";
import "../stylesheets/collegeList.css";

// Loader for getting the college list

export const get_colleges = async () => {
  const response = await fetch("https://pglocator.onrender.com/colleges", {
    method: "GET",
  });

  return response;
};
const CollegeList = () => {
  const college_list = useLoaderData();
  console.log(college_list);

  return (
<section className="bodyss">
   <div className="collegeList">
    {/* <img src="./home1.jpg" alt="" className="home_image" />  */}
     <h1> College List</h1>
      <>
      <div className="collegelistcard">
    
        {college_list.map((college) => (
          <CollegeCard
      
            key={college.college_id}
            college_id={college.college_id}
            college_name={college.college_name}
            college_address={college.college_address}
          />
        ))}
      </div>
      </>
    </div>
    </section>
  );
};

export default CollegeList;
