import { FaShippingFast, FaGlobe, FaIndustry, FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-6 flex justify-center items-center gap-2">
          <FaGlobe className="text-blue-600" /> About Indus Maritime Pvt. Ltd.
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Indus Maritime Private Limited is a premier provider of **cargo, logistics, and export-import** services, operating with excellence since **2000**. We ensure seamless **freight forwarding, transport, warehousing, and customs clearance** for businesses worldwide.
        </p>

        {/* Key Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {/* Experience */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaIndustry className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">20+ Years Experience</h3>
            <p className="text-gray-600 text-sm text-center">
              A trusted name in **logistics & shipping** since 2000.
            </p>
          </div>

          {/* Wide Range of Services */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaShippingFast className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Comprehensive Solutions</h3>
            <p className="text-gray-600 text-sm text-center">
              From **custom clearance** to **freight forwarding & warehousing**.
            </p>
          </div>

          {/* Global Reach */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaGlobe className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Global Reach</h3>
            <p className="text-gray-600 text-sm text-center">
              Serving clients across **Delhi, Noida, Gujarat & international markets**.
            </p>
          </div>

          {/* Leadership */}
          <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center transition-transform transform hover:scale-105">
            <FaUserTie className="text-blue-600 text-5xl mb-3" />
            <h3 className="text-xl font-semibold text-gray-800">Strong Leadership</h3>
            <p className="text-gray-600 text-sm text-center">
              Led by **Amarendra Kumar Jha**, ensuring industry-leading expertise.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="mt-10">
          <Link
            to={'/about'}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold transition-all hover:bg-blue-700 shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
