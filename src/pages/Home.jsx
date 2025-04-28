import React from "react";
import FeedbackSection from "../sections/FeedbackSection";
import ServicesSection from "../sections/ServicesSection";
import HeroSlider from "../sliders/HeroSlider";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <FeedbackSection />
    </div>
  );
};

export default Home;
