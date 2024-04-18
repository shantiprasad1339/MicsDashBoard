import React, { useState, useEffect } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import "./user.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function Hrlist() {
  const baseUrl = "https://mountinfosys.com/";
  const baseUrl2 = "https://work-pool.blr1.digitaloceanspaces.com/";

  const endPoint = "hr/apply/find-all";
  const [Users, setUsers] = useState();
  let userId = localStorage.getItem("user");
  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const handlePreview = (imageUrl) => {
    setPreviewImageUrl(imageUrl);
  };

  const handleCloseModal = () => {
    setPreviewImageUrl("");
  };
  function getUserList() {
    axios.get(baseUrl + endPoint).then((res) => {
      console.log("hrlist", res.data.data);
      setUsers(res.data.data);
    });
  }
  useEffect(() => {
    getUserList();
  }, []);
 

  return (
    <>
     <Modal2 imageUrl={previewImageUrl} onClose={handleCloseModal} />
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
                  <Link to={`/home/${userId}`}>
                    {" "}
                    <b> Home </b>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Hr Applications</b>
                </li>
              </ol>
            </nav>
            <Link to="/user-add">
              {" "}
              <span className="badge text-bg-info text-white badge-button">
                {/* Add User */}
              </span>{" "}
            </Link>
          </div>
        </div>

        <section className="mid-content-css">
          <div className="container mt-3">
            <div className="row">
              <div className="col-12 mb-3 mb-lg-5">
                <div className="overflow-hidden card table-nowrap table-card">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="small text-uppercase bg-body text-muted">
                        <tr>
                          {/* <th>SR NO.</th> */}
                          <th>Name</th>
                          <th>Number</th>

                          <th>Email</th>
                          <th>City</th>
                          <th>State</th>
                          <th>University</th>
                          <th>Edu. Certificate</th>
                          <th> CV</th>
                          {/* <th className="text-center">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {Users &&
                          Users.map((item, index) => {
                            const date = new Date(item.createdAt);
                            const months = [
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dec",
                            ];
                            const formattedDate = `${date.getDate()}${
                              months[date.getMonth()]
                            }, ${date.getFullYear()} ${date.toLocaleString(
                              "en-US",
                              {
                                hour: "numeric",
                                minute: "numeric",
                                hour12: true,
                              }
                            )}`;

                            return (
                              <tr className="align-middle" key={index}>
                                {/* <td>{index + 1}</td> */}
                                <td>
                                  <div className="d-flex align-items-center">
                                    {/* <img
                                      src={baseUrl + item.profilePic}
                                      className="avatar sm rounded-pill me-3 flex-shrink-0"
                                      alt="Customer"
                                    /> */}
                                    {item.fName} {item.lName}
                                    <div>
                                      <div className="h6 mb-0 lh-1">
                                        {item.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>{item.number}</td>
                                <td>{item.email}</td>
                                <td>
                                  {" "}
                                  <span className="d-inline-block align-middle">
                                    {item.city}
                                  </span>
                                </td>
                                <td>
                                  <span>{item.state}</span>
                                </td>
                                <td>{item.collageName}</td>
                                <td>
                                  {/* <img
                                      src={baseUrl2 + item.lastEducation}
                                      className="avatar sm rounded-pill me-3 flex-shrink-0"
                                      alt="Customer"
                                    /> */}
                                  <button
                                    className="btn btn-primary"
                                    //  onClick={() => handleDownload(baseUrl2 + item.lastEducation)}
                                    onClick={() =>
                                      handlePreview(
                                        baseUrl2 + item.lastEducation
                                      )
                                    }
                                  >
                                    View
                                  </button>
                                </td>
                                <td>
                                  {/* <img
                                      src={baseUrl2 + item.lastEducation}
                                      className="avatar sm rounded-pill me-3 flex-shrink-0"
                                      alt="Customer"
                                    /> */}

                                  <button
                                    className="btn btn-primary"
                                    onClick={() =>
                                      handlePreview(baseUrl2 + item.resume)
                                    }
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Midbar>
     
    </>
  );
}

export default Hrlist;

function Modal2({ imageUrl, onClose }) {
  const handleDownload = (url) => {
    // Create an <a> element
    const link = document.createElement("a");
    link.href = url;
    // Set the download attribute to force download
    link.download = "";
    // Append the <a> element to the document
    document.body.appendChild(link);
    // Programmatically click the link
    link.click();
    // Remove the <a> element from the document
    document.body.removeChild(link);
  };
  return (
    <>
    <div
      className="modal"
      style={{ display: imageUrl ? "block" : "none" }}
      onClick={onClose}
    >
      {/* <span className="close">&times;</span> */}
      <img className="modal-content" src={imageUrl} alt="Preview" />
      <button className="btn btn-primary mdButton" onClick={() => handleDownload(imageUrl)}>Download</button>
    </div>
      </>
  );
}
