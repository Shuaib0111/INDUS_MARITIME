import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube 
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Translator from "./Translator";

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const dropdownRef = useRef(null);

  // Visitor Counter Logic (Update only on full page refresh)
  useEffect(() => {
    if (!sessionStorage.getItem("visited")) {
      let count = localStorage.getItem("visitorCount");
      count = count ? parseInt(count) + 1 : 1;
      localStorage.setItem("visitorCount", count);
      sessionStorage.setItem("visited", "true");
    }
    setVisitorCount(localStorage.getItem("visitorCount") || 0);
  }, []);

  return (
    <footer className="relative bg-blue-900 bg-opacity-25 backdrop-blur-2xl text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Indus Maritime Pvt. Ltd.
          </h2>
          <p className="text-sm">
          A premier provider of cargo, logistics, and export-import services, we specialize in delivering efficient, reliable, and cost-effective solutions tailored to meet the dynamic needs of global trade. From seamless freight forwarding and secure transportation to hassle-free customs clearance, we ensure that your goods move smoothly across borders with precision, speed, and compliance.
          </p>
          <div className="mt-6 flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-400 text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-white hover:text-blue-400 text-2xl">
            <FaYoutube />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/video" className="hover:text-blue-400 transition">
                Video
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-400 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/certificate" className="hover:text-blue-400 transition">
                Our Certificate
              </Link>
            </li>
            <li>
              <Link to="/tnc" className="hover:text-blue-400 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Our Services
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Logistics & Transportation
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Freight Forwarding
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Customs Clearance
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition">
                Warehousing & Storage
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Import & Export Services
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
              International Trade Consultancy
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
              Project Cargo Management
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Supply Chain Solutions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Contact Info
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" /> +91 9354739557
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:Sales@indusmaritime.in"
                className="hover:text-blue-400"
              >
                Sales@indusmaritime.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:Sales@indusmaritime.in"
                className="hover:text-blue-400"
              >
                Delhi@indusmaritime.in
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> B-58, Vishwakarma
              Colony, New Delhi - 110044
            </li>
          </ul>

          {/* Webmail Button */}
          <a
            href="mailto:Sales@indusmaritime.in"
            className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Web Mail
          </a>

          
        </div>
      </div>

{/* Language Selector */}
<div className="flex flex-col flex-wrap justify-center items-center gap-8 mt-8 md:flex-row">
  {/* Google Translator */}
  <Translator />

  {/* Visitor Counter */}
  <div className="text-center">
    <h3 className="text-lg font-semibold text-white">Visitors</h3>
    <div className="mt-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-1 rounded-lg shadow-lg inline-block text-xl font-bold tracking-widest">
      {visitorCount}
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
