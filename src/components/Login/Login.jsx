import React from 'react'
import SideImage from '../Assets/Images/side-img.jpg'
import '../CSS/Login.css'

function Login() {
  return (
    <div>
        <div className="log-container">
            <div className="left">
                <img src={SideImage} className='side-img' alt=""/>
            </div>
            <div className="right">
                <div className="text-section">
                    <h1 className='text-heading'>Log in to Exclusive</h1>
                    <p className='sub-heading'>Enter your details below</p>
                </div>
                
                <div className='login-section'>
                    <input type="email" name="email" id="e-mail" placeholder='Email or Phone Number'/>
                    <input type="password" name="password" id="password" placeholder='Password'/>
                </div>

                <div className="btn-log-section">
                    <button className='login-btn'>Log in</button>
                    <p className='pass-txt'>Forgot Password</p>
                </div>
            
            
            </div>
        </div>
    </div>
  );
}

export default Login