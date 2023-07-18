import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const nav = useNavigate();

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the formdata object
    const formData = new FormData();
    formData.append('mobile', mobile);
    formData.append('password', password);

    // Make the API request
    fetch('https://demo.jaipurcomputerclasses.com/api/login_mobile', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
        toast.success('Login Successfully');
        nav('/');
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    
<div className="row">
    <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={handleSubmit} className="container">
            <div className="card">
                <div className="card-header">
                    <h2>User Login With Mobile</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Mobile<span className="errmsg">*</span></label>
                        <input value={mobile} type="text" onChange={handleMobileChange} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="text" value={password} onChange={handlePasswordChange} className="form-control"></input>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Login</button> |
                    <Link className="btn btn-primary" to={'/logine'}>Login With Email</Link> |
                    <Link className="btn btn-success" to={'/register'}>New User</Link>
                </div>
            </div>
        </form>
    </div>
</div>
  );
};

export default Login;
