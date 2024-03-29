import React, { useState } from 'react';
import './sidebar.css';
import { NavLink } from 'react-router-dom';


function Sidebar() {
    const [sidebarClosed, setSidebarClosed] = useState(true);

    const toggleSubMenu = (e) => {
        const arrowParent = e.target.parentElement.parentElement;
        arrowParent.classList.toggle("showMenu");
    };

    const toggleSidebar = () => {
        setSidebarClosed(!sidebarClosed);
    };

    return (
        <>
            <div className={`sidebar ${sidebarClosed ? 'close' : ''}`}>
                <div className="logo-details">
                    <i className='bi bi-person-circle'></i>
                    <span className="logo_name">MICS</span>
                    
                </div>

                <ul className="nav-links">
                    <li>
                        <NavLink to="/">
                            <i className='bi bi-house'></i>
                            <span className="link_name">Dashboard</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="/">Dashboard</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link" onClick={toggleSubMenu}>
                            <NavLink to="/user">
                                <i className='bi bi-people'></i>
                                <span className="link_name">Users</span>
                            </NavLink>
                            <i className='bi bi-arrow-down-short arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="/user">Users</NavLink></li>
                            <li><NavLink to="/user"><i className="bi bi-person-lines-fill"></i> User List</NavLink></li>
                            {/* <li><NavLink to="/user-add"><i className="bi bi-person-plus"></i> User Add</NavLink></li> */}
                            {/* <li><NavLink to="#">Finance API</NavLink></li> */}
                        </ul>
                    </li>
                    <li>
                        <div className="icon-link" onClick={toggleSubMenu}>
                            <NavLink to="/company">
                                <i className='bi bi-people-fill'></i>
                                <span className="link_name">Company</span>
                            </NavLink>
                            <i className='bi bi-arrow-down-short arrow'></i>
                        </div>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="/company">Company</NavLink></li>
                            <li><NavLink to="/company"><i className="bi bi-person-lines-fill"></i> Company List</NavLink></li>
                            {/* <li><NavLink to="#"><i className="bi bi-person-plus"></i> Company Add</NavLink></li> */}
                            {/* <li><NavLink to="#">Finance API</NavLink></li> */}
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/admin">
                            <i className='bi bi-person-badge'></i>
                            <span className="link_name">Admin</span>
                        </NavLink>
                        <ul className="sub-menu">
                            <li><NavLink className="link_name" to="/admin">Admin</NavLink></li>
                            <li><NavLink to="/admin"><i className="bi bi-person-lines-fill"></i> Admin List</NavLink></li>
                            <li><NavLink to="/admin-add"><i className="bi bi-person-plus"></i> Admin Add</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/job-list">
                            <i className='bi bi-card-list'></i>
                            <span className="link_name">Job List</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="/job-list">Job List</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/profile">
                            <i className='bi bi-person-fill'></i>
                            <span className="link_name">Profile</span>
                        </NavLink>
                        <ul className="sub-menu blank">
                            <li><NavLink className="link_name" to="/profile">Profile</NavLink></li>
                        </ul>
                    </li>
                    {/* Other menu items */}
                </ul>
            </div>

            <section className="home-section">
                <div className="home-content">
                    <i className='bi bi-list fs-2 fw-bold mt-2 ms-1 me-3' onClick={toggleSidebar}></i>
                    {/* <span className="text">Dashboard</span> */}

                </div>
            </section>
        </>
    );
}

export default Sidebar;