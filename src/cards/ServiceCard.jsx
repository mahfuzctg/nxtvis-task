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
        <div className="absolute bottom-2 right-2 bg-[#6366F1] rounded-full p-2">
          {icons[service.icon]} {/* Dynamically render the icon */}
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">Our services</p>
        <h4 className="text-xl mb-4 font-bold text-gray-800 leading-snug">
          {service.title}
        </h4>
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 ">
        <button className="bg-white px-2 rounded-full shadow-md hover:bg-[#F3F4F6] transition">
          <span className="text-[#6366F1] text-xl">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
