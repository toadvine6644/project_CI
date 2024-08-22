import React from 'react'
import '../CSS/NavBar.css'
import {useContext, useState} from 'react'
import UserStore from '../userContex.js';
import profile from '../Assets/Images/profile.svg'
import ProfileDropDown from '../Profile/ProfileDropDown.jsx';

function NavBar() {

    const userContext = useContext(UserStore);

    const [openProfile, setOpenProfile] = useState(false);

    return (
    <>
        <div className='navBar'>
            <h2 className='left'>Exclusive</h2>
            <ul className='menu' id='menu1'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Contact"> Contact</a></li>
                <li><a href="/About"> About</a></li>
                {
                  !userContext.isLoggedIn && <li><a href="/SignUp"> Sign up</a></li>
                }
                {
                  !userContext.isLoggedIn && <li><a href="/LogIn">Log in</a></li>
                }
            </ul>
            <ul className='rightMenu' id='menu2'>
                <input type="text" className='searchBar' placeholder='What are you looking for'/>
                <li className='wishlist'><a href="/WishList"><img src="https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png" alt="" className='icon' /></a></li>
                <li className='cart'><a href="Cart"><img src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" className='icon2' alt="" /></a></li>
                {
                  userContext.isLoggedIn && <li><img src={profile} className='userProfile' alt="" onClick={() => setOpenProfile((prev) => !prev)}/></li>
                }
            </ul>
        </div>
        {
          userContext.isLoggedIn && openProfile &&<ProfileDropDown></ProfileDropDown>
        }
    </>
  )
}

export default NavBar