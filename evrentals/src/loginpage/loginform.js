import React, {useState, useEffect} from 'react';
import '../registratn_comp/style.css';
import HeaderLogin from './headerlogin';
import AdminLogin from './adminlogin';
import { Route, Link } from 'react-router-dom';
import HomePage from '../homepage/home';
function LoginForm() {
    const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Send formData to the ASP.NET API
    fetch('/api/submitData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    // Fetch data from ASP.NET API (if needed)
    fetch('/api/values') // Change this URL to your API endpoint
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error));
  }, []);


    return(
        <> 
        <div className='div1'>
        <HeaderLogin />
      <div className="form" >
          <div className="form-body">
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}/>
            
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div className="footer">
              <button type="submit" className='btn btn-primary'>Login</button>
              <br></br>
              <br></br>
              <Link to={"/registrationform"}><button type="submit" className='btn btn-primary'>Registration Page</button>
              </Link>
              &nbsp;
              &nbsp;
              <Link to={"/adminlogin"}><button type="submit" className='btn btn-primary'>Admin Login</button>
              </Link>
              &nbsp;
              &nbsp;
              <br/><br/>
              <Link to={"/home"}><button type="submit" className='btn btn-primary'>Home page</button>
              </Link>
              
          </div>
      </div>  
      </div>
      </>    
    )       
}
export default LoginForm;