import LoginForm from './loginpage/loginform';
import RegistrationForm from './registratn_comp/registrationform';
import HomePage from './homepage/home';
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<HomePage />} />
      <Route path="signup" element={<RegistrationForm />} />
      <Route exact path="/login" element={<LoginForm />} />

        </Routes>
      </Router>
    
  );
}

export default App;
