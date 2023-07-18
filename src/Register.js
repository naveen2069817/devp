import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);
  
  const navi = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the formdata object
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('age', age);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profile', profile);

    
    fetch('https://demo.jaipurcomputerclasses.com/api/register', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        toast.success('Register Successfully');
        navi('/login');
        
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (

<div>
<div className="offset-lg-3 col-lg-6">
    <form className="container" onSubmit={handleSubmit}>
        <div className="card">
            <div className="card-header">
                <h1>User Registeration</h1>
            </div>
            <div className="card-body">

                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>First Name <span className="errmsg">*</span></label>
                            <input type="text" value={firstName} onChange={handleFirstNameChange} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label> Last Name <span className="errmsg">*</span></label>
                            <input type="text" value={lastName} onChange={handleLastNameChange} className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label> Age <span className="errmsg">*</span></label>
                            <input type="text" value={age} onChange={handleAgeChange} className="form-control"></input>
                        </div>
                        <div className="col-lg-6">
                        <div className="form-group">
                            <label> Mobile no <span className="errmsg">*</span></label>
                            <input type="text" value={mobile} onChange={handleMobileChange} className="form-control"></input>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email <span className="errmsg">*</span></label>
                            <input type="text" value={email} onChange={handleEmailChange}  className="form-control"></input>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Password <span className="errmsg">*</span></label>
                            <input type="text" value={password} onChange={handlePasswordChange}  className="form-control"></input>
                        </div>
                    </div>
    
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Profile<span className="errmsg">*</span></label>
                            <input type="file"  onChange={handleProfileChange}  className="form-control"></input>
                        </div>
                    </div>
                </div>

            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-primary">Register</button> |
                <Link to={'/login'} className="btn btn-danger">Close</Link>
            </div>
        </div>
        
    </form>
</div>
</div>




  );
};

export default Registration;
