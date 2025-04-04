import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaPhone, FaRegCommentDots } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import contactBg from "../assets/contact-bg.jpg"; 
import WhyChooseUs from "../Components/WhyChooseUs";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSuccessMessage("❌ Please fill out all fields before submitting.");
      return;
    }

    setSuccessMessage("✅ Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <>
      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-6 sm:py-4 md:py-12 lg:py-16 xl:py-16">
        <div className="max-w-6xl w-full bg-white shadow-2xl rounded-lg flex flex-col md:flex-row overflow-hidden">
          
          <div
            className="md:w-1/2 h-96 md:h-auto bg-cover bg-center"
            style={{ backgroundImage: `url(${contactBg})` }}
          ></div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 p-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-6">
              We'd love to hear from you. Fill out the form below and we'll get back to you soon.
            </p>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <FaPhone className="absolute left-4 top-4 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <FaRegCommentDots className="absolute left-4 top-4 text-gray-500" />
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Your Message"
                  className="w-full pl-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition outline-none resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition hover:bg-blue-700 shadow-lg cursor-pointer"
              >
                Send Message
              </button>
            </form>

            {/* Success Message */}
            {successMessage && (
              <div
                className={`mt-6 text-center py-3 px-4 rounded-lg text-lg font-semibold ${
                  successMessage.startsWith("✅")
                    ? "bg-green-100 text-green-700 border border-green-500"
                    : "bg-red-100 text-red-700 border border-red-500"
                }`}
              >
                {successMessage}
              </div>
            )}
          </div>
        </div>
      </section>
            <WhyChooseUs></WhyChooseUs>
      {/* Google Map Section */}
      <section className="w-full h-96 py-4">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95373631531692!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f7f4af5b%3A0xb5a6e8ef78e48b8d!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1614327676984!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>

    </>
  );
};

export default ContactPage;
