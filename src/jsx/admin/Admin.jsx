import React, { useState, useEffect } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

function Admin() {
  const [AdminData, setAdminList] = useState();
  const userRole = localStorage.getItem("userRole");
  function getAdminList() {
    const baseUrl = "https://mountinfosys.com/";
    const endPoint = "admin/list";
    axios
      .get(baseUrl + endPoint, { headers: { role: userRole } })
      .then((res) => {
        setAdminList(res.data.data);
        console.log(res);
      });
  }
  useEffect(() => {
    getAdminList();
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
                  Admin
                </li>
              </ol>
            </nav>
          </div>

          <div className="d-flex justify-content-between">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ms-3">
                <li className="breadcrumb-item">
                  <Link to="/">
                    {" "}
                    <b> Home </b>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Admin List</b>
                </li>
              </ol>
            </nav>
            <Link to="/admin-add">
              {" "}
              <span className="badge text-bg-info text-white badge-button">
                Add Admin
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
                          <th>SR No.</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Country</th>
                          <th>PhoneNumber</th>
                          <th>Role</th>
                          <th>Created Date</th>
                          <th className="text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {AdminData &&
                          AdminData.map((item, index) => (
                            <tr className="align-middle" key={index}>
                              <td>{index + 1}</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={item.img}
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
                                  {item.country}
                                </span>
                              </td>
                              <td>
                                <span>{item.number}</span>
                              </td>
                              <td>Admin</td>
                              <td>{item.createdAt}</td>
                              <td>
                                <div className="d-flex justify-content-around">
                                  <button
                                    className="btn btn-sm btn-outline-success"
                                    type="button"
                                  >
                                    {" "}
                                    <AdminEditModal item={item} />{" "}
                                  </button>
                                  {/* <button className="btn btn-sm btn-outline-danger " type="button"><i className="bi bi-trash"></i></button> */}
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

export default Admin;



function AdminEditModal({ item }) {
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [image, setImage] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        const fileName = file.name;
        setAdmin({ ...admin, image: fileName });
      };
      reader.readAsDataURL(file);
    }
  };



  function updateAdmin(e) {
    e.preventDefault()
    const userRole = localStorage.getItem("userRole");
    const userId = localStorage.getItem("user");

    const baseUrl = "https://mountinfosys.com/";
    const endPoint = "admin/update/";
    axios.put(baseUrl + endPoint + userId, { headers: { role: userRole } }).then((res) => { console.log(res); })
  }
  return (
    <>
      <span onClick={handleShow}>Edit</span>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-md">
        <Modal.Header closeButton>
          <Modal.Title className="text-primary fw-bold">Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row mb-4">
              <div className="col-md-12">
                <h3 className="text-center mb-4">Update Admin </h3>

                <div className="row mt-1 d-flex justify-content-center">
                  <div className="col-sm-auto mb-3">
                    <div className="mx-auto" style={{ width: "180px" }}>
                      <div className="col-12">
                        <img
                          src={
                            image
                              ? image
                              : "//static.naukimg.com/s/5/105/i/displayProfilePlaceholder.png"
                          }
                          style={{
                            width: "140px",
                            height: "140px",
                            borderRadius: "50%",
                            border: "1px solid gray",
                          }}
                          alt="Profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="col">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInputName"
                        value={item.name}
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
                        value={item.email}
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
                        value={item.number}
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
                        <option value="Admin">Admin</option>
                        <option value="Manager">Manager</option>
                        <option value="User">User</option>
                      </select>
                      <label htmlFor="floatingSelect">Work Team</label>
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

                  <div className="col">
                    <div className="mt-3 mb-3">
                      <input type="file" accept="image/*" onChange={handleImageChange} className='form-control' />
                    </div>
                  </div>

                  <div className="col text-center">
                    <button type="" className="btn btn-primary" onClick={updateAdmin}>
                      Update Admin
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
