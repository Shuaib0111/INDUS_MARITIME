import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaPhoneAlt, FaEnvelope, FaCheckCircle, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png"; 

const navItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Gallery", link: "/gallery" },
  { title: "Video", link: "/video" },
  { title: "Contact Us", link: "/contact" },
  { title: "Our Certificate", link: "/certificate" }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="md:fixed top-0 left-0 w-full z-50">
        
        <div className="bg-[#1C398E] text-white text-sm py-2">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6 gap-2 md:gap-0 text-center md:text-left">

            
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <span className="flex items-center gap-2">
                <FaPhoneAlt className="text-lg text-white" /> +91 9354739557
              </span>
              <a href="mailto:anvikalogistics@gmail.com" className="flex items-center gap-2 hover:text-gray-300 transition duration-300">
  <FaEnvelope className="text-lg text-white" /> Sales@indusmaritime.in
</a>

            </div>

            
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-6">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-lg text-white" /> GST No. 07AZYPM5473E2ZQ
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-lg text-white" /> UDYAM 03-0022558
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-lg text-white hover:text-gray-300 transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-lg text-white hover:text-gray-300 transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-lg text-white hover:text-gray-300 transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-lg text-white hover:text-gray-300 transition duration-300" />
              </a>
            </div>

          </div>
        </div>

        <div className={`${scrolled ? "bg-white shadow-md" : "bg-white"} transition-all duration-300`}>
          <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
            
            
            <img src={logo} alt="Company Logo" className="h-[80px] w-auto max-w-[220px]" />

            <ul className="hidden md:flex gap-8 items-center text-lg font-semibold transition-all duration-300">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                  <li key={index} className="relative">
                    <a
                      href={item.link}
                      className={`px-3 py-2 transition duration-300 relative 
                        ${scrolled ? "text-[#0d475d]" : "text-blue"} 
                        hover:text-blue-900
                        ${isActive ? "border-b-2 border-blue-900" : ""}
                        ${!isActive ? "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-blue-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300" : ""}`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              className={`md:hidden text-3xl transition-all duration-300 ${scrolled ? "text-[#0d475d]" : "text-black"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col text-lg text-[#0d475d]">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.link;
                return (
                  <li key={index} className="border-b border-gray-300">
                    <a
                      href={item.link}
                      className={`block px-6 py-3 hover:text-blue-600 transition relative 
                        ${isActive ? "border-b-2 border-blue-900" : ""}
                        ${!isActive ? "after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-blue-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300" : ""}`}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>

      <div className="h-[40px] md:h-[120px]"></div>
    </>
  );
};

export default Navbar;
