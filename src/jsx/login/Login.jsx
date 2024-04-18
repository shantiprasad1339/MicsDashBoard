import React, { useState } from 'react';
import './login.css';
import logo from './milogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
axios
function Login() {

    const initialValue = {
        username : "",
        password : "",
    }

    const[login, setLogin] = useState(initialValue);
    const navigate = useNavigate()

    function handleInputField(e){
        setLogin({...login, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(login);
    }
function Login(){
    const baseUrl = "https://mountinfosys.com/";
    const endPoint = "admin/login";
    const logIn = {
        "email":login.username,
        "password":login.password
      }
    axios.post(baseUrl+endPoint,logIn).then((res)=>{
        if(res.data.status == 200){
            const userName = res.data.data._id;
            const role = res.data.data.role;


            localStorage.setItem('user', userName);
            localStorage.setItem('userRole', role);

            navigate('/home/userName')
        }else{
            alert(res.response.data.msg)
        }
console.log(res);
    }).catch((err)=>{
       alert(err.response.data.msg);
    })
}
    return (
        <>
            <div className="container h-100 login-container">
                <div className="row h-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome back, Admin</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <div className="text-center">
                                            <img src={logo} alt="Andrew Jones" className="img-fluid" width="115" height="115" />
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group mt-3">
                                                <label className='form-label fw-bold'>Username</label>
                                                <input 
                                                className="form-control form-control-lg" 
                                                type="text" 
                                                name="username" 
                                                placeholder="Enter your username"
                                                value={login.username}
                                                onChange={handleInputField}
                                                />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label className='form-label fw-bold'>Password</label>
                                                <input 
                                                className="form-control form-control-lg" 
                                                type="text" 
                                                name="password" 
                                                placeholder="Enter your password"
                                                value={login.password}
                                                onChange={handleInputField}
                                                />
                                            </div>

                                            <div className="text-center mt-4">
                                                <button type='' onClick={Login} className="btn btn-lg btn-primary">Sign in</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;