// FeedbackSection.tsx

import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const testimonials = [
  {
    name: "Micle Miahuk",
    role: "Customer",
    message: `Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.`,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Donald Hughes",
    role: "Customer",
    message: `Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.`,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Micle Miahuk",
    role: "Customer",
    message: `Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.`,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Donald Hughes",
    role: "Customer",
    message: `Don't just take our word for it hear what our customers have to say about us! we have helped thousand people.`,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const FeedbackSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-teal-500 font-semibold tracking-wider uppercase">
          Testimonial
        </p>
        <h2 className="text-4xl font-bold mt-2 leading-tight">
          Your trusted
          <br />
          financial advisor
        </h2>

        <div className="flex justify-center items-center gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6 relative max-w-md w-full hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="rounded-full border-4 border-gray-100 p-1 relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-full w-24 h-24 object-cover"
                  />
                  <span className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-teal-500 rounded-full"></span>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
                <p className="text-gray-600 text-sm mt-2">
                  {testimonial.message}
                </p>
              </div>
              <FaQuoteRight className="absolute top-6 right-6 text-teal-500 text-3xl" />
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-100 transition">
            <IoArrowBack className="text-teal-600 text-lg" />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-teal-100 transition">
            <IoArrowForward className="text-teal-600 text-lg" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
