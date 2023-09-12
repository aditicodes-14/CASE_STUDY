import React, {useState} from 'react';
import './style.css';
import './header';
import Header from './header';
import { Link } from 'react-router-dom';
import RegistrationData from './registrationdata';
function RegistrationForm() {

    
    //    let getApiBaseUrl="http://localhost:5027/api/";
   
    const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = event => {
//     event.preventDefault();

    // Send formData to the ASP.NET API
//     fetch(getApiBaseUrl+'/api/submitData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error:', error));
//   };

//   useEffect(() => {
//     // Fetch data from ASP.NET API (if needed)
//     fetch(getApiBaseUrl+'/api/User/AddUser') // Change this URL to your API endpoint
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error:', error));
//   }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
    try {
        const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('User data submitted successfully!');
    } else {
      alert('Error submitting user data.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
    return(  
      
      <div className='div1'>
        <Header/>
      <div className="form" onSubmit={handleSubmit}>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" className='btn btn-primary'>Register</button>
              <br></br>
              <br></br>
              <Link to={"/loginform"}>
              <button  className='btn btn-primary'>Login Page</button>
              </Link>
              &nbsp;
              &nbsp;
              <button  className='btn btn-primary'>Home page</button>
              &nbsp;
              &nbsp;
              <Link to={"/registrationdata"}>
              <button  className='btn btn-primary'>Check Data</button>
              </Link>
          </div>
      </div>  
      </div>
         
    )       
}

export default RegistrationForm;