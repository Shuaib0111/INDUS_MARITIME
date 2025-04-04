import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Your Global Partner in Cargo & Logistics",
    description:
      "Indus Maritime Private Limited has been a trusted name in cargo, logistics, and export-import services since 2000. With decades of experience, we provide seamless shipping, freight forwarding, and customs clearance solutions.",
    buttonText: "Explore Our Services",
  },
  {
    title: "Fast & Reliable Air & Sea Freight Services",
    description:
      "Whether you need fast air cargo delivery or cost-effective sea freight, we ensure smooth transportation with global reach.",
    buttonText: "Get a Quote",
  },
  {
    title: "Safe & Secure Cargo Handling",
    description:
      "Our cargo and international courier services guarantee secure and timely deliveries across the world.",
    buttonText: "Learn More",
  },
  {
    title: "Hassle-Free Customs Clearance",
    description:
      "We simplify the complex customs process, ensuring smooth clearance for imports and exports.",
    buttonText: "Start Your Shipment",
  },
  {
    title: "Complete Logistics & Freight Management",
    description:
      "From end-to-end logistics management to seamless freight forwarding, we handle it all with precision and efficiency.",
    buttonText: "Track Shipment",
  },
];

const Slider = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/background.jpg')`,
        }}
      ></div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="relative w-full h-full flex items-center justify-center"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-6">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <a
                href="#"
                className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 text-lg rounded-md"
              >
                {slide.buttonText}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
