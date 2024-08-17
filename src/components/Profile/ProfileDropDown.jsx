import React from 'react'
import '../CSS/ProfileDropDown.css'
import avatar from '../Assets/Images/defaultAvatar.svg'
import order from '../Assets/Images/order.svg'
import logout from '../Assets/Images/logOut.svg'

function ProfileDropDown() {
  return (
    <div className='dropDownContainer'>
        <ul className='dropDownMenu'>
            <li><img src={avatar} alt="" /><a href="/ManageAccount">Manage My Account</a></li>
            <li><img src={order} alt="" /><a href="/Order">My Order</a></li>
            <li><img src={logout} alt="" /><a href="/Home">Log Out</a></li>
        </ul>
    </div>
  )
}

export default ProfileDropDown