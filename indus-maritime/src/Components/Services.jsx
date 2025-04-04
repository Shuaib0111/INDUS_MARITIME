import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaShippingFast, FaPlane, FaWarehouse, FaBoxOpen, FaTruck, FaGlobe, FaFileInvoiceDollar, FaCubes, FaFileContract, FaBoxes, FaIndustry } from "react-icons/fa";
import bgImage from "../assets/Services.jpg";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "Cargo & International Courier", icon: <FaShippingFast />, description: "Reliable cargo handling and international courier services for secure, timely deliveries worldwide." },
  { title: "Air & Sea Freight Services", icon: <FaPlane />, description: "Competitive and flexible air and sea freight options tailored to diverse logistical needs." },
  { title: "Custom Clearance & Import/Export", icon: <FaFileInvoiceDollar />, description: "Expert customs clearance services ensuring smooth processing for import and export shipments." },
  { title: "Specialized Services", icon: <FaCubes />, description: "Handling vintage and antique furniture shipping, AD code registration, and export consultancy services." },
  { title: "Logistics & Freight Solutions", icon: <FaTruck />, description: "End-to-end logistics management, cargo agent services, and sea & air freight solutions." },
  { title: "Export Import Code (EIC) Services", icon: <FaFileContract />, description: "Hassle-free EIC registration and consultation for businesses expanding globally." },
  { title: "Warehousing & Storage", icon: <FaWarehouse />, description: "Secure and modern warehousing facilities to optimize supply chain efficiency." },
  { title: "Project Cargo & Heavy Lifting", icon: <FaIndustry />, description: "Specialized solutions for transporting oversized and heavy cargo with precision and care." },
  { title: "Breakbulk & LCL Cargo", icon: <FaBoxes />, description: "Flexible solutions for breakbulk and Less than Container Load (LCL) shipments." }
];

const Services = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    gsap.fromTo(
      cardRefs.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 text-gray-900">
    
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${bgImage})` }}></div>

      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 uppercase tracking-wider text-gray-900">Our Services</h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-white bg-opacity-90 border border-gray-300 p-6 rounded-xl shadow-lg backdrop-blur-lg transition-all transform hover:scale-105 hover:shadow-blue-500/50 hover:border-blue-400 hover:bg-opacity-100 relative overflow-hidden"
            >

              <div className="flex justify-center items-center mb-4">
                <div className="text-5xl text-blue-500 p-4 rounded-full border border-blue-600 shadow-lg bg-white/10">{service.icon}</div>
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>

              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-blue-500/10 blur-xl rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
