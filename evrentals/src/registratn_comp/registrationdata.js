// import React from "react";

// import './style.css';
// import './header';
// import Header from './header';
// import { Link } from 'react-router-dom';


// function RegistrationFormData() {
   
//     const[firstName,getfirstName]=useState("");
//     const[lastName,getlastName]=useState("");
//     const[password,setPassword]=useState("");
//     const[email,setEmail]=useState("");
//     const[username,setusername]=useState("");
//     const[phone,setphone]=useState("");
    

//     const signup=async ()=>{
//         let user={
//             "userId": 0,
//             "username": "string",
//             "password": password,
//             "email": email,
//             "firstName": firstName,
//             "lastName": lastName,
//             "phone": 0
//           };
//           alert(user)
//         console.log(firstName,lastName,email,phone,username,password);
//         let result=await fetch("http://localhost:5027/api/User/GetAllUsers",{
//             method:'GET',
//             body:JSON.stringify(user),
//             headers:{
//                 "Content-Type":'application/json',
//                 "Accept":'application/json'
//             }
//         }).
//         then(result=>result.json())
//         .then(result=>localStorage.setItem("user-info",JSON.stringify(result)));
//     }
//     return(  
//         <div>
//             <h1>User Registration Data</h1>
//             <ul>
//                 {result.map((item)=>(
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//                 {/* <table>
//                     <th>
//                         <td></td>


//                     </th>
//                     <tr></tr>
//                 </table> */}
//             </ul>
//         </div>
//     )
// }
// export default RegistrationFormData;