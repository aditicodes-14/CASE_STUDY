import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import React from "react";
import aboutus from '../../../aboutus';
import contact from '../../../contactus';
import './navbarstyle.css';
function Navbar(){
  return(
    <div className="dd" style={{display:'flex',backgroundColor: 'white', height: '60px',width: '100%'}} >
            <div style={{paddingTop:'7px',flex:8}}>
                <h3 style={{ color: 'blue', display:'inline-block'}} >EV Rentals</h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/contact"} style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>Contact Us</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/aboutus"} style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>About Us</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {/* <Link  to={"/booking"} style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>Deals</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <Link to={"/registrationform"}><button className="btn btn-primary" style={{display:'inline-block' }}>Register</button>
                </Link>

            </div>
            <Link to={"/loginform"}>
            <div style={{flex:1, paddingTop:'15px'}}><button className="btn btn-primary" style={{display:'inline-block'}}>Sign In</button></div>
            </Link>
            {/* <Router>
            <Routes> */}
  {/* <Route path='/' element={<AddMovie></AddMovie>}></Route> */}
  {/* <Route path='/aboutus' element={<aboutus></aboutus>}></Route> */}
  {/* <Route path='/' element={}></Route> */}
  {/* <Route path='/contact' element={<contact></contact>}></Route> */}
{/* </Routes>
</Router> */}
        </div>
  )
}

export default Navbar;