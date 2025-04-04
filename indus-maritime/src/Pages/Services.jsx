import { FaShippingFast, FaWarehouse, FaFileInvoiceDollar, FaCubes, FaHandHoldingUsd, FaTruckLoading, FaGlobe, FaClipboardList, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimonials from "../Components/Testimonials";

const Services = () => {
  const services = [
    { icon: <FaShippingFast className="text-6xl text-blue-600 mx-auto" />, title: "Freight Forwarding", description: "Reliable air & sea cargo services ensuring smooth global trade." },
    { icon: <FaFileInvoiceDollar className="text-6xl text-blue-600 mx-auto" />, title: "Custom Clearance", description: "Efficient customs handling to ensure hassle-free shipments." },
    { icon: <FaWarehouse className="text-6xl text-blue-600 mx-auto" />, title: "Warehousing & Storage", description: "Safe and secure warehousing solutions for your goods." },
    { icon: <FaClipboardList className="text-6xl text-blue-600 mx-auto" />, title: "AD Code Registration", description: "Get your AD Code registered for seamless export operations." },
    { icon: <FaCubes className="text-6xl text-blue-600 mx-auto" />, title: "Breakbulk & LCL Cargo", description: "Handling large and small cargo with expertise and efficiency." },
    { icon: <FaTruckLoading className="text-6xl text-blue-600 mx-auto" />, title: "Project Cargo Management", description: "End-to-end project cargo handling with logistics planning." },
    { icon: <FaGlobe className="text-6xl text-blue-600 mx-auto" />, title: "Supply Chain Solutions", description: "Optimized supply chain solutions for cost-effective logistics." },
    { icon: <FaHandHoldingUsd className="text-6xl text-blue-600 mx-auto" />, title: "International Trade Consultancy", description: "Expert guidance for smooth international trade processes." },
    { icon: <FaShieldAlt className="text-6xl text-blue-600 mx-auto" />, title: "Cargo Insurance", description: "Secure your shipments with reliable cargo insurance solutions." }, 
  ];

  return (
    <div className="sm:py-4 md:py-12 lg:py-16 xl:py-16 bg-white md:bg-gray-100 text-black">
      <div className="container mx-auto px-6  pb-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-2 text-lg text-gray-700">
          We provide top-notch logistics and trade solutions to help your business thrive.
        </p>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
            {service.icon}
            <h3 className="mt-4 text-2xl font-semibold text-gray-900">{service.title}</h3>
            <p className="mt-2 text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Why Choose Us?</h2>
          <p className="mt-4 text-lg">
            With years of experience and a customer-first approach, we ensure smooth logistics and trade services.
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">✔ Expertise</h3>
              <p className="text-gray-300 mt-2">Years of industry knowledge and global partnerships.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">✔ Reliability</h3>
              <p className="text-gray-300 mt-2">On-time deliveries with exceptional service quality.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">✔ Cost-Effective</h3>
              <p className="text-gray-300 mt-2">Affordable pricing without compromising efficiency.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">✔ 24/7 Support</h3>
              <p className="text-gray-300 mt-2">Dedicated support to assist you anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </div>

        <Testimonials />

      {/* Call to Action Section */}
      <div className="container mx-auto px-6 py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Let's Work Together</h2>
        <p className="mt-4 text-lg text-gray-700">Get in touch with us today for reliable logistics solutions.</p>
        <Link to="/contact" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition">
          Contact Us
        </Link>
      </div>

    </div>
  );
};

export default Services;
