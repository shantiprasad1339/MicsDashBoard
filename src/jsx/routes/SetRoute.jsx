import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../home/Home';
import User from '../user/User';
import Company from '../company/Company';
import Admin from '../admin/Admin';
import JobList from '../job/JobList';
import UserAdd from '../user/UserAdd';
import AdminAdd from '../admin/AdminAdd';
import Login from '../login/Login';
import Profile from '../profile/Profile';


function SetRoute() {
    return ( 
        <>
        <Routes>
            <Route path='/' element={< Login/>} />
            <Route path='/user' element={<User />} />
            <Route path='/user-add' element={<UserAdd />} />
            <Route path='/company' element={<Company />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin-add' element={<AdminAdd />} />
            <Route path='/job-list' element={<JobList />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        </>
     );
}

export default SetRoute;