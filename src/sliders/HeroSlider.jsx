import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Discover Your Listing",
    subtitle: "Let's Discover This Tour",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Explore New Destinations",
    subtitle: "Plan Your Next Journey",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    title: "Find the Perfect Spot",
    subtitle: "Make Memories Happen",
  },
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
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
                  <div className="bg-white rounded-full shadow-lg p-4 flex items-center space-x-4 w-full max-w-4xl mx-auto">
                    <input
                      type="text"
                      placeholder="Location"
                      className="outline-none w-full text-gray-700"
                    />
                    <input
                      type="text"
                      placeholder="Activity Type"
                      className="outline-none w-full text-gray-700"
                    />
                    <input
                      type="text"
                      placeholder="Date"
                      className="outline-none w-full text-gray-700"
                    />
                    <input
                      type="number"
                      placeholder="Traveler"
                      className="outline-none w-20 text-gray-700"
                    />
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
