import React from "react";
import { FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";

const FeedbackCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl  pt-6 justify-center flex flex-col items-center gap-6 relative w-9/12 md:w-[40%] h-[450px] hover:shadow-lg transition-all duration-300">
      <div className="relative ">
        <div className="rounded-full  -mt-12 border-4 border-gray-100 p-1 relative">
          <img
            src={item.image}
            alt={item.name}
            className="rounded-full w-[150px] h-[150px] object-cover"
          />
          <span className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#6366F1] rounded-full"></span>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-[#6366F1] rounded-full"></span>
        </div>
      </div>
      <div className="text-left flex flex-col justify-center items-center h-full">
        <h3 className="text-lg text-[#6366F1] font-bold ">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.role}</p>
        <p className="text-gray-600 text-sm mt-2 text-center px-4">
          {item.message}
        </p>

        {/* Display the star rating */}
        <div className="flex justify-center ">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < item.rating ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-yellow-500" />
              )}
            </span>
          ))}
        </div>
      </div>
      <FaQuoteRight className="absolute top-6 right-6 text-[#6366F1] text-3xl" />
    </div>
  );
};

export default FeedbackCard;
