import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
       
        <h2 className="text-4xl font-bold text-gray-800 mb-12 uppercase tracking-wide">
          Get in Touch with Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">

          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaMapMarkerAlt className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Office Address</h3>
            <p className="text-gray-600 text-sm text-center">
              B-58, Upper Ground Floor, Flat No. 103, Block A, Vishwakarma Colony, Pul Pehlad Pur, <br /> New Delhi - 110044, India.
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaPhone className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600 text-sm text-center">
              <a href="tel:+919354739557" className="hover:text-blue-600 transition-all">+91 9354739557</a>
            </p>
          </div>

          {/* Emails */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaEnvelope className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600 text-sm text-center">
              <a href="mailto:Delhi@indusmaritime.in" className="hover:text-blue-600 transition-all">Delhi@indusmaritime.in</a><br />
              <a href="mailto:Sales@indusmaritime.in" className="hover:text-blue-600 transition-all">Sales@indusmaritime.in</a><br />
              <a href="mailto:Indusmaritime1@gmail.com" className="hover:text-blue-600 transition-all">Indusmaritime1@gmail.com</a>
            </p>
          </div>
        </div>
        
        <p className="text-lg text-gray-700 mt-12 leading-relaxed max-w-3xl mx-auto italic">
          "With a commitment to quality and timely service, Indus Maritime Private Limited is dedicated to helping clients navigate international trade and shipping with ease, enabling seamless business operations and global reach."
        </p>

        <div className="mt-10">
        <Link
             to="/contact"
                 className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-blue-700 shadow-md"
        >   
  Contact Us
</Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
