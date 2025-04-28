import React from "react";
import {
  FaChartLine,
  FaClipboardList,
  FaCommentsDollar,
  FaTrophy,
} from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const icons = {
    FaChartLine: <FaChartLine className="text-white text-2xl" />,
    FaCommentsDollar: <FaCommentsDollar className="text-white text-2xl" />,
    FaTrophy: <FaTrophy className="text-white text-2xl" />,
    FaClipboardList: <FaClipboardList className="text-white text-2xl" />,
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group relative">
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-teal-500 rounded-full p-2">
          {icons[service.icon]} {/* Dynamically render the icon */}
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
  );
};

export default ServiceCard;
