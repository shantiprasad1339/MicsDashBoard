import React, { useState } from "react";
import "./admin.css";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from "react-router-dom";
import axios from "axios";
function AdminAdd() {
  const [image, setImage] = useState(null);
  let userId = localStorage.getItem("user");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
                  <Link to={`/home/${userId}`}>
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
  const [image, setImage] = useState(null);

  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    role: "",
    city:"",
    profilePic:""
  });
  
  const userRole = localStorage.getItem("userRole")

  function createUser(e) {
    e.preventDefault();
    console.log(adminData);
    const addUserData = new FormData()
    addUserData.append('name', adminData.name);
    addUserData.append('email', adminData.email);
    addUserData.append('number', adminData.number);
    addUserData.append('password', adminData.password);
    addUserData.append('role', adminData.role);
    addUserData.append('city', adminData.city);
    addUserData.append('profilePic', adminData.profilePic);
    const baseUrl = "https://mountinfosys.com/";
    const endPoint = "admin/create";
    axios.post(baseUrl + endPoint,addUserData,{headers:{role:userRole}}).then((res) => {
      console.log(res);
      if (res.data.status == true){
       alert(adminData.role+" Added")
            // window.location.reload()
      }
    });
  }
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAdminData({ ...adminData, profilePic: e.target.files[0] })

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

  

  return (
    <div className="container">
      <div className="row mt-5 d-flex justify-content-center">
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
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 user-border">
          <h2 className="text-center mb-4">Create Admin Form</h2>
          <form >
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="name"
                  value={adminData.name}
                  onChange={(e) =>
                    setAdminData({ ...adminData, name: e.target.value })
                  }
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
                  name="email"
                  value={adminData.email}
                  onChange={(e) =>
                    setAdminData({ ...adminData, email: e.target.value })
                  }
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
                  name="mobile"
                  value={adminData.number}
                  onChange={(e) =>
                    setAdminData({ ...adminData, number: e.target.value })
                  }
                  className="form-control"
                  id="floatingInputMobile"
                  placeholder="Mobile Number"
                />
                <label htmlFor="floatingInputMobile">Mobile Number</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  name="city"
                  value={adminData.city}
                  onChange={(e) =>
                    setAdminData({ ...adminData, city: e.target.value })
                  }
                  className="form-control"
                 
                  placeholder="city"
                />
                <label htmlFor="floatingPassword">City</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <select
                  name="team"
                  value={adminData.role}
                  onChange={(e) =>
                    setAdminData({ ...adminData, role: e.target.value })
                  }
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
                  type="password"
                  name="password"
                  value={adminData.password}
                  onChange={(e) =>
                    setAdminData({ ...adminData, password: e.target.value })
                  }
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword">Password</label>
              </div>
            </div>
           

            <div className="col">
              <div className="mt-3 mb-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={
                    handleImageChange
                  }
                  className="form-control"
                />
              </div>
            </div>

            <div className="col text-center">
              <button onClick={createUser} className="btn btn-primary">
                Add User
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
