import { useEffect, useRef } from "react";
import { FaUserCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { name: "Amit Sharma", designation: "Business Owner", feedback: "Indus Maritime Pvt. Ltd. provided exceptional logistics solutions. Timely deliveries and seamless custom clearance!", rating: 5 },
  { name: "Sophia Lewis", designation: "E-commerce Manager", feedback: "Highly reliable freight services! Their air and sea cargo handling is top-notch. Will definitely use their services again.", rating: 5 },
  { name: "Rajesh Verma", designation: "Operations Head", feedback: "Professional and efficient service. Our export process was handled smoothly. Highly recommended!", rating: 4.5 },
  { name: "Priya Kapoor", designation: "Supply Chain Manager", feedback: "Their warehousing and storage solutions helped us streamline our supply chain. Excellent service!", rating: 5 },
  { name: "Michael Johnson", designation: "International Trade Specialist", feedback: "Their expertise in international freight forwarding saved us significant time and costs. Fantastic team!", rating: 5 },
  { name: "Neha Gupta", designation: "Export Manager", feedback: "From AD code registration to warehousing, their services are comprehensive and extremely professional!", rating: 4.5 },
  { name: "David Wong", designation: "Logistics Coordinator", feedback: "Handled our project cargo with precision and care. Great communication throughout the process!", rating: 5 },
  { name: "Fatima Ali", designation: "CEO, Global Trade Solutions", feedback: "Efficient and reliable team! Their breakbulk and LCL cargo solutions are top-notch. Highly recommend!", rating: 5 },
  { name: "Rohan Malhotra", designation: "Managing Director", feedback: "A game-changer in logistics. The entire process was seamless, and their team was always ready to assist.", rating: 4.5 },
];

const Testimonials = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 flex justify-center items-center gap-2">
          <FaQuoteLeft className="text-blue-600" /> What Our Clients Say
        </h2>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }} 
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transform transition hover:scale-105 h-72">
                
                  <FaUserCircle className="text-blue-600 text-5xl mb-4" />

                 
                  <p className="text-gray-700 text-sm italic text-center flex-1">
                    "{testimonial.feedback}"
                  </p>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.designation}</p>
                  </div>

                  
                  <div className="flex gap-1 text-yellow-500 mt-3">
                    {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {testimonial.rating % 1 !== 0 && <FaStar className="opacity-50" />}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-4">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
