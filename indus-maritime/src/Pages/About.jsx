import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aboutImage from "../assets/about.jpg";
import { FaUsers, FaProjectDiagram, FaCalendarAlt, FaLightbulb, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import WhyChooseUs from "../Components/WhyChooseUs";
import StatsCounter from "../Components/StatsCounter";

const stats = [
  { icon: <FaUsers className="text-5xl text-white" />, label: "Happy Clients", value: "10,000+" },
  { icon: <FaProjectDiagram className="text-5xl text-white" />, label: "Projects Completed", value: "500+" },
  { icon: <FaCalendarAlt className="text-5xl text-white" />, label: "Years in Business", value: "15+" },
  { icon: <FaLightbulb className="text-5xl text-white" />, label: "Innovative Solutions", value: "200+" },
];

const teamMembers = [
  { 
    icon: <FaUsers className="text-6xl text-white" />, 
    name: "John Doe", 
    role: "Lead Developer",
    description: "An expert in full-stack development with 10+ years of experience in building scalable applications."
  },
  { 
    icon: <FaUsers className="text-6xl text-white" />, 
    name: "Jane Smith", 
    role: "Cybersecurity Expert",
    description: "Passionate about protecting digital assets, she specializes in ethical hacking and data security."
  },
  { 
    icon: <FaUsers className="text-6xl text-white" />, 
    name: "Robert Wilson", 
    role: "Cloud Architect",
    description: "Expert in cloud computing solutions, ensuring businesses have secure and scalable infrastructure."
  },
  { 
    icon: <FaUsers className="text-6xl text-white" />, 
    name: "Sophia Martinez", 
    role: "Data Scientist",
    description: "Works with AI and machine learning to provide data-driven insights for business intelligence."
  },
  { 
    icon: <FaUsers className="text-6xl text-white" />, 
    name: "Daniel Anderson", 
    role: "Software Engineer",
    description: "Passionate about writing clean and efficient code, contributing to innovative software solutions."
  },
  { 
    icon: <FaUsers className="text-6xl text-white" />, 
    name: "Olivia Brown", 
    role: "Project Manager",
    description: "Ensures smooth project execution by managing timelines, resources, and client expectations."
  }
];

// Custom Arrows
const CustomPrevArrow = ({ onClick }) => (
  <button
    className="hidden md:block absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="hidden md:block absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-500 transition z-10 cursor-pointer"
    onClick={onClick}
  >
    <FaChevronRight size={20} />
  </button>
);


const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};


const About = () => {
  return (
    <>
    <div className="w-full overflow-hidden bg-white md:bg-gray-100 text-black">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-4 md:py-12 lg:py-16 xl:py-16 flex flex-col md:flex-row items-center gap-8 mt-0">
        <div className="w-full md:w-1/2">
          <img src={aboutImage} alt="About Us" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are?</h2>
          <p className="mt-4 text-lg text-gray-700">
            We are a leading company dedicated to delivering innovative solutions. With years of experience,
            we have built a reputation for excellence and reliability in our industry.
          </p>
          <div className="mt-6 flex items-center gap-6">
            <FaUsers className="text-4xl text-blue-600" />
            <p className="text-gray-800 text-lg">Trusted by thousands of clients worldwide.</p>
          </div>
          <Link to='/tnc'><button className="cursor-pointer mt-6 px-6 py-3 mb-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300">
            Learn More
          </button></Link>
        </div>
      </div>

      {/* Statistics Section */}
      <StatsCounter />

      {/* Vision and Mission Section  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center">Our Vision & Mission</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-center text-2xl font-semibold text-gray-900">Our Vision</h3>
            <p className="mt-4 text-gray-700">
            We aim to revolutionize the logistics and freight forwarding industry by continuously innovating, adapting to emerging technologies, and delivering top-tier services to our clients.
            <br /><br />
            Our commitment to excellence drives us to enhance efficiency, optimize supply chain solutions, and ensure seamless international trade operations.
            
            </p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-center text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-700">
            Our mission is to empower businesses by leveraging cutting-edge technology that enhances operational efficiency, optimizes logistics, and drives long-term success.
            <br /><br />
            We are committed to delivering seamless, innovative, and customized solutions that cater to the evolving needs of our clients, ensuring smooth global trade and supply chain management.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="relative w-full">
            <Slider {...sliderSettings}>
              {teamMembers.map((member, index) => (
                <div key={index} className="flex justify-center">
                  <div className="w-80 p-6 text-center bg-gray-800 rounded-lg shadow-lg mx-auto transform hover:scale-105 transition-all duration-300">
                    <div className="flex justify-center mb-4">{member.icon}</div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-300">{member.role}</p>
                    <p className="mt-2 text-gray-400 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <WhyChooseUs />
    </>
  );
};

export default About;
