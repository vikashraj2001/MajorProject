import { Outlet } from "react-router-dom";
import "./stylesheets/App.css";
import Header from "./routes/Header.jsx";
import Footer from "./routes/Footer.jsx";


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet />
      
    </div>
  );
};

export default App;
