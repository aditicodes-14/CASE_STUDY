import LoginForm from './loginpage/loginform';
import RegistrationForm from './registratn_comp/registrationform';
import HomePage from './homepage/home';
import Aboutus from './aboutus';
import AdminLogin from './loginpage/adminlogin';
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
import Navbar from './homepage/components/navbar/navbar';
import Bodyhead from './homepage/components/bodyhead/selection';
import Contact from './contactus';
function App() {
  return (
    <div>
        {/* <Navbar/>
        <Bodyhead/> */}
        {/* </div> */}

    <Router>
      <Routes>
      <Route path="*" element={<HomePage />} />
      {/* <Route path="signup" element={<RegistrationForm />} /> */}
      <Route path='/registrationform' element={<RegistrationForm></RegistrationForm>}/> 
      <Route exact path="/loginform" element={<LoginForm />} />
      <Route path='/aboutus' element={<Aboutus/>}></Route>
      <Route path='/adminlogin' element={<AdminLogin/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </Router>
      </div>
    
  );
}

export default App;
