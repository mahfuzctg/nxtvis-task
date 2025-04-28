import React from "react";

import ServiceCard from "../cards/ServiceCard";
import { services } from "../data/servicesData";
import Animation from "../reuseables/Animation";
import Title from "../reuseables/Title";

const ServicesSection = () => {
  return (
    <Animation>
      <div className="bg-gray-100 py-16">
        <div className="text-center mb-12">
          <Title
            title="Our Services"
            subtitle="Invest in your future with us"
            color="blue-600"
          />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </Animation>
  );
};

export default ServicesSection;
