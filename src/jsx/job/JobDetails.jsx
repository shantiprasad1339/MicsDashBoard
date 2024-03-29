import React from 'react';
import './jobDetails.css';
import img from './milogo.png';

function JobDetails() {

    return (
        <>
            <div className="jb-del-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card bg-white shadow-sm rounded border-0 mt-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h5 className="card-title intern-title">Software Business Analytics</h5>
                                            <p className="text-muted cmpy-name">Mount Infosolutions & Consultancies Pvt.Ltd</p>
                                            <p className="text-muted rate-text">4.5 <span><i className="bi bi-star-fill text-warning"></i></span> (1000 reviews)</p>
                                        </div>
                                        <img src={img} alt="company logo" className="img-fluid intern-logo-img" />
                                    </div>

                                    <p className="text-muted work-text"><i className="bi bi-house-door-fill fs-5"></i> Work from Home</p>
                                    <div className="display-tag">
                                        <div>
                                            <p className="display-font"><i className="bi bi-briefcase-fill"></i> Experience</p>
                                            <p className="text-muted para-intern">6 Months - 1 Year</p>
                                        </div>

                                        <div className="tag-side">
                                            <p className="display-font"><i className="bi bi-geo-alt-fill"></i> Location</p>
                                            <p className="text-muted para-intern">Delhi, Jaipur</p>
                                        </div>

                                        <div className="tag-side">
                                            <p className="display-font"><i className="bi bi-cash-coin"></i> Salary</p>
                                            <p className="text-muted para-intern">Not disclosed</p>
                                        </div>
                                    </div>
                                    {/* <hr /> */}
                                    {/* <div className="share-post">
                                        <div className="d-flex"><p className="text-muted para-intern mt-0">2 days ago</p>
                                            <p className="ms-3" style={{ cursor: "pointer" }}><i className="bi bi-share fs-5 text-primary"></i></p></div>
                                        <a href="#"><button className="text-white bg-primary px-5 py-2 shadow rounded border-0">Apply Now</button></a>
                                    </div> */}
                                </div>
                            </div>

                            <div className="card mt-4 border-0 shadow-sm rounded">
                                <div className="card-body">
                                    <h5 className="card-title des-title">Job Description</h5>
                                    <h6 className="card-subtitle mt-2 skill-des">Required skill:</h6>
                                    <ul className="mt-2">
                                        <li className="skill-list mt-1">Candidate should have 5+ Years of experience.</li>
                                        <li className="skill-list mt-1">Candidate should have 3+ Years of experience in Java.</li>
                                        <li className="skill-list mt-1">Should have experience in Angular.</li>
                                        <li className="skill-list mt-1">Candidate should have 5+ Years of experience.</li>
                                        <li className="skill-list mt-1">Candidate should have 5+ Years of experience.</li>
                                        <li className="skill-list mt-1">Candidate should have 5+ Years of experience.</li>
                                    </ul>
                                    <h6 className="card-subtitle mt-4 skill-des">Roles & Responsibility:</h6>
                                    <ul className="mt-2">
                                        <li className="skill-list mt-1">To create work plans, monitor and track the work schedule for on time delivery as per the defined quality standards.</li>
                                        <li className="skill-list mt-1">To develop and guide the team members in enhancing their technical capabilities and increasing productivity.</li>
                                        <li className="skill-list mt-1">To ensure process improvement and compliance in the assigned module, and participate in technical discussions or review.</li>
                                        <li className="skill-list mt-1">To prepare and submit status reports for minimizing exposure and risks on the project or closure of escalations.</li>

                                    </ul>

                                    <p className="mt-5 text-muted">Role :</p>
                                    <p className="role-job">Full stack Developer</p>
                                    <p className="text-muted">Industry Type :</p>
                                    <p className="role-job">IT Services & Consulting</p>
                                    <p className="text-muted">Department :</p>
                                    <p className="role-job">Engineering - Software & QA</p>
                                    <p className="text-muted">Employment Type :</p>
                                    <p className="role-job">Full Time, Permanent</p>
                                    <p className="text-muted">Role Category :</p>
                                    <p className="role-job">Software Development</p>
                                    <p className="text-muted">Education :</p>
                                    <p className="role-job text-primary">UG :</p>
                                    <p className="role-job">Any Graduate</p>
                                    <p className="text-muted">Key skill :</p>
                                    <div className="d-flex">
                                        <p className="role-job key-skill"><i className="bi bi-asterisk text-primary"></i> Java</p>
                                        <p className="role-job key-skill ms-2"><i className="bi bi-asterisk text-primary"></i> Java</p>
                                    </div>
                                    <p className="text-muted">Number of openings :</p>
                                    <p className="role-job">5</p>
                                    <p className="text-muted">Job activity :</p>
                                    <p className="role-job">Posted 2 days ago</p>

                                </div>
                            </div>

                            <div className="card mt-4 border-0 rounded shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title des-title">About MICS</h5>
                                    <a href="#" className="text-decoration-none"><p className="web-share">website <i className="bi bi-box-arrow-up-right"></i></p></a>
                                    <p className="cmp-about">AccioJob is an ed-tech company backed by YC and led by IIT Delhi alumni. We train students for full-stack development, DS, and algorithm with guaranteed placement on the 'pay after placement' model. AccioJob is a Y-Combinator-backed company founded by IIT Delhi Alumni, solving the employability problem in India. We run a 6-month program for college students/graduates to upskill themselves and break into software dev roles at top tech companies.</p>
                                    <p className="cmp-about">Our program is a pay-after-placement program; our students pay us only after getting placed with a minimum CTC of 5 LPA. We have been able to help students get into companies like Amazon, Paytm, Walmart, Visa, BharatPe, etc., and have witnessed a massive impact on students' learnings and careers.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobDetails;