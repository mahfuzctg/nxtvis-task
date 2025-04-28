// src/components/FeedbackSection.js

import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import FeedbackCard from "../cards/FeedbackCard";
import { feedback } from "../data/feedbackData";
import Animation from "../reuseables/Animation";
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
    <Animation>
      {" "}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Title
            title="Happy Customers"
            subtitle="Our clients share their stories about how we've made a difference in their lives."
            color="blue-600"
          />

          {/* Feedback */}
          <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">
            {visibleFeedback.map((item, index) => (
              <FeedbackCard key={index} item={item} />
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
    </Animation>
  );
};

export default FeedbackSection;
