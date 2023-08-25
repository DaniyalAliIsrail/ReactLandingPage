import React from "react";
import "./hero.css";
import FLIPCART from "../images/flipkart.png";
import AMAZON from "../images/amazon.png";
import HEROIMAGE from "../images/hero-image.png";
const Herosection = () => {
  return (
    <main className="hero container">
      <div className="heading-container">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p >
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button className="login-btn">Shop Now</button>
          <button className="buynow-btn">Buy Now</button>
        </div>

        <div>
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src={FLIPCART}></img> 
            <img src={AMAZON}></img>
          </div>
        </div>
      </div>

      <div className="hero-image">
         <img src={HEROIMAGE}></img> 
      </div>

    </main>
  );
};
export default Herosection;
