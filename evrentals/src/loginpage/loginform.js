import React, {useState} from 'react';
import '../registratn_comp/style.css';
import HeaderLogin from './headerlogin';
import { Route, Link } from 'react-router-dom';
import Display1 from '../homepage/components/dashboard';
function LoginForm() {
    return(
        <> 
        <div className='div1'>
        <HeaderLogin />
      <div className="form">
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div className="footer">
         
          
              <Link to={"/dashboard"}><button type="submit" className='btn btn-primary'>Login</button></Link>
              <br></br>
              <br></br>
              <Link to={"/*"}><button className='btn btn-primary'>Home</button></Link>
              <br></br>
              <br></br>
              <Link to={"/signup"}><button className='btn btn-primary'>Registration Page</button></Link>
              {/* <br></br>
              <br></br>
              <Link to={"/dashboard"}><button className='btn btn-primary'>Dashboard</button></Link> */}
              
          </div>
      </div>  
      </div>
      </>    
    )       
}
export default LoginForm;