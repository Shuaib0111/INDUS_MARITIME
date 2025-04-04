import { useEffect, useState } from "react";
import gsap from "gsap";
import logo from "../assets/logo.png";

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    console.log("onComplete prop:", onComplete); // Debugging

    // GSAP animation for logo
    gsap.fromTo(
      ".logo",
      { opacity: 0, scale: 0.5, rotation: -45 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
      }
    );

    // GSAP animation for loader container fade-in and scale
    gsap.fromTo(
      ".loader",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.5,
      }
    );

    // Hide loader after 3 seconds
    setTimeout(() => {
      gsap.to(".loader", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          setIsVisible(false);
          if (typeof onComplete === "function") {
            onComplete(); // Call only if it's a function
          }
        },
      });
    }, 2500);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="loader fixed inset-0 flex justify-center items-center bg-white z-50">
      <img
        src={logo}
        alt="Logo"
        className="logo w-24 sm:w-44 md:w-40 lg:w-48 xl:w-56 h-auto"
      />
    </div>
  );
};

export default Loader;
