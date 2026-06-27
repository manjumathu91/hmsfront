import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import beach from "../assets/hero/beach.jpg";
import city from "../assets/hero/city.jpg";
import family from "../assets/hero/family.jpg";
import mountain from "../assets/hero/mountain.jpg";

export default function HeroSection() {
  const heroImages = [
    {
      image: beach,
      title: "Experience Luxury Stays",
      subtitle: "Discover premium resorts and unforgettable getaways",
    },
    {
      image: city,
      title: "Explore Vibrant Cities",
      subtitle: "Stay close to top attractions and city life",
    },
    {
      image: mountain,
      title: "Escape To Nature",
      subtitle: "Relax in breathtaking mountain resorts",
    },
    {
      image: family,
      title: "Perfect Family Vacations",
      subtitle: "Create beautiful memories with your loved ones",
    },
  ];

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-full"
      >
        {heroImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[650px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                  {slide.title}
                </h1>

                <p className="text-lg md:text-xl">
                  {slide.subtitle}
                </p>

                <Link to="/resorts">
                  <button className="mt-6 bg-gradient-to-r from-blue-600  cursor-pointer to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
                    Explore Resorts
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}