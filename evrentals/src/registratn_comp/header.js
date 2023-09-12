import React from 'react';
function Header() {
    return(
        <div style={{backgroundColor: 'black', height: '60px',width: '100%', alignItems:'center'}} className='d-flex justify-content-center' >
            <div >
                <h2 style={{ color: 'white'}} >User Registration</h2>
            </div>
        </div>
    )
}
export default Header;