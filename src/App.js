import React from "react";
import CallToAction from "./components/CallToAction";
import AppFooter from "./components/AppFooter";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Offerings from "./components/Offerings";
import Statistics from "./components/Statistics";

import Image1 from "./images/image1.png";  // Përdorimi i rrugëve të reja të imazheve
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image4New from "./images/image4.png";
import ImageMain from "./images/image.png";
import CardImage from "./images/card.png";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Offerings />
      <Statistics />
      <CallToAction />
      <AppFooter />
    </>
  );
};

export default App;
