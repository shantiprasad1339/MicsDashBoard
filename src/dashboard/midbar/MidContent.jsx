import React from 'react';
import './midContent.css';
import { NavLink } from 'react-router-dom';

function MidContent() {
    return (
        <>
            <div className='breadcrumb-css'>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active fs-5 fw-bold ms-3 mt-2" aria-current="page">Dashboard</li>
                    </ol>
                </nav>
            </div>

            <section className='mid-content-css'>
                <div className="container mt-4">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                        <div className="col">
                            <div className="card radius-10 border-start border-0 border-3 border-info">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Users</p>
                                            <h4 className="my-1 text-info">4805</h4>
                                            <p className="mb-0 font-13">+2.5% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto"><i className="fa fa-shopping-cart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10 border-start border-0 border-3 border-danger">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Companies</p>
                                            <h4 className="my-1 text-danger">4,245</h4>
                                            <p className="mb-0 font-13">+5.4% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-bloody text-white ms-auto"><i className="fa fa-dollar"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10 border-start border-0 border-3 border-success">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Jobs</p>
                                            <h4 className="my-1 text-success">34.6%</h4>
                                            <p className="mb-0 font-13">-4.5% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-ohhappiness text-white ms-auto"><i className="fa fa-bar-chart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card radius-10 border-start border-0 border-3 border-warning">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p className="mb-0 text-secondary">Total Customers</p>
                                            <h4 className="my-1 text-warning">8.4K</h4>
                                            <p className="mb-0 font-13">+8.4% from last week</p>
                                        </div>
                                        <div className="widgets-icons-2 rounded-circle bg-gradient-blooker text-white ms-auto"><i className="fa fa-users"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MidContent;