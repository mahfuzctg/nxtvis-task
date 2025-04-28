import React, { useState } from "react";
import { FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { feedback } from "../data/feedbackData";
import Title from "../reuseables/Title";

const FeedbackSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedback.length - 2 : prevIndex - 2
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= feedback.length ? 0 : prevIndex + 2
    );
  };

  const visibleFeedback = feedback.slice(currentIndex, currentIndex + 2);

  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <Title
          title="Custom Color Title"
          subtitle="This is a custom subtitle"
          color="blue-600"
        />

        {/* Feedback */}
        <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">
          {visibleFeedback.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md pt-5 justify-center flex flex-col items-center gap-6 relative w-9/12 md:w-[40%] h-[450px] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="rounded-full border-4 border-gray-100 p-1 relative">
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
                <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
                <p className="text-gray-600 text-sm mt-2 text-center px-4">
                  {item.message}
                </p>

                {/* Display the star rating */}
                <div className="flex justify-center mt-2">
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
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6366F1] hover:text-white transition-all duration-300"
          >
            <IoArrowBack className="text-[#6366F1] text-lg" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-[#6366F1] hover:text-white transition-all duration-300"
          >
            <IoArrowForward className="text-[#6366F1] text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
