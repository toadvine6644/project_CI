import React from 'react'

function ProfileMenu() {
  return (
    <div>
        <div className='menuLeft'>
          <h5>Manage My Account</h5>
          <ul className='accountMenu'>
            <li><a href="/Profile">My Profile</a></li>
            <li><a href="/">Address Book</a></li>
            <li><a href="/Payment">My Payments Option</a></li>
          </ul>
          <h5>My Orders</h5>
          <ul className='accountMenu'>
            <li><a href="">My Orders</a></li>
            <li><a href="">My Cancelations</a></li>
          </ul>
          <h5>My Wishlist</h5>
          <ul className='accountMenu'>
            <li><a href="">My Wishlist</a></li>
          </ul>
        </div>
    </div>
  )
}

export default ProfileMenu