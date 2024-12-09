import React from "react";
import "../styles/Hero.css";
import MaskImage from "../images/Mask.png";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content" style={{ textAlign: 'left' }}>
  <h1>Meaningful investments in Main Street businesses</h1>
  <p>Invest in real ventures and grow your portfolio.</p>
  <button className="btn btn-primary custom-button">
  Get Started
</button>

</div>
        <div className="hero-image">
          <img src={MaskImage} alt="Hero Mask" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
