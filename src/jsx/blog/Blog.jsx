import React from 'react';
import Midbar from "../../dashboard/midbar/Midbar";
import { Link } from 'react-router-dom';
import img from './milogo.png';

function Blog() {
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
                                    Blog
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
                                    <b>Blog List</b>
                                </li>
                            </ol>
                        </nav>
                        <Link to="/blog-add">
                            {" "}
                            <span className="badge text-bg-info text-white badge-button">
                                Add Blog
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
                                        <table className="table table-hover mb-0">
                                            <thead className="small text-uppercase bg-body text-muted">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Author Name</th>
                                                    <th>Title</th>
                                                    <th>Sub-Title</th>
                                                    <th>Description</th>
                                                    <th>Image</th>
                                                    <th>Created Date</th>
                                                    <th className='text-danger'>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src={img}
                                                                className="avatar sm rounded-pill me-3 flex-shrink-0"
                                                                alt="Customer"
                                                            />
                                                            <div>
                                                                <div className="h6 mb-0 lh-1">
                                                                    Argha Das
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Flutter Developer</td>
                                                    <td>Flutter is designed...</td>
                                                    <td>Flutter is an open-source UI software development... </td>
                                                    <td><img src={img} alt="" style={{ width: "70px", height: "50px" }} /></td>
                                                    <td>May 06, 2024</td>
                                                    <td className='text-center'>
                                                        <i class="bi bi-trash-fill text-danger fs-4" style={{ cursor: "pointer" }}></i>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img
                                                                src={img}
                                                                className="avatar sm rounded-pill me-3 flex-shrink-0"
                                                                alt="Customer"
                                                            />
                                                            <div>
                                                                <div className="h6 mb-0 lh-1">
                                                                    Argha Das
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Flutter Developer</td>
                                                    <td>Flutter is designed...</td>
                                                    <td>Flutter is an open-source UI software development... </td>
                                                    <td><img src={img} alt="" style={{ width: "70px", height: "50px" }} /></td>
                                                    <td>May 06, 2024</td>
                                                    <td className='text-center'>
                                                        <i class="bi bi-trash-fill text-danger fs-4" style={{ cursor: "pointer" }}></i>
                                                    </td>
                                                </tr>
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

export default Blog;