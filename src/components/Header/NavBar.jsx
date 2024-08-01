import React from 'react'
import '../CSS/NavBar.css'

function NavBar() {
  return (
    <>
        <div className='navBar'>
            <h2 className='left'>Exclusive</h2>
            <ul className='menu'>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Contact"> Contact</a></li>
                <li><a href="/About"> About</a></li>
                <li><a href="/SignUp"> Sign up</a></li>
            </ul>
            <ul className='rightMenu'>
                <input type="text" className='searchBar' placeholder='What are you looking for'/>
                <li className='wishlist'><img src="https://static-00.iconduck.com/assets.00/wishlist-icon-2048x1952-13b2gake.png" alt="" className='icon' /></li>
                <li className='cart'><img src="https://static.vecteezy.com/system/resources/previews/027/381/351/original/shopping-cart-icon-shopping-trolley-icon-shopping-cart-logo-container-for-goods-and-products-economics-symbol-design-elements-basket-symbol-silhouette-retail-design-elements-vector.jpg" className='icon2' alt="" /></li>
            </ul>
        </div>
    </>
  )
}

export default NavBar