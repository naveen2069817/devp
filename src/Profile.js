import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const Profile = () => {
  const [formData, setformData] = useState(null);

  useEffect(() => {
    
    fetch('https://demo.jaipurcomputerclasses.com/api/profile', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer 6|sfF4C4Mmxf9FZqchwrnnZoP8kGOnWmfGhLTcFxSN',
      },
    
    })
      .then((response) => response.json())
      .then((data) => {
        setformData(data);
        console.log(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container">
      <div className="card">
      <div className="card-header">
                <h1>Profile Data</h1>
            </div>
      {formData ? (
        <div>
          <div className="card-body">
          <div className="col-lg-6">
                        <div className="form-group">
                            <label>Email : {formData.email}</label>                         
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Password :{formData.password}</label>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <label>Profile : <img src={formData.profile} alt="Profile" /> </label>
                        </div>
                        </div>   
                        </div>      
          <div className="card-footer"><Link to={'/update'} className="btn btn-primary">Update Profile</Link> </div>
        </div>
      ) : (
        <p>Loading profile data...</p>
      )}
      </div>
      </form>
    </div>
  );
};

export default Profile;