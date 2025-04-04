import { useState, useEffect, useRef } from "react";

const StatsCounter = () => {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    shipments: 0,
    clients: 0,
    experience: 0,
    partners: 0,
  });

  // Function to animate the count
  const animateCount = (target, key) => {
    let start = 0;
    const end = target;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 20); // Frame rate adjustment

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCounts((prev) => ({ ...prev, [key]: end }));
        clearInterval(counter);
      } else {
        setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }
    }, 20);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateCount(1500, "shipments");
      animateCount(500, "clients");
      animateCount(10, "experience");
      animateCount(200, "partners");
    }
  }, [isVisible]);

  return (
    <section ref={statsRef} className="py-22 px-12 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold text-white mb-8">Our Impact in Figures</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <StatCard value={counts.shipments} label="Total Shipments" />
        <StatCard value={counts.clients} label="Clients Served" />
        <StatCard value={counts.experience} label="Years of Experience" />
        <StatCard value={counts.partners} label="Global Partners" />
      </div>
    </section>
  );
};

const StatCard = ({ value, label }) => (
  <div className="p-10 bg-gray-800 rounded-lg shadow-lg">
    <h2 className="text-4xl font-bold text-blue-400">{value}+</h2>
    <p className="text-lg">{label}</p>
  </div>
);

export default StatsCounter;
