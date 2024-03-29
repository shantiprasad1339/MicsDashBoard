import React, { useState } from 'react';
import Midbar from '../../dashboard/midbar/Midbar';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

function Admin() {

    const AdminData = [
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
        {
            name: 'Mark Voldov',
            img: "https://bootdey.com/img/Content/avatar/avatar1.png",
            email: "mvoges@email.com",
            country: "India",
            designation: "React Developer",
            date: "22 Mar, 2024"
        },
    ]

    return (
        <>
            <Midbar>
                <div className='breadcrumb-css'>
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item active fs-4 fw-bold ms-2 mt-2" aria-current="page"> Admin</li>
                            </ol>
                        </nav>
                    </div>

                    <div className='d-flex justify-content-between'>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb ms-3">
                                <li className="breadcrumb-item"><Link to="/"> <b> Home </b></Link></li>
                                <li className="breadcrumb-item active" aria-current="page"><b>Admin List</b></li>
                            </ol>
                        </nav>
                        <Link to="/admin-add"> <span className="badge text-bg-info text-white badge-button">Add Admin</span> </Link>
                    </div>
                </div>

                <section className='mid-content-css'>
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
                                                    <th>Designation</th>
                                                    <th>Role</th>
                                                    <th>Created Date</th>
                                                    <th className="text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {AdminData.map((item, index) => (
                                                    <tr className="align-middle" key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <img src={item.img} className="avatar sm rounded-pill me-3 flex-shrink-0" alt="Customer" />
                                                                <div>
                                                                    <div className="h6 mb-0 lh-1">{item.name}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{item.email}</td>
                                                        <td> <span className="d-inline-block align-middle">{item.country}</span></td>
                                                        <td><span>{item.designation}</span></td>
                                                        <td>Admin</td>
                                                        <td>{item.date}</td>
                                                        <td>
                                                            <div className="d-flex justify-content-around">
                                                                <button className="btn btn-sm btn-outline-success" type="button"> <AdminEditModal /> </button>
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
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
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

function AdminEditModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <span onClick={handleShow}>
                Edit
            </span>

            <Modal show={show} onHide={handleClose} dialogClassName="modal-md">
                <Modal.Header closeButton>
                    <Modal.Title className='text-primary fw-bold'>Admin</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row mb-4">

                            <div className="col-md-12">
                                <h3 className='text-center mb-4'>Update Admin </h3>
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
                                                <option value="Admin">Admin</option>
                                                <option value="Manager">Manager</option>
                                                <option value="User">User</option>
                                            </select>
                                            <label htmlFor="floatingSelect">Work Team</label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingPassword" placeholder="Password" />
                                            <label htmlFor="floatingPassword">Password</label>
                                        </div>
                                    </div>

                                    <div className="col text-center">
                                        <button type="submit" className='btn btn-primary'>Update Admin</button>
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