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
import Hrlist from '../user/Hrlist';

function SetRoute() {
    return ( 
        <>
        <Routes>
            <Route path='/' element={< Login/>} />
            <Route path='/user' element={<User />} />
            <Route path='/hrlist' element={<Hrlist />} />

            <Route path='/user-add/:uId' element={<AdminAdd />} />
            <Route path='/company/:uId' element={<Company />} />
            <Route path='/admin/:uId' element={<Admin />} />
            <Route path='/admin-add' element={<AdminAdd />} />
            <Route path='/job-list/:uId' element={<JobList />} />
            <Route path='/home/:uId' element={<Home />} />
            <Route path='/profile/:uId' element={<Profile />} />
        </Routes>
        </>
     );
}

export default SetRoute;