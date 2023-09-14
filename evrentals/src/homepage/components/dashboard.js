import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";

// import Booking from './booking';

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';

 

 

import axios from 'axios';

class Display1 extends React.Component{

    constructor(){

        super();

        this.state={

     

        carlist:[]

           

        }

    }

 

componentDidMount(){

    axios.get("http://localhost:5027/api/EV/GetAllEV").then(response => {  

        //console.log(response.data);  

        this.setState({  

        carlist: response.data  

        });  

    });  }  

    render(){

        return(

            <div>

                <hr/>

                <h2>Cars List</h2> <hr />

                <table className='table table-bordered table-striped'>

                <thead><tr><th>MAKE</th><th>MODEL</th><th>YEAR</th><th>BATTERY CAPACITY</th><th>CHARGING TIME</th><th>PRICE</th></tr></thead>

                    <tbody>

                        {this.state.carlist.map((obj)=>(

                           

                            <tr>

                            <td>{obj.make}</td>

                            <td>{obj.model}</td>

                            <td>{obj.year}</td>

                            <td>{obj.batteryCapacity}</td>

                            <td>{obj.chargingTime}</td>

                            <td>{obj.rentalPrice}</td>

                           

                           <td><Link to={"/booking/"+obj.vehicleId}><button type="submit" className='btn btn-primary'>Select</button> </Link></td>

                           

                           

                         

                        </tr>  

                             

                         

                        ))}

                    </tbody>

                </table>

            </div>

        );

    }

}

export default Display1;