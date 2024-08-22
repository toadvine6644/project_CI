import React from 'react'
import '../CSS/Payment.css'
import ProfileMenu from './ProfileMenu'

function Payment() {
  return (
    <div className='profileMenu'> 
      <ProfileMenu></ProfileMenu>
      <div className='payment'>
        <input className='paymentInput' type="text" placeholder='Your Bank'/><br /><br />
        <input className='paymentInput' type="text" placeholder='Your Bank Number'/><br /><br />
        <input className='paymentInput' type="text" placeholder='Your Credit Card Number'/><br /><br />
        <input className='paymentInput' type="text" placeholder='Your Address'/><br /> <br /><br /> 
        <h4>Your Prefered Payment Method</h4><br />
        <input type="checkbox" id='online'/>
        <label htmlFor="online">Pay With My Credit Card</label><br /><br />
        <input type="checkbox" id='cash'/>
        <label htmlFor="cash">Pay When Receiving Product</label>
        <button className='savePayment'>Save Changes</button>
      </div>
    </div>
  )
}

export default Payment