import React from "react";
import "../CSS/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container sale">
          <div className="sale-content">
            Summer Sale For All Swim Suits And Free Express Delvery - OFF 50%!{" "}
            <a className="shop-btn" href="../App.jsx">ShopNow</a>
          </div>
          <div className="language">English</div>
        </div>
      </div>
    </>
  );
}

export default Header;
