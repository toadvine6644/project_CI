import React from 'react'
import '../CSS/ProfileDropDown.css'
import avatar from '../Assets/Images/defaultAvatar.svg'
import logout from '../Assets/Images/logOut.svg'
import UserStore from '../userContex'
import { useContext } from 'react'
import Profile from './Profile'
import { useNavigate } from 'react-router-dom'

function ProfileDropDown() {

  const userContext = useContext(UserStore);
  const navigate = useNavigate;

  const Logout = () => {
    localStorage.clear();
  }

  return (
    <div className='dropDownContainer'>
        <ul className='dropDownMenu'>
            <li><img src={avatar} alt="" /><a href="/Profile">Manage My Account</a></li>
            <li><img src={logout} alt="" /><a href="/Home" onClick={Logout}>Log Out</a></li>
        </ul>
    </div>
  )
}

export default ProfileDropDown