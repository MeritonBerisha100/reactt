import React from "react";
import Navbar from "./components/navbar";
import MainSection from "./components/MainSection";  // Importimi i komponentit MainSection
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navbar.css";  // Nëse ke nevojë për stilin e navbarit
import Card from "./components/card";


// Importimi i imazheve
import Images from "./images/img.png";  // Sigurohu që imazhi ekziston në këtë rrugë
import Mask from "./images/Mask.png";   // Po ashtu sigurohu që ky imazh ekziston në këtë rrugë

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Card/>
      
      {/* Sigurohu që imazhet të shfaqen në App */}
      <img src={Images} alt="Description of the image" />
      <img className="images" src={Mask} alt="Description of the image" />
    </>
  );
}

export default App;
