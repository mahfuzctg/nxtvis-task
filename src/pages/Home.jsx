import React from "react";

import FeedbackSection from "../sections/FeedbackSection";
import PartnerSection from "../sections/PartnerSection";
import ServicesSection from "../sections/ServicesSection";
import HeroSlider from "../sliders/HeroSlider";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesSection />
      <FeedbackSection />
      <PartnerSection />
    </div>
  );
};

export default Home;
