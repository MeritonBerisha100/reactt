import React from "react";
import "../styles/CallToAction.css"; // për CallToAction.js
import Cuate from "../images/cuate.png";
import Maska from "../images/Maska.png";


const CallToAction = () => {
  return (
    <section className="call-to-action">
      <div className="content">
        <h2>Looking to raise capital for your growing business?</h2>
        <p>
          Whether expanding or opening a brand-new concept, we make it easy to
          raise money from thousands of local investors.
        </p>
        <button className="apply-button">Apply Online</button>
      </div>
      <img className="cuate-image" src={Cuate} alt="Illustration representing business growth" />
   <img className="maska-image" src={Maska} style={{ width: '200px', height: '200px', float: 'right' }} /><br /> <br /> <br /> <br /> <br /> 
    </section>
  );
};

export default CallToAction;
