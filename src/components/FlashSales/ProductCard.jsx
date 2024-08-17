import React from "react";
import "../CSS/ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="discount-tag">-{product.discount}%</div>
      <img src={product.image} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <div className="product-price">
        <span className="current-price">${product.currentPrice}</span>
        <span className="original-price">${product.originalPrice}</span>
      </div>
      <div className="product-rating">
        {Array(product.rating)
          .fill()
          .map((_, i) => "⭐")}
        ({product.reviews})
      </div>
      <button className="add-to-cart">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
