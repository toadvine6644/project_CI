import React from 'react'
import '../CSS/NavBar.css'
import {useContext} from 'react'
import UserStore from '../userContex.js';

function NavBar() {

    const userContext = useContext(UserStore);
    return (
    <>
        <div className='navBar'>
            <h2 className='left'>Exclusive</h2>
            <ul className='menu'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Contact"> Contact</a></li>
                <li><a href="/About"> About</a></li>
                {
                  !userContext.isLoggedIn && <li><a href="/SignUp"> Sign up</a></li>
                }
                {
                  !userContext.isLoggedIn && <li><a href="/LogIn">Log in</a></li>
                }
                {
                  userContext.isLoggedIn && <li><a href="/Profile"></a></li>
                }
            </ul>
            <ul className='rightMenu'>
                <input type="text" className='searchBar' placeholder='What are you looking for'/>
                <li className='wishlist'><a href="/WishList"><img src="https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png" alt="" className='icon' /></a></li>
                <li className='cart'><a href="Cart"><img src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" className='icon2' alt="" /></a></li>
            </ul>
        </div>
    </>
  )
}

export default NavBar