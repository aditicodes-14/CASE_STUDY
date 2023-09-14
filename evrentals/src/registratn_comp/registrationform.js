import React, {useState} from 'react';
import './style.css';
import './header';
import Header from './header';
import { Link } from 'react-router-dom';
import RegistrationFormData from './registrationdata';
import HomePage from '../homepage/home';


function RegistrationForm() {
   
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[username,setusername]=useState("");
    const[phone,setphone]=useState("");
    

    const signup=async ()=>{
        let user={
            "userId": 0,
            "username": "string",
            "password": password,
            "email": email,
            "firstName": firstName,
            "lastName": lastName,
            "phone": 0
          };
          alert(user)
        console.log(firstName,lastName,email,phone,username,password);
        let result=await fetch("http://localhost:5027/api/User/AddUser",{
            method:'POST',
            body:JSON.stringify(user),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        }).
        then(result=>result.json())
        .then(result=>localStorage.setItem("user-info",JSON.stringify(result)));
    }
    return(  
        
      
      <div className='div1'>
        <Header/>
      <form className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" value={firstName} onChange={(e)=>setfirstName(e.target.value)}  id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" value={lastName} onChange={(e)=>setlastName(e.target.value)} id="lastName" className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form__input"  placeholder="Email"/>
              </div>
              <div className="phone">
                  <label className="form__label" for="phone">Phone </label>
                  <input  type="long" name="" value={phone} onChange={(e)=>setphone(e.target.value)} id="phone" className="form__input" placeholder="Phone"/>
              </div>
              <div className="username">
                  <label className="form__label" for="username">User Name </label>
                  <input  type="text" name="" value={username} onChange={(e)=>setusername(e.target.value)} id="username" className="form__input"placeholder="Username"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="button" onClick={signup} className='btn btn-primary'>Register</button>
              <br></br>
              <br></br>
              <Link to={"/login"}><button className='btn btn-primary'>Login Page</button></Link>
          
              <br></br>
              <br></br>
              <Link to={"/home"}><button className='btn btn-primary'>Home</button></Link>
          
          </div>
      </form>  
      </div>
         
    )       
}
export default RegistrationForm;