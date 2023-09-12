import React from "react";
import './navbarstyle.css';
function Navbar(){
  return(
    <div className="dd" style={{display:'flex',backgroundColor: 'white', height: '60px',width: '100%'}} >
            <div style={{paddingTop:'7px',flex:8}}>
                <h3 style={{ color: 'blue', display:'inline-block'}} >EV Rentals</h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a  href="#" style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>Contact Us</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a  href="#" style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>About Us</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a  href="#" style={{display:'inline-block' , textDecoration:'none', color:'blue'}}>Deals</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="btn btn-primary" style={{display:'inline-block' }}>Register</button>
                

            </div>
            <div style={{flex:1, paddingTop:'15px'}}><button className="btn btn-primary" style={{display:'inline-block'}}>Sign In</button></div>
        </div>
  )
}

export default Navbar;