import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"; // Using FontAwesome icons
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../data/slidesData";
import Animation from "../reuseables/Animation";

const HeroSlider = () => {
  return (
    <Animation>
      {" "}
      <div className="relative w-full h-[90vh] md:h-screen">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".custom-swiper-button-prev",
            nextEl: ".custom-swiper-button-next",
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="w-full h-[90vh] md:h-screen bg-cover bg-center flex items-center justify-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/30" />

                {/* Text container with clipped background */}
                <div className="relative z-10 text-center text-white px-4">
                  <div className="inline-block relative max-w-[90%] md:max-w-full">
                    <div className="absolute inset-0 bg-white/90 clip-hero" />
                    <div className="relative p-4">
                      <h3 className="text-base uppercase sm:text-lg md:text-2xl text-[#6366F1] font-signature mb-2">
                        {slide.title}
                      </h3>
                      <p className="text-2xl sm:text-3xl md:text-5xl font-bold pb-5">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="mt-6 sm:mt-8 md:mt-10 px-2">
                    <div className="bg-white rounded-full shadow-lg p-2 sm:p-4 flex items-center w-full max-w-md sm:max-w-xl mx-auto">
                      <input
                        type="text"
                        placeholder="Search here"
                        className="outline-none w-full text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base"
                      />
                      <button className="bg-[#6366F1] hover:bg-[#6365f1d9] text-white font-bold py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base transition">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="custom-swiper-button-prev absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white text-[#6366F1] hover:bg-[#6366F1] hover:text-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all z-20">
            <FaArrowAltCircleLeft size={30} className="sm:size-10" />
          </div>
          <div className="custom-swiper-button-next absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white text-[#6366F1] hover:bg-[#6366F1] hover:text-white p-2 sm:p-3 rounded-full shadow-lg cursor-pointer transition-all z-20">
            <FaArrowAltCircleRight size={30} className="sm:size-10" />
          </div>
        </Swiper>
      </div>
    </Animation>
  );
};

export default HeroSlider;
