import About from "../Components/About";
import Contact from "../Components/Contact";
import HeroSection from "../Components/HeroSection";
import Services from "../Components/Services";
import StatsCounter from "../Components/StatsCounter";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";


const Home = () => {
  return (
    <div className="w-full">
      
      <HeroSection />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <StatsCounter />
      <Contact />
    </div>
  );
};

export default Home;
