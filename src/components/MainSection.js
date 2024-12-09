// src/components/MainSection.js
import React from "react";
import "../styles/main-section.css";  // Kjo linjë mund të jetë e nevojshme për stilin CSS të këtij komponenti

function MainSection() {
  return (
    <section className="main-section">
      <h1>Meaningful investments in
      Main Street businesses</h1>
      <p>
      Browse vetted investment offerings in communities all over the US.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </section>




  );
}

export default MainSection;
