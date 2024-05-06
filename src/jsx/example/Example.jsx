import React, { useState } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";
import axios from "axios";
const Example = () => {
  const [position, setPosition] = useState();
  function addPosition(e) {
    e.preventDefault();
    const baseUrl = "https://mountinfosys.com/";
    const positionUrl = "applyposition";
    axios
      .post(baseUrl + positionUrl, {
        title: position,
      })
      .then((res) => {
        console.log(res);
        setPosition("");
        alert("position Added");
      });
  }
  return (
    <>
      <Midbar>
        <div className="breadcrumb-css">
          <div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li
                  className="breadcrumb-item active fs-4 fw-bold ms-2 mt-2"
                  aria-current="page"
                >
                  {" "}
                  User
                </li>
              </ol>
            </nav>
          </div>

          <div className="d-flex justify-content-between">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ms-3">
                <li className="breadcrumb-item">
                  <Link to="/home">
                    {" "}
                    <b> Home </b>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Add Position</b>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div
          className="container"
          style={{ position: "relative", top: "110px" }}
        >
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8 user-border">
              <h2 className="text-center mb-4">Add Position</h2>

              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={position}
                    id="floatingInputName"
                    placeholder="Enter Position "
                    onChange={(e) => setPosition(e.target.value)}
                  />
                  <label htmlFor="floatingInputName">Full Name</label>
                </div>
              </div>

              <div className="col text-center">
                <button
                  type=""
                  className="btn btn-primary"
                  onClick={addPosition}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </Midbar>
    </>
  );
};

export default Example;
