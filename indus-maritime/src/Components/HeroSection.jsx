import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import bgImage from "../assets/background.jpg";

const slides = [
  {
    title: "Welcome to Indus Maritime Pvt. Ltd.",
    description:
      "Your trusted partner in cargo, logistics, and international trade solutions since 2000. Delivering efficiency and excellence across the globe.",
  },
  {
    title: "Logistics Services",
    description:
      "We provide end-to-end logistics solutions, ensuring smooth cargo movement with efficiency and reliability.",
  },
  {
    title: "International Transporters",
    description:
      "Seamless international transportation services connecting businesses across borders with ease.",
  },
  {
    title: "Transport Contractors",
    description:
      "Efficient and secure transport contracting services to move your cargo safely to its destination.",
  },
  {
    title: "Freight Forwarding",
    description:
      "Comprehensive freight forwarding solutions tailored to meet your business needs worldwide.",
  },
  {
    title: "Warehouse Services",
    description:
      "State-of-the-art warehousing facilities to store and manage your cargo effectively.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center text-white">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {!isSmallScreen && (
        <>
          <button
            onClick={prevSlide}
            className="cursor-pointer absolute left-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 transition duration-300 shadow-lg z-20"
          >
            <FaChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="cursor-pointer absolute right-8 top-1/2 transform -translate-y-1/2 p-4 rounded-full bg-black/50 hover:bg-black/70 transition duration-300 shadow-lg z-20"
          >
            <FaChevronRight size={24} />
          </button>
        </>
      )}

      {/* Slide Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div
          className={`p-8 rounded-lg shadow-lg w-full min-h-[200px] flex flex-col justify-center transition-all duration-500 bg-black/60 backdrop-blur-md border border-gray-500 ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            {slides[currentSlide].description}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-12 w-full max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-4 py-3 rounded-lg text-gray-800 bg-gray-100 shadow-md focus:outline-none"
          />
          <button className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-900">
            <FiSearch size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
