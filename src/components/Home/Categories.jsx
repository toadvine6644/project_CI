import React from "react";
import "../CSS/Categories.css";
import catIcon1 from "../Assets/Images/categories-img/Category-Camera.svg";
import catIcon2 from "../Assets/Images/categories-img/Category-CellPhone.svg";
import catIcon3 from "../Assets/Images/categories-img/Category-Computer.svg";
import catIcon4 from "../Assets/Images/categories-img/Category-Gamepad.svg";
import catIcon5 from "../Assets/Images/categories-img/Category-Headphone.svg";
import catIcon6 from "../Assets/Images/categories-img/Category-SmartWatch.svg";

function Categories() {
  return (
    <div class="categories-section">
      <header class="categories-header">
        <div class="categories-title-wrapper">
          <div class="categories-label">
            <div class="categories-indicator">
              <div class="categories-indicator-bar"></div>
            </div>
            <h2 class="categories-label-text">Categories</h2>
          </div>
          <h1 class="categories-title">Browse By Category</h1>
        </div>
      </header>
      <div class="categories-grid">
        <div class="category-card">
          <img
            loading="lazy"
            src={catIcon2}
            class="category-icon"
            alt="Phone icon"
          />
          <p class="category-name">Phones</p>
        </div>
        <div class="category-card">
          <img
            loading="lazy"
            src={catIcon3}
            class="category-icon"
            alt="Computer icon"
          />
          <p class="category-name">Computers</p>
        </div>
        <div class="category-card">
          <img
            loading="lazy"
            src={catIcon6}
            class="category-icon"
            alt="SmartWatch icon"
          />
          <p class="category-name">SmartWatch</p>
        </div>
        <div class="category-card">
          <img
            loading="lazy"
            src={catIcon1}
            class="category-icon"
            alt="Camera icon"
          />
          <p class="category-name">Camera</p>
        </div>
        <div class="category-card">
          <img
            loading="lazy"
            src={catIcon5}
            class="category-icon"
            alt="HeadPhones icon"
          />
          <p class="category-name">HeadPhones</p>
        </div>
        <div class="category-card">
          <img
            loading="lazy"
            src={catIcon4}
            class="category-icon"
            alt="Gaming icon"
          />
          <p class="category-name">Gaming</p>
        </div>
      </div>
    </div>
  );
}

export default Categories;
