import React from 'react';
import Navbar from './components/navbar/navbar';
import Bodyhead from './components/bodyhead/selection';
import Footer from './components/bodyhead/footer';
function HomePage(){
    return(
        <div>
        <Navbar/>
        <Bodyhead/>
        <Footer/>
        </div>
    )
}

export default HomePage;