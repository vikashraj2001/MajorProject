import { useEffect, useState } from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";
import "../stylesheets/addPgForm.css";
// Loader for getting the college list to show in the options

export const get_colleges_for_form = async () => {
  const response = await fetch("https://pglocator.onrender.com/colleges/", {
    method: "GET",
  });

  return response;
};

// Action to get the form data, send a post request with the form data and then redirecting to the associated college's page

export const submitPgData = async ({ request }) => {
  // Fetching the formData that is sent from the <Form> component
  const data = await request.formData();

  // Converting the formData to an Object
  const jsonData = Object.fromEntries(data);

  // Converting the rent and college_id fields from String to Int
  for (let [key, value] of Object.entries(jsonData)) {
    if (key == "rent" || key == "college_id") {
      value = +value;
    }
  }

  // Sending the fetch request
  const response = await fetch("https://pglocator.onrender.com/colleges/pg/add-pg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonData),
  });
  const content = await response.json();
  console.log(content);

  // Redirecting to the college page
  return redirect(`/colleges/${jsonData.college_id}`);
};

// The form for taking the PG details

const AddPgForm = () => {
  // Fetching the data from the loader
  const collegeData = useLoaderData();

  const [pgDetails, setPgDetails] = useState({
    pg_address: "",
    owner_contact: "",
    pg_rent: "",
    gender_requirement: "none",
    college_id: collegeData[0].college_id,
  });

  // Changing the state object whenever anything is typed in the input or selected from the options to form controlled components

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPgDetails({
      ...pgDetails,
      [name]: value,
    });
    console.log(pgDetails);
  };

  useEffect(() => {
    console.log(pgDetails);
  });

  // Form here is react-router form. It initiates an Action when the method is put, post , delete etc.
  return (
  <div className="Container">
    <Form method="post" >
      <div className="header">
        <div className="text">Register Pg</div>
        {/* <div className="underline"></div> */}
      </div>
      <div className="inputs">
      <div className="input">
     
       <span className="pg_titels"> Address</span>
        <input
         className="Input" type="text"
          name="pg_address"
          value={pgDetails.pg_address}
          onChange={handleChange}
          required={true}
        />
      
      </div>
      <div className="input">
     
      <span className="pg_titels"> Contact</span>
        <input className="Input"
          type="contact"
          name="owner_contact"
          value={pgDetails.owner_contact}
          onChange={handleChange}
          required={true}
        />
      
      </div>
      <div className="input">
   
      <span className="pg_titels"> Rent</span>
        <input className="Input"
          type="number"
          name="pg_rent"
          value={pgDetails.pg_rent}
          onChange={handleChange}
          required={true}
        />
      </div>
      <div className="input">
     
      <span className="pg_titels"> Gender</span>
        <select
          name="gender_requirement"
          value={pgDetails.gender_requirement}
          onChange={handleChange}
        >
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="none">None</option>
        </select>
    
      </div>
      <div className="input">
        <span className="pg_titels">Associated College</span>
        
        <select
          name="college_id"
          value={pgDetails.college_id}
          onChange={handleChange}
        >
          {/* Using the fetched college list to create the options for the stored colleges so as to retrieve the college_id upon submission */}
          {collegeData.map((college) => (
            <option key={college.college_id} value={college.college_id}>
              {college.college_name}
            </option>
          ))}
        </select>
      
      </div>
      </div>
      
      <button className="submit" type="submit">Submit</button>
      
    </Form>
    </div>
  );
};

export default AddPgForm;
