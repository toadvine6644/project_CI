import React from 'react'
import '../CSS/Footer.css'
import fbIcon from '../Assets/Images/fb-icon.svg'
import xicon from '../Assets/Images/x-icon.svg'
import instaicon from '../Assets/Images/insta-icon.svg'
import linkkedin from '../Assets/Images/linkedin-icon.svg'


function Footer() {
  return (
    <>
        <div className='footer'>
            <div className='col1'>
                <h3>Exclusive</h3>
                <h4 className='sub'>Subscribe</h4>
                <div className='sale'>Get 10% off your first order</div>
                <input type="text" className='email' placeholder='Enter your email'/>
            </div>
            <div className='col2'>
                <h4>Support</h4>
                <div className='address'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</div>
                <div className='gmail'>exclusive@gmail.com</div>
                <div className='phone'>+88015-88888-9999</div>
            </div>
            <div className='col3'>
                <h4 className='acc'>Account</h4>
                <div className='myAcc'>My Account</div>
                <div className='login'>Login / Register</div>
                <div className='cart'>Cart</div>
                <div className='wish'>Wishlist</div>
                <div className='shop'>Shop</div>
            </div>
            <div className='col4'>
                <h4>Quick Link</h4>
                <div className='PP'>Privacy Policy</div>
                <div className='term'>Terms Of Use</div>
                <div className='FAQ'>FAQ</div>
                <div className='contact'>Contact</div>
            </div>
            <div className='col5'>
                <h4>Download</h4>
                <div className='save'>Save $3 with App New User Only</div>
                <div className='icons'>
                    <img className='icon' src={fbIcon} alt="" />
                    <img className='icon' src={xicon} alt="" />
                    <img className='icon' src={instaicon} alt="" />
                    <img className='icon' src={linkkedin} alt="" />
                </div>
            </div>
        </div>
        <div className='bottom'>Copyright Rimel 2022. All right reserved</div>
    </>
  )
}

export default Footer