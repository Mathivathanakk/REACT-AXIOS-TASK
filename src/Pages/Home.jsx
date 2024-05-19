import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();

  return (
   
    <div className="container home">
       {/* home page */}
      <div className="text-center ">
        <p>You can Create data,Read data,Update data and Delete data..!</p>
        {/* button explore more is navigate to details */}
        <button
          className="btn btn-danger "
          onClick={() => {
            navigate("/detail");
          }}
        >
          EXPLORE MORE
        </button>
      </div>
    </div>
  );
};

export default Home;
