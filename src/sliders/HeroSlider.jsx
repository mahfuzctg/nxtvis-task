import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../data/slidesData";

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h3 className="text-xl md:text-2xl font-signature mb-3">
                  {slide.title}
                </h3>
                <h3 className="text-4xl md:text-6xl font-bold">
                  {slide.subtitle}
                </h3>

                {/* Search Bar */}
                <div className="mt-10">
                  <div className="bg-white rounded-full shadow-lg p-4 flex items-center w-full max-w-xl mx-auto">
                    <input
                      type="text"
                      placeholder="Search here"
                      className="outline-none w-full text-gray-700 px-4 py-2 rounded-full"
                    />
                    <button className="bg-[#6366F1] hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-green-500 hover:bg-green-500 hover:text-white p-4 rounded-full cursor-pointer transition-all">
          <FaChevronLeft size={30} />
        </div>
        <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-green-500 hover:bg-green-500 hover:text-white p-4 rounded-full cursor-pointer transition-all">
          <FaChevronRight size={30} />
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
