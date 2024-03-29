import React, { useEffect, useState } from 'react';
import Midbar from '../../dashboard/midbar/Midbar';
import { Link } from 'react-router-dom';

function Profile() {
    const [image, setImage] = useState(null);

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

    const handleSubmit = () => {
        console.log('Image submitted:', image);
    };

    return (
        <>
            <Midbar>
                <div className='breadcrumb-css'>
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active fs-4 fw-bold ms-2 mt-2" aria-current="page"> Profile</li>
                            </ol>
                        </nav>

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb ms-3">
                                <li className="breadcrumb-item"><Link to="/"> <b> Home </b></Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><b>Profile Edit</b></li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <section className='mid-content-css'>
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
                                                                <img src={image ? image : "//static.naukimg.com/s/5/105/i/displayProfilePlaceholder.png"} style={{ width: "140px", height: "140px", borderRadius: "50%" }} alt="Profile" />
                                                            </div>
                                                            <div className="mt-3">
                                                                <input type="file" accept="image/*" onChange={handleImageChange} className='form-control' />
                                                            </div>
                                                            <div className="mt-3">
                                                                {image ? (
                                                                    <button className="btn btn-success me-2" onClick={handleSubmit}>Upload Image</button>
                                                                ) : (
                                                                    <>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                                                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                                                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">MICS ADMIN</h4>
                                                            <div className="text-muted"><small>Last seen 2 hours ago</small></div>
                                                        </div>
                                                        <div className="text-center">
                                                            <span className="badge text-bg-primary fs-6">Admin</span>
                                                            <div className="text-muted"><small>Joined 22 Mar 2024</small></div>
                                                        </div>
                                                    </div>
                                                    <hr className='mt-3' />

                                                </div>
                                                <ul className="nav nav-tabs mt-4">
                                                    <li className="nav-item"><a href="" className="active nav-link fw-bold fs-5">Settings</a></li>
                                                </ul>

                                                <div className="tab-content pt-4">
                                                    <div className="tab-pane active">
                                                        <div className="row">
                                                            <div className="col">

                                                                <UpdateProfile />

                                                                <ChangePassword />

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


function UpdateProfile() {

    const initialValue = {
        fullname: "",
        username: "",
        email: "",
        about: "",
    }

    const [profile, setProfile] = useState(initialValue);

    function handleInputField(e) {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(profile);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <div className="form-group">
                            <label className='form-label fw-bold'>Full Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="fullname"
                                value={profile.fullname}
                                onChange={handleInputField}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-sm-6">
                        <div className="form-group">
                            <label className='form-label fw-bold'>Username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={profile.username}
                                onChange={handleInputField}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="form-group">
                            <label className='form-label fw-bold'>Email</label>
                            <input
                                className="form-control"
                                type="email"
                                placeholder="user@example.com"
                                name='email'
                                value={profile.email}
                                onChange={handleInputField}
                            />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="form-group">
                            <label className='form-label fw-bold'>About</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="My Bio"
                                name='about'
                                value={profile.about}
                                onChange={handleInputField}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-success" type="submit">Update Profile</button>
                    </div>
                </div>
            </form>
        </>
    );
}



function ChangePassword() {

    const initialValue = {
        newPassword: "",
        confirmPassword: "",
    }

    const [password, setPassword] = useState(initialValue);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        if (error || success) {
            const timer = setTimeout(() => {
                setError("");
                setSuccess("");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error, success]);

    function handleInputField(e) {
        setPassword({ ...password, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (password.newPassword === password.confirmPassword) {
            console.log("Passwords match. Submitting...");
            setSuccess("Password changed successfully!");
            setPassword(initialValue);
            setError("");
        } else {
            setError("Passwords do not match. Please try again.");
            setSuccess("");
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row mt-5">
                    <div className="mb-2 fs-5"><b>Change Password</b></div>

                    {error && (
                        <div className="row">
                            <div className="col">
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            </div>
                        </div>
                    )}

                    {success && (
                        <div className="row">
                            <div className="col">
                                <div className="alert alert-success" role="alert">
                                    {success}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="col-12 col-sm-6 mt-3">
                        <div className="form-group">
                            <label className='form-label fw-bold'>New Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name='newPassword'
                                value={password.newPassword}
                                onChange={handleInputField}
                                required
                            />
                        </div>
                    </div>

                    <div className="col-12 col-sm-6 mt-3">
                        <div className="form-group">
                            <label className='form-label fw-bold'>Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name='confirmPassword'
                                value={password.confirmPassword}
                                onChange={handleInputField}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col d-flex justify-content-end">
                        <button className="btn btn-success" type="submit">Change Password</button>
                    </div>
                </div>
            </form>
        </>
    );
}