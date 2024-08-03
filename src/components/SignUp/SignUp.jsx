import React from 'react'
import SideImage from '../Assets/Images/side-img.jpg'
import googleIcon from '../Assets/Images/icon-google.svg'
import '../CSS/SignUp.css'

function SignUp() {
    return (
        <div>
            <div className="log-container">
                <div className="left">
                    <img src={SideImage} className='side-img' alt=""/>
                </div>
                <div className="right">
                    <div className="text-section">
                        <h1 className='text-heading'>Create an account</h1>
                        <p className='sub-heading'>Enter your details below</p>
                    </div>
                    
                    <div className='login-section'>
                        <input type="text" name="name" id="name" placeholder='Name' />
                        <input type="email" name="email" id="e-mail" placeholder='Email or Phone Number'/>
                        <input type="password" name="password" id="password" placeholder='Password'/>
                    </div>
    
                    <div className="btn-sign-section">
                        <button className='sign-btn'>Create Account</button>
                        <button className='sign-gg-btn'>
                            <img className='gg-icon' src={googleIcon} alt="" />
                            Sign up with Google
                        </button>
                            <div className='signup-txt'>
                                <p className='txt-left'>Already have account?</p>
                                <p className='txt-right'>Log in</p>
                            </div>
                    </div>
                
                
                </div>
            </div>
        </div>
      );
}

export default SignUp