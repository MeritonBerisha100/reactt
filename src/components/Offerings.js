import React, { useState } from "react";
import "../styles/Offerings.css";
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4New from "../images/image4.png";
import ImageMain from "../images/image.png";
import CardImage from "../images/card.png";

const offerings = [
  {
    title: "Quick Invest",
    description: "Invest in innovative tech solutions.",
    image: Image1,
  },
  {
    title: "Green Future",
    description: "Eco-friendly investment opportunities.",
    image: Image2,
  },
  {
    title: "Agriculture",
    description: "Invest in sustainable farming.",
    image: Image3,
  },
  {
    title: "Real Estate",
    description: "Invest in prime property locations.",
    image: Image4New,
  },
  {
    title: "Stock Market",
    description: "Diversify your portfolio with stocks.",
    image: ImageMain,
  },
  {
    title: "Cryptocurrency",
    description: "Invest in blockchain and digital currencies.",
    image: CardImage,
  },
];

const Offerings = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

  return (
    <section className="offerings">
      <h2 style={{textAlign:"center", padding:"30px"}}>Offerings open for investment</h2>
      <div className="container">
        <div className="row">
          {offerings.map((offer, index) => (
            <div className="col-md-4" key={index}>
              <div
                className={`card ${activeCard === index ? "active" : ""}`}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={() => handleCardClick(index)}
              >
                <img
                  src={offer.image}
                  className="card-img-top"
                  alt={offer.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{offer.title}</h5>
                  <p className="card-text">
                    {activeCard === index ? offer.description : "Click to learn more"}
                  </p>
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offerings;
