import React from "react";
import "../CSS/NewArrive.css";

function NewArrive() {
  return (
    <div class="product-showcase">
      <article class="playstation-card">
        <div class="playstation-content">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/257c68e85d4ec211145a399b858c738793ae6303cc07c44213626b752e7a758b?placeholderIfAbsent=true&apiKey=1faa11c93006472a99a85db5d25b0d60"
            class="product-image"
            alt="PlayStation 5 console"
          />
          <div class="product-info">
            <div class="product-text">
              <h2 class="product-title">PlayStation 5</h2>
              <p class="product-description">
                Black and White version of the PS5 coming out on sale.
              </p>
            </div>
            <div class="shop-now-div" tabindex="0">
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </article>
      <article class="womens-collection">
        <div class="collection-card">
          <div class="collection-content">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b674d8f28601fdf2204e3778d077b479839f481c73ef779cd6a3e8ad34a517e?placeholderIfAbsent=true&apiKey=1faa11c93006472a99a85db5d25b0d60"
              class="product-image"
              alt="Women's fashion collection"
            />
            <div class="collection-info">
              <div class="collection-text">
                <h2 class="collection-title">Women's Collections</h2>
                <p class="collection-description">
                  Featured woman collections that give you another vibe.
                </p>
              </div>
              <div class="shop-now-div" tabindex="0">
                <span>Shop Now</span>
          
              </div>
            </div>
          </div>
        </div>
      
      </article>
    </div>
  );
}

export default NewArrive;
