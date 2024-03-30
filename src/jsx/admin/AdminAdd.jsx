import React, { useState } from "react";
import "./admin.css";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";

function AdminAdd() {
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
                  Admin{" "}
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
                  <b>Admin Add</b>
                </li>
              </ol>
            </nav>
            <Link to="/admin">
              {" "}
              <span className="badge text-bg-info text-white badge-button">
                Admin List
              </span>{" "}
            </Link>
          </div>
        </div>

        <section className="mid-content-css">
          <AdminAddBox />
        </section>
      </Midbar>
    </>
  );
}

export default AdminAdd;

const AdminAddBox = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  function addAdmin() {
    const baseUrl = "https://mountinfosys.com/";
    const endPoint = "admin/create";
    const admin = {};
    axios.post(baseUrl + endPoint).then((res) => {
      console.log(res);
    });
  }
  function createUser(e){
    e.preventDefault()
    console.log(adminData);
  }
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-2"></div>
          <div className="col-md-8 user-border">
            <h2 className="text-center mb-4">Create Admin Form</h2>
            <form >
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputName"
                    placeholder="Full Name"
                    value={adminData.name}
                    onChange={(e) =>
                      setAdminData({ ...adminData, name: e.target.value })
                    }
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
                    value={adminData.email} // Use value instead of placeholder for controlled input
                    onChange={(e) =>
                      setAdminData({ ...adminData, email: e.target.value })
                    }
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
                    value={adminData.number} // Use value instead of placeholder for controlled input
                    onChange={(e) =>
                      setAdminData({ ...adminData, number: e.target.value })
                    }
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
                    value={adminData.role} // Use value instead of placeholder for controlled input
                    onChange={(e) =>
                      setAdminData({ ...adminData, role: e.target.value })
                    }
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
                    value={adminData.password} // Use value instead of placeholder for controlled input
                    onChange={(e) =>
                      setAdminData({ ...adminData, password: e.target.value })
                    }
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
              </div>

              <div className="col text-center">
                <button type="" className="btn btn-primary" onClick={createUser}>
                  Add User
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};
