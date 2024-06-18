import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Create = () => {
  //creating the state of data
  const [createData, setCreateData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },

    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if for nested object and else for non nested object
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setCreateData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setCreateData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

 // submitting the data logic by post method and navigated to details
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "https://664de975ede9a2b556557010.mockapi.io/api/details",
        createData
      )
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    navigate("/detail");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center ">
      {/* start of create card */}
      <div className="card m-4 p-1">
        {/* card-body */}
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <h3>Fill Your Details</h3>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={createData.name}
                  onChange={handleChange}
                
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="username">Username</label>
                <br />
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={createData.username}
                  onChange={handleChange}
                 
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your username"
                  required
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={createData.email}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <h5>Address</h5>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="street">Street</label>
                <br />
                <input
                  type="text"
                  name="address.street"
                  id="street"
                  value={createData.address.street}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your street name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="suite">Suite</label>
                <br />
                <input
                  type="text"
                  name="address.suite"
                  id="suite"
                  value={createData.address.suite}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your suite name"
                  required
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="city">City</label>
                <br />
                <input
                  type="text"
                  name="address.city"
                  id="city"
                  value={createData.address.city}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your city name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="zipcode">Zipcode</label>
                <br />
                <input
                  type="text"
                  name="address.zipcode"
                  id="zipcode"
                  value={createData.address.zipcode}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your zipcode"
                  required
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="phone">Phone</label>
                <br />
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={createData.phone}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="website">Website</label>
                <br />
                <input
                  type="text"
                  name="website"
                  id="website"
                  value={createData.website}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your website"
                  required
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col">
                <h5>Company</h5>
              </div>
            </div>
            <br />
            <div className="row">
              {" "}
              <div className="col-md-6">
                <label htmlFor="companyname">Company Name</label>
                <br />
                <input
                  type="text"
                  name="company.name"
                  id="companyname"
                  value={createData.company.name}
                  onChange={handleChange}
                  
                  placeholder="Enter your company name"
                  style={{ borderRadius: "7px" }}
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="companycatchPhrase">Company_catchPhrase</label>
                <br />
                <input
                  type="text"
                  name="company.catchPhrase"
                  id="companycatchPhrase"
                  value={createData.company.catchPhrase}
                  onChange={handleChange}
                  placeholder="Enter your company catchphrase"
                  
                  style={{ borderRadius: "7px" }}
                  required
                />
              </div>
            </div>
            <br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="companybs">Company_bs</label>
                <br />
                <input
                  type="text"
                  name="company.bs"
                  id="companybs"
                  value={createData.company.bs}
                  onChange={handleChange}
                  
                  style={{ borderRadius: "7px" }}
                  placeholder="Enter your company bs"
                  required
                />
              </div>
            </div>
            <br />
            <br />
            {/* button create */}
            <div className="row">
            
              <div className="col d-flex justify-content-center align-items-center">
                <button className="btn btn-danger" type="submit">
                  create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* end of create card */}
    </div>
  );
};

export default Create;
