import React from "react";
import ProductCard from "./ProductCard";
import "../CSS/FlashSales.css";
import img1 from "../Assets/Images/product-imgs/product-img1.png";
import img2 from "../Assets/Images/product-imgs/product-img2.png";
import img3 from "../Assets/Images/product-imgs/product-img3.png";
import img4 from "../Assets/Images/product-imgs/product-img4.png";

const products = [
  {
    title: "HAVIT HV-G92 Gamepad",
    image: img1,
    discount: 40,
    currentPrice: 120,
    originalPrice: 160,
    rating: 5,
    reviews: 88,
  },
  {
    title: "AK-900 Wired Keyboard",
    image: img2,
    discount: 35,
    currentPrice: 960,
    originalPrice: 1160,
    rating: 4,
    reviews: 75,
  },
  {
    title: "IPS LCD Gaming Monitor",
    image: img3,
    discount: 30,
    currentPrice: 370,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
  },
  {
    title: "S-Series Comfort Chair",
    image: img4,
    discount: 25,
    currentPrice: 375,
    originalPrice: 400,
    rating: 5,
    reviews: 99,
  },
];

const FlashSales = () => {
  return (
    <div className="flash-sales">
      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <button className="view-all">View All Products</button>
    </div>
  );
};

export default FlashSales;
