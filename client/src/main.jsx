import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import CollegeList, { get_colleges } from "./routes/CollegeList.jsx";
import PgList, { get_pg_list } from "./routes/PgList.jsx";
import PgDetails, { get_pg_details } from "./routes/PgDetails.jsx";
import AddPgForm, {get_colleges_for_form,submitPgData,} from "./routes/AddPgForm.jsx";
import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx";
import Header from "./routes/Header.jsx";
import Footer from "./routes/Footer.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"/",
        element:<Home/>
       },
       {
        path:"/",
        element:<Footer/>
       },
      {
        path: "/colleges/",
        loader: get_colleges,
        element: <CollegeList />,
      },
      {
        path: "/colleges/:id",
        loader: get_pg_list,
        element: <PgList />,
      },
      {
        path: "/colleges/pg/:id",
        loader: get_pg_details,
        element: <PgDetails />,
      },
      {
        path: "/colleges/pg/add-pg",
        loader: get_colleges_for_form,
        action: submitPgData,
        element: <AddPgForm />,
      },
      {
       path:"/Login",
        element:<Login/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
