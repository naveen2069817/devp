import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginE = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the formdata object
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch('https://demo.jaipurcomputerclasses.com/api/login_email', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success('Login Successfully');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    
<div className="row">
    <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
        <form onSubmit={handleSubmit} className="container">
            <div className="card">
                <div className="card-header">
                    <h2>User Login With Email</h2>
                </div>
                <div className="card-body">
                    <div className="form-group">
                        <label>Email<span className="errmsg">*</span></label>
                        <input value={email} type="text" onChange={handleEmailChange} className="form-control"></input>
                    </div>
                    <div className="form-group">
                        <label>Password <span className="errmsg">*</span></label>
                        <input type="text" value={password} onChange={handlePasswordChange} className="form-control"></input>
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" className="btn btn-primary">Login</button> |
                    <Link className="btn btn-primary" to={'/logine'}>Login With Mobile</Link> |
                    <Link className="btn btn-success" to={'/register'}>New User</Link>
                </div>
            </div>
        </form>
    </div>
</div>
  );
};

export default LoginE;