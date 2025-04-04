import { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";


const features = [
  { title: "Decades of Experience", description: "Over 20 years in the logistics and shipping industry.", icon: <FaCheckCircle /> },
  { title: "Skilled Team", description: "Experienced professionals ensuring international standards.", icon: <FaCheckCircle /> },
  { title: "Comprehensive Coverage", description: "From customs clearance to freight tracking, we handle it all.", icon: <FaCheckCircle /> },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 px-6 md:px-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
        <p className="text-lg text-gray-700">We bring expertise, efficiency, and reliability to international logistics.</p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
          >
            <div className="text-blue-600 text-4xl mb-3">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
