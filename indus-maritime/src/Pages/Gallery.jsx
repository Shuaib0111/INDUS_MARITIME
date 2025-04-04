import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaShippingFast, FaPlane, FaShip, FaBoxOpen, FaFileInvoice, FaGlobe } from "react-icons/fa";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";
import { Link } from "react-router-dom";

const images = [
  { src: gallery2, title: "International Freight", desc: "Reliable cargo handling for global shipping.", icon: <FaShippingFast /> },
  { src: gallery3, title: "Air Freight Services", desc: "Fast & secure air transport solutions.", icon: <FaPlane /> },
  { src: gallery1, title: "Sea Cargo & Logistics", desc: "Cost-effective sea freight management.", icon: <FaShip /> },
  { src: gallery4, title: "Customs Clearance", desc: "Expertise in import-export clearance.", icon: <FaBoxOpen /> },
  { src: gallery5, title: "Export & Import Services", desc: "Streamlined trade solutions worldwide.", icon: <FaFileInvoice /> },
  { src: gallery6, title: "Global Connectivity", desc: "Seamless logistics for international markets.", icon: <FaGlobe /> }
];

const Gallery = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    gsap.from(galleryRef.current.children, {
      opacity: 1,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
    <div className=" sm:bg-white md:bg-gray-100 lg:bg-gray-100 xl:bg-gray-100 min-h-screen sm:py-4 md:py-12 lg:py-16 xl:py-16 pb-2 px-4 sm:px-6 lg:px-12">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">Our Gallery</h2>

      <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
        {images.map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group w-full h-[75vh]">
            <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300">
              <div className="text-5xl text-white mb-3">{img.icon}</div>
              <h3 className="text-xl font-semibold text-white">{img.title}</h3>
              <p className="text-white text-sm mt-2">{img.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Let's Work Together</h2>
        <p className="mt-4 text-lg text-gray-700">Get in touch with us today for reliable logistics solutions.</p>
        <Link to="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
          Contact Us
        </Link>
      </div>

      
      
    </div>
    </>
  );
};

export default Gallery;
