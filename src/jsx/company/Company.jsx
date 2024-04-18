import React, { useState, useEffect } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import "./company.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function Company() {
  const baseUrl = "https://mountinfosys.com/";
  const endPoint = "company/list";
  const [Companies, setCompanies] = useState();
  let userId = localStorage.getItem("user");

  function getUserList() {
    axios.get(baseUrl + endPoint).then((res) => {
      console.log(res.data.data);
      setCompanies(res.data.data);
    });
  }
  useEffect(() => {
    getUserList();
  }, []);

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
                  Company
                </li>
              </ol>
            </nav>
          </div>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ms-3">
              <li className="breadcrumb-item">
                <Link to={`/home/${userId}`}>
                  {" "}
                  <b> Home </b>
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <b>Company List</b>
              </li>
            </ol>
          </nav>
        </div>

        <section className="mid-content-css">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3 mb-lg-5">
                <div className="overflow-hidden card table-nowrap table-card">
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <thead className="small text-uppercase bg-body text-muted">
                        <tr>
                          <th>SR NO.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>City</th>
                          <th>Designation</th>
                          <th>Created Date</th>
                          {/* <th className="text-center">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {Companies &&
                          Companies.map((item, index) => {
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
                                <td>{index + 1}</td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <img
                                      src={baseUrl+item.profilePic}
                                      className="avatar sm rounded-pill me-3 flex-shrink-0"
                                      alt="Customer"
                                    />
                                    <div>
                                      <div className="h6 mb-0 lh-1">
                                        {item.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>{item.email}</td>
                                <td>
                                  {" "}
                                  <span className="d-inline-block align-middle">
                                    {item.address}
                                  </span>
                                </td>
                                <td>
                                  <span>{item.designation}</span>
                                </td>
                                <td>{formattedDate}</td>
                                {/* <td>
                                  <div className="d-flex justify-content-around">
                                    <button
                                      className="btn btn-sm btn-outline-success"
                                      type="button"
                                    >
                                      {" "}
                                      <CompanyEditModal />{" "}
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger " type="button"><i className="bi bi-trash"></i></button>
                                  </div>
                                </td> */}
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end">
                    <li className="page-item disabled">
                      <a className="page-link">Previous</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
          </div>
        </section>
      </Midbar>
    </>
  );
}

export default Company;

function CompanyEditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>Edit</span>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-md">
        <Modal.Header closeButton>
          <Modal.Title className="text-primary fw-bold">Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-12">
                <h3 className="text-center mb-4">Update Company </h3>
                <form>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputName"
                        placeholder="Full Name"
                      />
                      <label htmlFor="floatingInputName">Full Name</label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">Email address</label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInputMobile"
                        placeholder="Full Name"
                      />
                      <label htmlFor="floatingInputMobile">Mobile Number</label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating mb-3">
                      <select
                        className="form-select"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option>Select</option>
                        <option value="Experience">Experience</option>
                        <option value="Fresher">Fresher</option>
                      </select>
                      <label htmlFor="floatingSelect">Works Status</label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label htmlFor="floatingPassword">Password</label>
                    </div>
                  </div>

                  <div className="col text-center">
                    <button type="submit" className="btn btn-primary">
                      Update Company
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
      </Modal>
    </>
  );
}
