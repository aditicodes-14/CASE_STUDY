import React from "react";
import './navbarstyle.css';
import { Link } from "react-router-dom";
import HomePage from "../../home";
function Navbar(){
  return(
    <div className="dd" style={{display:'flex',backgroundColor: 'white', height: '60px',width: '100%'}} >
            <div style={{paddingTop:'7px',flex:8}}>
            <Link to={"/home"}><h3 style={{ color: 'blue', display:'inline-block'}} >EV Rentals</h3></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/contactus"}><a  href="#" style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>Contact Us</a></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/aboutus"}><a  href="#" style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>About Us</a></Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                <Link to={"/signup"}><button className="btn btn-primary" style={{display:'inline-block' }}>Register</button></Link>
                

            </div>
            <div style={{flex:1, paddingTop:'15px'}}><Link to={"/login"}><button className="btn btn-primary" style={{display:'inline-block'}}>Sign In</button></Link></div>
        </div>
  )
}

export default Navbar;