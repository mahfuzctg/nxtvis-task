// ServicesSection.tsx

import React from "react";
import {
  FaChartLine,
  FaClipboardList,
  FaCommentsDollar,
  FaTrophy,
} from "react-icons/fa";
import Title from "../reuseables/Title";

const services = [
  {
    title: "Mint Financial Management",
    image: "https://images.unsplash.com/photo-1556742049-9083d5cf5dba",
    icon: <FaChartLine className="text-white text-2xl" />,
  },
  {
    title: "Smart Finance Solutions",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    icon: <FaCommentsDollar className="text-white text-2xl" />,
  },
  {
    title: "New Project Lasting",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221",
    icon: <FaTrophy className="text-white text-2xl" />,
  },
  {
    title: "Stan Robinhood Financial",
    image: "https://images.unsplash.com/photo-1549924231-f129b911e442",
    icon: <FaClipboardList className="text-white text-2xl" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <Title
          title="Our Services"
          subtitle="Invest in your future with us"
          color="blue-600"
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden group relative"
          >
            <div className="relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-teal-500 rounded-full p-2">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-500 text-sm mb-2">Our services</p>
              <h3 className="text-xl font-bold text-gray-800 leading-snug">
                {service.title}
              </h3>
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button className="bg-white p-2 rounded-full shadow-md hover:bg-teal-100 transition">
                <span className="text-teal-500 text-xl">&#8594;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
