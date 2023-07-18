import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [profile, setProfile] = useState(null);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('first_name',firstName);
    formData.append('last_name', lastName);
    formData.append('age', age);
    formData.append('profile', profile);

    try {
      const response = await fetch('https://demo.jaipurcomputerclasses.com/api/update_profile', {
        method: 'POST',
        headers: {
          Authorization: 'Bearer 6|sfF4C4Mmxf9FZqchwrnnZoP8kGOnWmfGhLTcFxSN',
        },
        body: formData,
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        toast.success('Profile updated Successfully');
        console.log(response)
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
  
<div>
<div className="offset-lg-3 col-lg-6">
    <form className="container" onSubmit={handleSubmit}>
        <div className="card">
            <div className="card-header">
                <h1>Update Profile</h1>
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
                <button type="submit" className="btn btn-primary">Update Profile</button> |
                <Link to={'/'} className="btn btn-danger">Close</Link>
            </div>
        </div>
        
    </form>
</div>
</div>
  );
};

export default UpdateProfile;

