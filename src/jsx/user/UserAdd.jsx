import React from 'react';
import './userAdd.css';
import Midbar from '../../dashboard/midbar/Midbar';
import { Link } from 'react-router-dom';

function UserAdd() {
    return (
        <>
            <Midbar>
                <div className='breadcrumb-css'>
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active fs-4 fw-bold ms-2 mt-2" aria-current="page"> User</li>
                            </ol>
                        </nav>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb ms-3">
                                <li className="breadcrumb-item"><Link to="/"> <b> Home </b></Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><b>User Add</b></li>
                            </ol>
                        </nav>
                        <Link to="/user"> <span className="badge text-bg-info text-white badge-button">User List</span> </Link>
                    </div>
                </div>
                <section className='mid-content-css'>
                    <UserAddBox />
                </section>
            </Midbar>
        </>
    );
}

export default UserAdd;

const UserAddBox = () => {
    return (
        <>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 user-border">
                        <h2 className='text-center mb-4'>Create User Form</h2>
                        <form>
                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInputName" placeholder="Full Name" />
                                    <label htmlFor="floatingInputName">Full Name</label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control" id="floatingInputMobile" placeholder="Full Name" />
                                    <label htmlFor="floatingInputMobile">Mobile Number</label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-floating mb-3">
                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                        <option>Select</option>
                                        <option value="Experience">Experience</option>
                                        <option value="Fresher">Fresher</option>
                                    </select>
                                    <label htmlFor="floatingSelect">Works Status</label>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                            </div>

                            <div className="col text-center">
                                <button type="submit" className='btn btn-primary'>Add User</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}