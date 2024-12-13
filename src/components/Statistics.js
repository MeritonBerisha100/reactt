import React from "react";
import "../styles/Statistics.css";
import Vector from "../images/Vector.png"; // Ikona

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics-content">
        <h2>$7M+ paid out to investors</h2>
        <p>
          Next Invest has already paid out over $7M in cash return to investors. Earn potential cash payments through unique revenue-share and debt financing investments.
        </p>
        
        {/* Butoni për veprim */}
        <button className="learn-more-button">Learn More</button>
      </div>

      {/* Ikona vizuale për ta bërë më tërheqëse seksionin */}
      <div className="statistics-image">
        <img src={Vector} alt="Vector Icon" />
      </div>
    </section>
  );
};

export default Statistics;
