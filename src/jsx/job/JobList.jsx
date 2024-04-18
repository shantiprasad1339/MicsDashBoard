import React, { useState, useEffect } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import JobDetails from "./JobDetails";
import axios from "axios";
function JobList() {
  const [Jobs, setJobs] = useState();
  let userId = localStorage.getItem("user");

  function getJobList() {
    const baseUrl = "https://mountinfosys.com/";
    const endPoint = "post/get/job";
    axios.get(baseUrl + endPoint).then((res) => {
      setJobs(res.data.data);
      console.log(res.data.data);
    });
  }
  useEffect(() => {
    getJobList();
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
                  Job
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
                <b>Job List</b>
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
                          <th>SR No.</th>
                          <th>Job</th>
                          <th>Company</th>
                          <th>Experience</th>
                          <th>Location</th>
                          <th>No. of Post</th>
                          <th>Job Date</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Jobs &&   
                          Jobs.map((item, index) => (
                            <tr className="align-middle" key={index}>
                              <td> {index + 1} </td>
                              <td> {item.titel} </td>
                              <td>{item.company}</td>
                              <td> {item.experience}</td>
                              <td>{item.location}</td>
                              <td>{item.vacancy}</td>
                              <td>{item.createdAt}</td>
                              <td>
                                <div className="d-flex justify-content-around">
                                  <button
                                    className="btn btn-sm btn-outline-secondary"
                                    type="button"
                                  >
                                    <CompanyEditModal />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <nav aria-label="Page navigation example">
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
                </nav>
              </div>
            </div>
          </div>
        </section>
      </Midbar>
    </>
  );
}

export default JobList;

function CompanyEditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>More</span>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-xl">
        <Modal.Header closeButton>
          <Modal.Title className="text-primary fw-bold">
            Job Post Details
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
                    Job Details
                </Modal.Body> */}

        <JobDetails />

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}
