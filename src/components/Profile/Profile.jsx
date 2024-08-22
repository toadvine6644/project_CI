import React from 'react'
import '../CSS/Profile.css'
import ProfileMenu from './ProfileMenu'

function Profile() {
  return (
    <div className='profileMenu'>
        <ProfileMenu></ProfileMenu>
        <div className='accountInfo'>
          <h4 className='edit'>Edit Your Profile</h4>
          <div className='upperProf'>
            <div className='firstName'>
              <div>First Name</div>
              <input type="text" />
            </div>
            <div className='lastName'>
              <div>Last Name</div>
              <input type="text" />
            </div>
          </div>
          <div className='bottomProf'>
            <div className='changeEmail'>
              <div>Email</div>
              <input type="text" />
            </div>
            <div className='changeAddress'>
              <div>Address</div>
              <input type="text" />
            </div>
          </div>
          <div className='changePass'>
            <div>Change Password</div>
            <input type="text" placeholder='Current Password'/>
            <input type="text" placeholder='New Password'/>
            <input type="text" placeholder='Confirm New Password'/>
          </div>
          <button className='cancel'>Cancel</button>
          <button className='saveChange'>Save Change</button>
        </div>
    </div>
  )
}

export default Profile