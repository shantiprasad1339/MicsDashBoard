import React, { useEffect, useState } from "react";
import Midbar from "../../dashboard/midbar/Midbar";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";

function Profile() {
  const [image, setImage] = useState(null);
  const [imageUrl,setImageUrl] = useState(null)
  const [userData,setUserData] = useState(null)
  const baseUrl = "https://mountinfosys.com/";
  const endPoint = "admin/profile/";
  let userId = localStorage.getItem("user");
  function getProfile() {
    axios.get(baseUrl + endPoint + userId).then((res) => {
      console.log(res);
      setUserData(res.data.data)
      setImage(res.data.data.profilePic)
    });
  }
  useEffect(() => {
    getProfile();
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageUrl(file)
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(image);
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
                  Profile
                </li>
              </ol>
            </nav>

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ms-3">
                <li className="breadcrumb-item">
                  <Link to={`/home/${userId}`}>
                    {" "}
                    <b> Home </b>
                  </Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <b>Profile Edit</b>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="mid-content-css">
          <div className="container ">
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="e-profile">
                        <div className="row">
                          <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" style={{ width: "180px" }}>
                              <div className="col-4">
                              <img
                                  src={image}
                                  style={{
                                    width: "140px",
                                    height: "140px",
                                    borderRadius: "50%",
                                  }}
                                  alt="Profile"
                                />
                               
                              </div>
                              <div className="mt-3">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleImageChange}
                                  className="form-control"
                                />
                              </div>
                              <div className="mt-3">
                                {/* {image ? (
                                  <button
                                    className="btn btn-success me-2"
                                    onClick={handleSubmit}
                                  >
                                    Upload Image
                                  </button>
                                ) : (
                                  <></>
                                )} */}
                              </div>
                            </div>
                          </div>

                          <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                MICS ADMIN
                              </h4>
                                  
                            </div>
                            <div className="text-center">
                              <span className="badge text-bg-primary fs-6">
                                Admin
                              </span>
                              <div className="text-muted">
                                {/* <small>{userData.createdAt}</small> */}
                              </div>
                            </div>
                          </div>
                          <hr className="mt-3" />
                        </div>
                              

                        <div className="tab-content pt-4">
                          <div className="tab-pane active">
                            <div className="row">
                              <div className="col">
                         {userData && <UpdateProfile data={userData} imageUrl={imageUrl}/>}       

                               
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Profile;

function UpdateProfile({data,imageUrl}) {
 
  const [profile, setProfile] = useState(data);
  const baseUrl = "https://mountinfosys.com/";
  const endPoint = "admin/update/";
  let userId = localStorage.getItem("user");
  let role = localStorage.getItem("userRole");
const navigate = useNavigate()

  function handleInputField(e) {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }



function updateProfile(e){
  e.preventDefault()
  console.log(profile,imageUrl);

    const profileData = {
      profilePic:imageUrl,
password:profile.password,
name:profile.name,
email:profile.email,
number:profile.number,
role:profile.role
    }
    const updateProfile = new FormData();

    // Append profilePic
    updateProfile.append('profilePic', profileData.profilePic);
    
    // Append password
    updateProfile.append('password', profileData.password);
    
    // Append name
    updateProfile.append('name', profileData.name);
    
    // Append email
    updateProfile.append('email', profileData.email);
    
    // Append number
    updateProfile.append('number', profileData.number);
    
    // Append role
    updateProfile.append('role', profileData.role);



    axios.put(baseUrl+endPoint+ userId,updateProfile,{headers:{role:role}}).then((res)=>{
        console.log(res);
        if(res.data.message == "update successfully"){
          alert('Profile Updated')
          navigate(`/home/${userId}`);
        }
    })
}
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* <div className="col-12 col-sm-6">
            <div className="form-group">
              <label className="form-label fw-bold">Full Name</label>
              <input
                className="form-control"
                type="text"
                name="fullname"
                value={profile.fullname}
                onChange={handleInputField}
              />
            </div>
          </div> */}

          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label fw-bold">Username</label>
             <input
                className="form-control"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleInputField}
              />
             
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label fw-bold">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="user@example.com"
                name="email"
                value={profile.email}
                onChange={handleInputField}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label fw-bold">Number</label>
              <input
                className="form-control"
                type="number"
                placeholder="user@example.com"
                name="number"
                value={profile.number}
                onChange={handleInputField}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-label fw-bold">Role</label>
              <input
                className="form-control"
                type="text"
                placeholder="user@example.com"
                name="role"
                value={profile.role}
                onChange={handleInputField}
              />
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="form-group">
              <label className="form-label fw-bold">About</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="My Bio"
                name="about"
                // value={profile.about}
                onChange={handleInputField}
              />
            </div>
          </div> */}

          
        </div>


      
      </form>
      <form onSubmit={''}>
        <div className="row mt-5">
          <div className="mb-2 fs-5">
            <b>Change Password</b>
          </div>

        
         

          <div className="col-12 col-sm-6 mt-3">
            <div className="form-group">
              <label className="form-label fw-bold">New Password</label>
              <input
                className="form-control"
                type="text"
                name="password"
                
                onChange={handleInputField}
                required
              />
            </div>
          </div>

          {/* <div className="col-12 col-sm-6 mt-3">
            <div className="form-group">
              <label className="form-label fw-bold">Confirm Password</label>
              <input
                className="form-control"
                type="password"
                name="confirmPassword"
               
              />
            </div>
          </div> */}
        </div>

        <div className="row mt-4">
          <div className="col d-flex justify-content-end">
          <button className="btn btn-success" type="" onClick={updateProfile}>
              Update Profile
            </button>
          </div>
        </div>
      </form>    </>
  );
}

