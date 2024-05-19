import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = ({ setId }) => {
  
  const [detailData, setDetailData] = useState([]);
  const navigate = useNavigate();
  const [deleteData, setDeleteData] = useState([]);

  // useeffect for fetching the data
  useEffect(() => {
    fetchData();
  }, [deleteData]); //deletedata for rerendering

  //fetching the data by get method using api
  const fetchData = async () => {
    await axios
      .get("https://664800bf2bb946cf2f9f6c77.mockapi.io/api/persondetails")
      .then((res) => setDetailData(res.data))
      .catch((error) => console.log(error));
  };

  // editting by id
  const handleEdit = (id) => {
    setId(id);
    navigate(`/edit/${id}`);
  };

  //deleting the data from api using delete method

  const handleDelete = async (id) => {
    await axios
      .delete(
        `https://664800bf2bb946cf2f9f6c77.mockapi.io/api/persondetails/${id}`
      )
      .then((res) => setDeleteData(res.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4 m-1">
          {detailData.map((element, index) => {
            return (
              <div key={index}>
                <div className="col">
                  {/* start of card */}
                  <div className="card">
                    {/* card-header */}
                    <div className="row">
                      <div className="col">
                        <div className="card-header">
                          <h2 className="title">{element.name}</h2>
                        </div>
                      </div>
                    </div>
                    {/* card-body */}
                    <div className="card-body">
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Username</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.username}
                        </p>
                      </div>
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Email</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.email}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col">
                          <h4 className="card-text text-decoration-underline ">
                            Address
                          </h4>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Street</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.address.street}
                        </p>
                      </div>
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Suite</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.address.suite}
                        </p>
                      </div>
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">City</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.address.city}
                        </p>
                      </div>

                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Zipcode</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.address.zipcode}
                        </p>
                      </div>

                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Phone</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.phone}
                        </p>
                      </div>
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Website</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          {element.website}
                        </p>
                      </div>
                      <div className="row">
                        <div className="col">
                          <h4 className="card-text  text-decoration-underline">
                            Company
                          </h4>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">Company_name</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.company.name}
                        </p>
                      </div>
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5">
                          Company_catchPhrase
                        </p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.company.catchPhrase}
                        </p>
                      </div>
                      <div className="row">
                        <p className="subTitle col-md-6 fs-5"> Company_bs</p>
                        <p className=" col-md-6  fs-5   text-primary">
                          :{element.company.bs}
                        </p>
                      </div>

                      <div className="row">
                        <div className=" col d-flex justify-content-end align-items-end ">
                          {/* edit-button */}
                          <button
                            className="btn btn-success m-2 "
                            onClick={() => {
                              handleEdit(element.id);
                            }}
                          >
                            EDIT
                          </button>
                          {/* delete-button */}
                          <button
                            className="btn btn-danger m-2"
                            onClick={() => {
                              handleDelete(element.id);
                            }}
                          >
                            DELETE
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* end of card body */}
                  </div>
                  {/* end of card */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
