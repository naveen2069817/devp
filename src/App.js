import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import Login from './Login';
import Register from './Register';
import LoginE from './LoginE';
import Profile from './Profile';
import Update from './Update';


import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';

function App() {


  return (
    
<>
<Router>
   <Navbar title="DevHub"  login="Login"  profile="Profile"/>

   <div className="container my-3">
    <Routes>
     <Route exact path='/' element={<Home/>}/>
     <Route exact path='/login' element={<Login/>}/>
     <Route exact path='/logine' element={<LoginE/>}/>
     <Route exact path='/profile' element={<Profile/>}/>
     <Route exact path='/update' element={<Update/>}/>
     <Route exact path='/register' element={<Register/>}/>
   </Routes>
   </div>
   </Router>
   </>
  );
  
}

export default App;
